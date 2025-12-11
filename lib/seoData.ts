// src/lib/seoData.ts

export const PRIMARY_KEYWORDS = [
  'تحويل التاريخ الهجري',
  'تحويل التاريخ من ميلادي لهجري',
  'تحويل التاريخ من هجري الى ميلادي',
  'حساب العمر بالهجري',
  'التقويم الهجري 1446',
  'تاريخ اليوم هجري',
  'موعد الرواتب',
  'الايام البيض'
];

export const CITIES = [
  { slug: 'riyadh', name: 'الرياض', country: 'السعودية' },
  { slug: 'jeddah', name: 'جدة', country: 'السعودية' },
  { slug: 'mecca', name: 'مكة المكرمة', country: 'السعودية' },
  { slug: 'medina', name: 'المدينة المنورة', country: 'السعودية' },
  { slug: 'dubai', name: 'دبي', country: 'الإمارات' },
  { slug: 'abu-dhabi', name: 'أبو ظبي', country: 'الإمارات' },
  { slug: 'cairo', name: 'القاهرة', country: 'مصر' },
  { slug: 'alexandria', name: 'الإسكندرية', country: 'مصر' },
  { slug: 'amman', name: 'عمّان', country: 'الأردن' },
  { slug: 'kuwait', name: 'الكويت', country: 'الكويت' },
  { slug: 'doha', name: 'الدوحة', country: 'قطر' },
  { slug: 'manama', name: 'المنامة', country: 'البحرين' },
  { slug: 'muscat', name: 'مسقط', country: 'عُمان' },
  { slug: 'beirut', name: 'بيروت', country: 'لبنان' },
  { slug: 'baghdad', name: 'بغداد', country: 'العراق' },
  { slug: 'algiers', name: 'الجزائر', country: 'الجزائر' },
  { slug: 'casablanca', name: 'الدار البيضاء', country: 'المغرب' },
];

// تم توسيع النطاق ليشمل تواريخ الميلاد القديمة (حساب التقاعد/العمر)
export const HIJRI_YEAR_RANGE = {
  start: 1350,
  end: 1460
};

export const GREGORIAN_YEAR_RANGE = {
  start: 1930,
  end: 2040
};

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  canonical: string;
}

// --- Generators ---

export function generateCalendarYearSEO(hijriYear: number): PageSEO {
  return {
    title: `التقويم الهجري ${hijriYear} والميلادي - جدول كامل مع المناسبات`,
    description: `تصفح التقويم الهجري لعام ${hijriYear} هـ كاملاً ومقابله بالميلادي. اعرف مواعيد الرواتب، رمضان، الأعياد، ومواسم الحج في سنة ${hijriYear}.`,
    keywords: [`تقويم ${hijriYear}`, `روزنامة ${hijriYear} هجري`, `المناسبات الإسلامية ${hijriYear}`, 'التقويم الهجري والميلادي'],
    h1: `التقويم الهجري لعام ${hijriYear} هـ والميلادي المقابل`,
    intro: `جدول تفصيلي للتقويم الهجري لعام ${hijriYear}، يوضح بداية ونهاية كل شهر هجري وما يقابله من التواريخ الميلادية بدقة حسب تقويم أم القرى.`,
    canonical: `/calendar/${hijriYear}`
  };
}

export function generateHijriToGregorianSEO(year: number): PageSEO {
  return {
    title: `تحويل التاريخ من هجري لميلادي ${year} - دقيق 100%`,
    description: `حول أي تاريخ في سنة ${year} هجري إلى ميلادي بدقة. مثالي لحساب تاريخ الميلاد، التقاعد، والمناسبات الرسمية حسب تقويم أم القرى.`,
    keywords: [`تحويل سنة ${year} هجري`, `تاريخ ميلادي ${year} هجري`, 'تحويل التاريخ حساب المواطن', 'محول التاريخ الهجري'],
    h1: `تحويل التاريخ من هجري إلى ميلادي - سنة ${year} هـ`,
    intro: `أداة تحويل فورية ودقيقة للتواريخ من السنة الهجرية ${year}. ادخل التاريخ الهجري وسيقوم النظام بحساب التاريخ الميلادي واليوم بدقة متناهية.`,
    canonical: `/convert/hijri-to-gregorian/${year}`
  };
}

export function generateGregorianToHijriSEO(year: number): PageSEO {
  return {
    title: `تحويل التاريخ من ميلادي لهجري ${year} - حسب تقويم أم القرى`,
    description: `حول تواريخ سنة ${year} ميلادي إلى هجري فوراً. اعرف متى كان تاريخ ميلادك أو أي مناسبة في عام ${year} م بالتاريخ الهجري.`,
    keywords: [`تحويل سنة ${year} ميلادي`, `تاريخ هجري ${year} ميلادي`, 'تحويل التاريخ للموظفين', 'التقويم المقابل للهجري'],
    h1: `تحويل التاريخ من ميلادي إلى هجري - سنة ${year} م`,
    intro: `حول التواريخ الميلادية من عام ${year} إلى التقويم الهجري بسهولة. نستخدم خوارزميات دقيقة لمطابقة التواريخ مع التقويم الإسلامي المعتمد.`,
    canonical: `/convert/gregorian-to-hijri/${year}`
  };
}

