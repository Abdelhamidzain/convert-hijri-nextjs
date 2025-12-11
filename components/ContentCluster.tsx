'use client'

import { HIJRI_MONTHS } from '@/lib/hijriConverter';

interface ContentClusterProps {
  type: 'conversion-explanation' | 'hijri-gregorian-difference' | 'astronomical-calculation' | 'hijri-months-table' | 'age-calculation';
}

export function ContentCluster({ type }: ContentClusterProps) {
  if (type === 'conversion-explanation') {
    return (
      <section className="mt-8 bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-foreground">شرح تحويل التاريخ الهجري</h2>
        <div className="prose prose-sm text-muted-foreground space-y-3">
          <p>
            <strong className="text-foreground">تحويل التاريخ الهجري</strong> إلى التاريخ الميلادي يعتمد على حسابات فلكية دقيقة تأخذ بعين الاعتبار الفرق بين التقويمين. التقويم الهجري يبدأ من هجرة النبي محمد ﷺ من مكة إلى المدينة عام 622 ميلادي.
          </p>
          <p>
            لإجراء <strong className="text-foreground">تحويل التاريخ من ميلادي لهجري</strong>، نستخدم خوارزمية أم القرى المعتمدة رسمياً في المملكة العربية السعودية، والتي تضمن دقة عالية في الحسابات.
          </p>
          <p>
            عملية <strong className="text-foreground">تحويل التاريخ من هجري الى ميلادي</strong> تتم عبر حساب عدد الأيام الجوليانية ثم تحويلها للتقويم المطلوب، مما يضمن نتائج صحيحة لأي تاريخ.
          </p>
        </div>
      </section>
    );
  }
  
  if (type === 'hijri-gregorian-difference') {
    return (
      <section className="mt-8 bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-foreground">الفرق بين السنة الهجرية والميلادية</h2>
        <div className="prose prose-sm text-muted-foreground space-y-3">
          <p>
            <strong className="text-foreground">السنة الهجرية</strong> (القمرية) تتكون من 12 شهراً قمرياً بإجمالي 354 أو 355 يوماً، بينما <strong className="text-foreground">السنة الميلادية</strong> (الشمسية) تتكون من 365 أو 366 يوماً.
          </p>
          <p>
            هذا الفرق البالغ حوالي 11 يوماً سنوياً يجعل المناسبات الإسلامية تتقدم كل عام بالنسبة للتقويم الميلادي. لذلك قد يأتي رمضان في الصيف أحياناً وفي الشتاء أحياناً أخرى.
          </p>
          <p>
            كل 33 سنة ميلادية تساوي تقريباً 34 سنة هجرية، وهذا ما يفسر لماذا العمر بالهجري أكبر من العمر بالميلادي.
          </p>
        </div>
      </section>
    );
  }
  
  if (type === 'astronomical-calculation') {
    return (
      <section className="mt-8 bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-foreground">طريقة الحساب الفلكي</h2>
        <div className="prose prose-sm text-muted-foreground space-y-3">
          <p>
            نستخدم في <strong className="text-foreground">محول التاريخ الهجري</strong> خوارزمية أم القرى التي تعتمد على الحسابات الفلكية الدقيقة لحركة القمر حول الأرض.
          </p>
          <p>
            الشهر القمري يبدأ برؤية الهلال الجديد، ويتراوح طوله بين 29 و30 يوماً حسب دورة القمر. الحسابات الفلكية تحدد بدقة متى يولد الهلال الجديد.
          </p>
          <p>
            هذه الطريقة معتمدة رسمياً في تحديد بدايات الأشهر الهجرية في المملكة العربية السعودية ومعظم الدول الإسلامية.
          </p>
        </div>
      </section>
    );
  }
  
  if (type === 'hijri-months-table') {
    return (
      <section className="mt-8 bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-foreground">أشهر السنة الهجرية</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-2 text-right text-foreground">الترتيب</th>
                <th className="p-2 text-right text-foreground">الشهر</th>
                <th className="p-2 text-right text-foreground">عدد الأيام</th>
                <th className="p-2 text-right text-foreground">المناسبات</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {HIJRI_MONTHS.map((month, index) => (
                <tr key={month} className="border-b border-border/50">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2 font-medium text-foreground">{month}</td>
                  <td className="p-2">{(index + 1) % 2 === 1 ? '30' : '29'}</td>
                  <td className="p-2 text-xs">
                    {index === 0 && 'رأس السنة الهجرية، عاشوراء'}
                    {index === 2 && 'المولد النبوي'}
                    {index === 6 && 'الإسراء والمعراج'}
                    {index === 8 && 'شهر الصيام'}
                    {index === 9 && 'عيد الفطر'}
                    {index === 11 && 'عيد الأضحى، يوم عرفة'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  
  if (type === 'age-calculation') {
    return (
      <section className="mt-8 bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-foreground">كيف يتم حساب العمر بالهجري والميلادي</h2>
        <div className="prose prose-sm text-muted-foreground space-y-3">
          <p>
            <strong className="text-foreground">حساب العمر بالهجري</strong> يختلف عن الحساب بالميلادي لأن السنة الهجرية أقصر. إذا كان عمرك 30 سنة ميلادية، فعمرك بالهجري حوالي 31 سنة.
          </p>
          <p>
            لحساب العمر بدقة، نقوم بتحويل تاريخ الميلاد للتقويم المطلوب، ثم نحسب الفرق بين تاريخ اليوم وتاريخ الميلاد بالسنوات والأشهر والأيام.
          </p>
          <p>
            <strong className="text-foreground">كم عمري بالهجري؟</strong> للإجابة على هذا السؤال، أدخل تاريخ ميلادك في حاسبة العمر واحصل على النتيجة الدقيقة فوراً.
          </p>
        </div>
      </section>
    );
  }
  
  return null;
}
