import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'محول التاريخ الهجري - تحويل التاريخ من هجري لميلادي والعكس',
    template: '%s | محول التاريخ الهجري'
  },
  description: 'منصة وأداة مجانية متخصصة في تحويل التاريخ بين التقويم الهجري والتاريخ الميلادي بدقة عالية. يتيح لك محول التاريخ إجراء تحويل التاريخ من هجري إلى ميلادي ومن ميلادي إلى هجري، ومعرفة تاريخ اليوم هجري وميلادي، وحساب العمر بالهجري والميلادي بسهولة.',
  keywords: ['محول التاريخ الهجري', 'تحويل التاريخ', 'هجري', 'ميلادي', 'تاريخ اليوم', 'حساب العمر'],
  authors: [{ name: 'Convert Hijri' }],
  creator: 'Convert Hijri',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://convert-hijri.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: '/',
    siteName: 'محول التاريخ الهجري',
    title: 'محول التاريخ الهجري - تحويل التاريخ من هجري لميلادي والعكس',
    description: 'منصة وأداة مجانية متخصصة في تحويل التاريخ بين التقويم الهجري والتاريخ الميلادي بدقة عالية.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'محول التاريخ الهجري',
    description: 'تحويل التاريخ من هجري لميلادي والعكس بدقة عالية',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
