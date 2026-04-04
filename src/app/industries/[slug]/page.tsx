import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { industries } from "@/data/industries";

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

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Endüstri Bulunamadı" };
  return {
    title: industry.title,
    description: industry.description.slice(0, 160),
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) notFound();

  const Icon = iconMap[industry.icon] || Factory;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: industry.color }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            <Link href="/industries" className="hover:text-white transition-colors">Endüstriler</Link>
            <span>/</span>
            <span className="text-white">{industry.title}</span>
          </div>
          <div className="flex items-start gap-6 mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <Icon size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {industry.title}
              </h1>
              <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.75)" }}>
                {industry.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.benefits.map((benefit, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: industry.color }}>
                    {benefit.metric}
                  </div>
                  <div className="text-sm text-gray-500 leading-snug">{benefit.description}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: industry.color }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: industry.color }}>
                Kullanım Alanları
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a] max-w-2xl">
              {industry.title} için Otomasyon Fırsatları
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.useCases.map((useCase, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.08}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-300 h-full group">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: industry.color + "15" }}
                  >
                    <TrendingUp size={18} style={{ color: industry.color }} />
                  </div>
                  <h3 className="font-bold text-[#0a0a0a] text-base mb-3 group-hover:text-[#003366] transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: industry.color + "12", color: industry.color }}
                  >
                    <CheckCircle size={12} />
                    {useCase.impact}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: industry.color }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: industry.color }}>
                Vaka Analizi
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a]">
              Gerçek Bir Dönüşüm Hikayesi
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
              {/* Header */}
              <div className="p-8 text-white" style={{ backgroundColor: industry.color }}>
                <div className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>Müşteri</div>
                <div className="text-2xl font-bold">{industry.caseStudy.company}</div>
              </div>

              {/* CCS Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {[
                  {
                    label: "Zorluk",
                    text: industry.caseStudy.challenge,
                    bg: "bg-gray-50",
                    border: "border-r border-gray-100",
                  },
                  {
                    label: "Çözüm",
                    text: industry.caseStudy.solution,
                    bg: "bg-white",
                    border: "border-r border-gray-100",
                  },
                  {
                    label: "Sonuç",
                    text: industry.caseStudy.result,
                    bg: "bg-gray-50",
                    border: "",
                  },
                ].map((item) => (
                  <div key={item.label} className={`${item.bg} ${item.border} p-8`}>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-4"
                      style={{ color: industry.color }}
                    >
                      {item.label}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ backgroundColor: industry.color }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-[#c8a96e]" />
              <span className="text-[#c8a96e] text-xs font-semibold tracking-widest uppercase">
                Projenizi Başlatalım
              </span>
              <div className="w-6 h-px bg-[#c8a96e]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
              {industry.title} Sektöründe Projemi Başlatmak İstiyorum
            </h2>
            <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
              Sektörünüzün uzmanlarıyla 30 dakikalık ücretsiz keşif görüşmesi ayarlayın.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ color: industry.color }}
            >
              Ücretsiz Görüşme Ayarla
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
