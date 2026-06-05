const benefits = [
  "Understand what is not working in your current marketing",
  "Get a customized marketing plan for your business",
  "Know how to improve your online visibility",
  "Get clear ideas to generate better inquiries",
  "Stop guessing what to post, boost, or promote"
];

const process = [
  "Fill up the form",
  "Receive an email with the appointment link",
  "Fill the appointment form",
  "Join the 1:1 consultation call",
  "Get your customized digital marketing plan for FREE"
];

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M20 6 9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

export default function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
          What you get
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
          How You Benefit From This Consultation
        </h2>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((benefit) => (
          <div
            key={benefit}
            className="rounded-lg border border-line bg-white p-4 shadow-sm"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white">
              <CheckIcon />
            </span>
            <p className="mt-4 text-sm font-semibold leading-6 text-charcoal">
              {benefit}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-lg border border-line bg-white p-5 shadow-soft sm:p-7">
        <div className="grid gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
              How it works
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-ink">
              How The Free Consultation Works
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <div key={step} className="rounded-lg bg-mist p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blossom text-base font-bold text-ink">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-semibold text-ink">
                  Step {index + 1}
                </h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/75">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
