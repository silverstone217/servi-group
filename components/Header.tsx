"use client";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/public/images/servilogonoire1.png";
import Image from "next/image";
import { googleSansCode } from "@/lib/fonts";
import Link from "next/link";
import { HomeLinks } from "@/utils/links";
import { Pause, Play } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoState = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      if (!isOpen) return; // prevent playing when menu is closed
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      // removed setIsPlaying to avoid cascading renders
    }
  }, [isOpen]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      {/* container */}
      <div
        className={`border shadow-lg w-full max-w-xl mx-auto bg-white 
            rounded-2xl transition-all duration-300 flex flex-col 
            items-center overflow-hidden ${isOpen ? "py-5" : "py-3 h-16"}`}
      >
        {/* TOP */}
        <div className="flex w-full items-center justify-between px-2">
          {/* logo */}
          <Image
            src={logo}
            alt="Servi Group Logo"
            width={42}
            height={42}
            className="object-contain"
            priority
          />

          {/* comp name */}
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h2
              className={`${googleSansCode.className} font-black text-lg 
              tracking-tight`}
            >
              Servi Group
            </h2>
          </Link>

          {/* menu button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-secondary/20 transition 
            flex flex-col justify-center items-center"
          >
            {[1, 2].map((line) => (
              <div
                key={line}
                className={`h-0.5 w-6 bg-black my-1 transition-all duration-300 ${
                  isOpen && line === 1
                    ? "rotate-45 translate-y-2"
                    : isOpen && line === 2
                    ? "-rotate-45 -translate-y-2"
                    : ""
                }`}
              ></div>
            ))}
          </button>
        </div>

        {/* Bottom */}
        <div
          className={`${
            isOpen ? "flex flex-col w-full gap-5 mt-6 px-2" : "hidden"
          }`}
        >
          {/* Links */}
          <nav className="w-full flex flex-col gap-2">
            {HomeLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-semibold hover:text-primary transition
                w-fit
                "
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Video */}
          <div className="w-full relative mt-2">
            <video
              src="/videos/servi-pres.mp4"
              controls={false}
              className="w-full rounded-xl shadow-md h-72 
            
               object-cover"
              ref={videoRef}
            >
              Your browser does not support the video tag.
            </video>

            {/* play/stop overlay */}
            <button
              onClick={handleVideoState}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/40 backdrop-blur-md hover:bg-white/80 p-2 rounded-full shadow-md transition"
            >
              {isPlaying ? <Pause /> : <Play />}
            </button>
          </div>

          {/* Little footer */}
          <div className="w-full text-center mt-2 text-xs text-gray-500 pb-1">
            © {new Date().getFullYear()} Servi Group. Tous droits réservés.
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
