"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Workflow,
  BarChart3,
  Database,
  FileText,
  TrendingUp,
  Shield,
  Users,
  Factory,
  ArrowRight,
  CheckCircle,
  Target,
  Globe,
  Award,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Workflow,
  BarChart3,
  Database,
  FileText,
  TrendingUp,
  Shield,
  Users,
  Factory,
};

function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);
  return count;
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(value, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl lg:text-6xl font-bold text-[#1e2148] mb-2">
        {suffix === "%" ? `%${count}` : `${count}${suffix}`}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}

const clients = [
  "Ford Otosan", "Tofaş", "Oyak Renault", "Türk Traktör",
  "Bosch TR", "Valeo", "Farplas", "Coskunoz",
];

export default function HomePage() {
  const displayedServices = services.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#0d1422" }}>
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -right-1/4 w-[900px] h-[900px] rounded-full opacity-8"
            style={{ background: "radial-gradient(circle, #1e2148 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, #ffaf30 0%, transparent 70%)", opacity: 0.05 }}
            animate={{ scale: [1, 1.15, 1], x: [0, -15, 0], y: [0, 25, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          {/* Orange accent line top */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ffaf30] to-transparent opacity-60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <div className="w-8 h-px bg-[#ffaf30]" />
                <span className="text-[#ffaf30] text-sm font-semibold tracking-widest uppercase">
                  UK & Avrupa Otomotiv Pazarı
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Otomotiv Sektöründe{" "}
                <span className="text-[#ffaf30]">Küresel İş Geliştirme</span>{" "}
                Danışmanlığı
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-lg leading-relaxed mb-10 max-w-xl"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Türk otomotiv tedarikçilerini İngiltere ve Avrupa'nın önde gelen OEM ve Tier-1 üreticileriyle buluşturuyoruz. Tedarikçi geliştirmeden ihracat stratejisine, kalite sistemlerinden stratejik ortaklıklara kadar kapsamlı danışmanlık.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/partner-evaluation"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffaf30] text-[#1e2148] font-bold rounded-lg hover:bg-[#e09e20] transition-colors duration-200"
                >
                  Ön Değerlendirme Başvurusu
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg transition-colors duration-200 text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  Hizmetlerimiz
                </Link>
              </motion.div>
            </div>

            {/* Right: floating stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { value: "150+", label: "Başarılı Tedarikçi Eşleşmesi", icon: Users },
                { value: "12+", label: "Yıl Sektör Deneyimi", icon: Award },
                { value: "8", label: "Ülkede Aktif Ağ", icon: Globe },
                { value: "%35", label: "Ortalama Maliyet Avantajı", icon: TrendingUp },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                  className="rounded-2xl p-6 text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <stat.icon size={20} className="text-[#ffaf30] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Keşfet</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, rgba(255,175,48,0.5), transparent)" }}
          />
        </motion.div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Çalıştığımız Firmalar & Ortaklar
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {clients.map((c) => (
              <span key={c} className="text-sm font-bold text-gray-300 hover:text-[#1e2148] transition-colors tracking-wide">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <StatCounter value={150} suffix="+" label="Tedarikçi Eşleşmesi" />
            <StatCounter value={35} suffix="%" label="Ortalama Maliyet Avantajı" />
            <StatCounter value={12} suffix="+" label="Yıl Deneyim" />
            <StatCounter value={8} suffix="" label="Ülkede Aktif Ağ" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#1e2148]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1e2148]">
                Hizmetlerimiz
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] max-w-xl leading-tight">
                Otomotiv Tedarik Zincirinde Uçtan Uca Danışmanlık
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#1e2148] font-semibold hover:text-[#ffaf30] transition-colors"
              >
                Tüm Hizmetler
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.map((service, idx) => {
              const Icon = iconMap[service.icon] || Workflow;
              return (
                <AnimatedSection key={service.id} delay={idx * 0.08}>
                  <Link href={service.href}>
                    <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#1e2148]/20 hover:shadow-xl transition-all duration-300 h-full">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#1e2148]"
                        style={{ backgroundColor: "rgba(30,33,72,0.06)" }}
                      >
                        <Icon size={22} className="text-[#1e2148] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0a0a0a] mb-3 group-hover:text-[#1e2148] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                            <CheckCircle size={13} className="text-[#ffaf30] flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY BMSC */}
      <section className="py-28" style={{ backgroundColor: "#0d1422" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#ffaf30]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ffaf30]">
                Neden BMSC Global
              </span>
              <div className="w-8 h-px bg-[#ffaf30]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
              UK Otomotiv Pazarına Açılan Kapınız
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Doğrudan OEM Bağlantıları",
                description:
                  "Ford, Jaguar Land Rover, Nissan ve Stellantis gibi UK'ın önde gelen OEM üreticileriyle kurumsal düzeyde ilişkilerimiz sayesinde doğrudan tedarik zincirlerine erişim sağlıyoruz.",
              },
              {
                icon: Shield,
                title: "IATF & VDA Uzmanlığı",
                description:
                  "IATF 16949, VDA 6.3 ve OEM'e özgü kalite gereksinimleri konusunda derin teknik bilgiye sahip uzmanlarımızla ihracat hazırlığınızı en üst seviyeye taşıyoruz.",
              },
              {
                icon: Globe,
                title: "İki Ülkede Tam Operasyon",
                description:
                  "İngiltere ve Türkiye'deki ofislerimizle yerel iş anlayışını küresel pazar erişimiyle birleştiriyoruz. Dil, kültür ve mevzuat farklarını sizin için yönetiyoruz.",
              },
            ].map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx * 0.15}>
                <div
                  className="rounded-2xl p-8 transition-colors duration-300"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(255,175,48,0.15)" }}
                  >
                    <item.icon size={22} className="text-[#ffaf30]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#1e2148]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1e2148]">
                Çalışma Modelimiz
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] max-w-xl leading-tight">
              İhracattan Ortaklığa 4 Adımda
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Ön Değerlendirme",
                desc: "Üretim kapasitesi, kalite sistemi ve ihracat hazırlığınızı kapsamlı şekilde analiz ediyoruz.",
              },
              {
                step: "02",
                title: "Pazar Eşleşmesi",
                desc: "UK ve AB tedarik zincirlerindeki fırsat alanlarını belirleyip sizinle en uyumlu alıcıları tanımlıyoruz.",
              },
              {
                step: "03",
                title: "Hazırlık & Geliştirme",
                desc: "IATF sertifikasyonu, teknik dokümanlar ve ihracat altyapısı kurulumu için sahada destek sağlıyoruz.",
              },
              {
                step: "04",
                title: "Sürdürülebilir Büyüme",
                desc: "İlk siparişten uzun vadeli ortaklığa geçişi yönetiyor, satış hacminizin büyümesini takip ediyoruz.",
              },
            ].map((item, idx) => (
              <AnimatedSection key={item.step} delay={idx * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-black text-[#ffaf30] opacity-20 mb-2">{item.step}</div>
                  <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 text-gray-200">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="relative overflow-hidden rounded-3xl p-12 lg:p-20 text-center"
              style={{ backgroundColor: "#0d1422" }}
            >
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
                style={{ background: "radial-gradient(circle, #ffaf30, transparent)" }}
              />
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ffaf30] to-transparent opacity-60" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-6 h-px bg-[#ffaf30]" />
                  <span className="text-[#ffaf30] text-xs font-semibold tracking-widest uppercase">
                    Başvurunuzu Yapın
                  </span>
                  <div className="w-6 h-px bg-[#ffaf30]" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
                  UK Pazarına Açılmaya Hazır mısınız?
                </h2>
                <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Ücretsiz ön değerlendirme formunu doldurun, uzman ekibimiz sizinle 48 saat içinde iletişime geçsin.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/partner-evaluation"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffaf30] text-[#1e2148] font-bold rounded-lg hover:bg-[#e09e20] transition-colors duration-200"
                  >
                    Ön Değerlendirme Formu
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg transition-colors duration-200 text-white"
                    style={{ border: "1px solid rgba(255,255,255,0.25)" }}
                  >
                    Bizimle İletişime Geçin
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
