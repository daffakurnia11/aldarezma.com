import Navbar from "@/components/navbar";
import Jumbotron from "./_components/Jumbotron";
import Headline from "./_components/Headline";
import Benefit from "./_components/Benefit";
import Material from "./_components/Material";
import Testimonial from "./_components/Testimonial";
import Certification from "./_components/Certification";
import StudyCase from "./_components/StudyCase";
import Documentation from "./_components/Documentation";
import Pricing from "./_components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Headline />
      <Certification />
      <Benefit />
      <Material />
      <Testimonial />
      <StudyCase />
      <Documentation />
      <Pricing />
    </>
  );
}
