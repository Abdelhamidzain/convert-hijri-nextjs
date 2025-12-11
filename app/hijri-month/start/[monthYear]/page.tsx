'use client'

import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { SEOHead, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/components/SEOHead';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FAQSection } from '@/components/FAQSection';
import DateConverter from '@/components/DateConverter';
import { 
  generateHijriMonthStartSEO, 
  getHijriMonthBySlug, 
  HIJRI_MONTHS,
  TREND_FAQ_DATA 
} from '@/lib/trendData';
import { hijriToGregorian, formatGregorianDate, getTodayDates } from '@/lib/hijriConverter';

export default function HijriMonthStart() {
  const { monthYear } = useParams<{ monthYear: string }>();
  const [monthSlug, yearStr] = (monthYear || '').split('-');
  const { hijri: todayHijri } = getTodayDates();
  const year = parseInt(yearStr) || todayHijri.year;
  
  const month = getHijriMonthBySlug(monthSlug);
  const monthNumber = month?.number || 1;
  const monthName = month?.name || monthSlug;
  
  const seo = generateHijriMonthStartSEO(monthSlug, year);
  
  // Calculate month start date
  const firstDayGregorian = hijriToGregorian(year, monthNumber, 1);
  const startDate = new Date(firstDayGregorian.year, firstDayGregorian.month - 1, firstDayGregorian.day);
  
  // Get month events/info
  const monthInfo = getMonthInfo(monthNumber);
  
  const schema = [
    { '@context': 'https://schema.org', ...generateWebPageSchema(seo) },
    { '@context': 'https://schema.org', ...generateBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'بداية الأشهر الهجرية', url: '/hijri-month/start' },
      { name: `${monthName} ${year}`, url: seo.canonical }
    ])},
    { '@context': 'https://schema.org', ...generateFAQSchema(TREND_FAQ_DATA.monthStart) },
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: `بداية شهر ${monthName} ${year} هـ`,
      startDate: startDate.toISOString().split('T')[0],
      eventStatus: 'https://schema.org/EventScheduled',
      description: `أول يوم من شهر ${monthName} سنة ${year} هجري`
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
          <span>بداية الأشهر الهجرية</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{monthName} {year} هـ</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{seo.h1}</h1>
        <p className="text-lg text-muted-foreground mb-8">{seo.intro}</p>

        {/* Countdown Timer */}
        <CountdownTimer 
          targetDate={startDate} 
          title={`🌙 العد التنازلي لبداية شهر ${monthName}`}
          className="mb-8"
        />

        {/* Month Start Info */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">📅 بداية شهر {monthName}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">التاريخ الهجري</p>
              <p className="text-2xl font-bold text-primary">1 {monthName} {year} هـ</p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">التاريخ الميلادي</p>
              <p className="text-2xl font-bold text-primary">{formatGregorianDate(firstDayGregorian)}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            يوم: {firstDayGregorian.weekday}
          </p>
        </div>

        {/* Month Info */}
        {monthInfo && (
          <div className="bg-gradient-to-br from-primary/10 to-secondary/30 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-foreground">✨ عن شهر {monthName}</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>{monthInfo.description}</p>
              {monthInfo.events.length > 0 && (
                <div>
                  <strong className="text-foreground">مناسبات الشهر:</strong>
                  <ul className="list-disc list-inside mt-2">
                    {monthInfo.events.map((event, i) => (
                      <li key={i}>{event}</li>
                    ))}
                  </ul>
                </div>
              )}
              {monthInfo.isHaram && (
                <p className="text-primary font-medium">
                  ⚠️ هذا شهر من الأشهر الحرم
                </p>
              )}
            </div>
          </div>
        )}

        {/* Yearly Table */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">📊 بداية الأشهر الهجرية لسنة {year}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-3 font-semibold">الشهر الهجري</th>
                  <th className="text-right p-3 font-semibold">بداية الشهر بالميلادي</th>
                  <th className="text-right p-3 font-semibold">اليوم</th>
                </tr>
              </thead>
              <tbody>
                {HIJRI_MONTHS.map((m) => {
                  const greg = hijriToGregorian(year, m.number, 1);
                  const isCurrent = m.number === monthNumber;
                  
                  return (
                    <tr key={m.number} className={`border-b border-border/50 ${isCurrent ? 'bg-primary/10' : ''}`}>
                      <td className="p-3">
                        <Link href={`/hijri-month/start/${m.slug}-${year}`}
                          className="text-primary hover:underline"
                        >
                          {m.name}
                        </Link>
                      </td>
                      <td className="p-3">{formatGregorianDate(greg)}</td>
                      <td className="p-3">{greg.weekday}</td>
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
          <Link href={`/hijri-month/start/${prevMonth.month.slug}-${prevMonth.year}`}
            className="text-primary hover:underline"
          >
            ← {prevMonth.month.name} {prevMonth.year}
          </Link>
          <Link href={`/hijri-month/start/${nextMonth.month.slug}-${nextMonth.year}`}
            className="text-primary hover:underline"
          >
            {nextMonth.month.name} {nextMonth.year} →
          </Link>
        </div>

        {/* Internal Links */}
        <div className="bg-secondary/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">🔗 روابط ذات صلة</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href={`/calendar/${year}`} className="text-primary hover:underline text-sm">التقويم الهجري {year}</Link>
            <Link href={`/white-days/${monthSlug}-${year}`} className="text-primary hover:underline text-sm">الأيام البيض</Link>
            <Link href="/date/today" className="text-primary hover:underline text-sm">تاريخ اليوم</Link>
            <Link href={`/convert/hijri-to-gregorian/${year}`} className="text-primary hover:underline text-sm">تحويل التاريخ</Link>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={TREND_FAQ_DATA.monthStart} />
      </div>
    </PageLayout>
  );
}

function getMonthInfo(monthNumber: number) {
  const monthsInfo: Record<number, { description: string; events: string[]; isHaram: boolean }> = {
    1: {
      description: 'محرم هو أول أشهر السنة الهجرية وأحد الأشهر الحرم. فيه يوم عاشوراء (10 محرم) الذي يستحب صيامه.',
      events: ['رأس السنة الهجرية (1 محرم)', 'يوم عاشوراء (10 محرم)'],
      isHaram: true
    },
    2: {
      description: 'صفر هو الشهر الثاني من السنة الهجرية. كان العرب في الجاهلية يتشاءمون منه، لكن الإسلام نفى ذلك.',
      events: [],
      isHaram: false
    },
    3: {
      description: 'ربيع الأول هو شهر مولد النبي محمد ﷺ. سمي بربيع لأن العرب أطلقوا عليه هذا الاسم في فصل الربيع.',
      events: ['المولد النبوي (12 ربيع الأول)'],
      isHaram: false
    },
    4: {
      description: 'ربيع الآخر (أو ربيع الثاني) هو الشهر الرابع من السنة الهجرية.',
      events: [],
      isHaram: false
    },
    5: {
      description: 'جمادى الأولى هو الشهر الخامس من السنة الهجرية. سمي بذلك لوقوعه في الشتاء حيث يجمد الماء.',
      events: [],
      isHaram: false
    },
    6: {
      description: 'جمادى الآخرة هو الشهر السادس من السنة الهجرية.',
      events: [],
      isHaram: false
    },
    7: {
      description: 'رجب من الأشهر الحرم وهو الشهر السابع. فيه ذكرى الإسراء والمعراج.',
      events: ['ذكرى الإسراء والمعراج (27 رجب)'],
      isHaram: true
    },
    8: {
      description: 'شعبان هو الشهر الثامن ويسبق رمضان مباشرة. يستحب الإكثار من الصيام فيه.',
      events: ['ليلة النصف من شعبان (15 شعبان)'],
      isHaram: false
    },
    9: {
      description: 'رمضان شهر الصيام والقرآن، أفضل شهور السنة. فيه ليلة القدر التي هي خير من ألف شهر.',
      events: ['بداية الصيام (1 رمضان)', 'ليلة القدر (27 رمضان تقريباً)'],
      isHaram: false
    },
    10: {
      description: 'شوال هو شهر عيد الفطر المبارك. يستحب صيام ست أيام منه بعد العيد.',
      events: ['عيد الفطر (1-3 شوال)'],
      isHaram: false
    },
    11: {
      description: 'ذو القعدة من الأشهر الحرم، وهو شهر الاستعداد للحج.',
      events: [],
      isHaram: true
    },
    12: {
      description: 'ذو الحجة من الأشهر الحرم، فيه موسم الحج والعشر الأوائل المباركة وعيد الأضحى.',
      events: ['يوم عرفة (9 ذو الحجة)', 'عيد الأضحى (10-13 ذو الحجة)'],
      isHaram: true
    }
  };
  
  return monthsInfo[monthNumber];
}
