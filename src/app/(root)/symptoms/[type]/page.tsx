"use client";

// import { SymptomsData } from "@/constants/symptomsData";
import React from "react";
import Link from "next/link";
import SymptomCard from "@/components/SymptomCard";
import { SymptomsData } from "../../../../constants/symptomsData";
import Breakpoints from "@/components/tgg-utils/Breakpoints";

export default function SymptomsDetails({ params }: { params: { type: string } }) {
  const cleanParam = decodeURIComponent(params.type);

  return (
    <section className="w-screen min-w-[330px]">
      {/* <Breakpoints /> */}
      <div className=" mx-auto max-w-[1024px]">
        <div className="mx-5 mt-0 self-start">
          <Link href="/symptoms">
            <p className="text-xs font-bold text-brandLinkBlue sm:text-sm md:ml-4 lg:ml-8">
              ← back to list of symptoms
            </p>
          </Link>
        </div>
      </div>
      {SymptomsData.map((symptom) => {
        // console.log("symptomData",symptom.title)
        return (
          <div key={symptom.title}>
            {symptom.id.toLowerCase() === cleanParam && <SymptomCard key={symptom.id} symptom={symptom} />}
          </div>
        );
      })}
    </section>
  );
}
