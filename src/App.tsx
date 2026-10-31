import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  X,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Baby,
  HeartHandshake,
  Sun,
  Moon,
} from 'lucide-react';
import { PEDIATRIC_DRUGS, PediatricDrug } from './data/drugs';
import { PREGNANCY_DRUGS, PregnancyDrug } from './data/pregnancyDrugs';

export function App() {
  const [activeTab, setActiveTab] = useState<'pediatric' | 'pregnancy'>('pediatric');
  const [pediatricSearch, setPediatricSearch] = useState('');
  const [pregnancySearch, setPregnancySearch] = useState('');

  // Dark mode state with localStorage persistence and system preference fallback
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  // Pediatric filtered drugs
  const displayedPediatricDrugs = useMemo(() => {
    const q = pediatricSearch.trim().toLowerCase();
    if (!q) {
      // Show only 3 drugs as examples on the initial page
      return PEDIATRIC_DRUGS.slice(0, 3);
    }

    return PEDIATRIC_DRUGS.filter((drug) => {
      return (
        drug.nameEn.toLowerCase().includes(q) ||
        drug.nameFa.toLowerCase().includes(q) ||
        drug.searchKeywords.toLowerCase().includes(q) ||
        drug.indication.toLowerCase().includes(q) ||
        drug.forms.some(
          (f) =>
            f.formEn.toLowerCase().includes(q) ||
            f.formFa.toLowerCase().includes(q)
        )
      );
    });
  }, [pediatricSearch]);

  // Pregnancy filtered drugs
  const displayedPregnancyDrugs = useMemo(() => {
    const q = pregnancySearch.trim().toLowerCase();
    if (!q) {
      // Show 3 representative examples initially: 1 allowed, 1 trimester-dependent, 1 forbidden
      return [
        PREGNANCY_DRUGS.find((d) => d.id === 23)!, // Acetaminophen (مجاز)
        PREGNANCY_DRUGS.find((d) => d.id === 24)!, // NSAIDs (فقط ۳ ماهه اول مجاز)
        PREGNANCY_DRUGS.find((d) => d.id === 46)!, // Methimazole (ممنوع ۳ ماهه اول، مجاز ۳ ماهه ۲ و ۳)
      ].filter(Boolean);
    }

    return PREGNANCY_DRUGS.filter((drug) => {
      return (
        drug.nameEn.toLowerCase().includes(q) ||
        drug.nameFa.toLowerCase().includes(q) ||
        drug.categoryFa.toLowerCase().includes(q) ||
        drug.searchKeywords.toLowerCase().includes(q) ||
        drug.clinicalNotesFa.toLowerCase().includes(q) ||
        drug.allowedTimingFa.toLowerCase().includes(q)
      );
    });
  }, [pregnancySearch]);

  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200"
    >
      {/* Sticky Header with Navigation Tabs, Dark Mode, and Search */}
      <header className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-3">
          {/* Main App Title, Tab Selector & Dark Mode Toggle in Top-Left */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
              راهنمای دارویی اطفال و بارداری
            </h1>

            {/* Left Controls in RTL: Tabs and Dark Mode Switch */}
            <div className="flex items-center justify-between sm:justify-end gap-2">
              {/* Navigation Tabs */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700">
                <button
                  type="button"
                  onClick={() => setActiveTab('pediatric')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-extrabold rounded-lg transition-all ${
                    activeTab === 'pediatric'
                      ? 'bg-white dark:bg-slate-900 text-teal-900 dark:text-teal-300 shadow-xs border border-slate-200/60 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Baby className="w-4 h-4" />
                  <span>داروهای اطفال</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('pregnancy')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-extrabold rounded-lg transition-all ${
                    activeTab === 'pregnancy'
                      ? 'bg-white dark:bg-slate-900 text-teal-900 dark:text-teal-300 shadow-xs border border-slate-200/60 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>داروها در بارداری</span>
                </button>
              </div>

              {/* Dark Mode Toggle Button (Top-Left) */}
              <button
                type="button"
                onClick={toggleDarkMode}
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-xl transition-colors shrink-0"
                aria-label={isDark ? 'تغییر به تم روشن' : 'تغییر به تم دارک'}
                title={isDark ? 'تغییر به تم روشن' : 'تغییر به تم دارک'}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>
            </div>
          </div>

          {/* Search Input for Pediatric Tab */}
          {activeTab === 'pediatric' && (
            <div className="relative">
              <Search
                className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="text"
                value={pediatricSearch}
                onChange={(e) => setPediatricSearch(e.target.value)}
                placeholder="جستجوی نام داروی اطفال به فارسی یا انگلیسی (مثلاً: استامینوفن، لوتیراستام، Amoxicillin)..."
                className="w-full pr-11 pl-10 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-teal-600 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-600/15 transition-colors"
                aria-label="جستجوی نام دارو در اطفال"
              />
              {pediatricSearch && (
                <button
                  type="button"
                  onClick={() => setPediatricSearch('')}
                  className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 absolute left-2.5 top-1/2 -translate-y-1/2 rounded-lg transition-colors"
                  aria-label="پاک کردن جستجو"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

          {/* Search Input for Pregnancy Tab */}
          {activeTab === 'pregnancy' && (
            <div className="relative">
              <Search
                className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="text"
                value={pregnancySearch}
                onChange={(e) => setPregnancySearch(e.target.value)}
                placeholder="جستجوی نام دارو در بارداری (مثلاً: متیل‌دوپا، لابتالول، ایبوپروفن، وارفارین، متی‌مازول)..."
                className="w-full pr-11 pl-10 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-teal-600 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-600/15 transition-colors"
                aria-label="جستجوی نام دارو در بارداری"
              />
              {pregnancySearch && (
                <button
                  type="button"
                  onClick={() => setPregnancySearch('')}
                  className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 absolute left-2.5 top-1/2 -translate-y-1/2 rounded-lg transition-colors"
                  aria-label="پاک کردن جستجو"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6">
        {/* PEDIATRIC TAB CONTENT */}
        {activeTab === 'pediatric' && (
          <div>
            {displayedPediatricDrugs.length === 0 ? (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-10 text-center">
                <p className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">
                  دارویی با عبارت «{pediatricSearch}» یافت نشد.
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  لطفاً املای فارسی یا انگلیسی نام دارو را بررسی کنید.
                </p>
                <button
                  type="button"
                  onClick={() => setPediatricSearch('')}
                  className="px-4 py-2 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors"
                >
                  پاک کردن جستجو
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {displayedPediatricDrugs.map((drug) => (
                  <PediatricDrugCard key={drug.id} drug={drug} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* PREGNANCY TAB CONTENT */}
        {activeTab === 'pregnancy' && (
          <div>
            {displayedPregnancyDrugs.length === 0 ? (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-10 text-center">
                <p className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">
                  دارویی با عبارت «{pregnancySearch}» در راهنمای بارداری یافت نشد.
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  لطفاً نام فارسی یا انگلیسی دارو را بررسی کنید.
                </p>
                <button
                  type="button"
                  onClick={() => setPregnancySearch('')}
                  className="px-4 py-2 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors"
                >
                  پاک کردن جستجو
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {displayedPregnancyDrugs.map((drug) => (
                  <PregnancyDrugCard key={drug.id} drug={drug} />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 mt-12 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p dir="ltr" className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 font-mono-num">
            made by Dr Ashkan Ahmadi
          </p>
        </div>
      </footer>
    </div>
  );
}

// ---------------------- PEDIATRIC DRUG CARD ----------------------

function formatInterval(interval?: string): string {
  if (!interval) return '';
  const trimmed = interval.trim();
  const lower = trimmed.toLowerCase();

  if (lower === 'q4-6hr' || lower === 'q4-6h') return 'هر ۴ تا ۶ ساعت (Q4-6hr)';
  if (lower === 'q6hr' || lower === 'q6h') return 'هر ۶ ساعت (Q6hr)';
  if (lower === 'q8hr' || lower === 'q8h') return 'هر ۸ ساعت (Q8hr)';
  if (lower === 'q12hr' || lower === 'q12h') return 'هر ۱۲ ساعت (Q12hr)';
  if (lower === 'q12-24hr') return 'هر ۱۲ تا ۲۴ ساعت (Q12-24hr)';
  if (lower === 'qid') return 'هر ۶ ساعت / ۴ بار در روز (QID)';
  if (lower === 'tds') return 'هر ۸ ساعت / ۳ بار در روز (TDS)';
  if (lower === 'bid') return 'هر ۱۲ ساعت / ۲ بار در روز (BID)';
  if (lower === 'bid-tds') return 'هر ۸ تا ۱۲ ساعت (BID-TDS)';
  if (lower === 'tds-qid') return 'هر ۶ تا ۸ ساعت (TDS-QID)';
  if (lower === 'daily' || lower === 'qd') return 'هر ۲۴ ساعت / روزی یک‌بار';
  if (lower.startsWith('daily ×') || lower.startsWith('daily x')) return `هر ۲۴ ساعت (${trimmed})`;
  if (lower === 'sd' || lower === 's.d' || lower === 'single dose' || lower.includes('single dose')) return 'تک‌دوز (Single Dose)';
  if (lower.includes('q2min')) return 'هر ۲ دقیقه در صورت نیاز';
  if (lower.includes('q3-5min')) return 'هر ۳ تا ۵ دقیقه';
  if (lower.includes('q5min')) return 'هر ۵ دقیقه در صورت نیاز';
  if (lower.includes('q10min')) return 'هر ۱۰ دقیقه';
  if (lower.includes('q10-15min')) return 'هر ۱۰ تا ۱۵ دقیقه';
  if (lower.includes('q20min')) return 'هر ۲۰ دقیقه';
  if (lower.includes('q2-4hr')) return 'هر ۲ تا ۴ ساعت';
  if (lower.includes('q3-4hr')) return 'هر ۳ تا ۴ ساعت';
  if (lower.includes('infusion')) return 'انفوزیون مداوم وریدی';

  return trimmed;
}

function PediatricDrugCard({ drug }: { drug: PediatricDrug }) {
  const drugIntervalSummary = useMemo(() => {
    const intervals = Array.from(
      new Set(drug.forms.map((f) => f.interval).filter(Boolean))
    ) as string[];
    if (intervals.length === 0) return null;
    return intervals.map((int) => formatInterval(int)).join(' | ');
  }, [drug]);

  return (
    <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-colors shadow-2xs">
      {/* Drug Header */}
      <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
            {drug.nameFa}
          </h2>
          <span
            dir="ltr"
            className="text-sm sm:text-base font-bold text-teal-700 dark:text-teal-400 font-mono-num"
          >
            {drug.nameEn}
          </span>
        </div>
      </div>

      {/* Primary Dose per Kg Section (BOLD as requested) */}
      <div className="px-5 py-3.5 bg-teal-50/50 dark:bg-teal-950/25 border-b border-slate-100 dark:border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <div className="text-xs text-teal-800 dark:text-teal-300 font-medium">
            دوز اطفال به ازای هر کیلوگرم در هر نوبت (mg/kg/dose):
          </div>
          {drugIntervalSummary && (
            <div className="text-xs font-bold text-teal-900 dark:text-teal-300 bg-white/90 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-teal-200/70 dark:border-teal-800/60 shadow-2xs">
              <span className="text-teal-700 dark:text-teal-400 font-normal">فاصله تجویز: </span>
              <span>{drugIntervalSummary}</span>
            </div>
          )}
        </div>
        <div className="space-y-1">
          {drug.primaryDosePerKg.map((line, idx) => (
            <div
              key={idx}
              className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 font-mono-num leading-relaxed"
            >
              <strong className="font-extrabold">{line}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* Available Forms & Form Dosages */}
      <div className="px-5 py-4">
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
          فرم‌های دارویی موجود و دوز هر فرم:
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {drug.forms.map((form, index) => (
            <div
              key={index}
              className="py-3 first:pt-0 last:pb-0 flex flex-col lg:flex-row lg:items-center justify-between gap-3"
            >
              {/* Form Name & Strength */}
              <div className="space-y-0.5 lg:w-5/12">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    dir="ltr"
                    className="text-sm font-bold text-slate-900 dark:text-white font-mono-num"
                  >
                    {form.formEn}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {form.formFa}
                </div>
              </div>

              {/* Form Dose & Per-Kg Dose */}
              <div className="lg:w-7/12 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-50/80 dark:bg-slate-800/60 rounded-lg px-3.5 py-2.5 border border-slate-200/70 dark:border-slate-700">
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-slate-500 dark:text-slate-400">دوز هر کیلوگرم در هر نوبت: </span>
                    <strong
                      dir="ltr"
                      className="font-extrabold text-slate-950 dark:text-white font-mono-num inline-block"
                    >
                      {form.dosePerKg}
                    </strong>
                    {form.interval && (
                      <span className="text-xs font-bold text-teal-800 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-950/70 px-2 py-0.5 rounded border border-teal-200/60 dark:border-teal-800/60">
                        فاصله تجویز: {formatInterval(form.interval)}
                      </span>
                    )}
                  </div>
                  {form.formDose && (
                    <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <span className="text-slate-500 dark:text-slate-400">دوز فرم دارویی: </span>
                      <strong className="font-bold text-teal-900 dark:text-teal-300 font-mono-num">
                        {form.formDose}
                      </strong>
                    </div>
                  )}
                </div>

                {/* Max Dose */}
                {form.maxDose && (
                  <div className="text-xs text-slate-600 dark:text-slate-400 shrink-0">
                    <span className="text-slate-400 dark:text-slate-500">حداکثر: </span>
                    <span
                      dir="ltr"
                      className="font-semibold text-slate-700 dark:text-slate-300 font-mono-num inline-block"
                    >
                      {form.maxDose}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

// ---------------------- PREGNANCY DRUG CARD ----------------------

function PregnancyDrugCard({ drug }: { drug: PregnancyDrug }) {
  const statusConfig = {
    allowed: {
      badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      icon: CheckCircle2,
      timingBg: 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-200/80 dark:border-emerald-800/40',
      timingText: 'text-emerald-950 dark:text-emerald-200',
      label: 'مجاز',
    },
    conditional: {
      badgeBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      icon: AlertTriangle,
      timingBg: 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-200/80 dark:border-amber-800/40',
      timingText: 'text-amber-950 dark:text-amber-200',
      label: 'مجاز با شرایط / در زمان خاص',
    },
    forbidden: {
      badgeBg: 'bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-300 border-rose-200 dark:border-rose-800',
      icon: XCircle,
      timingBg: 'bg-rose-50/70 dark:bg-rose-950/20 border-rose-200/80 dark:border-rose-800/40',
      timingText: 'text-rose-950 dark:text-rose-200',
      label: 'ممنوع و غیرمجاز',
    },
  }[drug.safetyStatus];

  const StatusIcon = statusConfig.icon;

  return (
    <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xs transition-colors">
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
            {drug.nameFa}
          </h2>
          <span
            dir="ltr"
            className="text-sm sm:text-base font-bold text-teal-700 dark:text-teal-400 font-mono-num"
          >
            {drug.nameEn}
          </span>
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
            ({drug.categoryFa})
          </span>
        </div>

        {/* Safety Status Badge */}
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-extrabold shrink-0 ${statusConfig.badgeBg}`}
        >
          <StatusIcon className="w-4 h-4 shrink-0" />
          <span>{drug.statusLabelFa}</span>
        </div>
      </div>

      {/* Allowed Timing Section (Bold and highlighted) */}
      <div className={`px-5 py-3.5 border-b border-slate-100 dark:border-slate-800 ${statusConfig.timingBg}`}>
        <div className="text-xs text-slate-600 dark:text-slate-400 mb-1 font-medium">
          زمان مجاز بودن در دوران بارداری:
        </div>
        <div className={`text-sm sm:text-base font-extrabold ${statusConfig.timingText} leading-relaxed`}>
          <strong>{drug.allowedTimingFa}</strong>
        </div>
      </div>

      {/* Clinical Notes & Adverse Effects */}
      <div className="px-5 py-4 space-y-2.5">
        <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
          <span className="text-slate-500 dark:text-slate-400 font-medium">نکات بالینی و عوارض: </span>
          <span className="font-normal">{drug.clinicalNotesFa}</span>
        </div>

        {drug.alternativesFa && (
          <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 rounded-lg p-3 border border-slate-200/70 dark:border-slate-700">
            <span className="text-teal-800 dark:text-teal-300 font-bold">داروی جایگزین مجاز: </span>
            <span className="font-medium text-slate-900 dark:text-white">{drug.alternativesFa}</span>
          </div>
        )}
      </div>
    </article>
  );
}

export default App;
