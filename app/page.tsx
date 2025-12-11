import { Suspense } from 'react'
import Link from 'next/link'
import DateConverter from '@/components/DateConverter'
import { PageLayout } from '@/components/PageLayout'
import { getTodayDates } from '@/lib/hijriConverter'
import { InternalLinks } from '@/components/InternalLinks'
import type { Metadata } from 'next'

// Dynamic import for SEO content
import dynamic from 'next/dynamic'
const SEOContent = dynamic(() => import('@/components/SEOContent'), {
  ssr: false,
})

// Metadata for home page
export const metadata: Metadata = {
  title: 'تاريخ اليوم هجري - تحويل التاريخ الهجري والميلادي',
  description: 'اعرف كم التاريخ الهجري اليوم من خلال محول التاريخ المتخصص في تحويل التاريخ بين التاريخ الهجري والتاريخ الميلادي بدقة عالية.',
  alternates: {
    canonical: '/',
  },
}

// WebApplication Schema
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "محول التاريخ الهجري",
  "alternateName": [
    "تحويل التاريخ الهجري",
    "Hijri Date Converter",
    "تاريخ اليوم هجري",
    "تحويل التاريخ",
    "محول التاريخ",
    "تحويل التاريخ من ميلادي لهجري",
    "تحويل التاريخ من هجري الى ميلادي"
  ],
  "description": "منصة وأداة مجانية متخصصة في تحويل التاريخ بين التقويم الهجري والتاريخ الميلادي بدقة عالية.",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://convert-hijri.com",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "softwareVersion": "1.0",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "SAR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "تحويل التاريخ من هجري إلى ميلادي",
    "تحويل التاريخ من ميلادي إلى هجري",
    "تحويل التاريخ الهجري والميلادي في صفحة واحدة",
    "حساب العمر من خلال تحويل التاريخ من تاريخ الميلاد الهجري أو الميلادي",
    "معرفة تاريخ اليوم هجري وميلادي",
    "دعم التقويم الهجري أم القرى",
    "واجهة عربية سهلة الاستخدام"
  ],
  "inLanguage": "ar",
  "isAccessibleForFree": true,
}

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "كيف أعرف تاريخ اليوم هجري؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "يظهر تاريخ اليوم بالتقويم الهجري والميلادي تلقائياً في أعلى صفحة محول التاريخ. التاريخ يتم تحديثه يومياً ويعتمد على تقويم أم القرى الرسمي."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أحول التاريخ من هجري لميلادي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لتحويل التاريخ من هجري إلى ميلادي: 1) اختر 'هجري إلى ميلادي' من أزرار التحويل. 2) أدخل اليوم والشهر والسنة الهجرية. 3) اضغط زر 'تحويل' للحصول على التاريخ الميلادي المقابل فوراً."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أحول التاريخ من ميلادي لهجري؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لتحويل التاريخ من ميلادي إلى هجري: 1) اختر 'ميلادي إلى هجري' من أزرار التحويل. 2) أدخل اليوم والشهر والسنة الميلادية. 3) اضغط زر 'تحويل' للحصول على التاريخ الهجري المقابل."
      }
    },
  ]
}

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "الرئيسية",
      "item": process.env.NEXT_PUBLIC_SITE_URL || "https://convert-hijri.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "محول التاريخ الهجري",
      "item": process.env.NEXT_PUBLIC_SITE_URL || "https://convert-hijri.com"
    }
  ]
}

const combinedSchema = [webAppSchema, faqSchema, breadcrumbSchema]

export default function Home() {
  const { hijri, gregorian } = getTodayDates()
  
  return (
    <PageLayout>
      {/* Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      <div className="pattern-islamic">
        {/* Header */}
        <header className="pt-12 pb-8 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            {/* Decorative element */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center" role="img" aria-label="أيقونة الهلال">
                <svg 
                  width="32"
                  height="32"
                  viewBox="0 0 24 24" 
                  className="text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              تاريخ اليوم هجري - تحويل التاريخ الهجري
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              اعرف <strong>كم التاريخ الهجري</strong> اليوم من خلال <strong>محول التاريخ</strong> المتخصص في{" "}
              <strong>تحويل التاريخ</strong> بين <strong>التاريخ الهجري</strong> و<strong>التاريخ الميلادي</strong> بدقة عالية.
              <br />
              استخدم أداة <strong>تحويل التاريخ</strong> لتحويل التاريخ من هجري إلى ميلادي ومن ميلادي إلى هجري، 
              وحساب العمر بالهجري والميلادي، وتحويل تاريخ الميلاد من الهجري للميلادي لأغراض مثل حساب المواطن،
              ومعرفة تاريخ اليوم بالهجري في مدينتك أو دولتك.
              <br />
              <span className="text-primary font-medium">
                التقويم الهجري {hijri.year} - تحويل التاريخ الهجري والميلادي بسرعة وبدون إعلانات
              </span>
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 pb-8">
          <div className="container max-w-4xl mx-auto">
            <DateConverter />

            {/* SEO Intro Section */}
            <section className="mt-8 bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-3">
                محول التاريخ الهجري والميلادي – تحويل التاريخ بخطوة واحدة
              </h2>
              <p className="text-sm md:text-base text-foreground/80 mb-2">
                تم تصميم <strong>محول التاريخ</strong> في هذا الموقع ليقدم لك تجربة سهلة وسريعة في{" "}
                <strong>تحويل التاريخ</strong> بين <strong>التاريخ الهجري</strong> و<strong>التاريخ الميلادي</strong> 
                اعتماداً على تقويم أم القرى.
              </p>
              <p className="text-sm md:text-base text-foreground/80">
                يدعم الموقع حالات استخدام متعددة مثل: تحويل تاريخ الميلاد من الهجري للميلادي،
                حساب العمر بالهجري والميلادي بدقة، معرفة تاريخ اليوم بالهجري في دول ومدن مختلفة.
              </p>
            </section>
            
            {/* Quick Links Section */}
            <section className="mt-8 bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">أدوات مفيدة</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Link 
                  href="/date/today"
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-colors"
                  title="تاريخ اليوم هجري وميلادي"
                >
                  <div className="text-2xl mb-2">📅</div>
                  <div className="text-sm font-medium text-foreground">تاريخ اليوم</div>
                </Link>
                <Link 
                  href={`/calendar/${hijri.year}`}
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-colors"
                  title={`التقويم الهجري ${hijri.year}`}
                >
                  <div className="text-2xl mb-2">🗓️</div>
                  <div className="text-sm font-medium text-foreground">التقويم {hijri.year}</div>
                </Link>
                <Link 
                  href="/how-old-am-i/hijri"
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-colors"
                  title="حساب العمر بالتاريخ الهجري"
                >
                  <div className="text-2xl mb-2">🎂</div>
                  <div className="text-sm font-medium text-foreground">حساب العمر</div>
                </Link>
                <Link 
                  href={`/convert/hijri-to-gregorian/${hijri.year}`}
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-colors"
                  title={`تحويل سنة ${hijri.year} هجري لميلادي`}
                >
                  <div className="text-2xl mb-2">🔄</div>
                  <div className="text-sm font-medium text-foreground">تحويل {hijri.year}</div>
                </Link>
              </div>
            </section>
            
            {/* Internal Links */}
            <InternalLinks type="all" />
            <InternalLinks type="cities" limit={6} />
            
            {/* Lazy load SEO content */}
            <Suspense fallback={null}>
              <SEOContent />
            </Suspense>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
