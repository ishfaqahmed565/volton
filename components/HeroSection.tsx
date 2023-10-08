"use client";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="bg-transparent relative z-[100] text-black">
			<header>
				<nav className=" border-gray-200 px-4 lg:px-6 py-2.5  pt-10">
					<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
						<a href="/" className="flex items-center gap-2">
							<img
								src="/logo.jpg"
								alt="me"
								className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
							/>
							<span className="self-center text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap text-black ">
								volton
							</span>
						</a>
						<div className="flex items-center lg:order-2">
							<ul className="flex items-center uppercase lg:space-x-8 lg:mt-0">
								<li className=" hidden lg:flex">
									<a
										href="#about"
										className="block py-2 pr-4 pl-3 text-black font-bold  lg:p-0 -400 lg:-white -gray-700 -white lg:-transparent -700"
									>
										About
									</a>
								</li>
								<li className=" hidden lg:flex">
									<a
										href="#services"
										className="block py-2 pr-4 pl-3 text-black font-bold  lg:p-0 -400 lg:-white -gray-700 -white lg:-transparent -700"
									>
										Our Services
									</a>
								</li>
								<li className=" hidden lg:flex">
									<a
										href="#contact"
										className="block py-2 pr-4 pl-3 text-black font-bold  lg:p-0 -400 lg:-white -gray-700 -white lg:-transparent -700"
									>
										Contact
									</a>
								</li>
								<li>
									<a
										href="#"
										className="scale-125 cta-transition text-xs uppercase text-black border-black border-2 rounded-full px-10 py-2 "
									>
										Speak with us
									</a>
								</li>
							</ul>

							<button
								data-collapse-toggle="mobile-menu-2"
								type="button"
								className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
								aria-controls="mobile-menu-2"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
										clip-rule="evenodd"
									></path>
								</svg>
								<svg
									className="hidden w-6 h-6"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clip-rule="evenodd"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</nav>
			</header>

			<section className=" -900">
				<div className="grid max-w-screen-lg  py-20 mx-auto lg:gap-8 xl:gap-22 lg:py-32 lg:grid-cols-12">
					<div className="lg:mr-auto place-self-center lg:col-span-7 flex flex-col gap-4">
						<h1 className="max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl lg:text-left text-center">
							Empower Your <br />
							Bussiness With <br />
							Volton AI
						</h1>
						<span className="uppercase text-gray-500 text-center lg:text-left">
							Speicailists in creating Custom <br /> formulated Ai Solutions
						</span>
						<a
							href="#"
							className="cta-transition lg:w-fit text-center text-lg font-bold uppercase text-black border-black border-2 rounded-full px-20 py-4 "
						>
							Get Started
						</a>
					</div>
					<div className="hidden  lg:mt-0 lg:col-span-5 lg:flex">
						<div className="w-full">
							<Image src="/hero-logo.png" alt="me" width="280" height="280" />
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
