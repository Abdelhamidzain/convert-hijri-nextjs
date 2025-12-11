'use client'

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { hijriToGregorian, formatGregorianDate, getHijriMonths, isValidHijriDate } from '@/lib/hijriConverter';
import { generateHijriToGregorianSEO, FAQ_DATA, HIJRI_YEAR_RANGE } from '@/lib/seoData';
import { SEOHead, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema } from '@/components/SEOHead';
import { FAQSection } from '@/components/FAQSection';
import { InternalLinks } from '@/components/InternalLinks';
import { ContentCluster } from '@/components/ContentCluster';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

export default function HijriToGregorianYear() {
  const { year } = useParams<{ year: string }>();
  const hijriYear = parseInt(year || '0', 10);
  
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Validate year range
  if (isNaN(hijriYear) || hijriYear < HIJRI_YEAR_RANGE.start || hijriYear > HIJRI_YEAR_RANGE.end) {
    return <Navigate to="/date/today" replace />;
  }
  
  const seo = generateHijriToGregorianSEO(hijriYear);
  const hijriMonths = getHijriMonths();
  
  const schema = useMemo(() => [{
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(seo),
      generateBreadcrumbSchema([
        { name: 'الرئيسية', url: '/' },
        { name: 'تحويل هجري لميلادي', url: `/convert/hijri-to-gregorian/${hijriYear}` }
      ]),
      generateFAQSchema(FAQ_DATA.general.slice(0, 3)),
      generateHowToSchema(`تحويل تاريخ من سنة ${hijriYear} هجري إلى ميلادي`, [
        `اختر اليوم من 1 إلى 30`,
        `اختر الشهر الهجري من القائمة`,
        `اضغط على زر "تحويل التاريخ"`,
        `سيظهر لك التاريخ الميلادي المقابل`
      ])
    ]
  }], [seo, hijriYear]);
  
  const handleConvert = () => {
    setError(null);
    
    if (!isValidHijriDate(hijriYear, month, day)) {
      setError('التاريخ المدخل غير صحيح');
      setResult(null);
      return;
    }
    
    const gregorian = hijriToGregorian(hijriYear, month, day);
    setResult(formatGregorianDate(gregorian));
  };
  
  return (
    <PageLayout>
      <SEOHead seo={seo} schema={schema} />
      
      <header className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">الرئيسية</Link>
            <span>/</span>
            <span className="text-foreground">تحويل {hijriYear} هجري</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{seo.h1}</h1>
          <p className="text-muted-foreground mt-2">{seo.intro}</p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        {/* Conversion Form */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">أدخل التاريخ الهجري</h2>
          
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
              <input 
                type="text"
                value={`${hijriYear} هـ`}
                disabled
                className="w-full p-3 bg-secondary border border-border rounded-lg text-muted-foreground"
              />
            </div>
          </div>
          
          <Button onClick={handleConvert} className="w-full">
            تحويل التاريخ
          </Button>
          
          {error && (
            <div className="mt-4 p-4 bg-destructive/10 text-destructive rounded-lg">
              {error}
            </div>
          )}
          
          {result && (
            <div className="mt-4 p-4 bg-primary/10 rounded-lg text-center">
              <div className="text-sm text-muted-foreground mb-1">التاريخ الميلادي</div>
              <div className="text-2xl font-bold text-primary">{result}</div>
            </div>
          )}
        </div>
        
        {/* Year Navigation */}
        <div className="flex items-center justify-between mb-8">
          {hijriYear > HIJRI_YEAR_RANGE.start && (
            <Link href={`/convert/hijri-to-gregorian/${hijriYear - 1}`}
              className="px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              تحويل {hijriYear - 1} هجري
            </Link>
          )}
          {hijriYear < HIJRI_YEAR_RANGE.end && (
            <Link href={`/convert/hijri-to-gregorian/${hijriYear + 1}`}
              className="px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              تحويل {hijriYear + 1} هجري
            </Link>
          )}
        </div>
        
        {/* Related Link */}
        <div className="bg-secondary/50 rounded-xl p-6 text-center mb-8">
          <p className="text-foreground mb-4">عرض التقويم الكامل لسنة {hijriYear} هجري</p>
          <Link href={`/calendar/${hijriYear}`}
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            التقويم الهجري {hijriYear}
          </Link>
        </div>
        
        {/* Content */}
        <ContentCluster type="conversion-explanation" />
        <ContentCluster type="astronomical-calculation" />
        
        {/* FAQ */}
        <FAQSection faqs={FAQ_DATA.general.slice(0, 4)} />
        
        {/* Internal Links */}
        <InternalLinks type="hijri-convert" currentYear={hijriYear} />
      </div>
    </PageLayout>
  );
}
