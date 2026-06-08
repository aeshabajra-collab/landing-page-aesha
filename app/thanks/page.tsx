import Image from "next/image";
import Link from "next/link";
import VimeoThankYouVideo from "@/components/VimeoThankYouVideo";

const whatsappChatUrl = "https://wa.me/message/GQUI3UZAHCKAM1";

export default function ThanksPage() {
  return (
    <main className="min-h-screen px-5 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Image
          src="/aesha-logo.png"
          alt="Aesha Bajracharya"
          width={150}
          height={150}
          className="h-24 w-auto object-contain sm:h-32"
          priority
        />

        <section className="mt-8 w-full rounded-lg border border-line bg-white p-6 shadow-soft sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            Thank you
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            Wait... watch the video before you go
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-charcoal/80">
            Before your consultation, please watch this short video so you know
            what to do next.
          </p>

          <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg border border-line bg-mist">
            <VimeoThankYouVideo />
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {whatsappChatUrl ? (
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-7 py-3 text-base font-semibold text-white transition hover:bg-charcoal focus:outline-none focus:ring-4 focus:ring-blossom sm:w-auto"
              >
                Chat with me on WhatsApp
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full bg-ink/45 px-7 py-3 text-base font-semibold text-white sm:w-auto"
              >
                Chat with me on WhatsApp
              </button>
            )}

            <Link
              href="/"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-line bg-white px-7 py-3 text-base font-semibold text-ink transition hover:border-ink sm:w-auto"
            >
              Back to website
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
