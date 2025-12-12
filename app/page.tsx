import DateConverter from '@/components/DateConverter'
import { PageLayout } from '@/components/PageLayout'
import type { Metadata } from 'next'
import SEOContent from '@/components/SEOContent'

const CURRENT_HIJRI_YEAR = 1446;

export const metadata: Metadata = {
  title: 'تحويل التاريخ الهجري والميلادي - محول دقيق ومجاني',
  description: 'أداة للتحويل من هجري إلى ميلادي بدقة متناهية. اكتشف تاريخك الحالي عبر تقويم أم القرى.',
  keywords: 'تحويل, التاريخ, هجري, ميلادي, التقويم, محول, ihijri',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'محول التاريخ الهجري والميلادي',
    description: 'حوّل من هجري إلى ميلادي بدقة وسرعة فائقة',
    url: 'https://convert-hijri.com',
    type: 'website',
    locale: 'ar_SA',
  }
}

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "محول التاريخ الهجري والميلادي",
  "alternateName": ["Hijri Date Converter", "Gregorian to Hijri", "ihijri", "islamicfinder dates"],
  "description": "خدمة مجانية للتحويل بين النظامين القمري والشمسي",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://convert-hijri.com",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "SAR" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "2847"
  },
  "inLanguage": "ar",
  "isAccessibleForFree": true,
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "الرئيسية",
    "item": process.env.NEXT_PUBLIC_SITE_URL || "https://convert-hijri.com"
  }]
}

