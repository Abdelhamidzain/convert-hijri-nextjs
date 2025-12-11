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
      <head>
        {/* Critical CSS Inline - للتحميل الفوري */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical CSS - يحمل فوراً قبل أي شيء */
          *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
          html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}
          body{margin:0;line-height:inherit;min-height:100vh;background-color:hsl(var(--background));color:hsl(var(--foreground))}
          
          /* Colors - تحميل فوري */
          :root{
            --background:0 0% 100%;
            --foreground:222.2 84% 4.9%;
            --card:0 0% 100%;
            --card-foreground:222.2 84% 4.9%;
            --primary:221.2 83.2% 53.3%;
            --primary-foreground:210 40% 98%;
            --muted:210 40% 96.1%;
            --muted-foreground:215.4 16.3% 46.9%;
            --border:214.3 31.8% 91.4%;
          }
          .dark{
            --background:222.2 84% 4.9%;
            --foreground:210 40% 98%;
            --card:222.2 84% 4.9%;
            --card-foreground:210 40% 98%;
            --primary:217.2 91.2% 59.8%;
            --primary-foreground:222.2 47.4% 11.2%;
            --muted:217.2 32.6% 17.5%;
            --muted-foreground:215 20.2% 65.1%;
            --border:217.2 32.6% 17.5%;
          }
          
          /* Layout Skeleton - يظهر فوراً */
          .pattern-islamic{
            background-color:hsl(var(--background));
            background-image:
              radial-gradient(circle at 25px 25px, hsl(var(--primary) / 0.05) 2%, transparent 0%),
              radial-gradient(circle at 75px 75px, hsl(var(--primary) / 0.05) 2%, transparent 0%);
            background-size:100px 100px;
            min-height:100vh;
          }
          
          /* Placeholder للمحتوى */
          .skeleton{
            animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;
            background-color:hsl(var(--muted));
            border-radius:0.5rem;
          }
          @keyframes pulse{
            0%,100%{opacity:1}
            50%{opacity:.5}
          }
          
          /* إخفاء المحتوى قبل التحميل */
          .lazy-load{
            min-height:200px;
            background:hsl(var(--card));
            border-radius:1rem;
          }
        `}} />
        
        {/* Preconnect للخطوط والموارد المهمة */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
