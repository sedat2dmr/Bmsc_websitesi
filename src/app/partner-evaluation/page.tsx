"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight, Upload, Globe } from "lucide-react";

// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const translations = {
  tr: {
    badge: "Tedarikçi Değerlendirme",
    heroTitle: "İŞ GELİŞTİRME ÖN DEĞERLENDİRME",
    heroSubtitle:
      "BMSC Global iş ortaklığı başvurusunu tamamlamak için aşağıdaki adımları izleyin.",
    stepLabels: ["Deneyim", "Üretim", "İhracat", "Kalite", "İletişim"],
    required: "Bu alan zorunludur.",
    back: "Geri",
    next: "Devam",
    submit: "Gönder",
    // Step 1
    yearsActive: "Firmanız Kaç Yıldır Aktif Üretim Yapıyor?",
    totalEmployees: "Toplam Çalışan Sayınız",
    year0_1: "0–1 Yıl",
    year2_5: "2–5 Yıl",
    year5_10: "5–10 Yıl",
    year10plus: "10+",
    emp1_10: "1–10",
    emp10_50: "10–50",
    emp50_100: "50–100",
    emp100plus: "100+",
    // Step 2
    inHouseOps: "Aşağıdaki İşlerden Hangilerini Kendi Bünyenizde Yapıyorsunuz?",
    otherInput: "Lütfen belirtin",
    ops: {
      kesim: "Kesim (Lazer-Plazma-Punch-Waterjet)",
      bukum: "Büküm",
      cnc: "Talaşlı İmalat (CNC)",
      plastik: "Plastik Enjeksiyon",
      celikDokum: "Çelik Döküm",
      disli: "Dişli",
      alDokum: "Alüminyum Döküm",
      yuzey: "Yüzey İşlemleri",
      termoform: "Termoform",
      elektronik: "Elektronik Modül",
      trim: "Trim",
      diger: "Diğer",
      hicbiri: "Hiçbiri (tamamı dış kaynak)",
    },
    // Step 3
    exportBefore: "Daha Önce İhracat Yaptınız mı?",
    englishStaff: "İngilizce Bilen Personel Var mı?",
    no: "Hayır",
    yes: "Evet",
    noStaff: "Yok",
    staff1_2: "1–2 kişi",
    staff2plus: "2+",
    // Step 4
    certificates: "Aşağıdakilerden Hangilerine Sahipsiniz?",
    rfqTime: "Teklif Taleplerine Ortalama Dönüş Süreniz Nedir?",
    certs: {
      iso: "ISO 9001",
      sectoral: "Sektörel kalite belgesi",
      engineer: "Kalite kontrol mühendisi",
      measurement: "Ölçüm ekipmanları",
      none: "Hiçbiri",
    },
    rfq1: "1 İş Günü",
    rfq2_4: "2–4 İş Günü",
    rfq5plus: "5 İş Günü Üzeri",
    // Step 5
    firstName: "Ad",
    lastName: "Soyad",
    companyName: "Firma Ünvanı",
    email: "E-Posta",
    website: "Firma Websitesi",
    presentation: "Firma Sunumu",
    phone: "Telefon",
    uploadText: "Dosya seçin veya buraya sürükleyin",
    uploadFormats: "PDF, PPT, PPTX (maks. 10 MB)",
    successTitle: "Başvurunuz Alındı",
    successMsg: "En kısa sürede sizinle iletişime geçeceğiz.",
    stepOf: "Adım",
    copyright: "Tüm hakları saklıdır.",
  },
  en: {
    badge: "Supplier Assessment",
    heroTitle: "BUSINESS DEVELOPMENT PRE-ASSESSMENT",
    heroSubtitle:
      "Complete the following steps to submit your BMSC Global partnership application.",
    stepLabels: ["Experience", "Production", "Export", "Quality", "Contact"],
    required: "This field is required.",
    back: "Back",
    next: "Continue",
    submit: "Submit",
    yearsActive: "How many years has your company been actively manufacturing?",
    totalEmployees: "Total Number of Employees",
    year0_1: "0–1 Year",
    year2_5: "2–5 Years",
    year5_10: "5–10 Years",
    year10plus: "10+",
    emp1_10: "1–10",
    emp10_50: "10–50",
    emp50_100: "50–100",
    emp100plus: "100+",
    inHouseOps: "Which of the following operations do you perform in-house?",
    otherInput: "Please specify",
    ops: {
      kesim: "Cutting (Laser-Plasma-Punch-Waterjet)",
      bukum: "Bending",
      cnc: "Machining (CNC)",
      plastik: "Plastic Injection",
      celikDokum: "Steel Casting",
      disli: "Gear Manufacturing",
      alDokum: "Aluminum Casting",
      yuzey: "Surface Treatment",
      termoform: "Thermoforming",
      elektronik: "Electronic Module",
      trim: "Trimming",
      diger: "Other",
      hicbiri: "None (fully outsourced)",
    },
    exportBefore: "Have you exported before?",
    englishStaff: "Do you have English-speaking staff?",
    no: "No",
    yes: "Yes",
    noStaff: "None",
    staff1_2: "1–2 persons",
    staff2plus: "2+",
    certificates: "Which of the following do you have?",
    rfqTime: "What is your average response time to RFQs?",
    certs: {
      iso: "ISO 9001",
      sectoral: "Sector-specific quality certificate",
      engineer: "Quality control engineer",
      measurement: "Measurement equipment",
      none: "None",
    },
    rfq1: "1 Business Day",
    rfq2_4: "2–4 Business Days",
    rfq5plus: "5+ Business Days",
    firstName: "First Name",
    lastName: "Last Name",
    companyName: "Company Name",
    email: "Email Address",
    website: "Company Website",
    presentation: "Company Presentation",
    phone: "Phone Number",
    uploadText: "Select file or drag here",
    uploadFormats: "PDF, PPT, PPTX (max. 10 MB)",
    successTitle: "Application Received",
    successMsg: "We will get back to you as soon as possible.",
    stepOf: "Step",
    copyright: "All rights reserved.",
  },
} as const;

