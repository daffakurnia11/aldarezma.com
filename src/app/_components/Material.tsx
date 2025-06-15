import Typography from "@/components/typography";
import React from "react";

export default function Material() {
  return (
    <section className="material bg-neutral-100">
      <div className="container mx-auto px-5 py-10">
        <Typography.Heading
          level={2}
          className="text-primary-600 mb-6 md:!text-5xl !text-3xl"
        >
          Apa Aja Materinya?
        </Typography.Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="border border-solid border-secondary-600 rounded-sm p-4">
            <div className="flex sm:flex-row flex-col gap-2 items-start">
              <Typography.Paragraph
                size="lg"
                className="flex-shrink-0 w-[55px] text-nowrap md:!text-lg !text-base font-bold"
              >
                Day 1
              </Typography.Paragraph>
              <Typography.Paragraph
                size="lg"
                className="flex-1 md:!text-lg !text-base font-bold"
              >
                CPAS ADS – Blueprint, Praktik, & Winning Strategy Menjelang Big
                Sale
              </Typography.Paragraph>
            </div>
            <div className="content-none h-[1px] w-full bg-secondary-600 rounded-full my-4"></div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center min-h-10">
                <Typography.Paragraph size="base" className="text-primary-600">
                  Winning Advertiser Mindset & CPAS Blueprint Mastery
                </Typography.Paragraph>
              </div>
              <div className="flex items-center min-h-10">
                <Typography.Paragraph size="base" className="text-primary-600">
                  Funnel Mapping & Campaign Structuring untuk Big Sale
                </Typography.Paragraph>
              </div>
              <div className="flex items-center min-h-10">
                <Typography.Paragraph size="base" className="text-primary-600">
                  Live Setup Campaign CPAS untuk Periode Big Sale
                </Typography.Paragraph>
              </div>
              <div className="flex items-center min-h-10">
                <Typography.Paragraph size="base" className="text-primary-600">
                  Winning Strategy Optimasi, Retargeting, & Scale Up Menjelang
                  Hari-H
                </Typography.Paragraph>
              </div>
              <div className="flex items-center min-h-10">
                <Typography.Paragraph size="base" className="text-primary-600">
                  Studi Kasus & Live Audit Campaign CPAS
                </Typography.Paragraph>
              </div>
            </div>
          </div>
          <div className="border border-solid border-secondary-600 rounded-sm p-4">
            <div className="flex sm:flex-row flex-col gap-2 items-start">
              <Typography.Paragraph
                size="lg"
                className="flex-shrink-0 w-[55px] text-nowrap md:!text-lg !text-base font-bold"
              >
                Day 2
              </Typography.Paragraph>
              <Typography.Paragraph
                size="lg"
                className="flex-1 md:!text-lg !text-base font-bold"
              >
                TikTok Ads Mastery – GMV Max Strategy, Funnel Execution, dan
                Creative Conversion untuk Big Sale
              </Typography.Paragraph>
            </div>
            <div className="content-none h-[1px] w-full bg-secondary-600 rounded-full my-4"></div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center min-h-10">
                <Typography.Paragraph size="base" className="text-primary-600">
                  TikTok GMV Max Deep Dive – Setting, Scaling, dan Signal
                  Strategy
                </Typography.Paragraph>
              </div>
              <div className="flex items-center min-h-10">
                <Typography.Paragraph size="base" className="text-primary-600">
                  Creative Engine for TikTok Ads – Hook, Struktur, dan CTA
                  Berdasarkan Funnel
                </Typography.Paragraph>
              </div>
              <div className="flex items-center min-h-10">
                <Typography.Paragraph size="base" className="text-primary-600">
                  Set Dashboard di dampingi Advertiser profesional Straight Up
                  Digital
                </Typography.Paragraph>
              </div>
              <div className="flex items-center min-h-10">
                <Typography.Paragraph size="base" className="text-primary-600">
                  Winning Strategy Optimasi & Scale Up Menjelang Hari-H
                </Typography.Paragraph>
              </div>
              <div className="flex items-center min-h-10">
                <Typography.Paragraph size="base" className="text-primary-600">
                  Breakdown Konten ROAS Tertinggi + TikTok Audit
                </Typography.Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
