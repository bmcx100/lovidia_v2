import BreakpointIdentifier from "@/components/tgg-utils/tggBreakpointNames";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breakpoints from "@/components/tgg-utils/tggBreakpointBars";
import Divider from "@/components/Divider";

export default function Resources() {
  return (
    <section className="mx-0 mt-2 min-w-[330px] sm:mt-6">
      <div className="mx-auto my-0 w-full max-w-[1024px] bg-brandSecondary ">
        <h2 className="mx-5 my-0  py-2 text-3xl capitalize md:pl-20 md:text-5xl"> About&nbsp;Us</h2>
      </div>
      {/* <h2 className="mx-auto my-3 w-full rounded-sm bg-brandSecondary px-5 py-2 text-center text-4xl font-medium lg:my-8 lg:text-5xl">
        Our Resources
      </h2> */}
      <div className="mx-auto mt-0 flex max-w-[1024px] flex-col gap-5 text-lg lg:mt-10">
        <div className="mx-auto gap-5 lg:flex">
          <div className="mx-auto h-[220px] w-auto overflow-clip lg:h-[330px]">
            <Image
              src={`/images/about/team1.webp`}
              alt={`Image of a team working in an office`}
              width={549}
              height={330}
              className="mt-4"
            />
          </div>

          <div className="mt-3 flex max-w-lg flex-col items-start justify-center gap-3 lg:mt-0">
            <h3 className="self-center font-bold uppercase lg:text-3xl">Our Mission</h3>
            <p className="text-sm lg:text-base">
              Lovidia is dedicated to advancing awareness of this debilitating condition, providing a resource to learn
              from each other and the experts. Working together in collaboration will help to improve quality of life
              and can inform key stakeholders of actions needed.
            </p>

            <Link href="/contact" className="mx-auto mt-1 w-3/4 lg:mt-5">
              <Button className="w-full text-base font-bold">Suggestions / Requests?</Button>
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
                src={`/images/about/team2.webp`}
                alt={`Image of a team working in an office`}
                width={549}
                height={330}
                className="mt-4"
              />
            </div>
            <div className="mt-3 flex max-w-lg flex-col items-start justify-center gap-3 lg:mt-0">
              <h3 className="self-center font-bold uppercase lg:text-3xl">Our Objective</h3>
              <p className="text-sm lg:text-base">
                Use this site to keep up to date on the latest news and browse through the gluten free recipes to help
                manage inflammation. As a collective, we will have the power in numbers to advocate to policy makers and
                healthcare professions that ongoing research is needed, now. By sharing our stories of how Long COVID
                has affected our lives and the lives of our families, we can begin&nbsp;to&nbsp;heal.
              </p>

              <Link href="/contact" className="mx-auto mt-1 w-3/4 lg:mt-5">
                <Button className="w-full text-base font-bold">Want To Help?</Button>
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
