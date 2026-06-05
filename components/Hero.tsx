import Image from "next/image";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="px-5 pb-14 pt-6 text-center sm:pb-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <Image
          src="/aesha-logo.png"
          alt="Aesha Bhattarai Acharya"
          width={174}
          height={174}
          priority
          className="h-28 w-auto object-contain sm:h-36"
        />

        <div className="mt-8 inline-flex items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-charcoal shadow-sm">
          Free 1:1 consultation for business owners
        </div>

        <h1 className="mt-6 max-w-4xl font-serif text-4xl font-semibold leading-tight text-ink sm:text-6xl">
          Get a Customized Digital Marketing Plan for Your Business
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-charcoal sm:text-xl">
          Book a free 1:1 consultation call and understand what your business
          should do next to get more visibility, inquiries, and growth.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-7 text-charcoal/80">
          This free consultation is for business owners who are struggling to
          grow online. If your posts, ads, or page are not bringing enough
          customers, this call will help you find a clearer direction.
        </p>

        <a
          href="#lead-form"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 py-3 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-charcoal focus:outline-none focus:ring-4 focus:ring-blossom"
        >
          Book Free Consultation
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
