// import React from "react";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/scrollbar";

// // import required modules
// import { Scrollbar } from "swiper/modules";

// import { FaCircleChevronRight } from "react-icons/fa6";

// export default function ArxeologyHome() {
//   return (
//     <div className="swiper_archi_container">
//       <div className="title_container">
//         <h1 className="title">Arxeologiya yodgorliklari</h1>
//       </div>
//       <Swiper
//         slidesPerView={2}
//         spaceBetween={30}
//         scrollbar={{
//           hide: true,
//         }}
//         modules={[Scrollbar]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="exhibition-card">
//             <div className="exhibition-image">
//               <img
//                 src="https://www.britishmuseum.org/sites/default/files/styles/1_1_media_medium/public/2023-10/Legion%20HERO%202000x1160.jpg?h=93edb5bb&itok=g4VFY3VA"
//                 alt="Exhibition Image"
//               />
//             </div>
//             <div className="exhibition-info">
//               <h2 className="exhibition-title">Exhibition Title</h2>

//               {/* <p class="exhibition-description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p> */}
//               <a href="#" className="exhibition-link">
//                 <p className="exhibition-date">Date: June 1 - July 31, 2024</p>
//                 <button className="more_button">Batafsil</button>
//                 {/* <span>
//                   <FaCircleChevronRight />
//                 </span> */}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="exhibition-card">
//             <div className="exhibition-image">
//               <img
//                 src="https://www.britishmuseum.org/sites/default/files/styles/1_1_media_medium/public/2023-10/Legion%20HERO%202000x1160.jpg?h=93edb5bb&itok=g4VFY3VA"
//                 alt="Exhibition Image"
//               />
//             </div>
//             <div className="exhibition-info">
//               <h2 className="exhibition-title">Exhibition Title</h2>

//               {/* <p class="exhibition-description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p> */}
//               <a href="#" className="exhibition-link">
//                 <p className="exhibition-date">Date: June 1 - July 31, 2024</p>
//                 <button className="more_button">Batafsil</button>
//                 {/* <span>
//                   <FaCircleChevronRight />
//                 </span> */}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="exhibition-card">
//             <div className="exhibition-image">
//               <img
//                 src="https://www.britishmuseum.org/sites/default/files/styles/1_1_media_medium/public/2023-10/Legion%20HERO%202000x1160.jpg?h=93edb5bb&itok=g4VFY3VA"
//                 alt="Exhibition Image"
//               />
//             </div>
//             <div className="exhibition-info">
//               <h2 className="exhibition-title">Exhibition Title</h2>

//               {/* <p class="exhibition-description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p> */}
//               <a href="#" className="exhibition-link">
//                 <p className="exhibition-date">Date: June 1 - July 31, 2024</p>
//                 <button className="more_button">Batafsil</button>
//                 {/* <span>
//                   <FaCircleChevronRight />
//                 </span> */}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="exhibition-card">
//             <div className="exhibition-image">
//               <img
//                 src="https://www.britishmuseum.org/sites/default/files/styles/1_1_media_medium/public/2023-10/Legion%20HERO%202000x1160.jpg?h=93edb5bb&itok=g4VFY3VA"
//                 alt="Exhibition Image"
//               />
//             </div>
//             <div className="exhibition-info">
//               <h2 className="exhibition-title">Exhibition Title</h2>

//               {/* <p class="exhibition-description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p> */}
//               <a href="#" className="exhibition-link">
//                 <p className="exhibition-date">Date: June 1 - July 31, 2024</p>
//                 <button className="more_button">Batafsil</button>
//                 {/* <span>
//                   <FaCircleChevronRight />
//                 </span> */}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="exhibition-card">
//             <div className="exhibition-image">
//               <img
//                 src="https://www.britishmuseum.org/sites/default/files/styles/1_1_media_medium/public/2023-10/Legion%20HERO%202000x1160.jpg?h=93edb5bb&itok=g4VFY3VA"
//                 alt="Exhibition Image"
//               />
//             </div>
//             <div className="exhibition-info">
//               <h2 className="exhibition-title">Exhibition Title</h2>

