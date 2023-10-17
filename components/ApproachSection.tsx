import SecCont from "@/components/shared/SecCont";
import SecTitle from "@/components/shared/SecTitle";
import HoverEffect from "@/components/HoverEffect";

export default function ApproachSection() {
	return (
		<SecCont className="relative ">
			<div id="about"></div>
			<SecTitle>Our Approach</SecTitle>

			<div className="flex flex-col gap-10 relative z-[50] bg-transparent">
				<HoverEffect></HoverEffect>
			</div>
			<img
				src="/ellipse2.png"
				alt=""
				className="dark:hidden absolute  left-[-12rem]  sm:left-[-25rem] sm:w-[40rem] sm:h-[50rem] 2xl:left-[-30rem] 2xl:w-[50rem] 2xl:h-[80rem]   w-[20rem] h-[40rem]  rounded-full"
			/>
		</SecCont>
	);
}
