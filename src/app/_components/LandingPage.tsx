"use client";

import {
  SectionRefsProvider,
  useSectionRefs,
} from "@/context/SectionRefsContext";
import Navbar from "@/components/navbar";
import Jumbotron from "./Jumbotron";
import Headline from "./Headline";
import Benefit from "./Benefit";
import Material from "./Material";
import Testimonial from "./Testimonial";
import Certification from "./Certification";
import StudyCase from "./StudyCase";
import Documentation from "./Documentation";
import Pricing from "./Pricing";
import Footer from "./Footer";

function PageContent() {
  const { benefitRef, materialRef, testimonialRef, pricingRef } =
    useSectionRefs();

  return (
    <>
      <Navbar />
      <Jumbotron />
      <Headline />
      <Certification />
      <section ref={benefitRef}>
        <Benefit />
      </section>
      <section ref={materialRef}>
        <Material />
      </section>
      <section ref={testimonialRef}>
        <Testimonial />
      </section>
      <StudyCase />
      <Documentation />
      <section ref={pricingRef}>
        <Pricing />
      </section>
      <Footer />
    </>
  );
}

export default function LandingPage() {
  return (
    <SectionRefsProvider>
      <PageContent />
    </SectionRefsProvider>
  );
}
