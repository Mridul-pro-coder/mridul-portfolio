import PageHeader from "@/components/ui/PageHeader";
import SkillGroup from "@/components/skills/SkillGroup";
import TechMarquee from "@/components/skills/TechMarquee";
import { skillGroups } from "@/lib/data";

export const metadata = { title: "Skills — Mridul Gupta" };

export default function SkillsPage() {
  return (
    <>
      <PageHeader title="Skills" subtitle="The stack I actually reach for — grouped by job." />
      <div className="space-y-4">
        {skillGroups.map((g, i) => (
          <SkillGroup key={g.domain} group={g} index={i} />
        ))}
      </div>
      <TechMarquee />
    </>
  );
}
