import FlodeskEmbed from "@/components/FlodeskEmbed";

export default function CTAForm() {
  return (
    <section id="lead-form" className="px-5 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            Book the call
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Get a free 1:1 consultation for your business.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-charcoal/80">
            <p>
              We will look at your current marketing and give you a customized
              strategy based on your business.
            </p>
            <p>No long explanation.</p>
            <p>No confusion.</p>
            <p className="font-semibold text-ink">
              Just clear next steps for your business growth.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-line bg-white p-4 shadow-soft sm:p-6">
          <FlodeskEmbed />
          <p className="mt-4 text-center text-sm font-medium text-charcoal/70">
            We respect your privacy. No spam.
          </p>
        </div>
      </div>
    </section>
  );
}
