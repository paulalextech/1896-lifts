import React from 'react';
import SectionWrapper from './SectionWrapper';

export default function Workout(props) {
	const { workout } = props;
	return (
		<SectionWrapper header={'Welcome to'} title={['The', 'DANGER', 'zone']}>
			<div className="flex flex-col gap-4">
				{workout.map((exercise, i) =>? {
					return(
						<ExerciseCard/>
					)
				})}
			</div>
		</SectionWrapper>
	);
}
