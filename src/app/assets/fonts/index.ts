import localFont from "next/font/local";

// export const brandFont = localFont({
//     src: "./bwmodelica-regular-webfont.woff2",
//     weight: "400",
//     //   variable: "--font-bwmod",
// });

export const brandFont = localFont({
  src: [
    {
      path: "./bwmodelica-hairline-webfont.woff2",
      weight: "100",
    },
    {
      path: "./bwmodelica-light-webfont.woff2",
      weight: "300",
    },
    {
      path: "./bwmodelica-regular-webfont.woff2",
      weight: "400",
    },
    {
      path: "./bwmodelica-medium-webfont.woff2",
      weight: "500",
    },
    {
      path: "./bwmodelica-bold-webfont.woff2",
      weight: "700",
    },
    {
      path: "./bwmodelica-extrabold-webfont.woff2",
      weight: "800",
    },
    {
      path: "./bwmodelica-black-webfont.woff2",
      weight: "900",
    },
  ],
  variable: "--font-bwmod",
});
