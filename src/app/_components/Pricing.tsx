import React from "react";
import pricingData from "@/utils/pricing.json";
import Typography from "@/components/typography";
import clsx from "clsx";

export default function Pricing() {
  return (
    <section className="testimoni bg-primary-600">
      <div className="container mx-auto px-5 pt-10 -mt-[1px]">
        <div className="grid max-w-[335px] md:max-w-[690px] md:grid-cols-2 xl:max-w-full xl:grid-cols-4 gap-5 mx-auto">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "py-10 px-6 rounded-lg relative overflow-hidden max-w-[335px]",
                index % 2 === 0 ? "bg-secondary-100" : "bg-secondary-600"
              )}
            >
              <div className="absolute top-1 right-0.5 translate-y-1/2 translate-x-1/4 rotate-45">
                <div className="bg-[#B3261E] px-6 py-1">
                  <Typography.Small
                    size="sm"
                    className="text-neutral-100 font-bold uppercase"
                  >
                    Early Bird
                  </Typography.Small>
                </div>
              </div>
              {item.is_best_seller && (
                <div className="absolute top-0 left-3.5">
                  <div className="bg-[#B3261E] py-6 px-1 rounded-b-lg max-w-[54px]">
                    <Typography.Small
                      size="sm"
                      className="text-neutral-100 font-bold text-wrap flex flex-col items-center"
                    >
                      <span>Best</span>
                      <span>Seller!</span>
                    </Typography.Small>
                  </div>
                </div>
              )}
              <Typography.Heading
                level={6}
                className="text-primary-600 mb-1 mx-auto text-center md:max-w-full max-[1440px]:max-w-[220px] h-14 max-w-full"
              >
                {item.name}
              </Typography.Heading>
              <Typography.Heading
                level={6}
                className="text-primary-600 text-center line-through"
              >
                {item.pricing.early_bird.original_price.toLocaleString(
                  "id-ID",
                  {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }
                )}
              </Typography.Heading>
              <Typography.Heading
                level={3}
                className="text-primary-600 text-center"
              >
                {item.pricing.early_bird.discounted_price.toLocaleString(
                  "id-ID",
                  {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }
                )}
              </Typography.Heading>
              <Typography.Paragraph
                size="base"
                className="text-primary-600 text-center mt-6"
              >
                {item.day_count} Day{item.day_count > 1 ? "s" : ""} ({item.date}
                )
              </Typography.Paragraph>
              <div className="content-none h-[2px] my-6 w-full bg-primary-600 rounded-full"></div>
              <div className="flex flex-col gap-2 max-w-[225px] mx-auto">
                {item.benefit.map((benefit, benefitIndex) => (
                  <div
                    className="flex items-center gap-2 min-h-10"
                    key={benefitIndex}
                  >
                    <div className="content-none w-2 h-2 bg-primary-600 rounded-full"></div>
                    <Typography.Paragraph
                      size="base"
                      className="text-primary-600 font-semibold"
                    >
                      {benefit === "Private Mentorship (1x 60 menit Online)" ? (
                        <>
                          Private Mentorship
                          <br />
                          (1x 60 menit Online)
                        </>
                      ) : (
                        benefit
                      )}
                    </Typography.Paragraph>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
