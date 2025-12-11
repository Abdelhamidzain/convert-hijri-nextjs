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
  title: 'تحويل التاريخ الهجري والميلادي - أداة دقيقة ومجانية',
  description: 'تحويل التاريخ من هجري لميلادي والعكس بدقة. حوّل التاريخ بسهولة، واعرف التاريخ الحالي بالتقويم الهجري والميلادي باستخدام تقويم أم القرى.',
  keywords: 'تحويل, التاريخ, هجري, ميلادي, الميلادي, التقويم',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'تحويل التاريخ الهجري والميلادي',
    description: 'تحويل التاريخ من هجري لميلادي والعكس بدقة عالية',
    url: 'https://convert-hijri.com',
    type: 'website',
    locale: 'ar_SA',
  }
}

// WebApplication Schema
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "تحويل التاريخ الهجري والميلادي",
  "alternateName": [
    "Hijri Gregorian Converter",
    "أداة التحويل",
    "Hijri Date Converter",
    "Gregorian to Hijri"
  ],
  "description": "خدمة مجانية لتحويل التاريخ بين التقويم الهجري والميلادي بدقة عالية",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://convert-hijri.com",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "softwareVersion": "2.0",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "SAR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "2847",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "تحويل التاريخ من هجري إلى ميلادي",
    "تحويل التاريخ من ميلادي إلى هجري",
    "حساب العمر بالتقويمين",
    "معرفة التاريخ الحالي",
    "التقويم السنوي الشامل",
    "دعم تقويم أم القرى"
  ],
  "inLanguage": "ar",
  "isAccessibleForFree": true,
}

// FAQ Schema - 8 أسئلة فقط
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "كيف أقوم بتحويل التاريخ من هجري إلى ميلادي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لتحويل التاريخ من هجري لميلادي بسهولة: أدخل اليوم والشهر والسنة في الأداة، ثم اضغط زر التحويل. ستحصل على النتيجة فوراً معتمدة على تقويم أم القرى الرسمي المعتمد بالمملكة السعودية."
      }
    },
    {
      "@type": "Question",
      "name": "ما الفارق بين التقويم الهجري والميلادي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "التقويم الهجري قمري يعتمد على دورة القمر، بينما الميلادي شمسي. الفرق بينهما حوالي 11 يوماً سنوياً، لذلك تحويل التاريخ ضروري للمطابقة الصحيحة."
      }
    },
    {
      "@type": "Question",
      "name": "هل يمكن تحويل التاريخ من ميلادي لهجري بدقة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، يمكنك التحويل من ميلادي إلى هجري بدقة كاملة. أدخل التاريخ المطلوب سواء كان للاستخدام الشخصي أو الرسمي، وستحصل على التحويل الدقيق."
      }
    },
    {
      "@type": "Question",
      "name": "هل خدمة التحويل مجانية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، جميع خدمات الموقع مجانية. يمكنك القيام بعملية التحويل، معرفة التاريخ الحالي، وحساب العمر بدون رسوم."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أحسب عمري بالتقويم الهجري؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "استخدم حاسبة العمر المتوفرة بالموقع. أدخل تاريخ ميلادك سواء بالهجري أو الميلادي، وستحصل على عمرك الدقيق بالتقويمين."
      }
    },
    {
      "@type": "Question",
      "name": "ما هو تقويم أم القرى؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "تقويم أم القرى هو التقويم الهجري الرسمي بالمملكة العربية السعودية. يستخدم في المعاملات الرسمية، والموقع يعتمد عليه لضمان دقة التحويل."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أعرف التاريخ الحالي بالهجري والميلادي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "التاريخ الحالي يظهر تلقائياً بأعلى الصفحة. يتم تحديثه يومياً ليعرض التاريخ بالتقويمين مع أسماء الأشهر بالعربية."
      }
    },
    {
      "@type": "Question",
      "name": "هل يدعم الموقع مدن مختلفة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، الموقع يوفر معرفة التاريخ لجميع مدن المملكة مثل مكة المكرمة والرياض، مع عرض مواقيت الصلاة."
      }
    }
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
      "name": "تحويل التاريخ",
      "item": process.env.NEXT_PUBLIC_SITE_URL || "https://convert-hijri.com"
    }
  ]
}

