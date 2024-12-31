export function useMargin(margin: any): string {
  let marginClasses = "";
  if (margin?.top === "none") marginClasses += "pt-0 lg:pt-0 ";
  if (margin?.bottom === "none") marginClasses += "pb-0 lg:pb-0 ";
  if (margin?.top === "xs") marginClasses += "pt-3 lg:pt-6 ";
  if (margin?.bottom === "xs") marginClasses += "pb-3 lg:pb-6 ";
  if (margin?.top === "sm") marginClasses += "pt-6 lg:pt-12 ";
  if (margin?.bottom === "sm") marginClasses += "pb-6 lg:pb-12 ";
  if (margin?.top === "md") marginClasses += "pt-8 lg:pt-16 ";
  if (margin?.bottom === "md") marginClasses += "pb-8 lg:pb-16 ";
  if (margin?.top === "lg") marginClasses += "pt-10 lg:pt-20 ";
  if (margin?.bottom === "lg") marginClasses += "pb-10 lg:pb-20 ";
  if (margin?.top === "xl") marginClasses += "pt-12 lg:pt-24 ";
  if (margin?.bottom === "xl") marginClasses += "pb-12 lg:pb-24 ";
  if (margin?.top === "xxl") marginClasses += "pt-16 lg:pt-32 ";
  if (margin?.bottom === "xxl") marginClasses += "pb-16 lg:pb-32 ";
  return marginClasses;
}