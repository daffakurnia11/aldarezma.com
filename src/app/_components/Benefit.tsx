import Typography from "@/components/typography";
import Image from "next/image";
import React from "react";

export default function Benefit() {
  return (
    <section className="benefit bg-primary-600">
      <div className="container mx-auto px-5 py-10">
        <Typography.Heading
          level={2}
          className="text-neutral-100 text-center mb-6 md:!text-5xl !text-3xl"
        >
          You Will Get
        </Typography.Heading>
        <div className="flex flex-wrap flex-col lg:flex-row">
          <div className="flex flex-row-reverse lg:flex-row items-center min-h-[70px] w-full max-w-[500px] lg:max-w-1/2 mx-auto lg:mx-0 lg:w-1/2 px-5 mb-6 gap-4">
            <div className="text-start lg:text-end w-full">
              <Typography.Heading
                level={5}
                className="md:!text-2xl !text-xl text-neutral-100 w-full"
              >
                Lunch & Coffee Break
              </Typography.Heading>
            </div>
            <div className="content-none w-4 h-4 rounded-full bg-secondary-600 flex-shrink-0"></div>
          </div>
          <div className="flex items-center min-h-[70px] w-full max-w-[500px] lg:max-w-1/2 mx-auto lg:mx-0 lg:w-1/2 px-5 mb-6 gap-4">
            <div className="content-none w-4 h-4 rounded-full bg-secondary-600 flex-shrink-0"></div>
            <div className="w-full">
              <Typography.Heading
                level={5}
                className="md:!text-2xl !text-xl text-neutral-100 w-full"
              >
                Knowledge & Material
              </Typography.Heading>
              <Typography.Paragraph
                size="lg"
                className="md:!text-lg !text-base text-neutral-100 w-full"
              >
                (Blueprint Strategy CPAS & TikTok Ads)
              </Typography.Paragraph>
            </div>
          </div>
          <div className="flex flex-row-reverse lg:flex-row items-center min-h-[70px] w-full max-w-[500px] lg:max-w-1/2 mx-auto lg:mx-0 lg:w-1/2 px-5 mb-6 gap-4">
            <div className="text-start lg:text-end w-full">
              <Typography.Heading
                level={5}
                className="md:!text-2xl !text-xl text-neutral-100 w-full"
              >
                Certificate & Merchandise
              </Typography.Heading>
            </div>
            <div className="content-none w-4 h-4 rounded-full bg-secondary-600 flex-shrink-0"></div>
          </div>
          <div className="flex items-center min-h-[70px] w-full max-w-[500px] lg:max-w-1/2 mx-auto lg:mx-0 lg:w-1/2 px-5 mb-6 gap-4">
            <div className="content-none w-4 h-4 rounded-full bg-secondary-600 flex-shrink-0"></div>
            <div className="w-full">
              <Typography.Heading
                level={5}
                className="md:!text-2xl !text-xl text-neutral-100 w-full"
              >
                Penginapan 1 Malam*
              </Typography.Heading>
              <Typography.Paragraph
                size="lg"
                className="md:!text-lg !text-base text-neutral-100 w-full"
              >
                (Paket Combo & Ultimate Growth)
              </Typography.Paragraph>
            </div>
          </div>
          <div className="flex flex-row-reverse lg:flex-row items-center min-h-[70px] w-full max-w-[500px] lg:max-w-1/2 mx-auto lg:mx-0 lg:w-1/2 px-5 mb-6 gap-4">
            <div className="text-start lg:text-end w-full">
              <Typography.Heading
                level={5}
                className="md:!text-2xl !text-xl text-neutral-100 w-full"
              >
                Community Relation
              </Typography.Heading>
              <Typography.Paragraph
                size="lg"
                className="md:!text-lg !text-base text-neutral-100 w-full"
              >
                (Business Owner & Marketer)
              </Typography.Paragraph>
            </div>
            <div className="content-none w-4 h-4 rounded-full bg-secondary-600 flex-shrink-0"></div>
          </div>
          <div className="flex items-center min-h-[70px] w-full max-w-[500px] lg:max-w-1/2 mx-auto lg:mx-0 lg:w-1/2 px-5 mb-6 gap-4">
            <div className="content-none w-4 h-4 rounded-full bg-secondary-600 flex-shrink-0"></div>
            <div className="w-full">
              <Typography.Heading
                level={5}
                className="md:!text-2xl !text-xl text-neutral-100 w-full"
              >
                Private Mentorship
              </Typography.Heading>
              <Typography.Paragraph
                size="lg"
                className="md:!text-lg !text-base text-neutral-100 w-full"
              >
                (1x 60 menit Online)(Paket Ultimate Growth)
              </Typography.Paragraph>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-300 mx-auto my-10">
          <div className="bg-secondary-600 p-6 rounded-xl w-full max-w-100 mx-auto">
            <div className="aspect-square w-full h-auto relative overflow-hidden rounded-sm">
              <Image
                src={"/img/benefit-1-img.jpg"}
                alt="Benefit 1"
                className="object-cover rounded-sm absolute w-full h-full"
                width={500}
                height={500}
              />
            </div>
            <Typography.Paragraph
              size="lg"
              className="text-primary-600 text-center mt-6 md:!text-lg !text-base min-h-24"
            >
              <strong>Langsung praktik</strong> bareng didampingi fasilitator
              advertiser Straight Up Digital yang udah ngelola ratusan juta ad
              spend
            </Typography.Paragraph>
          </div>
          <div className="bg-secondary-600 p-6 rounded-xl w-full max-w-100 mx-auto">
            <div className="aspect-square w-full h-auto relative overflow-hidden rounded-sm">
              <Image
                src={"/img/benefit-2-img.jpg"}
                alt="Benefit 1"
                className="object-cover rounded-sm absolute w-full h-full"
                width={500}
                height={500}
              />
            </div>
            <Typography.Paragraph
              size="lg"
              className="text-primary-600 text-center mt-6 md:!text-lg !text-base min-h-24"
            >
              <strong>E-sertifikat resmi</strong> sebagai bukti kompetensi lo di digital ads
            </Typography.Paragraph>
          </div>
          <div className="bg-secondary-600 p-6 rounded-xl w-full max-w-100 mx-auto">
            <div className="aspect-square w-full h-auto relative overflow-hidden rounded-sm">
              <Image
                src={"/img/benefit-3-img.jpg"}
                alt="Benefit 1"
                className="object-cover rounded-sm absolute w-full h-full"
                width={500}
                height={500}
              />
            </div>
            <Typography.Paragraph
              size="lg"
              className="text-primary-600 text-center mt-6 md:!text-lg !text-base min-h-24"
            >
              <strong>Join komunitas premium</strong> bareng Brand Owner & Marketer lain - tempat kolaborasi & insight berharga
            </Typography.Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}
