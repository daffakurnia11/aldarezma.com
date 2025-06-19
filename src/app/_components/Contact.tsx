import React from "react";
import { FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";

export default function Contact() {
  return (
    <div className="flex justify-center gap-6 md:gap-10 my-10">
      <FaInstagram className="text-secondary-600 text-[32px] md:text-[56px]" />
      <FaRegEnvelope className="text-secondary-600 text-[32px] md:text-[56px]" />
      <FaWhatsapp className="text-secondary-600 text-[32px] md:text-[56px]" />
      <LuPhone className="text-secondary-600 text-[32px] md:text-[56px]" />
    </div>
  );
}
