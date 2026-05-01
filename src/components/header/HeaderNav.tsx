import React from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import Chevron from '@/public/icons/Chevron'
import Heart from '@/public/icons/Heart'
import Stats from '@/public/icons/Stats'
import Search from '@/public/icons/Search'

const HeaderNav = () => {
	return (
		<div className={styles.header__nav}>
			<nav>
				<ul className={styles.header__nav_list}>
					<li>
						<Link href='/' className={styles.header__nav_item}>
							Каталог авто
							<Chevron fill={'#737373'} />
						</Link>
					</li>
					<li>
						<Link href='/' className={styles.header__nav_item}>
							Авто с пробегом
							<Chevron fill={'#737373'} />
						</Link>
					</li>
					<li>
						<Link href='/' className={styles.header__nav_item}>
							Кредит и рассрочка
							<Chevron fill={'#737373'} />
						</Link>
					</li>
					<li>
						<Link href='/' className={styles.header__nav_item}>
							Спецпредложения
							<Chevron fill={'#737373'} />
						</Link>
					</li>
					<li>
						<Link href='/' className={styles.header__nav_item}>
							Такси в кредит
						</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.header__nav_actions}>
				<button className={styles.header__nav_action}>
					<Heart />
					<span className={styles.header__nav_count}>10</span>
				</button>
				<button className={styles.header__nav_action}>
					<Stats />
					<span className={styles.header__nav_count}>12</span>
				</button>
				<button className={styles.header__nav_action}>
					<Search />
				</button>
			</div>
		</div>
	)
}

export default HeaderNav
