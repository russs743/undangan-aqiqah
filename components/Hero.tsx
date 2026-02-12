"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [showGift, setShowGift] = useState(false);

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
          <Image
            src="/img/foto1.jpeg"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 from-[#f4f1ea]/80 via-transparent to-[#f4f1ea]" />
        </div>
      </div>

      {/* Konten Utama */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center"
      >
        {/* TAMBAHAN: Salam & Kalimat Pembuka */}
        <div className="mb-10 space-y-4">
          <h3 className={`${playfair.className} text-3xl text-[#2c3e50]`}>
            Assalamu’alaikum Wr. Wb.
          </h3>
          <p
            className={`${jakarta.className} text-sm md:text-base text-gray-600 max-w-lg leading-relaxed mx-auto italic`}
          >
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i untuk turut hadir di acara Tasyakuran Aqiqah
            putra keempat kami:
          </p>
        </div>

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

        <div className="w-16 h-1 bg-[#d4af37] my-4" />

        {/* Orang Tua Section */}
        <div className={`${jakarta.className} space-y-2 mb-8`}>
          <p className="text-gray-700 font-semibold uppercase text-xs tracking-widest">
            Putra Dari:
          </p>
          <div className="text-lg md:text-xl text-[#2c3e50] font-medium">
            <p>Bpk. Dwi Fiska Oktarino</p>
            <p>& Ibu Eny Wahyuni</p>
          </div>
        </div>

        {/* Waktu & Lokasi Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full max-w-2xl">
          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col justify-center">
            <p
              className={`${jakarta.className} text-xs font-bold uppercase tracking-widest text-[#8d775f] mb-2`}
            >
              Waktu Acara
            </p>
            <p
              className={`${jakarta.className} text-base text-gray-700 font-semibold`}
            >
              Minggu, 15 Februari 2026
            </p>
            <p className={`${jakarta.className} text-sm text-gray-600 italic`}>
              Pukul 10.00 WIB s.d Selesai
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col items-center">
            <p
              className={`${jakarta.className} text-xs font-bold uppercase tracking-widest text-[#8d775f] mb-2`}
            >
              Lokasi Acara
            </p>
            <p
              className={`${jakarta.className} text-sm text-gray-700 leading-relaxed mb-4`}
            >
              Perum permata Asri Blok G polos (simpang Y) no. 12 A, Karang
              Anyar, Jati Agung, Lampung Selatan.
            </p>

            {/* Tombol Google Maps */}
            <a
              href="https://maps.app.goo.gl/doS9RwJ5SLyLxNCq5?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#8d775f] text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-[#6d5c49] transition-all shadow-md active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              PETUNJUK LOKASI
            </a>
          </div>
        </div>

        {/* Kado Digital / Rekening */}
<div className="w-full max-w-sm">
  {/* Header Tombol untuk Membuka Kado */}
  <button 
    onClick={() => setShowGift(!showGift)}
    className="w-full bg-[#8d775f] text-white p-4 rounded-2xl shadow-lg flex justify-between items-center transition-all hover:bg-[#6d5c49] active:scale-95"
  >
    <div className="flex items-center gap-3">
      <span className="text-xl">🎁</span>
      <span className={`${jakarta.className} text-xs uppercase tracking-[0.2em] font-bold`}>
        Kado Digital
      </span>
    </div>
    <span className={`transition-transform duration-300 ${showGift ? 'rotate-180' : ''}`}>
      ▼
    </span>
  </button>

  {/* Konten Rekening yang Tersembunyi */}
  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showGift ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
    <div className="bg-white border-2 border-[#8d775f] p-6 rounded-2xl shadow-inner text-center">
      <p className={`${jakarta.className} text-[#8d775f] font-bold text-lg mb-1`}>Bank BSI</p>
      <p className="text-[#2c3e50] text-2xl tracking-wider font-mono font-bold my-2 select-all">
        7332310838
      </p>
      <p className="text-gray-500 text-sm italic mb-4">An. Dwi Fiska Oktarino</p>
      
      <button 
        onClick={() => {
          navigator.clipboard.writeText("7332310838");
        }}
        className="text-[10px] text-[#8d775f] border border-[#8d775f] px-3 py-1 rounded-full font-bold hover:bg-[#8d775f] hover:text-white transition-colors"
      >
        SALIN NOMOR
      </button>
    </div>
  </div>
</div>
        <h3 className={`${playfair.className} text-3xl text-[#2c3e50] mt-10`}>
          Wassalamu’alaikum Wr. Wb.
        </h3>
      </div>
    </section>
  );
}
