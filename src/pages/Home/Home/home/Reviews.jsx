import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from "../../../../components/sectionHeading/SectionTitle";
import StarRating from "../../../../components/starReating/StarRating";
import quateLeft from "../../../../assets/icon/quote-left 1.svg"

export default function Reviews() {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                reviews.map(review => {
                    return (
                        <SwiperSlide key={review._id}>
                            <div className="max-w-4xl mx-auto">
                                <SectionTitle subtitle={'---What Our Clients Say---'} title={'TESTIMONIALS'}></SectionTitle>
                                <StarRating rating={review.rating}></StarRating>
                                <img className="mx-auto my-8" src={quateLeft} alt="" />
                                <p className="text-center">{review.details}</p>
                                <h2 className="text-xl text-orange-600 text-center my-8">{review.name}</h2>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}
