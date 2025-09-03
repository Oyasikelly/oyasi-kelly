"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
	return (
		<div className="hidden xl:block w-full h-full relative">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duration: 0.4, ease: "easeIn" },
				}}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
					}}
					className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute -top-7 right-4 xl:right-0 xl:left-0">
					<Image
						src="/images/Oyasikelly.png"
						priority
						quality={100}
						fill
						sizes="auto"
						alt="oyasikelly"
						className="object-contain "
					/>
				</motion.div>

				<motion.svg
					className="pl-7 pb-[0.5rem] xl:pl-0 xl:pb-0 w-[300px] xl:w-[586px] h-[300px] xl:h-[589px]"
					fill="transparent" // sizes="auto"
					viewBox="0 0 586 586"
					xmlns="http://www.w3.or/2000/svg">
					<motion.circle
						cx="253"
						cy="253"
						r="250"
						stroke="#00ff99"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ strokeDasharray: "24 10 0 0" }}
						animate={{
							strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
							rotate: [180, 180],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					/>
				</motion.svg>
			</motion.div>
		</div>
	);
}
