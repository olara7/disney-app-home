//styles
import'./RecommendedSlider.css'

//data
import { recommended } from '../Content.js'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default function RecommendedSlider() {
  return (
    <Swiper
        //install Swiper modules
        modules={[Navigation]}
        spaceBetween={3}
        slidesPerView={5.5}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        <div className="original">
            {recommended.map((recommend) => {
                return (
                    <div className="content-list">
                        <SwiperSlide key={recommend.id}>
                            <a href="">
                                <img className='show-image' src={recommend.src} alt="content" />
                            </a>
                        </SwiperSlide>
                    </div>
                )
            })}
        </div>
    </Swiper>
  )
}
