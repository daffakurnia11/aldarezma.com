import Typography from "@/components/typography";
import Image from "next/image";
import React from "react";

export default function Certification() {
  return (
    <section className="certification">
      <div className="container mx-auto px-5 py-10">
        <Typography.Heading
          level={2}
          className="text-primary-600 mb-6 md:!text-5xl !text-3xl"
        >
          Certification
        </Typography.Heading>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          <div className="w-[324px]">
            <Image
              src={"/img/certification/certification-1.png"}
              alt="Alda Rezma TikTok Shop Cerfitication"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="shadow-lg shadow-primary-300"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-[266px]">
              <Image
                src={"/img/certification/certification-2.png"}
                alt="Alda Rezma Meta Certification"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="shadow-lg shadow-primary-300"
              />
            </div>
            <div className="w-[266px]">
              <Image
                src={"/img/certification/certification-3.png"}
                alt="Alda Rezma Meta Certification by Coursera"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="shadow-lg shadow-primary-300"
              />
            </div>
          </div>
          <div className="w-[305px]">
            <Image
              src={"/img/certification/certification-4.png"}
              alt="Alda Rezma TikTok Shop External Certified Trainer Certification"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="shadow-lg shadow-primary-300"
            />
          </div>
          <div className="flex max-[992px]:flex-col max-[1440px]:flex-row 2xl:flex-col gap-5">
            <div className="w-[325px]">
              <Image
                src={"/img/certification/certification-5.png"}
                alt="Alda Rezma Google Certification"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="shadow-lg shadow-primary-300"
              />
            </div>
            <div className="w-[325px]">
              <Image
                src={"/img/certification/certification-6.png"}
                alt="Alda Rezma Aptly Certification"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="shadow-lg shadow-primary-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
