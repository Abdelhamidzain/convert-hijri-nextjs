interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export function FAQSection({ faqs, title = 'الأسئلة الشائعة' }: FAQSectionProps) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-foreground">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details 
            key={index} 
            className="group bg-card border border-border rounded-lg overflow-hidden"
          >
            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-secondary/30 transition-colors">
              <h3 className="font-medium text-foreground text-right">{faq.question}</h3>
              <span className="text-muted-foreground group-open:rotate-180 transition-transform mr-2">
                ▼
              </span>
            </summary>
            <div className="p-4 pt-0 text-muted-foreground text-sm leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