type Lang = keyof typeof translations;
type T = (typeof translations)[Lang];

// ─── COUNTRY CODES ──────────────────────────────────────────────────────────
const COUNTRY_CODES = [
  { code: "+90", flag: "🇹🇷", name: "TR" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+1",  flag: "🇺🇸", name: "US" },
  { code: "+49", flag: "🇩🇪", name: "DE" },
  { code: "+33", flag: "🇫🇷", name: "FR" },
  { code: "+39", flag: "🇮🇹", name: "IT" },
  { code: "+34", flag: "🇪🇸", name: "ES" },
  { code: "+31", flag: "🇳🇱", name: "NL" },
  { code: "+48", flag: "🇵🇱", name: "PL" },
  { code: "+86", flag: "🇨🇳", name: "CN" },
  { code: "+81", flag: "🇯🇵", name: "JP" },
  { code: "+82", flag: "🇰🇷", name: "KR" },
  { code: "+966", flag: "🇸🇦", name: "SA" },
  { code: "+971", flag: "🇦🇪", name: "AE" },
];

// ─── FORM DATA TYPE ──────────────────────────────────────────────────────────
interface FormData {
  yearsActive: string;
  totalEmployees: string;
  inHouseOps: string[];
  otherOp: string;
  exportBefore: string;
  englishStaff: string;
  certificates: string[];
  rfqTime: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  website: string;
  phone: string;
  countryCode: string;
  presentation: File | null;
}

const INITIAL_FORM: FormData = {
  yearsActive: "",
  totalEmployees: "",
  inHouseOps: [],
  otherOp: "",
  exportBefore: "",
  englishStaff: "",
  certificates: [],
  rfqTime: "",
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  website: "",
  phone: "",
  countryCode: "+90",
  presentation: null,
};

const TOTAL_STEPS = 5;

// ─── BUTTON GROUP ────────────────────────────────────────────────────────────
function ButtonGroup({
  value,
  options,
  onChange,
  error,
  errorMsg,
}: {
  value: string;
  options: { val: string; label: string }[];
  onChange: (val: string) => void;
  error?: boolean;
  errorMsg: string;
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 mt-3">
        {options.map((opt) => (
          <button
            key={opt.val}
            type="button"
            onClick={() => onChange(opt.val)}
            className={[
              "px-6 py-3 text-sm font-semibold border transition-all duration-200",
              value === opt.val
                ? "bg-[#1e2148] text-white border-[#1e2148]"
                : "bg-white text-[#1e2148] border-[#cbd5e1] hover:border-[#1e2148] hover:bg-[#f8f9fa]",
            ].join(" ")}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
          {errorMsg}
        </p>
      )}
    </div>
  );
}

// ─── CHECKBOX ITEM ───────────────────────────────────────────────────────────
function CheckboxItem({
  checked,
  label,
  onToggle,
}: {
  checked: boolean;
  label: string;
  onToggle: () => void;
}) {
  return (
    <label
      className={[
        "flex items-center gap-3 p-3.5 border cursor-pointer transition-all duration-200 select-none",
        checked
          ? "border-[#1e2148] bg-[#1e2148]/[0.04]"
          : "border-[#e2e8f0] bg-white hover:border-[#1e2148]/40 hover:bg-[#f8f9fa]",
      ].join(" ")}
      onClick={onToggle}
    >
      <div
        className={[
          "w-5 h-5 border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200",
          checked ? "border-[#1e2148] bg-[#1e2148]" : "border-[#cbd5e1]",
        ].join(" ")}
      >
        {checked && <Check size={11} className="text-white" strokeWidth={3} />}
      </div>
      <span className="text-sm text-[#1e2148] leading-snug">{label}</span>
    </label>
  );
}

// ─── FIELD WRAPPER ───────────────────────────────────────────────────────────
function Field({
  label,
  required,
  error,
  errorMsg,
  children,
}: {
  label: string;
  required?: boolean;
  error?: boolean;
  errorMsg?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-[#1e2148] uppercase tracking-wider mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && errorMsg && (
        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
          {errorMsg}
        </p>
      )}
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function PartnerEvaluationPage() {
  const [lang, setLang] = useState<Lang>("tr");
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [showCountryDrop, setShowCountryDrop] = useState(false);
  const [logoReady, setLogoReady] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const t: T = translations[lang];

  useEffect(() => {
    const id = setTimeout(() => setLogoReady(true), 200);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        countryRef.current &&
        !countryRef.current.contains(e.target as Node)
      ) {
        setShowCountryDrop(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const clearError = useCallback(
    (field: string) =>
      setErrors((prev) => ({ ...prev, [field]: false })),
    []
  );

  function toggleCheckbox(
    field: "inHouseOps" | "certificates",
    key: string,
    exclusiveKey: string
  ) {
    setForm((prev) => {
      const arr = prev[field];
      if (key === exclusiveKey) {
        return { ...prev, [field]: arr.includes(key) ? [] : [key] };
      }
      const withoutExclusive = arr.filter((v) => v !== exclusiveKey);
      return {
        ...prev,
        [field]: withoutExclusive.includes(key)
          ? withoutExclusive.filter((v) => v !== key)
          : [...withoutExclusive, key],
      };
    });
    clearError(field);
  }

  function validate(): boolean {
    const e: Record<string, boolean> = {};
    if (step === 1) {
      if (!form.yearsActive) e.yearsActive = true;
      if (!form.totalEmployees) e.totalEmployees = true;
    } else if (step === 2) {
      if (form.inHouseOps.length === 0) e.inHouseOps = true;
    } else if (step === 3) {
      if (!form.exportBefore) e.exportBefore = true;
      if (!form.englishStaff) e.englishStaff = true;
    } else if (step === 4) {
      if (form.certificates.length === 0) e.certificates = true;
      if (!form.rfqTime) e.rfqTime = true;
    } else if (step === 5) {
      if (!form.firstName.trim()) e.firstName = true;
      if (!form.lastName.trim()) e.lastName = true;
      if (!form.companyName.trim()) e.companyName = true;
      if (!form.email.trim() || !form.email.includes("@")) e.email = true;
      if (!form.phone.trim()) e.phone = true;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleNext() {
    if (validate()) {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleBack() {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit() {
    if (validate()) setSubmitted(true);
  }

  function handleFile(file: File | undefined | null) {
    if (!file) return;
    setForm((prev) => ({ ...prev, presentation: file }));
  }

  // ─── STEP RENDERERS ─────────────────────────────────────────────────────
  function renderStep() {
    switch (step) {
      case 1:
        return (
          <div className="space-y-10">
            <Field
              label={t.yearsActive}
              required
              error={errors.yearsActive}
              errorMsg={t.required}
            >
              <ButtonGroup
                value={form.yearsActive}
                options={[
                  { val: "0-1", label: t.year0_1 },
                  { val: "2-5", label: t.year2_5 },
                  { val: "5-10", label: t.year5_10 },
                  { val: "10+", label: t.year10plus },
                ]}
                onChange={(v) => {
                  setForm((p) => ({ ...p, yearsActive: v }));
                  clearError("yearsActive");
                }}
                error={errors.yearsActive}
                errorMsg={t.required}
              />
            </Field>
            <Field
              label={t.totalEmployees}
              required
              error={errors.totalEmployees}
              errorMsg={t.required}
            >
              <ButtonGroup
                value={form.totalEmployees}
                options={[
                  { val: "1-10", label: t.emp1_10 },
                  { val: "10-50", label: t.emp10_50 },
                  { val: "50-100", label: t.emp50_100 },
                  { val: "100+", label: t.emp100plus },
                ]}
                onChange={(v) => {
                  setForm((p) => ({ ...p, totalEmployees: v }));
                  clearError("totalEmployees");
                }}
                error={errors.totalEmployees}
                errorMsg={t.required}
              />
            </Field>
          </div>
        );

      case 2: {
        const opsList = [
          { key: "kesim", label: t.ops.kesim },
          { key: "bukum", label: t.ops.bukum },
          { key: "cnc", label: t.ops.cnc },
          { key: "plastik", label: t.ops.plastik },
          { key: "celikDokum", label: t.ops.celikDokum },
          { key: "disli", label: t.ops.disli },
          { key: "alDokum", label: t.ops.alDokum },
          { key: "yuzey", label: t.ops.yuzey },
          { key: "termoform", label: t.ops.termoform },
          { key: "elektronik", label: t.ops.elektronik },
          { key: "trim", label: t.ops.trim },
          { key: "diger", label: t.ops.diger },
        ];
        return (
          <div>
            <p className="text-xs font-bold text-[#1e2148] uppercase tracking-wider mb-4">
              {t.inHouseOps}
              <span className="text-red-500 ml-1">*</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
              {opsList.map((op) => (
                <CheckboxItem
                  key={op.key}
                  checked={form.inHouseOps.includes(op.key)}
                  label={op.label}
                  onToggle={() =>
                    toggleCheckbox("inHouseOps", op.key, "hicbiri")
                  }
                />
              ))}
            </div>
            {/* Full-width exclusive option */}
            <CheckboxItem
              checked={form.inHouseOps.includes("hicbiri")}
              label={t.ops.hicbiri}
              onToggle={() =>
                toggleCheckbox("inHouseOps", "hicbiri", "hicbiri")
              }
            />
            {form.inHouseOps.includes("diger") && (
              <div className="mt-3">
                <input
                  type="text"
                  value={form.otherOp}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, otherOp: e.target.value }))
                  }
                  placeholder={t.otherInput}
                  className="w-full border border-[#cbd5e1] px-4 py-3 text-sm focus:outline-none focus:border-[#1e2148] transition-colors bg-white"
                />
              </div>
            )}
            {errors.inHouseOps && (
              <p className="text-red-500 text-xs mt-3 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                {t.required}
              </p>
            )}
          </div>
        );
      }

      case 3:
        return (
          <div className="space-y-10">
            <Field
              label={t.exportBefore}
              required
              error={errors.exportBefore}
              errorMsg={t.required}
            >
              <ButtonGroup
                value={form.exportBefore}
                options={[
                  { val: "no", label: t.no },
                  { val: "yes", label: t.yes },
                ]}
                onChange={(v) => {
                  setForm((p) => ({ ...p, exportBefore: v }));
                  clearError("exportBefore");
                }}
                error={errors.exportBefore}
                errorMsg={t.required}
              />
            </Field>
            <Field
              label={t.englishStaff}
              required
              error={errors.englishStaff}
              errorMsg={t.required}
            >
              <ButtonGroup
                value={form.englishStaff}
                options={[
                  { val: "none", label: t.noStaff },
                  { val: "1-2", label: t.staff1_2 },
                  { val: "2+", label: t.staff2plus },
                ]}
                onChange={(v) => {
                  setForm((p) => ({ ...p, englishStaff: v }));
                  clearError("englishStaff");
                }}
                error={errors.englishStaff}
                errorMsg={t.required}
              />
            </Field>
          </div>
        );

      case 4: {
        const certsList = [
          { key: "iso", label: t.certs.iso },
          { key: "sectoral", label: t.certs.sectoral },
          { key: "engineer", label: t.certs.engineer },
          { key: "measurement", label: t.certs.measurement },
        ];
        return (
          <div className="space-y-10">
            <div>
              <p className="text-xs font-bold text-[#1e2148] uppercase tracking-wider mb-4">
                {t.certificates}
                <span className="text-red-500 ml-1">*</span>
              </p>
              <div className="space-y-2">
                {certsList.map((c) => (
                  <CheckboxItem
                    key={c.key}
                    checked={form.certificates.includes(c.key)}
                    label={c.label}
                    onToggle={() =>
                      toggleCheckbox("certificates", c.key, "none")
                    }
                  />
                ))}
                <CheckboxItem
                  checked={form.certificates.includes("none")}
                  label={t.certs.none}
                  onToggle={() =>
                    toggleCheckbox("certificates", "none", "none")
                  }
                />
              </div>
              {errors.certificates && (
                <p className="text-red-500 text-xs mt-3 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />
                  {t.required}
                </p>
              )}
            </div>
            <Field
              label={t.rfqTime}
              required
              error={errors.rfqTime}
              errorMsg={t.required}
            >
              <ButtonGroup
                value={form.rfqTime}
                options={[
                  { val: "1day", label: t.rfq1 },
                  { val: "2-4days", label: t.rfq2_4 },
                  { val: "5+days", label: t.rfq5plus },
                ]}
                onChange={(v) => {
                  setForm((p) => ({ ...p, rfqTime: v }));
                  clearError("rfqTime");
                }}
                error={errors.rfqTime}
                errorMsg={t.required}
              />
            </Field>
          </div>
        );
      }

      case 5:
        return (
          <div className="space-y-5">
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label={t.firstName}
                required
                error={errors.firstName}
                errorMsg={t.required}
              >
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, firstName: e.target.value }));
                    clearError("firstName");
                  }}
                  className={inputCls(errors.firstName)}
                />
              </Field>
              <Field
                label={t.lastName}
                required
                error={errors.lastName}
                errorMsg={t.required}
              >
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, lastName: e.target.value }));
                    clearError("lastName");
                  }}
                  className={inputCls(errors.lastName)}
                />
              </Field>
            </div>

            <Field
              label={t.companyName}
              required
              error={errors.companyName}
              errorMsg={t.required}
            >
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => {
                  setForm((p) => ({ ...p, companyName: e.target.value }));
                  clearError("companyName");
                }}
                className={inputCls(errors.companyName)}
              />
            </Field>

            <Field
              label={t.email}
              required
              error={errors.email}
              errorMsg={t.required}
            >
              <input
                type="email"
                value={form.email}
                onChange={(e) => {
                  setForm((p) => ({ ...p, email: e.target.value }));
                  clearError("email");
                }}
                className={inputCls(errors.email)}
              />
            </Field>

            {/* Phone with country code */}
            <Field
              label={t.phone}
              required
              error={errors.phone}
              errorMsg={t.required}
            >
              <div className="flex">
                <div className="relative" ref={countryRef}>
                  <button
                    type="button"
                    onClick={() => setShowCountryDrop((v) => !v)}
                    className="flex items-center gap-2 h-full px-3 py-3 border border-r-0 border-[#cbd5e1] bg-[#f4f5f7] text-sm font-medium text-[#1e2148] hover:bg-[#eeeff1] transition-colors min-w-[88px] whitespace-nowrap"
                  >
                    <span className="text-base leading-none">
                      {
                        COUNTRY_CODES.find((c) => c.code === form.countryCode)
                          ?.flag
                      }
                    </span>
                    <span className="text-xs tabular-nums">
                      {form.countryCode}
                    </span>
                  </button>
                  <AnimatePresence>
                    {showCountryDrop && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 z-50 bg-white border border-[#e2e8f0] shadow-2xl max-h-52 overflow-y-auto min-w-[170px] mt-1"
                      >
                        {COUNTRY_CODES.map((cc) => (
                          <button
                            key={cc.code}
                            type="button"
                            onClick={() => {
                              setForm((p) => ({
                                ...p,
                                countryCode: cc.code,
                              }));
                              setShowCountryDrop(false);
                            }}
                            className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-[#1e2148] hover:bg-[#f4f5f7] transition-colors"
                          >
                            <span className="text-base leading-none">
                              {cc.flag}
                            </span>
                            <span className="font-semibold">{cc.name}</span>
                            <span className="text-[#94a3b8] ml-auto tabular-nums text-xs">
                              {cc.code}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, phone: e.target.value }));
                    clearError("phone");
                  }}
                  className={[
                    "flex-1 border px-4 py-3 text-sm focus:outline-none transition-colors",
                    errors.phone
                      ? "border-red-400 focus:border-red-400"
                      : "border-[#cbd5e1] focus:border-[#1e2148]",
                  ].join(" ")}
                />
              </div>
            </Field>

            <Field label={t.website}>
              <input
                type="url"
                value={form.website}
                onChange={(e) =>
                  setForm((p) => ({ ...p, website: e.target.value }))
                }
                placeholder="https://"
                className={inputCls(false)}
              />
            </Field>

            {/* File upload */}
            <Field label={t.presentation}>
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);
                  handleFile(e.dataTransfer.files?.[0]);
                }}
                onClick={() => fileInputRef.current?.click()}
                className={[
                  "border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-200",
                  dragOver
                    ? "border-[#1e2148] bg-[#1e2148]/5"
                    : "border-[#cbd5e1] bg-[#f8f9fa] hover:border-[#1e2148]/50 hover:bg-[#f4f5f7]",
                ].join(" ")}
              >
                <Upload
                  size={22}
                  className={[
                    "mx-auto mb-2 transition-colors",
                    dragOver ? "text-[#1e2148]" : "text-[#94a3b8]",
                  ].join(" ")}
                />
                <p
                  className={[
                    "text-sm transition-colors",
                    dragOver ? "text-[#1e2148]" : "text-[#64748b]",
                  ].join(" ")}
                >
                  {form.presentation ? form.presentation.name : t.uploadText}
                </p>
                <p className="text-xs text-[#94a3b8] mt-1">{t.uploadFormats}</p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.ppt,.pptx"
                className="hidden"
                onChange={(e) => handleFile(e.target.files?.[0])}
              />
            </Field>
          </div>
        );

      default:
        return null;
    }
  }

  // ─── SUCCESS SCREEN ──────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0d1b2a] flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-12 text-center max-w-md w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-[#1e2148] flex items-center justify-center mx-auto mb-6"
          >
            <Check size={28} className="text-white" strokeWidth={2.5} />
          </motion.div>
          <h2 className="text-2xl font-bold text-[#1e2148] mb-3 tracking-tight">
            {t.successTitle}
          </h2>
          <p className="text-[#64748b] leading-relaxed">{t.successMsg}</p>
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#ffaf30] to-transparent" />
          <p className="mt-4 text-xs text-[#94a3b8] font-semibold tracking-widest uppercase">
            BMSC Global
          </p>
        </motion.div>
      </div>
    );
  }

  // ─── MAIN RENDER ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{
          minHeight: "420px",
          background: "linear-gradient(135deg, #0b1520 0%, #0d1b2a 60%, #111827 100%)",
        }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px",
          }}
        />
        {/* Orange radial glow — right */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #ffaf30, transparent)" }}
        />
        {/* Navy radial glow — left */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #1e2148, transparent)" }}
        />
        {/* Top orange accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ffaf30] to-transparent" />

        {/* Logo + heading */}
        <div className="relative flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">

          {/* ── BMSC Logo — blur-slide reveal (21st.dev AnimatedGroup pattern) ── */}
          <div className="mb-10 overflow-hidden">
            <motion.div
              initial={{ y: 40, opacity: 0, filter: "blur(14px)", scale: 0.96 }}
              animate={
                logoReady
                  ? { y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }
                  : { y: 40, opacity: 0, filter: "blur(14px)", scale: 0.96 }
              }
              transition={{ type: "spring", bounce: 0.22, duration: 1.3, delay: 0.1 }}
            >
              <Image
                src="/images/bmsc-logo.png"
                alt="BMSC Global"
                width={280}
                height={78}
                className="object-contain brightness-0 invert"
                priority
              />
            </motion.div>
          </div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: logoReady ? 1 : 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex items-center gap-4 mb-5"
          >
            <div className="h-px w-12 bg-[#ffaf30]/40" />
            <span className="text-[#ffaf30] text-[10px] font-bold tracking-[0.35em] uppercase">
              {t.badge}
            </span>
            <div className="h-px w-12 bg-[#ffaf30]/40" />
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: logoReady ? 1 : 0, y: logoReady ? 0 : 24 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-wide leading-tight max-w-3xl"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: logoReady ? 1 : 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="text-white/45 mt-4 text-sm max-w-lg leading-relaxed"
          >
            {t.heroSubtitle}
          </motion.p>
        </div>
      </div>

      {/* ── STEPPER ──────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#e2e8f0] sticky top-0 z-40 shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between relative">
            {/* Background line */}
            <div className="absolute left-8 right-8 top-[18px] h-px bg-[#e2e8f0]" />
            {/* Active progress line */}
            <motion.div
              className="absolute left-8 top-[18px] h-px bg-[#1e2148]"
              initial={{ width: "0%" }}
              animate={{
                width:
                  step === 1
                    ? "0%"
                    : `calc(${((step - 1) / (TOTAL_STEPS - 1)) * 100}% - 0px)`,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((s) => (
              <div
                key={s}
                className="relative flex flex-col items-center gap-2 z-10"
              >
                <div
                  className={[
                    "w-9 h-9 flex items-center justify-center text-sm font-bold transition-all duration-300",
                    s < step
                      ? "bg-[#1e2148] text-white"
                      : s === step
                      ? "bg-[#1e2148] text-white ring-4 ring-[#1e2148]/15"
                      : "bg-white border-2 border-[#e2e8f0] text-[#94a3b8]",
                  ].join(" ")}
                >
                  {s < step ? (
                    <Check size={14} strokeWidth={3} />
                  ) : (
                    s
                  )}
                </div>
                <span
                  className={[
                    "text-[10px] font-bold uppercase tracking-wider hidden sm:block transition-colors duration-300 whitespace-nowrap",
                    s === step
                      ? "text-[#1e2148]"
                      : s < step
                      ? "text-[#1e2148]/50"
                      : "text-[#94a3b8]",
                  ].join(" ")}
                >
                  {t.stepLabels[s - 1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FORM CARD ────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="bg-white border border-[#e2e8f0] p-7 sm:p-10 md:p-12"
          >
            {/* Step header */}
            <div className="mb-8 pb-6 border-b border-[#f1f5f9]">
              <div className="text-[10px] font-black text-[#ffaf30] uppercase tracking-[0.25em] mb-1.5">
                {t.stepOf} {step} / {TOTAL_STEPS}
              </div>
              <h2 className="text-xl font-bold text-[#1e2148] tracking-tight">
                {t.stepLabels[step - 1]}
              </h2>
            </div>

            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {/* ── NAVIGATION ─────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between mt-5">
          <div>
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#1e2148] border-2 border-[#1e2148] hover:bg-[#1e2148] hover:text-white transition-all duration-200"
              >
                <ChevronLeft size={15} />
                {t.back}
              </button>
            )}
          </div>
          <div>
            {step < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-8 py-3 text-sm font-bold bg-[#1e2148] text-white hover:bg-[#0d1422] transition-all duration-200 shadow-lg shadow-[#1e2148]/20"
              >
                {t.next}
                <ChevronRight size={15} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 px-8 py-3 text-sm font-bold bg-[#ffaf30] text-white hover:bg-[#b8996e] transition-all duration-200 shadow-lg shadow-[#ffaf30]/30"
              >
                {t.submit}
                <Check size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Progress bar + language switcher */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex-1">
            <div className="h-1 bg-[#e2e8f0] overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#1e2148] to-[#2d3d52]"
                animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
            <p className="text-xs text-[#94a3b8] mt-1.5 tabular-nums">
              {Math.round((step / TOTAL_STEPS) * 100)}%
            </p>
          </div>
          {/* Language switcher */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Globe size={12} className="text-[#94a3b8]" />
            {(["tr", "en"] as Lang[]).map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="text-[#cbd5e1] text-xs mx-0.5">|</span>}
                <button
                  onClick={() => setLang(l)}
                  className={[
                    "text-[11px] font-bold uppercase tracking-wider px-1 py-0.5 transition-all duration-200",
                    lang === l
                      ? "text-[#1e2148]"
                      : "text-[#94a3b8] hover:text-[#1e2148]",
                  ].join(" ")}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function inputCls(error: boolean | undefined) {
  return [
    "w-full border px-4 py-3 text-sm focus:outline-none transition-colors bg-white",
    error
      ? "border-red-400 focus:border-red-500"
      : "border-[#cbd5e1] focus:border-[#1e2148]",
  ].join(" ");
}
