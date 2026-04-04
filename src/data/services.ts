export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  href: string;
}

export const services: Service[] = [
  {
    id: "supplier-development",
    icon: "Workflow",
    title: "Tedarikçi Geliştirme & Yönetimi",
    description:
      "Türk otomotiv tedarikçilerinin üretim kapasitesini, kalite standartlarını ve ihracat hazırlığını uluslararası OEM gereksinimlerine göre geliştiriyoruz.",
    features: [
      "OEM audit hazırlığı ve sahada destek",
      "Üretim süreç iyileştirme (APQP/PPAP)",
      "Tedarikçi skorlama ve sertifikasyon",
      "Sürekli iyileştirme (Kaizen/Lean) programları",
    ],
    href: "/services#supplier-development",
  },
  {
    id: "market-access",
    icon: "TrendingUp",
    title: "Pazar Erişimi & İhracat Stratejisi",
    description:
      "İngiltere ve Avrupa otomotiv pazarlarına giriş stratejisi, alıcı bağlantıları ve uzun vadeli ticaret ortaklıklarının kurulması.",
    features: [
      "UK ve AB pazarı fırsat analizi",
      "OEM / Tier-1 alıcı bağlantıları",
      "İhracat fiyatlandırma ve teklif stratejisi",
      "Ticaret fuarı ve B2B etkinlik desteği",
    ],
    href: "/services#market-access",
  },
  {
    id: "quality-systems",
    icon: "Shield",
    title: "Kalite Yönetim Sistemleri",
    description:
      "IATF 16949, VDA 6.3 ve OEM'e özgü kalite gereksinimlerinde danışmanlık, eğitim ve belgelendirme süreci yönetimi.",
    features: [
      "IATF 16949 / VDA 6.3 danışmanlığı",
      "İç tetkik ve süreç denetimleri",
      "8D / FMEA / Kontrol Planı geliştirme",
      "Kalite KPI takip sistemleri",
    ],
    href: "/services#quality-systems",
  },
  {
    id: "business-development",
    icon: "BarChart3",
    title: "İş Geliştirme & Satış Desteği",
    description:
      "Uluslararası satış süreçlerinin yönetimi, teklif hazırlama, müzakere desteği ve uzun vadeli müşteri ilişkilerinin geliştirilmesi.",
    features: [
      "RFQ & teklif yönetimi",
      "Fiyat müzakeresi ve sözleşme desteği",
      "CRM kurulumu ve satış süreç tasarımı",
      "İngilizce teknik iletişim desteği",
    ],
    href: "/services#business-development",
  },
  {
    id: "manufacturing-optimization",
    icon: "Factory",
    title: "Üretim Optimizasyonu",
    description:
      "Üretim verimliliğini artırmak, hurda ve yeniden işleme maliyetlerini düşürmek için Lean Manufacturing ve Six Sigma metodolojileri.",
    features: [
      "OEE (Ekipman Etkinliği) analizi",
      "Değer akışı haritalama (VSM)",
      "Setup süresi azaltma (SMED)",
      "Stok ve lojistik optimizasyonu",
    ],
    href: "/services#manufacturing-optimization",
  },
  {
    id: "homologation",
    icon: "FileText",
    title: "Homologasyon & Mevzuat Uyumu",
    description:
      "Araç ve parça homologasyonu, CE işaretleme, REACH/RoHS ve UK PIMS gibi düzenleyici gereksinimlerde tam destek.",
    features: [
      "UK ve AB tip onayı süreç yönetimi",
      "CE / UKCA işaretleme danışmanlığı",
      "REACH & RoHS uyumluluk analizi",
      "Teknik dosya hazırlama ve test koordinasyonu",
    ],
    href: "/services#homologation",
  },
  {
    id: "strategic-partnerships",
    icon: "Users",
    title: "Stratejik Ortaklıklar & JV",
    description:
      "Türk ve İngiliz otomotiv firmaları arasında ortak girişim, lisans anlaşması ve teknoloji transferi süreçlerinde aracılık ve danışmanlık.",
    features: [
      "Potansiyel partner due diligence",
      "JV yapısı ve müzakere desteği",
      "Teknoloji lisanslama anlaşmaları",
      "Post-merger entegrasyon yönetimi",
    ],
    href: "/services#strategic-partnerships",
  },
  {
    id: "data-reporting",
    icon: "Database",
    title: "Pazar Araştırması & Raporlama",
    description:
      "Otomotiv sektörüne özgü pazar verileri, rekabet analizi ve stratejik içgörü raporları ile bilinçli iş kararları alın.",
    features: [
      "Sektör ve rakip analizi",
      "OEM tedarik zinciri haritalama",
      "Fiyat benchmarking çalışmaları",
      "Aylık pazar bültenleri",
    ],
    href: "/services#data-reporting",
  },
];
