"use client";
import React from "react";
import Link from "next/link";
import { HomeLinks } from "@/utils/links";
import { googleSansCode } from "@/lib/fonts";
import Image from "next/image";
import logo from "@/public/images/servilogonoire1.png";
import { Phone, Mail } from "lucide-react";
import { FaTiktok, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding + contact */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Servi Group Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span
              className={`${googleSansCode.className} font-black text-lg text-gray-900`}
            >
              Servi Group
            </span>
          </div>

          <div className="flex flex-col gap-2 text-gray-700">
            <div className="flex items-center gap-2 text-sm">
              <Phone size={18} /> +243 83 17 18 338
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={18} /> servigroup.social@gmil.com
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Link
                href="https://www.instagram.com/servigroups"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://www.youtube.com/@ServigroupSocial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <FaYoutube size={20} />
              </Link>
              <Link
                href="https://www.tiktok.com/@servigroupoff"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <FaTiktok size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/people/SERVI-Group/61576923030720/?rdid=mG2eSqDpoJZgHZki&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DWJwrMX6d%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <FaFacebook size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Navigation</h3>
          {HomeLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-primary transition font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Abonnez-vous à notre newsletter
          </h3>
          <p className="text-gray-700 text-sm">
            Recevez nos dernières actualités et offres directement dans votre
            boîte mail.
          </p>
          <form className="flex gap-2 mt-2">
            <Input type="email" placeholder="Votre email" />
            <Button type="submit">{` S'abonner`}</Button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Servi Group. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
