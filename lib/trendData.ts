// Trend-Jacking SEO Data for high-search-volume events
import type { PageSEO } from './seoData';

export const HIJRI_MONTHS = [
  { number: 1, name: 'محرم', slug: 'muharram' },
  { number: 2, name: 'صفر', slug: 'safar' },
  { number: 3, name: 'ربيع الأول', slug: 'rabi-al-awwal' },
  { number: 4, name: 'ربيع الآخر', slug: 'rabi-al-thani' },
  { number: 5, name: 'جمادى الأولى', slug: 'jumada-al-ula' },
  { number: 6, name: 'جمادى الآخرة', slug: 'jumada-al-thani' },
  { number: 7, name: 'رجب', slug: 'rajab' },
  { number: 8, name: 'شعبان', slug: 'shaban' },
  { number: 9, name: 'رمضان', slug: 'ramadan' },
  { number: 10, name: 'شوال', slug: 'shawwal' },
  { number: 11, name: 'ذو القعدة', slug: 'dhul-qadah' },
  { number: 12, name: 'ذو الحجة', slug: 'dhul-hijjah' }
];

export const GREGORIAN_MONTHS = [
  { number: 1, name: 'يناير', slug: 'january' },
  { number: 2, name: 'فبراير', slug: 'february' },
  { number: 3, name: 'مارس', slug: 'march' },
  { number: 4, name: 'أبريل', slug: 'april' },
  { number: 5, name: 'مايو', slug: 'may' },
  { number: 6, name: 'يونيو', slug: 'june' },
  { number: 7, name: 'يوليو', slug: 'july' },
  { number: 8, name: 'أغسطس', slug: 'august' },
  { number: 9, name: 'سبتمبر', slug: 'september' },
  { number: 10, name: 'أكتوبر', slug: 'october' },
  { number: 11, name: 'نوفمبر', slug: 'november' },
  { number: 12, name: 'ديسمبر', slug: 'december' }
];

export const ISLAMIC_EVENTS = [
  { slug: 'ramadan', name: 'رمضان', hijriMonth: 9, hijriDay: 1, description: 'شهر الصيام المبارك' },
  { slug: 'eid-al-fitr', name: 'عيد الفطر', hijriMonth: 10, hijriDay: 1, description: 'عيد الفطر المبارك' },
  { slug: 'eid-al-adha', name: 'عيد الأضحى', hijriMonth: 12, hijriDay: 10, description: 'عيد الأضحى المبارك' },
  { slug: 'arafah', name: 'يوم عرفة', hijriMonth: 12, hijriDay: 9, description: 'يوم عرفة - أفضل أيام السنة' },
  { slug: 'ashura', name: 'عاشوراء', hijriMonth: 1, hijriDay: 10, description: 'يوم عاشوراء' },
  { slug: 'mawlid', name: 'المولد النبوي', hijriMonth: 3, hijriDay: 12, description: 'ذكرى مولد النبي ﷺ' },
  { slug: 'isra-miraj', name: 'الإسراء والمعراج', hijriMonth: 7, hijriDay: 27, description: 'ذكرى الإسراء والمعراج' },
  { slug: 'laylat-al-qadr', name: 'ليلة القدر', hijriMonth: 9, hijriDay: 27, description: 'ليلة القدر المباركة' },
  { slug: 'hijri-new-year', name: 'رأس السنة الهجرية', hijriMonth: 1, hijriDay: 1, description: 'بداية السنة الهجرية الجديدة' }
];

// White days are 13, 14, 15 of each Hijri month
export const WHITE_DAYS = [13, 14, 15];

// Salary day is typically 27 of each Gregorian month in Saudi Arabia
export const SALARY_DAY_GREGORIAN = 27;

export function getHijriMonthBySlug(slug: string) {
  return HIJRI_MONTHS.find(m => m.slug === slug);
}

export function getGregorianMonthBySlug(slug: string) {
  return GREGORIAN_MONTHS.find(m => m.slug === slug);
}

export function getEventBySlug(slug: string) {
  return ISLAMIC_EVENTS.find(e => e.slug === slug);
}

