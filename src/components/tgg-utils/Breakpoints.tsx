import React from "react";

const Breakpoints = () => {
  return (
    <div className=" frameMe mt-32  text-slate-200">
      <div className="hidden  h-5 w-[1536px] bg-indigo-800 text-center 2xl:block">2xl: @media (min-width: 1536px)</div>
      <div className="hidden h-5 w-[1280px] bg-indigo-700 text-center xl:block">xl: @media (min-width: 1280px)</div>
      <div className="hidden h-5 w-[1024px] bg-indigo-600 text-center lg:block">lg: @media (min-width: 1024px)</div>
      <div className="hidden h-5 w-[768px] bg-indigo-500 text-center md:block">md: @media (min-width: 768px)</div>
      <div className="hidden h-5 w-[640px] bg-indigo-400 text-center sm:block">sm: @media (min-width: 640px)</div>
      <div className="hidden h-5 w-[375px] bg-indigo-300 text-center xs:block">xs: @media (min-width:375px)</div>
    </div>
  );
};

export default Breakpoints;
