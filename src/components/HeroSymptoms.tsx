import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import SymptomCard from "./SymptomCard";

import EmblaCarousel from "./ui/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
// import { SymptomsData } from "../constants/symptomsData";
import BreakpointIdentifier from "./tgg-utils/BreakpointIdentifier";
import { SymptomsData } from "@/constants/symptomsData";
import Breakpoints from "./tgg-utils/Breakpoints";

const Symptoms = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className="mx-0 mt-8 min-w-[330px] lg:mt-12">
      <h2 className="my-8  text-center text-3xl font-medium lg:text-4xl">Our Symptoms</h2>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} symptomsData={SymptomsData} />
      <div className="mt-6"></div>
      <Breakpoints />
      <div className="mt-10"></div>
    </section>
  );
};

export default Symptoms;
