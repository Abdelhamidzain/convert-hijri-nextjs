import DateConverter from '@/components/DateConverter'
import { PageLayout } from '@/components/PageLayout'
import type { Metadata } from 'next'
import SEOContent from '@/components/SEOContent'

const CURRENT_HIJRI_YEAR = 1446;

export const metadata: Metadata = {
  title: 'تحويل التاريخ الهجري والميلادي - محول دقيق ومجاني',
  description: 'أداة تحويل التاريخ من هجري إلى ميلادي والعكس بدقة متناهية. فهم شامل للأنظمة الزمنية القمرية والشمسية.',
  keywords: 'تحويل, التاريخ, هجري, ميلادي, التقويم, محول, النظام القمري, الشمسي',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'محول التاريخ الهجري والميلادي',
    description: 'تحويل التاريخ بين الأنظمة الزمنية بدقة عالية',
    url: 'https://convert-hijri.com',
    type: 'website',
    locale: 'ar_SA',
  }
}

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "محول التاريخ الهجري والميلادي",
  "alternateName": ["Hijri Date Converter", "Gregorian to Hijri"],
  "description": "خدمة مجانية لتحويل التاريخ بين النظامين القمري والشمسي",
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

// FAQPage Schema - الأسئلة الجديدة
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "هل نتائج تحويل التاريخ دقيقة دائمًا؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "النتائج دقيقة حسابيًا، لكنها قد تختلف عن المعتمد رسميًا في بعض المناطق."
      }
    },
    {
      "@type": "Question",
      "name": "لماذا تختلف النتائج بين الأدوات؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لاختلاف نماذج الحساب والمرجع المستخدم في كل أداة."
      }
    },
    {
      "@type": "Question",
      "name": "هل يمكن الاعتماد على التحويل لحساب فترات زمنية طويلة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، بشرط فهم الفرق بين الأنظمة الزمنية المستخدمة."
      }
    },
    {
      "@type": "Question",
      "name": "هل تؤثر الدولة أو المنطقة على النتيجة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، خاصة في الأنظمة القمرية المرتبطة بالرؤية المحلية."
      }
    },
    {
      "@type": "Question",
      "name": "هل الأدوات مناسبة للاستخدام الرسمي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "غالبًا نعم، لكن يُفضّل التحقق من الجهة المعتمدة."
      }
    },
    {
      "@type": "Question",
      "name": "ما سبب الفارق يومًا واحدًا أحيانًا؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بسبب اختلاف طرق الحساب أو اعتماد الرؤية بدل الحساب الفلكي."
      }
    },
    {
      "@type": "Question",
      "name": "هل يحتاج المستخدم لمعرفة تقنية مسبقة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لا، معظم الأدوات مصممة لتكون واضحة وسهلة."
      }
    },
    {
      "@type": "Question",
      "name": "هل يمكن إجراء التحويل بين الأنظمة بسهولة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، الأدوات الحديثة تتيح ذلك بخطوات بسيطة وواضحة."
      }
    }
  ]
}

