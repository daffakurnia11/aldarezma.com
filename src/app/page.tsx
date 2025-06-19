import Navbar from "@/components/navbar";
import Jumbotron from "./_components/Jumbotron";
import Headline from "./_components/Headline";
import Benefit from "./_components/Benefit";
import Material from "./_components/Material";
import Testimonial from "./_components/Testimonial";
import Certification from "./_components/Certification";

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
    </>
  );
}
