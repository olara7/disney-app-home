//styles
import'./OriginalSlider.css'

//data
import { originals } from '../Content.js'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default function OriginalSlider() {
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
            {originals.map((original) => {
                return (
                    <div className="content-list">
                        <SwiperSlide key={original.id}>
                            <a href="">
                                <img className='show-image' src={original.src} alt="content" />
                            </a>
                        </SwiperSlide>
                    </div>
                )
            })}
        </div>
    </Swiper>
  )
}