export function generateTodayDateSEO(): PageSEO {
  return {
    title: 'تاريخ اليوم هجري وميلادي (محدث يومياً) - التاريخ الآن',
    description: 'كم تاريخ اليوم بالهجري والميلادي؟ صفحة مباشرة تعرض لك التاريخ الحالي، الشهر الهجري، وترتيب اليوم في السنة. دقة عالية حسب توقيت السعودية.',
    keywords: ['تاريخ اليوم', 'كم التاريخ الهجري', 'اليوم كم هجري', 'تاريخ اليوم الوطني', 'التاريخ الان'],
    h1: 'تاريخ اليوم بالهجري والميلادي',
    intro: 'شاشة عرض حية للتاريخ الهجري والميلادي لهذا اليوم. يتم التحديث تلقائياً لضمان دقة اليوم والشهر والسنة حسب الرؤية الشرعية وتقويم أم القرى.',
    canonical: '/date/today'
  };
}

export function generateCityDateSEO(citySlug: string): PageSEO {
  const city = CITIES.find(c => c.slug === citySlug);
  const cityName = city?.name || citySlug;
  
  return {
    title: `تاريخ اليوم في ${cityName} هجري وميلادي`,
    description: `اعرف تاريخ اليوم الهجري والميلادي في ${cityName} الآن. خدمة دقيقة لسكان ${cityName} لمعرفة أوقات الأيام البيض والمناسبات.`,
    keywords: [`تاريخ اليوم ${cityName}`, `التقويم الهجري ${cityName}`, `الوقت والتاريخ في ${cityName}`],
    h1: `التاريخ الحالي في ${cityName}`,
    intro: `خدمة مخصصة لمدينة ${cityName} تعرض التاريخ الهجري والميلادي المتوافق مع التوقيت المحلي للمدينة.`,
    canonical: `/date-today/${citySlug}`
  };
}

export function generateAgeCalculatorHijriSEO(): PageSEO {
  return {
    title: 'حساب العمر بالهجري بدقة - كم عمري بالسنوات والأيام؟',
    description: 'حاسبة العمر الهجري الدقيقة. احسب عمرك لغرض الوظائف الحكومية، التقاعد، أو حساب المواطن. اعرف يوم ميلادك وتاريخك الدقيق.',
    keywords: ['حساب العمر بالهجري', 'حساب التقاعد هجري', 'كم عمري', 'حاسبة العمر وزارة الصحة', 'تحويل العمر'],
    h1: 'حساب العمر بالتاريخ الهجري',
    intro: 'أداة متقدمة لحساب العمر بالتقويم الهجري. مفيدة جداً للموااملات الرسمية في السعودية ولحساب السن القانوني بدقة باليوم والشهر والسنة.',
    canonical: '/how-old-am-i/hijri'
  };
}

export function generateAgeCalculatorGregorianSEO(): PageSEO {
  return {
    title: 'حساب العمر بالميلادي - اعرف عمرك وعلامتك الفلكية',
    description: 'احسب عمرك بالتاريخ الميلادي وحوله للهجري. اعرف كم باقي على عيد ميلادك، وما هو برجك، وعمرك بالدقائق والثواني.',
    keywords: ['حساب العمر بالميلادي', 'حاسبة العمر الدقيقة', 'برجي من تاريخ ميلادي', 'كم عمري بالميلادي'],
    h1: 'حساب العمر بالتاريخ الميلادي',
    intro: 'اكتشف عمرك الحقيقي بالتقويم الميلادي (الشمسي). توفر هذه الأداة تحليلاً كاملاً لعمرك وموعد عيد ميلادك القادم.',
    canonical: '/how-old-am-i/gregorian'
  };
}

// --- New Generators for Missing Pages ---

export function generateSalarySEO(): PageSEO {
  return {
    title: 'مواعيد الرواتب السعودية 1446 - العد التنازلي للراتب',
    description: 'متى ينزل الراتب؟ جدول مواعيد صرف الرواتب للموظفين الحكوميين والعسكر والمتقاعدين وحساب المواطن بالتاريخ الميلادي والهجري.',
    keywords: ['موعد الرواتب', 'الراتب القادم', 'كم باقي على الراتب', 'جدول الرواتب 1446', 'راتب التقاعد'],
    h1: 'مواعيد صرف الرواتب وحساب المواطن',
    intro: 'تابع العد التنازلي لموعد صرف الراتب القادم في السعودية. جدول محدث يوضح تواريخ الإيداع للموظفين والمتقاعدين وبرامج الدعم الحكومي.',
    canonical: '/salary-date/hijri' // Assuming this route based on file structure
  };
}

