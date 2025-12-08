"use client";
import { ServicesList } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { googleSansCode } from "@/lib/fonts";
import Image from "next/image";

// Smooth & premium Services Section without Framer Motion

const Services = () => {
  return (
    <section className="w-full py-18 md:py-24 px-4 max-w-6xl mx-auto">
      {/* Title */}
      <h2
        className={`${googleSansCode.className} text-3xl md:text-5xl font-extrabold text-center mb-10`}
      >
        Nos Services
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {ServicesList.map((service) => (
          <Link
            key={service.id}
            href={service.link === "*" ? "#" : service.link}
            target={service.link.startsWith("http") ? "_blank" : "_self"}
            className="group bg-white border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon */}
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3
              className={`${googleSansCode.className} text-xl md:text-2xl font-bold mb-2`}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {service.description}
            </p>

            {/* Arrow */}
            <div className="mt-4 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              En savoir plus →
            </div>
          </Link>
        ))}
      </div>

      {/* see more btn link */}
      <div className="flex justify-center mt-12">
        <Link
          href="#"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300"
        >
          Voir tous les services
        </Link>
      </div>
    </section>
  );
};

export default Services;
