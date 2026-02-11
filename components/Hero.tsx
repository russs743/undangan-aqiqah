"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" },
    ).fromTo(
      (contentRef.current as HTMLDivElement).children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.8",
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-[#f4f1ea] py-20"
    >
      {/* Background & Overlay */}
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="relative w-full h-full">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 from-[#f4f1ea]/50 via-transparent to-[#f4f1ea]" />
        </div>
      </div>

      {/* Konten Utama */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center"
      >
        <h2
          className={`${playfair.className} italic text-2xl md:text-3xl text-[#8d775f] mb-2`}
        >
          Tasyakur Aqiqah
        </h2>

        {/* Frame Foto Bayi */}
        <div className="my-8 relative w-48 h-64 md:w-64 md:h-80 rounded-t-full border-8 border-white shadow-2xl overflow-hidden">
          <Image
            src="/img/foto1.jpeg"
            alt="Foto Muhammad Haruqi Uwais"
            fill
            className="object-fill"
            priority
          />
        </div>

        <h1
          className={`${playfair.className} text-4xl md:text-6xl lg:text-7xl text-[#2c3e50] leading-tight mb-4`}
        >
          Muhammad Haruqi Uwais
        </h1>

        <div className="space-y-1 mb-6">
          <p
            className={`${jakarta.className} text-sm md:text-base text-gray-600 uppercase tracking-widest`}
          >
            Lahir: Bandar Lampung, 06 Februari 2026
          </p>
        </div>

        <div className="w-16 bg-[#d4af37] my-4" />

        {/* Orang Tua Section */}
        <div className={`${jakarta.className} space-y-2 mb-8`}>
          <p className="text-gray-700">
            <span className="font-semibold">Putra Dari:</span>
          </p>
          <div className="text-lg md:text-xl text-[#2c3e50] font-medium">
            <p>Bpk. Dwi Fiska Oktarino</p>
            <p>& Ibu Eny Wahyuni</p>
          </div>
        </div>

        {/* Alamat Section */}
        <div className="max-w-md bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm mb-10">
          <p
            className={`${jakarta.className} text-xs font-bold uppercase tracking-widest text-[#8d775f] mb-2`}
          >
            Lokasi Acara
          </p>
          <p
            className={`${jakarta.className} text-sm text-gray-700 leading-relaxed`}
          >
            Perum permata Asri Blok G polos (simpang Y) no. 12 A, Karang Anyar,
            Jati Agung, Lampung Selatan.
          </p>
        </div>

        {/* Kado Digital / Rekening */}
        <div className="bg-[#8d775f] text-white p-6 rounded-2xl shadow-xl w-full max-w-sm">
          <p className="text-xs uppercase tracking-[0.2em] mb-3 opacity-80">
            Kado Digital
          </p>
          <p className="font-bold text-lg mb-1">Bank BSI</p>
          <p className="text-2xl tracking-wider font-mono my-2">7332310838</p>
          <p className="text-sm opacity-90 italic">An. Dwi Fiska Oktarino</p>
        </div>
      </div>
    </section>
  );
}
