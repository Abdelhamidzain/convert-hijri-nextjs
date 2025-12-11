# ⚡ أوامر سريعة للنسخ واللصق

استخدم هذه الأوامر للرفع على GitHub بسرعة.

---

## 🔧 تثبيت Git (مرة واحدة فقط)

### Windows:
حمّل من: https://git-scm.com/download/win

### Mac:
```bash
git --version
```

### Linux:
```bash
sudo apt-get install git
```

---

## 📤 رفع المشروع لأول مرة

### 1. اذهب لمجلد المشروع
```bash
cd Desktop/convert-hijri-nextjs
```

### 2. ابدأ Git
```bash
git init
```

### 3. أضف الملفات
```bash
git add .
```

### 4. اعمل Commit
```bash
git commit -m "Initial commit - تحويل المشروع إلى Next.js"
```

### 5. اربط مع GitHub
```bash
# غيّر YOUR-USERNAME باسمك
git remote add origin https://github.com/YOUR-USERNAME/convert-hijri-nextjs.git
```

### 6. ارفع الملفات
```bash
git branch -M main
git push -u origin main
```

---

## 🔄 تحديث المشروع لاحقاً

عند تعديل أي ملف:

```bash
# أضف التعديلات
git add .

# اكتب رسالة وصفية
git commit -m "وصف التعديل (مثال: تحديث الصفحة الرئيسية)"

# ارفع
git push
```

---

## 🔑 إنشاء Personal Access Token

1. اذهب إلى: https://github.com/settings/tokens
2. اضغط "Generate new token (classic)"
3. اكتب اسم: `Convert Hijri Project`
4. اختر: ✅ repo
5. اضغ "Generate token"
6. **انسخ الـ Token** (لن تراه مرة أخرى!)
7. استخدمه بدل كلمة المرور

---

## 🌐 ربط Vercel

### عبر الموقع (الأسهل):
1. اذهب إلى: https://vercel.com
2. "Sign Up" → "Continue with GitHub"
3. "Add New" → "Project"
4. اختر `convert-hijri-nextjs`
5. "Deploy"

### أو عبر Terminal:
```bash
# ثبّت Vercel CLI
npm i -g vercel

# سجل الدخول
vercel login

# انشر
vercel --prod
```

---

## 📋 أوامر مفيدة أخرى

### معرفة حالة Git:
```bash
git status
```

### عرض الـ commits السابقة:
```bash
git log --oneline
```

### تراجع عن آخر commit (قبل push):
```bash
git reset --soft HEAD~1
```

### سحب آخر تحديث من GitHub:
```bash
git pull
```

### نسخ مشروع من GitHub:
```bash
git clone https://github.com/YOUR-USERNAME/convert-hijri-nextjs.git
```

---

## 🐛 حل مشاكل شائعة

### المشكلة: "fatal: not a git repository"
```bash
# تأكد أنك في المجلد الصحيح
pwd  # لعرض المجلد الحالي
cd path/to/project  # اذهب للمجلد الصحيح
git init  # ابدأ git
```

### المشكلة: "Permission denied"
```bash
# تأكد من صحة الـ Token
# أو استخدم SSH بدلاً من HTTPS
```

### المشكلة: "Updates were rejected"
```bash
# اسحب التحديثات أولاً
git pull origin main --rebase
# ثم ارفع
git push
```

### المشكلة: Merge conflicts
```bash
# افتح الملف المتعارض
# حل التعارض يدوياً
git add .
git commit -m "حل التعارضات"
git push
```

---

## 📝 نماذج رسائل Commit جيدة

```bash
git commit -m "إضافة صفحة About"
git commit -m "إصلاح خطأ في محول التاريخ"
git commit -m "تحسين تصميم الصفحة الرئيسية"
git commit -m "تحديث المكتبات للإصدار الأحدث"
git commit -m "إضافة ميزة حساب العمر"
```

---

## ✅ قائمة تحقق سريعة

قبل الـ push:
- [ ] `git status` - للتأكد من التغييرات
- [ ] `git add .` - إضافة كل شيء
- [ ] `git commit -m "..."` - رسالة واضحة
- [ ] `git push` - رفع التحديثات

---

## 🆘 روابط مهمة

- GitHub: https://github.com
- Vercel: https://vercel.com
- Git Docs: https://git-scm.com/doc
- GitHub Tokens: https://github.com/settings/tokens

---

**نصيحة:** احفظ هذا الملف للرجوع إليه عند الحاجة! 📌
