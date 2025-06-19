import Typography from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Headline() {
  return (
    <section className="headline">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-5">
        <div className="order-2 md:order-1">
          <Image
            src={"/img/headline-img.png"}
            alt="Alda Rezma Photo"
            className="ms-auto"
            width={500}
            height={600}
          />
        </div>
        <div className="order-1 md:order-2 w-full md:max-w-[430px] py-10 md:py-0">
          <Typography.Heading
            level={1}
            className="text-neutral-100 text-center md:text-start ms-auto xl:!text-6xl sm:!text-4xl !text-3xl"
          >
            <span className="text-neutral-100">SCALE UP ROAS</span>
            <br />
            <span className="text-secondary-600">UP TO 10X</span>
          </Typography.Heading>
          <div className="content-none h-[1px] w-full bg-secondary-600 rounded-full my-4"></div>
          <Typography.Heading
            level={4}
            className="text-neutral-100 text-center md:text-start mb-4 xl:!text-3xl sm:!text-2xl !text-xl"
          >
            &ldquo;For Big Sale Season with CPAS & TIKTOK Ads&rdquo;
          </Typography.Heading>
          <div className="flex justify-center md:justify-start">
            <Link href={"https://bit.ly/WorkshopAldaJKT"} target="_blank">
              <button className="cursor-pointer bg-secondary-600 rounded-base py-2 px-4">
                <Typography.Heading
                  level={6}
                  as={"span"}
                  className="text-primary-600 font-medium"
                >
                  Daftar Sekarang!
                </Typography.Heading>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
