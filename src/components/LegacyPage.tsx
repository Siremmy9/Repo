import parse from "html-react-parser";
import type { LegacyPage as LegacyPageData } from "@/lib/legacy-pages";
import LegacyRuntime from "./LegacyRuntime";

export default function LegacyPage({ page }: { page: LegacyPageData }) {
  return (
    <>
      <LegacyRuntime
        scripts={page.scripts}
        bodyClass={page.bodyClass}
        school={page.school}
        adminPage={page.adminPage}
        legacyPage={page.legacyPage}
      />
      <div className={page.isAdmin ? "legacy-page legacy-page--admin" : "legacy-page"}>
        {parse(page.bodyMarkup)}
      </div>
    </>
  );
}