//               {/* <p class="exhibition-description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p> */}
//               <a href="#" className="exhibition-link">
//                 <p className="exhibition-date">Date: June 1 - July 31, 2024</p>
//                 <button className="more_button">Batafsil</button>
//                 {/* <span>
//                   <FaCircleChevronRight />
//                 </span> */}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="exhibition-card">
//             <div className="exhibition-image">
//               <img
//                 src="https://www.britishmuseum.org/sites/default/files/styles/1_1_media_medium/public/2023-10/Legion%20HERO%202000x1160.jpg?h=93edb5bb&itok=g4VFY3VA"
//                 alt="Exhibition Image"
//               />
//             </div>
//             <div className="exhibition-info">
//               <h2 className="exhibition-title">Exhibition Title</h2>

//               {/* <p class="exhibition-description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p> */}
//               <a href="#" className="exhibition-link">
//                 <p className="exhibition-date">Date: June 1 - July 31, 2024</p>
//                 <button className="more_button">Batafsil</button>
//                 {/* <span>
//                   <FaCircleChevronRight />
//                 </span> */}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="exhibition-card">
//             <div className="exhibition-image">
//               <img
//                 src="https://www.britishmuseum.org/sites/default/files/styles/1_1_media_medium/public/2023-10/Legion%20HERO%202000x1160.jpg?h=93edb5bb&itok=g4VFY3VA"
//                 alt="Exhibition Image"
//               />
//             </div>
//             <div className="exhibition-info">
//               <h2 className="exhibition-title">Exhibition Title</h2>

//               {/* <p class="exhibition-description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p> */}
//               <a href="#" className="exhibition-link">
//                 <p className="exhibition-date">Date: June 1 - July 31, 2024</p>
//                 <button className="more_button">Batafsil</button>
//                 {/* <span>
//                   <FaCircleChevronRight />
//                 </span> */}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="exhibition-card">
//             <div className="exhibition-image">
//               <img
//                 src="https://www.britishmuseum.org/sites/default/files/styles/1_1_media_medium/public/2023-10/Legion%20HERO%202000x1160.jpg?h=93edb5bb&itok=g4VFY3VA"
//                 alt="Exhibition Image"
//               />
//             </div>
//             <div className="exhibition-info">
//               <h2 className="exhibition-title">Exhibition Title</h2>

//               {/* <p class="exhibition-description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p> */}
//               <a href="#" className="exhibition-link">
//                 <p className="exhibition-date">Date: June 1 - July 31, 2024</p>
//                 <button className="more_button">Batafsil</button>
//                 {/* <span>
//                   <FaCircleChevronRight />
//                 </span> */}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="exhibition-card">
//             <div className="exhibition-image">
//               <img
//                 src="https://www.britishmuseum.org/sites/default/files/styles/1_1_media_medium/public/2023-10/Legion%20HERO%202000x1160.jpg?h=93edb5bb&itok=g4VFY3VA"
//                 alt="Exhibition Image"
//               />
//             </div>
//             <div className="exhibition-info">
//               <h2 className="exhibition-title">Exhibition Title</h2>

//               {/* <p class="exhibition-description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p> */}
//               <a href="#" className="exhibition-link">
//                 <p className="exhibition-date">Date: June 1 - July 31, 2024</p>
//                 <button className="more_button">Batafsil</button>
//                 {/* <span>
//                   <FaCircleChevronRight />
//                 </span> */}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

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
import { Link, NavLink, useNavigate } from "react-router-dom";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";

export default function LibraryHome() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.arxeology);
      console.log(response, "arxeologyHome");
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
        <h1 className="title">Yodgorliklar</h1>
        <Link to="/arxeology">
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
        {apiData?.results?.map((arxeologyHome) => {
          return (
            <SwiperSlide>
              <div className="ashyo_home_card" key={arxeologyHome.id}>
                <div className="ashyo_home_img">
                  <img src={arxeologyHome.image} alt="" />
                </div>
                <div
                  className="ashyo_home_title"
                  onClick={() =>
                    navigate(`/arxeologyDetail/${arxeologyHome.id}`)
                  }
                >
                  <h2 className="ashyo_home_name">
                    <span>{arxeologyHome.title_uz}</span>
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
