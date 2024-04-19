import React from 'react';

export default function SectionWrapper(props) {
	const { children, header, title } = props;
	return (
		<section className="min-h-screen flex flex-col gap-10">
			<div className="py-10 flex flex-col gap-2 justify-center items-center">
				<p className="uppercase font-medium">{header}</p>
				<h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
					{title[0]}{' '}
					<span className="uppercase text-orange-500">{title[1]}</span>{' '}
					{title[2]}
				</h2>
			</div>
			<h1 className="text-5xl">Strong time baby</h1>
		</section>
	);
}
