import React from "react";
import Countdown from "./Countdown";
import Image from "next/image";
import Typography from "@/components/typography";
import Place from "./Place";
import Contact from "./Contact";
import Copyright from "./Copyright";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="footer bg-primary-600 relative overflow-hidden -mt-[1px]">
      <div className="-z-[1px] absolute md:block hidden top-1/4 lg:top-0 -right-30">
        <Image
          src={"/img/countdown-shape.png"}
          alt="Countdown Shape"
          width={300}
          height={297}
        />
      </div>
      <div className="-z-[1px] absolute md:block hidden top-1/4 lg:top-0 -left-30 rotate-y-180">
        <Image
          src={"/img/countdown-shape.png"}
          alt="Countdown Shape"
          width={300}
          height={297}
        />
      </div>
      <div className="relative z-10">
        <Countdown />
        <Place />
        <div className="flex justify-center my-10">
          <Link href={"https://bit.ly/WorkshopAldaJKT"} target="_blank">
            <button className="cursor-pointer bg-secondary-600 rounded-base py-2 px-4">
              <Typography.Heading
                level={5}
                as={"span"}
                className="text-primary-600 text-lg lg:!text-2xl"
              >
                Daftar Sekarang!
              </Typography.Heading>
            </button>
          </Link>
        </div>
        <Contact />
        <Copyright />
      </div>
    </section>
  );
}
