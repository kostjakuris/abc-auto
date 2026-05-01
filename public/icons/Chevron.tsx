import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
	fill?: string
}

const Chevron = ({ className, fill }: IconProps) => {
	return (
		<svg
			className={className}
			width='12'
			height='7'
			viewBox='0 0 12 7'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M5.92832 6.84033C5.71582 6.84033 5.50335 6.75821 5.34134 6.59433L0.24323 1.43455C-0.0810766 1.10632 -0.0810766 0.574163 0.24323 0.24607C0.567405 -0.0820233 1.09311 -0.0820233 1.41744 0.24607L5.92832 4.81173L10.4392 0.246229C10.7635 -0.0818638 11.2892 -0.0818638 11.6133 0.246229C11.9378 0.574322 11.9378 1.10648 11.6133 1.43471L6.51529 6.59449C6.3532 6.7584 6.14073 6.84033 5.92832 6.84033Z'
				fill={fill || 'currentColor'}
				style={{ fillOpacity: 1 }}
			/>
		</svg>
	)
}

export default Chevron
