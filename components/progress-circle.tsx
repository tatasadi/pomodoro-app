import React from 'react'

interface ProgressCircleProps {
	progress: number // Progress in percentage (0-100)
	size?: number // Diameter of the circle in pixels
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ progress }) => {
	return (
		<div
			className="relative flex items-center justify-center rounded-full bg-dark size-[16.25rem] sm:size-[21.5rem]"
			style={{
				background: `conic-gradient(var(--selected-color) ${progress * 3.6}deg, #161932 0deg)`,
			}}
		>
			{/* Inner Circle for Track */}
			<div className="absolute rounded-full bg-dark size-[15.25rem] sm:size-[20rem]"></div>
		</div>
	)
}

export default ProgressCircle
