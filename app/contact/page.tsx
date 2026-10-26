import PageHeader from "@/components/ui/PageHeader";
import CopyEmailButton from "@/components/contact/CopyEmailButton";
import ContactForm from "@/components/contact/ContactForm";
import SocialLinks from "@/components/contact/SocialLinks";

export const metadata = { title: "Contact — Mridul Gupta" };

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" subtitle="Have a project, a question, or a weird model idea? Say hi." />
      <div className="space-y-6">
        <CopyEmailButton />
        <ContactForm />
        <SocialLinks />
      </div>
    </>
  );
}
