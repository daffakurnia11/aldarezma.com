"use client";

import React from "react";
import Typography from "@/components/typography";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionRefs } from "@/context/SectionRefsContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { benefitRef, materialRef, testimonialRef, pricingRef, scrollTo } =
    useSectionRefs();

  const handleClick = (ref: React.RefObject<HTMLElement | null>) => {
    scrollTo(ref);
    setIsOpen(false); // close mobile menu
  };

  return (
    <div className="relative z-50 w-full h-[70px] bg-primary-600 flex items-center">
      {/* Mobile Menu Navbar */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={isOpen ? { opacity: 1, y: 180 } : { opacity: 0, y: "-100%" }}
        transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
        className="md:hidden absolute z-40 flex flex-col items-center justify-center gap-8 bg-primary-600 w-full py-4 rounded-b-lg"
      >
        <button
          className="cursor-pointer"
          onClick={() => handleClick(benefitRef)}
        >
          <Typography.Paragraph size="lg" className="text-neutral-100">
            Benefit
          </Typography.Paragraph>
        </button>
        <button
          className="cursor-pointer"
          onClick={() => handleClick(materialRef)}
        >
          <Typography.Paragraph size="lg" className="text-neutral-100">
            Materi
          </Typography.Paragraph>
        </button>
        <button
          className="cursor-pointer"
          onClick={() => handleClick(testimonialRef)}
        >
          <Typography.Paragraph size="lg" className="text-neutral-100">
            Testimoni
          </Typography.Paragraph>
        </button>
        <button
          className="cursor-pointer"
          onClick={() => handleClick(pricingRef)}
        >
          <Typography.Paragraph size="lg" className="text-neutral-100">
            Harga
          </Typography.Paragraph>
        </button>
        <Link href={"https://bit.ly/WorkshopAldaJKT"} target="_blank">
          <button className="cursor-pointer bg-secondary-600 rounded-base py-2 px-4">
            <Typography.Paragraph
              size="lg"
              className="text-primary-600 font-medium"
            >
              Daftar Sekarang!
            </Typography.Paragraph>
          </button>
        </Link>
      </motion.div>

      <div className="relative container z-50 mx-auto flex items-center justify-between w-full bg-primary-600 h-full px-5">
        <Typography.Heading level={5} className="text-neutral-100">
          AldaRezma
        </Typography.Heading>
        <button
          className="md:hidden block cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <MdOutlineClose size={32} className="text-neutral-100" />
          ) : (
            <MdOutlineMenu size={32} className="text-neutral-100" />
          )}
        </button>

        {/* Desktop Menu Navbar */}
        <div className="md:flex hidden items-center justify-center w-fit lg:gap-8 gap-4">
          <button
            className="cursor-pointer"
            onClick={() => handleClick(benefitRef)}
          >
            <Typography.Paragraph size="lg" className="text-neutral-100">
              Benefit
            </Typography.Paragraph>
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleClick(materialRef)}
          >
            <Typography.Paragraph size="lg" className="text-neutral-100">
              Materi
            </Typography.Paragraph>
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleClick(testimonialRef)}
          >
            <Typography.Paragraph size="lg" className="text-neutral-100">
              Testimoni
            </Typography.Paragraph>
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleClick(pricingRef)}
          >
            <Typography.Paragraph size="lg" className="text-neutral-100">
              Harga
            </Typography.Paragraph>
          </button>
          <Link href={"https://bit.ly/WorkshopAldaJKT"} target="_blank">
            <button className="cursor-pointer bg-secondary-600 rounded-base py-2 px-4">
              <Typography.Paragraph
                size="lg"
                className="text-primary-600 font-medium"
              >
                Daftar Sekarang!
              </Typography.Paragraph>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
