"use client";
import CountUp from "react-countup";

const stats = [
	{ num: 4, text: "Years of experience" },
	{ num: 66, text: "Projects completed" },
	{ num: 9, text: "Technologies mastered" },
	{ num: 410, text: "Code commits" },
];

export default function () {
	return (
		<section className="pt-4 pb-12 xl:pt-0 xl:pxb-0">
			<div className="container mx-auto">
				<div className="grid grid-cols-2  xl:flex xxl:flex-wrap  gap-6 max-w-[80vw] mx-auto xl:max-w-none">
					{stats.map((Item, index) => (
						<div
							key={index}
							className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
							<CountUp
								end={Item.num}
								duration={5}
								delay={2}
								className="text-4xl xl:text-6xl font-extrabold"
							/>
							<p
								className={`${
									Item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
								} leading-snug text-white/80`}>
								{Item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
