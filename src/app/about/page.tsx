"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const team = [
  {
    name: "Mehmet Aydın",
    role: "Kurucu & CEO",
    bio: "15 yıllık AI ve dijital dönüşüm deneyimi. MIT Sloan MBA. Daha önce McKinsey Digital'da partner olarak görev yaptı.",
    initials: "MA",
    color: "#003366",
  },
  {
    name: "Selin Kaya",
    role: "CTO",
    bio: "Yapay zeka mühendisliğinde 12 yıl. Google DeepMind ve Bosch AI Lab'dan sonra Forward'ı kuran ekibin teknik lideri.",
    initials: "SK",
    color: "#1a6bdb",
  },
  {
    name: "Burak Öztürk",
    role: "Baş Danışman",
    bio: "RPA ve süreç optimizasyonunda 10+ yıl. 200'den fazla kurumsal dönüşüm projesini başarıyla yönetti.",
    initials: "BÖ",
    color: "#c8a96e",
  },
  {
    name: "Ayşe Demir",
    role: "Veri Bilimi Direktörü",
    bio: "Veri mühendisliği ve makine öğrenmesi alanında doktora. 50+ şirketin veri altyapısını sıfırdan kurdu.",
    initials: "AD",
    color: "#003366",
  },
  {
    name: "Can Yıldız",
    role: "Müşteri Deneyimi Direktörü",
    bio: "Müşteri ilişkileri ve proje yönetiminde 8 yıl. Her projenin zamanında ve bütçede tesliminden sorumlu.",
    initials: "CY",
    color: "#1a6bdb",
  },
  {
    name: "Zeynep Aksoy",
    role: "Endüstri Çözümleri Lideri",
    bio: "Finans, sağlık ve lojistik sektörlerinde derin uzmanlık. Sektöre özgü otomasyon çerçeveleri geliştiriyor.",
    initials: "ZA",
    color: "#c8a96e",
  },
];

const values = [
  {
    icon: Target,
    title: "Sonuç Odaklılık",
    description: "Her projede ölçülebilir çıktılar taahhüt eder, vaatlerimizin arkında dururuz. ROI garantisi bizim farkımızdır.",
  },
  {
    icon: Shield,
    title: "Güven & Şeffaflık",
    description: "Müşterilerimizle her adımda açık iletişim kurarız. Beklentiler net, süreçler şeffaf, sonuçlar izlenebilir.",
  },
  {
    icon: Lightbulb,
    title: "Sürekli İnovasyon",
    description: "Teknoloji hızla değişiyor; biz hep bir adım önde kalıyoruz. Ar-Ge'ye yatırım, kalıcı rekabet avantajının temelidir.",
  },
  {
    icon: Heart,
    title: "İnsan Merkezli Yaklaşım",
    description: "Otomasyon insanları özgürleştirir, değil işsiz bırakır. Ekipleri güçlendiren, onlarla birlikte çalışan çözümler tasarlarız.",
  },
];

const differentiators = [
  "Sektöre özgü, hazır şablon değil — tamamen özelleştirilmiş çözümler",
  "Proje sonrası 12 ay destek ve optimizasyon garantisi",
  "Türkiye'nin en kapsamlı otomasyon sertifika portföyü",
  "ISO 27001 sertifikalı güvenlik altyapısı",
  "Agile metodoloji ile 6-8 haftalık ilk değer teslimatı",
  "Yerli veri egemenliği — tüm veriler Türkiye'de işlenir",
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "#003366" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #1a6bdb 0%, transparent 70%)" }}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-px bg-[#c8a96e]" />
            <span className="text-[#c8a96e] text-sm font-semibold tracking-widest uppercase">
              Hakkımızda
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl"
          >
            Türkiye&apos;nin Öncü Yapay Zeka Danışmanlık Şirketi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            2012&apos;den bu yana 500+ kurumsal projeyle Türkiye&apos;nin dijital dönüşümüne liderlik ediyoruz.
            Yapay zeka ve otomasyon teknolojilerini, iş dünyasının gerçek sorunlarını çözmek için kullanıyoruz.
          </motion.p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,51,102,0.08)" }}>
                      <Eye size={20} className="text-[#003366]" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#003366]">Vizyonumuz</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#0a0a0a] mb-4">
                    Yapay Zeka ile Güçlendirilmiş Bir İş Dünyası
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    2030 yılına kadar Türkiye&apos;deki her orta ve büyük ölçekli işletmenin otomasyon teknolojilerinden
                    yararlanabildiği, insan yaratıcılığının makinelerle mükemmel bir uyum içinde çalıştığı bir iş ekosistemi
                    inşa etmeyi hedefliyoruz.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(200,169,110,0.12)" }}>
                      <Target size={20} className="text-[#c8a96e]" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#c8a96e]">Misyonumuz</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#0a0a0a] mb-4">
                    Ölçülebilir Dönüşüm Teslim Etmek
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Danışmanlıkta söz değil, sonuç önemlidir. Her projede net KPI&apos;lar belirler, taahhüt ettiğimiz
                    verimlilik artışlarını ve maliyet düşüşlerini gerçekleştiririz. Başarı için ortağınız oluyoruz —
                    sadece raporunuzu yazıp gitmiyoruz.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, label: "Proje", value: "500+", color: "#003366" },
                  { icon: Users, label: "Uzman Kadro", value: "40+", color: "#1a6bdb" },
                  { icon: TrendingUp, label: "Ort. ROI", value: "3.4x", color: "#c8a96e" },
                  { icon: Shield, label: "Yıl Deneyim", value: "12+", color: "#003366" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl p-6 border border-gray-100 text-center"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: stat.color + "12" }}
                    >
                      <stat.icon size={22} style={{ color: stat.color }} />
                    </div>
                    <div className="text-3xl font-bold text-[#0a0a0a] mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#003366]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#003366]">Değerlerimiz</span>
              <div className="w-8 h-px bg-[#003366]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] max-w-2xl mx-auto leading-tight">
              Bizi Biz Yapan İlkeler
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <AnimatedSection key={value.title} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(0,51,102,0.06)" }}>
                    <value.icon size={22} className="text-[#003366]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#003366]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#003366]">Ekibimiz</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] max-w-xl leading-tight">
              Alanında Uzman Liderler
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <AnimatedSection key={member.name} delay={idx * 0.1}>
                <div className="group border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-[#003366]/20 transition-all duration-300">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white font-bold text-xl"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a0a0a] mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-[#003366] mb-4">{member.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-28" style={{ backgroundColor: "#003366" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#c8a96e]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c8a96e]">Neden Forward</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Farkımızı Rakamlar Konuşuyor
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                Forward, piyasadaki genel danışmanlık firmalarından köklü biçimde ayrışır.
                Söylemimizi gerçek proje sonuçlarıyla kanıtlıyoruz.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#003366] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Bizimle Çalışın
                <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {differentiators.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-3 rounded-xl p-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <CheckCircle size={18} className="text-[#c8a96e] flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#003366]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#003366]">İletişim</span>
              <div className="w-8 h-px bg-[#003366]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-6 max-w-2xl mx-auto leading-tight">
              Birlikte Büyük İşler Başaralım
            </h2>
            <p className="text-gray-500 mb-10 max-w-xl mx-auto">
              Projenizi anlatın, size özel çözüm önerisi sunalım. İlk görüşme tamamen ücretsiz.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#002244] transition-colors duration-200"
            >
              İletişime Geç
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
