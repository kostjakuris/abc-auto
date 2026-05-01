import { getTrackBackground, Range } from 'react-range'
import styles from './price-range-slider.module.scss'

interface PriceRangeSliderProps {
	values: [number, number]
	onChange: (values: [number, number]) => void
	max: number
	labels: string[]
}

const PriceRangeSlider = ({ values, onChange, max, labels }: PriceRangeSliderProps) => {
	const steps = labels.length - 1
	return (
		<>
			<Range
				step={1}
				min={0}
				max={max}
				values={values}
				onChange={(v) => onChange(v as [number, number])}
				renderTrack={({ props, children }) => {
					const { key, style, ...rest } = props as any
					return (
						<div
							key={key}
							{...rest}
							style={{
								...style,
								height: 20,
								width: '100%',
								marginBottom: 9,
								display: 'flex',
								alignItems: 'center',
								position: 'relative',
							}}
						>
							<div
								style={{
									height: 6,
									width: '100%',
									borderRadius: 999,
									background: getTrackBackground({
										values,
										colors: ['#E1E1E1FF', '#cf1f25', '#E1E1E1FF'],
										min: 0,
										max,
									}),
								}}
							/>
							{children}
						</div>
					)
				}}
				renderThumb={({ props, index }) => {
					const { key, style, ...rest } = props as any
					return (
						<div
							key={key}
							{...rest}
							style={{
								...style,
								height: 14,
								width: 14,
								bottom: 5,
								borderRadius: '50%',
								background: 'var(--light-red)',
								zIndex: 2,
								outline: 'none',
								marginLeft: index === 0 ? -7 : 7,
							}}
						/>
					)
				}}
			/>
			<div className={styles.legend}>
				{labels.map((label, i) => (
					<div
						key={label}
						className={'flex flex-col items-center gap-[5px]'}
						style={{
							position: 'absolute',
							left: `${(i / steps) * 100}%`,
							transform: 'translateX(-50%)',
						}}
					>
						<span className={'bg-light-gray-300 h-[8px] w-[1px]'}></span>
						<span className={styles.value}>{label}</span>
					</div>
				))}
			</div>
		</>
	)
}

export default PriceRangeSlider
