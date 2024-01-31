import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import IconGlobe from "@/components/icons/IconGlobe";
import {MainNav } from "./layout/MainNav";
import FixedLayout from "./layout/FixedLayout";
import { HeaderLayout } from "../header/HeaderLayout";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function RootLayout({
  children,
}) {
  return (
    <>

  <FixedLayout>
  </FixedLayout> 
  
    <div>{children}</div>
   
    </>
  );
}