export default function Home() {
  const { hijri, gregorian } = getTodayDates()
  
  return (
    <PageLayout>
      {/* WebApplication Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      
      {/* FAQ Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Breadcrumb Schema */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="pattern-islamic">
        {/* Header */}
        <header className="pt-12 pb-8 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            {/* Decorative element */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center" role="img" aria-label="هلال إسلامي">
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
              تحويل التاريخ الهجري والميلادي بسهولة ودقة
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              استخدم أداة تحويل التاريخ الأدق على الإنترنت. حوّل التاريخ من هجري لميلادي والعكس بسهولة، 
              واعرف التاريخ الحالي بالتقويم الهجري والميلادي باستخدام تقويم أم القرى الرسمي.
              <br />
              <span className="text-primary font-semibold mt-2 inline-block">
                خدمة مجانية - التقويم الهجري {hijri.year} هـ
              </span>
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 pb-8">
          <div className="container max-w-4xl mx-auto">
            <DateConverter />

            {/* مقدمة تعريفية */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/95 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-3xl">🌙</span>
                تحويل التاريخ - Hijri Gregorian Converter
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  مرحباً بك في أفضل موقع لتحويل التاريخ! نوفر خدمة دقيقة موثوقة لتحويل التاريخ بين 
                  التقويم الهجري والميلادي. سواء كنت تبحث عن طريقة لتحويل تاريخ ميلادك من ميلادي لهجري 
                  والعكس، فإن الأداة تمكنك من ذلك بسهولة تامة. يعتمد التحويل على تقويم أم القرى المعتمد 
                  بالمملكة السعودية لضمان دقة النتيجة.
                </p>
                
                <p className="text-base md:text-lg">
                  يمكنك أيضا استخدام حاسبة العمر لمعرفة عمرك بالضبط بالتقويمين. هذه خدمة مفيدة للراغبين 
                  بمعرفة عدد السنوات والأشهر والأيام بدقة. جميع الخدمات مجانية ومتاحة على الإنترنت طوال الوقت.
                </p>

                <p className="text-base md:text-lg">
                  الموقع يقدم: التحويل السريع، معرفة التاريخ الحالي، عرض التقويم السنوي الكامل من 1318 إلى 
                  1500 هـ، حساب العمر بدقة، ومعرفة مواقيت الصلاة في مكة المكرمة ومدن المملكة. كل الخدمات 
                  مجانية بالكامل.
                </p>
              </div>
            </section>

            {/* قسم كيفية الاستخدام */}
            <section className="mt-8 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-2xl">⚙️</span>
                كيفية استخدام الأداة
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                  <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                    <span className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
                    من هجري إلى ميلادي
                  </h3>
                  <ul className="space-y-2 text-foreground/80 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>اختر "هجري إلى ميلادي" (Hijri to Gregorian)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>أدخل اليوم والشهر والسنة الهجرية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>اضغط "تحويل" وستظهر النتيجة بالتقويم الميلادي</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>التحويل وفق تقويم أم القرى</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                  <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                    <span className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
                    من ميلادي إلى هجري
                  </h3>
                  <ul className="space-y-2 text-foreground/80 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>اختر "ميلادي إلى هجري" (Gregorian to Hijri)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>أدخل التاريخ الميلادي المطلوب</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>احصل على التاريخ الهجري بسرعة ودقة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>النتيجة تشمل اليوم، اسم الشهر، والسنة</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* قسم المميزات */}
            <section className="mt-8 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-2xl">✨</span>
                مميزات إضافية
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                <Link 
                  href={`/calendar/${hijri.year}`}
                  className="group bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                >
                  <div className="text-3xl mb-3">📅</div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    التقويم السنوي
                  </h3>
                  <p className="text-sm text-foreground/70">
                    اطلع على التقويم الكامل لأي سنة هجرية مع التواريخ المقابلة
                  </p>
                </Link>

                <Link 
                  href="/how-old-am-i/hijri"
                  className="group bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                >
                  <div className="text-3xl mb-3">🎂</div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    حاسبة العمر
                  </h3>
                  <p className="text-sm text-foreground/70">
                    احسب عمرك بالتقويمين مع عدد الأيام الكلي
                  </p>
                </Link>

                <Link 
                  href="/date/today"
                  className="group bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                >
                  <div className="text-3xl mb-3">🕐</div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    التاريخ الحالي
                  </h3>
                  <p className="text-sm text-foreground/70">
                    معرفة التاريخ الحالي محدث تلقائياً كل يوم
                  </p>
                </Link>
              </div>
            </section>

            {/* روابط سريعة */}
            <section className="mt-8 bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">أدوات سريعة</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Link 
                  href="/date/today"
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-all transform hover:scale-105"
                  title="معرفة التاريخ الحالي"
                >
                  <div className="text-2xl mb-2">📅</div>
                  <div className="text-sm font-medium text-foreground">التاريخ الحالي</div>
                </Link>
                <Link 
                  href={`/calendar/${hijri.year}`}
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-all transform hover:scale-105"
                  title={`التقويم ${hijri.year} هـ`}
                >
                  <div className="text-2xl mb-2">🗓️</div>
                  <div className="text-sm font-medium text-foreground">تقويم {hijri.year}</div>
                </Link>
                <Link 
                  href="/how-old-am-i/hijri"
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-all transform hover:scale-105"
                  title="حساب العمر بالتقويم"
                >
                  <div className="text-2xl mb-2">🎂</div>
                  <div className="text-sm font-medium text-foreground">حساب العمر</div>
                </Link>
                <Link 
                  href={`/convert/hijri-to-gregorian/${hijri.year}`}
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-all transform hover:scale-105"
                  title={`تحويل سنة ${hijri.year}`}
                >
                  <div className="text-2xl mb-2">🔄</div>
                  <div className="text-sm font-medium text-foreground">تحويل {hijri.year}</div>
                </Link>
              </div>
            </section>
            
            {/* Internal Links */}
            <InternalLinks type="all" />
            <InternalLinks type="cities" limit={6} />
            
            {/* قسم الأسئلة الشائعة */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/98 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-7 flex items-center gap-3">
                <span className="text-primary text-3xl">❓</span>
                الأسئلة الشائعة
              </h2>
              <div className="space-y-6">
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q1</span>
                    <span>كيف أقوم بتحويل التاريخ من هجري إلى ميلادي؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    لتحويل التاريخ من هجري لميلادي بسهولة: أدخل اليوم والشهر والسنة في الأداة، ثم اضغط زر 
                    التحويل. ستحصل على النتيجة فوراً معتمدة على تقويم أم القرى الرسمي المعتمد بالمملكة 
                    السعودية. الأداة تستخدم محول متقدم يضمن دقة التحويل.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q2</span>
                    <span>ما الفارق بين التقويم الهجري والميلادي؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    التقويم الهجري قمري يعتمد على دورة القمر وتبلغ السنة الهجرية 354-355 يوماً، بينما 
                    الميلادي شمسي تبلغ السنة فيه 365 يوماً. الفرق بينهما حوالي 11 يوماً سنوياً، مما يجعل 
                    التواريخ الهجرية تتقدم كل عام. لذلك تحويل التاريخ بسهولة ضروري للمطابقة الصحيحة.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q3</span>
                    <span>هل يمكن تحويل التاريخ من ميلادي لهجري بدقة؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    نعم، يمكنك التحويل من ميلادي إلى هجري بدقة كاملة. أدخل التاريخ المطلوب سواء كان للاستخدام 
                    الشخصي أو الرسمي، وسيتم حساب التاريخ الهجري المقابل باستخدام خوارزمية دقيقة تطابق تقويم 
                    أم القرى. التحويل يتم بسرعة فائقة.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q4</span>
                    <span>هل خدمة التحويل مجانية؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    نعم، جميع خدمات الموقع مجانية بالكامل بدون رسوم. يمكنك القيام بعملية التحويل بين 
                    التقويمين، حساب العمر، معرفة مواقيت الصلاة في مكة المكرمة ومدن المملكة، والاطلاع على 
                    التقويم السنوي على الإنترنت طوال الوقت.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q5</span>
                    <span>كيف أحسب عمري بالتقويم الهجري؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    استخدم حاسبة العمر المتوفرة بالموقع. أدخل تاريخ ميلادك سواء بالهجري أو الميلادي، وستحصل 
                    على عمرك الدقيق بالسنوات والشهر والأيام حسب التقويمين. هذه الخدمة مفيدة للتسجيل في برامج 
                    حكومية.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q6</span>
                    <span>ما هو تقويم أم القرى؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    تقويم أم القرى هو التقويم الهجري الرسمي بالمملكة العربية السعودية منذ 1346 هـ. يستخدم 
                    في كافة المعاملات الرسمية، وهو المرجع الأساسي للتواريخ الهجرية في عدد من الدول العربية. 
                    محول التاريخ يعتمد على هذا التقويم الرسمي لضمان دقة النتائج.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q7</span>
                    <span>كيف أعرف التاريخ الحالي بالهجري والميلادي؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    التاريخ الحالي يظهر تلقائياً بأعلى صفحة محول التاريخ. يتم تحديثه يومياً بشكل آلي ليعرض 
                    لك اليوم الحالي بالتقويمين مع إضافة أسماء الأشهر بالعربية الأصيلة. يمكنك زيارة صفحة 
                    "التاريخ الحالي" للتفاصيل.
                  </p>
                </div>
                
                <div className="pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q8</span>
                    <span>هل يدعم الموقع مدن مختلفة؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    نعم، الموقع يوفر معرفة التاريخ لجميع مدن المملكة السعودية مثل مكة المكرمة، الرياض، جدة، 
                    والقرى المختلفة. كما يعرض مواقيت الصلاة حسب موقعك. الخدمة متاحة على الإنترنت وتدعم برامج 
                    مختلفة مثل IHijri.
                  </p>
                </div>
              </div>
            </section>

            {/* معلومات إضافية */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-2xl">📖</span>
                معلومات مفيدة
              </h2>
              <div className="space-y-5 text-foreground/85 text-base leading-relaxed">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-3">نبذة عن التقويم الهجري</h3>
                  <p>
                    التقويم الهجري (Hijri calendar) قمري يبدأ من هجرة الرسول من مكة المكرمة للمدينة. 
                    يتكون العام من 12 شهراً قمرياً، ويستخدم في تحديد المناسبات الإسلامية مثل رمضان والحج. 
                    تحويل التاريخ بين التقويمين ضروري لمعرفة التواريخ بدقة.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-3">الأشهر الهجرية والميلادية</h3>
                  <p>
                    الأشهر الهجرية: محرم، صفر، ربيع الأول، ربيع الآخرة، جمادى الأولى، جمادى الآخرة، رجب، 
                    شعبان، رمضان، شوال، ذو القعدة، ذو الحجة. عند التحويل يجب مراعاة الفرق في عدد الأيام 
                    لضمان دقة النتائج.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-3">استخدامات عملية</h3>
                  <p>
                    يمكنك استخدام محول التاريخ لتحويل تاريخ ميلادك للتسجيل بالمواقع الحكومية، معرفة المواعيد 
                    المهمة، التخطيط للحج، وحساب العمر. سواء كنت بالمملكة أو دولة أخرى، الأداة متاحة على 
                    الإنترنت بسهولة تامة.
                  </p>
                </div>
              </div>
            </section>
            
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
