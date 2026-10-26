import { WMark } from "@/components/ui/WMark";

export default function LogoCard() {
  return (
    <div
      className="mx-auto grid size-14 place-items-center rounded-[14px] border border-line bg-white shadow-card"
      style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)" }}
    >
      <WMark size={34} />
    </div>
  );
}
