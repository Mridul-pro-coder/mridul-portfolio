import PageHeader from "@/components/ui/PageHeader";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata = { title: "Projects — Mridul Gupta" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Projects" subtitle="Selected work — LLM products, data systems, and tools." />
      <FeaturedProject />
      <ProjectsGrid />
    </>
  );
}
