"use client";

import { subscribeToNewsletter } from "@/hooks/subscribeToNewsletter";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NewsData } from "@/constants/newsData";
import React, { useState } from "react";
import Link from "next/link";
import Breakpoints from "@/components/tgg-utils/Breakpoints";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const { toast } = useToast();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your subscription logic here
    if (email) {
      console.log("Subscribing with email:", email);
      subscribeToNewsletter(email);
      setEmail("");
      toast({
        title: "Newsletter Sign Up Complete",
        description: "Thank you for signing up. We appreciate your support.",
      });
    }
  };

  return (
    <section className="mx-0 mt-2 min-w-[330px] sm:mt-6">
      <div className="mx-auto my-0 w-full max-w-[1024px] bg-brandSecondary ">
        <h2 className="mx-5 my-0  py-2 text-3xl capitalize md:pl-20 md:text-5xl">In the news</h2>
      </div>
      <div className="mx-0 mt-0 w-full bg-brandPrimary py-6">
        <div className="flex-col items-start justify-start sm:mx-auto sm:max-w-[600px] ">
          <h3 className="ml-5 mt-0 pb-0 text-lg font-bold capitalize sm:ml-10 sm:mt-3 sm:text-2xl lg:ml-0 lg:mt-3">
            Sign Up for our Newsletter.
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mx-5 my-5 flex justify-between rounded-full  bg-white py-2 pl-2  pr-3 focus:outline-none">
              <input
                type="email"
                name="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email address"
                className="w-full rounded-l-full px-3 py-2 focus:border-white focus:outline-none active:bg-white"
              />
              <Button type="submit" className="-ml-12 px-6 sm:px-8">
                Subscribe
              </Button>
            </div>
          </form>

          <p className=" ml-4 mr-2 mt-2  max-w-[420px] leading-normal sm:ml-10 sm:mt-5 md:max-w-[400px] lg:ml-0 lg:mt-0 lg:max-w-[400px]">
            Receive your news updates via email and be a number to{" "}
            <span className="text-lg font-bold"> help us affect change</span>.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full  max-w-[1024px] ">
        <div className="">
          {NewsData.map((article) => {
            if (article.isFeatured) {
              return (
                <div key={article.id} className=" bg-grid-2 p-5 shadow-sm">
                  <div className="items-start justify-start gap-x-3 gap-y-5 md:flex">
                    <div className="relative mx-auto aspect-video max-h-[200px] w-full md:mx-0 md:aspect-square md:w-[300px] lg:max-h-[300px]">
                      <Image
                        src={`/images/news/${article.image}`}
                        alt="article's image"
                        // layout="fill"
                        fill
                        objectFit="contain"
                        // className=`{${article.imageW} ${article.imageH}}`
                        className="h-full w-full"
                      />
                    </div>
                    <div className=" max-w-[550px] lg:max-w-[650px]">
                      <div className="hidden  flex-col justify-start gap-3 md:flex">
                        <h3 className="mt-1 font-bold md:text-xl lg:mt-6 lg:text-2xl">{article.headline}</h3>
                        <Link href={article.link} target="_blank">
                          <p className="mt-1 w-full overflow-clip text-nowrap text-sm font-medium text-brandLinkBlue lg:mt-3">
                            {article.link}
                          </p>
                        </Link>
                      </div>
                      <div className="mt-1 flex justify-between text-sm md:flex-col md:items-start md:justify-start md:text-base">
                        <p className="uppercase md:my-0">
                          <span className="hidden font-bold capitalize md:my-0 md:inline">Source: </span>
                          {article.source}
                        </p>
                        <p className="md:my-0">
                          <span className="hidden font-bold capitalize md:inline">Date: </span>
                          {article.date}
                        </p>

                        <p className="hidden capitalize md:my-0 md:inline">
                          <span className="font-bold">Written By: </span>
                          {article.author}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden justify-center lg:flex">
                    <p className="px-8">{article.description}</p>
                  </div>
                  <div className="md:hidden">
                    <h3 className="mt-1 font-bold">{article.headline}</h3>
                    <p className="hidden">{article.description}</p>
                    <Link href={article.link} target="_blank">
                      <p className="mt-1 w-full overflow-clip text-nowrap text-sm font-medium text-brandLinkBlue">
                        {article.link}
                      </p>
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="">
          {NewsData.map((article, index) => {
            if (!article.isFeatured && index < 10) {
              return (
                <div key={article.id} className={`p-4  shadow-sm ${index % 2 === 0 ? "bg-grid-1/20" : "bg-grid-2"}`}>
                  <div className="">
                    <div>
                      <div className="mt-1 flex justify-between text-sm">
                        <p className="uppercase">{article.source}</p>
                        <p>{article.date}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mt-1 font-bold lg:text-xl">{article.headline}</h3>
                    <Link href={article.link} target="_blank">
                      <p className="mt-1 w-full overflow-clip text-nowrap text-sm font-medium text-brandLinkBlue">
                        {article.link}
                      </p>
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="mx-12 hidden flex-col justify-between gap-x-3 gap-y-5 lg:flex">
          {NewsData.map((article, index) => {
            if (index < 10 && !article.isFeatured) {
              return (
                <div key={article.id}>
                  <p>{article.headline}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
