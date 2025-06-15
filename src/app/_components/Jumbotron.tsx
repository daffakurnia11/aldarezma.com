import React from "react";
import Typography from "@/components/typography";
import Image from "next/image";

export default function Jumbotron() {
  return (
    <section className="jumbotron">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-5">
        <div className="my-10 lg:my-0">
          <Typography.Heading
            level={4}
            className="text-primary-600 text-center lg:text-end mb-4 xl:!text-3xl sm:!text-2xl !text-xl"
          >
            Ngiklan gak harus boncos.
          </Typography.Heading>
          <Typography.Heading
            level={1}
            className="text-primary-600 text-center lg:text-end ms-auto lg:max-w-[630px] xl:!text-6xl sm:!text-4xl !text-3xl"
          >
            &ldquo;TikTok Ads & CPAS bisa jadi mesin cuan kalau tahu cara
            mainnya&ldquo;
          </Typography.Heading>
          <div className="w-fit ms-auto relative lg:block hidden">
            <div className="absolute -z-1 w-[650px] xl:h-[150px] h-[135px] -left-[400px] -top-4 bg-linear-to-r from-primary-600 to-neutral-100 rounded-l-xl translate-x-[370px]"></div>
            <div className="relative z-10 mt-11">
              <Typography.Heading
                level={3}
                className="text-secondary-600 text-end mb-2 xl:!text-4xl !text-3xl"
              >
                Alda Rezma D. C.
              </Typography.Heading>
              <Typography.Heading
                level={5}
                className="text-neutral-100 text-end xl:!text-2xl !text-xl"
              >
                Digital Advertiser Expert
                <br />
                CEO Straight Up Digital
              </Typography.Heading>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-end">
          <div className="flex-shrink-0 w-full sm:w-fit me-auto sm:ms-auto relative block lg:hidden">
            <div className="absolute -z-1 w-[1000px] sm:w-[650px] xl:h-[150px] sm:h-[135px] h-[125px] -left-[400px] -top-4 bg-linear-to-r from-primary-600 to-neutral-100 rounded-l-xl translate-x-[370px]"></div>
            <div className="relative z-10 mb-11">
              <Typography.Heading
                level={3}
                className="text-secondary-600 text-center sm:text-end mb-2 xl:!text-4xl sm:!text-3xl !text-2xl"
              >
                Alda Rezma D. C.
              </Typography.Heading>
              <Typography.Heading
                level={5}
                className="text-neutral-100 text-center sm:text-end xl:!text-2xl sm:!text-xl !text-lg"
              >
                Digital Advertiser Expert
                <br />
                CEO Straight Up Digital
              </Typography.Heading>
            </div>
          </div>
          <Image
            src={"/img/jumbotron-img.png"}
            alt="Alda Rezma Photo"
            className="mb-4 sm:mb-0"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
}
