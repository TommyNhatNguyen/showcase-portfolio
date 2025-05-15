import localFont from "next/font/local";

export const inter_tight_light = localFont({
  src: "../fonts/InterTight-Regular.woff2",
  variable: "--ff-light",
  weight: "300",
});

export const inter_tight_regular = localFont({
  src: "../fonts/InterTight-Regular.woff2",
  variable: "--ff-regular",
  weight: "400",
});

export const inter_tight_medium = localFont({
  src: "../fonts/InterTight-Medium.woff2",
  variable: "--ff-medium",
  weight: "500",
});

export const inter_tight_semibold = localFont({
  src: "../fonts/InterTight-SemiBold.woff2",
  variable: "--ff-semibold",
  weight: "600",
});

export const inter_tight_bold = localFont({
  src: "../fonts/InterTight-Bold.woff2",
  variable: "--ff-bold",
  weight: "700",
});
