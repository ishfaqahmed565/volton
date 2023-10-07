import SecCont from "@/components/shared/SecCont";
import SecTitle from "@/components/shared/SecTitle";
export default function ApproachSection() {
	return (
		<SecCont>
			<div className="w-full flex justify-between items-center">
				<span>© All rights resered. By Volton AI.</span>
				<div className="flex flex-col gap-4">
					<h3 className="text-2xl font-semibold gap">Join Our Newsletter</h3>

					<div className="rounded-full border-2 border-black flex p-1">
						<input
							type="text"
							placeholder="Email Address"
							className="outline-none focus:outline-none border-none pl-2 bg-transparent"
						/>
						<button className="rounded-full border-2 border-black flex px-5 py-1">
							Submit
						</button>
					</div>
				</div>
			</div>
		</SecCont>
	);
}
