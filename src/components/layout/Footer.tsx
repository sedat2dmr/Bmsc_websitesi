import Link from "next/link";
import Image from "next/image";
import { ExternalLink, X, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  hizmetler: [
    { label: "Tedarikçi Geliştirme", href: "/services#supplier-development" },
    { label: "Pazar Erişimi & İhracat", href: "/services#market-access" },
    { label: "Kalite Yönetim Sistemleri", href: "/services#quality-systems" },
    { label: "İş Geliştirme & Satış", href: "/services#business-development" },
    { label: "Üretim Optimizasyonu", href: "/services#manufacturing-optimization" },
    { label: "Homologasyon & Mevzuat", href: "/services#homologation" },
  ],
  sektorler: [
    { label: "OEM & Tier-1 Üreticiler", href: "/industries/oem-tier1" },
    { label: "Yedek Parça & Aftermarket", href: "/industries/aftermarket" },
    { label: "Elektrikli Araç (EV)", href: "/industries/elektrikli-arac" },
    { label: "Ticari Araçlar", href: "/industries/ticari-araclar" },
    { label: "Metal & Döküm", href: "/industries/metal-dokum" },
    { label: "Lojistik & 3PL", href: "/industries/lojistik" },
  ],
  sirket: [
    { label: "Hakkımızda", href: "/about" },
    { label: "Blog & Haberler", href: "/blog" },
    { label: "Ön Değerlendirme", href: "/partner-evaluation" },
    { label: "İletişim", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d1422" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/bmsc-logo.png"
                alt="BMSC Global"
                width={160}
                height={44}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Türk otomotiv tedarikçilerini İngiltere ve Avrupa pazarlarına bağlıyoruz. Pazar erişiminden kalite yönetimine, ihracat stratejisinden stratejik ortaklıklara kadar uçtan uca danışmanlık.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://linkedin.com/company/bmscglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#ffaf30] hover:text-[#1e2148] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <ExternalLink size={16} />
              </a>
              <a
                href="https://twitter.com/bmscglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#ffaf30] hover:text-[#1e2148] transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <X size={16} />
              </a>
            </div>
            <div className="space-y-2">
              <a href="mailto:info@bmscglobal.co.uk" className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#ffaf30] transition-colors">
                <Mail size={13} className="text-[#ffaf30]" />
                info@bmscglobal.co.uk
              </a>
              <a href="tel:+441234567890" className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#ffaf30] transition-colors">
                <Phone size={13} className="text-[#ffaf30]" />
                +44 (0) 123 456 7890
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={13} className="text-[#ffaf30] flex-shrink-0" />
                London, United Kingdom
              </div>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
              Hizmetler
            </h3>
            <ul className="space-y-3">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sektörler */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
              Sektörler
            </h3>
            <ul className="space-y-3">
              {footerLinks.sektorler.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
              Şirket
            </h3>
            <ul className="space-y-3">
              {footerLinks.sirket.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                Sertifikasyonlar
              </h3>
              <div className="space-y-2">
                {["IATF 16949", "VDA 6.3", "ISO 9001", "ISO 14001"].map((cert) => (
                  <div key={cert} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffaf30]" />
                    <span className="text-xs text-gray-400">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} BMSC Global UK Limited. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/terms" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Kullanım Şartları
            </Link>
            <a
              href="https://www.bmscglobal.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              bmscglobal.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
