'use client'

import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { SEOHead, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/components/SEOHead';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FAQSection } from '@/components/FAQSection';
import DateConverter from '@/components/DateConverter';
import { 
  generateWhiteDaysSEO, 
  getHijriMonthBySlug, 
  HIJRI_MONTHS,
  WHITE_DAYS,
  TREND_FAQ_DATA 
} from '@/lib/trendData';
import { hijriToGregorian, formatGregorianDate, getTodayDates } from '@/lib/hijriConverter';

export default function WhiteDays() {
  const { monthYear } = useParams<{ monthYear: string }>();
  const [monthSlug, yearStr] = (monthYear || '').split('-');
  const { hijri: todayHijri } = getTodayDates();
  const year = parseInt(yearStr) || todayHijri.year;
  
  const month = getHijriMonthBySlug(monthSlug);
  const monthNumber = month?.number || 1;
  const monthName = month?.name || monthSlug;
  
  const seo = generateWhiteDaysSEO(monthSlug, year);
  
  // Calculate white days dates
  const whiteDaysDates = WHITE_DAYS.map(day => {
    const greg = hijriToGregorian(year, monthNumber, day);
    return {
      hijriDay: day,
      gregorian: greg,
      date: new Date(greg.year, greg.month - 1, greg.day)
    };
  });
  
  // Find next white day for countdown
  const today = new Date();
  const nextWhiteDay = whiteDaysDates.find(d => d.date > today) || whiteDaysDates[0];
  
  const schema = [
    { '@context': 'https://schema.org', ...generateWebPageSchema(seo) },
    { '@context': 'https://schema.org', ...generateBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'الأيام البيض', url: '/white-days' },
      { name: `${monthName} ${year}`, url: seo.canonical }
    ])},
    { '@context': 'https://schema.org', ...generateFAQSchema(TREND_FAQ_DATA.whiteDays) },
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: `الأيام البيض - ${monthName} ${year} هـ`,
      startDate: whiteDaysDates[0].date.toISOString().split('T')[0],
      endDate: whiteDaysDates[2].date.toISOString().split('T')[0],
      eventStatus: 'https://schema.org/EventScheduled',
      description: `أيام صيام الأيام البيض (13، 14، 15) من شهر ${monthName} سنة ${year} هجري`
    }
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
          <span>الأيام البيض</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{monthName} {year} هـ</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{seo.h1}</h1>
        <p className="text-lg text-muted-foreground mb-8">{seo.intro}</p>

        {/* Countdown Timer */}
        <CountdownTimer 
          targetDate={nextWhiteDay.date} 
          title={`🌙 العد التنازلي للأيام البيض`}
          className="mb-8"
        />

        {/* White Days Dates */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">📅 تواريخ الأيام البيض - {monthName} {year}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {whiteDaysDates.map((day, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/10 to-secondary/30 rounded-lg p-4 text-center">
                <div className="text-4xl mb-2">🌕</div>
                <p className="text-sm text-muted-foreground">اليوم {day.hijriDay} {monthName}</p>
                <p className="text-lg font-bold text-foreground mt-2">
                  {formatGregorianDate(day.gregorian)}
                </p>
                <p className="text-sm text-muted-foreground">{day.gregorian.weekday}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About White Days */}
        <div className="bg-secondary/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">✨ فضل صيام الأيام البيض</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              الأيام البيض هي أيام 13 و14 و15 من كل شهر هجري، وسميت بذلك لأن القمر يكون مكتملاً فيها 
              فتكون الليالي بيضاء مضيئة بنور القمر.
            </p>
            <p>
              <strong className="text-foreground">الحديث النبوي:</strong> عن أبي هريرة رضي الله عنه قال: 
              أوصاني خليلي ﷺ بثلاث: "صيام ثلاثة أيام من كل شهر، وركعتي الضحى، وأن أوتر قبل أن أنام".
            </p>
            <p>
              <strong className="text-foreground">الفضل:</strong> صيام ثلاثة أيام من كل شهر يعادل صيام الدهر، 
              لأن الحسنة بعشر أمثالها، فصيام 3 أيام × 10 = 30 يوماً.
            </p>
          </div>
        </div>

        {/* Yearly Table */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">📊 الأيام البيض لسنة {year} هـ</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-3 font-semibold">الشهر</th>
                  <th className="text-right p-3 font-semibold">13</th>
                  <th className="text-right p-3 font-semibold">14</th>
                  <th className="text-right p-3 font-semibold">15</th>
                </tr>
              </thead>
              <tbody>
                {HIJRI_MONTHS.map((m) => {
                  const isCurrent = m.number === monthNumber;
                  const days = WHITE_DAYS.map(d => hijriToGregorian(year, m.number, d));
                  
                  return (
                    <tr key={m.number} className={`border-b border-border/50 ${isCurrent ? 'bg-primary/10' : ''}`}>
                      <td className="p-3">
                        <Link href={`/white-days/${m.slug}-${year}`}
                          className="text-primary hover:underline"
                        >
                          {m.name}
                        </Link>
                      </td>
                      {days.map((d, i) => (
                        <td key={i} className="p-3 text-xs">
                          {d.day}/{d.month}
                        </td>
                      ))}
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
          <Link href={`/white-days/${prevMonth.month.slug}-${prevMonth.year}`}
            className="text-primary hover:underline"
          >
            ← {prevMonth.month.name} {prevMonth.year}
          </Link>
          <Link href={`/white-days/${nextMonth.month.slug}-${nextMonth.year}`}
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
            <Link href={`/calendar/${year}`} className="text-primary hover:underline text-sm">التقويم الهجري</Link>
            <Link href={`/hijri-month/start/${monthSlug}-${year}`} className="text-primary hover:underline text-sm">بداية {monthName}</Link>
            <Link href={`/events/ramadan-${year}`} className="text-primary hover:underline text-sm">موعد رمضان</Link>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={TREND_FAQ_DATA.whiteDays} />
      </div>
    </PageLayout>
  );
}
