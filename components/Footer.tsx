'use client'

import Link from 'next/link';
import { getTodayDates } from '@/lib/hijriConverter';
import { CITIES, HIJRI_YEAR_RANGE, GREGORIAN_YEAR_RANGE } from '@/lib/seoData';

export function Footer() {
  const { hijri, gregorian } = getTodayDates();
  
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors" title="محول التاريخ الهجري للميلادي">
                  تحويل التاريخ
                </Link>
              </li>
              <li>
                <Link to="/date/today" className="text-muted-foreground hover:text-primary transition-colors" title="تاريخ اليوم هجري وميلادي">
                  تاريخ اليوم
                </Link>
              </li>
              <li>
                <Link to="/how-old-am-i/hijri" className="text-muted-foreground hover:text-primary transition-colors" title="حساب العمر بالتاريخ الهجري">
                  حساب العمر بالهجري
                </Link>
              </li>
              <li>
                <Link to="/how-old-am-i/gregorian" className="text-muted-foreground hover:text-primary transition-colors" title="حساب العمر بالتاريخ الميلادي">
                  حساب العمر بالميلادي
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Calendar Years */}
          <div>
            <h3 className="font-bold text-foreground mb-4">التقويم الهجري</h3>
            <ul className="space-y-2 text-sm">
              {[hijri.year - 1, hijri.year, hijri.year + 1, hijri.year + 2].map(year => (
                year >= HIJRI_YEAR_RANGE.start && year <= HIJRI_YEAR_RANGE.end && (
                  <li key={year}>
                    <Link 
                      to={`/calendar/${year}`} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title={`التقويم الهجري لعام ${year}`}
                    >
                      التقويم {year} هـ
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </div>
          
          {/* Conversion Pages */}
          <div>
            <h3 className="font-bold text-foreground mb-4">تحويل السنوات</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to={`/convert/hijri-to-gregorian/${hijri.year}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title={`تحويل سنة ${hijri.year} هجري لميلادي`}
                >
                  تحويل {hijri.year} هجري
                </Link>
              </li>
              <li>
                <Link 
                  to={`/convert/hijri-to-gregorian/${hijri.year + 1}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title={`تحويل سنة ${hijri.year + 1} هجري لميلادي`}
                >
                  تحويل {hijri.year + 1} هجري
                </Link>
              </li>
              <li>
                <Link 
                  to={`/convert/gregorian-to-hijri/${gregorian.year}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title={`تحويل سنة ${gregorian.year} ميلادي لهجري`}
                >
                  تحويل {gregorian.year} ميلادي
                </Link>
              </li>
              <li>
                <Link 
                  to={`/convert/gregorian-to-hijri/${gregorian.year + 1}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title={`تحويل سنة ${gregorian.year + 1} ميلادي لهجري`}
                >
                  تحويل {gregorian.year + 1} ميلادي
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Cities */}
          <div>
            <h3 className="font-bold text-foreground mb-4">تاريخ اليوم في</h3>
            <ul className="space-y-2 text-sm">
              {CITIES.slice(0, 6).map(city => (
                <li key={city.slug}>
                  <Link 
                    to={`/date-today/${city.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title={`تاريخ اليوم في ${city.name} هجري وميلادي`}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Extended Links for SEO */}
        <div className="border-t border-border pt-6 mb-6">
          <h3 className="font-bold text-foreground mb-4 text-center">صفحات مفيدة</h3>
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            {/* More Calendar Years */}
            {[1444, 1445, 1446, 1447, 1448, 1449, 1450].map(year => (
              <Link 
                key={`cal-${year}`}
                to={`/calendar/${year}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                title={`التقويم الهجري ${year}`}
              >
                تقويم {year}
              </Link>
            ))}
            
            {/* More Conversion Links */}
            {[2024, 2025, 2026, 2027, 2028].map(year => (
              <Link 
                key={`greg-${year}`}
                to={`/convert/gregorian-to-hijri/${year}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                title={`تحويل ${year} ميلادي`}
              >
                {year} ميلادي
              </Link>
            ))}
            
            {/* More Cities */}
            {CITIES.slice(6).map(city => (
              <Link 
                key={city.slug}
                to={`/date-today/${city.slug}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                title={`تاريخ اليوم في ${city.name}`}
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
          <p>
            <Link to="/" className="hover:text-primary" title="محول التاريخ الهجري">محول التاريخ الهجري</Link>
            {' - '}
            أداة مجانية لـ
            <Link to="/" className="hover:text-primary mx-1" title="تحويل التاريخ من هجري لميلادي">تحويل التاريخ من هجري لميلادي</Link>
            و
            <Link to="/" className="hover:text-primary mx-1" title="تحويل التاريخ من ميلادي لهجري">تحويل التاريخ من ميلادي لهجري</Link>
          </p>
          <p className="mt-2">© {gregorian.year} جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}
