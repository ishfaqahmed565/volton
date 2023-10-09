import SecCont from "@/components/shared/SecCont";
import SecTitle from "@/components/shared/SecTitle";
export default function ContactSection() {
	return (
		<SecCont>
			<div id="contact"></div>

			<h2 className="info-text text-center">
				Got Questions? Ask Our Chatbot (You Could Have One Tool){" "}
			</h2>
			<div className="lg:px-10 ">
				<div className="px-4 bg-gradient-to-r from-[#a19ff8] to-[#c392f5] gap-5 py-20 border rounded-3xl shadow w-full bg-purple-500 grid place-items-center">
					<h2 className="info-text uppercase">Are you ready?</h2>
					<SecTitle className="text-center ">
						Talk To One Of Our <br />
						Experts Now
					</SecTitle>
					<button className="relative z-[50] cta-transition hover:scale-105 duration-500 info-text uppercase w-[50%] text-center py-2 md:py-5 rounded-full bg-white">
						Click here
					</button>
				</div>
			</div>
		</SecCont>
	);
}
