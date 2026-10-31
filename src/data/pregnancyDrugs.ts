export type PregnancySafetyStatus = 'allowed' | 'conditional' | 'forbidden';

export interface PregnancyDrug {
  id: number;
  nameFa: string;
  nameEn: string;
  categoryFa: string;
  searchKeywords: string;
  safetyStatus: PregnancySafetyStatus;
  statusLabelFa: string;
  allowedTimingFa: string; // زمان مجاز بودن یا وضعیت زمانی مصرف در بارداری
  clinicalNotesFa: string; // توضیحات، عوارض جانبی مضر یا علل ممنوعیت بر اساس رفرنس
  alternativesFa?: string; // داروی جایگزین یا انتخابی در صورت ممنوع بودن
}

export const PREGNANCY_DRUGS: PregnancyDrug[] = [
  // --- 1. داروهای فشار خون (Cardiovascular / Antihypertensive) ---
  {
    id: 1,
    nameFa: "متیل‌دوپا",
    nameEn: "Methyldopa",
    categoryFa: "فشار خون",
    searchKeywords: "methyldopa متیل دوپا فشار خون کریز هایپرتنشن",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (داروی خط اول و انتخابی)",
    allowedTimingFa: "مجاز در تمام دوران بارداری (سه‌ماهه اول، دوم و سوم)",
    clinicalNotesFa: "داروی انتخابی در فشار خون شریانی و کریز هایپرتنشن بارداری. دارای بیشترین سابقه مصرف ایمن در دوران بارداری."
  },
  {
    id: 2,
    nameFa: "لابتالول",
    nameEn: "Labetalol",
    categoryFa: "فشار خون / بتابلاکر",
    searchKeywords: "labetalol لابتالول بتابلاکر فشار خون",
    safetyStatus: "conditional",
    statusLabelFa: "مجاز در سه‌ماهه اول و دوم (ممنوع در سه‌ماهه سوم)",
    allowedTimingFa: "مخصوص سه‌ماهه اول و دوم بارداری (در سه‌ماهه سوم استفاده نشود)",
    clinicalNotesFa: "از بتابلاکرهای انتخابی است؛ مخصوص سه‌ماهه اول و دوم بارداری. در سه‌ماهه سوم از بتابلاکرها نباید استفاده شود.",
    alternativesFa: "در سه‌ماهه سوم: متیل‌دوپا یا هیدرالازین"
  },
  {
    id: 3,
    nameFa: "متوپرولول",
    nameEn: "Metoprolol",
    categoryFa: "فشار خون / بتابلاکر",
    searchKeywords: "metoprolol متوپرولول بتابلاکر فشار خون",
    safetyStatus: "conditional",
    statusLabelFa: "مجاز در سه‌ماهه اول و دوم (ممنوع در سه‌ماهه سوم)",
    allowedTimingFa: "مخصوص سه‌ماهه اول و دوم بارداری (در سه‌ماهه سوم استفاده نشود)",
    clinicalNotesFa: "از بتابلاکرهای انتخابی به همراه لابتالول؛ در سه‌ماهه سوم بارداری نباید از بتابلاکرها استفاده شود.",
    alternativesFa: "در سه‌ماهه سوم: متیل‌دوپا یا هیدرالازین"
  },
  {
    id: 4,
    nameFa: "هیدرالازین",
    nameEn: "Hydralazine",
    categoryFa: "فشار خون",
    searchKeywords: "hydralazine هیدرالازین فشار خون کریز هایپرتنشن",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (داروی انتخابی)",
    allowedTimingFa: "مجاز در تمام طول بارداری به ویژه در فشار خون کنترل‌نشده و کریز",
    clinicalNotesFa: "داروی انتخابی در فشار خون شریانی کنترل‌نشده و اورژانس‌های هایپرتنشن در بارداری."
  },
  {
    id: 5,
    nameFa: "نیفدیپین",
    nameEn: "Nifedipine",
    categoryFa: "فشار خون / مسدودکننده کانال کلسیم",
    searchKeywords: "nifedipine نیفدیپین کلسیم بلوکر فشار خون",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (داروی انتخابی)",
    allowedTimingFa: "مجاز در بارداری (به ویژه سه‌ماهه دوم و سوم)",
    clinicalNotesFa: "مسدودکننده کانال کلسیمی انتخابی و ایمن در بارداری جهت کنترل فشار خون و زایمان زودرس."
  },
  {
    id: 6,
    nameFa: "مهارکننده‌های ACE (کاپتوپریل، انالاپریل و...)",
    nameEn: "ACE Inhibitors (Captopril, Enalapril)",
    categoryFa: "فشار خون",
    searchKeywords: "ace inhibitors captopril enalapril کاپتوپریل انالاپریل رامیپریل لوزیناپریل مهارکننده ace",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و غیرمجاز (در تمام دوران بارداری)",
    allowedTimingFa: "کاملاً ممنوع در سراسر بارداری",
    clinicalNotesFa: "سه‌ماهه اول: ناهنجاری‌های قلبی عروقی و CNS. سه‌ماهه دوم و سوم: الیگوهیدرآمنیوس، هیپوپلازی کلیه جنین، استخوان‌سازی ضعیف جمجمه و مرگ جنین.",
    alternativesFa: "متیل‌دوپا، لابتالول (سه‌ماهه ۱ و ۲)، هیدرالازین، نیفدیپین"
  },
  {
    id: 7,
    nameFa: "لوزارتان و والزارتان (ARB ها)",
    nameEn: "ARBs (Losartan, Valsartan)",
    categoryFa: "فشار خون",
    searchKeywords: "arbs losartan valsartan لوزارتان والزارتان ارب",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و غیرمجاز",
    allowedTimingFa: "کاملاً ممنوع در سراسر بارداری",
    clinicalNotesFa: "ایجاد ناهنجاری شدید کلیه جنین، الیگوهیدرآمنیوس و خطر نارسایی کلیوی و مرگ جنین.",
    alternativesFa: "متیل‌دوپا، لابتالول، هیدرالازین، نیفدیپین"
  },
  {
    id: 8,
    nameFa: "آتنولول",
    nameEn: "Atenolol",
    categoryFa: "فشار خون / بتابلاکر",
    searchKeywords: "atenolol آتنولول تنورمین بتابلاکر",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع (اجتناب شود)",
    allowedTimingFa: "غیرمجاز در بارداری",
    clinicalNotesFa: "باعث محدودیت شدید رشد داخل رحمی (IUGR) و کاهش رشد جفت می‌شود.",
    alternativesFa: "متوپرولول یا لابتالول (در سه‌ماهه اول و دوم)"
  },
  {
    id: 9,
    nameFa: "دیورتیک‌ها (فوروزماید، هیدروکلروتیازید و...)",
    nameEn: "Diuretics (Furosemide, HCTZ)",
    categoryFa: "فشار خون / دیورتیک",
    searchKeywords: "diuretics furosemide hydrochlorothiazide دیورتیک لازیکس فوروزماید هیدروکلروتیازید مدر",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و غیرمجاز (اجتناب شود)",
    allowedTimingFa: "اجتناب در سراسر بارداری (به‌ویژه در سه‌ماهه سوم)",
    clinicalNotesFa: "کاهش حجم خون مادر و کاهش شدید پرفیوژن جفت، به ویژه در سه‌ماهه سوم بارداری."
  },

  // --- 2. داروهای ضد انعقاد (Anticoagulants) ---
  {
    id: 10,
    nameFa: "هپارین و انوکساپارین (LMWH)",
    nameEn: "Heparin & LMWH (Enoxaparin)",
    categoryFa: "ضد انعقاد خون",
    searchKeywords: "heparin lmwh enoxaparin هپارین انوکساپارین کلکسان کسپارین ضد انعقاد",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (داروی انتخابی خط اول)",
    allowedTimingFa: "مجاز در تمام دوران بارداری (سه‌ماهه اول، دوم و سوم)",
    clinicalNotesFa: "داروی ضد انعقاد انتخابی در بارداری. به دلیل وزن مولکولی بالا از سد جفت عبور نمی‌کند و هیچ خطری برای جنین ندارد."
  },
  {
    id: 11,
    nameFa: "آسپرین (ASA)",
    nameEn: "Aspirin (ASA)",
    categoryFa: "ضد پلاکت / ضد انعقاد",
    searchKeywords: "aspirin asa آسپرین پره اکلامپسی ضد انعقاد",
    safetyStatus: "conditional",
    statusLabelFa: "مجاز در دوزهای پایین (ممنوع در دوزهای بالا به ویژه سه‌ماهه سوم)",
    allowedTimingFa: "دوزهای پایین (۸۰-۱۵۰ میلی‌گرم) در تمام بارداری برای پره‌اکلامپسی مجاز است؛ دوزهای بالا در سه‌ماهه سوم ممنوع است.",
    clinicalNotesFa: "دوز پایین برای پیشگیری از پره‌اکلامپسی در بارداری‌های پرخطر تجویز می‌شود. دوزهای بالا به‌خصوص در سه‌ماهه سوم باعث بسته شدن مجرای شریانی و خونریزی می‌شود و باید کاملاً اجتناب شود."
  },
  {
    id: 12,
    nameFa: "وارفارین و فن‌پروکومون",
    nameEn: "Warfarin & Phenprocoumon",
    categoryFa: "ضد انعقاد خوراکی",
    searchKeywords: "warfarin phenprocoumon وارفارین فن پروکومون کومادین",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و به شدت تراتوژن",
    allowedTimingFa: "کاملاً ممنوع در سراسر بارداری",
    clinicalNotesFa: "از سد جفت عبور می‌کند: سقط خودبه‌خود، مرده‌زایی، مرگ زودرس، خونریزی مغزی و ناهنجاری‌های CNS، آتروفی عصب بینایی، بدشکلی استخوانی (اپی‌فیز نوک‌تیز و هیپوپلازی بینی).",
    alternativesFa: "هپارین یا هپارین با وزن مولکولی پایین (LMWH / انوکساپارین)"
  },
  {
    id: 13,
    nameFa: "ضدانعقادهای خوراکی جدید (آپیکسابان، ریواروکسابان، دابیگاتران)",
    nameEn: "DOACs / NOACs (Apixaban, Rivaroxaban, Dabigatran)",
    categoryFa: "ضد انعقاد خوراکی جدید",
    searchKeywords: "apixaban rivaroxaban dabigatran noac doac زارلتو آپیکسابان ریواروکسابان دابیگاتران",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع (اجتناب شود)",
    allowedTimingFa: "اجتناب در دوران بارداری",
    clinicalNotesFa: "به دلیل کمبود داده‌های بالینی و عدم اثبات بی‌خطری در انسان، باید از مصرف آن‌ها در دوران بارداری اجتناب شود.",
    alternativesFa: "هپارین یا انوکساپارین (LMWH)"
  },

  // --- 3. داروهای ضدتشنج (Anticonvulsants) ---
  {
    id: 14,
    nameFa: "والپروات سدیم (والپروئیک اسید / دپاکین)",
    nameEn: "Sodium Valproate (Depakine)",
    categoryFa: "ضد تشنج",
    searchKeywords: "valproate depakine والپروات دپاکین والپروئیک اسید تشنج صرع",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع (بسیار پرخطر و تراتوژن)",
    allowedTimingFa: "کاملاً ممنوع در بارداری",
    clinicalNotesFa: "ایجاد نقص لوله عصبی (NTD مانند اسپینا بیفیدا)، نقایص شناختی شدید، بدشکلی‌های کرانیوفاشیال و نقایص قلبی.",
    alternativesFa: "تغییر دارو قبل از بارداری به لوتیراستام یا لاموتریژین با تجویز اسید فولیک با دوز بالا"
  },
  {
    id: 15,
    nameFa: "فنی‌توئین و کاربامازپین",
    nameEn: "Phenytoin & Carbamazepine",
    categoryFa: "ضد تشنج",
    searchKeywords: "phenytoin carbamazepine tegretol فنی توئین کاربامازپین تگرتول صرع",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و اجتناب شود",
    allowedTimingFa: "اجتناب در بارداری (در صورت امکان تغییر یابد)",
    clinicalNotesFa: "سندروم هیدانتوئین جنینی (شکاف کام، هیپوپلازی فالانکس و ناخن، پرمویی، اختلال رشد داخل رحمی)؛ کاربامازپین به دلیل اختلال در جذب فولات خطر نقص لوله عصبی دارد.",
    alternativesFa: "لوتیراستام یا لاموتریژین (مونوتراپی با کمترین دوز ممکن)"
  },
  {
    id: 16,
    nameFa: "لوتیراستام و لاموتریژین",
    nameEn: "Levetiracetam & Lamotrigine",
    categoryFa: "ضد تشنج",
    searchKeywords: "levetiracetam lamotrigine keppra لوتیراستام لاموتریژین کپرا تشنج",
    safetyStatus: "allowed",
    statusLabelFa: "داروهای انتخابی کنترل تشنج (با پایش دقیق)",
    allowedTimingFa: "مجاز در تمام دوران بارداری با نظر متخصص مغز و اعصاب",
    clinicalNotesFa: "داروهای خط اول و کم‌خطرترین ضدتشنج‌ها در بارداری هستند. توصیه می‌شود به صورت تک‌دارویی (مونوتراپی) با کمترین دوز مؤثر همراه با مصرف روزانه اسید فولیک تجویز شوند."
  },

  // --- 4. داروهای آنتی‌ویرال (Antivirals) ---
  {
    id: 17,
    nameFa: "آسیکلوویر و والاسیکلوویر",
    nameEn: "Acyclovir & Valacyclovir",
    categoryFa: "ضد ویروس",
    searchKeywords: "acyclovir valacyclovir آسیکلوویر والاسیکلوویر تبخال هرپس زونا",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (داروی انتخابی برای هرپس)",
    allowedTimingFa: "مجاز در تمام دوران بارداری (سه‌ماهه اول، دوم و سوم)",
    clinicalNotesFa: "داروی انتخابی جهت درمان و پروفیلاکسی عفونت‌های هرپس سیمپلکس (HSV) و واریسلا زوستر در دوران بارداری."
  },
  {
    id: 18,
    nameFa: "اسلتامیویر و زانامیویر",
    nameEn: "Oseltamivir & Zanamivir",
    categoryFa: "ضد ویروس",
    searchKeywords: "oseltamivir zanamivir tamiflu اسلتامیویر زانامیویر تامیفلو آنفولانزا",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (داروی انتخابی برای آنفولانزا)",
    allowedTimingFa: "مجاز در تمام دوران بارداری",
    clinicalNotesFa: "داروی خط اول و انتخابی در درمان و پیشگیری از آنفولانزا در مادران باردار."
  },
  {
    id: 19,
    nameFa: "رژیم زیدووودین + لامی‌وودین + نویراپین + آتازاناویر",
    nameEn: "Zidovudine + Lamivudine + Nevirapine + Atazanavir",
    categoryFa: "ضد ویروس / HIV",
    searchKeywords: "zidovudine lamivudine nevirapine atazanavir زیدوودین لامی وودین نویراپین آتازاناویر ایدز hiv",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (ترکیب انتخابی برای کنترل HIV)",
    allowedTimingFa: "مجاز در تمام دوران بارداری",
    clinicalNotesFa: "رژیم دارویی انتخابی جهت پیشگیری از انتقال HIV از مادر به جنین در طول بارداری."
  },
  {
    id: 20,
    nameFa: "افاویرنز",
    nameEn: "Efavirenz",
    categoryFa: "ضد ویروس / HIV",
    searchKeywords: "efavirenz افاویرنز ایدز hiv",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و غیرمجاز",
    allowedTimingFa: "کاملاً ممنوع به ویژه در سه‌ماهه اول",
    clinicalNotesFa: "خطر نقص لوله عصبی (Neural Tube Defects) در جنین.",
    alternativesFa: "آتازاناویر یا سایر رژیم‌های استاندارد بارداری"
  },
  {
    id: 21,
    nameFa: "ریباویرین و اینترفرون آلفا",
    nameEn: "Ribavirin & Interferon Alfa",
    categoryFa: "ضد ویروس",
    searchKeywords: "ribavirin interferon ریباویرین اینترفرون آلفا هپاتیت",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و به شدت تراتوژن",
    allowedTimingFa: "کاملاً ممنوع در سراسر بارداری",
    clinicalNotesFa: "باعث زایمان زودرس، اثرات تراتوژنیک و سمیت جنینی (امبریوسیدال) بسیار قابل توجه می‌شود."
  },
  {
    id: 22,
    nameFa: "ترکیب دیدانوزین و استاوودین",
    nameEn: "Didanosine + Stavudine",
    categoryFa: "ضد ویروس / HIV",
    searchKeywords: "didanosine stavudine دیدانوزین استاوودین",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع (خطر مرگ مادر و جنین)",
    allowedTimingFa: "کاملاً ممنوع در دوران بارداری",
    clinicalNotesFa: "ایجاد اسیدوز لاکتیک شدید و نارسایی حاد کبدی منجر به مرگ مادر و جنین."
  },

  // --- 5. داروهای ضد درد و مسکن (Analgesics / NSAIDs) ---
  {
    id: 23,
    nameFa: "استامینوفن (پاراستامول)",
    nameEn: "Acetaminophen (Paracetamol)",
    categoryFa: "ضد درد و تب",
    searchKeywords: "acetaminophen paracetamol استامینوفن پاراستامول تب درد سردرد",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (ایمن‌ترین و انتخابی‌ترین مسکن)",
    allowedTimingFa: "مجاز در تمام دوران بارداری (سه‌ماهه اول، دوم و به ویژه سه‌ماهه سوم)",
    clinicalNotesFa: "داروی انتخابی و ایمن‌ترین مسکن و تب‌بر در دوران بارداری. در سه‌ماهه سوم که تمام NSAIDها ممنوع هستند، استامینوفن تنها مسکن غیر اوپیوئیدی مجاز است."
  },
  {
    id: 24,
    nameFa: "NSAID ها (ایبوپروفن، ناپروکسن، دیکلوفناک، مفنامیک اسید)",
    nameEn: "NSAIDs (Ibuprofen, Naproxen, Diclofenac)",
    categoryFa: "ضد التهاب غیر استروئیدی / مسکن",
    searchKeywords: "nsaids ibuprofen naproxen diclofenac ایبوپروفن بروفن ناپروکسن دیکلوفناک مسکن",
    safetyStatus: "conditional",
    statusLabelFa: "فقط در ۳ ماهه اول مجاز | ممنوع در ۳ ماهه دوم و سوم",
    allowedTimingFa: "فقط در ۳ ماهه اول داده شود؛ در ۳ ماهه دوم و سوم کاملاً ممنوع است.",
    clinicalNotesFa: "مصرف در سه‌ماهه دوم و سوم باعث: بسته شدن زودرس مجرای شریانی جنین (PDA)، هایپرتنشن ریوی پایدار جنین، کاهش مایع آمنیوتیک (الیگوهیدرآمنیوس) و مهار انقباضات رحمی و طولانی شدن زایمان می‌شود.",
    alternativesFa: "استامینوفن (مسکن انتخابی بارداری)"
  },
  {
    id: 25,
    nameFa: "مسکن‌های اوپیوئیدی (فنتانیل، کدئین)",
    nameEn: "Opioids (Fentanyl, Codeine)",
    categoryFa: "مسکن اوپیوئیدی",
    searchKeywords: "opioids fentanyl codeine فنتانیل کدئین مخدر مسکن شدید",
    safetyStatus: "conditional",
    statusLabelFa: "مجاز فقط در دردهای متوسط تا شدید",
    allowedTimingFa: "مجاز فقط با تجویز پزشک برای دردهای حاد متوسط تا شدید به مدت کوتاه",
    clinicalNotesFa: "برای دردهای متوسط تا شدید تحت نظر پزشک مصرف شود؛ از مصرف طولانی‌مدت به دلیل سندرم محرومیت نوزادی اجتناب شود."
  },
  {
    id: 26,
    nameFa: "متامیزول (دیپیرون)",
    nameEn: "Metamizole (Dipyrone)",
    categoryFa: "مسکن",
    searchKeywords: "metamizole dipyrone متامیزول دیپیرون نووالژین",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و غیرمجاز",
    allowedTimingFa: "کاملاً ممنوع در تمام دوران بارداری",
    clinicalNotesFa: "در سه‌ماهه اول و دوم: افزایش بروز نفروبلاستوما (تومور ویلمز) در جنین. در سه‌ماهه سوم: باعث بسته شدن زودرس مجرای شریانی می‌شود.",
    alternativesFa: "استامینوفن"
  },

  // --- 6. داروهای ضدقارچ (Antifungals) ---
  {
    id: 27,
    nameFa: "ایمیدازول‌های موضعی (کلوتریمازول، میکونازول)",
    nameEn: "Topical Imidazoles (Clotrimazole, Miconazole)",
    categoryFa: "ضد قارچ موضعی",
    searchKeywords: "clotrimazole miconazole کلوتریمازول میکونازول قارچ کاندیدا",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (داروی انتخابی خط اول موضعی)",
    allowedTimingFa: "مجاز در تمام دوران بارداری",
    clinicalNotesFa: "فرم موضعی ایمیدازول‌ها جذب سیستمیک ناچیزی داشته و در تمام دوران بارداری ایمن و انتخابی است."
  },
  {
    id: 28,
    nameFa: "نیستاتین واژینال",
    nameEn: "Nystatin (Vaginal)",
    categoryFa: "ضد قارچ واژینال",
    searchKeywords: "nystatin نیستاتین واژینال کاندیدیاز واژن عفونت واژینال",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (داروی انتخابی عفونت واژینال)",
    allowedTimingFa: "مجاز در تمام طول بارداری",
    clinicalNotesFa: "داروی انتخابی در کاندیدیاز واژینال در بارداری؛ جذب سیستمیک ندارد و کاملاً بی‌خطر است."
  },
  {
    id: 29,
    nameFa: "آمفوتریسین B",
    nameEn: "Amphotericin B",
    categoryFa: "ضد قارچ سیستمیک",
    searchKeywords: "amphotericin b آمفوتریسین ب قارچ سیستمیک",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (انتخابی در عفونت‌های شدید قارچی سیستمیک)",
    allowedTimingFa: "مجاز در صورت نیاز بالینی و عفونت‌های قارچی تهاجمی",
    clinicalNotesFa: "در صورت بروز عفونت‌های قارچی تهاجمی و سیستمیک شدید در بارداری، داروی انتخابی سیستمیک است."
  },
  {
    id: 30,
    nameFa: "فلوکونازول",
    nameEn: "Fluconazole",
    categoryFa: "ضد قارچ خوراکی",
    searchKeywords: "fluconazole فلوکونازول کپسول قارچ",
    safetyStatus: "conditional",
    statusLabelFa: "دوز بالا (>300mg) ممنوع | دوز پایین با احتیاط پس از سه‌ماهه اول",
    allowedTimingFa: "دوزهای بالای ۳۰۰ میلی‌گرم ممنوع است؛ دوز پایین (مانند ۱۵۰mg تک‌دوز) در شرایط بسیار انتخابی پس از ۳ ماهه اول بی‌خطر تلقی می‌شود.",
    clinicalNotesFa: "دوزهای بالا (بیش از ۳۰۰ میلی‌گرم) تراتوژن است. استفاده از فلوکونازول با دوز پایین فقط در شرایط خاص پس از سه‌ماهه اول مجاز است.",
    alternativesFa: "کلوتریمازول موضعی یا نیستاتین واژینال"
  },
  {
    id: 31,
    nameFa: "کتوکونازول سیستمیک، فلوسیتوزین و گریزوئوفولوین",
    nameEn: "Ketoconazole, Flucytosine, Griseofulvin",
    categoryFa: "ضد قارچ خوراکی",
    searchKeywords: "ketoconazole flucytosine griseofulvin کتوکونازول فلوسیتوزین گریزوئوفولوین",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و تراتوژن",
    allowedTimingFa: "کاملاً ممنوع در سراسر بارداری",
    clinicalNotesFa: "اثرات تراتوژنیک و امبریوتوکسیک به اثبات رسیده است.",
    alternativesFa: "کلوتریمازول، نیستاتین واژینال یا آمفوتریسین B"
  },
  {
    id: 32,
    nameFa: "ایتراکونازول",
    nameEn: "Itraconazole",
    categoryFa: "ضد قارچ خوراکی",
    searchKeywords: "itraconazole ایتراکونازول قارچ",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و اجتناب شود",
    allowedTimingFa: "کاملاً ممنوع در بارداری",
    clinicalNotesFa: "تراتوژن و/یا امبریوتوکسیک در مطالعات حیوانی و انسانی."
  },
  {
    id: 33,
    nameFa: "یدیدها (Iodides)",
    nameEn: "Iodides",
    categoryFa: "ترکیبات یدی",
    searchKeywords: "iodides یدیدها ترکیبات ید گواتر",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع",
    allowedTimingFa: "ممنوع در دوران بارداری",
    clinicalNotesFa: "باعث ایجاد گواتر مادرزادی و کم‌کاری تیروئید در جنین می‌شود."
  },

  // --- 7. آنتی‌بیوتیک‌ها (Antibiotics) ---
  {
    id: 34,
    nameFa: "پنی‌سیلین‌ها (آمپی‌سیلین، آموکسی‌سیلین، فلوکلوگزاسیلین، پنی‌سیلین V)",
    nameEn: "Penicillins (Ampicillin, Amoxicillin, Flucloxacillin, Penicillin V)",
    categoryFa: "آنتی‌بیوتیک",
    searchKeywords: "penicillins ampicillin amoxicillin flucloxacillin penicillin v پنی سیلین آمپی سیلین آموکسی سیلین فلوکلوگزاسیلین",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (پرمصرف‌ترین و ایمن‌ترین آنتی‌بیوتیک در بارداری)",
    allowedTimingFa: "مجاز در تمام دوران بارداری (سه‌ماهه اول، دوم و سوم)",
    clinicalNotesFa: "پرمصرف‌ترین و مطمئن‌ترین نوع آنتی‌بیوتیک در کل دوران بارداری بدون اثرات سوء بر روی جنین."
  },
  {
    id: 35,
    nameFa: "سفالوسپورین‌ها (سفالکسین، سفیکسیم، سفتریاکسون، سفازولین و...)",
    nameEn: "Cephalosporins (Cefalexin, Cefixime, Ceftriaxone, Cefazolin)",
    categoryFa: "آنتی‌بیوتیک",
    searchKeywords: "cephalosporins cefalexin cefixime ceftriaxone cefazolin cefuroxime سفالوسپورین سفالکسین سفیکسیم سفتریاکسون سفازولین سفوروکسیم",
    safetyStatus: "conditional",
    statusLabelFa: "مجاز در ۳ ماهه دوم و سوم (در ۳ ماهه اول خط اول نباشد)",
    allowedTimingFa: "در سه‌ماهه اول نباید خط اول باشد؛ در سه‌ماهه دوم و سوم کاملاً انتخابی و مجاز است.",
    clinicalNotesFa: "در سه‌ماهه اول بارداری نباید به عنوان درمان خط اول در نظر گرفته شوند زیرا در این مرحله به خوبی مورد مطالعه قرار نگرفته‌اند، اما در سه‌ماهه دوم و سوم کاملاً ایمن و انتخابی هستند."
  },
  {
    id: 36,
    nameFa: "ماکرولیدها: اریترومایسین و آزیترومایسین",
    nameEn: "Macrolides: Erythromycin & Azithromycin",
    categoryFa: "آنتی‌بیوتیک",
    searchKeywords: "erythromycin azithromycin macrolides اریترومایسین آزیترومایسین ماکرولید",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (داروی انتخابی به ویژه در حساسیت به پنی‌سیلین)",
    allowedTimingFa: "مجاز در تمام طول بارداری",
    clinicalNotesFa: "اریترومایسین و آزیترومایسین در تمام مراحل بارداری مجاز هستند (توجه: کلاریترومایسین برعکس این دو ممنوع است)."
  },
  {
    id: 37,
    nameFa: "مترونیدازول",
    nameEn: "Metronidazole",
    categoryFa: "آنتی‌بیوتیک / ضد تک یاخته",
    searchKeywords: "metronidazole flagyl مترونیدازول فلاژیل عفونت واژینال",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (با تجویز پزشک)",
    allowedTimingFa: "مجاز در بارداری (در عفونت تریکومونیازیس و واژینوز باکتریال)",
    clinicalNotesFa: "در درمان عفونت‌های بی‌هوازی و واژینوزهای باکتریال در بارداری مجاز است."
  },
  {
    id: 38,
    nameFa: "فسفومایسین",
    nameEn: "Fosfomycin",
    categoryFa: "آنتی‌بیوتیک",
    searchKeywords: "fosfomycin فسفومایسین مونورول عفونت ادراری uti",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز (انتخابی در عفونت‌های ادراری)",
    allowedTimingFa: "مجاز در تمام دوران بارداری",
    clinicalNotesFa: "داروی انتخابی و تک‌دوز مطمئن در درمان عفونت‌های ادراری حاد در دوران بارداری."
  },
  {
    id: 39,
    nameFa: "تتراسایکلین‌ها (تتراسایکلین، داکسی‌سایکلین)",
    nameEn: "Tetracyclines (Tetracycline, Doxycycline)",
    categoryFa: "آنتی‌بیوتیک",
    searchKeywords: "tetracyclines doxycycline تتراسایکلین داکسی سایکلین دندان استخوان",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و غیرمجاز",
    allowedTimingFa: "کاملاً ممنوع در سراسر بارداری",
    clinicalNotesFa: "مهار رشد استخوان‌های جنین، بدشکلی استخوانی و تغییر رنگ دائمی دندان‌های شیری جنین به زرد و قهوه‌ای.",
    alternativesFa: "پنی‌سیلین‌ها، سفالوسپورین‌ها، آزیترومایسین"
  },
  {
    id: 40,
    nameFa: "آمینوگلیکوزیدها (جنتامایسین، آمیکاسین، توبرامایسین)",
    nameEn: "Aminoglycosides (Gentamicin, Amikacin, Tobramycin)",
    categoryFa: "آنتی‌بیوتیک",
    searchKeywords: "aminoglycosides gentamicin amikacin tobramycin جنتامایسین آمیکاسین توبرامایسین گوش شنوایی کلیه",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و اتوتوکسیک",
    allowedTimingFa: "اجتناب در دوران بارداری مگر در عفونت‌های بسیار تهدیدکننده حیات",
    clinicalNotesFa: "اتوتوکسیسیتی جنینی (آسیب به عصب زوج VIII مغزی و کاهش یا از بین رفتن شنوایی جنین) و سمیت کلیوی (نفروتوکسیسیتی)."
  },
  {
    id: 41,
    nameFa: "کوتریموکسازول (تری‌متوپریم / سولفانامید)",
    nameEn: "Co-trimoxazole (Trimethoprim / Sulfamethoxazole)",
    categoryFa: "آنتی‌بیوتیک",
    searchKeywords: "co-trimoxazole trimethoprim sulfamethoxazole کوتریموکسازول سفترن کرن ایکتروس",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و غیرمجاز",
    allowedTimingFa: "ممنوع در بارداری (به ویژه در سه‌ماهه اول و اواخر سه‌ماهه سوم)",
    clinicalNotesFa: "سه‌ماهه اول: تداخل با متابولیسم فولات و نقایص مادرزادی قلبی عروقی و لوله عصبی. اواخر بارداری: زردی نوزادان و خطر ایجاد کرن‌ایکتروس.",
    alternativesFa: "آموکسی‌سیلین، سفیکسیم یا سفالکسین"
  },
  {
    id: 42,
    nameFa: "کلرامفنیکل",
    nameEn: "Chloramphenicol",
    categoryFa: "آنتی‌بیوتیک",
    searchKeywords: "chloramphenicol کلرامفنیکل سندرم خاکستری نوزاد",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و بسیار خطرناک",
    allowedTimingFa: "کاملاً ممنوع در دوران بارداری",
    clinicalNotesFa: "سندرم نوزاد خاکستری (Gray Baby Syndrome) ناشی از تجمع دارو در بدن جنین، رنگ خاکستری پوست، کلاپس قلبی عروقی، سیانوز و اتساع شکم."
  },
  {
    id: 43,
    nameFa: "کلاریترومایسین",
    nameEn: "Clarithromycin",
    categoryFa: "آنتی‌بیوتیک / ماکرولید",
    searchKeywords: "clarithromycin کلاریترومایسین ماکرولید",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع (برخلاف سایر ماکرولیدها)",
    allowedTimingFa: "ممنوع در بارداری",
    clinicalNotesFa: "امبریوتوکسیک و دارای شواهد سمیت جنینی در مقایسه با سایر ماکرولیدها.",
    alternativesFa: "آزیترومایسین یا اریترومایسین"
  },
  {
    id: 44,
    nameFa: "فلوروکینولون‌ها (سیپروفلوکساسین، لوفلوکساسین، افلوکساسین)",
    nameEn: "Fluoroquinolones (Ciprofloxacin, Levofloxacin)",
    categoryFa: "آنتی‌بیوتیک",
    searchKeywords: "fluoroquinolones ciprofloxacin levofloxacin سیپروفلوکساسین لووفلوکساسین غضروف",
    safetyStatus: "forbidden",
    statusLabelFa: "ممنوع و آسیب‌رسان به غضروف",
    allowedTimingFa: "کاملاً ممنوع در بارداری",
    clinicalNotesFa: "آسیب به استخوان‌ها و فرسایش غضروف‌های مفصلی در جنین در حال رشد (آرتروپاتی جنینی)."
  },

  // --- 8. داروهای تیروئید (Thyroid Medications) ---
  {
    id: 45,
    nameFa: "پروپیل‌تیوراسیل (PTU)",
    nameEn: "Propylthiouracil (PTU)",
    categoryFa: "داروهای تیروئید / ضد تیروئید",
    searchKeywords: "propylthiouracil ptu پروپیل تیوراسیل پرکاری تیروئید",
    safetyStatus: "conditional",
    statusLabelFa: "داروی انتخابی در ۳ ماهه اول بارداری",
    allowedTimingFa: "انتخابی فقط در ۳ ماهه اول بارداری (در ۳ ماهه دوم و سوم معمولاً به متی‌مازول تغییر می‌یابد)",
    clinicalNotesFa: "داروی انتخابی ضدتیروئید در ۳ ماهه اول بارداری است و خطر ناهنجاری‌های کرانیوفاشیال متی‌مازول را ندارد. در سه‌ماهه دوم و سوم به دلیل احتمال هپاتوتوکسیسیتی مادر با متی‌مازول جایگزین می‌شود."
  },
  {
    id: 46,
    nameFa: "متی‌مازول",
    nameEn: "Methimazole",
    categoryFa: "داروهای تیروئید / ضد تیروئید",
    searchKeywords: "methimazole carbimazole متی مازول کاربی مازول پرکاری تیروئید",
    safetyStatus: "conditional",
    statusLabelFa: "ممنوع در ۳ ماهه اول | داروی انتخابی در ۳ ماهه دوم و سوم",
    allowedTimingFa: "در ۳ ماهه اول کاملاً ممنوع است؛ در ۳ ماهه دوم و سوم داروی انتخابی است.",
    clinicalNotesFa: "مصرف در سه‌ماهه اول باعث ناهنجاری‌های شدید می‌شود: آپلازی کوتیس (فقدان بخشی از پوست سر در بدو تولد)، ناهنجاری‌های کرانیوفاشیال (آترزی کوآن)، ناهنجاری گوارشی (آترزی مری با یا بدون فیستول نای‌مری). در سه‌ماهه دوم و سوم داروی انتخابی است.",
    alternativesFa: "در سه‌ماهه اول: پروپیل‌تیوراسیل (PTU)"
  },
  {
    id: 47,
    nameFa: "لووتیروکسین",
    nameEn: "Levothyroxine",
    categoryFa: "داروهای تیروئید / کم‌کاری",
    searchKeywords: "levothyroxine لووتیروکسین تیروئید کم کاری لووکسین",
    safetyStatus: "allowed",
    statusLabelFa: "مجاز و ضروری (داروی انتخابی کم‌کاری تیروئید)",
    allowedTimingFa: "مجاز و الزامی در تمام دوران بارداری (سه‌ماهه اول، دوم و سوم)",
    clinicalNotesFa: "برای درمان کم‌کاری تیروئید در بارداری کاملاً ایمن و حیاتی است و به رشد مغزی جنین کمک می‌کند. دوز مصرفی معمولاً در طول بارداری نیاز به افزایش دارد."
  },
  {
    id: 48,
    nameFa: "درمان با ید رادیواکتیو (Radioactive Iodine)",
    nameEn: "Radioactive Iodine (I-131)",
    categoryFa: "تیروئید / رادیودارو",
    searchKeywords: "radioactive iodine ید رادیواکتیو تیروئید رادیواکتیو",
    safetyStatus: "forbidden",
    statusLabelFa: "کاملاً ممنوع و منع مصرف قطعی",
    allowedTimingFa: "ممنوعیت مطلق در بارداری",
    clinicalNotesFa: "تخریب و ابلیشن کامل بافت تیروئید جنین که منجر به کم‌کاری دائمی تیروئید، کرتینیسم و ناهنجاری‌های جنینی می‌شود."
  }
];
