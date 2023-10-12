import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ApproachSection from "@/components/ApproachSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HoverEffect from "@/components/HoverEffect";
export default function Home() {
	return (
		<main className="scrollbar-thin  relative dark:bg-black bg-white overflow-x-clip bg-white">
			<div className="absolute top-[-50px] objectFill right-[-12rem] sm:top-[-5%] sm:right-[-20%] lg:right-[-15rem] sm:w-[30rem] sm:h-[30rem] 2xl:w-[50rem] 2xl:h-[50rem]  w-[20rem] h-[20rem]  rounded-full">
				<Image src="/ellipse1.png" alt="me" objectFit="cover" layout="fill" />
			</div>

			<HeroSection></HeroSection>

			<ApproachSection></ApproachSection>

			<AboutSection></AboutSection>
			<ContactSection></ContactSection>

			<FooterSection></FooterSection>

			<div className="rounded-full absolute  objectFill bottom-0 right-[-10rem] sm:bottom-[0px] sm:right-[-30rem] lg:right-[-50rem] w-[40rem] h-[40rem] md:w-[80rem] md:h-[80rem] rounded-full  ">
				<Image src="/ellipse3.png" alt="me" objectFit="cover" layout="fill" />
			</div>
			<div className="bg-gradient-to-r from-[#565ec1] to-[#9ebbd2] py-1.5"></div>
		</main>
	);
}
