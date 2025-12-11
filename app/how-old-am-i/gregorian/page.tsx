'use client'

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { gregorianToHijri, getTodayDates, GREGORIAN_MONTHS } from '@/lib/hijriConverter';
import { generateAgeCalculatorGregorianSEO, FAQ_DATA } from '@/lib/seoData';
import { SEOHead, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema } from '@/components/SEOHead';
import { FAQSection } from '@/components/FAQSection';
import { InternalLinks } from '@/components/InternalLinks';
import { ContentCluster } from '@/components/ContentCluster';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

interface AgeResult {
  gregorianYears: number;
  gregorianMonths: number;
  gregorianDays: number;
  hijriYears: number;
  hijriMonths: number;
  hijriDays: number;
  totalDays: number;
}

export default function AgeCalculatorGregorian() {
  const seo = generateAgeCalculatorGregorianSEO();
  const { hijri: todayHijri, gregorian: todayGregorian } = getTodayDates();
  
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1990);
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const schema = useMemo(() => [{
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(seo),
      generateBreadcrumbSchema([
        { name: 'الرئيسية', url: '/' },
        { name: 'حساب العمر بالميلادي', url: '/how-old-am-i/gregorian' }
      ]),
      generateFAQSchema(FAQ_DATA.ageCalculator),
      generateHowToSchema('حساب العمر بالتاريخ الميلادي', [
        'أدخل يوم ميلادك الميلادي',
        'اختر شهر ميلادك الميلادي',
        'أدخل سنة ميلادك الميلادية',
        'اضغط على "احسب عمري"',
        'ستظهر لك نتيجة عمرك بالميلادي والهجري'
      ])
    ]
  }], [seo]);
  
  const getDaysInMonth = (m: number, y: number) => {
    return new Date(y, m, 0).getDate();
  };
  
  const calculateAge = () => {
    setError(null);
    
    const daysInMonth = getDaysInMonth(month, year);
    if (day > daysInMonth) {
      setError(`الشهر ${GREGORIAN_MONTHS[month - 1]} يحتوي على ${daysInMonth} يوم فقط`);
      setResult(null);
      return;
    }
    
    // Check if birthdate is in the future
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    if (birthDate > today) {
      setError('تاريخ الميلاد لا يمكن أن يكون في المستقبل');
      setResult(null);
      return;
    }
    
    // Calculate Gregorian age
    let gregorianYears = todayGregorian.year - year;
    let gregorianMonths = todayGregorian.month - month;
    let gregorianDays = todayGregorian.day - day;
    
    if (gregorianDays < 0) {
      gregorianMonths--;
      gregorianDays += getDaysInMonth(todayGregorian.month - 1 || 12, todayGregorian.year);
    }
    if (gregorianMonths < 0) {
      gregorianYears--;
      gregorianMonths += 12;
    }
    
    // Convert birth to Hijri
    const birthHijri = gregorianToHijri(year, month, day);
    let hijriYears = todayHijri.year - birthHijri.year;
    let hijriMonths = todayHijri.month - birthHijri.month;
    let hijriDays = todayHijri.day - birthHijri.day;
    
    if (hijriDays < 0) {
      hijriMonths--;
      hijriDays += 30;
    }
    if (hijriMonths < 0) {
      hijriYears--;
      hijriMonths += 12;
    }
    
    // Calculate total days
    const totalDays = Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
    
    setResult({
      gregorianYears,
      gregorianMonths,
      gregorianDays,
      hijriYears,
      hijriMonths,
      hijriDays,
      totalDays
    });
  };
  
  // Generate year options
  const yearOptions = [];
  for (let y = todayGregorian.year; y >= 1920; y--) {
    yearOptions.push(y);
  }
  
  return (
    <PageLayout>
      <SEOHead seo={seo} schema={schema} />
      
      <header className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">الرئيسية</Link>
            <span>/</span>
            <span className="text-foreground">حساب العمر بالميلادي</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{seo.h1}</h1>
          <p className="text-muted-foreground mt-2">{seo.intro}</p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        {/* Age Calculator Form */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">أدخل تاريخ ميلادك الميلادي</h2>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">اليوم</label>
              <select 
                value={day}
                onChange={(e) => setDay(parseInt(e.target.value))}
                className="w-full p-3 bg-background border border-border rounded-lg"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
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
                {GREGORIAN_MONTHS.map((name, index) => (
                  <option key={index} value={index + 1}>{name}</option>
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
                {yearOptions.map(y => (
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
                <div className="text-sm text-muted-foreground mb-1">عمرك بالميلادي</div>
                <div className="text-2xl font-bold text-primary">
                  {result.gregorianYears} سنة و {result.gregorianMonths} شهر و {result.gregorianDays} يوم
                </div>
              </div>
              
              <div className="p-4 bg-secondary rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">عمرك بالهجري</div>
                <div className="text-xl font-bold text-foreground">
                  {result.hijriYears} سنة و {result.hijriMonths} شهر و {result.hijriDays} يوم
                </div>
              </div>
              
              <div className="p-4 bg-secondary/50 rounded-lg text-center">
                <div className="text-sm text-muted-foreground">إجمالي الأيام</div>
                <div className="text-lg font-medium text-foreground">{result.totalDays.toLocaleString('ar-EG')} يوم</div>
              </div>
            </div>
          )}
        </div>
        
        {/* Link to Hijri Calculator */}
        <div className="bg-secondary/50 rounded-xl p-6 text-center mb-8">
          <p className="text-foreground mb-4">هل تعرف تاريخ ميلادك الهجري؟</p>
          <Link href="/how-old-am-i/hijri"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            حساب العمر بالهجري
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
