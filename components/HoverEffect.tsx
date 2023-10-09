"use client";
import React, { useState } from "react";

const HoverEffect = () => {
	const stages = [
		{
			step: "1",
			title: "Concept",
			desc: "3D renderings of the physical product",
		},
		{
			step: "2",
			title: "Prototype",
			desc: "Working version of the physical product",
		},
		{
			step: "3",
			title: "Production",
			desc: "Manufacturing of the final physical product",
		},
		{
			step: "4",
			title: "Shipping",
			desc: "Final physical product has begun shipping",
		},
	];
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const handleMouseEnter = (index: any) => {
		setHoveredIndex(index);
	};

	const handleMouseLeave = () => {
		setHoveredIndex(null);
	};

	return (
		<div
			className="grid grid-cols-2 md:grid-cols-4 gap-8  sm:gap-12 text-black"
			onMouseLeave={handleMouseLeave}
		>
			{stages.map((stage, index) => (
				<div
					key={index}
					className={`child cursor-pointer group grid  hover:scale-110 duration-500 transition-all duration-500  space-y-[-20px] place-items-center ${
						hoveredIndex !== null && hoveredIndex !== index ? "blur" : ""
					}`}
					onMouseEnter={() => handleMouseEnter(index)}
				>
					<span className="group-hover:translate-y-[-10px] transition-all duration-500 font-extrabold text-5xl text-gray-200/[.8] group-hover:text-[#b7e3e8] transition-all">
						{stage.step}
					</span>
					<div className="pl-2 flex flex-col gap-2 items-center">
						<h2 className="text-black font-bold text-lg md:text-xl group-hover:text-[#b7e3e8]">
							{stage.title}
						</h2>
						<p className="text-sm text-center max-w-[25ch]">{stage.desc}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default HoverEffect;
