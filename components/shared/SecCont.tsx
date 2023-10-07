export default function SecCont(props) {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 lg:py-16 mx-auto max-w-screen-xl flex flex-col gap-20 ">
				{props.children}
			</div>
		</section>
	);
}
