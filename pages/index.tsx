import Head from "next/head";
import Image from "next/image";
import InputSection from "../components/InputSection";
import Navbar from "../components/Navbar";
import OutputSection from "../components/OutputSection";
import React, { createContext, useState } from "react";
import { PDFTextProvider } from "./api/context";

export default function Home() {
  const [pdfText, setPDFText] = useState<string>("");
  return (
    <>
      <div className="flex mx-auto flex flex-row justify-center">
        <div className="flex flex-row border-[1px]">
          <PDFTextProvider>
          <InputSection />
          <OutputSection />
          </PDFTextProvider>
        </div>
      </div>
    </>
  );
}
