import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ApproachSection from "@/components/ApproachSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
export default function Home() {
	return (
		<main>
			<HeroSection></HeroSection>
			<ApproachSection></ApproachSection>
			<AboutSection></AboutSection>
			<ContactSection></ContactSection>
			<FooterSection></FooterSection>
		</main>
	);
}
