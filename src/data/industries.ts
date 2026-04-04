export interface UseCase {
  title: string;
  description: string;
  impact: string;
}

export interface Industry {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  icon: string;
  color: string;
  useCases: UseCase[];
  benefits: { metric: string; description: string }[];
  caseStudy: {
    company: string;
    challenge: string;
    solution: string;
    result: string;
  };
}

export const industries: Industry[] = [
  {
    slug: "finans-bankаcilik",
    title: "Finans & Bankacılık",
    shortDescription:
      "Finansal süreçleri otomatikleştirin, uyumluluk yükünü azaltın.",
    description:
      "Finans ve bankacılık sektöründe otomasyon, operasyonel verimliliği artırırken risk yönetimi ve uyumluluğu güçlendirir. Kredi başvurularından AML kontrollerine, raporlamadan müşteri hizmetlerine kadar her süreç için akıllı çözümler sunuyoruz.",
    heroImage: "/images/industries/finance-hero.jpg",
    icon: "Landmark",
    color: "#003366",
    useCases: [
      {
        title: "KYC & AML Otomasyonu",
        description:
          "Müşteri kimlik doğrulama ve kara para aklamayla mücadele süreçlerini yapay zeka ile otomatikleştirin. Yanlış pozitifleri %60 azaltın.",
        impact: "%60 daha az yanlış pozitif",
      },
      {
        title: "Kredi Başvuru Değerlendirme",
        description:
          "ML modelleriyle kredi risk skorlaması yapın. Başvuru değerlendirme süresini günlerden dakikalara indirin.",
        impact: "Dakikalar içinde karar",
      },
      {
        title: "Düzenleyici Raporlama",
        description:
          "BDDK, TCMB ve diğer düzenleyici kurumlar için raporları otomatik üretin ve gönderin.",
        impact: "%95 hata azalması",
      },
      {
        title: "Fatura ve Ödeme İşleme",
        description:
          "Fatura doğrulama, mutabakat ve ödeme süreçlerini uçtan uca otomatikleştirin.",
        impact: "%80 süre tasarrufu",
      },
      {
        title: "Dolandırıcılık Tespiti",
        description:
          "Gerçek zamanlı işlem izleme ve anomali tespiti ile dolandırıcılık vakalarını anlık engelleyin.",
        impact: "Gerçek zamanlı koruma",
      },
      {
        title: "Müşteri Onboarding",
        description:
          "Dijital hesap açma süreçlerini %70 hızlandırın. OCR ile belge işleme ve e-imza entegrasyonu.",
        impact: "%70 daha hızlı onboarding",
      },
    ],
    benefits: [
      { metric: "%85", description: "Operasyonel maliyet azalması" },
      { metric: "10x", description: "İşlem hacmi artışı" },
      { metric: "%99.9", description: "Uyumluluk oranı" },
      { metric: "24/7", description: "Kesintisiz operasyon" },
    ],
    caseStudy: {
      company: "Büyük Ölçekli Türk Bankası",
      challenge:
        "Günlük 50.000+ işlemi manuel olarak işleyen ekip, yüksek hata oranı ve uzun işlem süreleriyle mücadele ediyordu.",
      solution:
        "RPA ve AI destekli platform ile KYC, ödeme mutabakatı ve raporlama süreçleri tam otomasyona alındı.",
      result:
        "İşlem süresi %87 azaldı, hata oranı %0.1'in altına düştü ve yıllık 4.2M TL maliyet tasarrufu sağlandı.",
    },
  },
  {
    slug: "saglik",
    title: "Sağlık",
    shortDescription:
      "Klinik süreçleri optimize edin, hasta deneyimini iyileştirin.",
    description:
      "Sağlık sektöründe dijital dönüşüm, hem klinik kaliteyi hem de operasyonel verimliliği artırır. Hasta kayıt yönetiminden klinik karar desteğine, ilaç yönetiminden faturalandırmaya kadar kapsamlı otomasyon çözümleri sunuyoruz.",
    heroImage: "/images/industries/health-hero.jpg",
    icon: "Heart",
    color: "#0a6b3a",
    useCases: [
      {
        title: "Hasta Kayıt & Randevu Yönetimi",
        description:
          "Hasta kabulünden taburculuğa kadar tüm süreçleri dijitalleştirin. Otomatik randevu planlaması ile bekleme sürelerini azaltın.",
        impact: "%50 daha kısa bekleme süresi",
      },
      {
        title: "Klinik Dokümantasyon",
        description:
          "Doktorların sesli notlarını ve el yazısını otomatik olarak EHR sistemlerine aktarın. Klinik yükü azaltın.",
        impact: "Günde 2 saat tasarruf/doktor",
      },
      {
        title: "İlaç Yönetimi & Eczane",
        description:
          "İlaç stok takibi, reçete doğrulama ve dağıtım süreçlerini otomatikleştirin. İlaç hatalarını sıfıra indirin.",
        impact: "%99 hata azalması",
      },
      {
        title: "Medikal Görüntü Analizi",
        description:
          "Radyoloji görüntülerini yapay zeka ile analiz edin. Erken tanı oranlarını artırın, radyolog iş yükünü azaltın.",
        impact: "%30 daha erken tanı",
      },
      {
        title: "SGK & Sigorta Faturalandırma",
        description:
          "SGK ve özel sigorta faturalandırma süreçlerini otomatikleştirin. Reddetme oranlarını %80 azaltın.",
        impact: "%80 reddetme azalması",
      },
    ],
    benefits: [
      { metric: "%40", description: "Klinik dokümantasyon süresi azalması" },
      { metric: "%30", description: "Hasta memnuniyeti artışı" },
      { metric: "2x", description: "Günlük hasta kapasitesi" },
      { metric: "%60", description: "İdari maliyet azalması" },
    ],
    caseStudy: {
      company: "500 Yataklı Eğitim ve Araştırma Hastanesi",
      challenge:
        "Manuel hasta kayıt sistemi, uzun bekleme süreleri ve yüksek idari yük sebebiyle hemşire ve doktorların hasta bakımına yeterli zaman ayıramaması.",
      solution:
        "AI destekli hasta yönetim platformu, otomatik randevu sistemi ve klinik dokümantasyon otomasyonu uygulandı.",
      result:
        "Hasta bekleme süresi %55 azaldı, doktor başına günlük muayene kapasitesi 2 kat arttı, yıllık 8.5M TL maliyet tasarrufu.",
    },
  },
  {
    slug: "perakende-eticaret",
    title: "Perakende & E-Ticaret",
    shortDescription: "Stok yönetimini optimize edin, satışlarını artırın.",
    description:
      "E-ticaret ve perakende sektöründe otomasyon, müşteri deneyimini kişiselleştirirken operasyonel verimliliği maksimize eder. Stok yönetiminden müşteri hizmetlerine, fiyatlandırmadan lojistiğe kadar her süreçte akıllı çözümler.",
    heroImage: "/images/industries/retail-hero.jpg",
    icon: "ShoppingBag",
    color: "#7c2d12",
    useCases: [
      {
        title: "Dinamik Fiyatlandırma",
        description:
          "Rakip fiyatları, talep ve stok verilerini analiz eden AI modelleriyle fiyatlarınızı gerçek zamanlı optimize edin.",
        impact: "%15 gelir artışı",
      },
      {
        title: "Stok Tahmin & Yönetimi",
        description:
          "Satış tahminleri, mevsimsellik ve trend analizi ile stok seviyelerini otomatik optimize edin. Stok dışı kalma oranını sıfıra yaklaştırın.",
        impact: "%40 stok maliyeti azalması",
      },
      {
        title: "Kişiselleştirilmiş Pazarlama",
        description:
          "Müşteri davranış verilerini analiz ederek hyper-personalize kampanyalar oluşturun. Dönüşüm oranlarını 3x artırın.",
        impact: "3x dönüşüm artışı",
      },
      {
        title: "Sipariş Yönetimi & Fulfillment",
        description:
          "Sipariş alımından teslimatına kadar tüm süreci otomatikleştirin. Teslimat sürelerini kısaltın.",
        impact: "%35 daha hızlı teslimat",
      },
      {
        title: "Müşteri Hizmetleri AI",
        description:
          "Chatbot ve sanal asistanlarla müşteri sorularının %80'ini otomatik yanıtlayın. 7/24 destek.",
        impact: "%80 otomasyon oranı",
      },
    ],
    benefits: [
      { metric: "%25", description: "Ortalama sipariş değeri artışı" },
      { metric: "%40", description: "Operasyonel maliyet azalması" },
      { metric: "3x", description: "Müşteri edinim hızı" },
      { metric: "%90", description: "Stok doğruluk oranı" },
    ],
    caseStudy: {
      company: "Lider Türk E-Ticaret Platformu",
      challenge:
        "Yüksek iade oranları, manuel stok yönetiminden kaynaklanan kayıplar ve müşteri hizmetleri yükü büyümeyi kısıtlıyordu.",
      solution:
        "Predictive stok sistemi, AI chatbot ve otomatik iade yönetimi platformu entegre edildi.",
      result:
        "İade oranı %30 azaldı, stok kayıpları %85 düştü, müşteri hizmetleri maliyeti %60 geriledi.",
    },
  },
  {
    slug: "uretim-lojistik",
    title: "Üretim & Lojistik",
    shortDescription:
      "Üretim verimliliğini maksimize edin, tedarik zincirini optimize edin.",
    description:
      "Üretim ve lojistik sektöründe otomasyon; kalite kontrolden bakım yönetimine, tedarik zinciri optimizasyonundan rota planlamasına kadar her adımda rekabet avantajı sağlar.",
    heroImage: "/images/industries/manufacturing-hero.jpg",
    icon: "Factory",
    color: "#713f12",
    useCases: [
      {
        title: "Prediktif Bakım",
        description:
          "IoT sensörleri ve makine öğrenimi ile ekipman arızalarını 2-4 hafta önceden tahmin edin. Planlanmamış duruş sürelerini sıfıra yaklaştırın.",
        impact: "%72 duruş süresi azalması",
      },
      {
        title: "Kalite Kontrol Otomasyonu",
        description:
          "Bilgisayarlı görü sistemleriyle üretim hatlarında gerçek zamanlı kalite kontrolü yapın. Kusurları anında tespit edin.",
        impact: "%99.7 hata tespiti",
      },
      {
        title: "Tedarik Zinciri Optimizasyonu",
        description:
          "Tedarikçi performans izleme, talep tahminleme ve otomatik sipariş yönetimiyle stok maliyetlerini optimize edin.",
        impact: "%30 stok maliyeti azalması",
      },
      {
        title: "Üretim Planlaması",
        description:
          "AI destekli üretim planlaması ile kapasite kullanımını maksimize edin, darboğazları önceden tespit edin.",
        impact: "%20 kapasite artışı",
      },
      {
        title: "Rota & Filo Optimizasyonu",
        description:
          "Akıllı rota planlaması ve filo yönetimiyle lojistik maliyetleri düşürün, teslimat sürelerini kısaltın.",
        impact: "%25 yakıt tasarrufu",
      },
    ],
    benefits: [
      { metric: "%35", description: "Operasyonel verimlilik artışı" },
      { metric: "%50", description: "Bakım maliyeti azalması" },
      { metric: "%99.5", description: "Kalite uyum oranı" },
      { metric: "%25", description: "Teslimat süresi azalması" },
    ],
    caseStudy: {
      company: "Orta Ölçekli Otomotiv Parça Üreticisi",
      challenge:
        "Sık makine arızaları, yüksek hurda oranı ve manuel kalite kontrol süreçleri üretim maliyetlerini şişiriyordu.",
      solution:
        "IoT tabanlı prediktif bakım, bilgisayarlı görü ile kalite kontrol ve otomatik tedarik sistemi uygulandı.",
      result:
        "Makine duruş süresi %68 azaldı, hurda oranı %0.3'e geriledi, yıllık 12M TL maliyet tasarrufu.",
    },
  },
  {
    slug: "hukuk-hizmetler",
    title: "Hukuk & Profesyonel Hizmetler",
    shortDescription: "Hukuki süreçleri hızlandırın, doküman yönetimini otomatikleştirin.",
    description:
      "Hukuk firmalarında ve profesyonel hizmet şirketlerinde otomasyon; araştırma, doküman yönetimi, sözleşme analizi ve müvekkil yönetimi süreçlerinde avukatların yüksek değerli işlere odaklanmasını sağlar.",
    heroImage: "/images/industries/legal-hero.jpg",
    icon: "Scale",
    color: "#1e1b4b",
    useCases: [
      {
        title: "Sözleşme Analizi & Due Diligence",
        description:
          "NLP ile sözleşmeleri otomatik analiz edin, riskli maddeleri işaretleyin ve due diligence süreçlerini hızlandırın.",
        impact: "10x daha hızlı analiz",
      },
      {
        title: "Hukuki Araştırma Otomasyonu",
        description:
          "İçtihat ve mevzuat araştırmalarını AI ile otomatikleştirin. Avukatların araştırma süresini %70 azaltın.",
        impact: "%70 zaman tasarrufu",
      },
      {
        title: "Belge Oluşturma & Şablonlama",
        description:
          "Standart hukuki belgeleri otomatik oluşturun. Dilekçe, sözleşme ve bildirimler dakikalar içinde hazır.",
        impact: "Dakikalar içinde hazır belge",
      },
      {
        title: "Müvekkil Yönetimi",
        description:
          "Müvekkil iletişimi, dosya takibi ve fatura süreçlerini otomatikleştirin. CRM entegrasyonu ile tam görünürlük.",
        impact: "%45 idari yük azalması",
      },
      {
        title: "Uyumluluk İzleme",
        description:
          "Mevzuat değişikliklerini anlık takip edin, uyumluluk raporlarını otomatik üretin.",
        impact: "Anlık mevzuat takibi",
      },
    ],
    benefits: [
      { metric: "10x", description: "Hukuki araştırma hızı" },
      { metric: "%60", description: "Doküman işleme süresi azalması" },
      { metric: "%40", description: "Avukat başına gelir artışı" },
      { metric: "%95", description: "Hata oranı azalması" },
    ],
    caseStudy: {
      company: "50+ Avukatlı Hukuk Bürosu",
      challenge:
        "Yoğun due diligence süreçleri, manuel belge analizi ve tekrarlayan idari görevler avukatların billable saatlerini azaltıyordu.",
      solution:
        "AI destekli sözleşme analizi, otomatik belge şablonlama ve akıllı müvekkil takip sistemi devreye alındı.",
      result:
        "Avukat başına billable saatler %35 arttı, due diligence süresi %75 kısaldı, yıllık 6.8M TL gelir artışı.",
    },
  },
  {
    slug: "egitim",
    title: "Eğitim",
    shortDescription: "Eğitim süreçlerini kişiselleştirin, idari yükü azaltın.",
    description:
      "Eğitim kurumlarında otomasyon, öğrenci başarısını artıran kişiselleştirilmiş öğrenme deneyimleri sunarken idari süreçleri ve kurumsal yönetimi optimize eder.",
    heroImage: "/images/industries/education-hero.jpg",
    icon: "GraduationCap",
    color: "#065f46",
    useCases: [
      {
        title: "Kişiselleştirilmiş Öğrenme Yolları",
        description:
          "Her öğrencinin öğrenme hızı ve stiline göre uyarlanan AI destekli içerik ve egzersizler sunun.",
        impact: "%35 başarı artışı",
      },
      {
        title: "Otomatik Değerlendirme & Geri Bildirim",
        description:
          "Ödevleri, testleri ve proje raporlarını otomatik değerlendirin. Anlık, kişiselleştirilmiş geri bildirim sağlayın.",
        impact: "Anlık geri bildirim",
      },
      {
        title: "Öğrenci Risk Tespiti",
        description:
          "Erken uyarı sistemiyle akademik risk taşıyan öğrencileri tespit edin ve müdahale edin.",
        impact: "%40 terk oranı azalması",
      },
      {
        title: "İdari Süreç Otomasyonu",
        description:
          "Kayıt, devam takibi, not girişi ve belge süreçlerini otomatikleştirin. Personel verimliliğini artırın.",
        impact: "%65 idari yük azalması",
      },
      {
        title: "Kariyer Rehberliği AI",
        description:
          "Öğrenci profili ve piyasa verilerini analiz ederek kişiselleştirilmiş kariyer tavsiyeleri sunun.",
        impact: "%50 istihdam oranı artışı",
      },
    ],
    benefits: [
      { metric: "%35", description: "Öğrenci başarı artışı" },
      { metric: "%40", description: "Terk oranı azalması" },
      { metric: "%60", description: "İdari maliyet azalması" },
      { metric: "2x", description: "Öğretmen verimliliği" },
    ],
    caseStudy: {
      company: "Büyük Ölçekli Özel Üniversite",
      challenge:
        "Yüksek öğrenci terk oranları, manuel kayıt süreçleri ve öğrenci başarısındaki düşüş kurumun akreditasyonunu tehdit ediyordu.",
      solution:
        "Kişiselleştirilmiş öğrenme platformu, erken uyarı sistemi ve idari süreç otomasyonu uygulandı.",
      result:
        "Terk oranı %38 azaldı, öğrenci memnuniyeti 4.2/5'e yükseldi, idari personel maliyeti %45 düştü.",
    },
  },
  {
    slug: "enerji-altyapi",
    title: "Enerji & Altyapı",
    shortDescription: "Enerji tüketimini optimize edin, altyapı yönetimini akıllandırın.",
    description:
      "Enerji ve altyapı sektöründe otomasyon; enerji üretimi, dağıtımı ve tüketiminin optimizasyonundan akıllı şehir altyapısına kadar sürdürülebilirliği ve verimliliği artırır.",
    heroImage: "/images/industries/energy-hero.jpg",
    icon: "Zap",
    color: "#92400e",
    useCases: [
      {
        title: "Akıllı Enerji Yönetimi",
        description:
          "Tüketim verilerini analiz ederek enerji kullanımını otomatik optimize edin. Maliyetleri ve karbon ayak izini azaltın.",
        impact: "%25 enerji tasarrufu",
      },
      {
        title: "Yenilenebilir Enerji Optimizasyonu",
        description:
          "Güneş ve rüzgar enerjisi üretimini hava tahminleriyle entegre ederek şebeke dengesini otomatik yönetin.",
        impact: "%18 verimlilik artışı",
      },
      {
        title: "Altyapı İzleme & Bakım",
        description:
          "Boru hatları, elektrik şebekeleri ve su altyapısını IoT sensörleriyle gerçek zamanlı izleyin.",
        impact: "%60 arıza öngörüsü",
      },
      {
        title: "Talep Tahmini",
        description:
          "ML modellerle enerji talebi tahmin edin, üretim planlamasını optimize edin, dengeleme maliyetlerini azaltın.",
        impact: "%30 dengeleme maliyeti azalması",
      },
      {
        title: "Akıllı Sayaç Yönetimi",
        description:
          "AMI altyapısından gelen verileri otomatik işleyin, faturalandırmayı ve kayıp tespitini akıllandırın.",
        impact: "%20 teknik kayıp azalması",
      },
    ],
    benefits: [
      { metric: "%25", description: "Enerji maliyeti azalması" },
      { metric: "%35", description: "Operasyonel verimlilik artışı" },
      { metric: "%40", description: "Plansız bakım azalması" },
      { metric: "%20", description: "Karbon emisyonu azalması" },
    ],
    caseStudy: {
      company: "Bölgesel Elektrik Dağıtım Şirketi",
      challenge:
        "Yüksek teknik kayıplar, manuel sayaç okuma süreçleri ve reaktif bakım yaklaşımı operasyonel maliyetleri artırıyordu.",
      solution:
        "AMI entegrasyonu, AI destekli kayıp tespiti ve prediktif altyapı bakım sistemi devreye alındı.",
      result:
        "Teknik kayıplar %22 azaldı, bakım maliyetleri %40 düştü, müşteri kesinti süresi %55 geriledi.",
    },
  },
  {
    slug: "teknoloji-saas",
    title: "Teknoloji & SaaS",
    shortDescription: "Yazılım geliştirmeyi hızlandırın, müşteri başarısını otomatikleştirin.",
    description:
      "Teknoloji şirketleri ve SaaS platformları için otomasyon; geliştirme süreçlerini hızlandırır, müşteri başarısını ölçeklendirir ve operasyonel verimliliği maksimize eder.",
    heroImage: "/images/industries/tech-hero.jpg",
    icon: "Code2",
    color: "#1e40af",
    useCases: [
      {
        title: "DevOps & CI/CD Otomasyonu",
        description:
          "Test, build, deployment ve monitoring süreçlerini tam otomasyona alın. Time-to-market'i dramatik kısaltın.",
        impact: "10x hızlı deployment",
      },
      {
        title: "Müşteri Başarısı Otomasyonu",
        description:
          "Churn riski tahminleme, onboarding otomasyonu ve proaktif müdahale ile müşteri kaybını önleyin.",
        impact: "%45 churn azalması",
      },
      {
        title: "Destek Bileti Yönetimi",
        description:
          "Destek biletlerini AI ile otomatik sınıflandırın, önceliklendirin ve yanıtlayın. MTTR'yi 3x iyileştirin.",
        impact: "3x daha hızlı çözüm",
      },
      {
        title: "Kod Kalite & Güvenlik",
        description:
          "Otomatik kod incelemesi, güvenlik açığı taraması ve kalite metrikleri ile yazılım kalitesini artırın.",
        impact: "%70 güvenlik açığı azalması",
      },
      {
        title: "SaaS Metrik Analitik",
        description:
          "MRR, churn, NPS ve diğer SaaS metriklerini otomatik takip edin, anomalileri anlık tespit edin.",
        impact: "Gerçek zamanlı insight",
      },
    ],
    benefits: [
      { metric: "10x", description: "Deployment hızı artışı" },
      { metric: "%45", description: "Churn oranı azalması" },
      { metric: "%60", description: "Destek maliyeti azalması" },
      { metric: "3x", description: "Müşteri onboarding hızı" },
    ],
    caseStudy: {
      company: "Büyüyen B2B SaaS Şirketi",
      challenge:
        "Yüksek churn oranı, yavaş deployment süreçleri ve ölçeklemeyen müşteri destek ekibi büyümeyi kısıtlıyordu.",
      solution:
        "Churn tahmin modeli, CI/CD otomasyon pipeline'ı ve AI destekli müşteri başarısı platformu uygulandı.",
      result:
        "Churn %40 azaldı, deployment süresi 3 günden 45 dakikaya indi, müşteri destek maliyeti %55 düştü.",
    },
  },
];
