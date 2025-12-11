# 📋 دليل التحويل الشامل من React + Vite إلى Next.js

## نظرة عامة على التحويل

تم تحويل مشروع Convert Hijri من:
- **من**: React 18 + Vite + React Router
- **إلى**: Next.js 14 + App Router

## ✅ ما تم إنجازه

### 1. البنية الأساسية

#### تم إنشاء:
- ✅ `package.json` - مع تبعيات Next.js
- ✅ `next.config.js` - إعدادات Next.js
- ✅ `tsconfig.json` - إعدادات TypeScript لـ Next.js
- ✅ `app/layout.tsx` - Root layout
- ✅ `app/page.tsx` - الصفحة الرئيسية
- ✅ `app/globals.css` - ملف CSS العام

#### تم نسخه:
- ✅ `components/` - جميع المكونات
- ✅ `lib/` - جميع الدوال المساعدة
- ✅ `hooks/` - Custom hooks
- ✅ `public/` - الملفات الثابتة
- ✅ `tailwind.config.ts` - إعدادات Tailwind
- ✅ `postcss.config.js` - إعدادات PostCSS
- ✅ `components.json` - إعدادات Shadcn/ui

### 2. الصفحات المُحوّلة

تم تحويل جميع الصفحات (13 صفحة):

| الصفحة الأصلية | مسار Next.js | الحالة |
|----------------|--------------|--------|
| `Index.tsx` | `app/page.tsx` | ✅ |
| `TodayDate.tsx` | `app/date/today/page.tsx` | ✅ |
| `CalendarYear.tsx` | `app/calendar/[year]/page.tsx` | ✅ |
| `HijriToGregorianYear.tsx` | `app/convert/hijri-to-gregorian/[year]/page.tsx` | ✅ |
| `GregorianToHijriYear.tsx` | `app/convert/gregorian-to-hijri/[year]/page.tsx` | ✅ |
| `AgeCalculatorHijri.tsx` | `app/how-old-am-i/hijri/page.tsx` | ✅ |
| `AgeCalculatorGregorian.tsx` | `app/how-old-am-i/gregorian/page.tsx` | ✅ |
| `CityDate.tsx` | `app/date-today/[city]/page.tsx` | ✅ |
| `SalaryDateGregorian.tsx` | `app/salary/date/[monthYear]/page.tsx` | ✅ |
| `SalaryDateHijri.tsx` | `app/salary/hijri/[monthYear]/page.tsx` | ✅ |
| `WhiteDays.tsx` | `app/white-days/[monthYear]/page.tsx` | ✅ |
| `HijriMonthStart.tsx` | `app/hijri-month/start/[monthYear]/page.tsx` | ✅ |
| `IslamicEvents.tsx` | `app/events/[eventYear]/page.tsx` | ✅ |
| `NotFound.tsx` | `app/not-found.tsx` | ✅ |

### 3. المكونات المُعدّلة

#### تم تعديلها للتوافق مع Next.js:
- ✅ `Navbar.tsx` - استخدام `next/link` و `usePathname`
- ✅ `NavLink.tsx` - إعادة بناء باستخدام Next.js Link
- ✅ `InternalLinks.tsx` - تحويل جميع الروابط إلى `next/link`

#### تحتاج مراجعة (إضافة `'use client'` حسب الحاجة):
- ⚠️ `DateConverter.tsx` - يستخدم state
- ⚠️ `CountdownTimer.tsx` - يستخدم effects و intervals
- ⚠️ `FAQSection.tsx` - قد يستخدم state للتوسع/الطي
- ⚠️ مكونات أخرى تستخدم hooks أو event handlers

### 4. التحسينات

#### SEO:
- ✅ Next.js Metadata API في `layout.tsx`
- ✅ JSON-LD structured data في الصفحات
- ✅ إمكانية إنشاء sitemap.xml تلقائياً
- ✅ إمكانية إنشاء robots.txt ديناميكياً

#### الأداء:
- ✅ Automatic code splitting
- ✅ إمكانية استخدام Server Components
- ✅ إمكانية Static Site Generation (SSG)
- ✅ إمكانية Incremental Static Regeneration (ISR)

## 🔧 خطوات ما بعد التحويل

### 1. اختبار شامل للمشروع

```bash
# تثبيت التبعيات
npm install

# تشغيل خادم التطوير
npm run dev

# فتح http://localhost:3000
```

#### قائمة التحقق:
- [ ] الصفحة الرئيسية تعمل بشكل صحيح
- [ ] جميع الروابط تعمل
- [ ] محول التاريخ يعمل
- [ ] الصفحات الديناميكية ([year], [city]) تعمل
- [ ] التنقل بين الصفحات سلس
- [ ] لا توجد أخطاء في console
- [ ] SEO metadata صحيح في كل صفحة

### 2. إضافة `'use client'` للمكونات التفاعلية

فتش في المشروع عن المكونات التي تستخدم:
- `useState`, `useEffect`, `useCallback`, etc.
- Event handlers (`onClick`, `onChange`, etc.)
- Browser APIs (`window`, `document`, etc.)

وأضف `'use client'` في أول سطر:

```tsx
'use client'

import { useState } from 'react'
// ... rest of component
```

### 3. تحسين الـ Metadata لكل صفحة

