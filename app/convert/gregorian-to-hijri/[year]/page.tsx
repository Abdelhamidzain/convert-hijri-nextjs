'use client'

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { gregorianToHijri, formatHijriDate, GREGORIAN_MONTHS } from '@/lib/hijriConverter';
import { generateGregorianToHijriSEO, FAQ_DATA, GREGORIAN_YEAR_RANGE } from '@/lib/seoData';
import { SEOHead, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema } from '@/components/SEOHead';
import { FAQSection } from '@/components/FAQSection';
import { InternalLinks } from '@/components/InternalLinks';
import { ContentCluster } from '@/components/ContentCluster';
import { PageLayout } from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

export default function GregorianToHijriYear() {
  const { year } = useParams<{ year: string }>();
  const gregorianYear = parseInt(year || '0', 10);
  
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Validate year range
  if (isNaN(gregorianYear) || gregorianYear < GREGORIAN_YEAR_RANGE.start || gregorianYear > GREGORIAN_YEAR_RANGE.end) {
    return <Navigate to="/date/today" replace />;
  }
  
  const seo = generateGregorianToHijriSEO(gregorianYear);
  
  const schema = useMemo(() => [{
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(seo),
      generateBreadcrumbSchema([
        { name: 'الرئيسية', url: '/' },
        { name: 'تحويل ميلادي لهجري', url: `/convert/gregorian-to-hijri/${gregorianYear}` }
      ]),
      generateFAQSchema(FAQ_DATA.general.slice(0, 3)),
      generateHowToSchema(`تحويل تاريخ من سنة ${gregorianYear} ميلادي إلى هجري`, [
        `اختر اليوم من 1 إلى 31`,
        `اختر الشهر الميلادي من القائمة`,
        `اضغط على زر "تحويل التاريخ"`,
        `سيظهر لك التاريخ الهجري المقابل`
      ])
    ]
  }], [seo, gregorianYear]);
  
  const getDaysInMonth = (m: number, y: number) => {
    return new Date(y, m, 0).getDate();
  };
  
  const handleConvert = () => {
    setError(null);
    
    const daysInMonth = getDaysInMonth(month, gregorianYear);
    if (day > daysInMonth) {
      setError(`الشهر ${GREGORIAN_MONTHS[month - 1]} يحتوي على ${daysInMonth} يوم فقط`);
      setResult(null);
      return;
    }
    
    const hijri = gregorianToHijri(gregorianYear, month, day);
    setResult(formatHijriDate(hijri));
  };
  
  return (
    <PageLayout>
      <SEOHead seo={seo} schema={schema} />
      
      <header className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">الرئيسية</Link>
            <span>/</span>
            <span className="text-foreground">تحويل {gregorianYear} ميلادي</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{seo.h1}</h1>
          <p className="text-muted-foreground mt-2">{seo.intro}</p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        {/* Conversion Form */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">أدخل التاريخ الميلادي</h2>
          
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
              <input 
                type="text"
                value={`${gregorianYear} م`}
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
              <div className="text-sm text-muted-foreground mb-1">التاريخ الهجري</div>
              <div className="text-2xl font-bold text-primary">{result}</div>
            </div>
          )}
        </div>
        
        {/* Year Navigation */}
        <div className="flex items-center justify-between mb-8">
          {gregorianYear > GREGORIAN_YEAR_RANGE.start && (
            <Link href={`/convert/gregorian-to-hijri/${gregorianYear - 1}`}
              className="px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              تحويل {gregorianYear - 1} ميلادي
            </Link>
          )}
          {gregorianYear < GREGORIAN_YEAR_RANGE.end && (
            <Link href={`/convert/gregorian-to-hijri/${gregorianYear + 1}`}
              className="px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              تحويل {gregorianYear + 1} ميلادي
            </Link>
          )}
        </div>
        
        {/* Content */}
        <ContentCluster type="conversion-explanation" />
        <ContentCluster type="hijri-gregorian-difference" />
        
        {/* FAQ */}
        <FAQSection faqs={FAQ_DATA.general.slice(0, 4)} />
        
        {/* Internal Links */}
        <InternalLinks type="gregorian-convert" currentYear={gregorianYear} />
      </div>
    </PageLayout>
  );
}
