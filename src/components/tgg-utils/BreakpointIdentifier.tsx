import React from "react";

const BreakpointIdentifier = () => {
  return (
    <div className="text-2xl font-black text-orange-600">
      <div className=" inline xs:hidden">default</div>
      <div className=" hidden xs:inline sm:hidden">x-small</div>
      <div className=" hidden sm:inline md:hidden">small</div>
      <div className=" hidden md:inline lg:hidden">medium</div>
      <div className="  hidden lg:inline xl:hidden">large</div>
      <div className="  hidden xl:inline 2xl:hidden">x-large</div>
      <div className="3xl:hidden hidden 2xl:inline">2x-large</div>
      <div className="3xl:inline 4xl:hidden hidden">
        3x-large THEY MADE A 3X!!!!! PogChamp
      </div>
    </div>
  );
};

export default BreakpointIdentifier;
