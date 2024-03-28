import Contact_Form_Control from "@/components/Contact_Form_Control";
import React from "react";
// import { useSearchParams } from "next/navigation";
import Contact_Us from "@/components/Contact_Us";

export default function ContactHome() {
  // const searchParams = useSearchParams();
  // const cleanParam = decodeURIComponent(searchParams.toString());

  // console.log(searchParams.get("type"));

  return (
    <div className="mx-2 mt-3">
      {/* <Contact_Form_Control /> */}
      <Contact_Us />
    </div>
  );
}
