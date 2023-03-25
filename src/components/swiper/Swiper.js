// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, autoplay, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import "./Swiper.scss"
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"

import swiper1 from "../../images/swiper1.jpg"
import swiper2 from "../../images/swiper2.jpg"
import swiper3 from "../../images/swiper3.jpg"
import swiper4 from "../../images/swiper4.jpg"
import swiper5 from "../../images/swiper5.jpg"
import swiper7 from "../../images/swiper7.jpg"
import swiper8 from "../../images/swiper8.jpg"

export default () => {
    return (
        <div>
            <Swiper className='swiper'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 1000 }}
                navigation={{
                    prevEl: ".left",
                    nextEl: ".right",
                }}
                pagination
                loop={true}


                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src={swiper4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={swiper2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={swiper3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={swiper1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={swiper5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={swiper7} alt="" /></SwiperSlide>
                <SwiperSlide><img src={swiper8} alt="" /></SwiperSlide>

                <div className='left'>
                    <AiOutlineLeft />
                </div>
                <div className='right'>
                    <AiOutlineRight />
                </div>
                <div className="swiper-pagination"></div>
            </Swiper>


        </div>

    );
};