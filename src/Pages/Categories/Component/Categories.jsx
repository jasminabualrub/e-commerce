import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Categories.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Hero from "../../../Components/Hero/Hero";

function Categories() {
  const [categories, setCategory] = useState([]);
  const getCategories = async () => {
    console.log(import.meta.env.VITE_API_URL)
    const { data }= await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?page=1&limit=10`);
    console.log(data.categories);
    setCategory(data.categories);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Hero />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {categories.map((e) => (
          <div className="category" key={e._id}>
            <SwiperSlide>
              <img src={e.image.secure_url} alt={e.name} />
            </SwiperSlide>

            {/*<h1>{e.name}</h1>*/}
          </div>
        ))}
      </Swiper>
    </>
  );
}

export default Categories;
