import BreakpointIdentifier from "@/components/tgg-utils/BreakpointIdentifier";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breakpoints from "@/components/tgg-utils/Breakpoints";
import Divider from "@/components/Divider";

export default function Resources() {
  return (
    <section className="mx-0 mt-2 min-w-[330px] sm:mt-6">
      <div className="mx-auto my-0 w-full max-w-[1024px] bg-brandSecondary ">
        <h2 className="mx-5 my-0  py-2 text-3xl capitalize md:pl-20 md:text-5xl">Our&nbsp;Resources</h2>
      </div>
      {/* <h2 className="mx-auto my-3 w-full rounded-sm bg-brandSecondary px-5 py-2 text-center text-4xl font-medium lg:my-8 lg:text-5xl">
        Our Resources
      </h2> */}
      <div className="mx-auto mt-0 flex max-w-[1024px] flex-col gap-5 text-lg lg:mt-10">
        <div className="mx-auto gap-5 lg:flex">
          <div className="mx-auto h-[220px] w-auto overflow-clip lg:h-[330px]">
            <Image
              src={`/images/resources/cooking.png`}
              alt={`Image of a couple cooking`}
              width={549}
              height={330}
              className="mt-4"
            />
          </div>
          <div className="mt-3 flex max-w-lg flex-col items-start justify-center gap-3 lg:mt-0">
            <h3 className="self-center font-bold uppercase lg:text-3xl">Recipes</h3>
            <p className="text-sm lg:text-base">
              So many of us have seen huge improvements in our symptoms from changing our daily meal plans.
            </p>
            <p className="mt-0 text-sm lg:mt-2 lg:text-base">
              If you haven&apos;t changed your eating habits to see the difference.{" "}
              <span className="font-bold">You Need To Make The Change For&nbsp;1&nbsp;Week.</span>
            </p>

            <Link href="/recipes" className="mx-auto mt-1 w-3/4 lg:mt-5">
              <Button className="w-full text-base font-bold">View Recipes</Button>
            </Link>
          </div>
        </div>
        <div className="mb-6 hidden lg:inline-block">
          <Divider />
        </div>

        <div className="mx-4 mt-0 flex flex-col gap-5 text-lg lg:mt-0">
          <div className="mx-auto gap-5 lg:flex lg:flex-row-reverse">
            <div className="mx-auto h-[220px] w-auto overflow-clip lg:h-[330px]">
              <Image
                src={`/images/resources/news.png`}
                alt={`Image of a couple doing research`}
                width={549}
                height={330}
                className="mt-4"
              />
            </div>
            <div className="mt-3 flex max-w-lg flex-col items-start justify-center gap-3 lg:mt-0">
              <h3 className="self-center font-bold uppercase lg:text-3xl">News</h3>
              <p className="text-sm lg:text-base">
                We want to provide you with easier access to the information you&apos;re looking for on Long&nbsp;COVID.
              </p>
              <p className="mt-0 text-sm lg:mt-2 lg:text-base">
                Too many of us are wasting time looking for the same things.{" "}
                <span className="font-bold">Let&apos;s&nbsp;work&nbsp;together.</span>
              </p>

              <Link href="/news" className="mx-auto mt-1 w-3/4 lg:mt-5">
                <Button className="w-full text-base font-bold">View The News</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <Breakpoints /> */}
      <div className="mt-6"></div>
    </section>
  );
}
