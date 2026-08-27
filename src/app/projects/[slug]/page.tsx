import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectCaseStudyBySlug,
  projectCaseStudies,
  ProjectDetailLayout,
} from "@/features/projects";
import { getAbsoluteUrl } from "@/config/site/siteUrl";

type ProjectPageProps = PageProps<"/projects/[slug]">;

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectCaseStudyBySlug(slug);

  if (!project) {
    return {};
  }

  const canonicalUrl = getAbsoluteUrl(`/projects/${project.slug}`);

  return {
    title: project.seo.title,
    description: project.seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      url: canonicalUrl,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: project.seo.title,
      description: project.seo.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailLayout project={project} />;
}
