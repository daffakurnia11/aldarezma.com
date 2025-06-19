import React from "react";

export default function LocationMaps() {
  return (
    <div className="w-full max-w-[500px] lg:max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1920157133122!2d106.76165097562857!3d-6.238404261090355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f10014e406e3%3A0x6f80d3a179feafee!2sKebayoran%20Park%20Hotel!5e0!3m2!1sen!2sid!4v1750320203960!5m2!1sen!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Kebayoran Park Hotel Location"
      ></iframe>
    </div>
  );
}
