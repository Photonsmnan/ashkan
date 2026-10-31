export interface DrugFormItem {
  formEn: string;
  formFa: string;
  indication?: string;
  dosePerKg: string;
  formDose?: string;
  interval?: string;
  maxDose?: string;
}

export interface PediatricDrug {
  id: number;
  code: string;
  nameEn: string;
  nameFa: string;
  searchKeywords: string;
  renalAdjustment: boolean;
  indication: string;
  primaryDosePerKg: string[];
  forms: DrugFormItem[];
}

export const PEDIATRIC_DRUGS: PediatricDrug[] = [
  {
    id: 1,
    code: "1*",
    nameEn: "Acetaminophen",
    nameFa: "استامینوفن (پاراستامول)",
    searchKeywords: "acetaminophen paracetamol استامینوفن پاراستامول تب ضد درد شیاف قطره شربت",
    renalAdjustment: true,
    indication: "کنترل تب، ضد درد",
    primaryDosePerKg: [
      "10-15 mg/kg/dose (دوز ضد تب و ضد درد خوراکی/تزریقی/شیاف در هر نوبت)",
      "20-30 mg/kg/dose (دوز ضد درد شیاف در هر نوبت)"
    ],
    forms: [
      {
        formEn: "Syr 120mg/5ml",
        formFa: "شربت ۱۲۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "10-15 mg/kg/dose",
        formDose: "W/2 ml/dose (نصف وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "Q4-6hr",
        maxDose: "Infant: 60mg/kg/day | Child: 90mg/kg/day"
      },
      {
        formEn: "Drop 100mg/1ml",
        formFa: "قطره ۱۰۰ میلی‌گرم در ۱ میلی‌لیتر",
        dosePerKg: "10-15 mg/kg/dose",
        formDose: "W×2 drop/dose (دو برابر وزن کودک به قطره در هر نوبت)",
        interval: "Q4-6hr",
        maxDose: "Infant: 60mg/kg/day | Child: 90mg/kg/day"
      },
      {
        formEn: "Supp 125, 325mg",
        formFa: "شیاف ۱۲۵ و ۳۲۵ میلی‌گرم",
        dosePerKg: "ضد تب: 10-15 mg/kg/dose | ضد درد: 20-30 mg/kg/dose",
        formDose: "بر اساس وزن کودک (شیاف ۱۲۵ یا ۳۲۵ میلی‌گرم در هر نوبت)",
        interval: "Q4-6hr",
        maxDose: "Infant: 60mg/kg/day | Child: 90mg/kg/day"
      },
      {
        formEn: "Tab 325, 500mg",
        formFa: "قرص ۳۲۵ و ۵۰۰ میلی‌گرم",
        dosePerKg: "10-15 mg/kg/dose",
        formDose: "قرص متناسب با وزن در هر نوبت",
        interval: "Q4-6hr",
        maxDose: "90mg/kg/day"
      },
      {
        formEn: "Inj 1000mg",
        formFa: "آمپول/ویال تزریقی ۱۰۰۰ میلی‌گرم",
        dosePerKg: "10-15 mg/kg/dose",
        formDose: "انفوزیون وریدی در هر نوبت",
        interval: "Q4-6hr",
        maxDose: "Infant: 60mg/kg/day | Child: 90mg/kg/day"
      }
    ]
  },
  {
    id: 2,
    code: "2*",
    nameEn: "Acyclovir",
    nameFa: "آسیکلوویر",
    searchKeywords: "acyclovir آسیکلوویر تبخال استوماتیت آبله مرغان زونا انسفالیت",
    renalAdjustment: true,
    indication: "تب‌خال، استوماتیت، آبله‌مرغان، زونا، انسفالیت هرپسی",
    primaryDosePerKg: [
      "PO (تب‌خال، استوماتیت): 15 mg/kg/dose (هر ۶ ساعت)",
      "PO (آبله‌مرغان، زونا): 20 mg/kg/dose (هر ۶ ساعت)",
      "IV (انسفالیت): 10-15 mg/kg/dose (هر ۸ ساعت)",
      "IV (آبله‌مرغان، زونا): 10 mg/kg/dose (هر ۸ ساعت)",
      "IV (تب‌خال، استوماتیت): 5 mg/kg/dose (هر ۶ ساعت)",
      "نوزادان (HSV): 20 mg/kg/dose (هر ۸ ساعت / Q8hr)"
    ],
    forms: [
      {
        formEn: "Tab 200, 400 mg (PO)",
        formFa: "قرص خوراکی ۲۰۰ و ۴۰۰ میلی‌گرم (تب‌خال، استوماتیت)",
        dosePerKg: "15 mg/kg/dose",
        formDose: "خوراکی در هر نوبت",
        interval: "QID",
        maxDose: "250mg/dose"
      },
      {
        formEn: "Tab 200, 400 mg (PO)",
        formFa: "قرص خوراکی ۲۰۰ و ۴۰۰ میلی‌گرم (آبله‌مرغان، زونا)",
        dosePerKg: "20 mg/kg/dose",
        formDose: "خوراکی در هر نوبت",
        interval: "QID",
        maxDose: "800mg/dose"
      },
      {
        formEn: "Inj (IV)",
        formFa: "آمپول/ویال تزریقی وریدی (انسفالیت)",
        dosePerKg: "10-15 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "TDS"
      },
      {
        formEn: "Inj (IV)",
        formFa: "آمپول/ویال تزریقی وریدی (آبله‌مرغان، زونا)",
        dosePerKg: "10 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "TDS"
      },
      {
        formEn: "Inj (IV)",
        formFa: "آمپول/ویال تزریقی وریدی (تب‌خال، استوماتیت)",
        dosePerKg: "5 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "QID"
      }
    ]
  },
  {
    id: 3,
    code: "3",
    nameEn: "Adenosine",
    nameFa: "آدنوزین",
    searchKeywords: "adenosine آدنوزین تاکی کاردی فوق بطنی psvt",
    renalAdjustment: false,
    indication: "تاکی‌کاردی فوق بطنی (PSVT)",
    primaryDosePerKg: [
      "کودکان: 0.1-0.2 mg/kg/dose (تزریق سریع وریدی در ۲ ثانیه)",
      "نوزادان: 0.05 mg/kg/dose (تزریق سریع وریدی)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "آمپول تزریقی وریدی اطفال",
        dosePerKg: "0.1-0.2 mg/kg/dose",
        formDose: "تزریق سریع وریدی طی ۲ ثانیه",
        interval: "Q2min PRN",
        maxDose: "6mg/dose"
      },
      {
        formEn: "Inj (Neonates)",
        formFa: "آمپول تزریقی وریدی نوزادان",
        dosePerKg: "0.05 mg/kg/dose",
        formDose: "Rapid IV push",
        interval: "Q1-2min",
        maxDose: "0.25mg/kg/dose"
      }
    ]
  },
  {
    id: 4,
    code: "4",
    nameEn: "Albendazole",
    nameFa: "آلبندازول",
    searchKeywords: "albendazole آلبندازول کرمک آسکاریس انگل",
    renalAdjustment: false,
    indication: "کرمک (اکسیور)، آسکاریس",
    primaryDosePerKg: [
      "400 mg/dose تک‌دوز خوراکی (در کرمک تکرار ۲ هفته بعد)"
    ],
    forms: [
      {
        formEn: "Tab 400mg",
        formFa: "قرص ۴۰۰ میلی‌گرم",
        dosePerKg: "400 mg/dose (Single Dose)",
        formDose: "۱ عدد قرص ۴۰۰ میلی‌گرم در هر نوبت (تکرار ۲ هفته بعد)",
        interval: "Single Dose (SD)"
      }
    ]
  },
  {
    id: 5,
    code: "5",
    nameEn: "Albumin",
    nameFa: "آلبومین",
    searchKeywords: "albumin آلبومین هیپوآلبومینمی هیپوولومی ویال",
    renalAdjustment: false,
    indication: "هیپوآلبومینمی، هیپوولومی",
    primaryDosePerKg: [
      "0.5 - 1 gr/kg/dose (انفوزیون وریدی طی ۱ تا ۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Vial 20%, 5%",
        formFa: "ویال ۲۰٪ و ۵٪ (۱۰۰ میلی‌لیتر ۲۰٪ = ۲۰ گرم)",
        dosePerKg: "0.5 - 1 gr/kg/dose",
        formDose: "انفوزیون وریدی طی ۱ تا ۲ ساعت",
        interval: "over 1-2hr",
        maxDose: "2gr/kg/day (هیپوآلبومینمی) | 6gr/kg/day (هیپوولومی)"
      }
    ]
  },
  {
    id: 6,
    code: "6*",
    nameEn: "Allopurinol",
    nameFa: "آلوپورینول",
    searchKeywords: "allopurinol آلوپورینول سندرم لیز تومور",
    renalAdjustment: true,
    indication: "سندرم لیز تومور",
    primaryDosePerKg: [
      "2.5 - 5 mg/kg/dose (هر ۶ تا ۱۲ ساعت / BID-QID)"
    ],
    forms: [
      {
        formEn: "Tab 300mg",
        formFa: "قرص ۳۰۰ میلی‌گرم",
        dosePerKg: "2.5 - 5 mg/kg/dose",
        formDose: "خوراکی در هر نوبت متناسب با وزن",
        interval: "BID-QID",
        maxDose: "600mg/24hr"
      }
    ]
  },
  {
    id: 7,
    code: "7*",
    nameEn: "Amikacin",
    nameFa: "آمیکاسین",
    searchKeywords: "amikacin آمیکاسین آنتی بیوتیک آمینوگلیکوزید",
    renalAdjustment: true,
    indication: "عفونت‌های باکتریال گرم منفی",
    primaryDosePerKg: [
      "اطفال (TDS): 5 - 7.5 mg/kg/dose (هر ۸ ساعت)",
      "نوزادان (SDD): 7.5-10 mg/kg/dose (هر ۸ تا ۱۲ ساعت)",
      "نوزادان (ODD): 15-18 mg/kg/dose (هر ۲۴ تا ۴۸ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "آمپول/ویال تزریقی (IV, IM)",
        dosePerKg: "5 - 7.5 mg/kg/dose",
        formDose: "تزریق در هر نوبت هر ۸ ساعت",
        interval: "TDS",
        maxDose: "1.5gr/day"
      }
    ]
  },
  {
    id: 8,
    code: "8*",
    nameEn: "Amoxicillin",
    nameFa: "آموکسی‌سیلین",
    searchKeywords: "amoxicillin آموکسی سیلین اوتیت سینوزیت پنومونی سوسپانسیون کپسول",
    renalAdjustment: true,
    indication: "اوتیت، سینوزیت، پنومونی",
    primaryDosePerKg: [
      "40 - 45 mg/kg/dose (هر ۱۲ ساعت / BID)"
    ],
    forms: [
      {
        formEn: "Susp 250mg/5ml",
        formFa: "سوسپانسیون ۲۵۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "40 - 45 mg/kg/dose",
        formDose: "W/2 ml/dose (نصف وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "BID",
        maxDose: "2-3gr/day"
      },
      {
        formEn: "Cap 250, 500mg",
        formFa: "کپسول ۲۵۰ و ۵۰۰ میلی‌گرم",
        dosePerKg: "40 - 45 mg/kg/dose",
        formDose: "کپسول متناسب با وزن در هر نوبت",
        interval: "BID",
        maxDose: "2-3gr/day"
      }
    ]
  },
  {
    id: 9,
    code: "9*",
    nameEn: "Amoxicillin - Clavulanic Acid (Farmentin)",
    nameFa: "کوآموکسی‌کلاو (فارمنتین)",
    searchKeywords: "amoxicillin clavulanic acid co-amoxiclav farmentin augmentin کوآموکسی کلاو فارمنتین آگمنتین اوتیت سینوزیت پنومونی 643 457 625",
    renalAdjustment: true,
    indication: "اوتیت، سینوزیت، پنومونی",
    primaryDosePerKg: [
      "فرم‌های BID (نوع 643 و 457): 40 - 45 mg/kg/dose (هر ۱۲ ساعت بر حسب جزء آموکسی‌سیلین)",
      "فرم‌های TDS (نوع 625): 27 - 30 mg/kg/dose (هر ۸ ساعت بر حسب جزء آموکسی‌سیلین)"
    ],
    forms: [
      {
        formEn: "Susp 643 (600mg Amoxicillin/5ml)",
        formFa: "سوسپانسیون ۶۴۳ (حاوی ۶۰۰ میلی‌گرم آموکسی‌سیلین در ۵ میلی‌لیتر)",
        dosePerKg: "40 - 45 mg/kg/dose",
        formDose: "W/3 ml/dose (یک‌سوم وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "BID",
        maxDose: "3gr/day"
      },
      {
        formEn: "Susp 457 (400mg Amoxicillin/5ml)",
        formFa: "سوسپانسیون ۴۵۷ (حاوی ۴۰۰ میلی‌گرم آموکسی‌سیلین در ۵ میلی‌لیتر)",
        dosePerKg: "40 - 45 mg/kg/dose",
        formDose: "W/2 ml/dose (نصف وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "BID",
        maxDose: "3gr/day"
      },
      {
        formEn: "Cap 625 (500mg Amoxicillin)",
        formFa: "کپسول ۶۲۵ (حاوی ۵۰۰ میلی‌گرم آموکسی‌سیلین)",
        dosePerKg: "27 - 30 mg/kg/dose",
        formDose: "W/2 ml/dose در سوسپانسیون معادل یا ۱ کپسول در هر نوبت",
        interval: "TDS",
        maxDose: "3gr/day"
      }
    ]
  },
  {
    id: 10,
    code: "10*",
    nameEn: "Ampicillin",
    nameFa: "آمپی‌سیلین",
    searchKeywords: "ampicillin آمپی سیلین مننژیت عفونت ویال",
    renalAdjustment: true,
    indication: "عفونت خفیف تا متوسط، عفونت شدید (مننژیت)",
    primaryDosePerKg: [
      "عفونت خفیف تا متوسط: 25 - 37.5 mg/kg/dose (هر ۶ ساعت / QID)",
      "عفونت شدید (مننژیت): 50 - 100 mg/kg/dose (هر ۶ ساعت / QID)",
      "نوزادان: 25-50 mg/kg/dose (هر ۶ تا ۱۲ ساعت بسته به سن و وزن)"
    ],
    forms: [
      {
        formEn: "Inj (خفیف تا متوسط)",
        formFa: "ویال تزریقی (عفونت خفیف تا متوسط)",
        dosePerKg: "25 - 37.5 mg/kg/dose",
        formDose: "تزریق وریدی یا عضلانی در هر نوبت",
        interval: "QID",
        maxDose: "2-4 gr/day"
      },
      {
        formEn: "Inj (شدید / مننژیت)",
        formFa: "ویال تزریقی (عفونت شدید و مننژیت)",
        dosePerKg: "50 - 100 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "QID",
        maxDose: "6-12 gr/day"
      }
    ]
  },
  {
    id: 11,
    code: "11",
    nameEn: "Atropine Sulfate",
    nameFa: "آتروپین سولفات",
    searchKeywords: "atropine sulfate آتروپین سولفات برادیکاردی احیای قلبی ریوی cpr",
    renalAdjustment: false,
    indication: "احیای قلبی-ریوی، برادیکاردی",
    primaryDosePerKg: [
      "0.02 mg/kg/dose (حداقل دوز: 0.1 mg | حداکثر دوز: 0.5 mg در هر نوبت)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "آمپول تزریقی",
        dosePerKg: "0.02 mg/kg/dose",
        formDose: "حداقل 0.1mg/dose تا حداکثر 0.5mg/dose",
        interval: "Q 5min × 3 (PRN)",
        maxDose: "0.5mg/dose"
      }
    ]
  },
  {
    id: 12,
    code: "12",
    nameEn: "Azithromycin",
    nameFa: "آزیترومایسین",
    searchKeywords: "azithromycin آزیترومایسین سیاه سرفه فارنژیت چرکی سوسپانسیون قرص",
    renalAdjustment: false,
    indication: "سیاه‌سرفه، فارنژیت چرکی، عفونت‌های تنفسی",
    primaryDosePerKg: [
      "سیاه‌سرفه بالای ۶ ماه: 5 mg/kg/dose (روزی یک‌بار - روز اول 10 mg/kg/dose)",
      "فارنژیت چرکی: 6 mg/kg/dose (روزی یک‌بار به مدت ۵ روز)",
      "سیاه‌سرفه زیر ۶ ماه: 10 mg/kg/dose (روزی یک‌بار به مدت ۵ روز)"
    ],
    forms: [
      {
        formEn: "Susp 100mg/5ml",
        formFa: "سوسپانسیون ۱۰۰ میلی‌گرم در ۵ میلی‌لیتر (سیاه‌سرفه بالای ۶ ماه)",
        dosePerKg: "5 mg/kg/dose (روز اول 10 mg/kg/dose)",
        formDose: "W/4 ml/dose در هر نوبت (بر حسب سوسپانسیون ۱۰۰mg)",
        interval: "Daily × 5d",
        maxDose: "500mg/dose"
      },
      {
        formEn: "Susp 100mg/5ml",
        formFa: "سوسپانسیون ۱۰۰ میلی‌گرم در ۵ میلی‌لیتر (سیاه‌سرفه زیر ۶ ماه)",
        dosePerKg: "10 mg/kg/dose",
        formDose: "W/2 ml/dose در هر نوبت (بر حسب سوسپانسیون ۱۰۰mg)",
        interval: "Daily × 5d",
        maxDose: "500mg/dose"
      },
      {
        formEn: "Susp 200mg/5ml",
        formFa: "سوسپانسیون ۲۰۰ میلی‌گرم در ۵ میلی‌لیتر (فارنژیت چرکی)",
        dosePerKg: "6 mg/kg/dose",
        formDose: "خوراکی روزی یک‌بار",
        interval: "Daily × 5d",
        maxDose: "500mg/dose"
      },
      {
        formEn: "Tab 250mg",
        formFa: "قرص ۲۵۰ میلی‌گرم",
        dosePerKg: "5-10 mg/kg/dose",
        formDose: "قرص متناسب با وزن در هر نوبت",
        interval: "Daily × 5d",
        maxDose: "500mg/dose"
      }
    ]
  },
  {
    id: 13,
    code: "13",
    nameEn: "Beclomethasone",
    nameFa: "بکلومتازون",
    searchKeywords: "beclomethasone بکلومتازون اسپری آسم",
    renalAdjustment: false,
    indication: "آسم",
    primaryDosePerKg: [
      "40 mcg/dose (1-2 puff در هر نوبت)"
    ],
    forms: [
      {
        formEn: "Spray (oral)",
        formFa: "اسپری استنشاقی دهانی",
        dosePerKg: "40 mcg/dose (1-2 puff)",
        formDose: "۱ تا ۲ پاف در هر نوبت",
        interval: "BID",
        maxDose: "80mcg/dose"
      }
    ]
  },
  {
    id: 14,
    code: "14",
    nameEn: "Bisacodyl",
    nameFa: "بیزاکودیل",
    searchKeywords: "bisacodyl بیزاکودیل شیاف یبوست",
    renalAdjustment: false,
    indication: "یبوست",
    primaryDosePerKg: [
      "۲ تا ۱۱ سال: 5 mg/dose | بالای ۱۱ سال: 10 mg/dose (تک‌دوز)"
    ],
    forms: [
      {
        formEn: "Supp 5mg, 10mg",
        formFa: "شیاف ۵ و ۱۰ میلی‌گرم",
        dosePerKg: "2-11y: 5mg/dose | >11y: 10mg/dose",
        formDose: "۲ تا ۱۱ سال: شیاف ۵mg | بالای ۱۱ سال: شیاف ۱۰mg",
        interval: "S.D (تک‌دوز)"
      }
    ]
  },
  {
    id: 15,
    code: "15",
    nameEn: "Ca. Gluconate",
    nameFa: "کلسیم گلوکونات",
    searchKeywords: "calcium gluconate ca.gluconate کلسیم گلوکونات هایپرکالمی ایست قلبی هایپوکلسمی",
    renalAdjustment: false,
    indication: "هایپرکالمی، ایست قلبی، هایپوکلسمی",
    primaryDosePerKg: [
      "هایپرکالمی و ایست قلبی: 1-2 ml/kg/dose (معادل 100-200 mg/kg/dose وریدی)",
      "هایپوکلسمی: 0.5-1.25 ml/kg/dose (معادل 50-125 mg/kg/dose هر ۶ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj 10% (1ml = 100mg)",
        formFa: "آمپول ۱۰٪ (هایپرکالمی و ایست قلبی)",
        dosePerKg: "1-2 ml/kg/dose (100-200 mg/kg/dose)",
        formDose: "تزریق وریدی آهسته در هر نوبت",
        interval: "Q10min",
        maxDose: "3 doses"
      },
      {
        formEn: "Inj 10% (1ml = 100mg)",
        formFa: "آمپول ۱۰٪ (هایپوکلسمی)",
        dosePerKg: "0.5-1.25 ml/kg/dose (50-125 mg/kg/dose)",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "Q 6hr",
        maxDose: "10ml/dose"
      }
    ]
  },
  {
    id: 16,
    code: "16",
    nameEn: "Calamin-D",
    nameFa: "کالامین-دی",
    searchKeywords: "calamin-d calamine کالامین دی خارش کهیر کرم",
    renalAdjustment: false,
    indication: "ضایعات خارش‌دار، کهیر",
    primaryDosePerKg: [
      "استعمال موضعی روی ضایعات در هر نوبت (هر ۸ ساعت)"
    ],
    forms: [
      {
        formEn: "Cream",
        formFa: "کرم موضعی",
        dosePerKg: "موضعی در هر نوبت",
        formDose: "استعمال موضعی روی ضایعات خارش‌دار",
        interval: "TDS"
      }
    ]
  },
  {
    id: 17,
    code: "17*",
    nameEn: "Cefazolin",
    nameFa: "سفازولین",
    searchKeywords: "cefazolin سفازولین آنتی بیوتیک سفالوسپورین",
    renalAdjustment: true,
    indication: "عفونت خفیف تا متوسط، عفونت شدید",
    primaryDosePerKg: [
      "عفونت خفیف تا متوسط: 8.3 - 16.7 mg/kg/dose (هر ۸ ساعت) یا 6.25 - 12.5 mg/kg/dose (هر ۶ ساعت)",
      "عفونت شدید: 25 - 37.5 mg/kg/dose (هر ۶ ساعت / QID)",
      "نوزادان: 20 mg/kg/dose (هر ۸ تا ۱۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj (خفیف تا متوسط)",
        formFa: "ویال تزریقی (عفونت خفیف تا متوسط)",
        dosePerKg: "8.3 - 16.7 mg/kg/dose",
        formDose: "تزریق وریدی یا عضلانی در هر نوبت",
        interval: "TDS-QID",
        maxDose: "3gr/day"
      },
      {
        formEn: "Inj (عفونت شدید)",
        formFa: "ویال تزریقی (عفونت شدید)",
        dosePerKg: "25 - 37.5 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "TDS-QID",
        maxDose: "6gr/day"
      }
    ]
  },
  {
    id: 18,
    code: "18*",
    nameEn: "Cefixime",
    nameFa: "سفیکسیم",
    searchKeywords: "cefixime سفیکسیم عفونت ادراری uti شیگلوز سوسپانسیون قرص",
    renalAdjustment: true,
    indication: "UTI (عفونت ادراری)، شیگلوز",
    primaryDosePerKg: [
      "4 mg/kg/dose (هر ۱۲ ساعت / BID) یا 8 mg/kg/dose (روزی یک‌بار / Daily)"
    ],
    forms: [
      {
        formEn: "Susp 100mg/5ml",
        formFa: "سوسپانسیون ۱۰۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "4 mg/kg/dose",
        formDose: "W/5 ml/dose (یک‌پنجم وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "BID",
        maxDose: "200mg/dose (400mg/day)"
      },
      {
        formEn: "Tab 200, 400mg",
        formFa: "قرص ۲۰۰ و ۴۰۰ میلی‌گرم",
        dosePerKg: "4 mg/kg/dose",
        formDose: "قرص متناسب با وزن در هر نوبت",
        interval: "BID",
        maxDose: "200mg/dose (400mg/day)"
      }
    ]
  },
  {
    id: 19,
    code: "19*",
    nameEn: "Cefotaxime",
    nameFa: "سفوتاکسیم",
    searchKeywords: "cefotaxime سفوتاکسیم مننژیت عفونت",
    renalAdjustment: true,
    indication: "عفونت خفیف تا متوسط، عفونت شدید",
    primaryDosePerKg: [
      "عفونت خفیف تا متوسط: 15 - 45 mg/kg/dose (هر ۶ تا ۸ ساعت - دوز معمول: 37.5-50 mg/kg/dose)",
      "عفونت شدید: 50 mg/kg/dose (هر ۶ ساعت / QID)",
      "نوزادان: 50 mg/kg/dose (هر ۸ تا ۱۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj (خفیف تا متوسط)",
        formFa: "ویال تزریقی (عفونت خفیف تا متوسط)",
        dosePerKg: "15 - 45 mg/kg/dose (معمول: 37.5-50 mg/kg/dose)",
        formDose: "تزریق در هر نوبت",
        interval: "TDS-QID",
        maxDose: "3-6 gr/day"
      },
      {
        formEn: "Inj (عفونت شدید)",
        formFa: "ویال تزریقی (عفونت شدید)",
        dosePerKg: "50 mg/kg/dose",
        formDose: "تزریق در هر نوبت",
        interval: "TDS-QID",
        maxDose: "8-12 gr/day"
      }
    ]
  },
  {
    id: 20,
    code: "20",
    nameEn: "Ceftazidime",
    nameFa: "سفتازیدیم",
    searchKeywords: "ceftazidime سفتازیدیم سودوموناس عفونت",
    renalAdjustment: false,
    indication: "عفونت خفیف تا متوسط، عفونت شدید",
    primaryDosePerKg: [
      "عفونت خفیف تا متوسط: 30 - 50 mg/kg/dose (هر ۸ ساعت / TDS)",
      "عفونت شدید: 67 - 100 mg/kg/dose (هر ۸ ساعت / TDS)",
      "نوزادان: 50 mg/kg/dose (هر ۸ تا ۱۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj (خفیف تا متوسط)",
        formFa: "ویال تزریقی (عفونت خفیف تا متوسط)",
        dosePerKg: "30 - 50 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "TDS",
        maxDose: "6gr/day"
      },
      {
        formEn: "Inj (عفونت شدید)",
        formFa: "ویال تزریقی (عفونت شدید)",
        dosePerKg: "67 - 100 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "TDS",
        maxDose: "6gr/day"
      }
    ]
  },
  {
    id: 21,
    code: "21",
    nameEn: "Cefuroxime",
    nameFa: "سفوروکسیم",
    searchKeywords: "cefuroxime سفوروکسیم سینوزیت اوتیت مدیا قرص",
    renalAdjustment: false,
    indication: "سینوزیت، اوتیت مدیا",
    primaryDosePerKg: [
      "15 mg/kg/dose (هر ۱۲ ساعت / BID)"
    ],
    forms: [
      {
        formEn: "Tab 250, 500mg",
        formFa: "قرص ۲۵۰ و ۵۰۰ میلی‌گرم",
        dosePerKg: "15 mg/kg/dose",
        formDose: "قرص متناسب با وزن در هر نوبت",
        interval: "BID",
        maxDose: "500mg/dose (1gr/day)"
      }
    ]
  },
  {
    id: 22,
    code: "22",
    nameEn: "Ceftriaxone",
    nameFa: "سفتریاکسون",
    searchKeywords: "ceftriaxone سفتریاکسون شیگلا اوتیت پنومونی uti مننژیت ویال",
    renalAdjustment: false,
    indication: "شیگلا، اوتیت، پنومونی، UTI، مننژیت",
    primaryDosePerKg: [
      "شیگلا و اوتیت: 25 mg/kg/dose (هر ۱۲ ساعت / BID) یا 50 mg/kg/dose (روزی یک‌بار)",
      "پنومونی و UTI: 37.5 mg/kg/dose (هر ۱۲ ساعت / BID) یا 75 mg/kg/dose (روزی یک‌بار)",
      "مننژیت: 50 mg/kg/dose (هر ۱۲ ساعت / BID) یا 100 mg/kg/dose (روزی یک‌بار)"
    ],
    forms: [
      {
        formEn: "Inj (شیگلا، اوتیت)",
        formFa: "ویال تزریقی (شیگلا، اوتیت)",
        dosePerKg: "25 mg/kg/dose (BID) یا 50 mg/kg/dose (روزی یک‌بار)",
        formDose: "تزریق وریدی یا عضلانی در هر نوبت",
        interval: "BID",
        maxDose: "1gr/dose (2gr/day)"
      },
      {
        formEn: "Inj (پنومونی، UTI)",
        formFa: "ویال تزریقی (پنومونی، UTI)",
        dosePerKg: "37.5 mg/kg/dose (BID) یا 75 mg/kg/dose (روزی یک‌بار)",
        formDose: "تزریق وریدی یا عضلانی در هر نوبت",
        interval: "BID",
        maxDose: "1gr/dose (2gr/day)"
      },
      {
        formEn: "Inj (مننژیت)",
        formFa: "ویال تزریقی (مننژیت)",
        dosePerKg: "50 mg/kg/dose (BID) یا 100 mg/kg/dose (روزی یک‌بار)",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "BID",
        maxDose: "2gr/dose (4gr/day)"
      }
    ]
  },
  {
    id: 23,
    code: "23*",
    nameEn: "Cephalexin",
    nameFa: "سفالکسین",
    searchKeywords: "cephalexin سفالکسین زرد زخم فارنژیت سوسپانسیون کپسول",
    renalAdjustment: true,
    indication: "زردزخم، فارنژیت",
    primaryDosePerKg: [
      "6.25 - 12.5 mg/kg/dose (هر ۶ ساعت / QID)"
    ],
    forms: [
      {
        formEn: "Susp 250mg/5ml",
        formFa: "سوسپانسیون ۲۵۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "6.25 - 12.5 mg/kg/dose",
        formDose: "W/4 ml/dose (یک‌چهارم وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "QID",
        maxDose: "1gr/dose (4gr/day)"
      },
      {
        formEn: "Cap 250mg",
        formFa: "کپسول ۲۵۰ میلی‌گرم",
        dosePerKg: "6.25 - 12.5 mg/kg/dose",
        formDose: "کپسول متناسب با وزن در هر نوبت",
        interval: "QID",
        maxDose: "1gr/dose (4gr/day)"
      }
    ]
  },
  {
    id: 24,
    code: "24*",
    nameEn: "Cetirizine",
    nameFa: "ستیریزین",
    searchKeywords: "cetirizine ستیریزین رینیت آلرژیک حساسیت دارویی سرماخوردگی آنتی هیستامین شربت قرص",
    renalAdjustment: true,
    indication: "رینیت آلرژیک، حساسیت دارویی، سرماخوردگی",
    primaryDosePerKg: [
      "۶ ماه تا ۲ سال: 2.5 ml/dose (روزی یک‌بار)",
      "۲ تا ۵ سال: 2.5 - 5 ml/dose (روزی یک‌بار)",
      "بالای ۵ سال: 5 - 10 mg/dose (روزی یک‌بار)"
    ],
    forms: [
      {
        formEn: "Syr 5mg/5ml",
        formFa: "شربت ۵ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "6m-2y: 2.5ml/dose | 2-5y: 2.5-5ml/dose",
        formDose: "خوراکی روزی یک‌بار در هر نوبت",
        interval: "Daily"
      },
      {
        formEn: "Tab 5, 10mg",
        formFa: "قرص ۵ و ۱۰ میلی‌گرم",
        dosePerKg: ">5y: 5-10mg/dose",
        formDose: "۱ عدد قرص ۵ یا ۱۰ میلی‌گرم در هر نوبت",
        interval: "Daily"
      }
    ]
  },
  {
    id: 25,
    code: "25",
    nameEn: "Charcoal",
    nameFa: "شارکول (زغال فعال)",
    searchKeywords: "charcoal activated زغال فعال شارکول مسمومیت دارویی پودر",
    renalAdjustment: false,
    indication: "مسمومیت دارویی",
    primaryDosePerKg: [
      "1-2 gr/kg/dose تک‌دوز خوراکی یا گاواژ"
    ],
    forms: [
      {
        formEn: "Powder",
        formFa: "پودر خوراکی / گاواژ",
        dosePerKg: "1-2 gr/kg/dose",
        formDose: "۱ تا ۲ گرم به ازای هر کیلوگرم در هر نوبت",
        interval: "SD (Single Dose)"
      }
    ]
  },
  {
    id: 26,
    code: "26*",
    nameEn: "Chloral hydrate 5%",
    nameFa: "کلرال هیدرات ۵٪",
    searchKeywords: "chloral hydrate کلرال هیدرات آرامبخش آرام بخش سونوگرافی eeg lp",
    renalAdjustment: true,
    indication: "آرام‌بخش برای EEG، LP، سونوگرافی و پروسیجرها",
    primaryDosePerKg: [
      "50-75 mg/kg/dose (معادل 1 ml/kg/dose تک‌دوز)"
    ],
    forms: [
      {
        formEn: "Syr 250mg/5ml (5%)",
        formFa: "شربت ۲۵۰ میلی‌گرم در ۵ میلی‌لیتر (۵٪)",
        dosePerKg: "50-75 mg/kg/dose",
        formDose: "1 ml/kg/dose (یک میلی‌لیتر به ازای هر کیلوگرم در هر نوبت)",
        interval: "SD (Single Dose)",
        maxDose: "10-15 ml/dose"
      }
    ]
  },
  {
    id: 27,
    code: "27",
    nameEn: "Clindamycin",
    nameFa: "کلیندامایسین",
    searchKeywords: "clindamycin کلیندامایسین پنومونی سلولیت اوربیتال کپسول آمپول",
    renalAdjustment: false,
    indication: "پنومونی، سلولیت اوربیتال",
    primaryDosePerKg: [
      "اطفال (TDS): 8.3 - 13.3 mg/kg/dose (هر ۸ ساعت)",
      "اطفال (QID): 6.25 - 10 mg/kg/dose (هر ۶ ساعت - عفونت شدید: 10 mg/kg/dose)",
      "نوزادان: 5 mg/kg/dose (هر ۶ تا ۱۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj, Cap 150, 300 mg",
        formFa: "آمپول تزریقی، کپسول ۱۵۰ و ۳۰۰ میلی‌گرم",
        dosePerKg: "6.25 - 13.3 mg/kg/dose",
        formDose: "تزریقی یا کپسول متناسب با وزن در هر نوبت",
        interval: "TDS-QID",
        maxDose: "2.7 gr/day"
      }
    ]
  },
  {
    id: 28,
    code: "28",
    nameEn: "Clotrimazole",
    nameFa: "کلوتریمازول",
    searchKeywords: "clotrimazole کلوتریمازول کاندیدا پوشک کرم",
    renalAdjustment: false,
    indication: "ضایعات کاندیدایی ناحیه پوشک",
    primaryDosePerKg: [
      "استعمال موضعی در هر نوبت (هر ۸ تا ۱۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Cream 1%",
        formFa: "کرم موضعی ۱٪",
        dosePerKg: "موضعی در هر نوبت",
        formDose: "استعمال موضعی روی ناحیه پوشک",
        interval: "BID-TDS"
      }
    ]
  },
  {
    id: 29,
    code: "29*",
    nameEn: "Cloxacillin",
    nameFa: "کلوگزاسیلین",
    searchKeywords: "cloxacillin کلوگزاسیلین استافیلوکوک ویال",
    renalAdjustment: true,
    indication: "عفونت‌های استافیلوکوکی",
    primaryDosePerKg: [
      "عفونت خفیف تا متوسط: 25 - 37.5 mg/kg/dose (هر ۶ ساعت / Q6hr)",
      "عفونت شدید: 50 mg/kg/dose (هر ۶ ساعت / Q6hr)"
    ],
    forms: [
      {
        formEn: "Inj (خفیف تا متوسط)",
        formFa: "ویال تزریقی (عفونت خفیف تا متوسط)",
        dosePerKg: "25 - 37.5 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت هر ۶ ساعت",
        interval: "Q6hr",
        maxDose: "1gr/dose (4 gr/day)"
      },
      {
        formEn: "Inj (عفونت شدید)",
        formFa: "ویال تزریقی (عفونت شدید)",
        dosePerKg: "50 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت هر ۶ ساعت",
        interval: "Q6hr",
        maxDose: "1.5-3gr/dose (6-12 gr/day)"
      }
    ]
  },
  {
    id: 30,
    code: "30*",
    nameEn: "Co-trimoxazole",
    nameFa: "کوتریموکسازول",
    searchKeywords: "co-trimoxazole tmp smx trimethoprim sulfamethoxazole کوتریموکسازول اسهال خونی عفونت ادراری uti",
    renalAdjustment: true,
    indication: "اسهال خونی، UTI (عفونت ادراری)، پروفیلاکسی در UTI",
    primaryDosePerKg: [
      "درمان اسهال خونی و UTI (بر حسب TMP): 4 - 6 mg/kg/dose (هر ۱۲ ساعت / BID)",
      "پروفیلاکسی UTI (بر حسب TMP): 2 - 4 mg/kg/dose (روزی یک‌بار / Daily)"
    ],
    forms: [
      {
        formEn: "Susp 40mg TMP - 200mg SMX / 5ml (درمان)",
        formFa: "سوسپانسیون ۴۰/۲۰۰ در ۵ میلی‌لیتر (درمان UTI و اسهال خونی)",
        dosePerKg: "4 - 6 mg/kg/dose (بر حسب جزء TMP)",
        formDose: "W/2 ml/dose (نصف وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "BID",
        maxDose: "160mg/dose TMP (320mg/day)"
      },
      {
        formEn: "Susp 40mg TMP - 200mg SMX / 5ml (پروفیلاکسی)",
        formFa: "سوسپانسیون ۴۰/۲۰۰ در ۵ میلی‌لیتر (پروفیلاکسی UTI)",
        dosePerKg: "2 - 4 mg/kg/dose (بر حسب جزء TMP)",
        formDose: "روزی یک‌بار در هر نوبت",
        interval: "Daily",
        maxDose: "160mg/dose TMP"
      },
      {
        formEn: "Tab 80 mg TMP (400mg SMX)",
        formFa: "قرص ۸۰ میلی‌گرم TMP / ۴۰۰ میلی‌گرم SMX",
        dosePerKg: "4 - 6 mg/kg/dose (بر حسب جزء TMP)",
        formDose: "قرص متناسب با وزن در هر نوبت",
        interval: "BID",
        maxDose: "160mg/dose TMP"
      }
    ]
  },
  {
    id: 31,
    code: "31",
    nameEn: "Dexamethasone",
    nameFa: "دگزامتازون",
    searchKeywords: "dexamethasone دگزامتازون کروپ خروسک آمپول",
    renalAdjustment: false,
    indication: "کروپ (خروسک)",
    primaryDosePerKg: [
      "0.6 mg/kg/dose تک‌دوز خوراکی، عضلانی یا وریدی (حداکثر 8 mg)"
    ],
    forms: [
      {
        formEn: "Inj 8mg/mL (IV, IM, PO)",
        formFa: "آمپول ۸ میلی‌گرم در میلی‌لیتر",
        dosePerKg: "0.6 mg/kg/dose",
        formDose: "تک‌دوز (IV, IM یا خوراکی)",
        interval: "SD (Single Dose)",
        maxDose: "8mg/dose"
      }
    ]
  },
  {
    id: 32,
    code: "32",
    nameEn: "Dextromethorphan",
    nameFa: "دکسترومتورفان",
    searchKeywords: "dextromethorphan دکسترومتورفان سرفه خشک شربت",
    renalAdjustment: false,
    indication: "سرفه‌های خشک",
    primaryDosePerKg: [
      "0.33 mg/kg/dose (معادل W/3 ml/dose از شربت 15mg/5ml هر ۸ ساعت)"
    ],
    forms: [
      {
        formEn: "Syr 15mg/5ml",
        formFa: "شربت ۱۵ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "0.33 mg/kg/dose",
        formDose: "W/3 ml/dose (یک‌سوم وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "TDS"
      }
    ]
  },
  {
    id: 33,
    code: "33",
    nameEn: "Diazepam",
    nameFa: "دیازپام",
    searchKeywords: "diazepam دیازپام تشنج تب fc آمپول قرص رکتال",
    renalAdjustment: false,
    indication: "در حال تشنج، پروفیلاکسی در FC (تشنج ناشی از تب)",
    primaryDosePerKg: [
      "در حال تشنج (وریدی): 0.1-0.3 mg/kg/dose",
      "در حال تشنج (رکتال): 0.5 mg/kg/dose",
      "پروفیلاکسی تشنج تب (خوراکی): 0.3 mg/kg/dose (هر ۸ ساعت در ۲ روز اول تب)"
    ],
    forms: [
      {
        formEn: "Inj 10mg/mL",
        formFa: "آمپول ۱۰ میلی‌گرم در میلی‌لیتر (در حال تشنج)",
        dosePerKg: "وریدی: 0.1-0.3 mg/kg/dose | رکتال: 0.5 mg/kg/dose",
        formDose: "تزریق وریدی آهسته یا رکتال در هر نوبت",
        interval: "Q10min × 2",
        maxDose: "<5y: 5mg | >5y: 10mg"
      },
      {
        formEn: "Tab 2, 5, 10 mg",
        formFa: "قرص ۲، ۵ و ۱۰ میلی‌گرم (پروفیلاکسی تشنج تب)",
        dosePerKg: "0.3 mg/kg/dose",
        formDose: "قرص متناسب با وزن در هر نوبت هر ۸ ساعت",
        interval: "TDS"
      }
    ]
  },
  {
    id: 34,
    code: "34",
    nameEn: "Dicyclomine",
    nameFa: "دی‌سیکلومین",
    searchKeywords: "dicyclomine دی سیکلومین دل پیچه ضداسپاسم شربت",
    renalAdjustment: false,
    indication: "دل‌پیچه، ضداسپاسم",
    primaryDosePerKg: [
      "W/4 ml/dose (یا 2.5-5 ml/dose در هر نوبت هر ۸ ساعت)"
    ],
    forms: [
      {
        formEn: "Syr 10mg/5ml",
        formFa: "شربت ۱۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "0.5 - 1 mg/kg/dose (معادل W/4 ml/dose)",
        formDose: "W/4 ml/dose یا 2.5-5 ml در هر نوبت",
        interval: "TDS"
      }
    ]
  },
  {
    id: 35,
    code: "35",
    nameEn: "Dimethicone",
    nameFa: "دایمتیکون",
    searchKeywords: "dimethicone دایمتیکون کولیک شیرخواری نفخ قطره",
    renalAdjustment: false,
    indication: "کولیک شیرخواری",
    primaryDosePerKg: [
      "5-10 drops/dose در هر نوبت (هر ۶ تا ۸ ساعت)"
    ],
    forms: [
      {
        formEn: "Drop",
        formFa: "قطره خوراکی",
        dosePerKg: "5-10 drops/dose",
        formDose: "۵ تا ۱۰ قطره در هر نوبت",
        interval: "TDS-QID"
      }
    ]
  },
  {
    id: 36,
    code: "36*",
    nameEn: "Diphenhydramine",
    nameFa: "دیفن‌هیدرامین",
    searchKeywords: "diphenhydramine دیفن هیدرامین ضد استفراغ ضد سرفه آرام بخش آنتی هیستامین شربت قرص",
    renalAdjustment: true,
    indication: "ضد استفراغ، ضد سرفه، آرام‌بخش، آنتی‌هیستامین",
    primaryDosePerKg: [
      "1 mg/kg/dose (هر ۸ ساعت / TDS)"
    ],
    forms: [
      {
        formEn: "Syr 12.5mg/5ml",
        formFa: "شربت ۱۲.۵ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "1 mg/kg/dose",
        formDose: "W/3 ml/dose (یک‌سوم وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "TDS",
        maxDose: "50mg/dose"
      },
      {
        formEn: "Tab 25 mg",
        formFa: "قرص ۲۵ میلی‌گرم",
        dosePerKg: "1 mg/kg/dose",
        formDose: "قرص متناسب با وزن در هر نوبت",
        interval: "TDS",
        maxDose: "50mg/dose"
      }
    ]
  },
  {
    id: 37,
    code: "37",
    nameEn: "Dobutamine",
    nameFa: "دوبوتامین",
    searchKeywords: "dobutamine دوبوتامین کاهش عملکرد قلب ef شوک",
    renalAdjustment: false,
    indication: "کاهش عملکرد قلب (EF)، هایپوپرفیوژن",
    primaryDosePerKg: [
      "اطفال: 10-20 mcg/kg/min (انفوزیون وریدی مداوم)",
      "نوزادان: 2-20 mcg/kg/min (انفوزیون وریدی مداوم)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "آمپول/ویال تزریقی",
        dosePerKg: "10-20 mcg/kg/min",
        formDose: "انفوزیون مداوم وریدی (IV Infusion)",
        interval: "IV Infusion",
        maxDose: "40mcg/kg/min"
      }
    ]
  },
  {
    id: 38,
    code: "38",
    nameEn: "Dopamine",
    nameFa: "دوپامین",
    searchKeywords: "dopamine دوپامین افت فشار خون کاهش عملکرد قلب شوک",
    renalAdjustment: false,
    indication: "کاهش عملکرد قلب یا افت فشار خون",
    primaryDosePerKg: [
      "دوز کلیوی: 2-5 mcg/kg/min (انفوزیون مداوم)",
      "دوز اینوتروپ / فشار خون: 10-20 mcg/kg/min (انفوزیون مداوم)",
      "نوزادان: 2-20 mcg/kg/min"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "آمپول/ویال تزریقی",
        dosePerKg: "2-5 mcg/kg/min | 10-20 mcg/kg/min",
        formDose: "انفوزیون مداوم وریدی (IV Infusion)",
        interval: "IV Infusion",
        maxDose: "20-50mcg/kg/min"
      }
    ]
  },
  {
    id: 39,
    code: "39",
    nameEn: "Epinephrine",
    nameFa: "اپی‌نفرین (آدرنالین)",
    searchKeywords: "epinephrine adrenaline اپی نفرین آدرنالین آسیستول برادی کاردی آنافیلاکسی کروپ",
    renalAdjustment: false,
    indication: "آسیستول، برادی‌کاردی، آنافیلاکسی، کروپ",
    primaryDosePerKg: [
      "1/1000 (تراشه ET - آسیستول/برادی‌کاردی): 0.1 ml/kg/dose",
      "1/1000 (عضلانی IM - آنافیلاکسی): 0.01 ml/kg/dose",
      "1/1000 (نبولایز - کروپ): 0.5 ml/kg/dose (رقیق با ۳ml نرمال سالین)",
      "1/10,000 (وریدی IV - احیا و شوک شدید): 0.1 ml/kg/dose (نوزادان: 0.1-0.3 ml/kg/dose)"
    ],
    forms: [
      {
        formEn: "Inj 1/1000 (1mg/ml) - ET",
        formFa: "آمپول ۱/۱۰۰۰ (داخل تراشه ET)",
        dosePerKg: "ET: 0.1 ml/kg/dose",
        formDose: "تزریق داخل تراشه در هر نوبت",
        interval: "Q3-5min"
      },
      {
        formEn: "Inj 1/1000 (1mg/ml) - IM",
        formFa: "آمپول ۱/۱۰۰۰ (عضلانی IM)",
        dosePerKg: "IM: 0.01 ml/kg/dose",
        formDose: "تزریق عضلانی در هر نوبت",
        interval: "Q3-5min",
        maxDose: "0.3 ml/dose"
      },
      {
        formEn: "Inj 1/1000 (1mg/ml) - Nebulize",
        formFa: "آمپول ۱/۱۰۰۰ (نبولایز در کروپ)",
        dosePerKg: "0.5 ml/kg/dose",
        formDose: "رقیق با ۳ میلی‌لیتر نرمال سالین و نبولایز در هر نوبت",
        interval: "Q20min × 3 (PRN)",
        maxDose: "<4y: 2.5mL | >4y: 5mL"
      },
      {
        formEn: "Inj 1/10,000 (0.1mg/ml) - IV",
        formFa: "محلول ۱/۱۰,۰۰۰ (وریدی IV)",
        dosePerKg: "IV: 0.1 ml/kg/dose (نوزادان: 0.1-0.3 ml/kg/dose)",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "Q3-5min",
        maxDose: "1mg (10mL)/dose"
      }
    ]
  },
  {
    id: 40,
    code: "40*",
    nameEn: "Erythromycin",
    nameFa: "اریترومایسین",
    searchKeywords: "erythromycin اریترومایسین کلامیدیا سیاه سرفه کونژنکتیویت سوسپانسیون پماد چشمی",
    renalAdjustment: true,
    indication: "عفونت کلامیدیا، سیاه‌سرفه، کونژنکتیویت",
    primaryDosePerKg: [
      "اطفال خوراکی: 12.5 mg/kg/dose (هر ۶ ساعت / QID)",
      "نوزادان خوراکی: 10 mg/kg/dose (هر ۸ تا ۱۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Susp 200mg/5 ml",
        formFa: "سوسپانسیون ۲۰۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "12.5 mg/kg/dose",
        formDose: "W/4 ml/dose (یک‌چهارم وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "QID",
        maxDose: "500mg/dose (1-2 g/day)"
      },
      {
        formEn: "Ophthalmic Oint",
        formFa: "پماد چشمی",
        dosePerKg: "موضعی داخل چشم در هر نوبت",
        formDose: "استعمال داخل چشم مبتلا",
        interval: "QD-BID"
      }
    ]
  },
  {
    id: 41,
    code: "41*",
    nameEn: "Fentanyl",
    nameFa: "فنتانیل",
    searchKeywords: "fentanyl فنتانیل آرام بخش ضد درد ونتیلاتور",
    renalAdjustment: true,
    indication: "آرام‌بخش، ضد درد برای بیمار زیر ونتیلاتور",
    primaryDosePerKg: [
      "بولوس: 1-2 mcg/kg/dose (نوزادان: 1-4 mcg/kg/dose)",
      "انفوزیون مداوم: 1-5 mcg/kg/hr"
    ],
    forms: [
      {
        formEn: "Inj (Bolus)",
        formFa: "آمپول تزریقی (دوز بولوس)",
        dosePerKg: "1-2 mcg/kg/dose",
        formDose: "تزریق وریدی در صورت نیاز",
        interval: "Q30-60min (PRN)"
      },
      {
        formEn: "Inj (Infusion)",
        formFa: "آمپول تزریقی (انفوزیون مداوم)",
        dosePerKg: "1-5 mcg/kg/hr",
        formDose: "انفوزیون مداوم وریدی ۲۴ ساعته",
        interval: "IV Infusion / 24hr"
      }
    ]
  },
  {
    id: 42,
    code: "42",
    nameEn: "Ferrous sulfate",
    nameFa: "فروس سولفات (قطره، شربت و قرص آهن)",
    searchKeywords: "ferrous sulfate iron فروس سولفات قطره آهن شربت آهن کم خونی فقر آهن",
    renalAdjustment: false,
    indication: "پروفیلاکسی و درمان کم‌خونی فقر آهن",
    primaryDosePerKg: [
      "پروفیلاکسی (۶ ماه تا ۲ سالگی): 1-2 mg/kg/dose (بر حسب آهن المنتال، روزی یک‌بار)",
      "دوز درمانی کم‌خونی: 1.5 - 2 mg/kg/dose (هر ۸ ساعت) یا 4 - 6 mg/kg/dose (روزی یک‌بار)"
    ],
    forms: [
      {
        formEn: "Drop (25mg/1mL elemental iron)",
        formFa: "قطره خوراکی (حاوی ۲۵ میلی‌گرم آهن المنتال در هر میلی‌لیتر؛ ۱ قطره ≃ ۱ میلی‌گرم)",
        dosePerKg: "1-2 mg/kg/dose (پروفیلاکسی روزی یک‌بار)",
        formDose: "۱ تا ۲ قطره به ازای هر کیلوگرم در روز",
        interval: "Daily",
        maxDose: "15mg/day"
      },
      {
        formEn: "Syr (41mg/5mL elemental iron)",
        formFa: "شربت آهن (حاوی ۴۱ میلی‌گرم آهن المنتال در ۵ میلی‌لیتر)",
        dosePerKg: "1.5 - 2 mg/kg/dose (TDS) یا 4 - 6 mg/kg/dose (Daily)",
        formDose: "بر اساس آهن المنتال داخل پرانتز در هر نوبت",
        interval: "QD-TDS"
      },
      {
        formEn: "Tab (50mg elemental iron)",
        formFa: "قرص آهن (۵۰ میلی‌گرم آهن المنتال)",
        dosePerKg: "1 قرص متناسب با وزن در هر نوبت",
        formDose: "قرص ۵۰ میلی‌گرم آهن المنتال",
        interval: "QD-TDS"
      }
    ]
  },
  {
    id: 43,
    code: "43*",
    nameEn: "Furosemide",
    nameFa: "فوروزماید (لازیکس)",
    searchKeywords: "furosemide lasix فوروزماید لازیکس ادم دیورتیک",
    renalAdjustment: true,
    indication: "ادم ریوی، اضافه‌بار مایعات",
    primaryDosePerKg: [
      "اطفال (Inj): 1-2 mg/kg/dose (هر ۶ تا ۱۲ ساعت)",
      "نوزادان: IV: 1-2 mg/kg/dose | PO: 2-6 mg/kg/dose"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "آمپول تزریقی",
        dosePerKg: "1-2 mg/kg/dose",
        formDose: "تزریق وریدی یا عضلانی در هر نوبت",
        interval: "BID-QID",
        maxDose: "2mg/kg/dose"
      }
    ]
  },
  {
    id: 44,
    code: "44",
    nameEn: "Gentamicin",
    nameFa: "جنتامایسین",
    searchKeywords: "gentamicin جنتامایسین کونژنکتیویت آمپول قطره چشمی",
    renalAdjustment: true,
    indication: "عفونت‌های باکتریال، کونژنکتیویت",
    primaryDosePerKg: [
      "اطفال (TDS): 1 - 2.5 mg/kg/dose (هر ۸ ساعت - در بیمار CF با دوز 3.3 mg/kg/dose)",
      "نوزادان (SDD): 2.5 mg/kg/dose (هر ۸ تا ۱۸ ساعت)",
      "نوزادان (ODD): 4-5 mg/kg/dose (هر ۲۴ تا ۴۸ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "آمپول تزریقی",
        dosePerKg: "1 - 2.5 mg/kg/dose (در CF: 3.3 mg/kg/dose)",
        formDose: "تزریق در هر نوبت هر ۸ ساعت",
        interval: "TDS"
      },
      {
        formEn: "Ophthalmic Drop",
        formFa: "قطره چشمی",
        dosePerKg: "1-2 drops/dose",
        formDose: "۱ تا ۲ قطره در چشم مبتلا در هر نوبت",
        interval: "Q2-4hr"
      }
    ]
  },
  {
    id: 45,
    code: "45",
    nameEn: "GCSF",
    nameFa: "جی‌سی‌اس‌اف (فیلگراستیم)",
    searchKeywords: "gcsf filgrastim فیلگراستیم نوتروپنی",
    renalAdjustment: false,
    indication: "نوتروپنی",
    primaryDosePerKg: [
      "5-10 mcg/kg/dose (تزریق زیرجلدی SC روزی یک‌بار)"
    ],
    forms: [
      {
        formEn: "Inj 300mcg",
        formFa: "آمپول ۳۰۰ میکروگرم",
        dosePerKg: "5-10 mcg/kg/dose",
        formDose: "تزریق زیرجلدی (SC) در هر نوبت",
        interval: "Daily"
      }
    ]
  },
  {
    id: 46,
    code: "46",
    nameEn: "Glycerin",
    nameFa: "گلیسیرین",
    searchKeywords: "glycerin گلیسیرین شیاف یبوست",
    renalAdjustment: false,
    indication: "یبوست",
    primaryDosePerKg: [
      "1 شیاف اطفال در هر نوبت در صورت نیاز (Daily PRN)"
    ],
    forms: [
      {
        formEn: "Ped. Supp 1gr",
        formFa: "شیاف اطفال ۱ گرمی",
        dosePerKg: "1 Supp/dose (PRN)",
        formDose: "۱ عدد شیاف ۱ گرمی رکتال در هر نوبت",
        interval: "Daily (PRN)"
      }
    ]
  },
  {
    id: 47,
    code: "47",
    nameEn: "Gripe Mixture",
    nameFa: "گرایپ میکسچر",
    searchKeywords: "gripe mixture گرایپ میکسچر کولیک شیرخواری دل درد شربت",
    renalAdjustment: false,
    indication: "کولیک شیرخواری",
    primaryDosePerKg: [
      "2.5 - 5 ml/dose در هر نوبت (هر ۶ تا ۸ ساعت)"
    ],
    forms: [
      {
        formEn: "Syr",
        formFa: "شربت خوراکی",
        dosePerKg: "2.5 - 5 ml/dose",
        formDose: "۲.۵ تا ۵ میلی‌لیتر در هر نوبت",
        interval: "TDS-QID"
      }
    ]
  },
  {
    id: 48,
    code: "48",
    nameEn: "Hydrocortisone",
    nameFa: "هیدروکورتیزون",
    searchKeywords: "hydrocortisone هیدروکورتیزون آلرژی آنافیلاکسی اگزما درماتیت آتوپیک ویال کرم",
    renalAdjustment: false,
    indication: "بیماری‌های آلرژیک، آنافیلاکسی، اگزما، درماتیت آتوپیک",
    primaryDosePerKg: [
      "0.5 - 1 mg/kg/dose (هر ۱۲ ساعت / BID) یا 1 - 2 mg/kg/dose (روزی یک‌بار)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "ویال تزریقی",
        dosePerKg: "0.5 - 1 mg/kg/dose (BID) یا 1 - 2 mg/kg/dose (Daily)",
        formDose: "تزریق وریدی یا عضلانی در هر نوبت",
        interval: "QD-BID",
        maxDose: "100mg/dose"
      },
      {
        formEn: "Cream",
        formFa: "کرم موضعی",
        dosePerKg: "موضعی در هر نوبت",
        formDose: "استعمال موضعی روی ضایعات پوستی",
        interval: "TDS"
      }
    ]
  },
  {
    id: 49,
    code: "49",
    nameEn: "Hydroxyzine",
    nameFa: "هیدروکسی‌زین",
    searchKeywords: "hydroxyzine هیدروکسی زین خارش پوست کهیر شربت قرص",
    renalAdjustment: false,
    indication: "خارش پوست",
    primaryDosePerKg: [
      "0.67 mg/kg/dose (معادل W/3 ml/dose از شربت، هر ۸ ساعت / TDS)"
    ],
    forms: [
      {
        formEn: "Syr 10mg/5mL",
        formFa: "شربت ۱۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "0.67 mg/kg/dose",
        formDose: "W/3 ml/dose (یک‌سوم وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "TDS",
        maxDose: "<6y: 12.5mg/dose | 6-12y: 25mg/dose"
      },
      {
        formEn: "Tab 10, 25 mg",
        formFa: "قرص ۱۰ و ۲۵ میلی‌گرم",
        dosePerKg: "0.67 mg/kg/dose",
        formDose: "قرص متناسب با وزن و سن در هر نوبت",
        interval: "TDS",
        maxDose: "<6y: 12.5mg/dose | 6-12y: 25mg/dose"
      }
    ]
  },
  {
    id: 50,
    code: "50",
    nameEn: "Ibuprofen",
    nameFa: "ایبوپروفن (بروفن)",
    searchKeywords: "ibuprofen brufen ایبوپروفن بروفن کنترل تب درد شربت قرص",
    renalAdjustment: false,
    indication: "کنترل تب، درد",
    primaryDosePerKg: [
      "5-10 mg/kg/dose در هر نوبت (هر ۶ تا ۸ ساعت / TDS-QID)"
    ],
    forms: [
      {
        formEn: "Syr 100mg/5mL",
        formFa: "شربت ۱۰۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "5-10 mg/kg/dose",
        formDose: "W/3 ml/dose (یک‌سوم وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "TDS-QID",
        maxDose: "40mg/kg/day"
      },
      {
        formEn: "Tab 200 mg",
        formFa: "قرص ۲۰۰ میلی‌گرم",
        dosePerKg: "5-10 mg/kg/dose",
        formDose: "قرص متناسب با وزن در هر نوبت",
        interval: "TDS-QID",
        maxDose: "40mg/kg/day"
      }
    ]
  },
  {
    id: 51,
    code: "51*",
    nameEn: "Imipenem",
    nameFa: "ایمی‌پنم",
    searchKeywords: "imipenem ایمی پنم عفونت شدید بیمارستانی ویال",
    renalAdjustment: true,
    indication: "عفونت‌های شدید باکتریال",
    primaryDosePerKg: [
      "اطفال: 15 - 25 mg/kg/dose (هر ۶ ساعت / QID - در CF با دوز 22.5 mg/kg/dose)",
      "نوزادان: 20 mg/kg/dose (هر ۸ تا ۱۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "ویال تزریقی",
        dosePerKg: "15 - 25 mg/kg/dose (در CF: 22.5 mg/kg/dose)",
        formDose: "انفوزیون وریدی در هر نوبت هر ۶ ساعت",
        interval: "QID",
        maxDose: "1gr/dose (4gr/day)"
      }
    ]
  },
  {
    id: 52,
    code: "52",
    nameEn: "Influenza Vaccine",
    nameFa: "واکسن آنفولانزا",
    searchKeywords: "influenza vaccine واکسن آنفولانزا آنفلوانزا پروفیلاکسی",
    renalAdjustment: false,
    indication: "پروفیلاکسی آنفولانزا",
    primaryDosePerKg: [
      "۶ ماه تا ۳ سال: 0.25 mL/dose (نصف آمپول)",
      "بالای ۳ سال: 0.5 mL/dose (یک آمپول کامل)"
    ],
    forms: [
      {
        formEn: "Inj 0.5mL (SC/IM)",
        formFa: "سرنگ آماده تزریق ۰.۵ میلی‌لیتر",
        dosePerKg: "6m-3y: 0.25ml/dose | >3y: 0.5ml/dose",
        formDose: "۶ ماه تا ۳ سال: ۰.۲۵ میلی‌لیتر | بالای ۳ سال: ۰.۵ میلی‌لیتر",
        interval: "Single Dose (تک‌دوز سالانه)"
      }
    ]
  },
  {
    id: 53,
    code: "53*",
    nameEn: "Insulin Regular",
    nameFa: "انسولین رگولار",
    searchKeywords: "insulin regular انسولین رگولار dka کتواسیدوز دیابتی هایپرگلیسمی هایپرکالمی",
    renalAdjustment: true,
    indication: "درمان اولیه DKA، هایپرگلیسمی و هایپرکالمی نوزادان",
    primaryDosePerKg: [
      "درمان اولیه DKA: 0.05-0.1 U/kg/hr (انفوزیون مداوم وریدی)",
      "نوزادان هایپرگلیسمی: 0.05-0.2 U/kg/dose (هر ۶ ساعت در صورت نیاز)",
      "نوزادان هایپرکالمی: 0.01-0.1 U/kg/hr"
    ],
    forms: [
      {
        formEn: "Vial",
        formFa: "ویال تزریقی",
        dosePerKg: "0.05-0.1 U/kg/hr (DKA) | 0.05-0.2 U/kg/dose (Bolus)",
        formDose: "انفوزیون مداوم یا تزریق بولوس در هر نوبت",
        interval: "IV Infusion"
      }
    ]
  },
  {
    id: 54,
    code: "54",
    nameEn: "Ipratropium Bromide (Atrovent)",
    nameFa: "ایپراتروپیوم بروماید (آتروونت)",
    searchKeywords: "ipratropium bromide atrovent ایپراتروپیوم بروماید آتروونت آسم اسپری",
    renalAdjustment: false,
    indication: "آسم",
    primaryDosePerKg: [
      "1-2 puff/dose در هر نوبت (هر ۸ ساعت - در حمله آسم هر ۲۰ دقیقه تا ۳ بار)"
    ],
    forms: [
      {
        formEn: "Spray",
        formFa: "اسپری تنفسی",
        dosePerKg: "1-2 puff/dose",
        formDose: "۱ تا ۲ پاف در هر نوبت",
        interval: "Q8hr"
      }
    ]
  },
  {
    id: 55,
    code: "55",
    nameEn: "IVIG",
    nameFa: "ایمونوگلوبولین وریدی (IVIG)",
    searchKeywords: "ivig ایمونوگلوبولین وریدی itp گیلن باره کاوازاکی ویال",
    renalAdjustment: false,
    indication: "ITP، گیلن‌باره، کاوازاکی",
    primaryDosePerKg: [
      "1 - 2 gr/kg/dose (انفوزیون آهسته وریدی طی ۶ تا ۱۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Vial",
        formFa: "ویال تزریقی (ITP، گیلن‌باره، کاوازاکی)",
        dosePerKg: "1-2 gr/kg/dose",
        formDose: "انفوزیون وریدی طی ۶ تا ۱۲ ساعت",
        interval: "IV Infusion / 6-12hr"
      }
    ]
  },
  {
    id: 56,
    code: "56",
    nameEn: "Ketotifen",
    nameFa: "کتوتیفن",
    searchKeywords: "ketotifen کتوتیفن رینیت آلرژیک کهیر آسم شربت قرص",
    renalAdjustment: false,
    indication: "رینیت آلرژیک، کهیر",
    primaryDosePerKg: [
      "۶ ماه تا ۳ سال: 2.5 ml/dose (هر ۱۲ ساعت / BID)",
      "بالای ۳ سال: 5 ml/dose یا 1 mg/dose (هر ۱۲ ساعت / BID)"
    ],
    forms: [
      {
        formEn: "Syr 1mg/5ml",
        formFa: "شربت ۱ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "6m-3y: 2.5ml/dose | >3y: 5ml/dose",
        formDose: "خوراکی هر ۱۲ ساعت در هر نوبت",
        interval: "BID"
      },
      {
        formEn: "Tab 1mg",
        formFa: "قرص ۱ میلی‌گرم",
        dosePerKg: ">3y: 1mg/dose",
        formDose: "۱ عدد قرص ۱ میلی‌گرم در هر نوبت",
        interval: "BID"
      }
    ]
  },
  {
    id: 57,
    code: "57",
    nameEn: "Lactulose",
    nameFa: "لاکتولوز",
    searchKeywords: "lactulose لاکتولوز یبوست شربت",
    renalAdjustment: false,
    indication: "یبوست",
    primaryDosePerKg: [
      "0.5 - 1.5 mL/kg/dose (هر ۸ تا ۱۲ ساعت / BID-TDS)"
    ],
    forms: [
      {
        formEn: "Syr",
        formFa: "شربت خوراکی",
        dosePerKg: "0.5 - 1.5 mL/kg/dose",
        formDose: "خوراکی در هر نوبت",
        interval: "BID-TDS",
        maxDose: "60mL/day"
      }
    ]
  },
  {
    id: 58,
    code: "58",
    nameEn: "Lidocaine",
    nameFa: "لیدوکائین",
    searchKeywords: "lidocaine لیدوکائین آریتمی vt vf شوک آمپول",
    renalAdjustment: false,
    indication: "درمان VT و VF و قبل از دادن شوک، کنترل آریتمی",
    primaryDosePerKg: [
      "1 mg/kg/dose (تزریق وریدی در هر نوبت - حداکثر دوز تجمعی 3-5 mg/kg)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "آمپول تزریقی",
        dosePerKg: "1 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "Q10-15min × 2",
        maxDose: "3-5mg/kg"
      }
    ]
  },
  {
    id: 59,
    code: "59",
    nameEn: "Mebendazole",
    nameFa: "مبندازول",
    searchKeywords: "mebendazole مبندازول کرمک اکسیور آسکاریس انگل قرص",
    renalAdjustment: false,
    indication: "کرمک (اکسیور)، آسکاریس",
    primaryDosePerKg: [
      "کرمک (اکسیور): 100 mg/dose تک‌دوز (تکرار ۲ هفته بعد)",
      "آسکاریس: 100 mg/dose (هر ۱۲ ساعت به مدت ۳ روز)"
    ],
    forms: [
      {
        formEn: "Tab 100mg",
        formFa: "قرص ۱۰۰ میلی‌گرم",
        dosePerKg: "100 mg/dose",
        formDose: "۱ عدد قرص ۱۰۰ میلی‌گرم جویدنی در هر نوبت",
        interval: "BID × 3Days (یا تک‌دوز در کرمک)"
      }
    ]
  },
  {
    id: 60,
    code: "60*",
    nameEn: "Meropenem",
    nameFa: "مروپنم",
    searchKeywords: "meropenem مروپنم مننژیت تب و نوتروپنی عفونت شدید ویال",
    renalAdjustment: true,
    indication: "مننژیت، تب و نوتروپنی، عفونت‌های شدید",
    primaryDosePerKg: [
      "مننژیت: 40 mg/kg/dose (هر ۸ ساعت / TDS)",
      "تب و نوتروپنی و عفونت‌های شدید: 10 - 20 mg/kg/dose (هر ۸ ساعت / TDS)",
      "نوزادان: 20 mg/kg/dose (هر ۸ تا ۱۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj (مننژیت)",
        formFa: "ویال تزریقی (مننژیت)",
        dosePerKg: "40 mg/kg/dose",
        formDose: "انفوزیون وریدی در هر نوبت هر ۸ ساعت",
        interval: "TDS",
        maxDose: "2gr/dose (6gr/day)"
      },
      {
        formEn: "Inj (عفونت‌های شدید، نوتروپنی)",
        formFa: "ویال تزریقی (عفونت‌های شدید و نوتروپنی)",
        dosePerKg: "10 - 20 mg/kg/dose",
        formDose: "انفوزیون وریدی در هر نوبت هر ۸ ساعت",
        interval: "TDS",
        maxDose: "1gr/dose (3gr/day)"
      }
    ]
  },
  {
    id: 61,
    code: "61",
    nameEn: "Methylprednisolone",
    nameFa: "متیل‌پردنیزولون",
    searchKeywords: "methylprednisolone متیل پردنیزولون حمله آسم آنژیوادم ویال",
    renalAdjustment: false,
    indication: "حمله آسم، آنژیوادم",
    primaryDosePerKg: [
      "0.5 - 1 mg/kg/dose (هر ۸ تا ۱۲ ساعت / BID-TDS)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "ویال تزریقی",
        dosePerKg: "0.5 - 1 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "BID-TDS",
        maxDose: "60mg/day"
      }
    ]
  },
  {
    id: 62,
    code: "62*",
    nameEn: "Metronidazole",
    nameFa: "مترونیدازول (فلاژیل)",
    searchKeywords: "metronidazole flagyl مترونیدازول فلاژیل ژیاردیا آمیب عفونت بی هوازی شربت قرص ویال",
    renalAdjustment: true,
    indication: "ژیاردیا، آمیب، عفونت بی‌هوازی",
    primaryDosePerKg: [
      "ژیاردیا: 5 mg/kg/dose (هر ۸ ساعت / TDS به مدت ۵ روز)",
      "آمیب: 13.3 mg/kg/dose (هر ۸ ساعت / TDS به مدت ۱۰ روز)",
      "عفونت بی‌هوازی: 6.25 - 10 mg/kg/dose (هر ۶ ساعت / QID)",
      "نوزادان: 7.5-15 mg/kg/dose (هر ۱۲ تا ۴۸ ساعت)"
    ],
    forms: [
      {
        formEn: "Syr 125mg/5ml (ژیاردیا)",
        formFa: "شربت ۱۲۵ میلی‌گرم در ۵ میلی‌لیتر (ژیاردیا)",
        dosePerKg: "5 mg/kg/dose",
        formDose: "W/5 ml/dose (یک‌پنجم وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "TDS",
        maxDose: "500mg/dose (1-2gr/day)"
      },
      {
        formEn: "Syr 125mg/5ml (آمیب)",
        formFa: "شربت ۱۲۵ میلی‌گرم در ۵ میلی‌لیتر (آمیب)",
        dosePerKg: "13.3 mg/kg/dose",
        formDose: "W/2 ml/dose (نصف وزن کودک به میلی‌لیتر در هر نوبت)",
        interval: "TDS",
        maxDose: "500mg/dose (1-2gr/day)"
      },
      {
        formEn: "Tab 250mg, Inj",
        formFa: "قرص ۲۵۰ میلی‌گرم، ویال تزریقی (عفونت بی‌هوازی)",
        dosePerKg: "6.25 - 10 mg/kg/dose",
        formDose: "خوراکی یا تزریق وریدی در هر نوبت",
        interval: "QID",
        maxDose: "500mg/dose (1.5g/day)"
      }
    ]
  },
  {
    id: 63,
    code: "63*",
    nameEn: "Midazolam",
    nameFa: "میدازولام",
    searchKeywords: "midazolam میدازولام آرام بخش ضد درد تشنج آمپول",
    renalAdjustment: true,
    indication: "آرام‌بخش، ضد درد",
    primaryDosePerKg: [
      "اطفال: 0.05-0.1 mg/kg/dose در هر نوبت",
      "نوزادان: 0.05-0.15 mg/kg/dose (هر ۲ تا ۴ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "آمپول تزریقی",
        dosePerKg: "0.05-0.1 mg/kg/dose",
        formDose: "تزریق وریدی آهسته در هر نوبت",
        interval: "PRN × 3",
        maxDose: "6mg/day"
      }
    ]
  },
  {
    id: 64,
    code: "64",
    nameEn: "Mineral oil",
    nameFa: "روغن معدنی (شربت پارافین)",
    searchKeywords: "mineral oil paraffin شربت پارافین روغن معدنی یبوست",
    renalAdjustment: false,
    indication: "یبوست",
    primaryDosePerKg: [
      "0.5 - 1.5 ml/kg/dose (هر ۸ تا ۱۲ ساعت / BID-TDS)"
    ],
    forms: [
      {
        formEn: "Syr",
        formFa: "شربت خوراکی (پارافین خوراکی)",
        dosePerKg: "0.5 - 1.5 ml/kg/dose",
        formDose: "خوراکی در هر نوبت",
        interval: "BID-TDS"
      }
    ]
  },
  {
    id: 65,
    code: "65",
    nameEn: "Multi Vitamin",
    nameFa: "مولتی‌ویتامین",
    searchKeywords: "multi vitamin مولتی ویتامین قطره مکمل ویتامینی",
    renalAdjustment: false,
    indication: "مکمل ویتامینی",
    primaryDosePerKg: [
      "20-25 drops/dose (معادل 1 ml/dose روزی یک‌بار)"
    ],
    forms: [
      {
        formEn: "Drop",
        formFa: "قطره خوراکی",
        dosePerKg: "20-25 drops/dose (1ml)",
        formDose: "۲۰ تا ۲۵ قطره روزانه در هر نوبت",
        interval: "Daily"
      }
    ]
  },
  {
    id: 66,
    code: "66",
    nameEn: "Mupirocin",
    nameFa: "موپیروسین",
    searchKeywords: "mupirocin موپیروسین زرد زخم عفونت پوستی پماد",
    renalAdjustment: false,
    indication: "زردزخم، عفونت پوستی",
    primaryDosePerKg: [
      "استعمال موضعی روی ضایعات در هر نوبت (هر ۸ ساعت)"
    ],
    forms: [
      {
        formEn: "Oint",
        formFa: "پماد موضعی",
        dosePerKg: "موضعی در هر نوبت",
        formDose: "استعمال موضعی روی ضایعات پوستی",
        interval: "TDS"
      }
    ]
  },
  {
    id: 67,
    code: "67",
    nameEn: "Na-Bicarbonate",
    nameFa: "سدیم بی‌کربنات",
    searchKeywords: "sodium bicarbonate na-bicarbonate سدیم بی کربنات اسیدوز متابولیک هیپرکالمی cpr مسمومیت tca",
    renalAdjustment: false,
    indication: "مراحل آخر CPR، مسمومیت با TCA، هیپرکالمی، اسیدوز متابولیک",
    primaryDosePerKg: [
      "1-2 ml/kg/dose (معادل 1-2 meq/kg/dose وریدی آهسته)"
    ],
    forms: [
      {
        formEn: "Vial 8.4% (1ml = 1meq)",
        formFa: "ویال ۸.۴٪ (هر ۱ میلی‌لیتر = ۱ میلی‌اکی‌والان)",
        dosePerKg: "1-2 ml/kg/dose",
        formDose: "تزریق وریدی آهسته در هر نوبت",
        interval: "SD (PRN)",
        maxDose: "10mL/dose"
      }
    ]
  },
  {
    id: 68,
    code: "68",
    nameEn: "NaCl 3%",
    nameFa: "سدیم کلراید ۳٪ (سرم نمکی هیپرتونیک)",
    searchKeywords: "nacl 3% hypertonic saline سدیم کلراید ۳ درصد سرم نمکی هیپوناترمی تشنج",
    renalAdjustment: false,
    indication: "تشنج طی درمان هیپرناترمی، Na < 120 و علامت‌دار",
    primaryDosePerKg: [
      "4-6 ml/kg/dose تک‌دوز انفوزیون وریدی"
    ],
    forms: [
      {
        formEn: "Vial 3%",
        formFa: "ویال تزریقی ۳٪",
        dosePerKg: "4-6 ml/kg/dose",
        formDose: "انفوزیون وریدی در هر نوبت",
        interval: "SD (Single Dose)"
      }
    ]
  },
  {
    id: 69,
    code: "69",
    nameEn: "NaCl 0.65%",
    nameFa: "قطره بینی کلرور سدیم ۰.۶۵٪",
    searchKeywords: "nacl 0.65% nasal drop قطره بینی سدیم کلراید گرفتگی بینی سرماخوردگی",
    renalAdjustment: false,
    indication: "گرفتگی بینی در سرماخوردگی",
    primaryDosePerKg: [
      "2-4 drops/dose در هر سوراخ بینی (هر ۲ تا ۴ ساعت)"
    ],
    forms: [
      {
        formEn: "Drop",
        formFa: "قطره بینی",
        dosePerKg: "2-4 drops/dose",
        formDose: "۲ تا ۴ قطره در هر سوراخ بینی در هر نوبت",
        interval: "Q2-4hr"
      }
    ]
  },
  {
    id: 70,
    code: "70",
    nameEn: "Naloxone",
    nameFa: "نالوکسان",
    searchKeywords: "naloxone نالوکسان مسمومیت اپیوم مخدر آمپول",
    renalAdjustment: false,
    indication: "مسمومیت با اپیوم (مخدرها)",
    primaryDosePerKg: [
      "0.1 mg/kg/dose در هر نوبت (تزریق IV, IM, SC, ET)"
    ],
    forms: [
      {
        formEn: "Inj 0.4mg/ml",
        formFa: "آمپول ۰.۴ میلی‌گرم در میلی‌لیتر",
        dosePerKg: "0.1 mg/kg/dose",
        formDose: "تزریق در هر نوبت",
        interval: "PRN Q2-3min",
        maxDose: "2mg × 5"
      }
    ]
  },
  {
    id: 71,
    code: "71",
    nameEn: "Nystatin",
    nameFa: "نیستاتین",
    searchKeywords: "nystatin نیستاتین برفک دهان کاندیدا قطره قرص",
    renalAdjustment: false,
    indication: "برفک دهان",
    primaryDosePerKg: [
      "زیر ۲ سال: 1 mL/dose (هر ۶ ساعت / QID)",
      "۲ تا ۵ سال: 2 - 4 mL/dose (هر ۶ ساعت / QID)"
    ],
    forms: [
      {
        formEn: "Drop 100,000 U/ml",
        formFa: "قطره ۱۰۰,۰۰۰ واحد در میلی‌لیتر",
        dosePerKg: "<2y: 1mL/dose | 2-5y: 2-4mL/dose",
        formDose: "ریختن روی لثه و زبان در هر نوبت",
        interval: "QID (7-10d)",
        maxDose: "5mL/dose"
      },
      {
        formEn: "Tab 100,000 U",
        formFa: "قرص ۱۰۰,۰۰۰ واحد",
        dosePerKg: "1 Tab/dose",
        formDose: "موضعی / خوراکی در هر نوبت",
        interval: "QID (7-10d)"
      }
    ]
  },
  {
    id: 72,
    code: "72",
    nameEn: "Octreotide",
    nameFa: "اکتروتاید",
    searchKeywords: "octreotide اکتروتاید خونریزی گوارشی gi bleeding اسهال ترشحی",
    renalAdjustment: false,
    indication: "خونریزی گوارشی (GI Bleeding)، اسهال ترشحی پایدار",
    primaryDosePerKg: [
      "خونریزی گوارشی: بولوس 1-2 mcg/kg/dose سپس انفوزیون 1 mcg/kg/hr",
      "اسهال ترشحی پایدار: بولوس 1 mcg/kg/dose سپس 0.5 - 5 mcg/kg/dose (هر ۱۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj (خونریزی گوارشی)",
        formFa: "آمپول تزریقی (GI Bleeding)",
        dosePerKg: "Bolus: 1-2 mcg/kg/dose | Infusion: 1 mcg/kg/hr",
        formDose: "دوز بولوس سپس انفوزیون وریدی مداوم",
        interval: "IV Infusion",
        maxDose: "1500mcg/day"
      },
      {
        formEn: "Inj (اسهال ترشحی)",
        formFa: "آمپول تزریقی (اسهال ترشحی)",
        dosePerKg: "0.5 - 5 mcg/kg/dose",
        formDose: "تزریق در هر نوبت هر ۱۲ ساعت",
        interval: "BID",
        maxDose: "1500mcg/day"
      }
    ]
  },
  {
    id: 73,
    code: "73",
    nameEn: "Omeprazole",
    nameFa: "امپرازول",
    searchKeywords: "omeprazole امپرازول رفلاکس gerd ازوفاژیت کپسول",
    renalAdjustment: false,
    indication: "ازوفاژیت، GERD (رفلاکس معده)",
    primaryDosePerKg: [
      "1 mg/kg/dose (روزی یک‌بار / Daily - حداکثر 20 mg/dose)"
    ],
    forms: [
      {
        formEn: "Cap 20mg",
        formFa: "کپسول ۲۰ میلی‌گرم",
        dosePerKg: "1 mg/kg/dose",
        formDose: "کپسول متناسب با وزن در هر نوبت",
        interval: "Daily",
        maxDose: "20mg/dose"
      }
    ]
  },
  {
    id: 74,
    code: "74",
    nameEn: "Ondansetron",
    nameFa: "اندانسترون (دمترون)",
    searchKeywords: "ondansetron ondanstrone اندانسترون دمترون تهوع استفراغ گاستروانتریت شیمی درمانی قرص آمپول",
    renalAdjustment: false,
    indication: "تهوع و استفراغ در شیمی‌درمانی، تهوع در گاستروانتریت",
    primaryDosePerKg: [
      "0.15 mg/kg/dose در هر نوبت (حداکثر 8 mg/dose)"
    ],
    forms: [
      {
        formEn: "Inj 4, 8 mg/mL",
        formFa: "آمپول ۴ و ۸ میلی‌گرم",
        dosePerKg: "0.15 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "PRN (Q8hr)",
        maxDose: "8mg/dose"
      },
      {
        formEn: "Tab 4 mg",
        formFa: "قرص ۴ میلی‌گرم",
        dosePerKg: "0.15 mg/kg/dose",
        formDose: "خوراکی در هر نوبت",
        interval: "SD (Single Dose)",
        maxDose: "8mg/dose"
      }
    ]
  },
  {
    id: 75,
    code: "75",
    nameEn: "Pantoprazole",
    nameFa: "پنتوپرازول",
    searchKeywords: "pantoprazole پنتوپرازول ازوفاژیت رفلاکس gerd قرص ویال",
    renalAdjustment: false,
    indication: "ازوفاژیت، GERD",
    primaryDosePerKg: [
      "0.5 - 1 mg/kg/dose (هر ۱۲ ساعت) یا 1 - 2 mg/kg/dose (روزی یک‌بار)"
    ],
    forms: [
      {
        formEn: "Inj, Tab 20mg",
        formFa: "ویال تزریقی، قرص ۲۰ میلی‌گرم",
        dosePerKg: "0.5 - 1 mg/kg/dose (BID) یا 1 - 2 mg/kg/dose (Daily)",
        formDose: "تزریقی یا خوراکی در هر نوبت",
        interval: "Q12-24hr"
      }
    ]
  },
  {
    id: 76,
    code: "76",
    nameEn: "Penicillin G",
    nameFa: "پنی‌سیلین G (ویال ۶.۳.۳ و ۱.۲۰۰.۰۰۰)",
    searchKeywords: "penicillin g benzathine پنی سیلین جی بنزاتین 6.3.3 1200000 فارنژیت استرپتوکوکی گلو درد",
    renalAdjustment: false,
    indication: "فارنژیت استرپتوکوکی",
    primaryDosePerKg: [
      "وزن کمتر از ۲۷ کیلوگرم (<27kg): ویال 6.3.3 (IM) تک‌دوز",
      "وزن بالای ۲۷ کیلوگرم (>27kg): ویال 1.200.000 (IM) تک‌دوز",
      "نوزادان (وریدی کریستال): مننژیت 50,000 U/kg/dose | سایر عفونت‌ها 25,000 U/kg/dose"
    ],
    forms: [
      {
        formEn: "Vial 6.3.3, 1.200.000",
        formFa: "ویال تزریقی ۶.۳.۳ و ۱.۲۰۰.۰۰۰ واحد",
        dosePerKg: "<27kg: 6.3.3 (IM) | >27kg: 1.200.000 (IM)",
        formDose: "زیر ۲۷kg: ویال ۶.۳.۳ عضلانی | بالای ۲۷kg: ویال ۱.۲۰۰.۰۰۰ عضلانی",
        interval: "SD (Single Dose)"
      }
    ]
  },
  {
    id: 77,
    code: "77*",
    nameEn: "Penicillin V",
    nameFa: "پنی‌سیلین V",
    searchKeywords: "penicillin v پنی سیلین وی خوراکی فارنژیت استرپتوکوکی سوسپانسیون قرص",
    renalAdjustment: true,
    indication: "فارنژیت استرپتوکوکی",
    primaryDosePerKg: [
      "وزن کمتر از ۲۷ کیلوگرم (<27kg): 250 mg/dose (یا 5 ml/dose در هر نوبت)",
      "وزن بالای ۲۷ کیلوگرم (>27kg): 500 mg/dose (یا 10 ml/dose در هر نوبت)"
    ],
    forms: [
      {
        formEn: "Susp 250mg/5ml",
        formFa: "سوسپانسیون ۲۵۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "<27kg: 250mg/dose (5ml) | >27kg: 500mg/dose (10ml)",
        formDose: "زیر ۲۷kg: ۵ میلی‌لیتر | بالای ۲۷kg: ۱۰ میلی‌لیتر در هر نوبت",
        interval: "BID-TDS",
        maxDose: "1-2g/day"
      },
      {
        formEn: "Tab 250, 500mg",
        formFa: "قرص ۲۵۰ و ۵۰۰ میلی‌گرم",
        dosePerKg: "<27kg: 250mg/dose | >27kg: 500mg/dose",
        formDose: "قرص متناسب با وزن در هر نوبت",
        interval: "BID-TDS",
        maxDose: "1-2g/day"
      }
    ]
  },
  {
    id: 78,
    code: "78",
    nameEn: "Pediatric gripe",
    nameFa: "شربت سرماخوردگی کودکان (پدیاتریک گرایپ)",
    searchKeywords: "pediatric gripe شربت سرماخوردگی کودکان پدیاتریک گرایپ",
    renalAdjustment: false,
    indication: "سرماخوردگی کودکان",
    primaryDosePerKg: [
      "W/3 ml/dose (۲ تا ۵ سال: 3-5 ml/dose در هر نوبت هر ۸ ساعت)"
    ],
    forms: [
      {
        formEn: "Syr",
        formFa: "شربت خوراکی",
        dosePerKg: "W/3 ml/dose (2-5y: 3-5ml/dose)",
        formDose: "یک‌سوم وزن کودک به میلی‌لیتر در هر نوبت",
        interval: "TDS",
        maxDose: "20mL/day"
      }
    ]
  },
  {
    id: 79,
    code: "79",
    nameEn: "Permethrin",
    nameFa: "پرمترین",
    searchKeywords: "permethrin پرمترین گال scabies شپش سر پوبیس کرم شامپو",
    renalAdjustment: false,
    indication: "درمان گال (Scabies)، شپش سر و پوبیس",
    primaryDosePerKg: [
      "گال (کرم ۵٪): استعمال موضعی (۸ تا ۱۲ ساعت روی محل بماند)",
      "شپش (کرم ۱٪): استعمال موضعی (۱۰ دقیقه روی محل بماند)"
    ],
    forms: [
      {
        formEn: "Cream 5%",
        formFa: "کرم موضعی ۵٪ (گال / Scabies)",
        dosePerKg: "موضعی در هر نوبت",
        formDose: "۸ تا ۱۲ ساعت روی محل بماند (تکرار ۱ هفته بعد)",
        interval: "تکرار ۱ هفته بعد"
      },
      {
        formEn: "Cream 1%",
        formFa: "کرم موضعی ۱٪ (شپش سر و پوبیس)",
        dosePerKg: "موضعی در هر نوبت",
        formDose: "۱۰ دقیقه روی محل بماند (تکرار ۱ هفته بعد)",
        interval: "تکرار ۱ هفته بعد"
      }
    ]
  },
  {
    id: 80,
    code: "80*",
    nameEn: "Phenobarbital",
    nameFa: "فنوباربیتال",
    searchKeywords: "phenobarbital فنوباربیتال تشنج صرع قرص آمپول",
    renalAdjustment: true,
    indication: "تشنج، درمان نگهدارنده تشنج",
    primaryDosePerKg: [
      "دوز بارگیری (Loading): 10 mg/kg/dose وریدی (نوزادان: 20 mg/kg/dose)",
      "دوز نگهدارنده (Maintenance): 2.5 mg/kg/dose (هر ۱۲ ساعت / BID - نوزادان: 1.5-2 mg/kg/dose)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "آمپول تزریقی",
        dosePerKg: "Load: 10 mg/kg/dose | Maint: 2.5 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "Load: IV × 2 | Maint: BID",
        maxDose: "Load: 300mg/dose | Maint: 60mg/dose"
      },
      {
        formEn: "Tab 15, 60, 100mg",
        formFa: "قرص ۱۵، ۶۰ و ۱۰۰ میلی‌گرم",
        dosePerKg: "2.5 mg/kg/dose",
        formDose: "قرص متناسب با وزن در هر نوبت هر ۱۲ ساعت",
        interval: "BID",
        maxDose: "60mg/dose"
      }
    ]
  },
  {
    id: 81,
    code: "81",
    nameEn: "Phenytoin",
    nameFa: "فنی‌توئین",
    searchKeywords: "phenytoin فنی توئین تشنج صرع شربت آمپول",
    renalAdjustment: false,
    indication: "تشنج، درمان نگهدارنده تشنج",
    primaryDosePerKg: [
      "دوز بارگیری (Loading): 10 mg/kg/dose وریدی (نوزادان: 20 mg/kg/dose)",
      "دوز نگهدارنده (Maintenance): 2.5 mg/kg/dose (هر ۱۲ ساعت / BID - نوزادان: 2-4 mg/kg/dose)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "آمپول تزریقی (تشنج)",
        dosePerKg: "Load: 10 mg/kg/dose | Maint: 2.5 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "Load: IV × 2 | Maint: BID",
        maxDose: "1500mg/day"
      },
      {
        formEn: "Syr 30mg/5mL",
        formFa: "شربت ۳۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "2.5 mg/kg/dose",
        formDose: "W/3 ml/dose در هر نوبت هر ۱۲ ساعت",
        interval: "BID",
        maxDose: "1500mg/day"
      }
    ]
  },
  {
    id: 82,
    code: "82",
    nameEn: "Polyethylene Glycol",
    nameFa: "پلی‌اتیلن گلیکول (PEG / پیدرولاکس)",
    searchKeywords: "polyethylene glycol peg pidrolax پلی اتیلن گلیکول پیدرولاکس یبوست پودر",
    renalAdjustment: false,
    indication: "یبوست",
    primaryDosePerKg: [
      "0.5 gr/kg/dose (هر ۱۲ ساعت / BID)"
    ],
    forms: [
      {
        formEn: "Powder 70gr",
        formFa: "پودر خوراکی ۷۰ گرمی",
        dosePerKg: "0.5 gr/kg/dose",
        formDose: "حل در آب در هر نوبت هر ۱۲ ساعت",
        interval: "BID",
        maxDose: "17g/day"
      }
    ]
  },
  {
    id: 83,
    code: "83",
    nameEn: "Prednisolone",
    nameFa: "پردنیزولون",
    searchKeywords: "prednisolone پردنیزولون آسم کروپ کورتون قرص",
    renalAdjustment: false,
    indication: "آسم، کروپ",
    primaryDosePerKg: [
      "آسم و التهاب: 0.5 - 1 mg/kg/dose (هر ۱۲ ساعت / BID)",
      "درمان کروپ: 1 mg/kg/dose (تک‌دوز خوراکی)"
    ],
    forms: [
      {
        formEn: "Tab 5, 50 mg",
        formFa: "قرص ۵ و ۵۰ میلی‌گرم",
        dosePerKg: "0.5 - 1 mg/kg/dose (در کروپ: 1 mg/kg/dose)",
        formDose: "قرص متناسب با وزن در هر نوبت",
        interval: "BID-TDS",
        maxDose: "60mg/day"
      }
    ]
  },
  {
    id: 84,
    code: "84",
    nameEn: "Pyrvinium Pamoate",
    nameFa: "پروینیوم پاموات",
    searchKeywords: "pyrvinium pamoate پروینیوم پاموات اکسیور کرمک سوسپانسیون",
    renalAdjustment: false,
    indication: "اکسیور (کرمک) در شیرخواران و کودکان",
    primaryDosePerKg: [
      "5 mg/kg/dose تک‌دوز خوراکی (تکرار ۲ هفته بعد)"
    ],
    forms: [
      {
        formEn: "Susp 50mg/5ml",
        formFa: "سوسپانسیون ۵۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "5 mg/kg/dose",
        formDose: "۰.۵ میلی‌لیتر به ازای هر کیلوگرم در هر نوبت",
        interval: "SD (تکرار ۲ هفته بعد)"
      }
    ]
  },
  {
    id: 85,
    code: "85*",
    nameEn: "Ranitidine",
    nameFa: "رانیتیدین",
    searchKeywords: "ranitidine رانیتیدین اولسر پپتیک رفلاکس gerd شربت آمپول",
    renalAdjustment: true,
    indication: "اولسر پپتیک، رفلاکس (GERD)",
    primaryDosePerKg: [
      "تزریقی (اولسر/رفلاکس): 1.5 - 2 mg/kg/dose (هر ۸ ساعت) یا 2 - 3 mg/kg/dose (هر ۱۲ ساعت)",
      "شربت (اولسر پپتیک): 2 - 4 mg/kg/dose (هر ۱۲ ساعت / BID)",
      "شربت (GERD): 5 mg/kg/dose (هر ۱۲ ساعت / BID)"
    ],
    forms: [
      {
        formEn: "Inj",
        formFa: "آمپول تزریقی",
        dosePerKg: "1.5 - 3 mg/kg/dose",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "BID-TDS",
        maxDose: "100mg/dose (200mg/day)"
      },
      {
        formEn: "Syr 75mg/5ml (اولسر)",
        formFa: "شربت ۷۵ میلی‌گرم در ۵ میلی‌لیتر (اولسر پپتیک)",
        dosePerKg: "2 - 4 mg/kg/dose",
        formDose: "خوراکی هر ۱۲ ساعت در هر نوبت",
        interval: "BID",
        maxDose: "150mg/dose (300mg/day)"
      },
      {
        formEn: "Syr 75mg/5ml (GERD)",
        formFa: "شربت ۷۵ میلی‌گرم در ۵ میلی‌لیتر (GERD)",
        dosePerKg: "5 mg/kg/dose",
        formDose: "خوراکی هر ۱۲ ساعت در هر نوبت",
        interval: "BID",
        maxDose: "150mg/dose (300mg/day)"
      }
    ]
  },
  {
    id: 86,
    code: "86",
    nameEn: "Salbutamol",
    nameFa: "سالبوتامول (آلبوترول اسپری)",
    searchKeywords: "salbutamol albuterol سالبوتامول اسپری آسم برونشیولیت",
    renalAdjustment: false,
    indication: "آسم، برونشیولیت",
    primaryDosePerKg: [
      "3-4 puff/dose در هر نوبت (هر ۴ تا ۶ ساعت - در حمله آسم هر ۲۰ دقیقه تا ۳ بار)"
    ],
    forms: [
      {
        formEn: "Spray",
        formFa: "اسپری استنشاقی",
        dosePerKg: "3-4 puff/dose",
        formDose: "۳ تا ۴ پاف در هر نوبت",
        interval: "Q4-6hr"
      }
    ]
  },
  {
    id: 87,
    code: "87",
    nameEn: "Silver Sulfadiazine",
    nameFa: "سیلور سولفادیازین",
    searchKeywords: "silver sulfadiazine سیلور سولفادیازین سوختگی کرم",
    renalAdjustment: false,
    indication: "سوختگی حرارتی درجه II و III",
    primaryDosePerKg: [
      "استعمال موضعی روی سوختگی در هر نوبت (هر ۱۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Cream 1%",
        formFa: "کرم موضعی ۱٪",
        dosePerKg: "موضعی در هر نوبت",
        formDose: "استعمال موضعی روی ناحیه سوختگی",
        interval: "BID"
      }
    ]
  },
  {
    id: 88,
    code: "88",
    nameEn: "Sulfacetamide",
    nameFa: "سولفاستامید",
    searchKeywords: "sulfacetamide سولفاستامید کونژنکتیویت باکتریال قطره چشمی",
    renalAdjustment: false,
    indication: "کونژنکتیویت باکتریال",
    primaryDosePerKg: [
      "1-2 drops/dose در هر چشم مبتلا (هر ۳ تا ۴ ساعت به مدت ۷ تا ۱۰ روز)"
    ],
    forms: [
      {
        formEn: "Opht. Drop 10%",
        formFa: "قطره چشمی ۱۰٪",
        dosePerKg: "1-2 drops/dose",
        formDose: "۱ تا ۲ قطره در هر نوبت",
        interval: "Q3-4hr"
      }
    ]
  },
  {
    id: 89,
    code: "89",
    nameEn: "Tetracycline",
    nameFa: "تتراسایکلین",
    searchKeywords: "tetracycline تتراسایکلین زردزخم عفونت پوستی پماد",
    renalAdjustment: false,
    indication: "زردزخم، عفونت پوستی",
    primaryDosePerKg: [
      "استعمال موضعی روی ضایعات در هر نوبت (هر ۶ تا ۸ ساعت)"
    ],
    forms: [
      {
        formEn: "Oint",
        formFa: "پماد موضعی",
        dosePerKg: "موضعی در هر نوبت",
        formDose: "استعمال موضعی روی ضایعات پوستی",
        interval: "TDS-QID"
      }
    ]
  },
  {
    id: 90,
    code: "90*",
    nameEn: "Vancomycin",
    nameFa: "وانکومایسین",
    searchKeywords: "vancomycin وانکومایسین مننژیت استافیلوکوک ویال",
    renalAdjustment: true,
    indication: "عفونت‌های شدید گرم مثبت (غیر مننژیت و مننژیت)",
    primaryDosePerKg: [
      "عفونت غیر مننژیت: 10 mg/kg/dose (هر ۶ ساعت / QID)",
      "مننژیت: 15 mg/kg/dose (هر ۶ ساعت / QID)",
      "نوزادان: 10-15 mg/kg/dose (هر ۸ تا ۲۴ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj (غیر مننژیت)",
        formFa: "ویال تزریقی (غیر مننژیت)",
        dosePerKg: "10 mg/kg/dose",
        formDose: "انفوزیون وریدی در هر نوبت هر ۶ ساعت",
        interval: "QID",
        maxDose: "1gr/dose (2-4gr/day)"
      },
      {
        formEn: "Inj (مننژیت)",
        formFa: "ویال تزریقی (مننژیت)",
        dosePerKg: "15 mg/kg/dose",
        formDose: "انفوزیون وریدی در هر نوبت هر ۶ ساعت",
        interval: "QID",
        maxDose: "1gr/dose (2-4gr/day)"
      }
    ]
  },
  {
    id: 91,
    code: "91",
    nameEn: "Ventolin (Albuterol)",
    nameFa: "ونتولین (آلبوترول نبولایز)",
    searchKeywords: "ventolin albuterol nebulize ونتولین آلبوترول نبولایز حمله آسم برونشیولیت",
    renalAdjustment: false,
    indication: "حمله آسم، برونشیولیت",
    primaryDosePerKg: [
      "0.15-0.3 mg/kg/dose (حداقل ۲.۵ میلی‌گرم | حداکثر ۵ میلی‌گرم در هر نوبت نبولایز)"
    ],
    forms: [
      {
        formEn: "Nebulize Solute",
        formFa: "محلول نبولایزر",
        dosePerKg: "0.15-0.3 mg/kg/dose",
        formDose: "حداقل ۲.۵mg تا حداکثر ۵mg در هر نوبت نبولایز",
        interval: "Q20min × 3 (سپس هر ۱ تا ۳ ساعت)",
        maxDose: "5mg/dose"
      }
    ]
  },
  {
    id: 92,
    code: "92",
    nameEn: "Zinc oxide",
    nameFa: "زینک اکساید",
    searchKeywords: "zinc oxide زینک اکساید سوختگی پوشک ادرار اسهال پماد",
    renalAdjustment: false,
    indication: "سوختگی ناشی از اسهال، ادرار",
    primaryDosePerKg: [
      "استعمال موضعی روی ناحیه سوختگی پوشک در هر نوبت (هر ۸ ساعت)"
    ],
    forms: [
      {
        formEn: "Oint",
        formFa: "پماد موضعی",
        dosePerKg: "موضعی در هر نوبت",
        formDose: "استعمال موضعی روی ناحیه سوختگی",
        interval: "TDS"
      }
    ]
  },
  {
    id: 93,
    code: "93",
    nameEn: "Zinc sulfate",
    nameFa: "زینک سولفات",
    searchKeywords: "zinc sulfate زینک سولفات اسهال گاستروانتریت ge شربت",
    renalAdjustment: false,
    indication: "درمان کمکی در گاستروانتریت (GE)",
    primaryDosePerKg: [
      "زیر ۶ ماه: 5 mg/dose (هر ۱۲ ساعت / BID)",
      "بالای ۶ ماه: 10 mg/dose (هر ۱۲ ساعت / BID)"
    ],
    forms: [
      {
        formEn: "Syr 10mg/5ml",
        formFa: "شربت ۱۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "<6m: 5 mg/dose (2.5ml) | >6m: 10 mg/dose (5ml)",
        formDose: "زیر ۶ ماه: ۲.۵ میلی‌لیتر | بالای ۶ ماه: ۵ میلی‌لیتر در هر نوبت",
        interval: "BID"
      }
    ]
  },
  {
    id: 94,
    code: "N3",
    nameEn: "Aminophylline (Neonates)",
    nameFa: "آمینوفیلین (نوزادان)",
    searchKeywords: "aminophylline آمینوفیلین آپنه نوزادی نارس apnea of prematurity",
    renalAdjustment: false,
    indication: "آپنه نوزاد نارس (Apnea of Prematurity)",
    primaryDosePerKg: [
      "دوز بارگیری (Loading): 4-6 mg/kg/dose وریدی آهسته",
      "دوز نگهدارنده (Maintenance): 1-2 mg/kg/dose (هر ۸ تا ۱۲ ساعت / BID-TDS)"
    ],
    forms: [
      {
        formEn: "Inj (IV)",
        formFa: "آمپول تزریقی وریدی",
        dosePerKg: "Load: 4-6 mg/kg/dose | Maint: 1-2 mg/kg/dose",
        formDose: "تزریق وریدی آهسته در هر نوبت",
        interval: "BID-TDS"
      }
    ]
  },
  {
    id: 95,
    code: "N4",
    nameEn: "Caffeine Citrate (Neonates)",
    nameFa: "کافئین سیترات (نوزادان)",
    searchKeywords: "caffeine citrate کافئین سیترات آپنه نوزاد نارس apnea",
    renalAdjustment: false,
    indication: "آپنه نوزاد نارس (Apnea of Prematurity)",
    primaryDosePerKg: [
      "دوز بارگیری (Loading): 20-25 mg/kg/dose",
      "دوز نگهدارنده (Maintenance): 5-10 mg/kg/dose (روزی یک‌بار / Daily)"
    ],
    forms: [
      {
        formEn: "Inj / Oral Solution",
        formFa: "ویال تزریقی / محلول خوراکی",
        dosePerKg: "Load: 20-25 mg/kg/dose | Maint: 5-10 mg/kg/dose",
        formDose: "انفوزیون آهسته وریدی یا خوراکی در هر نوبت",
        interval: "Daily"
      }
    ]
  },
  {
    id: 96,
    code: "N15",
    nameEn: "Surfactant (Survanta / Curosorf / Alveofact)",
    nameFa: "سورفکتانت (سروانتا، کوروسورف، آلوئوفکت)",
    searchKeywords: "surfactant survanta curosorf alveofact سورفکتانت سروانتا کوروسورف آلوئوفکت rds نوزاد",
    renalAdjustment: false,
    indication: "سندرم دیسترس تنفسی نوزادان (RDS)",
    primaryDosePerKg: [
      "سروانتا (Survanta): 4 ml/kg/dose داخل تراشه",
      "کوروسورف (Curosorf): دوز اولیه 2.5 ml/kg/dose | دوزهای بعدی 1.25 ml/kg/dose",
      "آلوئوفکت (Alveofact): 1.2 ml/kg/dose داخل تراشه"
    ],
    forms: [
      {
        formEn: "Survanta Vial",
        formFa: "ویال سروانتا (داخل تراشه)",
        dosePerKg: "4 ml/kg/dose",
        formDose: "تزریق داخل تراشه در هر نوبت"
      },
      {
        formEn: "Curosorf Vial",
        formFa: "ویال کوروسورف (داخل تراشه)",
        dosePerKg: "Initial: 2.5 ml/kg/dose | Subsequent: 1.25 ml/kg/dose",
        formDose: "تزریق داخل تراشه در هر نوبت"
      },
      {
        formEn: "Alveofact Vial",
        formFa: "ویال آلوئوفکت (داخل تراشه)",
        dosePerKg: "1.2 ml/kg/dose",
        formDose: "تزریق داخل تراشه در هر نوبت"
      }
    ]
  },
  {
    id: 97,
    code: "N16",
    nameEn: "Vitamin K (Neonates)",
    nameFa: "ویتامین K (نوزادان)",
    searchKeywords: "vitamin k vit k ویتامین کا نوزاد پروفیلاکسی خونریزی",
    renalAdjustment: false,
    indication: "پیشگیری و درمان کمبود ویتامین K در نوزادان",
    primaryDosePerKg: [
      "پروفیلاکسی: وزن <1000g: 0.5 mg/dose | وزن >1000g: 1 mg/dose (تک‌دوز عضلانی)",
      "درمان خونریزی: 1-2 mg/dose روزانه عضلانی"
    ],
    forms: [
      {
        formEn: "Inj (IM) - پیشگیری",
        formFa: "آمپول تزریقی عضلانی (پروفیلاکسی)",
        dosePerKg: "<1000g: 0.5mg/dose | >1000g: 1mg/dose",
        formDose: "تزریق عضلانی تک‌دوز",
        interval: "SD (Single Dose)"
      },
      {
        formEn: "Inj (IM) - درمان",
        formFa: "آمپول تزریقی عضلانی (درمان)",
        dosePerKg: "1-2 mg/dose",
        formDose: "تزریق عضلانی در هر نوبت",
        interval: "Daily"
      }
    ]
  },
  {
    id: 98,
    code: "N-AB1",
    nameEn: "Cefepime (Neonates)",
    nameFa: "سفپیم (نوزادان)",
    searchKeywords: "cefepime سفپیم آنتی بیوتیک نوزادان",
    renalAdjustment: true,
    indication: "عفونت‌های باکتریال نوزادان",
    primaryDosePerKg: [
      "50 mg/kg/dose در هر نوبت (هر ۸ تا ۱۲ ساعت بسته به سن و وزن)"
    ],
    forms: [
      {
        formEn: "Inj (IV, IM)",
        formFa: "ویال تزریقی",
        dosePerKg: "50 mg/kg/dose",
        formDose: "تزریق وریدی یا عضلانی در هر نوبت",
        interval: "q8h - q12h"
      }
    ]
  },
  {
    id: 99,
    code: "N-AB2",
    nameEn: "Ciprofloxacin (Neonates)",
    nameFa: "سیپروفلوکساسین (نوزادان)",
    searchKeywords: "ciprofloxacin سیپروفلوکساسین آنتی بیوتیک نوزادان",
    renalAdjustment: true,
    indication: "عفونت‌های باکتریال نوزادان",
    primaryDosePerKg: [
      "وزن 1200-2000g (بالای ۷ روز): 10-20 mg/kg/dose (هر ۲۴ ساعت / q24h)",
      "وزن بالای ۲۰۰۰g (بالای ۷ روز): 20-30 mg/kg/dose (هر ۱۲ ساعت / q12h)"
    ],
    forms: [
      {
        formEn: "Inj (IV)",
        formFa: "ویال تزریقی وریدی",
        dosePerKg: "10-20 mg/kg/dose (q24h) | 20-30 mg/kg/dose (q12h)",
        formDose: "تزریق وریدی در هر نوبت",
        interval: "q12h - q24h"
      }
    ]
  },
  {
    id: 100,
    code: "N-AB3",
    nameEn: "Linezolid (Neonates)",
    nameFa: "لینزولید (نوزادان)",
    searchKeywords: "linezolid لینزولید آنتی بیوتیک نوزادان",
    renalAdjustment: false,
    indication: "عفونت‌های گرم مثبت مقاوم در نوزادان",
    primaryDosePerKg: [
      "10 mg/kg/dose در هر نوبت (هر ۸ تا ۱۲ ساعت)"
    ],
    forms: [
      {
        formEn: "Inj (IV)",
        formFa: "ویال تزریقی وریدی",
        dosePerKg: "10 mg/kg/dose",
        formDose: "سن ۰ تا ۷ روز: هر ۱۲ ساعت | بالای ۷ روز: هر ۸ ساعت",
        interval: "q8h - q12h"
      }
    ]
  },
  {
    id: 101,
    code: "101*",
    nameEn: "Levetiracetam (Keppra)",
    nameFa: "لوتیراستام (کپرا)",
    searchKeywords: "levetiracetam keppra لوتیراستام کپرا تشنج صرع استاتوس شربت قرص ویال آمپول",
    renalAdjustment: true,
    indication: "کنترل تشنج (صرع میوکلونیک، پارشیال، ژنرالیزه تونیک-کلونیک)، استاتوس اپیلپتیکوس",
    primaryDosePerKg: [
      "دوز شروع نگهدارنده: 10 mg/kg/dose (هر ۱۲ ساعت / BID)",
      "دوز معمول نگهدارنده: 10-30 mg/kg/dose (هر ۱۲ ساعت / BID) - حداکثر 1500mg/dose (3000mg/day)",
      "دوز بارگیری در تشنج حاد / استاتوس: 20-40 mg/kg/dose وریدی آهسته طی ۱۰ تا ۱۵ دقیقه (حداکثر 3000-4500mg)"
    ],
    forms: [
      {
        formEn: "Oral Solution 100mg/ml",
        formFa: "محلول خوراکی ۱۰۰ میلی‌گرم در میلی‌لیتر (شربت)",
        dosePerKg: "10-30 mg/kg/dose",
        formDose: "0.1 - 0.3 ml/kg/dose (هر ۱۲ ساعت در هر نوبت)",
        interval: "BID",
        maxDose: "15ml/dose (1500mg/dose)"
      },
      {
        formEn: "Tab 250, 500, 750, 1000 mg",
        formFa: "قرص‌های ۲۵۰، ۵۰۰، ۷۵۰ و ۱۰۰۰ میلی‌گرم",
        dosePerKg: "10-30 mg/kg/dose",
        formDose: "قرص متناسب با وزن در هر نوبت هر ۱۲ ساعت",
        interval: "BID",
        maxDose: "1500mg/dose"
      },
      {
        formEn: "Inj 500mg/5ml (100mg/ml)",
        formFa: "ویال تزریقی وریدی ۵۰۰ میلی‌گرم در ۵ میلی‌لیتر",
        dosePerKg: "نگهدارنده: 10-30 mg/kg/dose | استاتوس و تشنج حاد: 20-40 mg/kg/dose",
        formDose: "انفوزیون وریدی طی ۱۰ تا ۱۵ دقیقه در هر نوبت",
        interval: "BID (در تشنج حاد: تک‌دوز اولیه)",
        maxDose: "3000-4500mg"
      }
    ]
  }
];
