# محول التاريخ الهجري - Next.js

تم تحويل المشروع من React + Vite إلى Next.js 14 مع App Router.

## 🚀 التغييرات الرئيسية

### البنية المعمارية
- ✅ **من Vite إلى Next.js**: استبدال Vite بـ Next.js 14 للحصول على SSR و SSG
- ✅ **App Router**: استخدام App Router الجديد بدلاً من Pages Router
- ✅ **File-based Routing**: التوجيه التلقائي بناءً على بنية المجلدات
- ✅ **TypeScript**: الحفاظ على دعم TypeScript الكامل

### التوجيه (Routing)
- ❌ `react-router-dom`
- ✅ `next/link` و `next/navigation`
- ✅ Dynamic Routes مع `[param]` folders

### المكونات
- ✅ تم تحويل جميع المكونات لتكون متوافقة مع Next.js
- ✅ `'use client'` directive للمكونات التي تستخدم hooks
- ✅ Server Components افتراضياً للصفحات الثابتة

### SEO
- ✅ Next.js Metadata API بدلاً من SEOHead component
- ✅ JSON-LD structured data
- ✅ Automatic sitemap generation capability

## 📁 بنية المشروع

```
convert-hijri-nextjs/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page (/)
│   ├── date/
│   │   └── today/
│   │       └── page.tsx         # /date/today
│   ├── calendar/
│   │   └── [year]/
│   │       └── page.tsx         # /calendar/:year
│   ├── convert/
│   │   ├── hijri-to-gregorian/
│   │   │   └── [year]/
│   │   │       └── page.tsx     # /convert/hijri-to-gregorian/:year
│   │   └── gregorian-to-hijri/
│   │       └── [year]/
│   │           └── page.tsx     # /convert/gregorian-to-hijri/:year
│   ├── how-old-am-i/
│   │   ├── hijri/
│   │   │   └── page.tsx         # /how-old-am-i/hijri
│   │   └── gregorian/
│   │       └── page.tsx         # /how-old-am-i/gregorian
│   ├── date-today/
│   │   └── [city]/
│   │       └── page.tsx         # /date-today/:city
│   └── not-found.tsx            # 404 page
├── components/                   # React components
│   ├── ui/                      # Shadcn UI components
│   ├── DateConverter.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/                         # Utility functions
│   ├── hijriConverter.ts
│   ├── seoData.ts
│   └── utils.ts
├── hooks/                       # Custom React hooks
├── public/                      # Static files
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🛠️ التثبيت والتشغيل

### المتطلبات
- Node.js 18.17 أو أحدث
- npm أو yarn أو pnpm أو bun

### خطوات التثبيت

1. **تثبيت التبعيات**
```bash
npm install
# أو
yarn install
# أو
pnpm install
# أو
bun install
```

2. **إنشاء ملف البيئة**
```bash
cp .env.example .env.local
```

عدّل `.env.local` وأضف:
```env
NEXT_PUBLIC_SITE_URL=https://convert-hijri.com
```

3. **تشغيل خادم التطوير**
```bash
npm run dev
# أو
yarn dev
# أو
pnpm dev
# أو
bun dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

### البناء للإنتاج

```bash
npm run build
npm run start
```

## 📝 دليل الترحيل من React Router إلى Next.js

### 1. الروابط (Links)

**قبل (React Router):**
```tsx
import { Link } from 'react-router-dom';

<Link to="/date/today">تاريخ اليوم</Link>
```

**بعد (Next.js):**
```tsx
import Link from 'next/link';

<Link href="/date/today">تاريخ اليوم</Link>
```

### 2. البارامترز الديناميكية (Dynamic Params)

**قبل (React Router):**
```tsx
import { useParams } from 'react-router-dom';

const { year } = useParams();
```

**بعد (Next.js):**
```tsx
'use client'
import { useParams } from 'next/navigation';

const params = useParams();
const year = params.year;
```

### 3. التنقل البرمجي (Programmatic Navigation)

**قبل (React Router):**
```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/date/today');
```

**بعد (Next.js):**
```tsx
'use client'
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/date/today');
```

### 4. Metadata و SEO

**قبل (Custom SEOHead):**
```tsx
<SEOHead seo={seo} schema={schema} />
```

**بعد (Next.js Metadata):**
```tsx
export const metadata: Metadata = {
  title: 'عنوان الصفحة',
  description: 'وصف الصفحة',
  // ...
}
```

### 5. Server vs Client Components

- **Server Components** (افتراضي): للصفحات الثابتة التي لا تحتاج interactivity
- **Client Components** (مع `'use client'`): للمكونات التي تستخدم:
  - `useState`, `useEffect`, وغيرها من React hooks
  - Event handlers مثل `onClick`, `onChange`
  - Browser APIs

## 🎨 Styling

المشروع يستخدم:
- **Tailwind CSS** للتنسيق
- **Shadcn/ui** للمكونات الجاهزة
- **CSS Variables** للثيمات

## 🚢 النشر (Deployment)

### Vercel (موصى به)
1. ادفع الكود إلى GitHub
2. استورد المشروع في [Vercel](https://vercel.com)
3. Vercel ستكتشف Next.js تلقائياً وتقوم بالنشر

### Netlify
```bash
npm run build
```
ثم انشر مجلد `.next` مع `next.config.js`

### Docker
```dockerfile
FROM node:18-alpine AS base
# ... Docker configuration
```

## ⚙️ الإعدادات والتخصيص

### next.config.js
- تكوين i18n للعربية
- إعدادات الصور
- Redirects و Rewrites

### tailwind.config.ts
- ألوان الثيم
- الخطوط المخصصة
- Plugins

## 📊 الأداء

تحسينات الأداء في Next.js:
- ✅ **Automatic Code Splitting**
- ✅ **Image Optimization** مع `next/image`
- ✅ **Font Optimization** مع `next/font`
- ✅ **Server Components** لتقليل JavaScript على المتصفح
- ✅ **Static Generation** للصفحات الثابتة
- ✅ **Incremental Static Regeneration (ISR)**

## 🐛 المشاكل الشائعة وحلولها

### 1. "useParams is not a function"
تأكد من إضافة `'use client'` في بداية الملف.

### 2. "Cannot read property 'year' of undefined"
استخدم optional chaining: `params?.year` أو تحقق من وجود params أولاً.

### 3. Hydration Errors
تأكد من أن HTML المُنشأ على الخادم يطابق HTML على المتصفح.

## 📚 موارد إضافية

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 المساهمة

لا تتردد في فتح Issues أو Pull Requests لتحسين المشروع.

## 📄 الترخيص

[اختر الترخيص المناسب]

---

تم التحويل من React + Vite إلى Next.js 14 ✨
