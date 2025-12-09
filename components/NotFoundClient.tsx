"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/images/servilogonoire1.png";
import { googleSansCode } from "@/lib/fonts";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFoundClient() {
  return (
    <div
      className="min-h-[80vh] w-full flex flex-col items-center justify-center 
    bg-linear-to-b from-gray-50 to-gray-100 px-6 text-center relative overflow-hidden"
    >
      {/* Soft Background Animation Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute w-96 h-96 bg-primary/30 rounded-full blur-3xl -top-20 -left-20"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.7, ease: "easeOut" }}
        className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -bottom-24 -right-20"
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-6"
      >
        <Image
          src={logo}
          alt="Servi Group Logo"
          width={70}
          height={70}
          className="object-contain drop-shadow"
        />
        <h1
          className={`${googleSansCode.className} mt-3 text-2xl font-black text-gray-800`}
        >
          Servi Group
        </h1>
      </motion.div>

      {/* 404 Text */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-7xl font-black text-gray-900 drop-shadow-sm"
      >
        404
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-gray-600 mt-4 max-w-md text-lg"
      >
        Oups... La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition"
        >
          <ArrowLeft size={18} /> Retour à l&apos;accueil
        </Link>
      </motion.div>
    </div>
  );
}
