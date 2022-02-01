//styles
import'./ContentSlider.css'

//data
import { shows } from '../Content.js'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default function ContentSlider() {
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
        <div className="content">
            {shows.map((show) => {
                return (
                    <div className="content-list">
                        <SwiperSlide className='content-slide' key={show.id}>
                            <a href="/">
                                <img className='show-image' src={show.src} alt="content" />
                            </a>
                        </SwiperSlide>
                    </div>
                )
            })}
        </div>
    </Swiper>
  )
}
