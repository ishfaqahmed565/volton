import { PropsWithChildren } from "react";
interface Props {
	children: React.ReactNode;
	className?: string;
}
export default function SecTitle(props: Props) {
	return (
		<h2
			className={`text-3xl md:text-6xl font-extrabold tracking-tight leading-tight  text-gray-900 ${props.className}`}
		>
			{props.children}
		</h2>
	);
}
