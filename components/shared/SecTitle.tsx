import { PropsWithChildren } from "react";

export default function SecTitle(props: PropsWithChildren) {
	return (
		<h2 className=" text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-6xl">
			{props.children}
		</h2>
	);
}
