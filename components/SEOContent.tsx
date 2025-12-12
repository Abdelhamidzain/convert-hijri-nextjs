import React from "react";

// الأسئلة الشائعة - بدون Schema (موجودة في page.tsx)
const faqItems = [
  {
    q: "هل نتائج تحويل التاريخ دقيقة دائمًا؟",
    a: "النتائج دقيقة حسابيًا، لكنها قد تختلف عن الرؤية الفعلية في بعض الحالات."
  },
  {
    q: "لماذا تختلف النتائج بين أداة وأخرى؟",
    a: "بسبب اختلاف نماذج الحساب واعتماد بعض الأدوات على الحساب الفلكي وأخرى على الرؤية."
  },
  {
    q: "هل يمكن الاعتماد على التحويل لحساب العمر؟",
    a: "نعم، بشرط استخدام نفس النظام الزمني في البداية والنهاية."
  },
  {
    q: "هل تعمل الأدوات مع التواريخ القديمة جدًا؟",
    a: "تعمل، لكن الدقة قد تقل كلما ابتعدنا زمنيًا بسبب محدودية البيانات التاريخية."
  },
  {
    q: "هل يؤثر الموقع الجغرافي على النتيجة؟",
    a: "نعم، خاصة في التواريخ القمرية المرتبطة بالرؤية المحلية."
  },
  {
    q: "هل التحويل مناسب للاستخدامات الرسمية؟",
    a: "في أغلب الحالات نعم، لكن يفضل التحقق من الجهة الرسمية المعتمدة."
  },
  {
    q: "ما الفرق بين الحساب الفلكي والرؤية؟",
    a: "الحساب يعتمد على معادلات رياضية، بينما الرؤية تعتمد على المشاهدة الفعلية للهلال."
  },
  {
    q: "هل يمكن إجراء التحويل بسهولة دون معرفة تقنية؟",
    a: "نعم، معظم الأدوات مصممة لتكون مباشرة وسهلة للمستخدم العادي."
  }
];

const hijriMonths = [
  { num: 1, name: "محرم", note: "رأس السنة" },
  { num: 2, name: "صفر" },
  { num: 3, name: "ربيع الأول", note: "المولد النبوي" },
  { num: 4, name: "ربيع الآخر" },
  { num: 5, name: "جمادى الأولى" },
  { num: 6, name: "جمادى الآخرة" },
  { num: 7, name: "رجب", note: "الإسراء والمعراج" },
  { num: 8, name: "شعبان" },
  { num: 9, name: "رمضان", note: "شهر الصيام" },
  { num: 10, name: "شوال", note: "عيد الفطر" },
  { num: 11, name: "ذو القعدة" },
  { num: 12, name: "ذو الحجة", note: "الحج والأضحى" },
];

const SEOContent: React.FC = () => {
  return (
    <section className="mt-16 space-y-12">
      {/* الأسئلة الشائعة */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
          <span className="text-2xl">❓</span>
          الأسئلة الشائعة
        </h2>
        <div className="space-y-3">
          {faqItems.map((faq, index) => (
            <details key={index} className="group border border-border/50 rounded-xl overflow-hidden">
              <summary className="px-5 py-4 cursor-pointer flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors font-semibold text-foreground list-none">
                {faq.q}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 transition-transform group-open:rotate-180 flex-shrink-0">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-foreground/80 leading-relaxed border-t border-border/30 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </article>

      {/* الشهور القمرية */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          الشهور القمرية 1446 هـ
        </h2>
        <p className="text-foreground/70 mb-6">
          تعرف على أشهر السنة القمرية والمناسبات الدينية المرتبطة بها
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hijriMonths.map((month) => (
            <div
              key={month.num}
              className="p-4 rounded-xl bg-muted/50 border border-border/30 text-center hover:bg-primary/5 transition-colors"
            >
              <span className="block text-sm text-foreground/60 mb-1">
                الشهر {month.num}
              </span>
              <span className="block font-semibold text-foreground">
                {month.name}
              </span>
              {month.note && (
                <span className="block text-xs text-primary mt-1">
                  {month.note}
                </span>
              )}
            </div>
          ))}
        </div>
      </article>

      {/* معلومات إضافية */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="text-xl">📚</span>
          ملخص مهم
        </h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            <strong>خاصة بالربط بين الاستخدام الديني والإداري والتقني:</strong> تحويل التاريخ بين الأنظمة الزمنية 
            أصبح جزءًا لا يتجزأ من العمل في كثير من المجالات. فهم الاختلافات بين النظام القمري والشمسي 
            يساعد على تجنب الأخطاء الشائعة والحصول على نتائج أكثر دقة.
          </p>
          <p>
            <strong>الدقة والموثوقية:</strong> عند استخدام أدوات التحويل، يجب مراعاة أن النتائج قد تختلف 
            قليلاً بناءً على طريقة الحساب المستخدمة. للاستخدامات الرسمية، يُنصح بالتحقق من الجهات الرسمية المعتمدة.
          </p>
          <p>
            <strong>سهولة الاستخدام:</strong> رغم تعقيد الحسابات الفلكية في الخلفية، صُممت أدوات التحويل الحديثة 
            لتكون بسيطة وسهلة الاستخدام للجميع، دون الحاجة لمعرفة تقنية متقدمة.
          </p>
        </div>
      </article>
    </section>
  );
};

export default SEOContent;
