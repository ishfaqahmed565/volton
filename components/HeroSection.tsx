"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import useDarkMode from "@/app/useDarkMode.js";
export default function HeroSection() {
	const [isLight, setIsLight] = useState(true);

	useEffect(() => {
		if (!isLight) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isLight]);
	const handleToggle = () => {
		setIsLight(!isLight);
	};

	return (
		<section className="bg-transparent relative z-[100] text-black">
			<header>
				<nav className=" border-gray-200 px-4 lg:px-6 py-2.5  pt-10">
					<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
						<a href="/" className="flex items-center gap-2">
							<div className="w-[55px] h-[55px] md:w-[75px] md:h-[75px]">
								<Image src="/hero-logo.png" alt="me" width="320" height="320" />
							</div>
							<span className="dark:text-white self-center text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap text-black ">
								volton
							</span>
						</a>
						<div className="dark:text-white flex items-center lg:order-2">
							<ul className=" flex items-center uppercase lg:space-x-8 lg:mt-0">
								<div className="lg:pr-0 pr-2">
									<div
										className={`tdnn ${
											isLight ? "day" : ""
										} hover:cursor-pointer `}
										onClick={handleToggle}
									>
										<div className={`moon ${isLight ? "sun" : ""}`}></div>
									</div>
								</div>

								<li className=" hidden lg:flex">
									<a
										href="#about"
										className="block py-2 pr-4 pl-3  font-bold  lg:p-0 -400 lg:-white -gray-700 -white lg:-transparent -700 hover:underline transition-all"
									>
										About
									</a>
								</li>
								<li className=" hidden lg:flex">
									<a
										href="#services"
										className="block py-2 pr-4 pl-3  font-bold  lg:p-0 -400 lg:-white -gray-700 -white lg:-transparent -700 hover:underline transition-all"
									>
										Our Services
									</a>
								</li>
								<li className=" hidden lg:flex">
									<a
										href="#contact"
										className="block py-2 pr-4 pl-3  font-bold  lg:p-0 -400 lg:-white -gray-700 -white lg:-transparent -700 hover:underline transition-all"
									>
										Contact
									</a>
								</li>
								<a
									href="#"
									className="hidden sm:flex dark:border-0 dark:bg-white hover:shadow-lg hover:border-transparent font-bold group hover-button md:text-sm text-xs uppercase  border-black border-2 rounded-full md:px-8 md:py-3 py-2 px-5 "
								>
									<span className="group-hover:text-white relative z-[50]">
										Speak with us
									</span>
								</a>
							</ul>
						</div>
					</div>
				</nav>
			</header>

			<section className="dark:text-white">
				<div className="grid max-w-screen-lg  py-20 mx-auto lg:gap-8 xl:gap-22 lg:py-32 lg:grid-cols-12">
					<div className="lg:mr-auto place-self-center lg:col-span-7 flex flex-col gap-4">
						<h1 className="max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-[57px] lg:text-left text-center">
							Empower Your <br />
							Business With <br />
							Volton AI
						</h1>
						<span className="uppercase text-gray-500 dark:text-gray-300 text-center lg:text-left">
							Speicailists in creating Custom <br /> formulated Ai Solutions
						</span>

						<a
							href="#"
							className="dark:bg-white dark:border-0 hover:shadow-lg hover:border-transparent  group hover-button lg:w-fit text-center text-lg font-bold uppercase text-black border-black border-2 rounded-full px-20 py-5 "
						>
							<span className="group-hover:text-white relative z-[50]">
								Get Started
							</span>
						</a>
					</div>
					<div className="hidden  lg:mt-0 lg:col-span-5 lg:flex justify-end">
						<div className=" pt-5">
							<Image src="/hero-logo.png" alt="me" width="320" height="320" />
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