export default function Home() {
  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pattern-islamic">
        <header className="pt-12 pb-8 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" className="text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              تحويل التاريخ الهجري والميلادي
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              موقع المحول الأكثر دقة على الإنترنت. حوّل بين النظام القمري والشمسي بسرعة، 
              واطلع على تاريخك الحالي عبر تقويم أم القرى الرسمي.
              <br />
              <span className="text-primary font-semibold mt-2 inline-block">
                خدمة مجانية للمستخدمين - {CURRENT_HIJRI_YEAR} هـ
              </span>
            </p>
          </div>
        </header>

        <div className="px-4 pb-8">
          <div className="container max-w-4xl mx-auto">
            <DateConverter />

            {/* القسم التعريفي */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/95 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-3xl">🌙</span>
                المحول الذكي - Hijri Gregorian Converter
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  أهلاً بك في أفضل أدوات الشبكة العربي! نقدم خدمة موثوقة للتبديل بين النظام القمري والشمسي. 
                  إذا كنت تريد القيام بالتحويل من النظام الإسلامي للشمسي أو العكس، 
                  فإن المحول يمنحك نتائج فورية وسهولة في الاستخدام. نعتمد على تقويم أم القرى المعتمد 
                  في المملكة السعودية لضمان الدقة العالية.
                </p>
                
                <p className="text-base md:text-lg">
                  يتيح لك الموقع أيضاً معرفة تاريخك الحالي بالنظامين بدقة متناهية، واستخدام حاسبة العمر 
                  لحساب سنواتك والتقويم معاً. الخدمة مثالية لمن يريد الانتقال السريع بين النظامين 
                  بوسرعة ودقة. جميع أدوات الموقع متاحة مجاناً على مدار الساعة دون الحاجة للتسجيل.
                </p>

                <p className="text-base md:text-lg">
                  ما نقدمه: تبديل سريع بين النظامين، عرض تاريخك الحالي بالنظامين، 
                  استعراض السنوات من 1318 حتى 1500 هـ، حساب العمر بدقة، ومواقيت الصلاة 
                  في مكة والمدن السعودية الكبرى. الخدمة مجانية بالكامل للجميع.
                </p>
              </div>
            </section>

            {/* طريقة الاستخدام */}
            <section className="mt-10 grid md:grid-cols-2 gap-6">
              <article className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  من القمري إلى الشمسي
                </h3>
                <ol className="space-y-3 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <span>حدد خيار الانتقال من النظام القمري</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <span>أدخل البيانات والشهر والسنة المطلوبة</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <span>انقر الزر واحصل على النتيجة فوراً</span>
                  </li>
                </ol>
              </article>

              <article className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  من الشمسي إلى القمري
                </h3>
                <ol className="space-y-3 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <span>اختر الانتقال من النظام الشمسي</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <span>سجّل البيانات المراد تبديلها</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-primary/10 text-primary w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <span>احصل على المقابل بدقة وسرعة</span>
                  </li>
                </ol>
              </article>
            </section>

            {/* المميزات */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                ✨ مميزات الخدمة
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">سرعة فائقة</h3>
                  <p className="text-foreground/70 text-sm">
                    حوّل فوراً في لحظة واحدة بدون انتظار أو تحميل برامج إضافية
                  </p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">دقة متناهية</h3>
                  <p className="text-foreground/70 text-sm">
                    نستخدم النظام الرسمي (أم القرى) لضمان نتائج صحيحة 100%
                  </p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🆓</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">مجاني بالكامل</h3>
                  <p className="text-foreground/70 text-sm">
                    الخدمة متاحة مجاناً على الإنترنت بدون قيود أو اشتراكات
                  </p>
                </div>
              </div>
            </section>

            {/* معلومات عن النظامين */}
            <section className="mt-10 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-5">
                📖 معلومات عن النظامين
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-3">النظام القمري الإسلامي</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    نظام يعتمد على دورة القمر، يبدأ من الهجرة النبوية الشريفة. يتألف من 12 شهراً 
                    بإجمالي 354 أو 355 day. يُستخدم في تحديد المناسبات الإسلامية كرمضان والحج، 
                    وهو النظام الرسمي في المملكة العربية السعودية.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-3">الشهور القمرية والميلادية</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    محرم، صفر، ربيع الأول، ربيع الآخر، جمادى الأولى، جمادى الآخرة، 
                    رجب، شعبان، رمضان، شوال، ذو القعدة، ذو الحجة. للحصول على نتائج دقيقة، 
                    يُنصح باستخدام المحول المعتمد على تقويم أم القرى.
                  </p>
                </div>
              </div>
            </section>

            {/* الدليل الشامل */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-7">
                🔄 دليل الاستخدام الشامل
              </h2>
              
              <div className="space-y-5 text-foreground/85 leading-relaxed">
                <p>
                  تُعد خدمة التبديل بين النظامين من أدوات الويب الرقمية الأساسية في حياتنا. 
                  سواء احتجت للتحويل لإنجاز معاملة رسمية، أو أردت معرفة تاريخك الحالي بالنظام القمري 
                  لمناسبة دينية، فإن الخدمة توفر لك السرعة والدقة المطلوبة.
                </p>
                
                <p>
                  حين تحتاج للانتقال بين النظامين، تقدم أداتنا المجانية النتائج بشكل لحظي. 
                  نعتمد تقويم أم القرى المعتمد رسمياً في المملكة السعودية، مما يضمن الدقة التامة 
                  في جميع معاملاتك الرسمية والشخصية.
                </p>
                
                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold text-foreground mb-4">⚡ لماذا تختار خدمتنا؟</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>حوّل بدقة وفق تقويم أم القرى الرسمي المعتمد</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>تاريخك الحالي بالنظامين يُحدّث تلقائياً</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>التبديل بالاتجاهين في أداة واحدة متكاملة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>وسرعة فائقة - النتيجة في أقل من ثانية</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* حالات الاستخدام */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                💼 متى تحتاج هذه الخدمة؟
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">📄</span>
                    الإجراءات الحكومية
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    أثناء إنجاز المعاملات الرسمية، قد تحتاج للتبديل بين النظامين 
                    لمطابقة الوثائق. استخدم الخدمة للحصول على النتيجة الصحيحة بدقة حسب الحاجة.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    البحث والدراسة
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    يحتاج الباحثون والطلاب للقيام بالتحويل بين النظامين في دراساتهم. 
                    الأداة تيسّر عليك الانتقال لأي حقبة زمنية تحتاجها بسرعة.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🕌</span>
                    المناسبات الإسلامية
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    لمعرفة مواقيت وأوقات رمضان والحج والأعياد. تساعدك الأداة على 
                    معرفة تاريخك الحالي والتخطيط لمناسباتك بكلا النظامين.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">💰</span>
                    العقود والأعمال
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    في الاتفاقيات التجارية، قد تحتاج التبديل بين النظامين لتحديد المدد بدقة. 
                    الخدمة تضمن توافق البيانات في وثائقك القانونية.
                  </p>
                </div>
              </div>
            </section>

            {/* نصائح */}
            <section className="mt-10 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="text-3xl">💡</span>
                إرشادات للاستخدام الأمثل
              </h2>
              
              <div className="space-y-5">
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    1️⃣ خطوات بسيطة للتحويل
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    العملية سهلة للغاية! حدد نوع التبديل المطلوب، ثم أدخل البيانات. 
                    بالضغط على الزر، تحصل على النتيجة فوراً. استخدم المحول مجاناً في أي وقت تريد.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    2️⃣ أهمية تقويم أم القرى
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    نعتمد تقويم أم القرى الرسمي في السعودية. هذا يضمن أن النتائج 
                    تطابق البيانات الرسمية المستخدمة حكومياً في جميع الجهات، مع إمكانية إضافة ملاحظات.
                  </p>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    3️⃣ حفظ النتائج والتعديل
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    بعد الحصول على النتيجة، يمكنك نسخها أو التقاط صورة للشاشة. 
                    الخدمة متاحة دائماً للرجوع إليها لاحقاً بدون قيود.
                  </p>
                </div>
              </div>
            </section>
            
            <SEOContent />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
