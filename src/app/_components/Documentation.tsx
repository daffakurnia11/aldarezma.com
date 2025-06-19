"use client";

import Typography from "@/components/typography";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";

export default function Documentation() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  return (
    <section className="testimoni bg-primary-600">
      <div className="container mx-auto px-5 py-10">
        <Typography.Heading
          level={2}
          className="text-secondary-600 text-center mb-6 md:!text-5xl !text-3xl"
        >
          Dokumentasi
        </Typography.Heading>
        <div className="max-w-[1150px] mx-auto relative">
          <FaChevronLeft
            size={40}
            className="cursor-pointer text-secondary-600 absolute -left-3 top-1/2 -translate-y-1/2 md:-translate-x-full"
            onClick={() => swiperRef.current!.slidePrev()}
          />
          <FaChevronRight
            size={40}
            className="cursor-pointer text-secondary-600 absolute -right-3 top-1/2 -translate-y-1/2 md:translate-x-full"
            onClick={() => swiperRef.current!.slideNext()}
          />
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {[...Array(12)].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={`/img/documentation/photo-${index + 1}.JPG`}
                  alt="Alda Rezma Documentation Gallery"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
