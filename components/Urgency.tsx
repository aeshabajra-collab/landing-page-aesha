export default function Urgency() {
  return (
    <section className="border-y border-line bg-ink px-5 py-12 text-white sm:py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blossom">
            Limited free consultation slots
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Book the call while free review slots are available.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
            A customized plan takes time to review properly, so available 1:1
            consultation slots are limited.
          </p>
        </div>
        <a
          href="#lead-form"
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 py-3 text-base font-semibold text-ink transition hover:bg-blossom focus:outline-none focus:ring-4 focus:ring-white/30"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}