في كل صفحة ديناميكية، أضف:

```tsx
// app/calendar/[year]/page.tsx
import type { Metadata } from 'next'

type Props = {
  params: { year: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `التقويم الهجري ${params.year}`,
    description: `...',
  }
}

export default function CalendarYearPage({ params }: Props) {
  // ...
}
```

### 4. استبدال SEOHead Component

#### قبل:
```tsx
<SEOHead seo={seo} schema={schema} />
```

#### بعد:
```tsx
// في أعلى الملف
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  // ...
}

// في المكون
<script 
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

### 5. تحسين الصور

استبدل `<img>` بـ `next/image`:

```tsx
import Image from 'next/image'

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority // للصور المهمة فوق الصفحة
/>
```

### 6. إضافة Loading States

أنشئ `loading.tsx` في المجلدات الديناميكية:

```tsx
// app/calendar/[year]/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
    </div>
  )
}
```

### 7. إضافة Error Boundaries

أنشئ `error.tsx`:

```tsx
// app/calendar/[year]/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2>حدث خطأ!</h2>
        <button onClick={reset}>حاول مرة أخرى</button>
      </div>
    </div>
  )
}
```

### 8. تحسين الأداء

#### استخدام Server Components حيث ممكن:
```tsx
// لا تحتاج 'use client' إذا كان المكون لا يستخدم interactivity
export default async function StaticPage() {
  // يمكن استخدام async للحصول على البيانات
  const data = await fetchData()
  
  return <div>{data}</div>
}
```

#### Static Site Generation للصفحات المتوقعة:
```tsx
// app/calendar/[year]/page.tsx
export async function generateStaticParams() {
  const years = Array.from({ length: 10 }, (_, i) => 1445 + i)
  
  return years.map((year) => ({
    year: year.toString(),
  }))
}
```

### 9. إضافة Sitemap و Robots.txt

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://convert-hijri.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://convert-hijri.com/date/today',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // ... المزيد من الصفحات
  ]
}

// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://convert-hijri.com/sitemap.xml',
  }
}
```

### 10. إعداد ملف البيئة

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://convert-hijri.com
```

## 🎯 نصائح مهمة

### 1. Server Components vs Client Components

| Server Component | Client Component |
|-----------------|------------------|
| ✅ الافتراضي في Next.js | ⚠️ يحتاج `'use client'` |
| ✅ لا يُرسل JS للمتصفح | ❌ يُرسل JS للمتصفح |
| ✅ يمكن استخدام async | ❌ لا يمكن استخدام async |
| ❌ لا يمكن استخدام hooks | ✅ يمكن استخدام hooks |
| ❌ لا يمكن استخدام event handlers | ✅ يمكن استخدام event handlers |

### 2. Dynamic Imports للكود الثقيل

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>جارٍ التحميل...</p>,
  ssr: false, // إذا كان المكون يستخدم browser APIs فقط
})
```

### 3. استخدام middleware للتوجيهات

```tsx
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // مثال: إعادة توجيه المسارات القديمة
  if (request.nextUrl.pathname === '/old-path') {
    return NextResponse.redirect(new URL('/new-path', request.url))
  }
}
```

## 📊 الفروقات الرئيسية

### React Router vs Next.js Router

| الميزة | React Router | Next.js |
|--------|-------------|---------|
| التوجيه | Client-side فقط | Server + Client |
| Data Fetching | في المكونات | في Server Components أو API Routes |
| SEO | يحتاج معالجة خاصة | مدمج بشكل كامل |
| Code Splitting | يدوي | تلقائي |
| Prefetching | غير متوفر | تلقائي مع Link |

## 🔍 اختبارات الجودة

قبل النشر، تأكد من:

### 1. Lighthouse Scores
```bash
npm run build
npm run start
# افتح Chrome DevTools > Lighthouse
```

الأهداف:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

### 2. Type Checking
```bash
npm run type-check
# أو
npx tsc --noEmit
```

### 3. Linting
```bash
npm run lint
```

### 4. Build Success
```bash
npm run build
```
يجب أن ينجح البناء بدون أخطاء.

## 📝 قائمة مرجعية نهائية

- [ ] تم تثبيت جميع التبعيات
- [ ] تم إنشاء `.env.local`
- [ ] خادم التطوير يعمل بنجاح
- [ ] جميع الصفحات تُحمل بدون أخطاء
- [ ] تم إضافة `'use client'` للمكونات التفاعلية
- [ ] تم تحديث Metadata لجميع الصفحات
- [ ] تم اختبار جميع الروابط
- [ ] تم اختبار النماذج والتفاعلات
- [ ] تم فحص Console للأخطاء
- [ ] تم فحص Network للطلبات الفاشلة
- [ ] البناء للإنتاج ينجح
- [ ] Lighthouse scores مقبولة
- [ ] تم اختبار على أجهزة مختلفة

## 🚀 جاهز للنشر!

بعد إكمال جميع الخطوات أعلاه، المشروع جاهز للنشر على:
- Vercel (موصى به)
- Netlify
- AWS
- Google Cloud
- أي خادم يدعم Node.js

---

تم إعداد هذا الدليل لمساعدتك في إكمال التحويل بنجاح! 🎉
