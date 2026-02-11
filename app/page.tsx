"use client";
import { useState, useRef } from "react";
import Cover from "@/components/Cover";
import Hero from "@/components/Hero";

export default function Page() {
  const [hasOpened, setHasOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenUndangan = () => {
    setHasOpened(true);
    // Putar musik saat tombol diklik
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay dicegah browser, perlu interaksi user:", err);
      });
    }
  };

  return (
    <main>
      {/* Element Audio (Hidden) */}
      <audio ref={audioRef} loop>
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {!hasOpened && <Cover onOpen={handleOpenUndangan} />}
      
      {hasOpened && (
        <div className="animate-fade-in">
          <Hero />
          {/* Section lainnya */}
        </div>
      )}
    </main>
  );
}