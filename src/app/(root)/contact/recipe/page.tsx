import React from "react";
// import { useSearchParams } from "next/navigation";
import Contact_Us_Recipe from "@/components/Contact_Us_Recipe";
import TGGFormControl from "@/components/tgg-utils/tggForm/TGGFormControl";

export default function ContactHome() {
  // const searchParams = useSearchParams();
  // const cleanParam = decodeURIComponent(searchParams.toString());

  // console.log(searchParams.get("type"));

  return (
    <div className="mx-2 mt-2 sm:mt-6 ">
      {/* <Contact_Form_Control /> */}
      <TGGFormControl />
    </div>
  );
}
