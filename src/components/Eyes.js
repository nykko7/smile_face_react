import React from 'react';

export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) => {
	return (
		<>
			{/* centerX - eyeOffsetX */}
			<circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
			{/* centerX + eyeOffsetX */}
			<circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
		</>
	);
};
