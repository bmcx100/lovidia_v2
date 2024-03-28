import BreakpointIdentifier from "@/components/tgg-utils/BreakpointIdentifier";
import React from "react";
import Link from "next/link";
import { SymptomsData } from "@/constants/symptomsData";
import Breakpoints from "@/components/tgg-utils/Breakpoints";

const Symptoms = () => {
  return (
    <section className="mx-auto w-screen min-w-[330px] max-w-[1024px] ">
      <div className="mx-5 mt-4 md:mx-16 lg:mx-16">
        <h2 className="mb-1 text-left text-3xl font-medium lg:text-5xl">Our Symptoms</h2>
        <div className="mx-2 mt-0 space-y-5 md:mx-4 md:mt-8  lg:mx-8 lg:mt-12 ">
          <p className="text-md">
            Understanding Long COVID symptoms can be complex and seem to be ever-changing. This section is dedicated to
            bringing you the latest information to help you stay informed.
          </p>
          <p className="text-md">
            We’re here to provide a space where you can find out what’s new, see how others in our community are
            managing their symptoms, and access resources aimed at making life with Long COVID a bit more bearable.
          </p>
          <p className="text-md">
            We encourage you to explore and share, as every piece of knowledge contributes to our collective
            understanding and support in dealing with Long COVID.
          </p>

          <p className="text-md">Click one of the symptoms below to find detailed information.</p>
        </div>
      </div>

      <h3 className="ml-10 mt-8 text-xl font-bold sm:ml-16 sm:mt-12 md:ml-24 md:mt-16 lg:ml-32 lg:mt-16">
        List of Symptoms
      </h3>
      <div className="mx-16 mt-5 text-brandLinkBlue sm:ml-24 md:ml-32 lg:ml-48">
        <ul>
          {SymptomsData.map((symptom) => (
            <Link
              key={symptom.id}
              href={`/symptoms/${symptom.id.toLowerCase()}`}
              // href={`/symptoms/${symptom.title.toLowerCase().replace(/\s+/g, "")}`}
            >
              <li>{symptom.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Symptoms;
