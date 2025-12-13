import DateConverter from '@/components/DateConverter'
import { PageLayout } from '@/components/PageLayout'
import type { Metadata } from 'next'
import SEOContent from '@/components/SEOContent'

const CURRENT_HIJRI_YEAR = 1446;

export const metadata: Metadata = {
  title: 'تحويل التاريخ الهجري والميلادي - محول دقيق ومجاني',
  description: 'أداة تحويل التاريخ من هجري إلى ميلادي والعكس بدقة متناهية. فهم آلية تحويل التواريخ بين الأنظمة الزمنية.',
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

// FAQPage Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "هل نتائج تحويل التاريخ دقيقة دائمًا؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "النتائج دقيقة حسابيًا، لكنها قد تختلف يومًا واحدًا في بعض الحالات الخاصة."
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
        "text": "نعم، بشرط استخدام نفس النظام الزمني في بداية الحساب ونهايته."
      }
    },
    {
      "@type": "Question",
      "name": "هل تؤثر المنطقة الجغرافية على النتيجة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، خاصة في الأنظمة القمرية المرتبطة بالاعتماد المحلي."
      }
    },
    {
      "@type": "Question",
      "name": "ما الفرق بين النظام القمري والشمسي؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "القمري يعتمد على دورة القمر، بينما الشمسي يعتمد على دورة الشمس."
      }
    },
    {
      "@type": "Question",
      "name": "هل التحويل مناسب للاستخدامات الرسمية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "في أغلب الحالات نعم، لكن يُفضل مراجعة الجهة الرسمية المعتمدة."
      }
    },
    {
      "@type": "Question",
      "name": "هل يمكن إجراء التحويل بسهولة دون معرفة تقنية؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، معظم الأدوات مصممة لتكون مباشرة وبسيطة للمستخدم العادي."
      }
    },
    {
      "@type": "Question",
      "name": "متى يُنصح بالتحقق اليدوي من النتيجة؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "عند التواريخ الحساسة أو المرتبطة بإجراءات رسمية مهمة."
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
              فهم آلية تحويل التواريخ بين الأنظمة الزمنية في التطبيقات الرقمية الحديثة
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
                أهمية تحويل القيم الزمنية في العصر الرقمي
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  أصبح التعامل مع أكثر من نظام زمني جزءًا أساسيًا من استخدام البرمجيات الحديثة، 
                  خاصة في البيئات التي تجمع بين المتطلبات الإدارية والدينية والتقنية. 
                  في هذا السياق، يبرز موضوع تحويل القيم الزمنية كحاجة عملية، وليس مجرد مسألة معرفية. 
                  ففهم التاريخ في صيغته الرقمية يساعد المستخدم على تفسير النتائج بشكل صحيح 
                  واتخاذ قرارات دقيقة عند الاعتماد على أي أداة زمنية.
                </p>
              </div>
            </section>

            {/* BLOCK #1 - كيف نفهم التحويل */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                كيف نفهم التحويل بشكل صحيح داخل الأدوات الرقمية؟
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  عند التعامل مع <strong>التاريخ</strong> في التطبيقات الحديثة، لا يكون الهدف مجرد 
                  <strong> تحويل</strong> رقم من صيغة إلى أخرى، بل فهم السياق الزمني الكامل الذي ينتمي 
                  إليه هذا <strong>التاريخ</strong>. فالتعامل مع النظام <strong>الهجري</strong> يختلف عن 
                  التعامل مع النظام <strong>الميلادي</strong>، لأن كل نظام يعتمد على مرجعية زمنية مختلفة 
                  تؤثر مباشرة على النتائج. لهذا السبب، قد يظهر اختلاف بسيط في بعض الحالات بين الناتج 
                  <strong> الميلادي</strong> الناتج من أداة وأخرى، خصوصًا عندما تكون طريقة الحساب مرتبطة بمعايير محلية.
                </p>
                <p>
                  ولتجنب الالتباس، من الأفضل أن يتأكد المستخدم من نوع <strong>التاريخ</strong> المدخل 
                  (هل هو <strong>هجري</strong> أم <strong>ميلادي</strong>) قبل بدء عملية <strong>تحويل</strong>، 
                  لأن تبديل النظامين بالخطأ يؤدي إلى نتائج غير منطقية حتى لو كانت الأداة تعمل بشكل صحيح.
                </p>
              </div>
            </section>

            {/* لماذا تختلف الأنظمة */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">❓</span>
                لماذا تختلف الأنظمة الزمنية أصلًا؟
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  يرجع وجود أكثر من نظام زمني إلى اختلاف الأسس التي بُنيت عليها طرق قياس الوقت. 
                  بعض الأنظمة تعتمد على حركة القمر، بينما يرتبط غيرها بدورة الشمس. هذا الاختلاف البنيوي 
                  هو السبب الرئيسي وراء الحاجة المستمرة إلى الربط بين النظام الهجري والنظام الشمسي 
                  في التطبيقات الرقمية.
                </p>
                <p>
                  عند إدخال قيمة زمنية بصيغة معينة، لا بد من إعادة تمثيلها بطريقة تتوافق مع النظام الآخر، 
                  وهو ما يتم عبر عمليات حسابية متراكبة.
                </p>
              </div>
            </section>

            {/* الفروق الحسابية */}
            <section className="mt-10 grid md:grid-cols-2 gap-6">
              <article className="bg-card border border-border rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">🌙</span>
                  النظام القمري
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  يعتمد على أشهر قد تكون 29 أو 30 يومًا، ما يجعل السنة أقصر مقارنة بالسنة الشمسية. 
                  عند التعامل مع تاريخ <strong>هجري</strong> قديم أو مستقبلي، تظهر هذه الفروق بوضوح. 
                  لذلك، فإن أي عملية <strong>تحويل</strong> لا يمكن أن تكون مجرد معادلة ثابتة.
                </p>
              </article>

              <article className="bg-card border border-border rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-2xl">☀️</span>
                  النظام الشمسي
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  يعتمد على عدد ثابت نسبيًا من الأيام. هذا الفرق يؤدي إلى تباين النتائج عند التعامل 
                  مع فترات زمنية طويلة. تتطلب عملية التحويل مراعاة التراكم الزمني عبر السنوات.
                </p>
              </article>
            </section>

            {/* دور التقويم */}
            <section className="mt-10 bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-5">
                📅 دور التقويم في دقة النتائج
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  يلعب <strong>التقويم</strong> المستخدم داخل الأداة دورًا محوريًا في تحديد مدى دقة المخرجات. 
                  بعض الأنظمة تعتمد على الحساب الفلكي البحت، بينما تراعي أنظمة أخرى عوامل إضافية 
                  مرتبطة بالرؤية المحلية.
                </p>
                <p>
                  هذا التفاوت يفسر سبب اختلاف النتائج أحيانًا بين أدوات متعددة، حتى عند إدخال نفس القيمة الزمنية. 
                  من المهم للمستخدم أن يدرك أن النتيجة الرقمية تمثل نموذجًا حسابيًا، وليس دائمًا اعتمادًا رسميًا مطلقًا.
                </p>
              </div>
            </section>

            {/* متى يحتاج المستخدم */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-7 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                💼 متى يحتاج المستخدم إلى التحويل عمليًا؟
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">📄</span>
                    التوثيق الرسمي
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    قد يتطلب توثيق مستند رسمي إدخال تاريخ بصيغة مختلفة عن المعتمدة في الجهة المستقبِلة.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🏥</span>
                    الأنظمة الصحية والتعليمية
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    تعتمد بعض الأنظمة التعليمية والصحية على نظام محدد لإدخال البيانات.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🔄</span>
                    توحيد المعلومات
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    يتيح تحويل القيم الزمنية بسهولة توحيد المعلومات وتجنب الأخطاء الناتجة عن اختلاف الصيغ.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-2xl">🕌</span>
                    المناسبات الدينية
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    الربط بين المناسبات الدينية والتواريخ الإدارية، أو مقارنة نتائج <strong>والعكس</strong> بين نظامين مختلفين.
                  </p>
                </div>
              </div>
            </section>

            {/* BLOCK #2 - سيناريوهات شائعة */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/95 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">✅</span>
                سيناريوهات شائعة: من ميلادي إلى هجري والعكس
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  في الاستخدام الواقعي، قد يحتاج المستخدم إلى إدخال تاريخ <strong>ميلادي</strong> في نموذج 
                  يعتمد على النظام <strong>الهجري</strong>، أو <strong>العكس</strong> تمامًا عند التعامل مع 
                  مستندات أو سجلات قديمة. هذه الحالات شائعة في التعليم، والسجلات الصحية، والمراسلات الرسمية، 
                  وحتى عند تنظيم المواعيد المرتبطة بـ <strong>اليوم</strong> المحدد في جهة ما.
                </p>
                <p>
                  وجود <strong>أداة</strong> واضحة تشرح النتيجة وتعرض <strong>التواريخ</strong> بشكل مفهوم 
                  يجعل عملية <strong>تحويل</strong> القيم الزمنية تتم <strong>بسهولة</strong>، ويقلل الأخطاء 
                  التي تحدث عند التحويل اليدوي، خصوصًا عندما يحتاج المستخدم إلى مقارنة النتائج في الاتجاهين: 
                  من نظام إلى آخر و<strong>العكس</strong> مرة ثانية للتأكد.
                </p>
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
                  رغم تطور الخوارزميات، تظل هناك حدود طبيعية للدقة، خاصة عند التعامل مع تواريخ 
                  مستقبلية أو قديمة جدًا. في بعض الحالات، قد يظهر فرق يوم واحد نتيجة لاختلاف 
                  طريقة الحساب أو اعتماد الرؤية.
                </p>
                <p>
                  عند التعامل مع تاريخ <strong>ميلادي</strong> أو قمري، يجب على المستخدم فهم هذه الحدود 
                  وعدم افتراض أن كل نتيجة نهائية وغير قابلة للنقاش.
                </p>
              </div>
            </section>

            {/* التأثير الإقليمي */}
            <section className="mt-10 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-5">
                🌍 التأثير الإقليمي واختلاف الاعتماد
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  تختلف الدول في اعتمادها الرسمي على الحساب الفلكي أو الرؤية المحلية، وهو ما ينعكس 
                  مباشرة على النتائج. لهذا السبب، تتيح بعض الأدوات خيارات إضافية لاختيار المنطقة 
                  أو منهج الحساب.
                </p>
                <p>
                  هذا الخيار مهم خصوصًا عند الربط بين المناسبات الدينية والتواريخ الإدارية، أو عند 
                  مقارنة نتائج <strong>والعكس</strong> بين نظامين مختلفين في بيئات متعددة.
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
                    <span>إدخال قيمة زمنية بصيغة خاطئة، كاعتبار تاريخ شمسي على أنه قمري أو العكس.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>تجاهل الفروق التراكمية عند حساب مدد زمنية طويلة، وهو ما يؤثر على حسابات مثل <strong>العمر</strong> أو الفترات التعاقدية.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>افتراض أن جميع الأدوات تعطي نفس النتيجة، بينما تختلف الخوارزميات المستخدمة.</span>
                  </li>
                </ul>
                <p className="mt-4">
                  فهم أساسيات <strong>التقويم</strong> يساعد على تقليل هذه الأخطاء وتحسين الاعتماد على النتائج.
                </p>
              </div>
            </section>

            {/* كيف تُنفّذ عمليات التحويل */}
            <section className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">⚙️</span>
                كيف تُنفّذ عمليات التحويل داخل البرمجيات؟
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  في الخلفية، تعتمد التطبيقات الحديثة على مكتبات متخصصة لإجراء العمليات الزمنية. 
                  هذه المكتبات تراعي الفروق بين السنوات، وتتعامل مع الاستثناءات المرتبطة بكل نظام.
                </p>
                <p>
                  وجود منطق واضح داخل النظام يجعل عملية <strong>تحويل</strong> القيم أكثر موثوقية، 
                  ويمنح المستخدم نتيجة قابلة للتفسير والاستخدام بثقة.
                </p>
              </div>
            </section>

            {/* BLOCK #3 - نصائح تحقق سريعة */}
            <section className="mt-10 bg-gradient-to-br from-card via-card/95 to-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-3">
                <span className="text-2xl">🧾</span>
                نصائح تحقق سريعة قبل الاعتماد على النتيجة
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  كثير من المستخدمين يعتمدون على أدوات <strong>مجانية</strong> عبر الإنترنت لحساب 
                  <strong> العمر</strong> أو لفهم الفرق بين تاريخين، لكن من المهم الانتباه إلى أن النتائج 
                  قد تختلف يومًا واحدًا وفقًا لطريقة الحساب. على سبيل المثال، عند إدخال تاريخ في شهر 
                  <strong> ديسمبر</strong> وفق النظام <strong>الميلادي</strong> ثم تحويله، قد تظهر اختلافات 
                  بسيطة بين المناطق بسبب اعتماد الرؤية أو الحساب، خصوصًا في مناطق حساسة مثل <strong>مكة المكرمة</strong>.
                </p>
                <p>
                  وإذا كان <strong>التاريخ</strong> مرتبطًا بشهر مثل <strong>جمادى الآخرة</strong> في النظام 
                  <strong> الهجري</strong>، فمن الأفضل مراجعة الجهة الرسمية عند الاستخدامات الرسمية. 
                  فهم <strong>الاستخدام</strong> الصحيح للأداة—وتمييز نوع الإدخال—هو أفضل طريقة لتجنب النتائج المربكة.
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
