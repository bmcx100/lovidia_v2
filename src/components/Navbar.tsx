"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import React from "react";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "./ui/drawer";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const isDesktop = useMediaQuery("(min-width:768px)");
  return isDesktop ? (
    <div className=" mx-auto flex w-full max-w-[1024px] items-center justify-between px-8 py-3 md:px-12 md:py-6">
      <Link href="/">
        <div className="mt-2 flex flex-col items-center justify-start">
          <Image
            src="/images/general/logo.svg"
            alt="lovidia logo"
            width={60}
            height={60}
          />
          <p className="mt-0 text-center text-lg font-medium">lovidia</p>
        </div>
      </Link>
      <div className="flex items-center gap-x-8 font-medium">
        <Link href="/symptoms">Symptoms</Link>
        <Link href="/helpers">Helpers</Link>
        <Button className="text-base font-medium">
          <Link href="/contact">Tell Us Your Story</Link>
        </Button>
      </div>
    </div>
  ) : (
    <div>
      {/* MOBILE SECTION */}

      <Drawer open={open} onOpenChange={setOpen} direction="right">
        <DrawerTrigger className="mx-auto flex w-screen min-w-[330px] max-w-[500px] items-center justify-between px-4 pb-2 xs:max-w-[600px] xs:px-6 xs:pt-2 sm:max-w-[700px] sm:py-6">
          <Link href="/">
            <div className="mt-4 flex flex-col items-center justify-center">
              <Image
                src="/images/general/logo.svg"
                alt="lovidia logo"
                width={40}
                height={40}
                className="sm:h-16 sm:w-16"
              />
              <p className="text-medium mt-0 text-center text-lg">lovidia</p>
            </div>
          </Link>
          <MenuIcon className="h-8 w-8 sm:h-12 sm:w-12 sm:opacity-90" />
        </DrawerTrigger>
        <DrawerContent>
          <div className="ml-4 mt-10 flex flex-col gap-5 text-lg">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/symptoms" onClick={() => setOpen(false)}>
              Symptoms
            </Link>

            <Link href="/helpers" onClick={() => setOpen(false)}>
              Helpers
            </Link>
            <div className="-mt-4 ml-4  flex flex-col">
              <Link href="/recipes" onClick={() => setOpen(false)}>
                Recipes
              </Link>
              <Link href="/news" onClick={() => setOpen(false)}>
                In the News
              </Link>
            </div>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
            <div className="-mt-4 ml-4 flex flex-col ">
              <Link href="/constact/share" onClick={() => setOpen(false)}>
                Share your experience
              </Link>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
