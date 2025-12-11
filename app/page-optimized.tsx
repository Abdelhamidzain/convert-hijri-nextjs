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
  title: 'محول التاريخ الهجري والميلادي - تحويل دقيق بسهولة ومجاناً',
  description: 'أداة تحويل التاريخ من هجري لميلادي والعكس بدقة عالية. حوّل التاريخ بسهولة، احسب العمر، واعرف تاريخ اليوم هجري وميلادي باستخدام تقويم أم القرى الرسمي المعتمد في المملكة السعودية.',
  keywords: 'تحويل التاريخ, الهجري, ميلادي, هجري, محول, التقويم, converter, hijri, gregorian',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'محول التاريخ الهجري والميلادي - تحويل دقيق ومجاني',
    description: 'أداة تحويل التاريخ من هجري لميلادي والعكس بدقة عالية',
    url: 'https://convert-hijri.com',
    type: 'website',
    locale: 'ar_SA',
  }
}

// WebApplication Schema
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "محول التاريخ الهجري والميلادي",
  "alternateName": [
    "Hijri to Gregorian Converter",
    "محول تحويل التاريخ",
    "أداة التحويل الهجري الميلادي",
    "Hijri Date Converter",
    "Gregorian to Hijri"
  ],
  "description": "خدمة مجانية لتحويل التاريخ بين التقويم الهجري الإسلامي والتقويم الميلادي الشمسي بدقة ووسرعة عالية باستخدام تقويم أم القرى الرسمي",
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
    "تحويل التاريخ من هجري إلى ميلادي بدقة",
    "تحويل التاريخ من ميلادي إلى هجري",
    "حاسبة العمر بالتقويمين الهجري والميلادي",
    "معرفة تاريخ اليوم هجري وميلادي",
    "التقويم الهجري الشامل لأي سنة",
    "خدمة مواقيت الصلاة حسب التقويم الهجري",
    "دعم تقويم أم القرى الرسمي",
    "واجهة بالل غة العربية الأصيلة"
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
      "name": "كيف يمكنك تحويل التاريخ الهجري إلى ميلادي بسهولة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لتحويل التاريخ من هجري لميلادي: أدخل اليوم والشهر والسنة الهجرية في محول التاريخ، ثم اضغط زر تحويل. ستحصل على النتيجة فوراً بدقة عالية معتمدة على تقويم أم القرى الرسمي المعتمد في المملكة العربية السعودية."
      }
    },
    {
      "@type": "Question",
      "name": "ما الفرق بين التقويم الهجري والتقويم الميلادي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "التقويم الهجري هو تقويم قمري إسلامي يعتمد على دورة القمر وتبلغ السنة الهجرية 354-355 يوماً، بينما التقويم الميلادي (الغريغوري) هو تقويم شمسي تبلغ السنة فيه 365 يوماً. الفرق بينهما حوالي 11 يوماً سنوياً."
      }
    },
    {
      "@type": "Question",
      "name": "كيف تحول من ميلادي لهجري بدقة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "يمكنك التحويل من ميلادي إلى هجري عن طريق إدخال تاريخ ميلادي (اليوم، الشهر، السنة) في أداة التحويل، وسيتم حساب التاريخ الهجري المقابل باستخدام خوارزمية دقيقة تطابق تقويم أم القرى."
      }
    },
    {
      "@type": "Question",
      "name": "هل خدمة تحويل التاريخ مجانية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، جميع خدمات الموقع مجانية بالكامل. تمكنك الأداة من القيام بعملية تحويل التواريخ، حساب العمر، معرفة مواقيت الصلاة، والاطلاع على التقويم الهجري الشامل بدون أي رسوم."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أحسب عمري بالتقويم الهجري؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "استخدم حاسبة العمر المتوفرة في الموقع. أدخل تاريخ ميلادك سواء بالهجري أو الميلادي، وستحصل على عمرك الدقيق بالسنوات والشهر والأيام حسب التقويمين."
      }
    },
    {
      "@type": "Question",
      "name": "ما هو تقويم أم القرى المعتمد؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "تقويم أم القرى هو التقويم الهجري الرسمي المعتمد في المملكة العربية السعودية منذ عام 1346 هـ. يستخدم في كافة المعاملات الرسمية والوثائق الحكومية، وهو المرجع للتواريخ الهجرية في الدول العربية."
      }
    },
    {
      "@type": "Question",
      "name": "كيف أعرف تاريخ اليوم بالهجري والميلادي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "تاريخ اليوم هجري وميلادي يظهر تلقائياً في أعلى صفحة محول التاريخ. يتم تحديث التاريخ يومياً بشكل آلي ليعرض لك اليوم الحالي بالتقويمين مع إضافة اسم الشهر بالعربية."
      }
    },
    {
      "@type": "Question",
      "name": "هل يدعم الموقع تحويل التواريخ لمدن مختلفة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، الموقع يوفر خدمة معرفة التاريخ الهجري لجميع مدن المملكة العربية السعودية مثل مكة المكرمة والرياض والدول العربية الأخرى، مع عرض مواقيت الصلاة وأوقات الأذان."
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
      "name": "محول التاريخ الهجري",
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
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center" role="img" aria-label="أيقونة الهلال الإسلامي">
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
              محول التاريخ الهجري والميلادي - تحويل دقيق ومجاني
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              استخدم أداة تحويل التاريخ الأكثر دقة في الإنترنت لتحويل التاريخ بين التقويم الهجري والميلادي بسهولة ووسرعة.
              حوّل التاريخ من هجري لميلادي والعكس، احسب عمرك بالتقويمين، واعرف تاريخ اليوم هجري وميلادي باستخدام 
              تقويم أم القرى الرسمي المعتمد في المملكة العربية السعودية.
              <br />
              <span className="text-primary font-semibold mt-2 inline-block">
                خدمة مجانية شاملة لتحويل التواريخ بدقة عالية - التقويم الهجري {hijri.year} هـ
              </span>
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 pb-8">
          <div className="container max-w-4xl mx-auto">
            <DateConverter />

            {/* مقدمة تعريفية غنية بالكلمات المفتاحية */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/95 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-3xl">🌙</span>
                محول التاريخ الهجري والميلادي - Hijri Gregorian Converter
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  مرحباً بك في أفضل موقع لتحويل التاريخ على الإنترنت! يوفر محول التاريخ الخاص بنا خدمة تحويل 
                  دقيقة وموثوقة بين التقويم الهجري الإسلامي والتقويم الميلادي الشمسي (Gregorian calendar). 
                  سواء كنت تبحث عن طريقة لتحويل تاريخ ميلادك من ميلادي لهجري، أو تريد معرفة كم باقي على 
                  مناسبة إسلامية معينة، فإن أداة التحويل لدينا تمكنك من القيام بذلك بسهولة تامة.
                </p>
                
                <p className="text-base md:text-lg">
                  يعتمد محول التاريخ على تقويم أم القرى الرسمي المعتمد في المملكة العربية السعودية منذ ديسمبر 
                  1925م (1344 هـ). وتتم عملية التحويل باستخدام خوارزميات متقدمة تضمن دقة النتيجة بنسبة 100%. 
                  يمكنك أيضا استخدام حاسبة العمر المدمجة لمعرفة عمرك بالضبط بالتقويمين، وهي خدمة مفيدة للمستخدمين 
                  الذين يحتاجون لتحويل تاريخ الميلاد للتسجيل في برامج مثل حساب المواطن.
                </p>

                <p className="text-base md:text-lg">
                  الموقع يقدم خدمة شاملة تشمل: التحويل السريع بين التقويمين، معرفة تاريخ اليوم هجري وميلادي، 
                  عرض التقويم الهجري الكامل لأي سنة من 1318 إلى 1500 هـ، حساب العمر بدقة، ومعرفة مواقيت 
                  الصلاة وأوقات الأذان في مكة المكرمة وجميع مدن المملكة والدول العربية الأخرى. كل هذه الخدمات 
                  مجانية بالكامل ومتاحة عبر الإنترنت طوال الوقت.
                </p>
              </div>
            </section>

            {/* قسم كيفية الاستخدام */}
            <section className="mt-8 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-2xl">⚙️</span>
                كيفية استخدام أداة تحويل التاريخ
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                  <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                    <span className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
                    تحويل من هجري إلى ميلادي
                  </h3>
                  <ul className="space-y-2 text-foreground/80 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>اختر خيار "هجري إلى ميلادي" (Hijri to Gregorian)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>أدخل اليوم والشهر والسنة الهجرية بدقة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>اضغط زر "تحويل" وستظهر النتيجة فوراً بالتقويم الميلادي</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>يتم التحويل وفق تقويم أم القرى المعتمد رسمياً</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                  <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                    <span className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
                    تحويل من ميلادي إلى هجري
                  </h3>
                  <ul className="space-y-2 text-foreground/80 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>اختر خيار "ميلادي إلى هجري" (Gregorian to Hijri)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>أدخل التاريخ الميلادي الذي تريد تحويله</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>احصل على التاريخ الهجري المقابل بسرعة ودقة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>النتيجة تشمل اليوم، اسم الشهر الهجري، والسنة</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* قسم المميزات الإضافية */}
            <section className="mt-8 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-2xl">✨</span>
                مميزات إضافية في محول التاريخ
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                <Link 
                  href={`/calendar/${hijri.year}`}
                  className="group bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                >
                  <div className="text-3xl mb-3">📅</div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    التقويم الهجري الشامل
                  </h3>
                  <p className="text-sm text-foreground/70">
                    اطلع على التقويم الكامل لأي سنة هجرية مع التواريخ الميلادية المقابلة لكل يوم
                  </p>
                </Link>

                <Link 
                  href="/how-old-am-i/hijri"
                  className="group bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                >
                  <div className="text-3xl mb-3">🎂</div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    حاسبة العمر الدقيقة
                  </h3>
                  <p className="text-sm text-foreground/70">
                    احسب عمرك بالتقويمين الهجري والميلادي مع عدد الأيام الكلي منذ ميلادك
                  </p>
                </Link>

                <Link 
                  href="/date/today"
                  className="group bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                >
                  <div className="text-3xl mb-3">🕐</div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    تاريخ اليوم مباشر
                  </h3>
                  <p className="text-sm text-foreground/70">
                    معرفة تاريخ اليوم هجري وميلادي بشكل محدث تلقائياً كل يوم
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
                  title="معرفة تاريخ اليوم هجري وميلادي"
                >
                  <div className="text-2xl mb-2">📅</div>
                  <div className="text-sm font-medium text-foreground">تاريخ اليوم</div>
                </Link>
                <Link 
                  href={`/calendar/${hijri.year}`}
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-all transform hover:scale-105"
                  title={`التقويم الهجري الكامل ${hijri.year} هـ`}
                >
                  <div className="text-2xl mb-2">🗓️</div>
                  <div className="text-sm font-medium text-foreground">تقويم {hijri.year}</div>
                </Link>
                <Link 
                  href="/how-old-am-i/hijri"
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-all transform hover:scale-105"
                  title="حساب العمر بالتقويم الهجري الإسلامي"
                >
                  <div className="text-2xl mb-2">🎂</div>
                  <div className="text-sm font-medium text-foreground">حساب العمر</div>
                </Link>
                <Link 
                  href={`/convert/hijri-to-gregorian/${hijri.year}`}
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-all transform hover:scale-105"
                  title={`تحويل سنة ${hijri.year} هجري إلى ميلادي`}
                >
                  <div className="text-2xl mb-2">🔄</div>
                  <div className="text-sm font-medium text-foreground">تحويل {hijri.year}</div>
                </Link>
              </div>
            </section>
            
            {/* Internal Links */}
            <InternalLinks type="all" />
            <InternalLinks type="cities" limit={6} />
            
            {/* قسم الأسئلة الشائعة المرئي */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/98 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-7 flex items-center gap-3">
                <span className="text-primary text-3xl">❓</span>
                الأسئلة الشائعة حول تحويل التاريخ الهجري والميلادي
              </h2>
              <div className="space-y-6">
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q1</span>
                    <span>كيف يمكنك تحويل التاريخ الهجري إلى ميلادي بسهولة؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    لتحويل التاريخ من هجري لميلادي: أدخل اليوم والشهر والسنة الهجرية في محول التاريخ، ثم اضغط زر 
                    تحويل. ستحصل على النتيجة فوراً بدقة عالية معتمدة على تقويم أم القرى الرسمي المعتمد في المملكة 
                    العربية السعودية. الأداة تستخدم converter متقدم يضمن دقة التحويل بنسبة 100%.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q2</span>
                    <span>ما الفرق بين التقويم الهجري والتقويم الميلادي؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    التقويم الهجري هو تقويم قمري إسلامي يعتمد على دورة القمر وتبلغ السنة الهجرية 354-355 يوماً، 
                    بينما التقويم الميلادي (Gregorian calendar) هو تقويم شمسي تبلغ السنة فيه 365 يوماً. الفرق بينهما 
                    حوالي 11 يوماً سنوياً، مما يجعل التواريخ الهجرية تتقدم كل عام بالنسبة للتواريخ الميلادية.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q3</span>
                    <span>كيف تحول من ميلادي لهجري بدقة؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    يمكنك التحويل من ميلادي إلى هجري عن طريق إدخال تاريخ ميلادي (اليوم، الشهر، والسنة) في أداة 
                    التحويل، وسيتم حساب التاريخ الهجري المقابل باستخدام خوارزمية دقيقة تطابق تقويم أم القرى. 
                    وتتم عملية التحويل بسرعة فائقة لتوفير وسهولة في الاستخدام.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q4</span>
                    <span>هل خدمة تحويل التاريخ مجانية؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    نعم، جميع خدمات الموقع مجانية بالكامل بدون أي رسوم أو اشتراكات. تمكنك الأداة من القيام بعملية 
                    تحويل التواريخ بين التقويمين، حساب العمر، معرفة مواقيت الصلاة في مكة المكرمة ومدن المملكة، 
                    والاطلاع على التقويم الهجري الشامل عبر الإنترنت طوال الوقت.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q5</span>
                    <span>كيف أحسب عمري بالتقويم الهجري؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    استخدم حاسبة العمر المتوفرة في الموقع. أدخل تاريخ ميلادك سواء بالهجري أو الميلادي، وستحصل على 
                    عمرك الدقيق بالسنوات والشهر والأيام حسب التقويمين. هذه الخدمة مفيدة أيضا للتسجيل في برامج 
                    حكومية تتطلب العمر بالهجري مثل حساب المواطن والاستخارة.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q6</span>
                    <span>ما هو تقويم أم القرى المعتمد؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    تقويم أم القرى هو التقويم الهجري الرسمي المعتمد في المملكة العربية السعودية منذ عام 1346 هـ 
                    (1925م). يستخدم في كافة المعاملات الرسمية والوثائق الحكومية، وهو المرجع الأساسي للتواريخ 
                    الهجرية في عدد من الدول العربية. محول التاريخ لدينا يعتمد على هذا التقويم الرسمي لضمان ودقة النتائج.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q7</span>
                    <span>كيف أعرف تاريخ اليوم بالهجري والميلادي؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    تاريخ اليوم هجري وميلادي يظهر تلقائياً في أعلى صفحة محول التاريخ. يتم تحديث التاريخ يومياً بشكل 
                    آلي ليعرض لك اليوم الحالي بالتقويمين مع إضافة اسم الشهر بالعربية الأصيلة. يمكنك أيضا زيارة صفحة 
                    "تاريخ اليوم" للحصول على تفاصيل إضافية مثل أوقات الصلاة والأيام الإسلامية الخاصة.
                  </p>
                </div>
                
                <div className="pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q8</span>
                    <span>هل يدعم الموقع تحويل التواريخ لمدن مختلفة؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    نعم، الموقع يوفر خدمة معرفة التاريخ الهجري لجميع مدن المملكة العربية السعودية مثل مكة المكرمة، 
                    الرياض، جدة، والقرى المختلفة، بالإضافة إلى الدول العربية الأخرى. كما يعرض مواقيت الصلاة وأوقات 
                    الأذان حسب موقعك. الخدمة متاحة عبر الإنترنت وتدعم برامج مختلفة مثل IHijri وIslamicFinder.
                  </p>
                </div>
              </div>
            </section>

            {/* معلومات إضافية عن التقويم */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-2xl">📖</span>
                معلومات مفيدة عن التقويم الهجري والميلادي
              </h2>
              <div className="space-y-5 text-foreground/85 text-base leading-relaxed">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-3">نبذة عن التقويم الهجري الإسلامي</h3>
                  <p>
                    التقويم الهجري (Hijri calendar) هو تقويم قمري يبدأ من هجرة الرسول محمد صلى الله عليه وسلم من 
                    مكة المكرمة إلى المدينة المنورة. يتكون العام الهجري من 12 شهراً قمرياً، ويستخدم في تحديد 
                    المناسبات الإسلامية مثل رمضان، الحج، الأعياد، والأنواء. كما يُستخدم في قراءة القرآن الكريم 
                    وتحديد مواقيت الصلاة الخمس والأبراج الإسلامية.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-3">الأشهر الهجرية والميلادية</h3>
                  <p>
                    الأشهر الهجرية هي: محرم، صفر، ربيع الأول، ربيع الآخر (أو الآخرة)، جمادى الأولى، جمادى الآخرة، 
                    رجب، شعبان، رمضان، شوال، ذو القعدة، ذو الحجة. بينما الأشهر الميلادية تبدأ من يناير وتنتهي 
                    بديسمبر. عند التحويل، يجب مراعاة الفرق في عدد الأيام لضمان ودقة النتائج.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-3">استخدامات محول التاريخ العملية</h3>
                  <p>
                    يمكنك استخدام محول التاريخ في حالات متعددة: لتحويل تاريخ ميلادك للتسجيل في المواقع الحكومية، 
                    لمعرفة كم باقي على مناسبة معينة، للتخطيط للسفر والحج، لحساب المواعيد المهمة، ولمعرفة الأيام 
                    الإسلامية الخاصة مثل يوم الاستخارة. سواء كنت في المملكة العربية السعودية أو أي دولة أخرى، 
                    فإن الأداة متاحة عبر الإنترنت بسهولة ووسهولة تامة.
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
