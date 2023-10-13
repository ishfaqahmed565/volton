"use client";
import SecCont from "@/components/shared/SecCont";
import SecTitle from "@/components/shared/SecTitle";
import { PopupButton } from "@typeform/embed-react";
import { useRef } from "react";

export default function ContactSection() {
	const ref = useRef();
	//@ts-ignore
	const openPopup = () => ref.current?.open();
	return (
		<SecCont>
			<div id="contact"></div>

			<h2 className="info-text text-center">
				Got Questions? Ask Our Chatbot (You Could Have One Tool){" "}
			</h2>
			<div className="lg:px-10 ">
				<div className="px-4 bg-gradient-to-r from-[#a19ff8] to-[#c392f5] dark:from-[#0e01cb] dark:via-[#3d01c8] dark:to-[#7502c7] dark:border-none gap-5 py-20 border rounded-3xl shadow w-full bg-purple-500 grid place-items-center">
					<h2 className="info-text uppercase">Are you ready?</h2>
					<SecTitle className="text-center ">
						Talk To One Of Our <br />
						Experts Now
					</SecTitle>
					<button
						onClick={openPopup}
						className="hover:text-white hover:dark:text-white dark:text-black relative z-[50] cta-transition hover:scale-105 duration-500 info-text uppercase w-[50%] text-center py-2 md:py-5 rounded-full bg-white"
					>
						Click here
					</button>
				</div>
			</div>
			<PopupButton
				id="CUUTSK37"
				ref={ref}
				size={90}
				hidden={{
					foo: "Foo Value",
					bar: "Bar Value",
				}}
				onReady={() => {
					console.log("form ready");
				}}
				enableSandbox
			>
				<span className="hidden">s</span>
			</PopupButton>
		</SecCont>
	);
}
