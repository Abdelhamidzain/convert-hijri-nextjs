'use client'

import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { SEOHead, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/components/SEOHead';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FAQSection } from '@/components/FAQSection';
import DateConverter from '@/components/DateConverter';
import { 
  generateSalaryDateGregorianSEO, 
  getGregorianMonthBySlug, 
  GREGORIAN_MONTHS,
  SALARY_DAY_GREGORIAN,
  TREND_FAQ_DATA 
} from '@/lib/trendData';
import { gregorianToHijri, formatHijriDate } from '@/lib/hijriConverter';

export default function SalaryDateGregorian() {
  const { monthYear } = useParams<{ monthYear: string }>();
  const [monthSlug, yearStr] = (monthYear || '').split('-');
  const year = parseInt(yearStr) || new Date().getFullYear();
  
  const month = getGregorianMonthBySlug(monthSlug);
  const monthNumber = month?.number || 1;
  const monthName = month?.name || monthSlug;
  
  const seo = generateSalaryDateGregorianSEO(monthSlug, year);
  
  // Calculate salary date
  const salaryDate = new Date(year, monthNumber - 1, SALARY_DAY_GREGORIAN);
  
  // Adjust if weekend (Friday = 5, Saturday = 6)
  const dayOfWeek = salaryDate.getDay();
  if (dayOfWeek === 5) { // Friday
    salaryDate.setDate(salaryDate.getDate() - 1); // Move to Thursday
  } else if (dayOfWeek === 6) { // Saturday
    salaryDate.setDate(salaryDate.getDate() - 2); // Move to Thursday
  }
  
  const hijriDate = gregorianToHijri(salaryDate.getFullYear(), salaryDate.getMonth() + 1, salaryDate.getDate());
  
  const schema = [
    { '@context': 'https://schema.org', ...generateWebPageSchema(seo) },
    { '@context': 'https://schema.org', ...generateBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'موعد الراتب', url: '/salary/date' },
      { name: `${monthName} ${year}`, url: seo.canonical }
    ])},
    { '@context': 'https://schema.org', ...generateFAQSchema(TREND_FAQ_DATA.salary) },
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: `موعد صرف الراتب - ${monthName} ${year}`,
      startDate: salaryDate.toISOString().split('T')[0],
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Country',
        name: 'المملكة العربية السعودية'
      }
    }
  ];

  // Generate navigation links
  const prevMonth = monthNumber === 1 
    ? { month: GREGORIAN_MONTHS[11], year: year - 1 }
    : { month: GREGORIAN_MONTHS[monthNumber - 2], year };
  const nextMonth = monthNumber === 12 
    ? { month: GREGORIAN_MONTHS[0], year: year + 1 }
    : { month: GREGORIAN_MONTHS[monthNumber], year };

  return (
    <PageLayout>
      <SEOHead seo={seo} schema={schema} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">الرئيسية</Link>
          <span className="mx-2">/</span>
          <span>موعد الراتب</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{monthName} {year}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{seo.h1}</h1>
        <p className="text-lg text-muted-foreground mb-8">{seo.intro}</p>

        {/* Countdown Timer */}
        <CountdownTimer 
          targetDate={salaryDate} 
          title={`⏰ العد التنازلي لموعد الراتب - ${monthName} ${year}`}
          className="mb-8"
        />

        {/* Salary Date Info */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">📅 تاريخ صرف الراتب</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">التاريخ الميلادي</p>
              <p className="text-2xl font-bold text-primary">
                {salaryDate.getDate()} {monthName} {year}
              </p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">التاريخ الهجري</p>
              <p className="text-2xl font-bold text-primary">
                {formatHijriDate(hijriDate)}
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * إذا صادف يوم الراتب عطلة نهاية الأسبوع يتم تقديمه ليوم الخميس السابق
          </p>
        </div>

        {/* Date Converter */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">🔄 تحويل التاريخ</h2>
          <DateConverter />
        </div>

        {/* Monthly Table */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">📊 جدول مواعيد الرواتب {year}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-3 font-semibold">الشهر</th>
                  <th className="text-right p-3 font-semibold">تاريخ الراتب</th>
                  <th className="text-right p-3 font-semibold">اليوم</th>
                </tr>
              </thead>
              <tbody>
                {GREGORIAN_MONTHS.map((m) => {
                  const date = new Date(year, m.number - 1, SALARY_DAY_GREGORIAN);
                  const dow = date.getDay();
                  if (dow === 5) date.setDate(date.getDate() - 1);
                  else if (dow === 6) date.setDate(date.getDate() - 2);
                  
                  const weekdays = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
                  const isCurrent = m.number === monthNumber;
                  
                  return (
                    <tr key={m.number} className={`border-b border-border/50 ${isCurrent ? 'bg-primary/10' : ''}`}>
                      <td className="p-3">
                        <Link href={`/salary/date/${m.slug}-${year}`}
                          className="text-primary hover:underline"
                        >
                          {m.name}
                        </Link>
                      </td>
                      <td className="p-3">{date.getDate()} {m.name}</td>
                      <td className="p-3">{weekdays[date.getDay()]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between items-center mb-8">
          <Link href={`/salary/date/${prevMonth.month.slug}-${prevMonth.year}`}
            className="text-primary hover:underline"
          >
            ← {prevMonth.month.name} {prevMonth.year}
          </Link>
          <Link href={`/salary/date/${nextMonth.month.slug}-${nextMonth.year}`}
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
            <Link href="/how-old-am-i/hijri" className="text-primary hover:underline text-sm">حساب العمر</Link>
            <Link href={`/calendar/${hijriDate.year}`} className="text-primary hover:underline text-sm">التقويم الهجري</Link>
            <Link href={`/white-days/muharram-${hijriDate.year}`} className="text-primary hover:underline text-sm">الأيام البيض</Link>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={TREND_FAQ_DATA.salary} />
      </div>
    </PageLayout>
  );
}
