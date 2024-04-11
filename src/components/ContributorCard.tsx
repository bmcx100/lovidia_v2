import React from "react";
import Image from "next/image";
import { ContributorType } from "@/constants/contributorsData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Divider from "./Divider";

interface ContributorPropsType {
  contributor: ContributorType;
}

const ContributorCard: React.FC<ContributorPropsType> = ({ contributor }) => {
  return (
    <div>
      <Link href={`/`}>
        <p className="ml-2 text-sm font-bold text-brandLinkBlue">← back to home</p>
      </Link>
      <div className="mt-5 bg-brandDark px-5 py-3">
        <h1 className="text-2xl font-medium text-brandLight/90">{contributor.name}</h1>
      </div>
      <div className="md:flex  md:bg-brandSecondary/20">
        <div className="relative aspect-video w-screen rounded-full md:w-[400px] md:max-w-[600px] lg:h-[300px] lg:w-[300px]">
          <Image
            src={`/images/profiles/${contributor.profilepic}`}
            alt={`Picture of ${contributor.name}`}
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
        </div>
        <div className="mt-5 pl-0 sm:mt-10 md:pl-6">
          <div className="mb-6 mt-1 flex flex-col justify-start gap-0 pl-0 md:gap-5">
            <p className="text-normal px-5">
              <span className=" font-bold md:text-lg">Title:</span> {contributor.title}
            </p>
            <p className="text-normal  px-5">
              <span className=" font-bold md:text-lg">Description:</span> {contributor.description}
            </p>
            <p className="text-normal px-5">
              <span className=" font-bold md:text-lg">Comments:</span> {contributor.comments}
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Divider />
      </div>
      <div className="px-4 sm:pl-12">
        <div className="mb-6 mt-6 pl-0">
          <h3 className="text-xl font-bold tracking-tight">Description:</h3>
          <p className="text-normal mt-2 pl-5">{contributor.description}</p>
        </div>

        <Divider />
        <div className="mb-6 mt-6 pl-0">
          <h3 className="text-xl font-bold capitalize tracking-tight">{`${contributor.name}'s generous contributions include:`}</h3>
          <div className="flex flex-col justify-end">
            {contributor.contributions.map((contribution, index) => {
              return (
                <p key={index} className="text-normal mt-2 pl-5">
                  {contribution}
                </p>
              );
            })}
          </div>
        </div>

        <Divider />
        <div className="mb-0 mt-6 pl-0">
          <h3 className="mb-0 text-xl font-bold tracking-tight">Links:</h3>
          {contributor.links.map((link, index) => (
            <div key={contributor.id} className="px-4 py-3">
              <p className="text-normal mt-1.5 pl-5">{link.title}</p>
              <p className="text-normal mt-1.5 pl-5">{link.description}</p>
              <Link href={link.link} target="_blank">
                <p className="text-normal mt-1.5 pl-5 text-brandLinkBlue">{link.link}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* <contributorCategoryCarousel category={"Salads"} /> */}
    </div>
  );
};

export default ContributorCard;
