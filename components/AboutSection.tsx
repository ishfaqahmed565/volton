import SecCont from "@/components/shared/SecCont";
import SecTitle from "./shared/SecTitle";
import Image from "next/image";

export default function AboutSec() {
	return (
		<SecCont className="s">
			<div id="services"></div>
			<div className="grid md:grid-cols-2 gap-5">
				<div className="flex items-center justify-center">
					<Image src="/about.png" alt="me" width="320" height="320" />
				</div>
				<div className="flex flex-col gap-10">
					<SecTitle className="text-center md:text-right ">
						Why Volton?
					</SecTitle>

					<div className="info-text flex flex-col gap-2 text-center md:text-left">
						<p>
							In a fast-evolving market, partnering with Volton keeps you ahead
							with cutting-edge tech, ready for today and tomorrow's challenges.
							We're your dedicated support partner
						</p>
						<p>
							Our primary mission is to seamlessly automate and optimise your
							system processes, driving operational efficiency and boosting your
							sales
						</p>
					</div>
				</div>
			</div>
		</SecCont>
	);
}
