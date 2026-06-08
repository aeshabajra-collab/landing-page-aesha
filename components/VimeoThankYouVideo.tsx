"use client";

import { useEffect, useRef, useState } from "react";

const vimeoEmbedUrl =
  "https://player.vimeo.com/video/1199472332?controls=0&title=0&byline=0&portrait=0&badge=0&autopause=0&dnt=1&playsinline=1&api=1";

type VimeoMessage = {
  event?: string;
};

function postVimeoMethod(
  iframe: HTMLIFrameElement | null,
  method: "play" | "pause" | "addEventListener",
  value?: string
) {
  iframe?.contentWindow?.postMessage(
    JSON.stringify(value ? { method, value } : { method }),
    "https://player.vimeo.com"
  );
}

function parseVimeoMessage(data: MessageEvent["data"]): VimeoMessage | null {
  if (typeof data === "string") {
    try {
      return JSON.parse(data) as VimeoMessage;
    } catch {
      return null;
    }
  }

  if (typeof data === "object" && data !== null) {
    return data as VimeoMessage;
  }

  return null;
}

export default function VimeoThankYouVideo() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== "https://player.vimeo.com") {
        return;
      }

      const message = parseVimeoMessage(event.data);

      if (message?.event === "ready") {
        setIsLoaded(true);
        postVimeoMethod(iframeRef.current, "addEventListener", "play");
        postVimeoMethod(iframeRef.current, "addEventListener", "pause");
        postVimeoMethod(iframeRef.current, "addEventListener", "ended");
      }

      if (message?.event === "play") {
        setIsPlaying(true);
      }

      if (message?.event === "pause" || message?.event === "ended") {
        setIsPlaying(false);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  function handleToggle() {
    if (isPlaying) {
      postVimeoMethod(iframeRef.current, "pause");
      return;
    }

    postVimeoMethod(iframeRef.current, "play");
  }

  return (
    <div className="group relative h-full w-full bg-black">
      <iframe
        ref={iframeRef}
        src={vimeoEmbedUrl}
        title="Consultation next steps video"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />

      <button
        type="button"
        onClick={handleToggle}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        disabled={!isLoaded}
        className={`absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-soft transition duration-200 hover:scale-105 hover:bg-white focus:scale-105 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blossom disabled:cursor-wait disabled:opacity-60 sm:h-20 sm:w-20 ${
          isPlaying
            ? "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
            : "opacity-100"
        }`}
      >
        {isPlaying ? (
          <span aria-hidden="true" className="flex items-center gap-1.5">
            <span className="h-7 w-2 rounded-sm bg-current sm:h-8" />
            <span className="h-7 w-2 rounded-sm bg-current sm:h-8" />
          </span>
        ) : (
          <span
            aria-hidden="true"
            className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-current sm:border-y-[16px] sm:border-l-[26px]"
          />
        )}
      </button>
    </div>
  );
}
