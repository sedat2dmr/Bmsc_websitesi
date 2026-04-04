import type { Metadata } from "next";
import Link from "next/link";
import {
  Workflow,
  BarChart3,
  Database,
  FileText,
  TrendingUp,
  Shield,
  Users,
  Factory,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "BMSC Global'in otomotiv danışmanlık hizmetleri: tedarikçi geliştirme, pazar erişimi, kalite yönetimi, ihracat stratejisi ve daha fazlası.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Workflow,
  BarChart3,
  Database,
  FileText,
  TrendingUp,
  Shield,
  Users,
  Factory,
};

export default function ServicesPage() {
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
              <span className="text-[#ffaf30] text-xs font-semibold uppercase tracking-widest">
                Neler Yapıyoruz
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hizmetlerimiz
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.7)" }}>
              Otomotiv tedarik zincirini uçtan uca destekliyoruz. Tedarikçi geliştirmeden UK pazar erişimine, kalite sistemlerinden stratejik ortaklıklara kadar kapsamlı danışmanlık çözümleri.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Workflow;
              return (
                <AnimatedSection key={service.id} delay={idx * 0.07}>
                  <div className="group bg-white rounded-2xl p-10 border border-gray-100 hover:border-[#003366]/20 hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="flex items-start gap-6 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[#003366]"
                        style={{ backgroundColor: "rgba(0,51,102,0.06)" }}
                      >
                        <Icon size={26} className="text-[#003366] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-[#0a0a0a] mb-2 group-hover:text-[#003366] transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                        Temel Özellikler
                      </h3>
                      <ul className="space-y-2.5">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle size={15} className="text-[#003366] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden"
              style={{ backgroundColor: "#003366" }}
            >
              <div
                className="absolute right-0 top-0 w-80 h-80 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, #1a6bdb, transparent)", opacity: 0.12 }}
              />
              <div className="relative">
                <h2 className="text-4xl font-bold text-white mb-4">
                  UK Pazarına Açılmaya Hazır mısınız?
                </h2>
                <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Ön değerlendirme formunu doldurun, uzmanlarımız ihracat hazırlığınızı ve pazar fırsatlarınızı analiz etsin.
                </p>
                <Link
                  href="/partner-evaluation"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffaf30] text-[#1e2148] font-bold rounded-lg hover:bg-[#e09e20] transition-colors duration-200"
                >
                  Ücretsiz Ön Değerlendirme
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
