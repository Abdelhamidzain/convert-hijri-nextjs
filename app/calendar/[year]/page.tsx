'use client'

import { useMemo } from 'react';
import Link from 'next/link';
import { hijriToGregorian, HIJRI_MONTHS } from '@/lib/hijriConverter';
import { generateCalendarYearSEO, FAQ_DATA, HIJRI_YEAR_RANGE } from '@/lib/seoData';
import { SEOHead, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/components/SEOHead';
import { FAQSection } from '@/components/FAQSection';
import { InternalLinks } from '@/components/InternalLinks';
import { ContentCluster } from '@/components/ContentCluster';
import { PageLayout } from '@/components/PageLayout';

export default function CalendarYear() {
  const { year } = useParams<{ year: string }>();
  const hijriYear = parseInt(year || '0', 10);
  
  // Validate year range
  if (isNaN(hijriYear) || hijriYear < HIJRI_YEAR_RANGE.start || hijriYear > HIJRI_YEAR_RANGE.end) {
    return <Navigate to="/date/today" replace />;
  }
  
  const seo = generateCalendarYearSEO(hijriYear);
  
  const schema = useMemo(() => [{
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(seo),
      generateBreadcrumbSchema([
        { name: 'الرئيسية', url: '/' },
        { name: 'التقويم الهجري', url: `/calendar/${hijriYear}` }
      ]),
      generateFAQSchema(FAQ_DATA.calendar)
    ]
  }], [seo, hijriYear]);
  
  // Generate calendar data
  const calendarData = useMemo(() => {
    return HIJRI_MONTHS.map((monthName, monthIndex) => {
      const month = monthIndex + 1;
      const firstDay = hijriToGregorian(hijriYear, month, 1);
      const lastDay = hijriToGregorian(hijriYear, month, month % 2 === 1 ? 30 : 29);
      
      return {
        month,
        monthName,
        firstDayGregorian: `${firstDay.day} ${firstDay.monthName} ${firstDay.year}`,
        lastDayGregorian: `${lastDay.day} ${lastDay.monthName} ${lastDay.year}`,
        daysCount: month % 2 === 1 ? 30 : 29
      };
    });
  }, [hijriYear]);
  
  return (
    <PageLayout>
      <SEOHead seo={seo} schema={schema} />
      
      <header className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">الرئيسية</Link>
            <span>/</span>
            <span className="text-foreground">التقويم {hijriYear}</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{seo.h1}</h1>
          <p className="text-muted-foreground mt-2">{seo.intro}</p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        {/* Year Navigation */}
        <div className="flex items-center justify-between mb-6">
          {hijriYear > HIJRI_YEAR_RANGE.start && (
            <Link href={`/calendar/${hijriYear - 1}`}
              className="px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              ← {hijriYear - 1}
            </Link>
          )}
          <span className="text-xl font-bold text-primary">{hijriYear} هـ</span>
          {hijriYear < HIJRI_YEAR_RANGE.end && (
            <Link href={`/calendar/${hijriYear + 1}`}
              className="px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              {hijriYear + 1} →
            </Link>
          )}
        </div>
        
        {/* Calendar Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary/10">
                <tr>
                  <th className="p-3 text-right text-foreground">الشهر الهجري</th>
                  <th className="p-3 text-right text-foreground">عدد الأيام</th>
                  <th className="p-3 text-right text-foreground">بداية الشهر ميلادي</th>
                  <th className="p-3 text-right text-foreground">نهاية الشهر ميلادي</th>
                </tr>
              </thead>
              <tbody>
                {calendarData.map((data, index) => (
                  <tr key={data.month} className={index % 2 === 0 ? 'bg-secondary/20' : ''}>
                    <td className="p-3 font-medium text-foreground">{data.monthName}</td>
                    <td className="p-3 text-muted-foreground">{data.daysCount}</td>
                    <td className="p-3 text-muted-foreground">{data.firstDayGregorian}</td>
                    <td className="p-3 text-muted-foreground">{data.lastDayGregorian}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Quick Convert Link */}
        <div className="bg-primary/10 rounded-xl p-6 text-center mb-8">
          <p className="text-foreground mb-4">هل تريد تحويل تاريخ محدد من سنة {hijriYear} هجري؟</p>
          <Link href={`/convert/hijri-to-gregorian/${hijriYear}`}
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            تحويل تاريخ من {hijriYear} هجري
          </Link>
        </div>
        
        {/* Content */}
        <ContentCluster type="hijri-months-table" />
        
        {/* FAQ */}
        <FAQSection faqs={FAQ_DATA.calendar} />
        
        {/* Internal Links */}
        <InternalLinks type="calendar" currentYear={hijriYear} />
      </div>
    </PageLayout>
  );
}
