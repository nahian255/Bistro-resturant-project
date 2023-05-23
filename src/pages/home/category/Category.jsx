import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../component/sectionTitle/SectionTitle";

const Category = () => {
    return (
        <div>
            <section>
                <SectionTitle
                    subHeading={'open it 10 am- 11 pm'}
                    heading={'Big Title'}
                >
                </SectionTitle>
            </section>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-16"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <p className="text-4xl text-center -mt-16">Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <p className="text-4xl text-center -mt-16">Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <p className="text-4xl text-center -mt-16">Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <p className="text-4xl text-center -mt-16">Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <p className="text-4xl text-center -mt-16">Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <p className="text-4xl text-center -mt-16">Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <p className="text-4xl text-center -mt-16">Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <p className="text-4xl text-center -mt-16">Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <p className="text-4xl text-center -mt-16 mb-4">Pizza</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;