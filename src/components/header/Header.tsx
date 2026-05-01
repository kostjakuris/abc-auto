import React from 'react'
import styles from './header.module.scss'
import Geolocation from '@/public/icons/Geolocation'
import Clock from '@/public/icons/Clock'
import Link from 'next/link'
import WhatsApp from '@/public/icons/WhatsApp'
import HeaderHero from '@/src/components/header/HeaderHero'
import HeaderNav from '@/src/components/header/HeaderNav'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__banner}>
				<div
					className={
						'content-container text-base-regular flex items-center justify-between py-[12px]'
					}
				>
					<div className={'flex items-center gap-[clamp(80px,11vw,210px)]'}>
						<div className={'flex items-center gap-2'}>
							<Geolocation />
							<span>Россия, Москва, 38КМ МКАД, 6Бс1</span>
						</div>
						<div className={'flex items-center gap-2'}>
							<Clock />
							<span>Время работы: c 08:00 до 21:00</span>
						</div>
					</div>
					<div>
						<Link className={styles.header__banner_link} href={'/'}>
							<WhatsApp />
							Whatsapp
						</Link>
					</div>
				</div>
			</div>
			<HeaderHero />
			<HeaderNav />
		</header>
	)
}

export default Header
