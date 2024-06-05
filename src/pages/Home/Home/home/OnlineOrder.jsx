import SectionTitle from "../../../../components/sectionHeading/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from '../../../../assets/home/slide1.jpg';
import img2 from '../../../../assets/home/slide2.jpg';
import img3 from '../../../../assets/home/slide3.jpg';
import img4 from '../../../../assets/home/slide4.jpg';
import img5 from '../../../../assets/home/slide5.jpg';

export default function OnlineOrder() {
    return (
        <section className="my-20 w-full lg:w-11/12 mx-auto">
            <SectionTitle subtitle={'---From 11:00am to 10:00pm---'} title={'ORDER ONLINE'}></SectionTitle>
            <div className="">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="relative">
                            <img src={img1} alt="" />
                            <h2 className="text-2xl font-semibold text-center absolute bottom-6 left-1/3 text-white uppercase">Salads</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={img2} alt="" />
                            <h2 className="text-2xl font-semibold text-center absolute bottom-6 left-1/3 text-white uppercase">pizzas</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={img3} alt="" />
                            <h2 className="text-2xl font-semibold text-center absolute bottom-6 left-1/3 text-white uppercase">Soups</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={img4} alt="" />
                            <h2 className="text-2xl font-semibold text-center absolute bottom-6 left-1/3 text-white uppercase">desserts</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src={img5} alt="" />
                            <h2 className="text-2xl font-semibold text-center absolute bottom-6 left-1/3 text-white uppercase">Salads</h2>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}
