import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyPage from "@/components/LegacyPage";
import { getLegacyPage } from "@/lib/legacy-pages";

type RouteProps = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = await getLegacyPage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description || undefined,
    robots: page.isAdmin ? { index: false, follow: false } : undefined,
  };
}

export default async function Page({ params }: RouteProps) {
  const { slug = [] } = await params;
  const page = await getLegacyPage(slug);
  if (!page) notFound();

  return <LegacyPage page={page} />;
}
