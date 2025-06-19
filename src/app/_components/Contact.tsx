import Link from "next/link";
import React from "react";
import { FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";

export default function Contact() {
  return (
    <div className="flex justify-center gap-6 md:gap-10 my-10">
      <Link href={"https://www.instagram.com/aldarezma"} target="_blank">
        <FaInstagram className="text-secondary-600 text-[32px] md:text-[56px]" />
      </Link>
      <Link href={"mailto:aldarzmdc@gmail.com"} target="_blank">
        <FaRegEnvelope className="text-secondary-600 text-[32px] md:text-[56px]" />
      </Link>
      <Link href={"https://wa.me/62895411181899"} target="_blank">
        <FaWhatsapp className="text-secondary-600 text-[32px] md:text-[56px]" />
      </Link>
      <Link href={"tel:+62895411181899"} target="_blank">
        <LuPhone className="text-secondary-600 text-[32px] md:text-[56px]" />
      </Link>
    </div>
  );
}
