import SecCont from "@/components/shared/SecCont";
import SecTitle from "@/components/shared/SecTitle";
export default function ApproachSection() {
	return (
		<SecCont className=" ">
			<div className="dark:text-white w-full flex justify-between items-center sm:items-end flex-col sm:flex-row gap-5 sm:gap-0">
				<span className="dark:text-white">
					© All rights resered. By Volton AI.
				</span>
				<div className="flex flex-col gap-4 items-center sm:items-start">
					<h3 className="text-lg lg:text-2xl font-semibold gap">
						Join Our Newsletter
					</h3>

					<div className="rounded-full border-[2px] border-black dark:border-white flex p-[2px] relative bg-transparent z-[50]">
						<input
							type="text"
							placeholder="Email Address"
							className="text-xs lg:text-sm outline-none focus:outline-none border-none pl-2 bg-transparent"
						/>
						<button className="transition-all hover:shadow-lg hover:border-transparent  group hover-button uppercase text-xs lg:text-sm  rounded-full border-[2px] border-black dark:border-white flex px-5 py-1">
							<span className="dark:text-white group-hover:text-white transition-all relative z-[50]">
								Submit
							</span>
						</button>
					</div>
				</div>
			</div>
		</SecCont>
	);
}
