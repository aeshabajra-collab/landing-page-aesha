"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The consultation is free, and you will get clear marketing direction for your business."
  },
  {
    question: "Who is this consultation for?",
    answer:
      "This is for Nepal-based business owners who want more visibility, inquiries, leads, customers, sales, and growth from digital marketing."
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "You will understand what is not working in your current marketing and get a customized digital marketing plan for your business."
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The call is designed to give you clear next steps without long explanation or confusion."
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. If you have a Facebook page, Instagram page, or any current online presence, that is enough to start."
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "You will be redirected to the thank you page and can follow the next steps before your consultation."
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. The goal of the call is to give you a customized marketing plan based on your business."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-y border-line bg-white px-5 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            Questions
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-lg border border-line bg-mist"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-ink"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl leading-none">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-5 pb-5 text-sm leading-6 text-charcoal/75">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
