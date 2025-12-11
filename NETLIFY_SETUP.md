# ⚙️ إعدادات Netlify لموقع https://convert-hijri.com

دليل سريع لإعداد المشروع على Netlify بشكل صحيح.

---

## 🔧 الإعدادات المطلوبة في Netlify

### 1️⃣ Build Settings

في لوحة تحكم Netlify → Site Settings → Build & Deploy:

```
Build command: npm run build
Publish directory: .next
```

⚠️ **مهم:** الـ Publish directory يجب أن يكون `.next` وليس `dist`

---

### 2️⃣ Environment Variables

في Netlify → Site Settings → Environment Variables:

اضغ **Add a variable** وأضف:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://convert-hijri.com` |

✅ هذا يضمن أن روابط SEO تكون صحيحة

---

### 3️⃣ Next.js Plugin (تلقائي)

Netlify يثبت `@netlify/plugin-nextjs` تلقائياً.

إذا لم يكن مثبتاً:
1. اذهب إلى **Plugins**
2. ابحث عن "Essential Next.js"
3. اضغط **Install**

---

## 📋 خطوات Deploy السريعة

### الطريقة 1: Git Push (موصى بها)

```bash
# ارفع التعديلات على GitHub
git add .
git commit -m "إعدادات موقع convert-hijri.com"
git push
```

Netlify سيكتشف التغيير ويبدأ Deploy تلقائياً! 🚀

---

### الطريقة 2: Manual Deploy

1. اذهب إلى Netlify Dashboard
2. اضغط **Deploys** → **Trigger deploy** → **Deploy site**

---

## 🌐 ربط النطاق المخصص

إذا كنت تستخدم نطاق مخصص `convert-hijri.com`:

### في Netlify:
1. اذهب إلى **Domain Settings**
2. اضغط **Add custom domain**
3. أدخل: `convert-hijri.com`
4. اتبع التعليمات لإعداد DNS

### إعدادات DNS (في مسجل النطاق):

**للنطاق الرئيسي:**
```
Type: A Record
Name: @
Value: 75.2.60.5
```

**للنطاق الفرعي www:**
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

### SSL Certificate:
Netlify يوفر HTTPS مجاناً تلقائياً! ✅

---

## ✅ التحقق من نجاح Deploy

بعد Deploy، تحقق من:

### 1. الموقع يعمل:
```
https://convert-hijri.com
```

### 2. الروابط تعمل:
- ✅ `https://convert-hijri.com/` (الصفحة الرئيسية)
- ✅ `https://convert-hijri.com/date/today` (تاريخ اليوم)
- ✅ `https://convert-hijri.com/calendar/1446` (التقويم)

### 3. SSL يعمل:
- ✅ القفل الأخضر في المتصفح
- ✅ لا توجد تحذيرات أمان

### 4. SEO Tags:
افتح أي صفحة، اضغط F12، ثم:
```html
<!-- في <head> يجب أن تجد: -->
<meta property="og:url" content="https://convert-hijri.com/..." />
<link rel="canonical" href="https://convert-hijri.com/..." />
```

---

## 🚀 تحسينات الأداء (اختياري)

### 1. Enable Build Cache
في Netlify → Build Settings:
- ✅ Enable build plugins
- ✅ Cache Next.js build

### 2. Enable Asset Optimization
في Netlify → Post Processing:
- ✅ Bundle CSS
- ✅ Minify CSS
- ✅ Minify JS
- ✅ Pretty URLs

### 3. Enable Prerendering
Next.js يقوم بهذا تلقائياً! ✅

---

## 📊 مراقبة الأداء

### Netlify Analytics (اختياري - مدفوع)
- مشاهدات الصفحات
- معدل الارتداد
- مصادر الزيارات

### Google Analytics (مجاني)
أضف في `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🐛 حل المشاكل الشائعة

### المشكلة: "Build failed"
**الحل:**
1. تحقق من Build logs في Netlify
2. جرّب البناء محلياً: `npm run build`
3. تأكد من `package.json` صحيح

### المشكلة: "404 on refresh"
**الحل:**
- Next.js يحل هذه المشكلة تلقائياً
- تأكد من وجود `next.config.js`

### المشكلة: "Slow build times"
**الحل:**
- Enable build cache في Netlify
- استخدم `incremental static regeneration`

### المشكلة: "Environment variable not working"
**الحل:**
- تأكد من أن المتغير يبدأ بـ `NEXT_PUBLIC_`
- أعد Deploy بعد إضافة المتغير

---

## 📞 روابط مفيدة

- [Netlify Docs - Next.js](https://docs.netlify.com/frameworks/next-js/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Netlify Support](https://www.netlify.com/support/)

---

## ✨ نصائح نهائية

1. ✅ **استخدم Git:** كل push يعمل deploy تلقائي
2. ✅ **راجع Build logs:** إذا فشل الـ build
3. ✅ **اختبر محلياً:** قبل الـ push (`npm run build`)
4. ✅ **استخدم Preview Deploys:** لاختبار التغييرات قبل Production

---

**موقعك الآن جاهز على https://convert-hijri.com! 🎉**

آخر تحديث: 11 ديسمبر 2024
