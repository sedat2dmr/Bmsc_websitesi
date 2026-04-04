"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  X,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simüle edilmiş form gönderimi
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[50vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "#003366" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
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
              İletişim
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl"
          >
            Dönüşümünüzü Birlikte Başlatalım
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            İlk görüşme tamamen ücretsiz. Projenizi anlatın, size özel strateji ve yol haritası hazırlayalım.
          </motion.p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-28" style={{ backgroundColor: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* INFO */}
            <AnimatedSection className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#0a0a0a] mb-2">Bize Ulaşın</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Ekibimiz iş günleri 09:00–18:00 saatleri arasında yanınızda. Acil durumlar için 7/24 destek hattımız aktif.
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "E-posta", value: "info@forward.com.tr", href: "mailto:info@forward.com.tr" },
                    { icon: Phone, label: "Telefon", value: "+90 212 555 0100", href: "tel:+902125550100" },
                    { icon: MapPin, label: "Adres", value: "Levent, İstanbul, Türkiye", href: "#" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[#003366]" style={{ backgroundColor: "rgba(0,51,102,0.08)" }}>
                        <item.icon size={18} className="text-[#003366] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">{item.label}</div>
                        <div className="text-sm font-medium text-[#0a0a0a] group-hover:text-[#003366] transition-colors">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Sosyal Medya</div>
                  <div className="flex gap-3">
                    {[
                      { icon: ExternalLink, href: "#", label: "LinkedIn" },
                      { icon: X, href: "#", label: "X (Twitter)" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-xl flex items-center justify-center border border-gray-200 hover:border-[#003366] hover:bg-[#003366] hover:text-white text-gray-500 transition-all duration-200"
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* QUICK STATS */}
                <div className="rounded-2xl p-6 border border-gray-200 bg-white">
                  <div className="text-sm font-semibold text-[#0a0a0a] mb-4">Neden Bize Ulaşmalısınız?</div>
                  {[
                    "Ücretsiz ön analiz ve fizibilite değerlendirmesi",
                    "48 saat içinde özel teklif",
                    "6-8 haftalık ilk değer teslimatı",
                    "12 ay garanti ve destek",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 py-2 border-b border-gray-50 last:border-0">
                      <CheckCircle size={14} className="text-[#003366] flex-shrink-0" />
                      <span className="text-xs text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* FORM */}
            <AnimatedSection className="lg:col-span-3" delay={0.15}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0a0a0a] mb-3">Mesajınız İletildi!</h3>
                    <p className="text-gray-500 max-w-sm">
                      En geç 48 saat içinde ekibimiz sizinle iletişime geçecek. Teşekkür ederiz.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-[#0a0a0a]">Proje Formu</h2>
                      <p className="text-sm text-gray-400 mt-1">Tüm alanları doldurun, 48 saat içinde size dönelim.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">Ad Soyad *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#003366] transition-colors bg-gray-50"
                          placeholder="Ahmet Yılmaz"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">E-posta *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#003366] transition-colors bg-gray-50"
                          placeholder="ahmet@sirket.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">Şirket</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#003366] transition-colors bg-gray-50"
                          placeholder="Şirket Adı"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">Konu *</label>
                        <select
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#003366] transition-colors bg-gray-50"
                        >
                          <option value="">Seçiniz</option>
                          <option>RPA & Süreç Otomasyonu</option>
                          <option>Yapay Zeka Danışmanlığı</option>
                          <option>Veri Analitiği</option>
                          <option>Dijital Dönüşüm Stratejisi</option>
                          <option>Diğer</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wider">Mesajınız *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#003366] transition-colors bg-gray-50 resize-none"
                        placeholder="Projenizi ve beklentilerinizi kısaca anlatın..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#002244] transition-colors duration-200 disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          Formu Gönder
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
