'use client'

import { useState, useEffect } from 'react';
import { 
  gregorianToHijri, 
  hijriToGregorian, 
  formatHijriDate, 
  formatGregorianDate,
  getTodayDates,
  getHijriMonths,
  isValidHijriDate,
  type HijriDate,
  type GregorianDate
} from '@/lib/hijriConverter';

type ConversionMode = 'toHijri' | 'toGregorian';

// Inline SVG icons to avoid lucide-react bundle
const ArrowsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>
  </svg>
);

const SparklesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
);

const DateConverter = () => {
  const [mode, setMode] = useState<ConversionMode>('toHijri');
  const [gregorianInput, setGregorianInput] = useState('');
  const [hijriDay, setHijriDay] = useState('');
  const [hijriMonth, setHijriMonth] = useState('');
  const [hijriYear, setHijriYear] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [resultDetails, setResultDetails] = useState<HijriDate | GregorianDate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);

  const hijriMonths = getHijriMonths();

  // Set default date to today
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setGregorianInput(formattedDate);
    
    const { hijri } = getTodayDates();
    setHijriDay(hijri.day.toString());
    setHijriMonth(hijri.month.toString());
    setHijriYear(hijri.year.toString());
  }, []);

  const handleConvert = () => {
    setError(null);
    setIsConverting(true);

    // Use requestAnimationFrame for smoother UX instead of setTimeout
    requestAnimationFrame(() => {
      try {
        if (mode === 'toHijri') {
          if (!gregorianInput) {
            setError('يرجى اختيار تاريخ ميلادي');
            setResult(null);
            setResultDetails(null);
            setIsConverting(false);
            return;
          }

          const [year, month, day] = gregorianInput.split('-').map(Number);
          const hijri = gregorianToHijri(year, month, day);
          setResult(formatHijriDate(hijri));
          setResultDetails(hijri);
        } else {
          const day = parseInt(hijriDay);
          const month = parseInt(hijriMonth);
          const year = parseInt(hijriYear);

          if (!day || !month || !year) {
            setError('يرجى إدخال جميع حقول التاريخ الهجري');
            setResult(null);
            setResultDetails(null);
            setIsConverting(false);
            return;
          }

          if (!isValidHijriDate(year, month, day)) {
            setError('التاريخ الهجري غير صحيح');
            setResult(null);
            setResultDetails(null);
            setIsConverting(false);
            return;
          }

          const gregorian = hijriToGregorian(year, month, day);
          setResult(formatGregorianDate(gregorian));
          setResultDetails(gregorian);
        }
      } catch {
        setError('حدث خطأ في التحويل. يرجى التحقق من التاريخ المدخل.');
        setResult(null);
        setResultDetails(null);
      }
      setIsConverting(false);
    });
  };

  const toggleMode = () => {
    setMode(mode === 'toHijri' ? 'toGregorian' : 'toHijri');
    setResult(null);
    setResultDetails(null);
    setError(null);
  };

  const { hijri: todayHijri, gregorian: todayGregorian } = getTodayDates();

  // Button base styles - inline to avoid dependency
  const btnBase = "min-w-[120px] min-h-[48px] px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-200";
  const btnActive = "bg-primary text-primary-foreground shadow-card";
  const btnInactive = "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground";

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Today's Date Display */}
      <div className="mb-8 p-5 rounded-xl bg-secondary/50 border border-border/50 text-center">
        <h2 className="text-sm font-medium text-muted-foreground mb-2">تاريخ اليوم هجري وميلادي</h2>
        <p className="text-xl font-bold text-foreground">
          {formatHijriDate(todayHijri)}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          التاريخ الميلادي: {formatGregorianDate(todayGregorian)}
        </p>
        <p className="text-xs text-primary mt-2">
          التقويم الهجري {todayHijri.year} | شهر {todayHijri.month} هجري
        </p>
      </div>

      {/* Mode Toggle */}
      <nav className="flex items-center justify-center gap-3 md:gap-4 mb-8" aria-label="اختيار نوع التحويل">
        <button
          onClick={() => setMode('toHijri')}
          className={`${btnBase} ${mode === 'toHijri' ? btnActive : btnInactive}`}
          aria-pressed={mode === 'toHijri'}
        >
          ميلادي ← هجري
        </button>
        <button
          onClick={toggleMode}
          className="min-w-[48px] min-h-[48px] p-3 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
          aria-label="تبديل اتجاه التحويل"
        >
          <ArrowsIcon />
        </button>
        <button
          onClick={() => setMode('toGregorian')}
          className={`${btnBase} ${mode === 'toGregorian' ? btnActive : btnInactive}`}
          aria-pressed={mode === 'toGregorian'}
        >
          هجري ← ميلادي
        </button>
      </nav>

      {/* Input Section */}
      <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/30">
        {mode === 'toHijri' ? (
          <div className="space-y-4">
            <label htmlFor="gregorian-date" className="block text-lg font-medium text-foreground mb-2">
              <span className="inline-block w-5 h-5 ml-2 text-primary" aria-hidden="true">📅</span>
              التاريخ الميلادي
            </label>
            <input
              type="date"
              id="gregorian-date"
              value={gregorianInput}
              onChange={(e) => setGregorianInput(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-background border-2 border-input text-foreground text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
              dir="ltr"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <label className="block text-lg font-medium text-foreground mb-2">
              <span className="inline-block w-5 h-5 ml-2 text-primary" aria-hidden="true">🌙</span>
              التاريخ الهجري
            </label>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="hijri-day" className="block text-sm text-muted-foreground mb-1">
                  اليوم
                </label>
                <input
                  type="number"
                  id="hijri-day"
                  min="1"
                  max="30"
                  value={hijriDay}
                  onChange={(e) => setHijriDay(e.target.value)}
                  placeholder="١"
                  className="w-full px-4 py-3 rounded-xl bg-background border-2 border-input text-foreground text-center text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="hijri-month" className="block text-sm text-muted-foreground mb-1">
                  الشهر
                </label>
                <select
                  id="hijri-month"
                  value={hijriMonth}
                  onChange={(e) => setHijriMonth(e.target.value)}
                  className="w-full px-3 py-3 rounded-xl bg-background border-2 border-input text-foreground text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 cursor-pointer"
                >
                  <option value="">اختر</option>
                  {hijriMonths.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="hijri-year" className="block text-sm text-muted-foreground mb-1">
                  السنة
                </label>
                <input
                  type="number"
                  id="hijri-year"
                  min="1"
                  max="1500"
                  value={hijriYear}
                  onChange={(e) => setHijriYear(e.target.value)}
                  placeholder="١٤٤٦"
                  className="w-full px-4 py-3 rounded-xl bg-background border-2 border-input text-foreground text-center text-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                />
              </div>
            </div>
          </div>
        )}

        {/* Convert Button - Inline styles to avoid Button component */}
        <button
          onClick={handleConvert}
          disabled={isConverting}
          className="w-full mt-6 min-h-[56px] px-8 py-4 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-busy={isConverting}
        >
          {isConverting ? (
            <span>جارٍ التحويل...</span>
          ) : (
            <>
              <SparklesIcon />
              تحويل
            </>
          )}
        </button>

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-center animate-fade-in">
            {error}
          </div>
        )}

        {/* Result Display */}
        {result && !error && (
          <div className="mt-6 p-6 rounded-xl bg-primary/5 border-2 border-primary/20 text-center animate-fade-in">
            <p className="text-sm text-muted-foreground mb-2">
              {mode === 'toHijri' ? 'التاريخ الهجري' : 'التاريخ الميلادي'}
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              {result}
            </p>
            {resultDetails && (
              <div className="mt-4 pt-4 border-t border-border/30">
                <div className="flex justify-center gap-6 text-sm text-muted-foreground">
                  <span>اليوم: {resultDetails.day}</span>
                  <span>الشهر: {resultDetails.month}</span>
                  <span>السنة: {resultDetails.year}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DateConverter;
