import SecCont from "@/components/shared/SecCont";
import SecTitle from "@/components/shared/SecTitle";
export default function ContactSection() {
	return (
		<SecCont>
			<h2 className="text-2xl font-semibold text-center">
				Got Questions? Ask Our Chatbot (You Could Have One Tool){" "}
			</h2>
			<div className="px-10">
				<div className=" bg-gradient-to-r from-[#a19ff8] to-[#c392f5] gap-5 py-20 border rounded-3xl shadow w-full bg-purple-500 grid place-items-center">
					<h2 className="uppercase text-2xl font-semibold ">Are you ready?</h2>
					<SecTitle>
						Talk To One Of Our <br />
						Experts Now
					</SecTitle>
					<button className="text-2xl uppercase font-semibold w-[50%] text-center py-5 rounded-full bg-white">
						Click here
					</button>
				</div>
			</div>
		</SecCont>
	);
}