export function generateWhiteDaysSEO(): PageSEO {
  return {
    title: 'الأيام البيض لهذا الشهر 1446 - فضلها وموعدها',
    description: 'متى الأيام البيض لهذا الشهر؟ تعرف على تواريخ الأيام البيض لشهر رجب، شعبان، ورمضان 1446 وفضل صيامها.',
    keywords: ['الايام البيض', 'صيام الايام البيض', 'متى الايام البيض', 'جدول الايام البيض 1446'],
    h1: 'مواعيد الأيام البيض لهذا الشهر',
    intro: 'صفحة مخصصة لمتابعة تواريخ الأيام البيض (13، 14، 15) من كل شهر هجري، مع التنبيه بموعد بدايتها حسب تقويم أم القرى.',
    canonical: '/white-days'
  };
}

export function generateIslamicEventsSEO(): PageSEO {
  return {
    title: 'المناسبات الإسلامية 1446 / 2025 - تقويم الإجازات',
    description: 'قائمة شاملة بمواعيد المناسبات الإسلامية والإجازات الرسمية لعام 1446. موعد رمضان، عيد الفطر، عيد الأضحى، ويوم عرفة.',
    keywords: ['مناسبات 1446', 'اجازات 1446', 'موعد رمضان 2025', 'متى عيد الفطر', 'يوم عرفة 1446'],
    h1: 'تقويم المناسبات الإسلامية والإجازات',
    intro: 'دليلك الشامل لأهم التواريخ الإسلامية في العام الحالي. تعرف على المواعيد المتوقعة شرعياً وفلكياً للأعياد والمواسم الدينية.',
    canonical: '/islamic-events'
  };
}

// --- Routes Generator ---

export function getAllProgrammaticRoutes(): string[] {
  const routes: string[] = [
    '/',
    '/date/today',
    '/how-old-am-i/hijri',
    '/how-old-am-i/gregorian',
    '/salary-date/hijri',  // Added
    '/salary-date/gregorian', // Added assuming it exists
    '/white-days',        // Added
    '/islamic-events'     // Added
  ];
  
  // Calendar year pages
  for (let year = HIJRI_YEAR_RANGE.start; year <= HIJRI_YEAR_RANGE.end; year++) {
    routes.push(`/calendar/${year}`);
  }
  
  // Hijri to Gregorian conversion pages
  for (let year = HIJRI_YEAR_RANGE.start; year <= HIJRI_YEAR_RANGE.end; year++) {
    routes.push(`/convert/hijri-to-gregorian/${year}`);
  }
  
  // Gregorian to Hijri conversion pages
  for (let year = GREGORIAN_YEAR_RANGE.start; year <= GREGORIAN_YEAR_RANGE.end; year++) {
    routes.push(`/convert/gregorian-to-hijri/${year}`);
  }
  
  // City date pages
  CITIES.forEach(city => {
    routes.push(`/date-today/${city.slug}`);
  });
  
  return routes;
}

// --- FAQ Data ---

export const FAQ_DATA = {
  general: [
    {
      question: 'كيف أحول التاريخ من هجري لميلادي بدقة؟',
      answer: 'يمكنك استخدام أداتنا المجانية التي تعتمد على تقويم أم القرى الرسمي. فقط أدخل اليوم والشهر والسنة الهجرية وسيظهر لك التاريخ الميلادي فوراً.'
    },
    {
      question: 'متى ينزل حساب المواطن هذا الشهر؟',
      answer: 'يتم إيداع حساب المواطن عادة في اليوم العاشر من كل شهر ميلادي، أو يوم قبله أو بعده إذا صادف عطلة رسمية. يمكنك مراجعة صفحة الرواتب لدينا للتفاصيل.'
    },
    {
      question: 'ما هو تاريخ اليوم الهجري في السعودية؟',
      answer: 'نحن نقوم بمزامنة التاريخ يومياً مع الرؤية الشرعية وتقويم أم القرى لضمان عرض التاريخ الهجري الدقيق في المملكة العربية السعودية.'
    },
    {
      question: 'كيف أحسب عمري للتقديم على وظيفة؟',
      answer: 'معظم الوظائف الحكومية تعتمد التقويم الهجري، والشركات الخاصة تعتمد الميلادي. استخدم حاسبة العمر لدينا للحصول على عمرك الدقيق بالصيغتين.'
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
      question: 'متى موعد صرف الرواتب الحكومية؟',
      answer: 'يتم صرف الرواتب الحكومية في السعودية بتاريخ 27 من كل شهر ميلادي.'
    },
    {
      question: 'كم باقي على الراتب بالهجري؟',
      answer: 'تختلف التواريخ الهجرية للرواتب كل شهر لأن الرواتب ثابتة بالميلادي. استخدم عداد الرواتب في موقعنا لمعرفة الأيام المتبقية بدقة.'
    }
  ],
  whiteDays: [
    {
      question: 'ما هي الأيام البيض؟',
      answer: 'هي الأيام الثالث عشر والرابع عشر والخامس عشر من كل شهر هجري، ويستحب صيامها.'
    },
    {
      question: 'هل الأيام البيض ثابتة في التقويم الميلادي؟',
      answer: 'لا، لأنها تعتمد على الأشهر القمرية (الهجرية)، لذا يختلف موعدها في التقويم الميلادي كل شهر. تابع صفحتنا للتحديث الشهري.'
    }
  ]
};