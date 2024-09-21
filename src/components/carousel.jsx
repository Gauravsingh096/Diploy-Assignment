import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./header.css";

// Reviews data
const reviews = [
  {
    name: "Robert A. Voltaire",
    storeLink: "#",
    image: require("../assets/user1.png"),
    rating: 4,
    review: "This has been an incredible service for us musicians...",
  },
  {
    name: "Quinten Barney",
    storeLink: "#",
    image: require("../assets/user2.png"),
    rating: 5,
    review: "We chose this because of their offerings...",
  },
  {
    name: "Neil wu",
    storeLink: "#",
    image: require("../assets/user3.png"),
    rating: 5,
    review: "We chose this because of their offerings...",
  },
  {
    name: "Don Barney",
    storeLink: "#",
    image: require("../assets/user1.png"),
    rating: 5,
    review: "We chose this because of their offerings...",
  },
  {
    name: "Quinten don",
    storeLink: "#",
    image: require("../assets/user2.png"),
    rating: 5,
    review: "We chose this because of their offerings...",
  },
  {
    name: "Nikki",
    storeLink: "#",
    image: require("../assets/user3.png"),
    rating: 4,
    review: "This has been amazing for our business growth...",
  },
  {
    name: "Nikki Selam",
    storeLink: "#",
    image: require("../assets/user1.png"),
    rating: 4,
    review: "This has been amazing for our business growth...",
  },
];

const ReviewCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }} // Enable pagination dots
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="review-card">
            <img
              src={review.image}
              alt={review.name}
              className="review-image"
            />
            <h3>{review.name}</h3>
            <a href={review.storeLink} className="store-link">
              Store link
            </a>
            <div className="rating">{"★".repeat(review.rating)}</div>
            <p>{review.review}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCarousel;
