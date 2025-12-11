'use client'

import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { SEOHead, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/components/SEOHead';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FAQSection } from '@/components/FAQSection';
import DateConverter from '@/components/DateConverter';
import { 
  generateSalaryDateHijriSEO, 
  getHijriMonthBySlug, 
  HIJRI_MONTHS,
  TREND_FAQ_DATA 
} from '@/lib/trendData';
import { hijriToGregorian, formatGregorianDate, getTodayDates } from '@/lib/hijriConverter';

export default function SalaryDateHijri() {
  const { monthYear } = useParams<{ monthYear: string }>();
  const [monthSlug, yearStr] = (monthYear || '').split('-');
  const { hijri: todayHijri } = getTodayDates();
  const year = parseInt(yearStr) || todayHijri.year;
  
  const month = getHijriMonthBySlug(monthSlug);
  const monthNumber = month?.number || 1;
  const monthName = month?.name || monthSlug;
  
  const seo = generateSalaryDateHijriSEO(monthSlug, year);
  
  // Salary date - typically 27th of corresponding Gregorian month
  // We need to find the Gregorian month that overlaps with this Hijri month
  const firstDayGregorian = hijriToGregorian(year, monthNumber, 1);
  const salaryDay = 27;
  const salaryDate = new Date(firstDayGregorian.year, firstDayGregorian.month - 1, salaryDay);
  
  // Adjust if weekend
  const dayOfWeek = salaryDate.getDay();
  if (dayOfWeek === 5) salaryDate.setDate(salaryDate.getDate() - 1);
  else if (dayOfWeek === 6) salaryDate.setDate(salaryDate.getDate() - 2);
  
  const schema = [
    { '@context': 'https://schema.org', ...generateWebPageSchema(seo) },
    { '@context': 'https://schema.org', ...generateBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'موعد الراتب بالهجري', url: '/salary/hijri' },
      { name: `${monthName} ${year}`, url: seo.canonical }
    ])},
    { '@context': 'https://schema.org', ...generateFAQSchema(TREND_FAQ_DATA.salary) }
  ];

  // Generate navigation links
  const prevMonth = monthNumber === 1 
    ? { month: HIJRI_MONTHS[11], year: year - 1 }
    : { month: HIJRI_MONTHS[monthNumber - 2], year };
  const nextMonth = monthNumber === 12 
    ? { month: HIJRI_MONTHS[0], year: year + 1 }
    : { month: HIJRI_MONTHS[monthNumber], year };

  return (
    <PageLayout>
      <SEOHead seo={seo} schema={schema} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">الرئيسية</Link>
          <span className="mx-2">/</span>
          <span>موعد الراتب بالهجري</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{monthName} {year} هـ</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{seo.h1}</h1>
        <p className="text-lg text-muted-foreground mb-8">{seo.intro}</p>

        {/* Countdown Timer */}
        <CountdownTimer 
          targetDate={salaryDate} 
          title={`⏰ العد التنازلي لموعد الراتب`}
          className="mb-8"
        />

        {/* Salary Date Info */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">📅 موعد الراتب المتوقع</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">الشهر الهجري</p>
              <p className="text-2xl font-bold text-primary">{monthName} {year} هـ</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">التاريخ الميلادي المتوقع</p>
              <p className="text-2xl font-bold text-primary">
                {salaryDate.getDate()}/{salaryDate.getMonth() + 1}/{salaryDate.getFullYear()}
              </p>
            </div>
          </div>
        </div>

        {/* Hijri Months Table */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">📊 جدول أشهر السنة الهجرية {year}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-3 font-semibold">الشهر الهجري</th>
                  <th className="text-right p-3 font-semibold">بداية الشهر بالميلادي</th>
                </tr>
              </thead>
              <tbody>
                {HIJRI_MONTHS.map((m) => {
                  const greg = hijriToGregorian(year, m.number, 1);
                  const isCurrent = m.number === monthNumber;
                  
                  return (
                    <tr key={m.number} className={`border-b border-border/50 ${isCurrent ? 'bg-primary/10' : ''}`}>
                      <td className="p-3">
                        <Link href={`/salary/hijri/${m.slug}-${year}`}
                          className="text-primary hover:underline"
                        >
                          {m.name}
                        </Link>
                      </td>
                      <td className="p-3">{formatGregorianDate(greg)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Date Converter */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">🔄 تحويل التاريخ</h2>
          <DateConverter />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between items-center mb-8">
          <Link href={`/salary/hijri/${prevMonth.month.slug}-${prevMonth.year}`}
            className="text-primary hover:underline"
          >
            ← {prevMonth.month.name} {prevMonth.year}
          </Link>
          <Link href={`/salary/hijri/${nextMonth.month.slug}-${nextMonth.year}`}
            className="text-primary hover:underline"
          >
            {nextMonth.month.name} {nextMonth.year} →
          </Link>
        </div>

        {/* Internal Links */}
        <div className="bg-secondary/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">🔗 روابط ذات صلة</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/date/today" className="text-primary hover:underline text-sm">تاريخ اليوم</Link>
            <Link href={`/calendar/${year}`} className="text-primary hover:underline text-sm">التقويم الهجري {year}</Link>
            <Link href={`/white-days/${monthSlug}-${year}`} className="text-primary hover:underline text-sm">الأيام البيض</Link>
            <Link href={`/hijri-month/start/${monthSlug}-${year}`} className="text-primary hover:underline text-sm">بداية الشهر</Link>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={TREND_FAQ_DATA.salary} />
      </div>
    </PageLayout>
  );
}
