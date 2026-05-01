import * as React from 'react'
import { Select, SelectChangeEvent, Typography } from '@mui/material'
import Chevron from '@/public/icons/Chevron'

interface SelectProps {
	children: React.ReactNode
	value: string
	placeholder?: string
	onValueChange: (event: SelectChangeEvent) => void
}

const UISelect = ({ children, value, onValueChange, placeholder }: SelectProps) => (
	<Select
		labelId='simple-select-label'
		id='simple-select'
		name='language'
		disableUnderline
		displayEmpty
		variant='standard'
		value={value}
		IconComponent={Chevron}
		renderValue={(selected) => {
			if (selected.length === 0) {
				return <Typography color='#262626FF'>{placeholder}</Typography>
			}
			return selected
		}}
		sx={{
			width: '100%',
			fontSize: '14px',
			fontWeight: '400',
			lineHeight: '100%',
			color: '#262626FF',
			backgroundColor: '#FFFFFF',
			border: '1px solid var(--light-gray-300)',
			borderRadius: '6px',
			padding: '21px 15px',
			'@media (max-width:1023px)': {
				marginLeft: '12px',
				fontSize: '15px',
			},
			'@media (max-width:479px)': {
				fontSize: '13px',
				marginLeft: '14px',
			},
			'& .MuiSelect-icon': {
				color: '#262626FF',
				width: '12px',
				height: '12px',
				marginRight: '15px',
				'@media (max-width:1023px)': {
					width: '15px',
					height: '15px',
					marginRight: '8px',
				},
				'@media (max-width:479px)': {
					marginRight: '10px',
				},
			},
		}}
		onChange={onValueChange}
	>
		{children}
	</Select>
)

export default UISelect
