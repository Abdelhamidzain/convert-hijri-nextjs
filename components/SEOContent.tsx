'use client'

import React, { useState, useEffect } from "react";

// ============ Inline SVG Icons ============
type IconProps = React.SVGProps<SVGSVGElement>;

const MoonIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary" {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const CheckIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-primary flex-shrink-0" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ZapIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ShieldIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const StarIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const BookIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary" {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

// ============ Loading Skeleton ============
const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`skeleton ${className}`} />
);

// ============ Main SEOContent Component (500 كلمة) ============
const SEOContent: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const hijriMonths = [
    { num: 1, name: "محرم" }, { num: 2, name: "صفر" },
    { num: 3, name: "ربيع الأول" }, { num: 4, name: "ربيع الآخر" },
    { num: 5, name: "جمادى الأولى" }, { num: 6, name: "جمادى الآخرة" },
    { num: 7, name: "رجب" }, { num: 8, name: "شعبان" },
    { num: 9, name: "رمضان" }, { num: 10, name: "شوال" },
    { num: 11, name: "ذو القعدة" }, { num: 12, name: "ذو الحجة" },
  ];

  const SectionPlaceholder = ({ minHeight = "150px" }: { minHeight?: string }) => (
    <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/30" style={{ minHeight }}>
      <Skeleton className="h-6 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );

  return (
    <section className="mt-12 space-y-8">
      {/* Quick Answer - التاريخ الهجري اليوم */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="100px" />
      ) : (
        <article className="bg-primary/5 rounded-2xl p-6 border-2 border-primary/20">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <StarIcon />
            التاريخ الهجري اليوم - تحويل التاريخ بسهولة
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            استخدم أداة <strong>تحويل التاريخ</strong> لمعرفة <strong>التاريخ الهجري اليوم</strong> والتاريخ الميلادي بدقة.
            نوفر لك <strong>تحويل التاريخ من هجري إلى ميلادي</strong> أو <strong>والعكس بسهولة</strong> باستخدام <strong>تقويم أم القرى</strong>.
          </p>
        </article>
      )}

      {/* What is Hijri Calendar */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="180px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 shadow-soft border border-border/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <MoonIcon />
            </div>
            <h2 className="text-xl font-bold text-foreground">
              ما هو التقويم الهجري والميلادي؟
            </h2>
          </div>
          <p className="text-foreground/80 leading-relaxed">
            <strong>التقويم الهجري</strong> (Hijri Calendar) قمري يعتمده المسلمون لتحديد المناسبات الدينية.
            يتكون العام <strong>الهجري</strong> من 12 شهراً (354 يوماً)، بينما <strong>الميلادي</strong> شمسي (365 يوماً).
            <strong> تحويل التاريخ من هجري إلى ميلادي والعكس</strong> ضروري للمعاملات الرسمية في المملكة السعودية.
          </p>
        </article>
      )}

      {/* Features Section */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="200px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 shadow-soft border border-border/30">
          <h2 className="text-xl font-bold text-foreground mb-4">
            مميزات أداة تحويل التاريخ الهجري والميلادي
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <div className="p-2 rounded-lg bg-primary/10 h-fit">
                <ZapIcon />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">تحويل فوري</h3>
                <p className="text-foreground/70 text-sm">
                  <strong>تحويل التاريخ من هجري إلى ميلادي والعكس</strong> بضغطة زر <strong>بسهولة</strong>
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="p-2 rounded-lg bg-primary/10 h-fit">
                <ShieldIcon />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">دقة عالية</h3>
                <p className="text-foreground/70 text-sm">
                  نستخدم <strong>التقويم الهجري</strong> (<strong>أم القرى</strong>) <strong>لتحويل التاريخ</strong> بدقة
                </p>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* How to Use */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="150px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 shadow-soft border border-border/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <BookIcon />
            </div>
            <h2 className="text-xl font-bold text-foreground">
              كيفية تحويل التاريخ من هجري إلى ميلادي
            </h2>
          </div>
          <div className="text-foreground/80 leading-relaxed">
            <p className="mb-3">
              <strong>تحويل التاريخ</strong> أصبح سهلاً مع <strong>أداة تحويل التاريخ</strong> المجانية.
              سواء كنت تريد <strong>تحويل التاريخ من هجري إلى ميلادي</strong> أو <strong>والعكس</strong>، نوفر لك نتائج دقيقة <strong>بسهولة</strong>.
            </p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>اختر <strong>التاريخ من هجري إلى ميلادي</strong> أو <strong>من ميلادي</strong> إلى <strong>هجري</strong></li>
              <li>أدخل <strong>التاريخ</strong> المراد <strong>تحويل</strong>ه</li>
              <li>اضغط "<strong>تحويل</strong>" للحصول على النتيجة فوراً</li>
            </ol>
          </div>
        </article>
      )}

      {/* Hijri Months */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="150px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 shadow-soft border border-border/30">
          <h2 className="text-xl font-bold text-foreground mb-3">
            الشهور بالتقويم الهجري - التاريخ الهجري والميلادي
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {hijriMonths.map((month) => (
              <div key={month.num} className="p-2 rounded-lg bg-muted/50 border border-border/30 text-center text-sm">
                <span className="block text-xs text-foreground/60">{month.num}</span>
                <span className="font-medium text-foreground">{month.name}</span>
              </div>
            ))}
          </div>
        </article>
      )}

      {/* Use Cases */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="120px" />
      ) : (
        <article className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-3">
            💼 متى تحتاج لتحويل التاريخ من هجري الى ميلادي؟
          </h2>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <div className="flex items-start gap-2">
              <CheckIcon />
              <span><strong>المعاملات الرسمية</strong>: <strong>لتحويل التاريخ من هجري</strong> في الوثائق</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckIcon />
              <span><strong>المناسبات الدينية</strong>: <strong>حوّل التاريخ</strong> لمعرفة مواعيد رمضان</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckIcon />
              <span><strong>العقود</strong>: <strong>التاريخ من هجري الى ميلادي بسهولة</strong></span>
            </div>
          </div>
        </article>
      )}

      {/* Additional Info */}
      {!isLoaded ? (
        <SectionPlaceholder minHeight="100px" />
      ) : (
        <article className="bg-card rounded-2xl p-6 shadow-soft border border-border/30">
          <h2 className="text-xl font-bold text-foreground mb-3">
            معلومات عن التقويم الهجري والميلادي
          </h2>
          <p className="text-foreground/80 leading-relaxed text-sm">
            <strong>التقويم الهجري</strong> يبدأ من هجرة الرسول ﷺ من مكة للمدينة. <strong>تحويل التاريخ من هجري إلى ميلادي والعكس</strong> ضروري
            لمعرفة المواعيد بدقة. <strong>خدمة تحويل التاريخ</strong> متاحة على الإنترنت مجاناً <strong>بسهولة</strong> عبر <strong>محول التاريخ الهجري</strong>.
          </p>
        </article>
      )}
    </section>
  );
};

export default SEOContent;
