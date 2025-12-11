'use client'

import React, { useState, useEffect } from "react";

// ============ Inline SVG Icons ============

type IconProps = React.SVGProps<SVGSVGElement>;

const MoonIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6 text-primary"
    {...props}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const CheckIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5 text-primary flex-shrink-0"
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ZapIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6 text-primary"
    {...props}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const GlobeIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6 text-primary"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ShieldIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6 text-primary"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ClockIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6 text-primary"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const StarIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6 text-primary"
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const BookIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6 text-primary"
    {...props}
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

// ============ Loading Skeleton ============

const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`skeleton ${className}`} />
);

// ============ Main SEOContent Component ============

const SEOContent: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Progressive loading - يحمل المحتوى تدريجياً
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  const hijriMonths: {
    num: number;
    name: string;
    note?: string;
  }[] = [
    { num: 1, name: "محرم", note: "بداية السنة" },
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

  // FAQ Section removed to avoid duplication with main page FAQ

  const occasions: string[] = [
    "شهر رمضان - شهر الصيام المبارك (الشهر التاسع هجري)",
    "عيد الفطر - أول أيام شهر شوال",
    "موسم الحج - في شهر ذي الحجة",
    "عيد الأضحى - العاشر من ذي الحجة",
    "المولد النبوي - 12 ربيع الأول",
    "يوم عاشوراء - 10 محرم",
  ];

  // Placeholder component
  const SectionPlaceholder = ({ minHeight = "200px" }: { minHeight?: string }) => (
    <div 
      className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30" 
      style={{ minHeight }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Skeleton className="w-12 h-12 rounded-lg" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );

  return (
    <section className="mt-16 space-y-12">
      {/* Quick Answer Box */}
      {!isLoaded ? (
        <div 
          className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20" 
          style={{ minHeight: '140px' }}
        >
          <Skeleton className="h-8 w-2/3 mb-4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      ) : (
        <article className="bg-primary/5 rounded-2xl p-6 md:p-8 border-2 border-primary/20">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <StarIcon />
            كم التاريخ الهجري اليوم؟
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            استخدم أداتنا أعلاه لمعرفة تاريخ اليوم هجري وميلادي بدقة.
            نوفر لك أسرع طريقة لتحويل التاريخ من هجري لميلادي أو من ميلادي إلى هجري.
          </p>
        </article>
      )}

      {/* What is Hijri Calendar */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="300px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <MoonIcon />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              ما هو التقويم الهجري؟
            </h2>
          </div>
          <div className="text-foreground/80 leading-relaxed space-y-4">
            <p>
              التقويم الهجري (أو التقويم الإسلامي) هو التقويم القمري الذي يعتمده
              المسلمون لتحديد المناسبات الدينية. يُعرف أيضاً باسم التاريخ الهجري
              نسبة لهجرة النبي محمد ﷺ من مكة إلى المدينة المنورة عام 622 ميلادي.
            </p>
            <p>
              يتكون العام الهجري من 12 شهراً قمرياً، ويبلغ عدد أيامه 354 أو 355
              يوماً. لذلك يختلف التاريخ الهجري مقابل الميلادي كل عام.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              المناسبات الدينية المرتبطة بالتقويم الهجري:
            </h3>
            <ul className="list-none space-y-2 mt-4">
              {occasions.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      )}

      {/* Conversion Guide */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="250px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <BookIcon />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              كيفية تحويل التاريخ من هجري إلى ميلادي
            </h2>
          </div>
          <div className="text-foreground/80 leading-relaxed space-y-4">
            <p>
              تحويل من هجري لميلادي أصبح سهلاً مع أداتنا المجانية. سواء كنت تريد
              تحويل تاريخ هجري إلى ميلادي أو العكس، نوفر لك نتائج دقيقة وفورية.
            </p>
            <h3 className="text-lg font-semibold text-foreground mt-4">
              خطوات تحويل التاريخ:
            </h3>
            <ol className="list-decimal list-inside space-y-2 mr-4">
              <li>اختر نوع التحويل: ميلادي إلى هجري أو هجري إلى ميلادي</li>
              <li>أدخل التاريخ المراد تحويله (اليوم، الشهر، السنة)</li>
              <li>اضغط على زر "تحويل" للحصول على النتيجة فوراً</li>
            </ol>
          </div>
        </article>
      )}

      {/* Features Section */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="280px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            مميزات محول التاريخ الهجري
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-primary/10 h-fit">
                <ZapIcon />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  تحويل فوري وسريع
                </h3>
                <p className="text-foreground/70">
                  تحويل التاريخ بضغطة زر واحدة بدون انتظار
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-primary/10 h-fit">
                <ShieldIcon />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  دقة عالية (تقويم أم القرى)
                </h3>
                <p className="text-foreground/70">
                  نستخدم خوارزمية التقويم الهجري المعتمدة
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-primary/10 h-fit">
                <GlobeIcon />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  يعمل بدون إنترنت
                </h3>
                <p className="text-foreground/70">
                  بعد التحميل الأول، تعمل الأداة على جهازك
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-primary/10 h-fit">
                <ClockIcon />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  تحويل ثنائي الاتجاه
                </h3>
                <p className="text-foreground/70">
                  هجري إلى ميلادي أو ميلادي إلى هجري
                </p>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Hijri Months Reference */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="320px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            الأشهر الهجرية - التقويم الهجري 1446
          </h2>
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
      )}

      {/* FAQ Section removed - now in main page only */}
    </section>
  );
};

export default SEOContent;
