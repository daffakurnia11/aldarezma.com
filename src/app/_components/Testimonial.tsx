"use client";

import Typography from "@/components/typography";
import React, { useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import testimonialData from "@/utils/testimonial.json";

import "swiper/css";
import "swiper/css/autoplay";

const TestimonialCard = (props: { name: string; text: string }) => {
  const { name, text } = props;

  return (
    <div className="flex flex-col items-center mx-auto max-w-[270px] rounded-base py-10 px-6 bg-primary-600">
      <FaUserCircle size={48} className="text-secondary-600" />
      <Typography.Heading
        level={6}
        className="text-neutral-100 text-center my-4"
      >
        {name}
      </Typography.Heading>
      <Typography.Paragraph
        size="base"
        className="text-neutral-100 text-center min-h-[200px]"
      >
        &ldquo;{text}&ldquo;
      </Typography.Paragraph>
    </div>
  );
};

export default function Testimonial() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  return (
    <section className="testimoni bg-neutral-50">
      <div className="container mx-auto px-5 py-10">
        <Typography.Heading
          level={2}
          className="text-primary-600 text-center mb-6 md:!text-5xl !text-3xl"
        >
          Kata Orang
        </Typography.Heading>
        <div className="2xl:!max-w-[1150px] mx-auto relative" style={{ maxWidth: "calc(100% - 80px)" }}>
          <FaChevronLeft
            size={40}
            className="cursor-pointer text-secondary-600 absolute -left-10 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-full"
            onClick={() => swiperRef.current!.slidePrev()}
          />
          <FaChevronRight
            size={40}
            className="cursor-pointer text-secondary-600 absolute -right-10 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-full"
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
              992: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  name={testimonial.name}
                  text={testimonial.text}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
