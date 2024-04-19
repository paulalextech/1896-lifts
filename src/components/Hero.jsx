import React from 'react';

export default function Hero() {
	return (
		<div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4">
			<div className="flex flex-col gap-4">
				<p className="uppercase">
					Its time to get strong, ancient Greek type strong.
				</p>
				<h1 className="uppercase font-semibold text-5xl sm:text-5xl md:text-7xl lg:text-8xl">
					1896 lifts
				</h1>
			</div>
			<p className="text-sm md:text-base font-light text-justify">
				I acknowledge that my current{' '}
				<span className="text-orange-500 font-medium uppercase">physical</span>{' '}
				and{' '}
				<span className="text-orange-500 font-medium uppercase">mental</span>{' '}
				state can change. I can follow the ways of the ancients Greeks. Using
				modern day equipment. Barbells, weights and glorious kettle-bells, I to
				can become a strong bodied and minded modern day greek warrior. The
				greeks were fore-fathers of modern day olympic lifting. They too were
				strong, mobile, multi-directional and upheld the highest regard for self
				development.
			</p>
			<button className="px-8 py-5 bg-orange-400 uppercase border-solid hover:bg-purple-600">
				<p>I accept the quest</p>
			</button>
		</div>
	);
}
