import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperNav = () => {
    const swiper = useSwiper();

    return (
        <div className="roadmap__arrows">
            <button className="button roadmap__arrow roadmap__prev" onClick={() => swiper.slidePrev()}>
                <svg viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.068 0.760739C13.3843 1.07719 13.5621 1.50634 13.5621 1.9538C13.5621 2.40127 13.3843 2.83041 13.068 3.14686L5.42197 10.7929C5.03145 11.1834 5.03145 11.8166 5.42197 12.2071L13.068 19.8531C13.3754 20.1714 13.5455 20.5976 13.5416 21.0401C13.5378 21.4826 13.3603 21.9058 13.0474 22.2187C12.7346 22.5316 12.3113 22.709 11.8689 22.7129C11.4264 22.7167 11.0001 22.5466 10.6819 22.2392L1.13568 12.6931C0.819322 12.3766 0.641602 11.9475 0.641602 11.5C0.641602 11.0525 0.819322 10.6234 1.13568 10.3069L10.6819 0.760739C10.9983 0.444382 11.4275 0.266662 11.8749 0.266662C12.3224 0.266662 12.7515 0.444382 13.068 0.760739Z" fill="black"/>
                </svg>
            </button>

            <button className="button roadmap__arrow roadmap__next" onClick={() => swiper.slideNext()}>
                <svg viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.93201 0.760739C0.615653 1.07719 0.437933 1.50634 0.437933 1.9538C0.437933 2.40127 0.615653 2.83041 0.93201 3.14686L8.57803 10.7929C8.96855 11.1834 8.96855 11.8166 8.57803 12.2071L0.932009 19.8531C0.624617 20.1714 0.454527 20.5976 0.458372 21.0401C0.462217 21.4826 0.639689 21.9058 0.952565 22.2187C1.26544 22.5316 1.68869 22.709 2.13114 22.7129C2.5736 22.7167 2.99987 22.5466 3.31813 22.2392L12.8643 12.6931C13.1807 12.3766 13.3584 11.9475 13.3584 11.5C13.3584 11.0525 13.1807 10.6234 12.8643 10.3069L3.31813 0.760739C3.00168 0.444382 2.57254 0.266662 2.12507 0.266662C1.67761 0.266662 1.24846 0.444382 0.93201 0.760739Z" fill="black"/>
                </svg>
            </button>
        </div>
    )
}

export default SwiperNav;