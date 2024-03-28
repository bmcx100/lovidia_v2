"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import "./embla.css";
import SymptomCard from "../SymptomCard";
// import { SymptomDataType } from "@/constants/symptomsData";
import { Button } from "./button";
import Link from "next/link";
import SymptomCarouselCard from "../SymptomCarouselCard";
import { SymptomsData } from "@/constants/symptomsData";

const TWEEN_FACTOR_BASE = 0.35;

const numberWithinRange = (number: number, min: number, max: number): number => Math.min(Math.max(number, min), max);

type SymptomsCardData = {
  title: string;
  url: string;
};

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  symptomsData: SymptomDataType[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { symptomsData, slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi.on("reInit", setTweenNodes).on("reInit", setTweenFactor).on("reInit", tweenScale).on("scroll", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla">
      <div className="embla__viewport mx-auto w-full max-w-[888px] " ref={emblaRef}>
        {/* <div className="embla__viewport mx-auto max-w-[800px]" ref={emblaRef}> */}
        <div className="embla__container ">
          {/* {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))} */}
          {SymptomsData.map((symptom, index) => (
            <div key={symptom.id} className="embla__slide ">
              <SymptomCarouselCard symptom={symptom} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex h-24 flex-col items-center justify-center">
        <div className="mx-auto flex flex-row">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"m-2 h-4 w-4 rounded-full bg-brandDark".concat(
                index === selectedIndex ? "h-4 w-4 rounded-full bg-brandPrimary" : "",
              )}
            />
          ))}
        </div>

        <div className="embla__buttons mt-3">
          <PrevButton
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-brandDark"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            className="ml-3 flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-brandDark"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
