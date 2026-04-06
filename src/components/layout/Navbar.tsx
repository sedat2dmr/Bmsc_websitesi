"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/services" },
  {
    label: "Sektörler",
    href: "/industries",
    dropdown: [
      { label: "OEM & Tier-1 Üreticiler", href: "/industries/oem-tier1" },
      { label: "Yedek Parça & Aftermarket", href: "/industries/aftermarket" },
      { label: "Elektrikli Araç (EV)", href: "/industries/elektrikli-arac" },
      { label: "Ticari Araçlar", href: "/industries/ticari-araclar" },
      { label: "Otomotiv Elektroniği", href: "/industries/otomotiv-elektronik" },
      { label: "Metal & Döküm", href: "/industries/metal-dokum" },
      { label: "Plastik & Kompozit", href: "/industries/plastik-kompozit" },
      { label: "Lojistik & 3PL", href: "/industries/lojistik" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Hakkımızda", href: "/about" },
  { label: "Ön Değerlendirme", href: "/partner-evaluation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // 'hidden' → 'intro' (B mark in, then full logo wipe) → 'shimmer' (glint sweep) → 'idle'
  const [logoPhase, setLogoPhase] = useState<"hidden" | "intro" | "shimmer" | "idle">("hidden");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setLogoPhase("intro"), 250);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (logoPhase !== "intro") return;
    // 1600ms intro animation → shimmer phase
    const t2 = setTimeout(() => setLogoPhase("shimmer"), 1600);
    return () => clearTimeout(t2);
  }, [logoPhase]);

  useEffect(() => {
    if (logoPhase !== "shimmer") return;
    // 800ms shimmer sweep → idle (scroll-responsive)
    const t3 = setTimeout(() => setLogoPhase("idle"), 800);
    return () => clearTimeout(t3);
  }, [logoPhase]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: "72px" }}>
          {/* Logo — page load: B mark springs in → full logo wipes in → glint sweep
               idle scrolled  : full logo → B mark only (compact)
               idle top       : full logo                               */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative overflow-hidden">
              <motion.div
                initial={{
                  clipPath: "inset(0 74% 0 0 round 1px)",
                  opacity: 0,
                  scale: 0.88,
                  filter: "blur(6px)",
                }}
                animate={
                  logoPhase === "intro"
                    ? {
                        clipPath: [
                          "inset(0 74% 0 0 round 1px)",
                          "inset(0 74% 0 0 round 1px)",
                          "inset(0 0% 0 0 round 1px)",
                        ],
                        opacity: [0, 1, 1],
                        scale: [0.88, 1, 1],
                        filter: ["blur(6px)", "blur(0px)", "blur(0px)"],
                      }
                    : logoPhase === "shimmer"
                    ? {
                        clipPath: "inset(0 0% 0 0 round 1px)",
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                      }
                    : logoPhase === "idle"
                    ? {
                        clipPath: scrolled
                          ? "inset(0 74% 0 0 round 1px)"
                          : "inset(0 0% 0 0 round 1px)",
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                      }
                    : {}
                }
                transition={
                  logoPhase === "intro"
                    ? {
                        duration: 1.55,
                        times: [0, 0.28, 1],
                        ease: [[0.22, 1, 0.36, 1], [0.16, 1, 0.3, 1]],
                      }
                    : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
              >
                <Image
                  src="/images/bmsc-logo.png"
                  alt="BMSC Global"
                  width={160}
                  height={44}
                  className={cn(
                    "object-contain transition-all duration-300",
                    scrolled ? "brightness-100" : "brightness-0 invert"
                  )}
                  priority
                />
              </motion.div>

              {/* Glint sweep — plays once after reveal, then disappears */}
              <AnimatePresence>
                {logoPhase === "shimmer" && (
                  <motion.div
                    key="glint"
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    initial={{ x: "-110%" }}
                    animate={{ x: "210%" }}
                    exit={{ opacity: 0 }}
                    transition={{
                      x: { duration: 0.65, ease: [0.4, 0.14, 0.3, 1] },
                      opacity: { duration: 0.2 },
                    }}
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.12) 38%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.12) 62%, transparent 80%)",
                      mixBlendMode: "overlay",
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((v) => !v)}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                      scrolled
                        ? "text-[#1a1a1a] hover:text-[#1e2148] hover:bg-gray-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn("transition-transform duration-200", dropdownOpen && "rotate-180")}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#1e2148] hover:bg-gray-50 transition-colors duration-150"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                    scrolled
                      ? "text-[#1a1a1a] hover:text-[#1e2148] hover:bg-gray-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
                scrolled
                  ? "bg-[#ffaf30] text-[#1e2148] hover:bg-[#e09e20]"
                  : "bg-[#ffaf30] text-[#1e2148] hover:bg-[#e09e20]"
              )}
            >
              İletişime Geç
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "lg:hidden p-2 rounded-md transition-colors",
                scrolled ? "text-[#1e2148]" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <div className="px-3 py-2 text-sm font-semibold text-[#1e2148]">
                    {link.label}
                  </div>
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#1e2148] hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-800 hover:text-[#1e2148] hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-[#ffaf30] text-[#1e2148] rounded-lg text-sm font-semibold hover:bg-[#e09e20] transition-colors"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
