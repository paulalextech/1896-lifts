import React from 'react';
import SectionWrapper from './SectionWrapper';
import { WORKOUTS } from '../utils/exerciseList';

function Header(props) {
	const { index, title, description } = props;
	return (
		<div className="flex flex-col gap-4">
			<div className="flex item-center justify-center gap-2">
				<p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
					{index}
				</p>
				<h4 className="text-xl sm:text-2x. md:text-3xl">{title}</h4>
			</div>
			<p className="text-sm sm:text-base mx-auto">{description}</p>
		</div>
	);
}

export default function Generator(props) {
	return (
		<SectionWrapper
			header={'generate your training'}
			title={["It's", 'strong', 'time']}
		>
			<Header
				index={'01'}
				title={'Pick your poison'}
				description={'Select the workout you wish to endure'}
			/>

			<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
				{Object.keys(WORKOUTS).map((type, typeIndex) => {
					return (
						<button
							className="bg-orange-500 duration-200 hover:bg-purple-600 py-3 rounded-lg uppercase"
							key={typeIndex}
						>
							<p>{type.replaceAll('_', ' ')}</p>
						</button>
					);
				})}
			</div>
			<Header
				index={'02'}
				title={'Lock on targets'}
				description={'Select the body parts you wish to train'}
			/>

			<div className="">
				<div>
					<p>Select body parts you wish to train</p>
					<i class="fa-solid fa-caret-down"></i>{' '}
				</div>
			</div>
		</SectionWrapper>
	);
}
