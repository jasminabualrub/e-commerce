import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './Home.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Home() {
  const[categories,setCategory]=useState([]);
  const getCategories=async()=>{
    const {data}= await axios.get(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`);
    console.log(data.categories);
    setCategory(data.categories);
  };
  useEffect(()=>{getCategories()},[])
  return (
   


<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     
     {
categories.map((e)=><div className='category' key={e.id}>

      <SwiperSlide><img src={e.image.secure_url} alt={e.name}/></SwiperSlide>
  
      
  
 
    
    
  
    {/*<h1>{e.name}</h1>*/}
 
  </div>
  
  

)
   }
     </Swiper>
   
    
   
  )
}

export default Home