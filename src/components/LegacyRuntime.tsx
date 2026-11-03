"use client";

import { useEffect, useState } from "react";

type Props = {
  scripts: string[];
  bodyClass: string;
  school?: string;
  adminPage?: string;
  legacyPage: string;
};

export default function LegacyRuntime({
  scripts,
  bodyClass,
  school,
  adminPage,
  legacyPage,
}: Props) {
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let active = true;
    document.body.dataset.root = "/";
    document.body.dataset.legacyPage = legacyPage;
    document.body.className = bodyClass;
    if (school) document.body.dataset.school = school;
    else delete document.body.dataset.school;
    if (adminPage) document.body.dataset.adminPage = adminPage;
    else delete document.body.dataset.adminPage;
    window.__NEXT_LEGACY_BRIDGE__ = true;

    async function loadScripts() {
      try {
        const scriptPromises =
          (window.__NEXT_LEGACY_SCRIPT_PROMISES__ ??= new Map<
            string,
            Promise<void>
          >());

        for (const src of scripts) {
          let scriptPromise = scriptPromises.get(src);
          if (!scriptPromise) {
            scriptPromise = new Promise<void>((resolve, reject) => {
              const script = document.createElement("script");
              script.src = src;
              script.async = false;
              script.onload = () => resolve();
              script.onerror = () => {
                script.remove();
                reject(new Error(`Could not load the site script at ${src}.`));
              };
              document.body.appendChild(script);
            });
            scriptPromises.set(src, scriptPromise);
            void scriptPromise.catch(() => {
              if (scriptPromises.get(src) === scriptPromise) {
                scriptPromises.delete(src);
              }
            });
          }
          await scriptPromise;
        }

        if (active) {
          document.dispatchEvent(new Event("school:legacy-ready"));
        }
      } catch (error) {
        if (active) {
          setLoadError(
            error instanceof Error ? error.message : "The site could not load.",
          );
        }
      }
    }

    void loadScripts();
    return () => {
      active = false;
    };
  }, [adminPage, bodyClass, legacyPage, school, scripts]);

  if (!loadError) return null;
  return (
    <p className="legacy-load-error" role="alert">
      {loadError}
    </p>
  );
}