// SEO generators for trend pages
export function generateSalaryDateGregorianSEO(monthSlug: string, year: number): PageSEO {
  const month = getGregorianMonthBySlug(monthSlug);
  const monthName = month?.name || monthSlug;
  
  return {
    title: `موعد الراتب ${monthName} ${year} - متى نزول الراتب بالهجري والميلادي`,
    description: `موعد نزول الراتب لشهر ${monthName} ${year} بالتاريخ الهجري والميلادي. اعرف كم باقي على الراتب وتاريخ الصرف الدقيق مع تحويل التاريخ.`,
    keywords: [`موعد الراتب ${monthName} ${year}`, 'متى نزول الراتب', 'كم باقي على الراتب', 'تاريخ الراتب بالهجري'],
    h1: `موعد الراتب لشهر ${monthName} ${year}`,
    intro: `تعرف على موعد نزول الراتب لشهر ${monthName} ${year} ميلادي وما يقابله بالتاريخ الهجري. صفحة محدثة تلقائياً تعرض العد التنازلي لموعد صرف الراتب.`,
    canonical: `/salary/date/${monthSlug}-${year}`
  };
}

export function generateSalaryDateHijriSEO(monthSlug: string, year: number): PageSEO {
  const month = getHijriMonthBySlug(monthSlug);
  const monthName = month?.name || monthSlug;
  
  return {
    title: `موعد الراتب ${monthName} ${year} هجري - نزول الراتب بالتاريخ الهجري`,
    description: `موعد نزول الراتب لشهر ${monthName} ${year} هجري. تعرف على تاريخ صرف الراتب بالهجري والميلادي مع العد التنازلي.`,
    keywords: [`راتب ${monthName} ${year}`, 'موعد الراتب بالهجري', 'نزول الراتب هجري', 'تاريخ الراتب'],
    h1: `موعد الراتب لشهر ${monthName} ${year} هـ`,
    intro: `موعد نزول الراتب لشهر ${monthName} سنة ${year} هجري مع التحويل للتاريخ الميلادي. اعرف كم باقي على الراتب بالضبط.`,
    canonical: `/salary/hijri/${monthSlug}-${year}`
  };
}

export function generateWhiteDaysSEO(monthSlug: string, year: number): PageSEO {
  const month = getHijriMonthBySlug(monthSlug);
  const monthName = month?.name || monthSlug;
  
  return {
    title: `الأيام البيض ${monthName} ${year} - صيام أيام 13 و14 و15`,
    description: `مواعيد الأيام البيض لشهر ${monthName} ${year} هجري (أيام 13، 14، 15). تعرف على تواريخ صيام الأيام البيض بالهجري والميلادي.`,
    keywords: [`الأيام البيض ${monthName}`, 'صيام الأيام البيض', 'أيام البيض بالميلادي', 'صيام 13 14 15'],
    h1: `الأيام البيض لشهر ${monthName} ${year} هـ`,
    intro: `الأيام البيض هي أيام 13 و14 و15 من كل شهر هجري، وصيامها سنة نبوية مستحبة. تعرف على مواعيد الأيام البيض لشهر ${monthName} سنة ${year} هجري.`,
    canonical: `/white-days/${monthSlug}-${year}`
  };
}

export function generateHijriMonthStartSEO(monthSlug: string, year: number): PageSEO {
  const month = getHijriMonthBySlug(monthSlug);
  const monthName = month?.name || monthSlug;
  
  return {
    title: `بداية شهر ${monthName} ${year} - أول يوم ${monthName} بالميلادي`,
    description: `متى يبدأ شهر ${monthName} ${year} هجري؟ تعرف على تاريخ أول يوم من ${monthName} بالميلادي مع العد التنازلي لبداية الشهر.`,
    keywords: [`بداية ${monthName} ${year}`, `أول ${monthName}`, `متى يبدأ ${monthName}`, 'بداية الشهر الهجري'],
    h1: `بداية شهر ${monthName} ${year} هـ`,
    intro: `تعرف على موعد بداية شهر ${monthName} سنة ${year} هجري وما يقابله بالتاريخ الميلادي. صفحة محدثة مع عد تنازلي لأول يوم من الشهر.`,
    canonical: `/hijri-month/start/${monthSlug}-${year}`
  };
}

export function generateIslamicEventSEO(eventSlug: string, year: number): PageSEO {
  const event = getEventBySlug(eventSlug);
  const eventName = event?.name || eventSlug;
  const description = event?.description || '';
  
  return {
    title: `${eventName} ${year} - متى موعد ${eventName} بالهجري والميلادي`,
    description: `موعد ${eventName} ${year} هجري بالتاريخ الميلادي. ${description}. تعرف على تاريخ ${eventName} مع العد التنازلي.`,
    keywords: [`${eventName} ${year}`, `متى ${eventName}`, `موعد ${eventName}`, `تاريخ ${eventName} بالميلادي`],
    h1: `${eventName} ${year} هـ`,
    intro: `${description}. تعرف على موعد ${eventName} لسنة ${year} هجري وما يقابله بالتاريخ الميلادي مع عد تنازلي محدث.`,
    canonical: `/events/${eventSlug}-${year}`
  };
}

