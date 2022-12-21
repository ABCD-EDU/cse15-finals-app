import React, { createContext, useContext, useState } from "react";

// create  context
const PDFTextContext = createContext({});

// create context provider
export const PDFTextProvider = ({ children }) => {
  const [pdfText, setPDFText] = useState<string>("");
  return (
    <PDFTextContext.Provider value={{ pdfText, setPDFText }}>
      {children}
    </PDFTextContext.Provider>
  );
};

// export const usePDFTextContext = useContext(PDFTextContext);
