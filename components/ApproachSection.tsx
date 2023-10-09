import SecCont from "@/components/shared/SecCont";
import SecTitle from "@/components/shared/SecTitle";
import HoverEffect from "@/components/HoverEffect";

export default function ApproachSection() {
	const stages = [
		{
			step: "1",
			title: "Concept",
			desc: "3D renderings of the physical product",
		},
		{
			step: "2",
			title: "Prototype",
			desc: "Working version of the physical product",
		},
		{
			step: "3",
			title: "Production",
			desc: "Manufacturing of the final physical product",
		},
		{
			step: "4",
			title: "Shipping",
			desc: "Final physical product has begun shipping",
		},
	];
	return (
		<SecCont className="relative ">
			<div id="about"></div>
			<SecTitle>Our Approach</SecTitle>

			<div className="flex flex-col gap-10 relative z-[50] bg-transparent">
				<div className="flex gap-4 grid place-items-center">
					<h2 className="text-2xl md:text-5xl font-bold">Development Stages</h2>
					<p className="font-[500]">
						As a startup, we are going through the development cycle.
					</p>
				</div>

				<HoverEffect></HoverEffect>
			</div>
			<img
				src="/ellipse2.png"
				alt=""
				className="absolute  left-[-12rem]  sm:left-[-25rem] sm:w-[40rem] sm:h-[50rem] 2xl:left-[-30rem] 2xl:w-[50rem] 2xl:h-[80rem]   w-[20rem] h-[40rem]  rounded-full"
			/>
		</SecCont>
	);
}
