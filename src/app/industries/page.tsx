import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  Heart,
  ShoppingBag,
  Factory,
  Scale,
  GraduationCap,
  Zap,
  Code2,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Endüstriler",
  description:
    "Forward'ın sektöre özel otomasyon çözümleri: finans, sağlık, perakende, üretim, hukuk, eğitim, enerji ve teknoloji.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Landmark,
  Heart,
  ShoppingBag,
  Factory,
  Scale,
  GraduationCap,
  Zap,
  Code2,
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ backgroundColor: "#003366" }}>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#c8a96e]" />
              <span className="text-[#c8a96e] text-xs font-semibold uppercase tracking-widest">
                Sektör Uzmanlığı
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Endüstriler
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.7)" }}>
              Her sektörün kendine özgü dinamikleri var. Biz, 8 farklı endüstride derinlemesine uzmanlaşmış çözümler sunarak gerçek ve ölçülebilir sonuçlar elde etmenizi sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, idx) => {
              const Icon = iconMap[industry.icon] || Factory;
              return (
                <AnimatedSection key={industry.slug} delay={idx * 0.07}>
                  <Link href={`/industries/${industry.slug}`}>
                    <div className="group relative overflow-hidden bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                      {/* Color top border */}
                      <div
                        className="h-1.5 w-full transition-all duration-300 group-hover:h-2"
                        style={{ backgroundColor: industry.color }}
                      />
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: industry.color + "18" }}
                          >
                            <Icon size={26} style={{ color: industry.color }} />
                          </div>
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                            style={{ backgroundColor: industry.color + "18" }}
                          >
                            <ArrowRight size={14} style={{ color: industry.color }} />
                          </div>
                        </div>

                        <h2
                          className="text-xl font-bold text-[#0a0a0a] mb-3 transition-colors duration-200"
                          style={{ "--hover-color": industry.color } as React.CSSProperties}
                        >
                          <span className="group-hover:text-[#003366] transition-colors">{industry.title}</span>
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                          {industry.description.slice(0, 160)}...
                        </p>

                        {/* Use case count */}
                        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                          <div className="text-center">
                            <div className="text-xl font-bold" style={{ color: industry.color }}>
                              {industry.useCases.length}
                            </div>
                            <div className="text-xs text-gray-400">Kullanım Alanı</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold" style={{ color: industry.color }}>
                              {industry.benefits.length}
                            </div>
                            <div className="text-xs text-gray-400">Temel Metrik</div>
                          </div>
                          <div className="ml-auto">
                            <span
                              className="text-xs font-semibold px-3 py-1.5 rounded-full"
                              style={{ backgroundColor: industry.color + "12", color: industry.color }}
                            >
                              Vaka Analizi Mevcut
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-4">
              Sektörünüzü Listede Görmüyor musunuz?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              Otomasyon ihtiyaçları evrensel. Her sektörde çözüm üretiyoruz. Bize danışın.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#0052a3] transition-colors duration-200"
            >
              Sektörünüzü Konuşalım
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
