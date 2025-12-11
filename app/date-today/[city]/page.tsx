'use client'

import { useMemo } from 'react';
import Link from 'next/link';
import { getTodayDates } from '@/lib/hijriConverter';
import { generateCityDateSEO, FAQ_DATA, CITIES } from '@/lib/seoData';
import { SEOHead, generateWebPageSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/components/SEOHead';
import { FAQSection } from '@/components/FAQSection';
import { InternalLinks } from '@/components/InternalLinks';
import { PageLayout } from '@/components/PageLayout';

export default function CityDate() {
  const { city } = useParams<{ city: string }>();
  const cityData = CITIES.find(c => c.slug === city);
  
  // Redirect if city not found
  if (!cityData) {
    return <Navigate to="/date/today" replace />;
  }
  
  const seo = generateCityDateSEO(city!);
  const { hijri, gregorian } = getTodayDates();
  
  const schema = useMemo(() => [{
    '@context': 'https://schema.org',
    '@graph': [
      generateWebPageSchema(seo),
      generateBreadcrumbSchema([
        { name: 'الرئيسية', url: '/' },
        { name: 'تاريخ اليوم', url: '/date/today' },
        { name: cityData.name, url: `/date-today/${city}` }
      ]),
      generateFAQSchema(FAQ_DATA.general.slice(0, 3))
    ]
  }], [seo, city, cityData.name]);
  
  return (
    <PageLayout>
      <SEOHead seo={seo} schema={schema} />
      
      <header className="bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary">الرئيسية</Link>
            <span>/</span>
            <Link href="/date/today" className="hover:text-primary">تاريخ اليوم</Link>
            <span>/</span>
            <span className="text-foreground">{cityData.name}</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{seo.h1}</h1>
          <p className="text-muted-foreground mt-2">{seo.intro}</p>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        {/* City Info */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8 text-center">
          <div className="text-4xl mb-4">🏙️</div>
          <h2 className="text-xl font-bold text-foreground mb-2">{cityData.name}</h2>
          <p className="text-muted-foreground">{cityData.country}</p>
        </div>
        
        {/* Today's Date Display */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-sm text-muted-foreground mb-2">التاريخ الهجري في {cityData.name}</div>
            <div className="text-3xl font-bold text-primary mb-2">
              {hijri.day} {hijri.monthName} {hijri.year} هـ
            </div>
            <div className="text-muted-foreground">{hijri.weekday}</div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="text-sm text-muted-foreground mb-2">التاريخ الميلادي في {cityData.name}</div>
            <div className="text-3xl font-bold text-foreground mb-2">
              {gregorian.day} {gregorian.monthName} {gregorian.year} م
            </div>
            <div className="text-muted-foreground">{gregorian.weekday}</div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
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
        </div>
        
        {/* Other Cities */}
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4 text-foreground">تاريخ اليوم في مدن أخرى</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CITIES.filter(c => c.slug !== city).slice(0, 8).map(c => (
              <Link 
                key={c.slug}
                to={`/date-today/${c.slug}`}
                className="block p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-sm text-center"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>
        
        {/* FAQ */}
        <FAQSection faqs={FAQ_DATA.general.slice(0, 3)} />
        
        {/* Internal Links */}
        <InternalLinks type="all" />
      </div>
    </PageLayout>
  );
}
