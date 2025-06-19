// context/SectionRefsContext.tsx
"use client";

import React, { createContext, useContext, useRef } from "react";

type SectionRefs = {
  benefitRef: React.RefObject<HTMLElement | null>;
  materialRef: React.RefObject<HTMLElement | null>;
  testimonialRef: React.RefObject<HTMLElement | null>;
  pricingRef: React.RefObject<HTMLElement | null>;
  scrollTo: (ref: React.RefObject<HTMLElement | null>) => void;
};

const SectionRefsContext = createContext<SectionRefs | null>(null);

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);
  if (!context)
    throw new Error("useSectionRefs must be used within SectionRefsProvider");
  return context;
};

export const SectionRefsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const benefitRef = useRef<HTMLElement>(null);
  const materialRef = useRef<HTMLElement>(null);
  const testimonialRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionRefsContext.Provider
      value={{ benefitRef, materialRef, testimonialRef, pricingRef, scrollTo }}
    >
      {children}
    </SectionRefsContext.Provider>
  );
};
