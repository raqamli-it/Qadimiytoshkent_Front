// import React from "react";

// export default function AshyolarHome() {
//   return (
//     <div className="ashyo_home_container">
//       <div className="title_container">
//         <h1 className="title">Ashyolar</h1>
//       </div>
//       <div className="ashyo_home_card_container">
//         <div className="ashyo_home_card">
//           <div className="ashyo_home_img">
//             <img
//               src="https://www.britishmuseum.org/sites/default/files/styles/16_9_media_tiny/public/2021-11/room-33-china-south-asia-visitor-1920.jpg?h=d1cb525d&itok=ZedZVrPS"
//               alt=""
//             />
//           </div>
//           <div className="ashyo_home_info">
//             <h2 className="ashyo_home_title">Plan your visit</h2>
//             <p className="ashyo_home_des">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Perferendis vero inventore eveniet debitis accusamus error!
//             </p>
//           </div>
//         </div>
//         <div className="ashyo_home_card">
//           <div className="ashyo_home_img">
//             <img
//               src="https://www.britishmuseum.org/sites/default/files/styles/16_9_media_tiny/public/2021-11/room-33-china-south-asia-visitor-1920.jpg?h=d1cb525d&itok=ZedZVrPS"
//               alt=""
//             />
//           </div>
//           <div className="ashyo_home_info">
//             <h2 className="ashyo_home_title">Plan your visit</h2>
//             <p className="ashyo_home_des">
//               _home Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Perferendis vero inventore eveniet debitis accusamus error!
//             </p>
//           </div>
//         </div>
//         <div className="ashyo_home_card">
//           <div className="ashyo_home_img">
//             <img
//               src="https://www.britishmuseum.org/sites/default/files/styles/16_9_media_tiny/public/2021-11/room-33-china-south-asia-visitor-1920.jpg?h=d1cb525d&itok=ZedZVrPS"
//               alt=""
//             />
//           </div>
//           <div className="ashyo_home_info">
//             <h2 className="ashyo_home_title">Plan your visit</h2>
//             <p className="ashyo_home_des">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Perferendis vero inventore eveniet debitis accusamus error!
//             </p>
//           </div>
//         </div>
//         <div className="ashyo_home_card">
//           <div className="ashyo_home_img">
//             <img
//               src="https://www.britishmuseum.org/sites/default/files/styles/16_9_media_tiny/public/2021-11/room-33-china-south-asia-visitor-1920.jpg?h=d1cb525d&itok=ZedZVrPS"
//               alt=""
//             />
//           </div>
//           <div className="ashyo_home_info">
//             <h2 className="ashyo_home_title">Plan your visit</h2>
//             <p className="ashyo_home_des">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Perferendis vero inventore eveniet debitis accusamus error!
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { Scrollbar, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";

export default function AshyolarHome() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.ashyo);
      console.log(response, "ashyoHome");
      setApiData(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //

  return (
    <div className="ashyo_home_container">
      <div className="title_container">
        <h1 className="title">Ashyolar</h1>
        <Link to="/ashyolar">
          <p>
            <span>BARCHASI</span> <FaArrowRightLong />
          </p>
        </Link>
      </div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 5000, // Delay in milliseconds (3000ms = 3 seconds)
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          610: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1060: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {apiData?.results?.map((ashyoHome) => {
          return (
            <SwiperSlide>
              <div className="ashyo_home_card" key={ashyoHome.id}>
                <div className="ashyo_home_img">
                  <img src={ashyoHome.image} alt="" />
                </div>
                <div
                  className="ashyo_home_title"
                  onClick={() => navigate(`/ashyolarDetail/${ashyoHome.id}`)}
                >
                  <h2 className="ashyo_home_name">
                    <span>{ashyoHome.title_uz}</span>
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
