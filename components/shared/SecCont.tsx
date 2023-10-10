import { PropsWithChildren } from "react";
interface Props {
	children: React.ReactNode;
	className?: string;
}
export default function SecCont(props: Props) {
	return (
		<section className={`bg-white dark:bg-black text-black ${props.className}`}>
			<div className="py-8 lg:py-16 mx-auto max-w-screen-xl flex flex-col gap-20 px-4 md:px-0">
				{props.children}
			</div>
		</section>
	);
}
