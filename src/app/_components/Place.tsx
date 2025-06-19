import React from "react";
import LocationMaps from "./LocationMaps";
import { FaCalendar, FaClock, FaLocationDot } from "react-icons/fa6";
import Typography from "@/components/typography";

export default function Place() {
  return (
    <div className="grid grid-cols-5 lg:grid-cols-10 gap-5 max-w-[1064px] mx-auto items-center justify-between px-5 lg:px-10">
      <div className="col-span-5">
        <LocationMaps />
      </div>
      <div className="col-span-1 lg:block hidden"></div>
      <div className="col-span-5 lg:col-span-4">
        <div className="w-fit mx-auto lg:w-full flex flex-col gap-8">
          <div className="flex gap-4 items-center">
            <FaLocationDot size={40} className="text-neutral-100" />
            <div>
              <Typography.Heading
                level={5}
                className="text-secondary-600 !text-lg lg:!text-2xl"
              >
                Hotel Kebayoran Park
              </Typography.Heading>
              <Typography.Paragraph
                size="lg"
                className="text-neutral-100 text-sm lg:!text-lg"
              >
                Jakarta Selatan, Indonesia
              </Typography.Paragraph>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaCalendar size={40} className="text-neutral-100" />
            <div>
              <Typography.Heading
                level={5}
                className="text-secondary-600 !text-lg lg:!text-2xl"
              >
                Sabtu - Minggu
              </Typography.Heading>
              <Typography.Paragraph
                size="lg"
                className="text-neutral-100 text-sm lg:!text-lg"
              >
                19 - 20 Juli 2025
              </Typography.Paragraph>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaClock size={40} className="text-neutral-100" />
            <Typography.Heading
              level={5}
              className="text-secondary-600 !text-lg lg:!text-2xl"
            >
              10.00 WIB - Selesai
            </Typography.Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