// FAQ data for trend pages
export const TREND_FAQ_DATA = {
  general: [
    {
      question: 'ما هو التقويم الهجري؟',
      answer: 'التقويم الهجري هو تقويم قمري يعتمد على دورة القمر، ويتكون من 12 شهراً. بدأ من هجرة النبي ﷺ من مكة إلى المدينة.'
    },
    {
      question: 'كيف أحول التاريخ من هجري لميلادي؟',
      answer: 'استخدم أداة التحويل في موقعنا، أدخل التاريخ الهجري وستحصل على التاريخ الميلادي المقابل فوراً.'
    },
    {
      question: 'لماذا الشهر الهجري أقصر من الميلادي؟',
      answer: 'لأن الشهر الهجري يعتمد على دورة القمر (29-30 يوماً)، بينما الشهر الميلادي يعتمد على دورة الشمس (30-31 يوماً).'
    }
  ],
  ageCalculator: [
    {
      question: 'كيف أحسب عمري بالهجري؟',
      answer: 'أدخل تاريخ ميلادك بالتقويم الهجري في الحاسبة، وستحصل على عمرك الدقيق بالسنوات والأشهر والأيام الهجرية.'
    },
    {
      question: 'ما الفرق بين العمر بالهجري والميلادي؟',
      answer: 'السنة الهجرية أقصر من الميلادية بحوالي 11 يوماً، لذلك عمرك بالهجري سيكون أكبر من عمرك بالميلادي.'
    },
    {
      question: 'هل حساب العمر بالهجري دقيق؟',
      answer: 'نعم، الحاسبة تستخدم خوارزميات دقيقة لتحويل التواريخ وحساب الفرق بين التاريخين بدقة عالية.'
    },
    {
      question: 'كيف أعرف تاريخ ميلادي بالهجري؟',
      answer: 'استخدم أداة تحويل التاريخ من ميلادي لهجري، أدخل تاريخ ميلادك الميلادي وستحصل على التاريخ الهجري المقابل.'
    }
  ],
  calendar: [
    {
      question: 'كم عدد أيام السنة الهجرية؟',
      answer: 'السنة الهجرية تتكون من 354 أو 355 يوماً، وهي أقصر من السنة الميلادية بحوالي 10-11 يوماً.'
    },
    {
      question: 'ما هي الأشهر الحرم في التقويم الهجري؟',
      answer: 'الأشهر الحرم أربعة: ذو القعدة، ذو الحجة، محرم، ورجب. وهي أشهر معظمة يحرم فيها القتال.'
    },
    {
      question: 'متى يبدأ الشهر الهجري؟',
      answer: 'يبدأ الشهر الهجري عند رؤية هلال القمر الجديد بعد غروب الشمس، أو بالحساب الفلكي في بعض الدول.'
    },
    {
      question: 'ما الفرق بين تقويم أم القرى والرؤية الشرعية؟',
      answer: 'تقويم أم القرى يعتمد الحساب الفلكي ويُستخدم للتخطيط، بينما الرؤية الشرعية تعتمد رؤية الهلال بالعين لتحديد بداية الشهور.'
    }
  ],
  salary: [
    {
      question: 'متى موعد نزول الراتب هذا الشهر؟',
      answer: 'يتم صرف الرواتب في المملكة العربية السعودية عادةً في اليوم 27 من كل شهر ميلادي، وإذا صادف يوم عطلة يتم التقديم ليوم العمل السابق.'
    },
    {
      question: 'كم باقي على الراتب؟',
      answer: 'يمكنك معرفة المدة المتبقية على الراتب من خلال العد التنازلي في أعلى الصفحة الذي يعرض الأيام والساعات والدقائق المتبقية.'
    },
    {
      question: 'هل موعد الراتب ثابت كل شهر؟',
      answer: 'نعم، موعد الراتب ثابت في اليوم 27 من كل شهر ميلادي، لكن قد يتغير إذا صادف يوم جمعة أو سبت أو عطلة رسمية.'
    },
    {
      question: 'ما هو تاريخ الراتب بالهجري؟',
      answer: 'تاريخ الراتب بالهجري يتغير كل شهر لأن التقويم الهجري أقصر من الميلادي. استخدم أداة التحويل لمعرفة التاريخ الهجري الدقيق.'
    }
  ],
  whiteDays: [
    {
      question: 'ما هي الأيام البيض؟',
      answer: 'الأيام البيض هي أيام 13 و14 و15 من كل شهر هجري، سميت بذلك لأن القمر يكون مكتملاً فيها فتكون الليالي بيضاء مضيئة.'
    },
    {
      question: 'ما فضل صيام الأيام البيض؟',
      answer: 'صيام الأيام البيض سنة نبوية، وقد ورد أن صيامها كصيام الدهر لأن الحسنة بعشر أمثالها، فصيام 3 أيام يعادل 30 يوماً.'
    },
    {
      question: 'هل يجب صيام الأيام البيض متتالية؟',
      answer: 'يستحب صيامها متتالية (13، 14، 15)، لكن يجوز صيام أي ثلاثة أيام من الشهر إذا فاتت الأيام البيض.'
    },
    {
      question: 'كيف أعرف الأيام البيض بالتاريخ الميلادي؟',
      answer: 'استخدم جدول التحويل في هذه الصفحة لمعرفة تواريخ الأيام البيض (13، 14، 15 هجري) وما يقابلها بالتاريخ الميلادي.'
    }
  ],
  monthStart: [
    {
      question: 'كيف يتم تحديد بداية الشهر الهجري؟',
      answer: 'يبدأ الشهر الهجري برؤية هلال القمر الجديد. تعتمد معظم الدول على تقويم أم القرى أو الرؤية الشرعية.'
    },
    {
      question: 'لماذا يختلف بداية الشهر الهجري بين الدول؟',
      answer: 'قد تختلف بداية الشهر بين الدول بسبب اختلاف طرق إثبات الهلال (الرؤية البصرية أو الحساب الفلكي) واختلاف المواقع الجغرافية.'
    },
    {
      question: 'متى تبدأ الأشهر الحرم؟',
      answer: 'الأشهر الحرم هي: ذو القعدة، ذو الحجة، محرم، ورجب. وهي أشهر معظمة في الإسلام يحرم فيها القتال.'
    }
  ],
  events: [
    {
      question: 'متى موعد رمضان هذا العام؟',
      answer: 'يبدأ شهر رمضان في اليوم الأول من الشهر التاسع في التقويم الهجري. استخدم أداة التحويل لمعرفة التاريخ الميلادي الدقيق.'
    },
    {
      question: 'كيف أعرف موعد العيد بالميلادي؟',
      answer: 'عيد الفطر يوافق 1 شوال، وعيد الأضحى يوافق 10 ذو الحجة. استخدم جدول التحويل في الصفحة لمعرفة التاريخ الميلادي.'
    },
    {
      question: 'ما هي المناسبات الإسلامية الرئيسية؟',
      answer: 'أهم المناسبات: رمضان، عيد الفطر، عيد الأضحى، يوم عرفة، عاشوراء، المولد النبوي، الإسراء والمعراج، ورأس السنة الهجرية.'
    },
    {
      question: 'هل تاريخ المناسبات الإسلامية ثابت بالميلادي؟',
      answer: 'لا، المناسبات الإسلامية تعتمد على التقويم الهجري القمري، فتتقدم كل سنة بحوالي 11 يوماً في التقويم الميلادي.'
    }
  ]
};

