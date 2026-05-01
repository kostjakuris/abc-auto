'use client'
import React from 'react'
import styles from './hero.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import './slider.css'
import 'swiper/css/pagination'
import Chevron from '@/public/icons/Chevron'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const Hero = () => {
	return (
		<section className={styles.hero}>
			<Swiper
				rewind
				className={'hero-slider'}
				initialSlide={0}
				pagination={{
					dynamicBullets: false,
					clickable: true,
					type: 'bullets',
					el: '.custom-pagination',
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				modules={[Pagination, Navigation, Autoplay]}
				navigation={{
					nextEl: '.custom-swiper-button-next',
					prevEl: '.custom-swiper-button-prev',
				}}
				slidesPerView={1}
			>
				<SwiperSlide className={'swiper-slide'}>
					<div className={styles.hero__slide}>
						<div className={'content-container flex flex-col'}>
							<span className={`text-big-bold ${styles.hero__slide_span}`}>
								Осталось всего 10 авто!
							</span>
							<h1 className={styles.hero__slide_title}>
								Грандиозная распродажа {'\n'} тестового парка!
							</h1>
							<p className={styles.hero__slide_text}>Узнай свою цену!</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className={'swiper-slide'}>
					<div className={styles.hero__slide}>
						<div className={'content-container flex flex-col'}>
							<span className={`text-big-bold ${styles.hero__slide_span}`}>
								Осталось всего 10 авто!
							</span>
							<h1 className={styles.hero__slide_title}>
								Грандиозная распродажа {'\n'} тестового парка!
							</h1>
							<p className={styles.hero__slide_text}>Узнай свою цену!</p>
						</div>
					</div>
				</SwiperSlide>
				<button className='custom-swiper-button-prev'>
					<Chevron className='h-[34px] w-[34px] rotate-90' fill={'#262626FF'} />
				</button>
				<button className='custom-swiper-button-next'>
					<Chevron className='h-[34px] w-[34px] -rotate-90' fill={'#262626FF'} />
				</button>
			</Swiper>
			<div className={styles.hero__pagination_wrapper}>
				<div className={'content-container'}>
					<div className={'custom-pagination'} />
				</div>
			</div>
		</section>
	)
}

export default Hero
