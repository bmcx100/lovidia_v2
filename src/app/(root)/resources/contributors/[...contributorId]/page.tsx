import ContributorCard from "@/components/ContributorCard";
import { ContributorType, ContributorsData } from "@/constants/contributorsData";
import React from "react";

// {params.type}
export default function Contributors({ params }: { params: { contributorId: string[] } }) {
  console.log(params.contributorId[0]);
  return (
    <section className="mx-auto w-screen min-w-[330px] max-w-[1024px] ">
      {ContributorsData.map((contributor) => {
        if (contributor.id === parseInt(params.contributorId[0])) {
          return (
            <div key={contributor.id}>
              <ContributorCard contributor={contributor} />
            </div>
          );
        }
      })}
    </section>
  );
}
