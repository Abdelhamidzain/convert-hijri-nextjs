import React from "react";

// الأسئلة الشائعة - بدون Schema (موجودة في page.tsx)
const faqItems = [
  {
    q: "هل نتائج تحويل التاريخ دقيقة دائمًا؟",
    a: "النتائج دقيقة حسابيًا، لكنها قد تختلف عن المعتمد رسميًا في بعض المناطق."
  },
  {
    q: "لماذا تختلف النتائج بين الأدوات؟",
    a: "لاختلاف نماذج الحساب والمرجع المستخدم في كل أداة."
  },
  {
    q: "هل يمكن الاعتماد على التحويل لحساب فترات زمنية طويلة؟",
    a: "نعم، بشرط فهم الفرق بين الأنظمة الزمنية المستخدمة."
  },
  {
    q: "هل تؤثر الدولة أو المنطقة على النتيجة؟",
    a: "نعم، خاصة في الأنظمة القمرية المرتبطة بالرؤية المحلية."
  },
  {
    q: "هل الأدوات مناسبة للاستخدام الرسمي؟",
    a: "غالبًا نعم، لكن يُفضّل التحقق من الجهة المعتمدة."
  },
  {
    q: "ما سبب الفارق يومًا واحدًا أحيانًا؟",
    a: "بسبب اختلاف طرق الحساب أو اعتماد الرؤية بدل الحساب الفلكي."
  },
  {
    q: "هل يحتاج المستخدم لمعرفة تقنية مسبقة؟",
    a: "لا، معظم الأدوات مصممة لتكون واضحة وسهلة."
  },
  {
    q: "هل يمكن إجراء التحويل بين الأنظمة بسهولة؟",
    a: "نعم، الأدوات الحديثة تتيح ذلك بخطوات بسيطة وواضحة."
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

      {/* ملخص */}
      <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="text-xl">📚</span>
          ملخص مهم
        </h2>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            <strong>فهم الأنظمة الزمنية:</strong> تحويل التاريخ بين الأنظمة الزمنية ليس مجرد عملية حسابية، 
            بل يتطلب فهمًا لطبيعة كل نظام والفروق الجوهرية بينها. النظام القمري والشمسي لكل منهما 
            خصائصه التي تؤثر على دقة النتائج.
          </p>
          <p>
            <strong>الدقة والموثوقية:</strong> عند استخدام أدوات التحويل، يجب مراعاة أن النتائج قد تختلف 
            قليلاً بناءً على طريقة الحساب المستخدمة. للاستخدامات الرسمية، يُنصح بالتحقق من الجهات الرسمية المعتمدة.
          </p>
          <p>
            <strong>سهولة الاستخدام:</strong> رغم تعقيد الحسابات الفلكية في الخلفية، صُممت أدوات التحويل الحديثة 
            لتكون بسيطة ومباشرة للجميع، دون الحاجة لمعرفة تقنية متقدمة.
          </p>
        </div>
      </article>
    </section>
  );
};

export default SEOContent;
