"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Database,
  Cpu,
  BarChart3,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Layers,
  Filter,
  GitBranch,
  Eye,
  Zap,
  Cloud,
  Shield,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const processSteps = [
  {
    step: "01",
    icon: Database,
    title: "Veri Toplama",
    description: "ERP, CRM, IoT sensörleri, web analytics, sosyal medya ve tüm dijital kaynaklardan ham veriyi toplayıp merkezi bir data lake'e aktarıyoruz.",
    details: ["100+ veri kaynağı bağlantısı", "Real-time streaming desteği", "API ve webhook entegrasyonları"],
  },
  {
    step: "02",
    icon: Filter,
    title: "Veri Temizleme",
    description: "Ham verinin %60-80'i kullanılamaz durumda gelir. Otomatik temizleme, normalleştirme ve tutarlılık kontrolü ile güvenilir bir veri zemini kuruyoruz.",
    details: ["Anomali tespiti ve düzeltme", "Duplikasyon eliminasyonu", "Eksik veri doldurma algoritmaları"],
  },
  {
    step: "03",
    icon: Cpu,
    title: "Modelleme & AI",
    description: "Temizlenen veri üzerine makine öğrenmesi ve istatistiksel modeller kurarak tahminleme, segmentasyon ve anomali tespiti yapıyoruz.",
    details: ["Predictive analytics", "Müşteri segmentasyonu", "Talep tahminleme modelleri"],
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Görselleştirme",
    description: "Karmaşık veriyi yöneticilerin anlayabileceği interaktif dashboard'lara ve raporlara dönüştürüyoruz. Veri hikayesi anlatımı ile karar vericileri güçlendiriyoruz.",
    details: ["Real-time dashboard'lar", "Executive raporlama", "Mobil erişim desteği"],
  },
  {
    step: "05",
    icon: Zap,
    title: "Aksiyon & Otomasyon",
    description: "İçgörüleri aksiyona dönüştürüyoruz. Eşik değerleri belirler, otomatik uyarılar ve iş akışı tetikleyicileri kurarak verinin değerini an be an realize ediyoruz.",
    details: ["Otomatik uyarı sistemleri", "İş akışı entegrasyonu", "ROI izleme ve raporlama"],
  },
];

const dataSources = [
  { icon: Cloud, name: "ERP Sistemleri", desc: "SAP, Oracle, Microsoft Dynamics" },
  { icon: Database, name: "CRM Platformları", desc: "Salesforce, HubSpot, Zoho" },
  { icon: Layers, name: "IoT Cihazlar", desc: "Sensörler, makine verileri" },
  { icon: BarChart3, name: "Web Analytics", desc: "GA4, Mixpanel, Hotjar" },
  { icon: GitBranch, name: "Sosyal Medya", desc: "API entegrasyonları" },
  { icon: Shield, name: "Finansal Sistemler", desc: "Muhasebe, ödeme sistemleri" },
];

const metrics = [
  { value: "10x", label: "Veri İşleme Hızı", desc: "Manuel süreçlere göre" },
  { value: "%94", label: "Veri Doğruluğu", desc: "Temizleme sonrası" },
  { value: "48s", label: "Ortalama Rapor Süresi", desc: "Gerçek zamanlı güncelleme" },
  { value: "3.2x", label: "ROI", desc: "İlk yıl ortalama" },
];