export default function Home() {
  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              كيف تفهم أنظمة التواريخ الرقمية ولماذا نحتاج إلى التحويل بينها اليوم؟
              <br />
              <span className="text-primary font-semibold mt-2 inline-block">
                خدمة مجانية - {CURRENT_HIJRI_YEAR} هـ
              </span>
            </p>
          </div>
        </header>

        <div className="px-4 pb-8">
          <div className="container max-w-4xl mx-auto">
            <DateConverter />

            {/* المقدمة */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/95 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-primary text-3xl">🌙</span>
                أهمية تحويل التاريخ في البرمجيات الحديثة
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  في عالم البرمجيات الحديثة، لم يعد التعامل مع الوقت مسألة بسيطة. أغلب الأنظمة الرقمية 
                  تتعامل مع بيانات زمنية قادمة من مصادر متعددة، ومع اختلاف المرجع الزمني تظهر الحاجة 
                  إلى تحويل التاريخ بشكل دقيق ومفهوم. هذه العملية ليست مجرد إدخال رقم والحصول على نتيجة، 
                  بل ترتبط بفهم عميق لطبيعة الأنظمة الزمنية وكيفية تفسير المخرجات الناتجة عنها.
                </p>
              </div>
            </section>

            {/* خلفية مختصرة */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">📜</span>
                خلفية مختصرة تفسّر الحاجة إلى التحويل
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  اعتمد الإنسان تاريخيًا على أكثر من مرجع لتنظيم الزمن. بعض المجتمعات ربطت حساب الأيام 
                  بحركة الشمس، وأخرى اعتمدت على القمر. هذا التعدد استمر حتى العصر الرقمي، فأصبحت الأنظمة 
                  الحديثة مضطرة للتعامل مع أكثر من مرجع زمني في الوقت نفسه.
                </p>
                <p>
                  وجود نظام قمري وآخر شمسي خلق فجوة حسابية، ومع تراكم السنوات أصبح من الضروري إيجاد 
                  آلية موحدة تتيح الانتقال بين القيم الزمنية دون فقدان المعنى أو الدقة.
                </p>
              </div>
            </section>

            {/* الفروق الجوهرية */}
            <section className="mt-10 grid md:grid-cols-2 gap-6">
              <article className="bg-card border border-border rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">🌙</span>
                  النظام القمري
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  يعتمد على دورة القمر، ما يجعل طول السنة أقل من السنة الشمسية. عند التعامل مع تاريخ قمري، 
                  تظهر هذه الفروق بوضوح، خصوصًا في الفترات الطويلة. لهذا السبب، لا يمكن مقارنة القيم الزمنية 
                  مباشرة دون المرور بمرحلة تحويل منهجية.
                </p>
              </article>

              <article className="bg-card border border-border rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">☀️</span>
                  النظام الشمسي
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  أكثر ثباتًا من حيث عدد الأيام. عند التعامل مع تاريخ شمسي، تكون الحسابات أكثر استقرارًا. 
                  لكن التحدي يظهر عند الحاجة للتحويل بين النظامين، إذ يجب مراعاة الاختلافات الأساسية في البنية الزمنية.
                </p>
              </article>
            </section>

            {/* المنطق الحسابي */}
            <section className="mt-10 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-5">
                📊 المنطق الحسابي داخل أدوات التحويل
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  عملية تحويل القيم الزمنية تعتمد على نماذج رياضية وفلكية معقدة. هذه النماذج تأخذ في الاعتبار 
                  عدد الأيام، الفروق التراكمية بين السنوات، وقواعد خاصة بكل نظام.
                </p>
                <p>
                  بعض الأدوات تعتمد على الحساب الفلكي الخالص، بينما تحاول أخرى تقريب النتائج وفق الرؤية 
                  المعتمدة في مناطق معينة. هذا يفسّر لماذا قد تختلف النتائج بين أداة وأخرى رغم إدخال نفس البيانات.
                </p>
              </div>
            </section>

            {/* التقويم كمرجع */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">📅</span>
                التقويم كمرجع أساسي للأنظمة الرقمية
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  أي نظام زمني لا يمكن فصله عن التقويم الذي يستند إليه. في التطبيقات البرمجية، يُستخدم 
                  التقويم كطبقة مرجعية لتفسير التواريخ، حساب الفترات، وربط الأحداث ببعضها.
                </p>
                <p>
                  عند التعامل مع بيانات قادمة من مصادر مختلفة، يصبح توحيد المرجع الزمني خطوة ضرورية 
                  لتجنب الأخطاء في التقارير أو العمليات الحسابية اللاحقة.
                </p>
              </div>
            </section>

            {/* متى يحتاج المستخدم */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                💼 متى يحتاج المستخدم فعليًا إلى التحويل؟
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">📄</span>
                    النماذج الرسمية
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    عند تعبئة نماذج رسمية أو توثيق سجلات تعليمية أو صحية بنظام زمني محدد.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">👥</span>
                    بيانات الموظفين
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    تسجيل بيانات موظفين أو عقود عمل تتطلب تواريخ بنظام مختلف.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">✈️</span>
                    السفر والدراسة
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    قد يُطلب إدخال تاريخ بنظام مختلف عن النظام المستخدم في بلدك.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🕌</span>
                    المناسبات الدينية
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    ربط المناسبات الدينية بجداول إدارية أو توثيق أحداث زمنية.
                  </p>
                </div>
              </div>
            </section>

            {/* الدقة وحدود الاعتماد */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                الدقة وحدود الاعتماد على النتائج
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  رغم التطور الكبير، لا يمكن اعتبار أي نتيجة نهائية بنسبة مطلقة. بعض النتائج تكون دقيقة 
                  حسابيًا لكنها لا تطابق ما تم اعتماده رسميًا في دولة معينة.
                </p>
                <p>
                  عند التعامل مع التاريخ القمري، تظهر هذه الإشكالية بشكل أوضح، إذ قد يختلف اليوم المعتمد 
                  حسب الرؤية المحلية. لذلك من المهم التعامل مع المخرجات كقيمة حسابية يجب تفسيرها في سياقها الصحيح.
                </p>
              </div>
            </section>

            {/* الفروق الإقليمية */}
            <section className="mt-10 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-5">
                🌍 الفروق الإقليمية وتأثيرها على النتائج
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  تختلف الدول في اعتمادها على الحساب أو الرؤية، وهذا ينعكس مباشرة على النتائج. 
                  قد يظهر نفس اليوم بقيم مختلفة عند استخدام أدوات تعتمد نماذج حسابية متباينة.
                </p>
                <p>
                  لهذا السبب، تتيح بعض الأنظمة اختيار طريقة الحساب أو المنطقة، ما يساعد المستخدم 
                  على الحصول على نتيجة أقرب للاستخدام الرسمي في بيئته.
                </p>
              </div>
            </section>

            {/* أخطاء شائعة */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">⚠️</span>
                أخطاء شائعة يجب الانتباه لها
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>إدخال قيمة زمنية بنظام غير صحيح، مما يؤدي لنتائج خاطئة.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>افتراض أن جميع الأدوات تعطي نفس النتيجة، بينما تختلف الخوارزميات المستخدمة.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>الخلط بين السنة القمرية والسنة الشمسية عند حساب فترات زمنية طويلة.</span>
                  </li>
                </ul>
                <p className="mt-4">
                  استخدام أداة موثوقة يساعد، لكن الفهم المسبق لطبيعة النظام الزمني يظل عنصرًا أساسيًا لتجنّب هذه الأخطاء.
                </p>
              </div>
            </section>

            {/* كيف تُدمج عمليات التحويل */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                كيف تُدمج عمليات التحويل داخل البرمجيات؟
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  في التطبيقات الحديثة، تُنفّذ عمليات تحويل القيم الزمنية عبر مكتبات متخصصة. هذه المكتبات 
                  تضمن أن تكون البيانات الزمنية متناسقة داخل النظام، سواء عند التخزين أو المعالجة أو العرض.
                </p>
                <p>
                  هذا التكامل يسمح للتطبيقات بالتعامل مع تواريخ متعددة المصادر دون تعارض، ويقلل من احتمالية 
                  حدوث أخطاء منطقية في الحسابات.
                </p>
              </div>
            </section>

            {/* سهولة الاستخدام */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/95 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">✨</span>
                سهولة الاستخدام وأهميتها للمستخدم غير التقني
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  رغم التعقيد الداخلي، يجب أن تعمل الأدوات بسهولة من منظور المستخدم. الهدف هو الحصول 
                  على نتيجة واضحة دون الحاجة لفهم المعادلات أو التفاصيل الفلكية.
                </p>
                <p>
                  التوازن بين البساطة والدقة هو ما يميّز الأداة الجيدة، ويجعلها مناسبة للاستخدام اليومي في سياقات مختلفة.
                </p>
              </div>
            </section>

            {/* الاستخدام العملي */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">📋</span>
                الاستخدام العملي في الحياة اليومية
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  في كثير من الحالات، يحتاج المستخدم لمعرفة ما يقابل تاريخ معين بنظام آخر والعكس، 
                  سواء لتنظيم مواعيد، أو ربط مناسبات دينية بجداول إدارية، أو توثيق أحداث زمنية.
                </p>
                <p>
                  هذا الاستخدام المتكرر يبرز أهمية فهم النتائج وعدم التعامل معها كأرقام مجردة دون سياق.
                </p>
              </div>
            </section>
            
            <SEOContent />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
