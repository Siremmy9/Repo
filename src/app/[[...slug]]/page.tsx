import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyPage from "@/components/LegacyPage";
import { getPageDefinition } from "@/legacy/pages/registry";

type RouteProps = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({
  params,
}: RouteProps): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = getPageDefinition(slug);
  if (!page) return {};

  return page.isAdmin
    ? { ...page.metadata, robots: { index: false, follow: false } }
    : page.metadata;
}

export default async function Page({ params }: RouteProps) {
  const { slug = [] } = await params;
  const page = getPageDefinition(slug);
  if (!page) notFound();

  return <LegacyPage page={page} />;
}
