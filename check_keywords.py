#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re

# قراءة الملف
with open('/home/claude/convert-hijri-nextjs/app/page-precise.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# استخراج المحتوى النصي فقط (بدون JSX tags و code)
# نزيل كل ما بين < و >
text_only = re.sub(r'<[^>]+>', ' ', content)
# نزيل الأسطر التي تحتوي على import, const, return, etc
text_only = re.sub(r'^(import|const|export|return|function).*$', '', text_only, flags=re.MULTILINE)
# نزيل JavaScript code
text_only = re.sub(r'\{[^\}]*\}', ' ', text_only)

# حساب إجمالي الكلمات
words = text_only.split()
total_words = len([w for w in words if len(w) > 1])  # نستثني الكلمات أحادية الحرف

print(f"إجمالي الكلمات: {total_words}")
print("="*60)

# الكلمات المفتاحية الأساسية
primary_keywords = {
    'التاريخ': {'target': 3.5, 'max': 36},
    'تحويل': {'target': 3.5, 'max': 36},
    'هجري': {'target': 2.1, 'max': 22},
    'ميلادي': {'target': 2.0, 'max': 21},
    'التقويم': {'target': 1.4, 'max': 15},
    'الميلادي': {'target': 1.3, 'max': 14},
    'والميلادي': {'target': 0.9, 'max': 9},
    'والعكس': {'target': 0.8, 'max': 8},
    'بسهولة': {'target': 0.8, 'max': 8},
}

# الكلمات التي يجب تقليلها
secondary_keywords = {
    'اليوم': {'max': 7},
    'محول': {'max': 7},
    'العمر': {'max': 7},
    'تقويم': {'max': 6},
    'hijri': {'max': 6},
    'خدمة': {'max': 5},
    'العربية': {'max': 5},
    'مجانية': {'max': 4},
    'تاريخ': {'max': 4},
    'لتحويل': {'max': 4},
    'القرى': {'max': 4},
    'الموقع': {'max': 4},
    'الصلاة': {'max': 4},
    'الهجرية': {'max': 3},
    'التحويل': {'max': 3},
    'حساب': {'max': 3},
    'التواريخ': {'max': 3},
    'هـ': {'max': 3},
    'مكة': {'max': 3},
    'برامج': {'max': 2},
    'يمكنك': {'max': 2},
    'أيضا': {'max': 2},
    'والشهر': {'max': 2},
    'والسنة': {'max': 2},
    'التقويمين': {'max': 2},
    'مواقيت': {'max': 2},
    'الإنترنت': {'max': 2},
    'النتيجة': {'max': 2},
    'الرسمي': {'max': 2},
    'المملكة': {'max': 2},
    'السعودية': {'max': 2},
    'عدد': {'max': 2},
    'الآخرة': {'max': 2},
    'المكرمة': {'max': 2},
    'سواء': {'max': 2},
}

print("\n🎯 الكلمات الأساسية (يجب أن تكون دقيقة):")
print("-"*60)
for keyword, data in primary_keywords.items():
    count = text_only.count(keyword)
    percentage = (count / total_words) * 100 if total_words > 0 else 0
    target_perc = data['target']
    max_count = data['max']
    
    status = "✅" if abs(percentage - target_perc) < 0.3 else "⚠️"
    if count > max_count + 2:
        status = "❌ زيادة"
    elif count < max_count - 2:
        status = "❌ نقص"
    
    print(f"{status} {keyword}: {count} مرة ({percentage:.2f}%) | المطلوب: {target_perc}% ({max_count} مرة)")

print("\n📊 الكلمات التي يجب تقليلها:")
print("-"*60)
for keyword, data in secondary_keywords.items():
    count = text_only.count(keyword)
    max_count = data['max']
    
    status = "✅" if count <= max_count else f"❌ زيادة ({count - max_count}+)"
    
    print(f"{status} {keyword}: {count} مرة | الحد الأقصى: {max_count}")

print("\n" + "="*60)
print(f"✅ التحليل مكتمل!")
