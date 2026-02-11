"use client";
import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Cover({ onOpen }: { onOpen: () => void }) {
  const coverRef = useRef(null);

  const handleOpen = () => {
    gsap.to(coverRef.current, {
      y: "-100%",
      duration: 1.2,
      ease: "power4.inOut",
      onComplete: onOpen,
    });
  };

  return (
    <div 
      ref={coverRef} 
      className="fixed inset-0 flex flex-col items-center justify-center text-white text-center overflow-hidden"
    >
      {/* 1. Background Image dengan Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/img/foto1.jpeg" 
          alt="Background Muhammad Haruqi Uwais"
          fill
          className="object-cover scale-110 blur-[2px]" // Sedikit blur biar teks fokus
          priority
        />
        {/* Layer Gelap agar teks terbaca */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 2. Konten Utama */}
      <div className="relative z-10 space-y-6 px-6 max-w-lg animate-in fade-in zoom-in duration-1000">
        <div className="space-y-2">
          <p className="tracking-[0.3em] uppercase text-xs md:text-sm text-gray-300 font-light">
            Tasyakur Aqiqah
          </p>
          <div className="w-12 bg-white/40 mx-auto my-4" />
        </div>

        {/* Frame Kecil untuk Foto Bayi */}
        <div className="w-32 h-44 mx-auto border-2 border-white/30 rounded-t-full overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md p-1">
          <div className="relative w-full h-full rounded-t-full overflow-hidden">
            <Image 
              src="/img/foto1.jpeg" 
              alt="Muhammad Haruqi Uwais"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-1">
          <h2 className={`${playfair.className} italic text-xl text-gray-200`}>Walimatul Aqiqah</h2>
          <h1 className={`${playfair.className} text-4xl md:text-5xl font-serif leading-tight`}>
            Muhammad Haruqi <br /> Uwais
          </h1>
        </div>
        
        <div className="pt-4">
          <p className="text-xs italic text-gray-400 mb-4">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <button 
            onClick={handleOpen}
            className="group relative overflow-hidden px-10 py-4 bg-white text-black rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-lg">✉</span> BUKA UNDANGAN
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}