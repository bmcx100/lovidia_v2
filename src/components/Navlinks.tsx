"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import React from "react";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "./ui/drawer";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { navCategories } from "@/constants/navCategoriesData";
import Navlink from "./Navlink";
import { usePathname } from "next/navigation";
import Divider from "./Divider";

const Navlinks = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    const strippedPath = path?.split("/").pop();
    return pathname?.split("/").pop() === strippedPath;
  };

  const [open, setOpen] = React.useState(false);

  const isDesktop = useMediaQuery("(min-width:768px)");

  return isDesktop ? (
    <nav className="flex justify-between">
      {navCategories.map((navCategory) => {
        if (navCategory.isDesktop) {
          return (
            <Navlink
              key={navCategory.name}
              name={navCategory.name}
              path={navCategory.path}
              isActive={isActive(navCategory.path)}
            />
          );
        }
      })}
    </nav>
  ) : (
    <nav>
      <Drawer open={open} onOpenChange={setOpen} direction="right">
        {/* <DrawerTrigger className="mx-auto flex w-screen min-w-[330px] max-w-[500px] items-center justify-between px-4 pb-2 xs:max-w-[600px] xs:px-6 xs:pt-2 sm:max-w-[700px] sm:py-6"> */}
        <DrawerTrigger className="flex justify-end">
          <MenuIcon className="h-8 w-8 sm:h-12 sm:w-12 sm:opacity-90" />
        </DrawerTrigger>
        <DrawerContent>
          <div className="ml-4 mt-10 flex flex-col gap-0 text-lg">
            <Link href="/" onClick={() => setOpen(false)}>
              <div className="my-2 flex flex-col items-center justify-start">
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
            <Divider />
            {navCategories.map((navCategory) => {
              if (navCategory.isDesktop && navCategory.isMobile) {
                return (
                  <div key={navCategory.name} className="ml-0 mt-10">
                    <Navlink
                      key={navCategory.name}
                      name={navCategory.name}
                      path={navCategory.path}
                      isActive={isActive(navCategory.path)}
                      onClick={() => setOpen(false)}
                    />
                  </div>
                );
              } else if (!navCategory.isDesktop && navCategory.isMobile) {
                return (
                  <div key={navCategory.name} className="ml-6 mt-2 text-nowrap">
                    <Navlink
                      key={navCategory.name}
                      name={navCategory.name}
                      path={navCategory.path}
                      isActive={isActive(navCategory.path)}
                      onClick={() => setOpen(false)}
                    />
                  </div>
                );
              }
            })}
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};
//       {/* MOBILE SECTION */}
//       <Drawer open={open} onOpenChange={setOpen} direction="right">
//         <DrawerTrigger className="mx-auto flex w-screen min-w-[330px] max-w-[500px] items-center justify-between px-4 pb-2 xs:max-w-[600px] xs:px-6 xs:pt-2 sm:max-w-[700px] sm:py-6">
//           <MenuIcon className="h-8 w-8 sm:h-12 sm:w-12 sm:opacity-90" />
//         </DrawerTrigger>
//         <DrawerContent>
//           <div className="ml-4 mt-10 flex flex-col gap-5 text-lg">
//             <Link href="/" onClick={() => setOpen(false)}>
//               Home
//             </Link>
//             <Link href="/symptoms" onClick={() => setOpen(false)}>
//               Symptoms
//             </Link>

//             <Link href="/helpers" onClick={() => setOpen(false)}>
//               Helpers
//             </Link>
//             <div className="-mt-4 ml-4  flex flex-col">
//               <Link href="/recipes" onClick={() => setOpen(false)}>
//                 Recipes
//               </Link>
//               <Link href="/news" onClick={() => setOpen(false)}>
//                 In the News
//               </Link>
//             </div>
//             <Link href="/contact" onClick={() => setOpen(false)}>
//               Contact Us
//             </Link>
//             <div className="-mt-4 ml-4 flex flex-col ">
//               <Link href="/constact/share" onClick={() => setOpen(false)}>
//                 Share your experience
//               </Link>
//             </div>
//           </div>
//         </DrawerContent>
//       </Drawer>
//     </div>
//   );
// };

export default Navlinks;
//
//
//
//
//
//
//       <HoverCard>
//         <HoverCardTrigger>Hover</HoverCardTrigger>
//         <HoverCardContent>
//           <Link href="/">Home</Link>

//           <Link href="/helpers">Helpers</Link>
//         </HoverCardContent>
//       </HoverCard>
//
//
//
//
//
//
//
//

// return isDesktop ? (
//   <div className=" mx-auto flex w-full max-w-[1024px] items-center justify-between px-8 py-3 md:px-12 md:py-6">
//     <Link href="/">
//       <div className="mt-2 flex flex-col items-center justify-start">
//         <Image
//           src="/images/general/logo.svg"
//           alt="lovidia logo"
//           width={60}
//           height={60}
//         />
//         <p className="mt-0 text-center text-lg font-medium">lovidia</p>
//       </div>
//     </Link>
//     <div className="flex items-center gap-x-8 font-medium">
//       <Link href="/symptoms">Symptoms</Link>
//       <Link href="/helpers">Helpers</Link>
//       <Button className="text-base font-medium">
//         <Link href="/contact">Tell Us Your Story</Link>
//       </Button>
//     </div>
//   </div>
// )
