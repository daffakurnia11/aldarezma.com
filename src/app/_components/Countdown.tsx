"use client";

import Typography from "@/components/typography";
import React from "react";
import { useCountdown } from "../_hooks/useCountdown";

export default function Countdown() {
  const { timeLeft } = useCountdown();

  return (
    <div className="container mx-auto px-5 py-20 -mt-[1px]">
      <div className="flex items-center justify-center gap-3 md:gap-6">
        <div>
          <div className="bg-secondary-100 p-2 rounded-md">
            <Typography.Heading
              level={1}
              className="w-12 md:w-18 lg:w-23 text-center text-primary-600 !text-2xl md:!text-4xl lg:!text-6xl"
            >
              {timeLeft.days}
            </Typography.Heading>
          </div>
          <Typography.Heading
            level={6}
            className="text-secondary-600 text-center mt-2 !text-sm md:!text-lg lg:!text-xl"
          >
            Days
          </Typography.Heading>
        </div>
        <div>
          <div className="bg-secondary-100 p-2 rounded-md">
            <Typography.Heading
              level={1}
              className="w-12 md:w-18 lg:w-23 text-center text-primary-600 !text-2xl md:!text-4xl lg:!text-6xl"
            >
              {timeLeft.hours}
            </Typography.Heading>
          </div>
          <Typography.Heading
            level={6}
            className="text-secondary-600 text-center mt-2 !text-sm md:!text-lg lg:!text-xl"
          >
            Hours
          </Typography.Heading>
        </div>
        <div>
          <div className="bg-secondary-100 p-2 rounded-md">
            <Typography.Heading
              level={1}
              className="w-12 md:w-18 lg:w-23 text-center text-primary-600 !text-2xl md:!text-4xl lg:!text-6xl"
            >
              {timeLeft.minutes}
            </Typography.Heading>
          </div>
          <Typography.Heading
            level={6}
            className="text-secondary-600 text-center mt-2 !text-sm md:!text-lg lg:!text-xl"
          >
            Minutes
          </Typography.Heading>
        </div>
        <div>
          <div className="bg-secondary-100 p-2 rounded-md">
            <Typography.Heading
              level={1}
              className="w-12 md:w-18 lg:w-23 text-center text-primary-600 !text-2xl md:!text-4xl lg:!text-6xl"
            >
              {timeLeft.seconds}
            </Typography.Heading>
          </div>
          <Typography.Heading
            level={6}
            className="text-secondary-600 text-center mt-2 !text-sm md:!text-lg lg:!text-xl"
          >
            Seconds
          </Typography.Heading>
        </div>
      </div>
    </div>
  );
}
