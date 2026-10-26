import FunHeader from "@/components/fun/FunHeader";
import MoodCard from "@/components/fun/MoodCard";
import HobbiesGrid from "@/components/fun/HobbiesGrid";
import QuoteShuffle from "@/components/fun/QuoteShuffle";

export const metadata = { title: "Fun — Mridul Gupta" };

export default function FunPage() {
  return (
    <>
      <FunHeader />
      <MoodCard />
      <HobbiesGrid />
      <QuoteShuffle />
    </>
  );
}
