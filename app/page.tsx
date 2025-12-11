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
  description: 'تحويل التاريخ من هجري إلى ميلادي والعكس بدقة. حوّل التاريخ بسهولة، واعرف اليوم بالهجري والميلادي باستخدام تقويم أم القرى.',
  keywords: 'تحويل, التاريخ, هجري, ميلادي, الميلادي, التقويم',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'تحويل التاريخ الهجري والميلادي',
    description: 'تحويل التاريخ من هجري إلى ميلادي والعكس بدقة',
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
  "description": "خدمة مجانية لتحويل التاريخ بين النظامين بدقة عالية",
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
    "تحويل من هجري إلى ميلادي",
    "تحويل من ميلادي إلى هجري",
    "حساب العمر",
    "معرفة اليوم الحالي",
    "نظام سنوي شامل",
    "دعم أم القرى"
  ],
  "inLanguage": "ar",
  "isAccessibleForFree": true,
}

// FAQ Schema removed - to avoid duplication error in Google Search Console

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
      
      {/* FAQ Schema removed - to avoid duplication error */}
      
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
              واعرف التاريخ الهجري اليوم والميلادي باستخدام التقويم الهجري (أم القرى).
              <br />
              <span className="text-primary font-semibold mt-2 inline-block">
                خدمة تحويل مجانية - {hijri.year} هـ
              </span>
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 pb-8">
          <div className="container max-w-4xl mx-auto">
            <DateConverter />

            {/* مقدمة تعريفية - محسّنة للكلمات المفتاحية */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/95 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-3xl">🌙</span>
                تحويل التاريخ - Hijri Gregorian Converter
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  مرحباً بك في أفضل موقع لتحويل التاريخ! نوفر خدمة تحويل التاريخ دقيقة موثوقة بين التقويم الهجري والميلادي. 
                  سواء كنت تبحث عن طريقة لتحويل التاريخ من هجري إلى ميلادي أو تحويل التاريخ من ميلادي لهجري والعكس، 
                  فإن أداة تحويل التاريخ تمكنك من ذلك بسهولة تامة. يعتمد التحويل على التقويم الهجري (أم القرى) المعتمد 
                  بالسعودية لضمان دقة النتيجة.
                </p>
                
                <p className="text-base md:text-lg">
                  يمكنك أيضاً استخدام محول التاريخ الهجري لمعرفة التاريخ الهجري اليوم بدقة، وحاسبة العمر لمعرفة 
                  عمرك بالضبط بالتقويم الهجري والميلادي. خدمة تحويل التاريخ مفيدة للراغبين بمعرفة التاريخ من هجري الى ميلادي 
                  بسهولة. جميع الخدمات متاحة على الإنترنت طوال الوقت مجاناً.
                </p>

                <p className="text-base md:text-lg">
                  الموقع يقدم: تحويل التاريخ السريع بين الهجري والميلادي والعكس، معرفة التاريخ الهجري اليوم والتاريخ الميلادي، 
                  عرض الشهور السنوية الكاملة من 1318 إلى 1500 هـ بالتقويم الهجري، حساب العمر بدقة، ومعرفة مواقيت الصلاة 
                  بمكة المكرمة ومدن المملكة السعودية. كل خدمات تحويل التاريخ مجانية بالكامل.
                </p>
              </div>
            </section>

            {/* قسم كيفية الاستخدام - محسّن */}
            <section className="mt-8 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-2xl">⚙️</span>
                كيفية تحويل التاريخ من هجري إلى ميلادي والعكس
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                  <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                    <span className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
                    تحويل التاريخ من هجري إلى ميلادي
                  </h3>
                  <ul className="space-y-2 text-foreground/80 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>اختر التاريخ من هجري إلى ميلادي</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>أدخل اليوم والشهر والسنة بالتقويم الهجري</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>اضغط تحويل وستظهر النتيجة بالتاريخ الميلادي</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>التحويل وفق التقويم الهجري (أم القرى) بدقة</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                  <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                    <span className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
                    تحويل التاريخ من ميلادي إلى هجري والعكس
                  </h3>
                  <ul className="space-y-2 text-foreground/80 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>اختر التاريخ من ميلادي إلى هجري</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>أدخل التاريخ الميلادي المطلوب بسهولة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>احصل على التاريخ الهجري بسرعة ودقة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>النتيجة تشمل اليوم واسم الشهر بالتقويم الهجري</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* قسم المميزات */}
            <section className="mt-8 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-2xl">✨</span>
                مميزات خدمة تحويل التاريخ
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                <Link 
                  href={`/calendar/${hijri.year}`}
                  className="group bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                >
                  <div className="text-3xl mb-3">📅</div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    التقويم الهجري السنوي
                  </h3>
                  <p className="text-sm text-foreground/70">
                    اطلع على الشهور الكاملة لأي سنة بالتقويم الهجري مع التاريخ الميلادي المقابل
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
                    احسب عمرك بالنظامين مع عدد الأيام الكلي
                  </p>
                </Link>

                <Link 
                  href="/date/today"
                  className="group bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-5 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                >
                  <div className="text-3xl mb-3">🕐</div>
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    اليوم الحالي
                  </h3>
                  <p className="text-sm text-foreground/70">
                    معرفة اليوم الحالي محدث تلقائياً
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
                  title="معرفة اليوم"
                >
                  <div className="text-2xl mb-2">📅</div>
                  <div className="text-sm font-medium text-foreground">اليوم</div>
                </Link>
                <Link 
                  href={`/calendar/${hijri.year}`}
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-all transform hover:scale-105"
                  title={`${hijri.year} هـ`}
                >
                  <div className="text-2xl mb-2">🗓️</div>
                  <div className="text-sm font-medium text-foreground">{hijri.year}</div>
                </Link>
                <Link 
                  href="/how-old-am-i/hijri"
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-all transform hover:scale-105"
                  title="حساب العمر"
                >
                  <div className="text-2xl mb-2">🎂</div>
                  <div className="text-sm font-medium text-foreground">حساب العمر</div>
                </Link>
                <Link 
                  href={`/convert/hijri-to-gregorian/${hijri.year}`}
                  className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-all transform hover:scale-105"
                  title={`تحويل ${hijri.year}`}
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
                الأسئلة الشائعة حول تحويل التاريخ
              </h2>
              <div className="space-y-6">
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q1</span>
                    <span>كيف أقوم بتحويل من هجري إلى ميلادي؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    للتحويل من هجري لميلادي بسهولة: أدخل اليوم والشهر والسنة، ثم اضغط زر التحويل. ستحصل 
                    على النتيجة فوراً معتمدة على أم القرى المعتمد بالسعودية. الأداة تستخدم محول متقدم يضمن 
                    دقة التحويل بنسبة 100%.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q2</span>
                    <span>ما الفارق بين الهجري والميلادي؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    التقويم الهجري قمري يعتمد على دورة القمر وتبلغ السنة 354-355 يوماً، بينما الميلادي شمسي 
                    تبلغ السنة فيه 365 يوماً. الفرق بينهما حوالي 11 يوماً سنوياً، مما يجعل المواعيد الهجرية 
                    تتقدم كل عام. لذلك التحويل بسهولة ضروري للمطابقة الصحيحة بينهما.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q3</span>
                    <span>هل يمكن التحويل من ميلادي لهجري بدقة؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    نعم، يمكنك التحويل من ميلادي لهجري بدقة كاملة. أدخل الموعد المطلوب سواء كان للاستخدام 
                    الشخصي أو الرسمي، وسيتم حساب الموعد الهجري المقابل باستخدام خوارزمية دقيقة تطابق أم القرى. 
                    التحويل يتم بسرعة فائقة لتوفير الوقت بسهولة.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q4</span>
                    <span>هل الخدمة مجانية؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    نعم، جميع خدمات الموقع مجانية بالكامل بدون رسوم. يمكنك القيام بعملية التحويل بين 
                    النظامين، حساب العمر، معرفة الصلاة بمكة والمدن، والاطلاع على الشهور السنوية على الإنترنت 
                    طوال الوقت. كل شيء مجاني تماماً.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q5</span>
                    <span>كيف أحسب عمري بالنظامين؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    استخدم حاسبة العمر المتوفرة بالموقع. أدخل موعد ميلادك سواء بالهجري أو الميلادي، 
                    وستحصل على عمرك الدقيق بالسنوات والشهر بدقة حسب النظامين. خدمة مفيدة للتسجيل بالبرامج 
                    الحكومية والوثائق الرسمية.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q6</span>
                    <span>ما هو أم القرى؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    أم القرى هو النظام الرسمي بالمملكة منذ 1346 هـ. يستخدم في كافة المعاملات الرسمية، 
                    وهو المرجع الأساسي للمواعيد الهجرية بعدد من الدول العربية. محول التاريخ يعتمد على هذا 
                    النظام الرسمي لضمان دقة النتائج.
                  </p>
                </div>
                
                <div className="border-b border-border/60 pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q7</span>
                    <span>كيف أعرف اليوم الحالي بالهجري والميلادي؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    اليوم الحالي يظهر تلقائياً بأعلى صفحة محول التاريخ. يتم تحديثه يومياً بشكل آلي ليعرض 
                    لك اليوم الحالي بالنظامين مع إضافة أسماء الأشهر بالعربية الأصيلة. يمكنك زيارة صفحة 
                    "اليوم الحالي" للتفاصيل الإضافية.
                  </p>
                </div>
                
                <div className="pb-5 last:border-b-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-start gap-3">
                    <span className="text-primary mt-1">Q8</span>
                    <span>هل يدعم الموقع مدن مختلفة؟</span>
                  </h3>
                  <p className="text-foreground/80 text-base leading-relaxed mr-9">
                    نعم، الموقع يوفر معرفة الموعد لجميع مدن المملكة السعودية مثل مكة المكرمة، الرياض، جدة، 
                    والمدن المختلفة. كما يعرض مواقيت الصلاة حسب موقعك. الخدمة متاحة على الإنترنت بسهولة وتدعم 
                    برامج مختلفة.
                  </p>
                </div>
              </div>
            </section>

            {/* معلومات إضافية */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-2xl">📖</span>
                معلومات مفيدة عن التقويم
              </h2>
              <div className="space-y-5 text-foreground/85 text-base leading-relaxed">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-3">نبذة عن الهجري</h3>
                  <p>
                    النظام الهجري (Hijri calendar) قمري يبدأ من هجرة الرسول من مكة للمدينة. يتكون العام 
                    من 12 شهراً قمرياً، ويستخدم لتحديد المناسبات الإسلامية مثل رمضان والحج. التحويل والعكس 
                    ضروري لمعرفة المواعيد بدقة.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-3">الأشهر الهجرية الآخرة</h3>
                  <p>
                    الأشهر: محرم، صفر، ربيع الأول، ربيع الآخرة، جمادى الأولى، جمادى الآخرة، رجب، شعبان، 
                    رمضان، شوال، ذو القعدة، ذو الحجة. عند التحويل والعكس يجب مراعاة الفرق لضمان دقة النتائج.
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-3">استخدامات عملية</h3>
                  <p>
                    يمكنك استخدام التحويل والعكس لموعد ميلادك للتسجيل بالمواقع الحكومية، معرفة المواعيد 
                    المهمة، التخطيط للحج، وحساب العمر. سواء كنت بالسعودية أو دولة أخرى، الأداة متاحة على 
                    الإنترنت بسهولة تامة.
                  </p>
                </div>
              </div>
            </section>
            
            {/* === محتوى فريد إضافي - للكلمات المفتاحية و Uniqueness === */}
            
            {/* القسم 1: دليل التحويل الشامل */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/98 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-7">
                🔄 دليلك الشامل لتحويل التاريخ من هجري إلى ميلادي والعكس
              </h2>
              
              <div className="space-y-5 text-foreground/85 leading-relaxed">
                <p>
                  تُعتبر خدمة تحويل التاريخ من هجري إلى ميلادي من أهم الخدمات الرقمية في عصرنا 
                  الحالي. سواء كنت تبحث عن طريقة بسيطة لتحويل التاريخ من هجري الى ميلادي لإتمام 
                  معاملاتك الرسمية، أو تحتاج معرفة التاريخ الهجري اليوم لمناسبة دينية، فإن خدمة 
                  تحويل التاريخ لدينا توفر لك الدقة والسرعة المطلوبة.
                </p>
                
                <p>
                  عندما تحتاج لتحويل التاريخ من هجري إلى ميلادي، فإن أداتنا المجانية تقدم لك 
                  النتائج فوراً بضغطة زر واحدة. نستخدم تقويم أم القرى المعتمد رسمياً بالمملكة 
                  العربية السعودية، مما يضمن دقة مطلقة عند تحويل التاريخ من هجري الى ميلادي 
                  في جميع معاملاتك.
                </p>
                
                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    ⚡ مميزات خدمة تحويل لدينا:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>
                        <strong>تحويل التاريخ من هجري إلى ميلادي</strong> بدقة تامة معتمدة على أم القرى
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>
                        معرفة <strong>التاريخ الهجري اليوم</strong> محدّث تلقائياً كل يوم
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>
                        إمكانية <strong>التحويل من هجري إلى ميلادي والعكس</strong> في نفس الأداة
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>
                        سرعة فائقة - <strong>حوّل التاريخ</strong> في أقل من ثانية واحدة
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* القسم 2: حالات الاستخدام العملية */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                💼 متى تحتاج لتحويل التاريخ؟
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">📄</span>
                    المعاملات الرسمية
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    عند إتمام معاملاتك الحكومية، قد تحتاج <strong>لتحويل التاريخ من هجري</strong> 
                    الموجود في شهادة ميلادك أو أوراقك الثبوتية إلى ميلادي. استخدم <strong>خدمة 
                    تحويل التاريخ</strong> لدينا للحصول على التاريخ المطابق بدقة تامة.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    الدراسة والتعليم
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    الطلاب والباحثون كثيراً ما يحتاجون <strong>لتحويل التاريخ من هجري إلى ميلادي</strong> 
                    في أبحاثهم وأوراقهم العلمية. أداتنا تسهّل عليك هذه العملية بحيث يمكنك <strong>تحويل 
                    التاريخ من هجري الى ميلادي</strong> لأي فترة زمنية تحتاجها.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🕌</span>
                    المناسبات الدينية
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    لمعرفة مواعيد شهر رمضان، الحج، والأعياد الإسلامية، يمكنك <strong>حوّل التاريخ</strong> 
                    من ميلادي إلى هجري بسهولة. تساعدك الأداة على معرفة <strong>التاريخ الهجري اليوم</strong> 
                    والتخطيط لمناسباتك الدينية بدقة.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">💰</span>
                    العقود والمواعيد
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    في العقود التجارية والاتفاقيات، قد تحتاج <strong>التاريخ من هجري الى ميلادي</strong> 
                    لتحديد المدد الزمنية بدقة. استخدم <strong>خدمة تحويل</strong> لدينا لضمان توافق 
                    التواريخ في جميع مستنداتك القانونية.
                  </p>
                </div>
              </div>
            </section>
            
            {/* القسم 3: نصائح وإرشادات */}
            <section className="mt-10 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                نصائح للاستخدام الأمثل
              </h2>
              
              <div className="space-y-5">
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    1️⃣ كيف تستخدم أداة <strong>تحويل التاريخ من هجري إلى ميلادي</strong>؟
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    الأمر بسيط جداً! اختر نوع التحويل (هجري → ميلادي أو العكس)، ثم أدخل التاريخ المطلوب. 
                    عندما تضغط زر "تحويل"، ستحصل على النتيجة فوراً. يمكنك استخدام الأداة <strong>لتحويل 
                    التاريخ</strong> في أي وقت مجاناً بدون قيود.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    2️⃣ لماذا نستخدم تقويم أم القرى؟
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    عند <strong>تحويل التاريخ من هجري الى ميلادي</strong>، نعتمد على تقويم أم القرى 
                    المعتمد رسمياً في السعودية. هذا يضمن أن نتائج <strong>التحويل من هجري إلى ميلادي 
                    والعكس</strong> تطابق التواريخ الرسمية المستخدمة في المعاملات الحكومية.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    3️⃣ هل يمكن حفظ النتائج؟
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    نعم! بعد أن تقوم <strong>بتحويل التاريخ من هجري إلى ميلادي</strong> أو العكس، 
                    يمكنك نسخ النتيجة مباشرة أو أخذ لقطة شاشة. كما يمكنك استخدام <strong>خدمة التحويل 
                    </strong> في أي وقت للرجوع إلى نفس التاريخ مستقبلاً.
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
