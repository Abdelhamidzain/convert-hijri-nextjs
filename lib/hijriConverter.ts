// Hijri calendar conversion utilities
// Based on the Umm al-Qura calendar algorithm

const HIJRI_MONTHS = [
  'محرم',
  'صفر',
  'ربيع الأول',
  'ربيع الآخر',
  'جمادى الأولى',
  'جمادى الآخرة',
  'رجب',
  'شعبان',
  'رمضان',
  'شوال',
  'ذو القعدة',
  'ذو الحجة'
];

const GREGORIAN_MONTHS = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل',
  'مايو',
  'يونيو',
  'يوليو',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر'
];

const WEEKDAYS = [
  'الأحد',
  'الإثنين',
  'الثلاثاء',
  'الأربعاء',
  'الخميس',
  'الجمعة',
  'السبت'
];

export interface HijriDate {
  day: number;
  month: number;
  year: number;
  monthName: string;
  weekday: string;
}

export interface GregorianDate {
  day: number;
  month: number;
  year: number;
  monthName: string;
  weekday: string;
}

// Julian Day Number calculation for Gregorian date
function gregorianToJD(year: number, month: number, day: number): number {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
}

// Julian Day Number to Gregorian date
function jdToGregorian(jd: number): { year: number; month: number; day: number } {
  const Z = Math.floor(jd + 0.5);
  const A = Math.floor((Z - 1867216.25) / 36524.25);
  const AA = Z + 1 + A - Math.floor(A / 4);
  const B = AA + 1524;
  const C = Math.floor((B - 122.1) / 365.25);
  const D = Math.floor(365.25 * C);
  const E = Math.floor((B - D) / 30.6001);
  
  const day = B - D - Math.floor(30.6001 * E);
  const month = E < 14 ? E - 1 : E - 13;
  const year = month > 2 ? C - 4716 : C - 4715;
  
  return { year, month, day };
}

// Julian Day Number calculation for Hijri date (Tabular Islamic calendar)
function hijriToJD(year: number, month: number, day: number): number {
  return Math.floor((11 * year + 3) / 30) + 354 * year + 30 * month - Math.floor((month - 1) / 2) + day + 1948440 - 385;
}

// Julian Day Number to Hijri date
function jdToHijri(jd: number): { year: number; month: number; day: number } {
  const L = Math.floor(jd) - 1948440 + 10632;
  const N = Math.floor((L - 1) / 10631);
  const L2 = L - 10631 * N + 354;
  const J = Math.floor((10985 - L2) / 5316) * Math.floor((50 * L2) / 17719) + Math.floor(L2 / 5670) * Math.floor((43 * L2) / 15238);
  const L3 = L2 - Math.floor((30 - J) / 15) * Math.floor((17719 * J) / 50) - Math.floor(J / 16) * Math.floor((15238 * J) / 43) + 29;
  const month = Math.floor((24 * L3) / 709);
  const day = L3 - Math.floor((709 * month) / 24);
  const year = 30 * N + J - 30;
  
  return { year, month, day };
}

// Get weekday from Julian Day Number
function getWeekday(jd: number): string {
  const dayIndex = Math.floor(jd + 1.5) % 7;
  return WEEKDAYS[dayIndex];
}

// Convert Gregorian date to Hijri
export function gregorianToHijri(year: number, month: number, day: number): HijriDate {
  const jd = gregorianToJD(year, month, day);
  const hijri = jdToHijri(jd);
  const weekday = getWeekday(jd);
  
  return {
    day: hijri.day,
    month: hijri.month,
    year: hijri.year,
    monthName: HIJRI_MONTHS[hijri.month - 1],
    weekday
  };
}

// Convert Hijri date to Gregorian
export function hijriToGregorian(year: number, month: number, day: number): GregorianDate {
  const jd = hijriToJD(year, month, day);
  const gregorian = jdToGregorian(jd);
  const weekday = getWeekday(jd);
  
  return {
    day: gregorian.day,
    month: gregorian.month,
    year: gregorian.year,
    monthName: GREGORIAN_MONTHS[gregorian.month - 1],
    weekday
  };
}

// Format Hijri date as Arabic string
export function formatHijriDate(date: HijriDate): string {
  return `${date.weekday} ${date.day} ${date.monthName} ${date.year} هـ`;
}

// Format Gregorian date as Arabic string
export function formatGregorianDate(date: GregorianDate): string {
  return `${date.weekday} ${date.day} ${date.monthName} ${date.year} م`;
}

// Get today's dates
export function getTodayDates(): { hijri: HijriDate; gregorian: GregorianDate } {
  const today = new Date();
  const gregorian = {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
    monthName: GREGORIAN_MONTHS[today.getMonth()],
    weekday: WEEKDAYS[today.getDay()]
  };
  
  const hijri = gregorianToHijri(gregorian.year, gregorian.month, gregorian.day);
  
  return { hijri, gregorian };
}

// Validate Hijri date
export function isValidHijriDate(year: number, month: number, day: number): boolean {
  if (year < 1 || year > 1500) return false;
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 30) return false;
  
  // Odd months have 30 days, even months have 29 days (except in leap years)
  const isLeapYear = (11 * year + 14) % 30 < 11;
  const daysInMonth = month % 2 === 1 ? 30 : (month === 12 && isLeapYear ? 30 : 29);
  
  return day <= daysInMonth;
}

// Get Hijri months for select
export function getHijriMonths(): { value: number; label: string }[] {
  return HIJRI_MONTHS.map((name, index) => ({
    value: index + 1,
    label: name
  }));
}

// Generate year options
export function getHijriYears(): number[] {
  const currentHijri = getTodayDates().hijri;
  const years: number[] = [];
  for (let i = currentHijri.year - 50; i <= currentHijri.year + 50; i++) {
    years.push(i);
  }
  return years;
}

export { HIJRI_MONTHS, GREGORIAN_MONTHS, WEEKDAYS };