function StepCard({ step, isLast }: { step: typeof processSteps[0]; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex gap-6 items-start"
      >
        {/* Step line */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-[#003366] flex items-center justify-center flex-shrink-0">
            <step.icon size={24} className="text-white" />
          </div>
          {!isLast && (
            <div className="w-px flex-1 mt-4 min-h-[40px]" style={{ background: "linear-gradient(to bottom, #003366, transparent)" }} />
          )}
        </div>
        {/* Content */}
        <div className="pb-10 flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold text-[#c8a96e] tracking-widest">{step.step}</span>
            <h3 className="text-xl font-bold text-[#0a0a0a]">{step.title}</h3>
          </div>
          <p className="text-gray-500 leading-relaxed mb-4 text-sm">{step.description}</p>
          <ul className="space-y-2">
            {step.details.map((d) => (
              <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={13} className="text-[#003366] flex-shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function DataIntelligencePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[65vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "#003366" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 right-0 w-[700px] h-[700px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #1a6bdb 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="w-8 h-px bg-[#c8a96e]" />
              <span className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase">
                Veri & Analitik
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Şirketinizin Datasını{" "}
              <span className="text-[#c8a96e]">Değer Üreten Bir Varlığa</span>{" "}
              Dönüştürüyoruz
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg max-w-2xl leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Ham veriyi iş kararlarını yönlendiren içgörülere çeviriyoruz. Veri toplama, temizleme, modelleme ve görselleştirme aşamalarını uçtan uca yönetiyoruz.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#003366] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Veri Analizini Başlat
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <AnimatedSection key={metric.label} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#003366] mb-1">{metric.value}</div>
                  <div className="text-sm font-semibold text-[#0a0a0a] mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-400">{metric.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <AnimatedSection className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-[#003366]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#003366]">Sürecimiz</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] leading-tight">
                  Ham Veriden Aksiyona: 5 Adım
                </h2>
                <p className="text-gray-500 mt-4 leading-relaxed">
                  Kanıtlanmış metodolojimizle şirketinizin verisi 4-8 hafta içinde aksiyon alınabilir içgörülere dönüşür.
                </p>
              </AnimatedSection>

              <div>
                {processSteps.map((step, idx) => (
                  <StepCard key={step.step} step={step} isLast={idx === processSteps.length - 1} />
                ))}
              </div>
            </div>

            <AnimatedSection delay={0.2} className="lg:pt-20">
              {/* MOCK DASHBOARD */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-white">
                <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs text-gray-400 ml-2">Forward Data Intelligence Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Toplam Gelir", value: "₺12.4M", trend: "+18%" },
                      { label: "Dönüşüm Oranı", value: "%4.7", trend: "+2.1%" },
                      { label: "Müşteri LTV", value: "₺8,420", trend: "+31%" },
                    ].map((kpi) => (
                      <div key={kpi.label} className="rounded-xl p-3 text-center" style={{ backgroundColor: "#f8f8f8" }}>
                        <div className="text-xs text-gray-400 mb-1">{kpi.label}</div>
                        <div className="text-lg font-bold text-[#003366]">{kpi.value}</div>
                        <div className="text-xs font-semibold text-green-500">{kpi.trend}</div>
                      </div>
                    ))}
                  </div>
                  {/* Fake chart bars */}
                  <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: "#f8f8f8" }}>
                    <div className="text-xs font-semibold text-gray-500 mb-3">Aylık Performans</div>
                    <div className="flex items-end gap-1.5 h-24">
                      {[40, 65, 50, 80, 70, 90, 75, 95, 85, 100, 88, 92].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: i === 11 ? "#003366" : i > 8 ? "#1a6bdb" : "#93b4d8" }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-400">Oca</span>
                      <span className="text-xs text-gray-400">Ara</span>
                    </div>
                  </div>
                  {/* Fake pie-like section */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Finans", pct: 34, color: "#003366" },
                      { label: "Operasyon", pct: 28, color: "#1a6bdb" },
                      { label: "Müşteri", pct: 22, color: "#c8a96e" },
                      { label: "Diğer", pct: 16, color: "#93b4d8" },
                    ].map((seg) => (
                      <div key={seg.label} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
                        <span className="text-xs text-gray-500">{seg.label}</span>
                        <span className="text-xs font-bold text-[#0a0a0a] ml-auto">%{seg.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DATA SOURCES */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#003366]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#003366]">Veri Kaynakları</span>
              <div className="w-8 h-px bg-[#003366]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] max-w-2xl mx-auto leading-tight">
              Her Veri Kaynağıyla Entegrasyon
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dataSources.map((src, idx) => (
              <AnimatedSection key={src.name} delay={idx * 0.07}>
                <div className="border border-gray-100 rounded-2xl p-5 text-center hover:shadow-lg hover:border-[#003366]/20 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#003366] transition-colors duration-200" style={{ backgroundColor: "rgba(0,51,102,0.06)" }}>
                    <src.icon size={18} className="text-[#003366] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="text-sm font-semibold text-[#0a0a0a] mb-1">{src.name}</div>
                  <div className="text-xs text-gray-400">{src.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "#003366" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c8a96e]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c8a96e]">Başlayalım</span>
              <div className="w-8 h-px bg-[#c8a96e]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
              Verinizi Bugün Değerlendirmeye Başlayın
            </h2>
            <p className="mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              Ücretsiz veri olgunluk değerlendirmesi için ekibimizle görüşün. Potansiyelinizi ortaya çıkaralım.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#003366] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Ücretsiz Değerlendirme Al
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
