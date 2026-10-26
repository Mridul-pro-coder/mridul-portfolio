import MeHeader from "@/components/me/MeHeader";
import BioCard from "@/components/me/BioCard";
import ExperienceTimeline from "@/components/me/ExperienceTimeline";
import ValuesGrid from "@/components/me/ValuesGrid";

export const metadata = { title: "About — Mridul Gupta" };

export default function MePage() {
  return (
    <>
      <MeHeader />
      <BioCard />
      <ExperienceTimeline />
      <ValuesGrid />
    </>
  );
}
