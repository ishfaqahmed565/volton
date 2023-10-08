import SecCont from "@/components/shared/SecCont";
import SecTitle from "@/components/shared/SecTitle";
export default function ApproachSection() {
	return (
		<SecCont className=" ">
			<div className=" w-full flex justify-between items-center sm:items-end flex-col sm:flex-row gap-5 sm:gap-0">
				<span>© All rights resered. By Volton AI.</span>
				<div className="flex flex-col gap-4 items-center sm:items-start">
					<h3 className="text-2xl font-semibold gap">Join Our Newsletter</h3>

					<div className="rounded-full border-[2px] border-black flex p-[2px] relative bg-transparent z-[50]">
						<input
							type="text"
							placeholder="Email Address"
							className="outline-none focus:outline-none border-none pl-2 bg-transparent"
						/>
						<button className="uppercase text-sm cta-transition rounded-full border-[2px] border-black flex px-5 py-1">
							Submit
						</button>
					</div>
				</div>
			</div>
		</SecCont>
	);
}
