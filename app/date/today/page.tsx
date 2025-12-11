'use client'

import { useMemo } from 'react';
import Link from 'next/link';
import { getTodayDates, formatHijriDate, formatGregorianDate } from '@/lib/hijriConverter';
import { generateTodayDateSEO, FAQ_DATA } from '@/lib/seoData';
import { SEOHead, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/components/SEOHead';
import { FAQSection } from '@/components/FAQSection';
import { InternalLinks } from '@/components/InternalLinks';
import { ContentCluster } from '@/components/ContentCluster';
import { PageLayout } from '@/components/PageLayout';

export default function TodayDate() {
  const seo = generateTodayDateSEO();
  const { hijri, gregorian } = getTodayDates();
  
  const schema = useMemo(() => [{
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(seo),
      generateBreadcrumbSchema([
        { name: 'الرئيسية', url: '/' },
        { name: 'تاريخ اليوم', url: '/date/today' }
      ]),
      generateFAQSchema(FAQ_DATA.general.slice(0, 5))
    ]
  }], [seo]);
  
  return (
    <PageLayout>
      <SEOHead seo={seo} schema={schema} />
      
      <header className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">الرئيسية</Link>
            <span>/</span>
            <span className="text-foreground">تاريخ اليوم</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{seo.h1}</h1>
          <p className="text-muted-foreground mt-2">{seo.intro}</p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        {/* Today's Date Display */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-sm text-muted-foreground mb-2">التاريخ الهجري اليوم</div>
            <div className="text-3xl font-bold text-primary mb-2">
              {hijri.day} {hijri.monthName} {hijri.year} هـ
            </div>
            <div className="text-muted-foreground">{hijri.weekday}</div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-sm text-muted-foreground mb-2">التاريخ الميلادي اليوم</div>
            <div className="text-3xl font-bold text-foreground mb-2">
              {gregorian.day} {gregorian.monthName} {gregorian.year} م
            </div>
            <div className="text-muted-foreground">{gregorian.weekday}</div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Link href="/"
            className="bg-primary text-primary-foreground rounded-lg p-4 text-center hover:bg-primary/90 transition-colors"
          >
            تحويل تاريخ
          </Link>
          <Link href="/how-old-am-i/hijri"
            className="bg-secondary text-secondary-foreground rounded-lg p-4 text-center hover:bg-secondary/80 transition-colors"
          >
            حساب العمر
          </Link>
          <Link href={`/calendar/${hijri.year}`}
            className="bg-secondary text-secondary-foreground rounded-lg p-4 text-center hover:bg-secondary/80 transition-colors"
          >
            التقويم {hijri.year}
          </Link>
          <Link href={`/convert/hijri-to-gregorian/${hijri.year}`}
            className="bg-secondary text-secondary-foreground rounded-lg p-4 text-center hover:bg-secondary/80 transition-colors"
          >
            تحويل {hijri.year} هجري
          </Link>
        </div>
        
        {/* Content Clusters */}
        <ContentCluster type="conversion-explanation" />
        <ContentCluster type="hijri-gregorian-difference" />
        
        {/* FAQ Section */}
        <FAQSection faqs={FAQ_DATA.general.slice(0, 5)} />
        
        {/* Internal Links */}
        <InternalLinks type="cities" limit={8} />
        <InternalLinks type="calendar" limit={6} />
      </div>
    </PageLayout>
  );
}
