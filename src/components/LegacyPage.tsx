import type { PageDefinition } from "@/legacy/pages/registry";
import LegacyRuntime from "./LegacyRuntime";
import { RenderPage } from "@/legacy/pages/registry";

export default function LegacyPage({ page }: { page: PageDefinition }) {
  return (
    <>
      <LegacyRuntime
        scripts={page.pageProps.scripts}
        bodyClass={page.pageProps.bodyClass}
        school={page.pageProps.school}
        adminPage={page.pageProps.adminPage}
      />
      <div className={page.isAdmin ? "legacy-page legacy-page--admin" : "legacy-page"}>
        <RenderPage definition={page} />
      </div>
    </>
  );
}
