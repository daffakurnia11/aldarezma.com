import Typography from "@/components/typography";
import Image from "next/image";
import React from "react";

export default function StudyCase() {
  return (
    <section className="testimoni bg-neutral-50">
      <div className="container mx-auto px-5 pb-10">
        <Typography.Heading
          level={2}
          className="text-primary-600 text-center mb-6 md:!text-5xl !text-3xl"
        >
          Study Case Results
        </Typography.Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[846px] mx-auto">
          <Image
            src={"/img/study-case/study-case-1.png"}
            alt="Alda Rezma Study Case Result 1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="shadow-lg shadow-primary-300"
          />
          <Image
            src={"/img/study-case/study-case-2.png"}
            alt="Alda Rezma Study Case Result 2"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="shadow-lg shadow-primary-300"
          />
          <Image
            src={"/img/study-case/study-case-3.png"}
            alt="Alda Rezma Study Case Result 3"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="shadow-lg shadow-primary-300"
          />
          <Image
            src={"/img/study-case/study-case-4.png"}
            alt="Alda Rezma Study Case Result 4"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="shadow-lg shadow-primary-300"
          />
        </div>
      </div>
    </section>
  );
}
