import SecCont from "@/components/shared/SecCont";
import SecTitle from "./shared/SecTitle";
export default function AboutSec() {
	return (
		<SecCont>
			<SecTitle>Why Volton?</SecTitle>
			<div className="grid grid-cols-2 gap-5">
				<div className="flex flex-col gap-20">
					<div className="text-2xl font-semibold leading-1">
						Volton AI delivers tailored AI solutions designed for growth. We
						streamline operations, saving time and reducing costs. With our
						advanced analytics, sales are amplified by intuitively grasping
						customer behaviours.
					</div>
					<span>Image 1</span>
				</div>
				<div className="flex flex-col gap-20">
					<div className="text-2xl font-semibold leading-1">
						In a rapidly changing market, partnering with Volton ensures you're
						at the forefront of tech innovations, equipped for today and poised
						for tomorrow's challenges. We're your committed partner, offering
						unparalleled support.
					</div>
					<span>Image 2</span>
				</div>
			</div>
		</SecCont>
	);
}
