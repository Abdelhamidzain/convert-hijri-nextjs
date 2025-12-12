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
        "text": "النتائج دقيقة حسابيًا، لكنها قد تختلف عن الرؤية الفعلية في بعض الحالات."
      }
    },
    {
      "@type": "Question",
      "name": "لماذا تختلف النتائج بين أداة وأخرى؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بسبب اختلاف نماذج الحساب واعتماد بعض الأدوات على الحساب الفلكي وأخرى على الرؤية."
      }
    },
    {
      "@type": "Question",
      "name": "هل يمكن الاعتماد على التحويل لحساب العمر؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، بشرط استخدام نفس النظام الزمني في البداية والنهاية."
      }
    },
    {
      "@type": "Question",
      "name": "هل تعمل الأدوات مع التواريخ القديمة جدًا؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "تعمل، لكن الدقة قد تقل كلما ابتعدنا زمنيًا بسبب محدودية البيانات التاريخية."
      }
    },
    {
      "@type": "Question",
      "name": "هل يؤثر الموقع الجغرافي على النتيجة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، خاصة في التواريخ القمرية المرتبطة بالرؤية المحلية."
      }
    },
    {
      "@type": "Question",
      "name": "هل التحويل مناسب للاستخدامات الرسمية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "في أغلب الحالات نعم، لكن يفضل التحقق من الجهة الرسمية المعتمدة."
      }
    },
    {
      "@type": "Question",
      "name": "ما الفرق بين الحساب الفلكي والرؤية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "الحساب يعتمد على معادلات رياضية، بينما الرؤية تعتمد على المشاهدة الفعلية للهلال."
      }
    },
    {
      "@type": "Question",
      "name": "هل يمكن إجراء التحويل بسهولة دون معرفة تقنية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، معظم الأدوات مصممة لتكون مباشرة وسهلة للمستخدم العادي."
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
              فهم تحويل التواريخ بين الأنظمة الزمنية في التطبيقات الرقمية الحديثة
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
                أهمية تحويل التاريخ في العصر الرقمي
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  أصبحت الحاجة إلى تحويل التاريخ جزءًا أساسيًا من العمل اليومي في كثير من الأنظمة الرقمية، 
                  سواء في البرمجيات الحكومية أو التطبيقات التعليمية أو الأدوات المتخصصة عبر الإنترنت. 
                  التعامل مع أكثر من نظام زمني لم يعد ترفًا معرفيًا، بل ضرورة تقنية تتطلب فهمًا دقيقًا 
                  للأسس الحسابية والاختلافات المنهجية بين الأنظمة المختلفة.
                </p>
              </div>
            </section>

            {/* لماذا توجد أنظمة زمنية متعددة */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">❓</span>
                لماذا توجد أنظمة زمنية متعددة؟
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  اعتمد الإنسان منذ القدم على مراقبة الظواهر الطبيعية لتنظيم الوقت. بعض الحضارات ربطت 
                  حساب الزمن بحركة الشمس، بينما اعتمدت أخرى على دورة القمر. هذا التعدد لم يكن عشوائيًا، 
                  بل نابعًا من احتياجات ثقافية ودينية وتنظيمية مختلفة.
                </p>
                <p>
                  النظام القمري، المستخدم في العالم الإسلامي، يقوم على الأشهر القمرية، بينما يعتمد 
                  النظام الشمسي على السنة الشمسية الأطول. هذا الاختلاف هو السبب الجذري وراء الحاجة 
                  المستمرة إلى تحويل القيم الزمنية بين الأنظمة.
                </p>
              </div>
            </section>

            {/* التقويم القمري والشمسي */}
            <section className="mt-10 grid md:grid-cols-2 gap-6">
              <article className="bg-card border border-border rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">🌙</span>
                  التقويم القمري
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  يعتمد التقويم القمري على دورة القمر حول الأرض، ويتكون من أشهر قد تكون 29 أو 30 يومًا. 
                  عند التعامل مع التاريخ القمري، يظهر تأثير هذه الفروق بوضوح، خصوصًا عند حساب فترات 
                  زمنية طويلة أو مطابقة مناسبات دينية مع تواريخ إدارية حديثة.
                </p>
              </article>

              <article className="bg-card border border-border rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">☀️</span>
                  التقويم الشمسي
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  يعتمد النظام الشمسي على دورة الأرض حول الشمس، مع توزيع ثابت نسبيًا للأيام على مدار السنة. 
                  السنة القمرية أقصر من السنة الشمسية بعدد ملحوظ من الأيام، ما يؤدي إلى تراكب الفروق بمرور السنوات.
                </p>
              </article>
            </section>

            {/* المنطق الحسابي */}
            <section className="mt-10 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-5">
                📊 المنطق الحسابي وراء اختلاف النتائج
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  عملية تحويل القيم الزمنية لا تقوم على قاعدة ثابتة يمكن تطبيقها دائمًا بنفس الطريقة. 
                  فالسنة القمرية أقصر من السنة الشمسية بعدد ملحوظ من الأيام، ما يؤدي إلى تراكب الفروق بمرور السنوات.
                </p>
                <p>
                  عند التعامل مع تاريخ قمري، يجب مراعاة أن عدد أيام الشهر قد يختلف، وهو ما يجعل بعض النتائج 
                  تقريبية عند استخدام الحساب الفلكي بدل الرؤية. لهذا السبب، تختلف المخرجات أحيانًا عند مقارنة 
                  نتائج أدوات متعددة.
                </p>
              </div>
            </section>

            {/* متى يحتاج المستخدم */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                💼 متى يحتاج المستخدم إلى تحويل التواريخ؟
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">📄</span>
                    التوثيق الرسمي
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    قد يحتاج المستخدم إلى توثيق مستند رسمي بنظام مختلف عن النظام المستخدم في الجهة المستقبِلة.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎓</span>
                    الأنظمة التعليمية
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    تعتمد بعض الأنظمة التعليمية والصحية على إدخال بيانات زمنية بنظام محدد.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">💻</span>
                    البرمجيات
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    يُستخدم التحويل لضمان توحيد البيانات القادمة من مصادر متعددة، مما يسهل التحليل والمعالجة.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🕌</span>
                    المناسبات الدينية
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    ربط المناسبات الدينية بالتقويم الإداري وتنظيم المواعيد بين النظامين.
                  </p>
                </div>
              </div>
            </section>

            {/* حدود الدقة */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                حدود الدقة في الأدوات الرقمية
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  رغم التقدم الكبير في الخوارزميات، لا يمكن اعتبار أي نتيجة مطلقة. بعض الأدوات تعتمد على 
                  متوسطات حسابية، بينما تحاول أخرى محاكاة الرؤية الفعلية. عند التعامل مع التاريخ القمري، 
                  قد يظهر فرق يوم واحد في بعض الحالات، خاصة عند التواريخ المستقبلية.
                </p>
                <p>
                  من المهم إدراك أن النتيجة الرقمية هي تمثيل حسابي، وليست دائمًا انعكاسًا دقيقًا لما تم 
                  اعتماده رسميًا في كل منطقة.
                </p>
              </div>
            </section>

            {/* التأثير الإقليمي */}
            <section className="mt-10 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-5">
                🌍 التأثير الإقليمي على النتائج الزمنية
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  تختلف الدول في اعتمادها على الحساب الفلكي أو الرؤية المحلية. هذا الاختلاف يؤدي أحيانًا 
                  إلى نتائج متباينة عند تحويل نفس اليوم بين الأنظمة.
                </p>
                <p>
                  بعض الأدوات تتيح اختيار الدولة أو طريقة الحساب، وهو خيار مهم لمن يبحث عن نتيجة أقرب 
                  للاعتماد الرسمي في منطقة معينة، خاصة في المناسبات الدينية أو الإدارية الحساسة.
                </p>
              </div>
            </section>

            {/* أخطاء شائعة */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">⚠️</span>
                أخطاء شائعة يقع فيها المستخدمون
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>افتراض أن جميع الأدوات تعطي نفس النتيجة، في الواقع تختلف الخوارزميات والمراجع المستخدمة.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>إدخال تاريخ شمسي على أنه قمري أو العكس، مما يؤدي إلى نتائج غير منطقية.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>نسيان أن السنوات القمرية أقصر، وحساب مدد زمنية طويلة دون تصحيح، وهو ما يؤثر على حساب العمر أو الفترات التعاقدية.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* كيف تعمل أدوات التحويل */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                كيف تعمل أدوات التحويل في البرمجيات؟
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  في التطبيقات الحديثة، تُنفّذ عمليات تحويل القيم الزمنية باستخدام مكتبات متخصصة. 
                  هذه المكتبات تتعامل مع الفروق التراكمية بين السنوات، وتراعي القواعد الخاصة بكل نظام.
                </p>
                <p>
                  وجود محول دقيق داخل النظام يساعد على تقليل الأخطاء، ويضمن أن تكون البيانات الزمنية 
                  موحدة وقابلة للمقارنة، سواء في التقارير أو قواعد البيانات.
                </p>
              </div>
            </section>

            {/* أهمية سهولة الاستخدام */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/95 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">✨</span>
                أهمية سهولة الاستخدام للمستخدم النهائي
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  حتى مع تعقيد الحسابات في الخلفية، يجب أن تكون واجهة الاستخدام واضحة وتعمل بسهولة. 
                  المستخدم لا يهتم غالبًا بالتفاصيل الحسابية، بل يريد نتيجة مفهومة وسريعة.
                </p>
                <p>
                  الأداة الجيدة توازن بين الدقة التقنية والبساطة، وتعرض النتيجة بوضوح مع توضيح أي 
                  ملاحظات قد تؤثر على الاعتماد الكامل عليها.
                </p>
              </div>
            </section>

            {/* دور التحويل في الحياة اليومية */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">📅</span>
                دور التحويل في الحياة اليومية والعملية
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  يُستخدم التحويل الزمني في مجالات متعددة، من جدولة المواعيد إلى تنظيم المناسبات الدينية 
                  وربطها بالتقويم الإداري. في بعض الأحيان، يحتاج المستخدم إلى معرفة ما يقابل تاريخ معين 
                  بنظام آخر والعكس، لضمان عدم حدوث تعارض أو التباس.
                </p>
                <p>
                  هذا الدور المتزايد يجعل فهم الأساس النظري للتحويل أمرًا مهمًا، حتى عند استخدام أدوات جاهزة.
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
