import Link from 'next/link';
import { CITIES, HIJRI_YEAR_RANGE, GREGORIAN_YEAR_RANGE } from '@/lib/seoData';
import { getTodayDates } from '@/lib/hijriConverter';

interface InternalLinksProps {
  type: 'calendar' | 'hijri-convert' | 'gregorian-convert' | 'cities' | 'all';
  limit?: number;
  currentYear?: number;
}

export function InternalLinks({ type, limit = 6, currentYear }: InternalLinksProps) {
  const { hijri, gregorian } = getTodayDates();
  
  const renderCalendarLinks = () => {
    const years = [];
    for (let i = hijri.year - 2; i <= hijri.year + 3; i++) {
      if (i !== currentYear && i >= HIJRI_YEAR_RANGE.start && i <= HIJRI_YEAR_RANGE.end) {
        years.push(i);
      }
    }
    return years.slice(0, limit).map(year => (
      <Link 
        key={year}
        href={`/calendar/${year}`}
        className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-sm"
      >
        التقويم الهجري {year}
      </Link>
    ));
  };
  
  const renderHijriConvertLinks = () => {
    const years = [];
    for (let i = hijri.year - 2; i <= hijri.year + 3; i++) {
      if (i !== currentYear && i >= HIJRI_YEAR_RANGE.start && i <= HIJRI_YEAR_RANGE.end) {
        years.push(i);
      }
    }
    return years.slice(0, limit).map(year => (
      <Link 
        key={year}
        href={`/convert/hijri-to-gregorian/${year}`}
        className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-sm"
      >
        تحويل {year} هجري لميلادي
      </Link>
    ));
  };
  
  const renderGregorianConvertLinks = () => {
    const years = [];
    for (let i = gregorian.year - 2; i <= gregorian.year + 3; i++) {
      if (i !== currentYear && i >= GREGORIAN_YEAR_RANGE.start && i <= GREGORIAN_YEAR_RANGE.end) {
        years.push(i);
      }
    }
    return years.slice(0, limit).map(year => (
      <Link 
        key={year}
        href={`/convert/gregorian-to-hijri/${year}`}
        className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-sm"
      >
        تحويل {year} ميلادي لهجري
      </Link>
    ));
  };
  
  const renderCityLinks = () => {
    return CITIES.slice(0, limit).map(city => (
      <Link 
        key={city.slug}
        href={`/date-today/${city.slug}`}
        className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-sm"
      >
        تاريخ اليوم في {city.name}
      </Link>
    ));
  };
  
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-foreground">صفحات ذات صلة</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {type === 'calendar' && renderCalendarLinks()}
        {type === 'hijri-convert' && renderHijriConvertLinks()}
        {type === 'gregorian-convert' && renderGregorianConvertLinks()}
        {type === 'cities' && renderCityLinks()}
        {type === 'all' && (
          <>
            <Link href="/date/today" className="block p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium">
              تاريخ اليوم
            </Link>
            <Link href="/how-old-am-i/hijri" className="block p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium">
              حساب العمر بالهجري
            </Link>
            <Link href="/how-old-am-i/gregorian" className="block p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium">
              حساب العمر بالميلادي
            </Link>
            <Link href={`/calendar/${hijri.year}`} className="block p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium">
              التقويم الهجري {hijri.year}
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
