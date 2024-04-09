import React from "react";

import Divider from "@/components/Divider";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

const completed = () => {
  return (
    <div>
      <div className="mx-2">
        <Card className="mx-auto w-[350px] sm:w-[550px] md:w-[650px] lg:w-[750px]">
          <CardHeader className="m-0 overflow-clip bg-brandSecondary  px-2 pt-6">
            <div className="flex flex-row items-start justify-center">
              <h3 className="self-center font-bold capitalize lg:text-3xl">Thank You</h3>
            </div>
          </CardHeader>
          {/* NOT FIRST PAGE */}
          <CardContent className="mt-5 py-5">
            <div className="mx-auto mt-3 flex max-w-lg flex-col items-center justify-center gap-3 lg:mt-0">
              {/* <div className="mx-auto"> */}
              <p className="text-center text-sm lg:text-base">
                Thank you sharing your experience with us. If you have anything else you would like to share or discuss
                with us please go to our contact form.
              </p>

              <div className=" flex w-full flex-col items-center justify-center">
                <Link href="/contact" className="mx-auto mt-1 block w-full lg:mt-5">
                  <Button className="mx-auto my-5 w-full text-base font-bold">Contact Page</Button>
                </Link>

                <Link href="/" className="mx-auto mt-1 block w-full lg:mt-5">
                  <Button className="mx-auto my-5 w-full text-base font-bold">Home Page</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default completed;
