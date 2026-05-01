import React from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import Menu from '@/public/icons/Menu'
import Logo from '@/public/icons/Logo'
import Phone from '@/public/icons/Phone'

const HeaderHero = () => {
	return (
		<div className={styles.header__hero}>
			<button data-component='menu' className={styles.header__hero_menu}>
				<Menu />
			</button>
			<Link data-component='logo' href={'/'}>
				<Logo />
			</Link>
			<div className={'text-big-bold border-light-gray-200 border-l pr-[9px] pl-[21px]'}>
				<p className={'flex flex-col gap-[6px]'}>
					<span>
						<span
							className={
								'bg-light-red mr-[6px] rounded-[22px] px-[7px] py-[2.5px] whitespace-nowrap text-white'
							}
						>
							10 лет
						</span>
						превосходим
					</span>
					<span>ваши ожидания</span>
				</p>
			</div>
			<nav
				data-component='navigation'
				className={'max-tablet:hidden text-base-regular flex w-full items-center'}
			>
				<ul
					data-component='navigation list'
					className={'m-auto flex w-fit items-center gap-[16px]'}
				>
					<li className={'hover:text-light-red transition-colors'}>
						<Link className={'py-[6px]'} href={'/'}>
							Подбор авто
						</Link>
					</li>
					<li className={'hover:text-light-red transition-colors'}>
						<Link className={'py-[6px]'} href={'/'}>
							О компании
						</Link>
					</li>
					<li className={'hover:text-light-red transition-colors'}>
						<Link className={'py-[6px]'} href={'/'}>
							Техцентр
						</Link>
					</li>
					<li className={'hover:text-light-red transition-colors'}>
						<Link className={'py-[6px]'} href={'/'}>
							Отзывы
						</Link>
					</li>
					<li className={'hover:text-light-red transition-colors'}>
						<Link className={'py-[6px]'} href={'/'}>
							Контакты
						</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.header__hero_phone}>
				<span className={'text-base-regular bg-light-red w-fit rounded-full p-[8px]'}>
					<Phone />
				</span>
				<div className={'flex flex-col items-end'}>
					<a className={styles.header__hero_phoneText} href='tel:+78005519431'>
						+7 (800) 551-94-31
					</a>
					<a className={styles.header__hero_phoneSubText} href='tel:+74952921867'>
						+7 (495) 292-18-67
					</a>
				</div>
			</div>
			<button data-component='call' className={`text-big-bold ${styles.header__hero_button}`}>
				Обратный звонок
			</button>
		</div>
	)
}

export default HeaderHero
