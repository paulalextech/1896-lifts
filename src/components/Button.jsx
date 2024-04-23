import React from 'react';

export default function Button(props) {
	const { text, func } = props;
	return (
		<button
			onClick={func}
			className="px-10 mx-auto py-3 rounded-lg bg-orange-500 uppercase border-solid border hover:border-blue-600 hover:bg-purple-600"
		>
			<p>{text}</p>
		</button>
	);
}
