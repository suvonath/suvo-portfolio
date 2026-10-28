import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData, personalInfo } from "@/data/portfolio-data";
import { ProjectDetails } from "@/components/ProjectDetails";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Suvo Dev Nath",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.name} | Suvo Dev Nath — Web Developer`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} | ${project.type}`,
      description: project.shortDescription,
      type: "article",
      authors: [personalInfo.name],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
