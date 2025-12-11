import { useEffect } from 'react';
import type { PageSEO } from '@/lib/seoData';

// ✅ قاعدة أساسية لعنوان الموقع (قابلة للتهيئة)
const DEFAULT_BASE_URL = 'https://convert-hijri.com';

function getBaseUrl(): string {
  // لو فيه متغير بيئة من Next.js
  // مثال: NEXT_PUBLIC_SITE_URL=https://convert-hijri.com
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (envUrl) return envUrl.replace(/\/+$/, '');

  // لو شغال في المتصفح استخدم origin الحالي
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin.replace(/\/+$/, '');
  }

  // Fallback
  return DEFAULT_BASE_URL;
}

const BASE_URL = getBaseUrl();

interface SEOHeadProps {
  seo: PageSEO;
  schema?: object[];
}

export function SEOHead({ seo, schema }: SEOHeadProps) {
  useEffect(() => {
    // --- Title ---
    document.title = seo.title;

    const updateMetaTag = (name: string, content: string) => {
      if (!content) return;
      let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updateOGTag = (property: string, content: string) => {
      if (!content) return;
      let meta = document.querySelector<HTMLMetaElement>(
        `meta[property="${property}"]`
      );
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const fullUrl = `${BASE_URL}${seo.canonical}`;

    // --- Basic Meta ---
    updateMetaTag('description', seo.description);
    updateMetaTag('keywords', seo.keywords.join(', '));

    // --- Open Graph ---
    updateOGTag('og:title', seo.title);
    updateOGTag('og:description', seo.description);
    updateOGTag('og:type', 'website');
    updateOGTag('og:url', fullUrl);

    // --- Twitter ---
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seo.title);
    updateMetaTag('twitter:description', seo.description);

    // --- Canonical ---
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // --- JSON-LD Schema ---
    if (schema && schema.length > 0) {
      // امسح أي سكربت قديم
      document
        .querySelectorAll('script[data-schema="programmatic"]')
        .forEach((el) => el.remove());

      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-schema', 'programmatic');
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    // Cleanup عند تغيير الصفحة
    return () => {
      document
        .querySelectorAll('script[data-schema="programmatic"]')
        .forEach((el) => el.remove());
    };
  }, [seo, schema]);

  return null;
}

// ================= Schema Generators =================

export function generateWebPageSchema(seo: PageSEO): object {
  const fullUrl = `${BASE_URL}${seo.canonical}`;

  return {
    '@type': 'WebPage',
    '@id': `${fullUrl}#webpage`,
    url: fullUrl,
    name: seo.title,
    description: seo.description,
    inLanguage: 'ar',
    isPartOf: {
      '@id': `${BASE_URL}/#website`,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
): object {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
): object {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateHowToSchema(title: string, steps: string[]): object {
  return {
    '@type': 'HowTo',
    name: title,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      text: step,
    })),
  };
}