// Generate all trend routes for sitemap
export function getAllTrendRoutes(): string[] {
  const routes: string[] = [];
  const currentYear = new Date().getFullYear();
  const currentHijriYear = 1446; // Approximate
  
  // Salary pages - Gregorian months for current and next year
  for (let year = currentYear; year <= currentYear + 1; year++) {
    GREGORIAN_MONTHS.forEach(month => {
      routes.push(`/salary/date/${month.slug}-${year}`);
    });
  }
  
  // Salary pages - Hijri months for current and next year
  for (let year = currentHijriYear; year <= currentHijriYear + 2; year++) {
    HIJRI_MONTHS.forEach(month => {
      routes.push(`/salary/hijri/${month.slug}-${year}`);
    });
  }
  
  // White days pages
  for (let year = currentHijriYear; year <= currentHijriYear + 2; year++) {
    HIJRI_MONTHS.forEach(month => {
      routes.push(`/white-days/${month.slug}-${year}`);
    });
  }
  
  // Hijri month start pages
  for (let year = currentHijriYear; year <= currentHijriYear + 2; year++) {
    HIJRI_MONTHS.forEach(month => {
      routes.push(`/hijri-month/start/${month.slug}-${year}`);
    });
  }
  
  // Islamic events pages
  for (let year = currentHijriYear; year <= currentHijriYear + 2; year++) {
    ISLAMIC_EVENTS.forEach(event => {
      routes.push(`/events/${event.slug}-${year}`);
    });
  }
  
  return routes;
}
