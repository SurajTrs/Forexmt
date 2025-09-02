import type { Metadata } from "next";
import ContactHero from "@/components/company/contact/ContactHero";
import ContactMethods from "@/components/company/contact/ContactMethods";
import SocialChatBanner from "@/components/company/contact/SocialChatBanner";
import OfficeCard from "@/components/company/contact/OfficeCard";
import SecurityBanner from "@/components/SecurityBanner";
import SupportBanner from "@/components/SupportBanner";

export const metadata: Metadata = {
  title: "Contact Us | ForexMT Broker",
  description:
    "Get in touch with ForexMT Broker. Visit our Help Center or contact our Customer Experience team via live chat, phone, or email.",
  openGraph: {
    title: "Contact Us | ForexMT Broker",
    description:
      "Get in touch with ForexMT Broker. Visit our Help Center or contact our Customer Experience team via live chat, phone, or email.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactMethods />
      <SocialChatBanner />
      <OfficeCard />
      <SecurityBanner />
      <SupportBanner />
    </main>
  );
}
