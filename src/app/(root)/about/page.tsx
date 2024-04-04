import BreakpointIdentifier from "@/components/tgg-utils/BreakpointIdentifier";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breakpoints from "@/components/tgg-utils/Breakpoints";

export default function Resources() {
  return (
    <section className="mx-0 mt-2 min-w-[330px] sm:mt-6">
      <div className="mx-auto  max-w-[1024px] ">
        <h2 className="-mx-5 mb-3 mt-0  bg-brandSecondary  px-8 py-2 text-3xl capitalize sm:pl-20 sm:text-5xl">
          About&nbsp;Us
        </h2>
      </div>

      <div className="mx-4 mt-0 flex flex-col gap-5 text-lg lg:mt-10">
        <div className="mx-auto gap-5 lg:flex">
          <div className="mx-auto h-[220px] w-auto overflow-clip lg:h-[330px]">
            <Image
              src={`/images/about/team1.png`}
              alt={`Image of a team working in an office`}
              width={549}
              height={330}
              className="mt-4"
            />
          </div>
          <div className="flex max-w-lg flex-col items-start justify-center">
            <h3 className="self-start font-bold uppercase lg:text-3xl">Our Mission</h3>
            <p className=" lg:text-base">
              Lovidia is dedicated to advancing awareness of this debilitating condition, providing a resource to learn
              from each other and the experts. Working together in collaboration will help to improve quality of life
              and can inform key stakeholders of actions needed.
            </p>

            <h3 className="mt-8 self-start font-bold uppercase lg:text-3xl">Our Objective</h3>
            <p className=" lg:text-base">
              Use this site to keep up to date on the latest news and browse through the gluten free recipes to help
              manage inflammation. As a collective, we will have the power in numbers to advocate to policy makers and
              healthcare professions that ongoing research is needed, now. By sharing our stories of how Long COVID has
              affected our lives and the lives of our families, we can begin to heal.
            </p>
            <Link href="/contact" className="mx-auto mt-8 w-3/4 lg:mt-5">
              <Button className="w-full text-base font-bold">Want To Help?</Button>
            </Link>

            <div className="mx-4 mt-0 flex flex-col gap-5 text-lg lg:mt-10">
              <div className="mx-auto gap-5 lg:flex lg:flex-row-reverse">
                <div className="mx-auto h-[220px] w-auto overflow-clip lg:h-[330px]">
                  <Image
                    src={`/images/about/team2.png`}
                    alt={`Image of a team working in an office`}
                    width={549}
                    height={330}
                    className="mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Breakpoints /> */}
      <div className="mt-6"></div>
    </section>
  );
}

{
  /* <h4 className="self-start font-bold">Idea 1</h4>
                            <h4 className="self-start font-bold">Idea 3</h4>
                            <p className="text-sm lg:text-base">
                              Dedicated to advancing the awareness of this debilitating condition, founding members created a platform
                              to help reach a consensus on symptoms and treatments that will make living with long covid better.
                            </p>
                
                            <p className="text-sm lg:text-base">
                              Our team is passionate about making available the most resent news and research being conducted. With
                              everyone working together in collaboration between doctors, researchers and those effected by Long Covid
                              this will lead to a cure.
                            </p>
                
                            <p className="text-sm lg:text-base">
                              {" "}
                              Lovidia was founded on the principles of integrity, excellence, and innovation. We strive to maintain the
                              highest standards of ethical conduct, if you want to become a contributor or have any concerns with the
                              information that is presented, please don&apos;t hesitate to contact us. COVID-19 has affected millions of
                              people around the world, and while many recover quickly, others experience lingering symptoms such as
                              fatigue, shortness of breath, or brain fog that can last for months or years. This condition known as long
                              covid, requires significant resources from public health organizations.
                            </p>
                
                            <p className="text-sm lg:text-base">
                              Media outlets worldwide are beginning to report on the seriousness of this condition as found in the links
                              section. New Biotech companies are launching clinical trials asking for volunteers and the latest can be
                              found in resources page.
                            </p>
                
                            <p className="text-sm lg:text-base">
                              Browse though the recipes to try managing your inflammation with diet and feel free to share any of your
                              own.{" "}
                            </p>
                
                            <p className="text-sm lg:text-base">
                              If you or someone you know is experiencing long COVID symptoms, it&apos;s important to seek medical
                              attention and stay up to date on the latest research. Share your story.
                            </p>
                
                            <Link href="/contact" className="mx-auto mt-1 w-3/4 lg:mt-5">
                              <Button className="w-full text-base font-bold">Want To Help?</Button>
                            </Link>
                
                            <h4 className="self-start font-bold">Idea 5</h4>
                            <p className="text-sm lg:text-base">
                              Lovidia&apos;s Mission is to return all Long COVID afflicted the quality of life we had before the
                              pandemic.
                            </p>
                            <p className="text-sm lg:text-base">
                              We understand that won&apos;t happen until a cure is found and so we will organize our community to help
                              ...
                            </p>
                
                            <p className="text-sm lg:text-base">
                              1. find a cure by holding the governments of our members and those organizations that have received
                              government funding responsible to their commitments.
                            </p>
                            <p className="text-sm lg:text-base">
                              2. all Long COVID afflicted alleviate their symptoms and manage their conditions as much as we possibly
                              can.
                            </p>
                            <Link href="/contact" className="mx-auto mt-1 w-3/4 lg:mt-5">
                              <Button className="w-full text-base font-bold">Want To Help?</Button>
                            </Link>
                          </div>
                        </div> */
}
