"use client";

import { useEffect, useRef, useState } from "react";

export default function FlodeskEmbed() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const injectedScripts: HTMLScriptElement[] = [];

    async function mountEmbed() {
      try {
        const response = await fetch("/flodesk-embed.html", {
          cache: "no-store"
        });

        if (!response.ok) {
          throw new Error("Unable to load Flodesk embed.");
        }

        const embedHtml = await response.text();

        if (cancelled || !mountRef.current) return;

        mountRef.current.innerHTML = "";

        const template = document.createElement("template");
        template.innerHTML = embedHtml;

        Array.from(template.content.childNodes).forEach((node) => {
          if (node.nodeName.toLowerCase() !== "script") {
            mountRef.current?.appendChild(node.cloneNode(true));
            return;
          }

          const sourceScript = node as HTMLScriptElement;
          if (!sourceScript.src && sourceScript.text) {
            new Function(sourceScript.text)();
            return;
          }

          const script = document.createElement("script");

          Array.from(sourceScript.attributes).forEach((attribute) => {
            script.setAttribute(attribute.name, attribute.value);
          });
          script.text = sourceScript.text;
          script.setAttribute("data-aesha-flodesk-script", "true");
          document.body.appendChild(script);
          injectedScripts.push(script);
        });

      } catch {
        if (!cancelled) setLoadError(true);
      }
    }

    mountEmbed();

    return () => {
      cancelled = true;
      injectedScripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <div className="flodesk-card">
      <div ref={mountRef} />
      {loadError ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          The Flodesk form could not load. Please refresh the page.
        </p>
      ) : null}
    </div>
  );
}
