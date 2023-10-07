import SecCont from "@/components/shared/SecCont";
import SecTitle from "@/components/shared/SecTitle";
export default function ApproachSection() {
	return (
		<SecCont>
			<SecTitle>Our Approach</SecTitle>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-500 sm:gap-12  dark:text-gray-400">
				<div className="grid gap-5">
					<img src="/hero-logo.png" alt="" className="w-[90px] h-[90px]" />
					<div className="pl-2 flex flex-col gap-2">
						<h2 className="text-black font-bold text-xl">Ideate</h2>
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
				</div>
				<div className="grid gap-5">
					<img src="/hero-logo.png" alt="" className="w-[90px] h-[90px]" />
					<div className="pl-2 flex flex-col gap-2">
						<h2 className="text-black font-bold text-xl">Ideate</h2>
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
				</div>
				<div className="grid gap-5">
					<img src="/hero-logo.png" alt="" className="w-[90px] h-[90px]" />
					<div className="pl-2 flex flex-col gap-2">
						<h2 className="text-black font-bold text-xl">Ideate</h2>
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
				</div>
				<div className="grid gap-5">
					<img src="/hero-logo.png" alt="" className="w-[90px] h-[90px]" />
					<div className="pl-2 flex flex-col gap-2">
						<h2 className="text-black font-bold text-xl">Ideate</h2>
						<p className="text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
				</div>
			</div>
		</SecCont>
	);
}
