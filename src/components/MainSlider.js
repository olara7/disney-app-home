
//styles
import './MainSlider.css'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function MainSlider() {
    return (
        <Swiper
            //install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={3}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true}}
            autoplay={{ delay: 5000}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <div className='main-content'>
            <SwiperSlide>
                <a href="">
                    <img className='overlay-simpsons' src="/img/the-simpsons-overlay.png" alt="the simpsons overlay" />
                    <img className='cover-img' src="/img/the-simpsons.png" alt="the-simpsons" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="">
                    <img className='overlay' src="/img/random-things-overlay.png" alt="random things overlay" />
                    <img className='cover-img' src="/img/random-things.png" alt="random things" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="">
                    <img className='overlay' src="/img/encanto-overlay.png" alt="encanto overlay" />
                    <img className='cover-img' src="/img/encanto.png" alt="encanto" />
                </a>
            </SwiperSlide>
            </div>
        </Swiper>
    )
}