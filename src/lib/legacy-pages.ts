import { readFile } from "node:fs/promises";
import path from "node:path";

const publicPageFiles: Record<string, string> = {
  about: path.join(process.cwd(), "about.html"),
  academics: path.join(process.cwd(), "academics.html"),
  admissions: path.join(process.cwd(), "admissions.html"),
  contact: path.join(process.cwd(), "contact.html"),
  facilities: path.join(process.cwd(), "facilities.html"),
  fees: path.join(process.cwd(), "fees.html"),
  gallery: path.join(process.cwd(), "gallery.html"),
  history: path.join(process.cwd(), "history.html"),
  index: path.join(process.cwd(), "index.html"),
  news: path.join(process.cwd(), "news.html"),
  "primary-school": path.join(process.cwd(), "primary-school.html"),
  schools: path.join(process.cwd(), "schools.html"),
  "secondary-school": path.join(process.cwd(), "secondary-school.html"),
};
const adminPageFiles: Record<string, string> = {
  activities: path.join(process.cwd(), "admin", "activities.html"),
  admissions: path.join(process.cwd(), "admin", "admissions.html"),
  dashboard: path.join(process.cwd(), "admin", "dashboard.html"),
  login: path.join(process.cwd(), "admin", "login.html"),
  messages: path.join(process.cwd(), "admin", "messages.html"),
  students: path.join(process.cwd(), "admin", "students.html"),
};
const allowedScripts = new Set([
  "admin.js",
  "admissions.js",
  "config.js",
  "content.js",
  "fees.js",
  "gallery.js",
  "main.js",
  "storage.js",
]);

export type LegacyPage = {
  title: string;
  description: string;
  bodyMarkup: string;
  scripts: string[];
  bodyClass: string;
  legacyPage: string;
  school?: string;
  adminPage?: string;
  isAdmin: boolean;
};

function getSourcePath(slug: string[]): {
  filePath: string;
  isAdmin: boolean;
} | null {
  if (slug.length === 0) {
    return {
      filePath: publicPageFiles.index,
      isAdmin: false,
    };
  }

  if (slug.length === 1 && publicPageFiles[slug[0]]) {
    return {
      filePath: publicPageFiles[slug[0]],
      isAdmin: false,
    };
  }

  if (slug.length === 2 && slug[0] === "admin" && adminPageFiles[slug[1]]) {
    return {
      filePath: adminPageFiles[slug[1]],
      isAdmin: true,
    };
  }

  return null;
}

function getAttribute(tag: string, name: string): string {
  const match = tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"));
  return match?.[1] ?? "";
}

export async function getLegacyPage(
  slug: string[],
): Promise<LegacyPage | null> {
  const source = getSourcePath(slug);
  if (!source) return null;

  const html = await readFile(source.filePath, "utf8").catch((error: unknown) => {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return null;
    }
    throw error;
  });
  if (html === null) return null;

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const description =
    html.match(
      /<meta\s+name=["']description["']\s+content=["']([^"']*)["'][^>]*>/i,
    )?.[1] ?? "";
  const bodyMatch = html.match(/<body\b([^>]*)>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    throw new Error(`The page at ${source.filePath} has no body element.`);
  }

  const bodyTag = bodyMatch[1];
  const bodyMarkup = bodyMatch[2]
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(
      /\b(src|poster)=(["'])(?:\.\.\/)?assets\//gi,
      '$1=$2/assets/',
    );
  const scripts = Array.from(
    html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>\s*<\/script>/gi),
    (match) => path.posix.basename(match[1]),
  )
    .filter((name) => allowedScripts.has(name))
    .map((name) => `/js/${name}`);

  return {
    title: title || "Texcel Schools",
    description,
    bodyMarkup,
    scripts,
    bodyClass: getAttribute(bodyTag, "class"),
    legacyPage: slug.length === 0 ? "index.html" : `${slug.at(-1)}.html`,
    school: getAttribute(bodyTag, "data-school") || undefined,
    adminPage: getAttribute(bodyTag, "data-admin-page") || undefined,
    isAdmin: source.isAdmin,
  };
}
