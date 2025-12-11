'use client'

import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';
import { SEOHead, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/components/SEOHead';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FAQSection } from '@/components/FAQSection';
import DateConverter from '@/components/DateConverter';
import { 
  generateIslamicEventSEO, 
  getEventBySlug, 
  ISLAMIC_EVENTS,
  TREND_FAQ_DATA 
} from '@/lib/trendData';
import { hijriToGregorian, formatGregorianDate, formatHijriDate, getTodayDates } from '@/lib/hijriConverter';

export default function IslamicEvents() {
  const { eventYear } = useParams<{ eventYear: string }>();
  const [eventSlug, yearStr] = (eventYear || '').split('-');
  const { hijri: todayHijri } = getTodayDates();
  const year = parseInt(yearStr) || todayHijri.year;
  
  const event = getEventBySlug(eventSlug);
  const eventName = event?.name || eventSlug;
  const eventDescription = event?.description || '';
  const eventMonth = event?.hijriMonth || 1;
  const eventDay = event?.hijriDay || 1;
  
  const seo = generateIslamicEventSEO(eventSlug, year);
  
  // Calculate event date
  const gregorianDate = hijriToGregorian(year, eventMonth, eventDay);
  const eventDate = new Date(gregorianDate.year, gregorianDate.month - 1, gregorianDate.day);
  
  // Get event-specific content
  const eventContent = getEventContent(eventSlug);
  
  const schema = [
    { '@context': 'https://schema.org', ...generateWebPageSchema(seo) },
    { '@context': 'https://schema.org', ...generateBreadcrumbSchema([
      { name: 'الرئيسية', url: '/' },
      { name: 'المناسبات الإسلامية', url: '/events' },
      { name: `${eventName} ${year}`, url: seo.canonical }
    ])},
    { '@context': 'https://schema.org', ...generateFAQSchema(TREND_FAQ_DATA.events) },
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: `${eventName} ${year} هـ`,
      startDate: eventDate.toISOString().split('T')[0],
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      description: eventDescription,
      location: {
        '@type': 'VirtualLocation',
        url: `https://hijri-converter.lovable.app${seo.canonical}`
      }
    }
  ];

  return (
    <PageLayout>
      <SEOHead seo={seo} schema={schema} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">الرئيسية</Link>
          <span className="mx-2">/</span>
          <span>المناسبات الإسلامية</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{eventName} {year}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{seo.h1}</h1>
        <p className="text-lg text-muted-foreground mb-8">{seo.intro}</p>

        {/* Countdown Timer */}
        <CountdownTimer 
          targetDate={eventDate} 
          title={`⏰ العد التنازلي لـ ${eventName}`}
          className="mb-8"
        />

        {/* Event Date Info */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">📅 موعد {eventName}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">التاريخ الهجري</p>
              <p className="text-2xl font-bold text-primary">
                {eventDay} {event?.hijriMonth ? getHijriMonthName(event.hijriMonth) : ''} {year} هـ
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/30 to-primary/10 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">التاريخ الميلادي</p>
              <p className="text-2xl font-bold text-primary">
                {formatGregorianDate(gregorianDate)}
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            يوم: {gregorianDate.weekday}
          </p>
        </div>

        {/* Event Content */}
        {eventContent && (
          <div className="bg-gradient-to-br from-primary/5 to-secondary/20 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-foreground">✨ عن {eventName}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{eventContent.about}</p>
              {eventContent.virtues && (
                <div>
                  <strong className="text-foreground">الفضائل:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {eventContent.virtues.map((virtue, i) => (
                      <li key={i}>{virtue}</li>
                    ))}
                  </ul>
                </div>
              )}
              {eventContent.practices && (
                <div>
                  <strong className="text-foreground">الأعمال المستحبة:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {eventContent.practices.map((practice, i) => (
                      <li key={i}>{practice}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* All Events Table */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">📊 المناسبات الإسلامية لسنة {year} هـ</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-3 font-semibold">المناسبة</th>
                  <th className="text-right p-3 font-semibold">التاريخ الهجري</th>
                  <th className="text-right p-3 font-semibold">التاريخ الميلادي</th>
                </tr>
              </thead>
              <tbody>
                {ISLAMIC_EVENTS.map((e) => {
                  const greg = hijriToGregorian(year, e.hijriMonth, e.hijriDay);
                  const isCurrent = e.slug === eventSlug;
                  
                  return (
                    <tr key={e.slug} className={`border-b border-border/50 ${isCurrent ? 'bg-primary/10' : ''}`}>
                      <td className="p-3">
                        <Link href={`/events/${e.slug}-${year}`}
                          className="text-primary hover:underline"
                        >
                          {e.name}
                        </Link>
                      </td>
                      <td className="p-3">{e.hijriDay} {getHijriMonthName(e.hijriMonth)}</td>
                      <td className="p-3">{formatGregorianDate(greg)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Year Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          {[year - 1, year, year + 1].map((y) => (
            <Link
              key={y}
              to={`/events/${eventSlug}-${y}`}
              className={`px-4 py-2 rounded-lg ${y === year 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-foreground hover:bg-secondary/80'}`}
            >
              {eventName} {y}
            </Link>
          ))}
        </div>

        {/* Date Converter */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">🔄 تحويل التاريخ</h2>
          <DateConverter />
        </div>

        {/* Internal Links */}
        <div className="bg-secondary/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">🔗 روابط ذات صلة</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/date/today" className="text-primary hover:underline text-sm">تاريخ اليوم</Link>
            <Link href={`/calendar/${year}`} className="text-primary hover:underline text-sm">التقويم الهجري</Link>
            <Link href={`/white-days/ramadan-${year}`} className="text-primary hover:underline text-sm">الأيام البيض</Link>
            <Link href="/how-old-am-i/hijri" className="text-primary hover:underline text-sm">حساب العمر</Link>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={TREND_FAQ_DATA.events} />
      </div>
    </PageLayout>
  );
}

function getHijriMonthName(monthNumber: number): string {
  const months = [
    '', 'محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 
    'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان',
    'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
  ];
  return months[monthNumber] || '';
}

function getEventContent(eventSlug: string) {
  const content: Record<string, { about: string; virtues?: string[]; practices?: string[] }> = {
    'ramadan': {
      about: 'رمضان هو الشهر التاسع في التقويم الهجري، وهو شهر الصيام الذي فُرض على المسلمين. فيه أُنزل القرآن الكريم، وفيه ليلة القدر التي هي خير من ألف شهر.',
      virtues: [
        'شهر نزول القرآن الكريم',
        'تُفتح فيه أبواب الجنة وتُغلق أبواب النار',
        'تُصفّد فيه الشياطين',
        'فيه ليلة القدر خير من ألف شهر'
      ],
      practices: [
        'صيام الشهر كاملاً',
        'قيام الليل (التراويح)',
        'تلاوة القرآن الكريم',
        'الإكثار من الصدقات',
        'الاعتكاف في العشر الأواخر'
      ]
    },
    'eid-al-fitr': {
      about: 'عيد الفطر المبارك يأتي في أول يوم من شهر شوال، بعد انتهاء صيام شهر رمضان. وهو يوم فرح وشكر لله على إتمام الصيام.',
      virtues: [
        'يوم يفرح فيه المسلم بإتمام الصيام',
        'يوم الجائزة بعد شهر من الطاعة'
      ],
      practices: [
        'صلاة العيد',
        'إخراج زكاة الفطر قبل الصلاة',
        'التكبير من ليلة العيد حتى الصلاة',
        'صلة الأرحام وزيارة الأقارب',
        'إظهار الفرح والسرور'
      ]
    },
    'eid-al-adha': {
      about: 'عيد الأضحى المبارك يأتي في اليوم العاشر من ذي الحجة، وهو يوم النحر وأعظم أيام السنة. فيه يؤدي الحجاج مناسكهم ويذبح المسلمون أضاحيهم.',
      virtues: [
        'أعظم أيام السنة عند الله',
        'يوم الحج الأكبر',
        'يوم إتمام النعمة على الحجاج'
      ],
      practices: [
        'صلاة العيد',
        'ذبح الأضحية',
        'التكبير أيام التشريق',
        'صلة الأرحام',
        'توزيع لحم الأضحية'
      ]
    },
    'arafah': {
      about: 'يوم عرفة هو التاسع من ذي الحجة، وهو أفضل أيام السنة. فيه يقف الحجاج على صعيد عرفات، وصيامه يكفّر ذنوب سنتين.',
      virtues: [
        'أفضل أيام السنة',
        'يوم إكمال الدين وإتمام النعمة',
        'صيامه يكفّر سنة ماضية وسنة قادمة',
        'يوم العتق من النار'
      ],
      practices: [
        'صيام يوم عرفة لغير الحاج',
        'الإكثار من الدعاء',
        'التهليل والتكبير والتحميد',
        'الوقوف بعرفة للحجاج'
      ]
    },
    'ashura': {
      about: 'يوم عاشوراء هو العاشر من محرم، وهو اليوم الذي نجّى الله فيه موسى عليه السلام وقومه من فرعون. صيامه يكفّر ذنوب سنة ماضية.',
      virtues: [
        'يوم نجاة موسى من فرعون',
        'صيامه يكفّر سنة ماضية',
        'من الأيام التي كانت قريش تصومها'
      ],
      practices: [
        'صيام يوم عاشوراء',
        'صيام يوم قبله أو بعده (التاسع أو الحادي عشر)',
        'التوسعة على الأهل'
      ]
    },
    'mawlid': {
      about: 'ذكرى المولد النبوي الشريف تُحيى في الثاني عشر من ربيع الأول، وهو اليوم الذي وُلد فيه النبي محمد ﷺ.',
      practices: [
        'تذكّر سيرة النبي ﷺ',
        'الصلاة على النبي ﷺ'
      ]
    },
    'isra-miraj': {
      about: 'ذكرى الإسراء والمعراج في السابع والعشرين من رجب، وهي الليلة التي أُسري فيها بالنبي ﷺ من المسجد الحرام إلى المسجد الأقصى، ثم عُرج به إلى السماوات العلى.',
      virtues: [
        'فُرضت فيها الصلوات الخمس',
        'رأى النبي ﷺ آيات ربه الكبرى'
      ]
    },
    'laylat-al-qadr': {
      about: 'ليلة القدر هي ليلة مباركة في شهر رمضان، خير من ألف شهر. أُنزل فيها القرآن الكريم، وتتنزل فيها الملائكة والروح.',
      virtues: [
        'خير من ألف شهر',
        'ليلة نزول القرآن',
        'تتنزل فيها الملائكة',
        'سلام هي حتى مطلع الفجر'
      ],
      practices: [
        'قيام الليل',
        'الدعاء: اللهم إنك عفو تحب العفو فاعف عني',
        'تلاوة القرآن',
        'الاعتكاف'
      ]
    },
    'hijri-new-year': {
      about: 'رأس السنة الهجرية يوافق الأول من محرم، وهو بداية السنة الهجرية الجديدة. التقويم الهجري يبدأ من هجرة النبي ﷺ من مكة إلى المدينة.',
      virtues: [
        'بداية سنة هجرية جديدة',
        'ذكرى هجرة النبي ﷺ المباركة'
      ],
      practices: [
        'التأمل في العام الماضي',
        'وضع أهداف للعام الجديد',
        'صيام يوم عاشوراء (10 محرم)'
      ]
    }
  };
  
  return content[eventSlug];
}
