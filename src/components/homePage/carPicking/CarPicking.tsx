'use client'
import Image from 'next/image'
import styles from './car-picking.module.scss'
import UISelect from '@/src/components/ui/select/Select'
import { MenuItem } from '@mui/material'
import { useState } from 'react'
import PriceRangeSlider from '@/src/components/ui/rangeSlider/PriceRangeSlider'

const brands = [
	{ name: 'Kia', slug: 'kia' },
	{ name: 'Hyundai', slug: 'hyundai' },
	{ name: 'Skoda', slug: 'skoda' },
	{ name: 'Volkswagen', slug: 'volkswagen' },
	{ name: 'Toyota', slug: 'toyota' },
	{ name: 'Brilliance', slug: 'brilliance' },
	{ name: 'Changan', slug: 'changan' },
	{ name: 'Chery', slug: 'chery' },
	{ name: 'Chery Exeed', slug: 'chery-exceed' },
	{ name: 'Chevrolet', slug: 'chevrolet' },
	{ name: 'Citroën', slug: 'citroen' },
	{ name: 'Datsun', slug: 'datsun' },
	{ name: 'Dongfeng', slug: 'dongfeng' },
	{ name: 'DW Hower', slug: 'hower' },
	{ name: 'FAW', slug: 'faw' },
	{ name: 'Ford', slug: 'ford' },
	{ name: 'Foton', slug: 'foton' },
	{ name: 'GAC', slug: 'gac' },
	{ name: 'Geely', slug: 'geely' },
	{ name: 'Great Wall', slug: 'greatwall' },
	{ name: 'Haima', slug: 'haima' },
	{ name: 'Haval', slug: 'haval' },
	{ name: 'Honda', slug: 'honda' },
	{ name: 'JAC', slug: 'jac' },
	{ name: 'Lada', slug: 'lada' },
	{ name: 'Lifan', slug: 'lifan' },
	{ name: 'Mazda', slug: 'mazda' },
	{ name: 'Mitsubishi', slug: 'mitsubishi' },
	{ name: 'Nissan', slug: 'nissan' },
	{ name: 'Opel', slug: 'opel' },
	{ name: 'Peugeot', slug: 'peugeot' },
	{ name: 'Ravon', slug: 'ravon' },
	{ name: 'Renault', slug: 'renault' },
	{ name: 'SsangYong', slug: 'ssangyong' },
	{ name: 'Suzuki', slug: 'suzuki' },
	{ name: 'UAZ', slug: 'uaz' },
	{ name: 'Zotye', slug: 'zotye' },
]

const CarPicking = () => {
	const [selectedType, setSelectedType] = useState('')
	const [selectedBox, setSelectedBox] = useState('')
	const [values, setValues] = useState<[number, number]>([0, 9])
	const customValues = ['0', '500т', '800т', '1,1м', '1,4м', '1,7м', '2м', '2,3м', '2,7м', '3м']
	return (
		<section className={styles.carPicking}>
			<div className={styles.carPicking__grid}>
				{brands.map(({ name, slug }) => (
					<button key={slug} className={styles.carPicking__brand}>
						<Image
							src={`/icons/brands/${slug}.svg`}
							alt={name}
							width={38}
							height={38}
							className={styles.carPicking__logo}
						/>
						<span className={styles.carPicking__name}>{name}</span>
					</button>
				))}
			</div>
			<div className={'flex-1'}>
				<h2 className={styles.carPicking__title}>Быстрый подбор авто</h2>
				<div className={styles.carPicking__values}>
					<span className={'text-big-bold text-custom-black font-normal!'}>Цена</span>
					<span className={'text-big-bold text-custom-black'}>
						{customValues[values[0]]} - {customValues[values[1]]}
					</span>
				</div>
				<PriceRangeSlider values={values} onChange={setValues} max={9} labels={customValues} />
				<div className={styles.carPicking__selectors}>
					<UISelect
						placeholder={'Тип кузова'}
						value={selectedType}
						onValueChange={(event) => setSelectedType(event.target.value)}
					>
						<MenuItem
							sx={{
								fontSize: '14px',
								color: '#262626FF',
							}}
							value={'Большой'}
						>
							Большой
						</MenuItem>
						<MenuItem
							sx={{
								fontSize: '14px',
								color: '#262626FF',
								'&:hover': {
									backgroundColor: 'rgb(28 118 210 / 22%)',
								},
							}}
							value={'Маленький'}
						>
							Маленький
						</MenuItem>
					</UISelect>
					<UISelect
						placeholder={'Коробка'}
						value={selectedBox}
						onValueChange={(event) => setSelectedBox(event.target.value)}
					>
						<MenuItem
							sx={{
								fontSize: '14px',
								color: '#262626FF',
							}}
							value={'Хорошая'}
						>
							Хорошая
						</MenuItem>
						<MenuItem
							sx={{
								fontSize: '14px',
								color: '#262626FF',

								'&:hover': {
									backgroundColor: 'rgb(28 118 210 / 22%)',
								},
							}}
							value={'Плохая'}
						>
							Плохая
						</MenuItem>
					</UISelect>
				</div>
				<button className={`text-big-bold ${styles.carPicking__button}`}>ПОКАЗАТЬ 73</button>
			</div>
		</section>
	)
}

export default CarPicking
