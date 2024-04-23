import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { SCHEMES, WORKOUTS } from '../utils/exerciseList';
import Button from './Button';

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
	const { muscles, setMuscles, poison, setPoison, goal, setGoal } = props;
	const [showModal, setShowModal] = useState(false);

	// let showModal = false;

	function toggleModal() {
		setShowModal(!showModal);
	}

	function updateMuscles(muscleGroup) {
		if (muscles.includes(muscleGroup)) {
			setMuscles(muscles.filter((val) => val !== muscleGroup));
			return;
		}

		if (muscles.length > 2) {
			return;
		}

		if (poison !== 'individual') {
			setMuscles([muscleGroup]);
			setShowModal(false);
			return;
		}

		setMuscles([...muscles, muscleGroup]);
		if (muscles.length === 2) {
			setShowModal(false);
		}
	}

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
							onClick={() => {
								setMuscles([]);
								setPoison(type);
							}}
							className={
								'bg-orange-500 border duration-200 px-4 hover:border-blue-600 hover:bg-purple-600 py-3 rounded-lg uppercase' +
								(type === poison ? 'border-blue-600 ' : 'border-blue-400 ')
							}
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

			<div className=" bg-orange-500 rounded-lg flex flex-col">
				<button
					onClick={toggleModal}
					className="relative p-3 flex items-center justify-center"
				>
					<p className="capitalize">
						{muscles.length === 0
							? 'Select body parts you wish to train'
							: muscles.join(' ')}
					</p>
					<i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>{' '}
				</button>
				{showModal && (
					<div className="flex flex-col px-3 pb-3">
						{(poison === 'individual'
							? WORKOUTS[poison]
							: Object.keys(WORKOUTS[poison])
						).map((muscleGroup, muscleGroupIndex) => {
							return (
								<button
									onClick={() => {
										updateMuscles(muscleGroup);
									}}
									key={muscleGroupIndex}
									className={
										'hover:text-blue-600' +
										(muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')
									}
								>
									<p className="uppercase">{muscleGroup}</p>
								</button>
							);
						})}
					</div>
				)}
			</div>
			<Header
				index={'03'}
				title={'Become Strong'}
				description={'Select your ultimate objective'}
			/>

			<div className="grid grid-cols-3 gap-4">
				{Object.keys(SCHEMES).map((scheme, schemeIndex) => {
					return (
						<button
							onClick={() => {
								setGoal(scheme);
							}}
							className={
								'bg-orange-500 border duration-200 hover:border-blue-600 hover:bg-purple-600 py-3 rounded-lg px-4 uppercase' +
								(scheme === goal ? 'border-blue-600 ' : 'border-blue-400 ')
							}
							key={schemeIndex}
						>
							<p>{scheme.replaceAll('_', ' ')}</p>
						</button>
					);
				})}
			</div>
			<Button text={'Formulate'}></Button>
		</SectionWrapper>
	);
}
