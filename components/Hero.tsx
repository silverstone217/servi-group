"use client";
import { googleSansCode } from "@/lib/fonts";
import { HeroList } from "@/utils/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HeroList.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden 
    shadow-xl border bg-black max-w-7xl mx-auto"
    >
      {/* nav dots */}
      <div className="absolute top-4 right-4 z-30 flex gap-2">
        {HeroList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`h-3 w-3 rounded-full transition-all duration-300 shadow-inner ${
              idx === index
                ? "bg-white scale-110 shadow-lg"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Background Image with fade animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={HeroList[index].img}
            alt={HeroList[index].title + " image"}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent z-20 flex items-end p-6">
        <div className="flex flex-col md:flex-row md:items-end w-full justify-between text-white">
          {/* Description */}
          <motion.p
            key={index + "desc"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm md:text-lg max-w-lg mb-3 md:mb-0"
          >
            {HeroList[index].description}
          </motion.p>

          {/* Title */}
          <motion.h2
            key={index + "title"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${googleSansCode.className} text-3xl md:text-5xl font-extrabold text-right drop-shadow-xl`}
          >
            {HeroList[index].title}
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
