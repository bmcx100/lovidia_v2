import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navlinks from "./Navlinks";

const Header = () => {
  return (
    <div className="mx-auto flex  w-screen min-w-[330px] max-w-[500px] items-center justify-between px-4 pb-2 xs:max-w-[600px] xs:px-6 xs:pt-2 sm:max-w-[700px]  sm:py-6 md:w-full md:max-w-none md:px-12 md:py-6 lg:max-w-[1024px] ">
      <Link href="/">
        <div className="mt-2 flex flex-col items-center justify-start sm:mx-5">
          <div className="relative h-[50px] w-[50px] lg:h-16 lg:w-16">
            <Image
              src="/images/general/logo.svg"
              alt="lovidia logo"
              layout="fill"
              objectFit="cover"
              className="w-100 h-100"
            />
          </div>
          <p className="mt-0 text-center text-lg font-medium">lovidia</p>
        </div>
      </Link>
      <div>
        <Navlinks />
      </div>
    </div>
  );
};

export default Header;
