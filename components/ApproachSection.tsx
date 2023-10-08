import SecCont from "@/components/shared/SecCont";
import SecTitle from "@/components/shared/SecTitle";
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
			<SecTitle>Our Approach</SecTitle>
			<div className="flex flex-col gap-10 relative z-[50] bg-transparent">
				<div className="flex gap-4 grid place-items-center">
					<h2 className="text-2xl md:text-5xl font-bold">Development Stages</h2>
					<p className="font-[500]">
						As a startup, we are going through the development cycle.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-8  sm:gap-12  ">
					{stages.map((stage) => (
						<div className="blur-[1px] hover:blur-none cursor-pointer group grid  hover:scale-105 transition-all duration-500  space-y-[-20px] place-items-center">
							<span className="group-hover:translate-y-[-10px] font-extrabold text-5xl text-gray-200/[.8] group-hover:text-[#b7e3e8] transition-all">
								{stage.step}
							</span>
							<div className="pl-2 flex flex-col gap-2 items-center">
								<h2 className="text-black font-bold text-lg md:text-xl group-hover:text-[#b7e3e8]">
									{stage.title}
								</h2>
								<p className="text-sm text-center max-w-[25ch]">{stage.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<img
				src="/ellipse2.png"
				alt=""
				className="absolute  left-[-12rem]  sm:left-[-25rem] sm:w-[40rem] sm:h-[50rem] 2xl:left-[-30rem] 2xl:w-[50rem] 2xl:h-[80rem]   w-[20rem] h-[40rem]  rounded-full"
			/>
		</SecCont>
	);
}
