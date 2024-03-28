import Image from "next/image";
import React from "react";
import facebook from "/public/images/socials/facebook.svg";
import xtwitter from "/public/images/socials/xtwitter.svg";
import linkedin from "/public/images/socials/linkedin.svg";
import instagram from "/public/images/socials/instagram.svg";

const Footer = () => {
  return (
    <div className="mt-6 min-w-[330px] bg-brandDark pt-4 text-brandLight ">
      <div className="mx-auto max-w-[1024px] ">
        <div className="mx-auto flex max-w-xs justify-between px-12">
          <Image src={facebook} alt="facebook logo" width={40} height={40} />
          <Image src={xtwitter} alt="xtwitter logo" width={40} height={40} />
          <Image src={linkedin} alt="linkedin logo" width={40} height={40} />
          <Image src={instagram} alt="instagram logo" width={40} height={40} />
        </div>

        <p className="mx-auto pb-4 pt-2 text-center text-xs text-brandLight/80">
          Property of The Lovidia Collective LLC. ~ Copyright 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
