'use client'

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { gregorianToHijri, hijriToGregorian, getTodayDates, getHijriMonths, getHijriYears, isValidHijriDate } from '@/lib/hijriConverter';
import { generateAgeCalculatorHijriSEO, FAQ_DATA } from '@/lib/seoData';
import { SEOHead, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema } from '@/components/SEOHead';
import { FAQSection } from '@/components/FAQSection';
import { InternalLinks } from '@/components/InternalLinks';
import { ContentCluster } from '@/components/ContentCluster';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

interface AgeResult {
  hijriYears: number;
  hijriMonths: number;
  hijriDays: number;
  gregorianYears: number;
  gregorianMonths: number;
  gregorianDays: number;
  totalDays: number;
}

export default function AgeCalculatorHijri() {
  const seo = generateAgeCalculatorHijriSEO();
  const { hijri: todayHijri, gregorian: todayGregorian } = getTodayDates();
  const hijriMonths = getHijriMonths();
  const hijriYears = getHijriYears();
  
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(hijriYears[25]); // Middle of range
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const schema = useMemo(() => [{
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(seo),
      generateBreadcrumbSchema([
        { name: 'الرئيسية', url: '/' },
        { name: 'حساب العمر بالهجري', url: '/how-old-am-i/hijri' }
      ]),
      generateFAQSchema(FAQ_DATA.ageCalculator),
      generateHowToSchema('حساب العمر بالتاريخ الهجري', [
        'أدخل يوم ميلادك الهجري',
        'اختر شهر ميلادك الهجري',
        'اختر سنة ميلادك الهجرية',
        'اضغط على "احسب عمري"',
        'ستظهر لك نتيجة عمرك بالهجري والميلادي'
      ])
    ]
  }], [seo]);
  
  const calculateAge = () => {
    setError(null);
    
    if (!isValidHijriDate(year, month, day)) {
      setError('التاريخ المدخل غير صحيح');
      setResult(null);
      return;
    }
    
    // Check if birthdate is in the future
    if (year > todayHijri.year || 
        (year === todayHijri.year && month > todayHijri.month) ||
        (year === todayHijri.year && month === todayHijri.month && day > todayHijri.day)) {
      setError('تاريخ الميلاد لا يمكن أن يكون في المستقبل');
      setResult(null);
      return;
    }
    
    // Calculate Hijri age
    let hijriYears = todayHijri.year - year;
    let hijriMonths = todayHijri.month - month;
    let hijriDays = todayHijri.day - day;
    
    if (hijriDays < 0) {
      hijriMonths--;
      hijriDays += 30; // Approximate
    }
    if (hijriMonths < 0) {
      hijriYears--;
      hijriMonths += 12;
    }
    
    // Convert to Gregorian for comparison
    const birthGregorian = hijriToGregorian(year, month, day);
    let gregorianYears = todayGregorian.year - birthGregorian.year;
    let gregorianMonths = todayGregorian.month - birthGregorian.month;
    let gregorianDays = todayGregorian.day - birthGregorian.day;
    
    if (gregorianDays < 0) {
      gregorianMonths--;
      gregorianDays += 30; // Approximate
    }
    if (gregorianMonths < 0) {
      gregorianYears--;
      gregorianMonths += 12;
    }
    
    // Calculate total days
    const birthJD = Math.floor((11 * year + 3) / 30) + 354 * year + 30 * month - Math.floor((month - 1) / 2) + day + 1948440 - 385;
    const todayJD = Math.floor((11 * todayHijri.year + 3) / 30) + 354 * todayHijri.year + 30 * todayHijri.month - Math.floor((todayHijri.month - 1) / 2) + todayHijri.day + 1948440 - 385;
    const totalDays = todayJD - birthJD;
    
    setResult({
      hijriYears,
      hijriMonths,
      hijriDays,
      gregorianYears,
      gregorianMonths,
      gregorianDays,
      totalDays
    });
  };
  
  return (
    <PageLayout>
      <SEOHead seo={seo} schema={schema} />
      
      <header className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">الرئيسية</Link>
            <span>/</span>
            <span className="text-foreground">حساب العمر بالهجري</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{seo.h1}</h1>
          <p className="text-muted-foreground mt-2">{seo.intro}</p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        {/* Age Calculator Form */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">أدخل تاريخ ميلادك الهجري</h2>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">اليوم</label>
              <select 
                value={day}
                onChange={(e) => setDay(parseInt(e.target.value))}
                className="w-full p-3 bg-background border border-border rounded-lg"
              >
                {Array.from({ length: 30 }, (_, i) => i + 1).map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-muted-foreground mb-2">الشهر</label>
              <select 
                value={month}
                onChange={(e) => setMonth(parseInt(e.target.value))}
                className="w-full p-3 bg-background border border-border rounded-lg"
              >
                {hijriMonths.map(m => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-muted-foreground mb-2">السنة</label>
              <select 
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                className="w-full p-3 bg-background border border-border rounded-lg"
              >
                {hijriYears.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>
          
          <Button onClick={calculateAge} className="w-full">
            احسب عمري
          </Button>
          
          {error && (
            <div className="mt-4 p-4 bg-destructive/10 text-destructive rounded-lg">
              {error}
            </div>
          )}
          
          {result && (
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">عمرك بالهجري</div>
                <div className="text-2xl font-bold text-primary">
                  {result.hijriYears} سنة و {result.hijriMonths} شهر و {result.hijriDays} يوم
                </div>
              </div>
              
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">عمرك بالميلادي</div>
                <div className="text-xl font-bold text-foreground">
                  {result.gregorianYears} سنة و {result.gregorianMonths} شهر و {result.gregorianDays} يوم
                </div>
              </div>
              
              <div className="p-4 bg-secondary/50 rounded-lg text-center">
                <div className="text-sm text-muted-foreground">إجمالي الأيام</div>
                <div className="text-lg font-medium text-foreground">{result.totalDays.toLocaleString('ar-EG')} يوم</div>
              </div>
            </div>
          )}
        </div>
        
        {/* Link to Gregorian Calculator */}
        <div className="bg-secondary/50 rounded-xl p-6 text-center mb-8">
          <p className="text-foreground mb-4">هل تريد حساب عمرك من تاريخ ميلادك الميلادي؟</p>
          <Link href="/how-old-am-i/gregorian"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            حساب العمر بالميلادي
          </Link>
        </div>
        
        {/* Content */}
        <ContentCluster type="age-calculation" />
        <ContentCluster type="hijri-gregorian-difference" />
        
        {/* FAQ */}
        <FAQSection faqs={FAQ_DATA.ageCalculator} />
        
        {/* Internal Links */}
        <InternalLinks type="all" />
      </div>
    </PageLayout>
  );
}
