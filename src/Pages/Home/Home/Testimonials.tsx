import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay CSS if needed
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            text: "The quality of products on this site is exceptional. I'm particularly impressed with the fast shipping and excellent customer service. Will definitely shop here again!",
            rating: 5,
            badge: "SJ"
        },
        {
            id: 2, 
            name: "Michael Chen",
            text: "Found exactly what I was looking for at a great price. The detailed product descriptions and reviews helped me make an informed decision. Very satisfied with my purchase.",
            rating: 5,
            badge: "MC"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            text: "The website is so easy to navigate and the checkout process was smooth. My order arrived earlier than expected and was exactly as described. Highly recommend!",
            rating: 5,
            badge: "ER"
        },
        {
            id: 4,
            name: "David Thompson",
            text: "Outstanding selection of electronics. The product recommendations were spot-on and helped me find the perfect laptop for my needs. Great experience overall.",
            rating: 5,
            badge: "DT"
        },
        {
            id: 5,
            name: "Lisa Anderson",
            text: "The customer support team went above and beyond to help me with my purchase. The product quality is fantastic and the prices are very competitive.",
            rating: 5,
            badge: "LA"
        }
    ];

    return (
        <div>
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-12"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white rounded-lg shadow-lg h-full p-8 transition-transform duration-300 hover:scale-105">
                                    <div className="flex items-center mb-6">
                                        {Array(testimonial.rating).fill(0).map((_, j) => (
                                            <FaStar key={j} className="text-yellow-400 w-5 h-5" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-8 leading-relaxed italic">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold mr-4">
                                            {testimonial.badge}
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">Verified Buyer</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
