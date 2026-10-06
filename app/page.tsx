"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Terminal,
  Briefcase,
  GraduationCap,
  Volume2,
  VolumeX,
  BookOpen,
  Star,
  Calendar,
  ArrowRight,
  Lock,
  Unlock,
  Sparkles,
  Code2,
  Mail,
  ExternalLink,
  Smartphone,
  Database,
  Globe2,
  Zap,
  Cpu,
  Layers3,
  Award,
  Rocket,
} from "lucide-react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -8;
    const rotateY = (x / rect.width - 0.5) * 10;

    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;

    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}

function OrbitalSystem() {
  return (
    <div className="orbital-system" aria-hidden="true">
      <div className="orbital-glow" />

      <div className="core">
        <div className="core-inner">
          <Code2 size={42} strokeWidth={1.4} />
          <span>AT</span>
        </div>
      </div>

      <div className="orbit orbit-1">
        <span className="planet p1">
          <Smartphone size={15} />
        </span>
      </div>

      <div className="orbit orbit-2">
        <span className="planet p2">
          <Database size={15} />
        </span>
      </div>

      <div className="orbit orbit-3">
        <span className="planet p3">
          <Globe2 size={15} />
        </span>
      </div>

      <div className="orbit orbit-4">
        <span className="planet p4">
          <Cpu size={15} />
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /*
   * SAYFA AÇILDIĞINDA MÜZİĞİ BAŞLATMAYI DENER.
   *
   * Tarayıcı sesli autoplay'i engellerse:
   * - ilk mouse/touch hareketinde
   * - ilk klavye etkileşiminde
   * müzik tekrar başlatılmaya çalışılır.
   */
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;

    const startMusic = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Tarayıcı autoplay'i engellediyse sessizce bekliyoruz.
        });
    };

    // İlk açılışta dene
    startMusic();

    const handleFirstInteraction = () => {
      startMusic();

      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("pointerdown", handleFirstInteraction, {
      once: true,
    });

    window.addEventListener("keydown", handleFirstInteraction, {
      once: true,
    });

    window.addEventListener("touchstart", handleFirstInteraction, {
      once: true,
    });

    return () => {
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`,
      );
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleMuzik = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  const handlePasswordCheck = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.toLowerCase().trim() === "somun") {
      setIsUnlocked(true);
      setErrorMsg(false);
    } else {
      setErrorMsg(true);
    }
  };

  const skills = [
    ["JavaScript", "skill-yellow"],
    ["Python", "skill-blue"],
    ["C", "skill-slate"],
    ["C++", "skill-indigo"],
    ["React Native", "skill-cyan"],
    ["React.js", "skill-sky"],
    ["Next.js", "skill-white"],
    ["Firebase", "skill-amber"],
    ["Firestore", "skill-orange"],
    ["REST APIs", "skill-emerald"],
    ["Tailwind CSS", "skill-teal"],
    ["Git & GitHub", "skill-rose"],
  ];

  return (
    <div className="portfolio-shell">
      <style jsx global>{`
        :root {
          --bg: #03050b;
          --panel: rgba(10, 15, 28, 0.68);
          --line: rgba(148, 163, 184, 0.14);
          --cyan: #22d3ee;
          --blue: #60a5fa;
          --violet: #a78bfa;
          --pink: #f472b6;
          --green: #34d399;
          --scroll-y: 0px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--bg);
        }

        .portfolio-shell {
          min-height: 100vh;
          overflow-x: hidden;
          color: #e5e7eb;

          background:
            radial-gradient(
              circle at 50% -10%,
              rgba(34, 211, 238, 0.12),
              transparent 34%
            ),
            radial-gradient(
              circle at 90% 22%,
              rgba(99, 102, 241, 0.1),
              transparent 28%
            ),
            #03050b;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          position: relative;
        }

        .portfolio-shell::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.22;

          background-image:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            );

          background-size: 54px 54px;

          mask-image: linear-gradient(to bottom, black, transparent 78%);

          z-index: 0;
        }

        .noise {
          position: fixed;
          inset: 0;
          z-index: 80;
          pointer-events: none;
          opacity: 0.025;

          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");
        }

        /* =========================
           NAVBAR
           ========================= */

        .topbar {
          position: sticky;
          top: 0;
          z-index: 60;

          border-bottom: 1px solid var(--line);

          background: rgba(3, 5, 11, 0.72);
          backdrop-filter: blur(22px);
        }

        .topbar-inner {
          max-width: 1180px;
          margin: auto;
          padding: 14px 22px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;

          color: #fff;
          font-weight: 800;
          letter-spacing: 0.08em;
          font-size: 12px;

          text-decoration: none;
        }

        .brand-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;

          background: var(--cyan);

          box-shadow: 0 0 18px var(--cyan);

          animation: pulse 2s infinite;
        }

        .navlinks {
          display: flex;
          gap: 7px;
          align-items: center;
        }

        .navlinks a,
        .music-button {
          color: #94a3b8;

          text-decoration: none;

          font-size: 11px;

          padding: 9px 12px;

          border-radius: 12px;

          border: 1px solid transparent;

          background: transparent;

          transition: 0.25s ease;

          cursor: pointer;
        }

        .navlinks a:hover,
        .music-button:hover {
          color: #fff;

          border-color: rgba(34, 211, 238, 0.22);

          background: rgba(34, 211, 238, 0.07);
        }

        /* =========================
           HERO
           ========================= */

        .hero {
          max-width: 1180px;
          min-height: 760px;

          margin: auto;

          padding: 85px 22px 70px;

          position: relative;

          display: grid;

          /*
           * Eskisi:
           * 1.05fr 0.95fr
           *
           * Profil sağa kaymış görünmesin diye
           * iki tarafı eşitledik.
           */
          grid-template-columns: 1fr 1fr;

          align-items: center;

          gap: 35px;

          z-index: 2;
        }

        .hero::after {
          content: "";

          position: absolute;

          width: 500px;
          height: 500px;

          right: 0;
          top: 90px;

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(34, 211, 238, 0.1),
            transparent 65%
          );

          filter: blur(20px);

          pointer-events: none;
        }

        .eyebrow {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding: 8px 12px;

          border-radius: 999px;

          border: 1px solid rgba(34, 211, 238, 0.25);

          background: rgba(34, 211, 238, 0.06);

          color: #67e8f9;

          font:
            600 11px/1 ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          box-shadow: 0 0 30px rgba(34, 211, 238, 0.07);
        }

        .hero-title {
          font-size: clamp(52px, 7vw, 92px);

          line-height: 0.91;

          letter-spacing: -0.065em;

          margin: 22px 0 24px;

          color: #fff;

          font-weight: 900;
        }

        .hero-title .gradient {
          display: block;

          background: linear-gradient(
            100deg,
            #fff 0%,
            #a5f3fc 35%,
            #818cf8 70%,
            #f0abfc 100%
          );

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;

          background-size: 180% auto;

          animation: gradientMove 7s ease-in-out infinite;
        }

        .hero-copy {
          max-width: 650px;

          color: #94a3b8;

          font-size: 15px;

          line-height: 1.8;
        }

        .hero-copy strong {
          color: #e2e8f0;
        }

        .hero-actions {
          display: flex;

          gap: 12px;

          flex-wrap: wrap;

          margin-top: 30px;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          text-decoration: none;

          border-radius: 14px;

          padding: 13px 17px;

          font-size: 12px;

          font-weight: 800;

          transition: 0.25s ease;
        }

        .primary-btn {
          color: #031017;

          background: linear-gradient(135deg, #67e8f9, #60a5fa);

          box-shadow: 0 0 30px rgba(34, 211, 238, 0.18);
        }

        .secondary-btn {
          color: #dbeafe;

          border: 1px solid rgba(148, 163, 184, 0.18);

          background: rgba(15, 23, 42, 0.55);

          backdrop-filter: blur(15px);
        }

        .primary-btn:hover,
        .secondary-btn:hover {
          transform: translateY(-3px);
        }

        .availability {
          display: flex;

          align-items: center;

          gap: 8px;

          margin-top: 22px;

          color: #64748b;

          font-size: 11px;
        }

        .availability span {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #34d399;

          box-shadow: 0 0 13px #34d399;
        }

        /* =========================
           BÜYÜK MÜZİK OYNATICI
           ========================= */

        .music-player {
          width: min(100%, 560px);

          min-height: 94px;

          margin-top: 28px;

          padding: 16px 18px;

          display: flex;

          align-items: center;

          gap: 15px;

          text-align: left;

          border-radius: 22px;

          border: 1px solid rgba(103, 232, 249, 0.18);

          background:
            radial-gradient(
              circle at 0% 50%,
              rgba(34, 211, 238, 0.12),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              rgba(15, 23, 42, 0.9),
              rgba(6, 10, 19, 0.78)
            );

          color: #fff;

          cursor: pointer;

          position: relative;

          overflow: hidden;

          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.28),
            inset 0 1px rgba(255, 255, 255, 0.04);

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .music-player::before {
          content: "";

          position: absolute;

          inset: 0;

          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(103, 232, 249, 0.08) 50%,
            transparent 80%
          );

          transform: translateX(-100%);

          transition: transform 0.7s ease;

          pointer-events: none;
        }

        .music-player:hover {
          transform: translateY(-4px);

          border-color: rgba(103, 232, 249, 0.38);

          box-shadow:
            0 25px 75px rgba(0, 0, 0, 0.38),
            0 0 40px rgba(34, 211, 238, 0.09),
            inset 0 1px rgba(255, 255, 255, 0.06);
        }

        .music-player:hover::before {
          transform: translateX(100%);
        }

        .music-player.playing {
          border-color: rgba(103, 232, 249, 0.42);

          box-shadow:
            0 25px 80px rgba(0, 0, 0, 0.38),
            0 0 45px rgba(34, 211, 238, 0.14),
            inset 0 1px rgba(255, 255, 255, 0.06);
        }

        .music-player-icon {
          width: 58px;
          height: 58px;

          flex: 0 0 58px;

          display: grid;

          place-items: center;

          border-radius: 18px;

          color: #031017;

          background: linear-gradient(135deg, #67e8f9, #60a5fa, #a78bfa);

          box-shadow:
            0 0 25px rgba(34, 211, 238, 0.25),
            inset 0 1px rgba(255, 255, 255, 0.5);

          animation: musicPulse 3s ease-in-out infinite;
        }

        .music-player-content {
          min-width: 0;

          display: flex;

          flex-direction: column;

          gap: 4px;

          flex: 1;
        }

        .music-label {
          color: #67e8f9;

          font:
            800 9px ui-monospace,
            monospace;

          letter-spacing: 0.16em;

          text-transform: uppercase;
        }

        .music-player-content strong {
          color: #fff;

          font-size: 15px;

          font-weight: 850;

          white-space: nowrap;

          overflow: hidden;

          text-overflow: ellipsis;
        }

        .music-player-content small {
          color: #64748b;

          font-size: 10px;

          line-height: 1.4;
        }

        .music-bars {
          height: 35px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 4px;

          padding: 0 5px;
        }

        .music-bars i {
          display: block;

          width: 4px;

          height: 12px;

          border-radius: 999px;

          background: #67e8f9;

          box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);

          animation: musicBars 1s ease-in-out infinite;
          animation-play-state: paused;
        }

        .music-player.playing .music-bars i {
          animation-play-state: running;
        }

        .music-bars i:nth-child(1) {
          animation-delay: 0s;
        }

        .music-bars i:nth-child(2) {
          animation-delay: 0.15s;
        }

        .music-bars i:nth-child(3) {
          animation-delay: 0.3s;
        }

        .music-bars i:nth-child(4) {
          animation-delay: 0.45s;
        }

        .music-bars i:nth-child(5) {
          animation-delay: 0.6s;
        }

        /* =========================
           HERO VISUAL
           ========================= */

        .hero-visual {
          min-height: 550px;

          width: 100%;

          display: flex;

          align-items: center;

          justify-content: center;

          justify-self: center;

          position: relative;

          perspective: 1200px;

          overflow: visible;
        }

        /* =========================
           PROFİL FOTOĞRAFI
           ========================= */

        .portrait-frame {
          position: absolute;

          width: 280px;
          height: 280px;

          left: 50%;
          top: 50%;

          margin: 0;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          padding: 3px;

          background: conic-gradient(
            from 0deg,
            #22d3ee,
            #60a5fa,
            #a78bfa,
            #f472b6,
            #22d3ee
          );

          box-shadow:
            0 0 25px rgba(34, 211, 238, 0.45),
            0 0 60px rgba(34, 211, 238, 0.25),
            0 0 110px rgba(167, 139, 250, 0.18),
            0 30px 90px rgba(0, 0, 0, 0.65);

          animation:
            portraitGlow 4s ease-in-out infinite,
            portraitFloat 6s ease-in-out infinite;

          z-index: 10;
        }

        .portrait-inner {
          width: 100%;
          height: 100%;

          border-radius: 50%;

          overflow: hidden;

          background: #070b14;

          position: relative;

          border: 2px solid rgba(255, 255, 255, 0.12);
        }

        .portrait-inner img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;

          border-radius: 50%;

          filter: saturate(1.08) contrast(1.04);

          transition: transform 0.5s ease;
        }

        .portrait-inner::after {
          content: "";

          position: absolute;

          inset: 0;

          border-radius: 50%;

          pointer-events: none;

          background:
            radial-gradient(
              circle at 30% 20%,
              rgba(255, 255, 255, 0.18),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              rgba(34, 211, 238, 0.08),
              transparent 45%,
              rgba(167, 139, 250, 0.12)
            );

          mix-blend-mode: screen;
        }

        .portrait-label {
          position: absolute;

          bottom: 18px;

          left: 22px;
          right: 22px;

          z-index: 5;

          font:
            700 9px/1.5 ui-monospace,
            monospace;

          color: #a5f3fc;

          text-align: center;

          text-shadow: 0 0 12px rgba(34, 211, 238, 0.5);
        }

        /* =========================
           ORBITAL SYSTEM
           ========================= */

        .orbital-system {
          width: 530px;
          height: 530px;

          position: relative;

          transform: translateY(calc(var(--scroll-y) * -0.03px)) rotateX(12deg)
            rotateZ(-8deg);

          transform-style: preserve-3d;
        }

        .orbital-glow {
          position: absolute;

          inset: 18%;

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(34, 211, 238, 0.17),
            rgba(99, 102, 241, 0.07) 35%,
            transparent 68%
          );

          filter: blur(18px);
        }

        .core {
          position: absolute;

          inset: 39%;

          border-radius: 50%;

          padding: 2px;

          background: conic-gradient(
            from 0deg,
            #22d3ee,
            #818cf8,
            #f472b6,
            #22d3ee
          );

          animation: spin 8s linear infinite;

          box-shadow: 0 0 70px rgba(34, 211, 238, 0.22);

          z-index: 5;
        }

        .core-inner {
          width: 100%;
          height: 100%;

          border-radius: 50%;

          background: #060a13;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          color: #67e8f9;

          gap: 5px;
        }

        .core-inner span {
          font:
            800 11px ui-monospace,
            monospace;

          color: #e0f2fe;
        }

        .orbit {
          position: absolute;

          inset: 50%;

          border: 1px solid rgba(103, 232, 249, 0.16);

          border-radius: 50%;

          transform-style: preserve-3d;
        }

        .orbit-1 {
          width: 290px;
          height: 290px;

          margin: -145px;

          transform: rotateX(70deg) rotateY(12deg);

          animation: orbitSpin 12s linear infinite;
        }

        .orbit-2 {
          width: 370px;
          height: 370px;

          margin: -185px;

          transform: rotateX(65deg) rotateY(-30deg);

          animation: orbitSpin 16s linear infinite reverse;
        }

        .orbit-3 {
          width: 455px;
          height: 455px;

          margin: -227px;

          transform: rotateX(75deg) rotateY(48deg);

          animation: orbitSpin 20s linear infinite;
        }

        .orbit-4 {
          width: 520px;
          height: 520px;

          margin: -260px;

          transform: rotateX(67deg) rotateY(-55deg);

          animation: orbitSpin 25s linear infinite reverse;
        }

        .planet {
          position: absolute;

          top: -10px;

          left: 50%;

          width: 28px;
          height: 28px;

          margin-left: -14px;

          border-radius: 50%;

          display: grid;

          place-items: center;

          color: #e0f2fe;

          background: #0b1220;

          border: 1px solid rgba(103, 232, 249, 0.5);

          box-shadow: 0 0 25px rgba(34, 211, 238, 0.35);
        }

        .p2 {
          color: #c4b5fd;

          border-color: rgba(167, 139, 250, 0.6);

          box-shadow: 0 0 25px rgba(167, 139, 250, 0.35);
        }

        .p3 {
          color: #f9a8d4;

          border-color: rgba(244, 114, 182, 0.6);

          box-shadow: 0 0 25px rgba(244, 114, 182, 0.35);
        }

        .p4 {
          color: #86efac;

          border-color: rgba(52, 211, 153, 0.6);

          box-shadow: 0 0 25px rgba(52, 211, 153, 0.35);
        }

        /* =========================
           STATS
           ========================= */

        .stats {
          max-width: 1180px;

          margin: -35px auto 100px;

          padding: 0 22px;

          position: relative;

          z-index: 5;
        }

        .stats-grid {
          display: grid;

          grid-template-columns: repeat(4, 1fr);

          border: 1px solid var(--line);

          border-radius: 24px;

          overflow: hidden;

          background: rgba(8, 13, 24, 0.58);

          backdrop-filter: blur(18px);

          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.28);
        }

        .stat {
          padding: 25px;

          border-right: 1px solid var(--line);

          position: relative;
        }

        .stat:last-child {
          border-right: 0;
        }

        .stat-number {
          font-size: 27px;

          font-weight: 900;

          color: #fff;

          letter-spacing: -0.04em;
        }

        .stat-label {
          margin-top: 5px;

          color: #64748b;

          font:
            10px ui-monospace,
            monospace;

          text-transform: uppercase;

          letter-spacing: 0.1em;
        }

        /* =========================
           SECTIONS
           ========================= */

        .section {
          max-width: 1180px;

          margin: 0 auto;

          padding: 90px 22px;

          position: relative;

          z-index: 3;
        }

        .section-heading {
          display: flex;

          align-items: end;

          justify-content: space-between;

          gap: 20px;

          margin-bottom: 34px;
        }

        .section-kicker {
          color: #22d3ee;

          font:
            700 10px ui-monospace,
            monospace;

          letter-spacing: 0.18em;

          text-transform: uppercase;

          margin-bottom: 9px;
        }

        .section-title {
          color: #fff;

          font-size: clamp(28px, 4vw, 45px);

          line-height: 1;

          letter-spacing: -0.05em;

          margin: 0;
        }

        .section-desc {
          max-width: 430px;

          color: #64748b;

          font-size: 12px;

          line-height: 1.7;
        }

        .glass {
          background: linear-gradient(
            145deg,
            rgba(15, 23, 42, 0.72),
            rgba(6, 10, 19, 0.58)
          );

          border: 1px solid var(--line);

          backdrop-filter: blur(18px);

          box-shadow:
            inset 0 1px rgba(255, 255, 255, 0.035),
            0 25px 80px rgba(0, 0, 0, 0.2);
        }

        /* =========================
           TILT CARDS
           ========================= */

        .tilt-card {
          --rx: 0deg;
          --ry: 0deg;
          --mx: 50%;
          --my: 50%;

          transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry));

          transform-style: preserve-3d;

          transition: transform 0.15s ease-out;

          position: relative;
        }

        .tilt-card::before {
          content: "";

          position: absolute;

          inset: 0;

          border-radius: inherit;

          pointer-events: none;

          background: radial-gradient(
            circle at var(--mx) var(--my),
            rgba(103, 232, 249, 0.12),
            transparent 32%
          );

          opacity: 0.8;
        }

        /* =========================
           SKILLS
           ========================= */

        .skills-layout {
          display: grid;

          grid-template-columns: 0.7fr 1.3fr;

          gap: 18px;
        }

        .skills-main {
          padding: 28px;

          border-radius: 26px;

          min-height: 310px;
        }

        .skills-grid {
          display: flex;

          flex-wrap: wrap;

          gap: 9px;

          margin-top: 25px;
        }

        .skill {
          padding: 9px 12px;

          border-radius: 11px;

          font:
            600 10px ui-monospace,
            monospace;

          border: 1px solid;

          transition: 0.25s;
        }

        .skill:hover {
          transform: translateY(-3px) scale(1.03);
        }

        .skill-yellow {
          color: #fde047;
          background: #eab3080d;
          border-color: #eab30830;
        }

        .skill-blue {
          color: #60a5fa;
          background: #3b82f60d;
          border-color: #3b82f630;
        }

        .skill-slate {
          color: #cbd5e1;
          background: #64748b0d;
          border-color: #64748b30;
        }

        .skill-indigo {
          color: #818cf8;
          background: #6366f10d;
          border-color: #6366f130;
        }

        .skill-cyan {
          color: #67e8f9;
          background: #06b6d40d;
          border-color: #06b6d430;
        }

        .skill-sky {
          color: #7dd3fc;
          background: #0ea5e90d;
          border-color: #0ea5e930;
        }

        .skill-white {
          color: #fff;
          background: #ffffff0d;
          border-color: #ffffff22;
        }

        .skill-amber {
          color: #fbbf24;
          background: #f59e0b0d;
          border-color: #f59e0b30;
        }

        .skill-orange {
          color: #fb923c;
          background: #f973160d;
          border-color: #f9731630;
        }

        .skill-emerald {
          color: #34d399;
          background: #10b9810d;
          border-color: #10b98130;
        }

        .skill-teal {
          color: #2dd4bf;
          background: #14b8a60d;
          border-color: #14b8a630;
        }

        .skill-rose {
          color: #fb7185;
          background: #f43f5e0d;
          border-color: #f43f5e30;
        }

        /* =========================
           TERMINAL
           ========================= */

        .terminal {
          border-radius: 26px;

          overflow: hidden;

          min-height: 310px;

          background: #050810;

          border: 1px solid rgba(148, 163, 184, 0.13);

          box-shadow: 0 35px 90px rgba(0, 0, 0, 0.35);
        }

        .terminal-top {
          padding: 12px 15px;

          border-bottom: 1px solid rgba(148, 163, 184, 0.1);

          display: flex;

          align-items: center;

          gap: 6px;
        }

        .terminal-top i {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: #334155;
        }

        .terminal-body {
          padding: 25px;

          font:
            11px/2 ui-monospace,
            monospace;

          color: #64748b;
        }

        .terminal-body .cmd {
          color: #67e8f9;
        }

        .terminal-body .ok {
          color: #34d399;
        }

        .terminal-body .accent {
          color: #c4b5fd;
        }

        /* =========================
           EXPERIENCE
           ========================= */

        .experience-grid {
          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 16px;
        }

        .experience {
          padding: 25px;

          border-radius: 24px;

          min-height: 235px;
        }

        .experience .date {
          color: #22d3ee;

          font:
            10px ui-monospace,
            monospace;
        }

        .experience h3 {
          margin: 12px 0 8px;

          color: #fff;

          font-size: 16px;

          letter-spacing: -0.02em;
        }

        .experience p {
          margin: 0;

          color: #64748b;

          font-size: 11px;

          line-height: 1.75;
        }

        /* =========================
           PROJECTS
           ========================= */

        .projects {
          display: grid;

          grid-template-columns: repeat(12, 1fr);

          gap: 16px;
        }

        .project {
          border-radius: 26px;

          overflow: hidden;

          min-height: 310px;

          padding: 25px;

          display: flex;

          flex-direction: column;

          justify-content: space-between;
        }

        .project:nth-child(1),
        .project:nth-child(4) {
          grid-column: span 7;
        }

        .project:nth-child(2),
        .project:nth-child(3) {
          grid-column: span 5;
        }

        .project:nth-child(5) {
          grid-column: span 12;

          min-height: 250px;
        }

        .project-visual {
          height: 125px;

          border-radius: 19px;

          margin-bottom: 22px;

          position: relative;

          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.07);

          background:
            radial-gradient(
              circle at 20% 30%,
              rgba(34, 211, 238, 0.28),
              transparent 30%
            ),
            radial-gradient(
              circle at 75% 70%,
              rgba(129, 140, 248, 0.25),
              transparent 34%
            ),
            linear-gradient(135deg, #0a1120, #070a13);
        }

        .project-visual::before {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          border: 1px solid rgba(103, 232, 249, 0.25);

          border-radius: 50%;

          left: 45%;
          top: -35px;

          animation: spin 12s linear infinite;
        }

        .project-visual::after {
          content: "";

          position: absolute;

          inset: 0;

          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.08) 48%,
            transparent 70%
          );

          transform: translateX(-100%);

          animation: shine 4.5s infinite;
        }

        .project-icon {
          position: absolute;

          left: 20px;
          top: 20px;

          width: 48px;
          height: 48px;

          border-radius: 15px;

          display: grid;

          place-items: center;

          background: rgba(2, 6, 23, 0.7);

          border: 1px solid rgba(103, 232, 249, 0.22);

          color: #67e8f9;

          box-shadow: 0 0 30px rgba(34, 211, 238, 0.15);

          z-index: 2;
        }

        .tag {
          display: inline-flex;

          width: fit-content;

          padding: 6px 8px;

          border-radius: 8px;

          color: #67e8f9;

          background: rgba(34, 211, 238, 0.07);

          border: 1px solid rgba(34, 211, 238, 0.15);

          font:
            700 9px ui-monospace,
            monospace;

          text-transform: uppercase;

          letter-spacing: 0.07em;
        }

        .project h3 {
          color: #fff;

          margin: 12px 0 7px;

          font-size: 17px;
        }

        .project p {
          color: #64748b;

          font-size: 11px;

          line-height: 1.7;

          margin: 0;
        }

        .project-footer {
          display: flex;

          justify-content: space-between;

          align-items: center;

          gap: 10px;

          margin-top: 20px;

          padding-top: 15px;

          border-top: 1px solid rgba(148, 163, 184, 0.1);
        }

        .project-link {
          color: #a5f3fc;

          text-decoration: none;

          font:
            700 10px ui-monospace,
            monospace;

          display: flex;

          align-items: center;

          gap: 6px;
        }

        /* =========================
           EDUCATION
           ========================= */

        .education-card {
          border-radius: 26px;

          padding: 30px;

          display: grid;

          grid-template-columns: 130px 1fr;

          gap: 25px;

          align-items: center;
        }

        .edu-year {
          color: #22d3ee;

          font:
            800 12px ui-monospace,
            monospace;
        }

        .education-card h3 {
          margin: 0 0 7px;

          color: #fff;

          font-size: 18px;
        }

        .education-card p {
          margin: 0;

          color: #64748b;

          font-size: 11px;

          line-height: 1.7;
        }

        /* =========================
           PRIVATE GALLERY
           ========================= */

        .gallery {
          border-radius: 28px;

          padding: 28px;

          text-align: center;
        }

        .lock-orb {
          width: 68px;
          height: 68px;

          margin: 0 auto 16px;

          display: grid;

          place-items: center;

          border-radius: 22px;

          color: #67e8f9;

          background: radial-gradient(
            circle,
            rgba(34, 211, 238, 0.15),
            rgba(34, 211, 238, 0.02)
          );

          border: 1px solid rgba(34, 211, 238, 0.2);

          box-shadow: 0 0 45px rgba(34, 211, 238, 0.12);
        }

        .gallery h3 {
          color: #fff;

          margin: 0 0 8px;
        }

        .gallery p {
          color: #64748b;

          font-size: 11px;

          line-height: 1.6;
        }

        .gallery-form {
          max-width: 420px;

          margin: 20px auto 0;

          display: flex;

          gap: 8px;
        }

        .gallery-form input {
          flex: 1;

          min-width: 0;

          border: 1px solid rgba(148, 163, 184, 0.15);

          border-radius: 12px;

          padding: 11px 13px;

          color: #fff;

          background: #050810;

          outline: none;

          font-size: 11px;
        }

        .gallery-form input:focus {
          border-color: rgba(34, 211, 238, 0.5);

          box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.06);
        }

        .gallery-form button {
          border: 0;

          border-radius: 12px;

          padding: 0 18px;

          background: #67e8f9;

          color: #031017;

          font-weight: 900;

          cursor: pointer;
        }

        .gallery-form button:hover {
          transform: translateY(-1px);

          box-shadow: 0 0 25px rgba(103, 232, 249, 0.25);
        }

        .photo-grid {
          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 12px;

          margin-top: 22px;
        }

        .photo {
          height: 190px;

          border-radius: 18px;

          overflow: hidden;

          border: 1px solid rgba(148, 163, 184, 0.12);
        }

        .photo img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transition: 0.5s;
        }

        .photo:hover img {
          transform: scale(1.06);
        }

        /* =========================
           FOOTER
           ========================= */

        footer {
          border-top: 1px solid var(--line);

          padding: 55px 22px;

          text-align: center;

          color: #475569;

          font:
            10px/1.8 ui-monospace,
            monospace;

          position: relative;

          z-index: 3;
        }

        .footer-name {
          color: #67e8f9;

          font-size: 12px;

          font-weight: 900;

          margin-top: 10px;
        }

        /* =========================
           ANIMATIONS
           ========================= */

        @keyframes pulse {
          50% {
            opacity: 0.45;
            transform: scale(0.75);
          }
        }

        @keyframes portraitFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }

          50% {
            transform: translate(-50%, -50%) translateY(-12px);
          }
        }

        @keyframes portraitGlow {
          0%,
          100% {
            box-shadow:
              0 0 25px rgba(34, 211, 238, 0.4),
              0 0 60px rgba(34, 211, 238, 0.22),
              0 0 110px rgba(167, 139, 250, 0.15),
              0 30px 90px rgba(0, 0, 0, 0.65);
          }

          50% {
            box-shadow:
              0 0 35px rgba(34, 211, 238, 0.65),
              0 0 80px rgba(96, 165, 250, 0.35),
              0 0 140px rgba(244, 114, 182, 0.2),
              0 35px 100px rgba(0, 0, 0, 0.7);
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitSpin {
          to {
            transform: rotateZ(360deg) rotateX(67deg);
          }
        }

        @keyframes gradientMove {
          0%,
          100% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shine {
          55%,
          100% {
            transform: translateX(130%);
          }
        }

        @keyframes musicBars {
          0%,
          100% {
            height: 8px;
          }

          50% {
            height: 31px;
          }
        }

        @keyframes musicPulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.05);
          }
        }

        /* =========================
           TABLET
           ========================= */

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;

            padding-top: 55px;

            min-height: auto;

            gap: 20px;
          }

          .hero-visual {
            min-height: 480px;

            width: 100%;
          }

          .hero > div:first-child {
            width: 100%;
          }

          .music-player {
            max-width: 600px;
          }

          .skills-layout {
            grid-template-columns: 1fr;
          }

          .experience-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat:nth-child(2) {
            border-right: 0;
          }

          .stat:nth-child(-n + 2) {
            border-bottom: 1px solid var(--line);
          }

          .projects .project {
            grid-column: span 12 !important;
          }
        }

        /* =========================
           MOBILE
           ========================= */

        @media (max-width: 620px) {
          .topbar-inner {
            padding: 12px 16px;
          }

          .navlinks a {
            display: none;
          }

          .music-button {
            padding: 8px 10px;
          }

          .hero {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero-title {
            font-size: 53px;
          }

          .hero-copy {
            font-size: 14px;
          }

          .hero-actions {
            margin-top: 24px;
          }

          .availability {
            line-height: 1.5;
          }

          .music-player {
            width: 100%;

            min-height: 88px;

            padding: 13px;

            gap: 11px;

            border-radius: 19px;
          }

          .music-player-icon {
            width: 50px;
            height: 50px;

            flex-basis: 50px;

            border-radius: 15px;
          }

          .music-player-content strong {
            font-size: 13px;
          }

          .music-player-content small {
            font-size: 9px;
          }

          .music-bars {
            gap: 3px;
          }

          .music-bars i {
            width: 3px;
          }

          .hero-visual {
            min-height: 400px;

            transform: scale(0.78);

            margin: -45px 0;

            width: 128%;
            margin-left: -14%;
          }

          .portrait-frame {
            width: 280px;
            height: 280px;

            left: 50%;
            top: 50%;
          }

          .orbital-system {
            transform: translateY(calc(var(--scroll-y) * -0.03px))
              rotateX(12deg) rotateZ(-8deg);
          }

          .stats {
            padding: 0 16px;
          }

          .section {
            padding: 65px 16px;
          }

          .section-heading {
            display: block;
          }

          .section-desc {
            margin-top: 14px;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .stat {
            padding: 18px;
          }

          .stat-number {
            font-size: 23px;
          }

          .education-card {
            grid-template-columns: 1fr;
          }

          .photo-grid {
            grid-template-columns: 1fr;
          }

          .photo {
            height: 240px;
          }

          .gallery-form {
            flex-direction: column;
          }

          .gallery-form button {
            height: 42px;
          }

          .brand {
            font-size: 10px;
          }
        }

        /* =========================
           VERY SMALL PHONES
           ========================= */

        @media (max-width: 390px) {
          .hero-title {
            font-size: 47px;
          }

          .music-player {
            min-height: 82px;
          }

          .music-player-icon {
            width: 46px;
            height: 46px;

            flex-basis: 46px;
          }

          .music-bars {
            display: none;
          }

          .hero-visual {
            transform: scale(0.7);

            width: 142%;

            margin-left: -21%;
          }
        }
      `}</style>

      <div className="noise" />

      {/* =========================
          AUDIO
          ========================= */}

      <audio ref={audioRef} loop preload="auto" src="/music.mp3" />

      {/* =========================
          NAVBAR
          ========================= */}

      <header className="topbar">
        <div className="topbar-inner">
          <a href="#home" className="brand">
            <span className="brand-dot" />
            AYŞE TURAN <span style={{ color: "#475569" }}>//</span> SOFTWARE
            ENGINEER
          </a>

          <nav className="navlinks">
            <a href="#skills">Skills</a>

            <a href="#experience">Experience</a>

            <a href="#projects">Proje</a>

            <a href="#education">Education</a>

            <button
              className="music-button"
              onClick={toggleMuzik}
              type="button"
              aria-label="Müziği aç veya kapat"
            >
              {isPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}

              {isPlaying ? "Müzik Açık" : "Müzik"}
            </button>
          </nav>
        </div>
      </header>

      <main id="home">
        {/* =========================
            HERO
            ========================= */}

        <section className="hero">
          <div>
            <div className="eyebrow">
              <Sparkles size={13} />
              YENİ FIRSATLARA AÇIĞIM
            </div>

            <h1 className="hero-title">
              Ben
              <span className="gradient">
                dijital deneyimler geliştiriyorum.
              </span>
            </h1>

            <p className="hero-copy">
              Fırat Üniversitesi <strong>Yazılım Mühendisliği</strong>{" "}
              mezunuyum. React Native, Firebase ve modern web teknolojileriyle
              gerçek ürünler geliştiriyorum. Mobil fikirleri çalışan,
              yayınlanabilir deneyimlere dönüştürmeye calışıyorum.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                Projelerimi incele
                <ArrowRight size={15} />
              </a>

              <a
                className="secondary-btn"
                href="mailto:ayse0025turan@gmail.com"
              >
                <Mail size={15} />
                İletişime geç
              </a>
            </div>

            <div className="availability">
              <span />
              Yazılım ve mobil geliştirme fırsatlarına açığım
            </div>

            {/* =========================
                BÜYÜK MÜZİK ALANI
                ========================= */}

            <button
              type="button"
              className={`music-player ${isPlaying ? "playing" : ""}`}
              onClick={toggleMuzik}
              aria-label={
                isPlaying ? "Müziği durdur" : "Favori müziğimi başlat"
              }
            >
              <div className="music-player-icon">
                {isPlaying ? <Volume2 size={25} /> : <VolumeX size={25} />}
              </div>

              <div className="music-player-content">
                <span className="music-label">
                  {isPlaying ? "ŞU AN ÇALIYOR" : "FAVORİ MÜZİĞİM"}
                </span>

                <strong>Benim favori müziğim</strong>

                <small>
                  {isPlaying
                    ? "Müzik açık · Durdurmak için tıkla"
                    : "Dinlemek için tıkla"}
                </small>
              </div>

              <div className="music-bars" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </button>
          </div>

          {/* =========================
              PROFILE / ORBIT
              ========================= */}

          <div className="hero-visual">
            <OrbitalSystem />

            <div className="portrait-frame">
              <div className="portrait-inner">
                <img src="/photo1.jpeg" alt="Ayşe Turan" />

                <div className="portrait-label">
                  <div style={{ color: "#64748b" }}>KİMLİK // 001</div>

                  <div>AYŞE TURAN · MOBİL YAZILIM GELİŞTİRİCİ</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            STATS
            ========================= */}

        <section className="stats">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">2025</div>
              <div className="stat-label">Mezuniyet</div>
            </div>

            <div className="stat">
              <div className="stat-number">12+</div>
              <div className="stat-label">Teknoloji</div>
            </div>

            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Proje</div>
            </div>

            <div className="stat">
              <div className="stat-number">01</div>
              <div className="stat-label">Yayındaki Ürün</div>
            </div>
          </div>
        </section>

        {/* =========================
            SKILLS
            ========================= */}

        <section id="skills" className="section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">01 / TEKNOLOJİLER</div>

              <h2 className="section-title">Kullandığım teknolojiler.</h2>
            </div>

            <p className="section-desc">
              Web arayüzleri, mobil uygulamalar, backend entegrasyonları ve
              yayın süreçleri. Kartların üzerine geldiğinde ışık, derinlik ve 3D
              hareket efektleri oluşur.
            </p>
          </div>

          <div className="skills-layout">
            <TiltCard className="skills-main glass">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div className="section-kicker" style={{ margin: 0 }}>
                    ANA TEKNOLOJİLER
                  </div>

                  <h3
                    style={{
                      color: "#fff",
                      margin: "8px 0 0",
                      fontSize: 20,
                    }}
                  >
                    Geliştirme araçlarım
                  </h3>
                </div>

                <Zap size={22} color="#67e8f9" />
              </div>

              <div className="skills-grid">
                {skills.map(([name, cls]) => (
                  <span className={`skill ${cls}`} key={name}>
                    {name}
                  </span>
                ))}
              </div>
            </TiltCard>

            <div className="terminal">
              <div className="terminal-top">
                <i />
                <i />
                <i />

                <span
                  style={{
                    marginLeft: 8,
                    color: "#475569",
                    font: "10px ui-monospace",
                  }}
                >
                  ayse@portfolio ~
                </span>
              </div>

              <div className="terminal-body">
                <div>
                  <span className="cmd">$</span> whoami
                </div>

                <div className="accent">ayse.turan / software-engineer</div>

                <br />

                <div>
                  <span className="cmd">$</span> stack --primary
                </div>

                <div>React Native · React · Firebase · REST · Git</div>

                <br />

                <div>
                  <span className="cmd">$</span> build --status
                </div>

                <div className="ok">✓ mobile systems online</div>

                <div className="ok">✓ production mindset enabled</div>

                <div className="ok">✓ shipping mode active</div>

                <br />

                <div>
                  <span className="cmd">$</span>{" "}
                  <span className="accent">_</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            EXPERIENCE
            ========================= */}

        <section id="experience" className="section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 / DENEYİM</div>

              <h2 className="section-title">
                Gerçek ürün geliştirmeyi öğrendiğim yerler.
              </h2>
            </div>
          </div>

          <div className="experience-grid">
            <TiltCard className="experience glass">
              <Briefcase size={22} color="#67e8f9" />

              <div className="date" style={{ marginTop: 20 }}>
                HAZ 2025 — ARA 2025
              </div>

              <h3>React Native Geliştirici · Nevera Tech</h3>

              <p>
                Çapraz platform mobil uygulamalar, Firebase entegrasyonları,
                REST API&apos;ler ve performans optimizasyonu.
              </p>
            </TiltCard>

            <TiltCard className="experience glass">
              <Rocket size={22} color="#a78bfa" />

              <div
                className="date"
                style={{
                  marginTop: 20,
                  color: "#a78bfa",
                }}
              >
                2025 · STAJ
              </div>

              <h3>Yazılım Geliştirme Stajyeri · BOTAŞ</h3>

              <p>
                Kurumsal mobil yazılımlar, Firebase gerçek zamanlı veri
                yapıları, API entegrasyonu, test ve teknik dokümantasyon.
              </p>
            </TiltCard>

            <TiltCard className="experience glass">
              <Layers3 size={22} color="#f472b6" />

              <div
                className="date"
                style={{
                  marginTop: 20,
                  color: "#f472b6",
                }}
              >
                2024 · STAJ
              </div>

              <h3>Mobil Geliştirme · Code23 Fırat</h3>

              <p>
                Sıfırdan mobil prototipler, arayüz bileşenleri ve çevik yazılım
                geliştirme süreçleri.
              </p>
            </TiltCard>
          </div>
        </section>

        {/* =========================
            PROJECTS
            ========================= */}

        <section id="projects" className="section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">03 / SEÇİLMİŞ PROJELER</div>

              <h2 className="section-title">
                Gerçekten geliştirdiğim projeler.
              </h2>
            </div>

            <p className="section-desc">
              Kartların üzerine gel. Yayındaki çalışmalarımı ve araştırma
              projelerimi incele.
            </p>
          </div>

          <div className="projects">
            {/* PROJECT 1 */}

            <TiltCard className="project glass">
              <div>
                <div className="project-visual">
                  <div className="project-icon">
                    <Rocket size={23} />
                  </div>
                </div>

                <span className="tag">Geliştiriliyor</span>

                <h3>ArenA Mobile Application</h3>

                <p>
                  Aktif olarak geliştirdiğim yeni nesil mobil proje. Google Play
                  ve App Store yayını için hazırlanıyor.
                </p>
              </div>

              <div className="project-footer">
                <span
                  style={{
                    color: "#fbbf24",
                    fontSize: 10,
                  }}
                >
                  GELİŞTİRME AŞAMASINDA
                </span>

                <span className="project-link">
                  YAKINDA
                  <ArrowRight size={12} />
                </span>
              </div>
            </TiltCard>

            {/* PROJECT 2 */}

            <TiltCard className="project glass">
              <div>
                <div className="project-visual">
                  <div className="project-icon">
                    <Star size={23} />
                  </div>
                </div>

                <span className="tag">Google Play</span>

                <h3>Rüya Yorumlama</h3>

                <p>
                  React Native + Firebase Auth + Firestore ile geliştirilen
                  yayındaki mobil ürün.
                </p>
              </div>

              <div className="project-footer">
                <span
                  style={{
                    color: "#67e8f9",
                    fontSize: 10,
                  }}
                >
                  YAYINDA
                </span>

                <a
                  className="project-link"
                  href="https://play.google.com/store/apps/details?id=com.dreamapp_lunaverse&hl=tr"
                  target="_blank"
                  rel="noreferrer"
                >
                  İNCELE
                  <ExternalLink size={12} />
                </a>
              </div>
            </TiltCard>

            {/* PROJECT 3 */}

            <TiltCard className="project glass">
              <div>
                <div className="project-visual">
                  <div className="project-icon">
                    <Terminal size={23} />
                  </div>
                </div>

                <span className="tag">Bitirme Projesi</span>

                <h3>Haber Mobil Uygulaması</h3>

                <p>
                  REST API tabanlı haber akışı ve kategori yönetimi içeren
                  bitirme projesi.
                </p>
              </div>

              <div className="project-footer">
                <span
                  style={{
                    color: "#a78bfa",
                    fontSize: 10,
                  }}
                >
                  AKADEMİK
                </span>

                <a
                  className="project-link"
                  href="https://www.linkedin.com/posts/ayseturan1_bitirmeprojesi-reactnative-mobiluygulama-activity-7340719256935772160-1hPW"
                  target="_blank"
                  rel="noreferrer"
                >
                  İNCELE
                  <ExternalLink size={12} />
                </a>
              </div>
            </TiltCard>

            {/* PROJECT 4 */}

            <TiltCard className="project glass">
              <div>
                <div className="project-visual">
                  <div className="project-icon">
                    <Calendar size={23} />
                  </div>
                </div>

                <span className="tag">Üniversite</span>

                <h3>Fırat Randevu</h3>

                <p>
                  Fırat Üniversitesi süreçleri için tasarlanmış randevu yönetim
                  ve takip sistemi.
                </p>
              </div>

              <div className="project-footer">
                <span
                  style={{
                    color: "#f472b6",
                    fontSize: 10,
                  }}
                >
                  ÖZEL PROJE
                </span>

                <a
                  className="project-link"
                  href="https://www.linkedin.com/posts/ayseturan1_yazaftlaftm-faftrataesniversitesi-mobil-activity-7253855757283016704-a1y_"
                  target="_blank"
                  rel="noreferrer"
                >
                  İNCELE
                  <ExternalLink size={12} />
                </a>
              </div>
            </TiltCard>

            {/* PROJECT 5 */}

            <TiltCard className="project glass">
              <div>
                <div className="project-visual">
                  <div className="project-icon">
                    <Award size={23} />
                  </div>
                </div>

                <span className="tag">TÜBİTAK 2209-A</span>

                <h3>En Ucuzu Bul — Fiyat Karşılaştırma</h3>

                <p>
                  Mobil tabanlı fiyat karşılaştırma; araştırma, veri toplama ve
                  prototip geliştirme odaklı Ar-Ge projesi.
                </p>
              </div>

              <div className="project-footer">
                <span
                  style={{
                    color: "#67e8f9",
                    fontSize: 10,
                  }}
                >
                  AR-GE PROJESİ
                </span>

                <a
                  className="project-link"
                  href="https://www.linkedin.com/posts/ayseturan1_yeni-projemizi-tamamlad%C4%B1k-en-ucuz-%C3%BCr%C3%BCn%C3%BC-activity-7279841865397391360-r9WY"
                  target="_blank"
                  rel="noreferrer"
                >
                  İNCELE
                  <ExternalLink size={12} />
                </a>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* =========================
            EDUCATION
            ========================= */}

        <section id="education" className="section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">04 / EĞİTİM</div>

              <h2 className="section-title">Sağlam bir temel önemlidir.</h2>
            </div>
          </div>

          <TiltCard className="education-card glass">
            <div>
              <GraduationCap size={40} color="#67e8f9" />

              <div className="edu-year" style={{ marginTop: 18 }}>
                2021 — 2025
              </div>
            </div>

            <div>
              <h3>Fırat Üniversitesi — Yazılım Mühendisliği</h3>

              <p>
                Yazılım mimarileri, nesne yönelimli programlama, mobil
                geliştirme ve algoritmalar üzerine lisans eğitimi.
              </p>
            </div>
          </TiltCard>

          <div style={{ marginTop: 14 }}>
            <TiltCard className="education-card glass">
              <div>
                <BookOpen size={40} color="#a78bfa" />

                <div
                  className="edu-year"
                  style={{
                    marginTop: 18,
                    color: "#a78bfa",
                  }}
                >
                  7 AY
                </div>
              </div>

              <div>
                <h3>Code23 Mobil Geliştirme Programı</h3>

                <p>
                  React Native, Firebase entegrasyonu ve mobil uygulama mimarisi
                  odaklı uygulamalı eğitim.
                </p>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* =========================
            PRIVATE GALLERY
            ========================= */}

        <section className="section" style={{ paddingTop: 30 }}>
          <div className="section-heading">
            <div>
              <div className="section-kicker">05 / ÖZEL ALAN</div>

              <h2 className="section-title">Kamera arkasından.</h2>
            </div>
          </div>

          <div className="gallery glass">
            {!isUnlocked ? (
              <>
                <div className="lock-orb">
                  <Lock size={27} />
                </div>

                <h3>Özel galeri</h3>

                <p>
                  Bu alan yalnızca yakın arkadaşlara özel. Fotoğrafları görmek
                  için şifre gerekiyor.
                </p>

                <form className="gallery-form" onSubmit={handlePasswordCheck}>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrorMsg(false);
                    }}
                    placeholder="Erişim şifresi..."
                    aria-label="Galeri şifresi"
                  />

                  <button type="submit">AÇ</button>
                </form>

                {errorMsg && (
                  <div
                    style={{
                      marginTop: 12,
                      color: "#fb7185",
                      fontSize: 10,
                    }}
                  >
                    Erişim reddedildi. Tekrar deneyin.
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="lock-orb">
                  <Unlock size={27} />
                </div>

                <h3>Erişim sağlandı.</h3>

                <p style={{ color: "#34d399" }}>Özel alana hoş geldiniz.</p>

                <div className="photo-grid">
                  <div className="photo">
                    <img
                      src="/galeri1.jpg"
                      alt="Ayşe Turan özel galeri fotoğrafı 1"
                    />
                  </div>

                  <div className="photo">
                    <img
                      src="/galeri2.jpg"
                      alt="Ayşe Turan özel galeri fotoğrafı 2"
                    />
                  </div>

                  <div className="photo">
                    <img
                      src="/galeri3.jpg"
                      alt="Ayşe Turan özel galeri fotoğrafı 3"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
          ========================= */}

      <footer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginBottom: 15,
          }}
        >
          <a
            href="https://github.com/ayseturan02"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#64748b",
              textDecoration: "none",
              fontSize: 11,
              fontWeight: 800,
            }}
          >
            GITHUB
          </a>

          <a
            href="https://linkedin.com/in/ayseturan1"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#64748b",
              textDecoration: "none",
              fontSize: 11,
              fontWeight: 800,
            }}
          >
            LINKEDIN
          </a>

          <a
            href="mailto:ayse0025turan@gmail.com"
            style={{
              color: "#64748b",
              textDecoration: "none",
              fontSize: 11,
              fontWeight: 800,
            }}
          >
            EMAIL
          </a>
        </div>
        React · Next.js ile geliştirildi.
        <div className="footer-name">© 2026 AYŞE TURAN</div>
      </footer>
    </div>
  );
}
