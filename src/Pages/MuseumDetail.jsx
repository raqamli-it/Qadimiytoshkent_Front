// import React, { useEffect, useState } from "react";
// import PageTitle from "../Components/PageTittle";
// import { endpoints } from "../config/endpoints";
// import { DataService } from "../config/dataService";
// import { useParams } from "react-router-dom";

// export default function MuseumDetail() {
//   const route = useParams();
//   // bu qism api lar bilan ishlash uchun
//   const [apiData, setApiData] = useState();
//   const fetchData = async () => {
//     const response = await DataService.get(endpoints.museumById(route?.id));
//     setApiData(response);
//     // let x = document.querySelector("title");
//     // x.textContent = `Voqealar / Yigʻinlar / ${response.title}`;
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   //

//   // video function
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const handlePlayButtonClick = () => {
//     setIsVideoPlaying(true);
//   };

//   return (
//     <div className="museum_detail_container">
//       <PageTitle title={apiData?.title_uz} />
//       <div className="museum_detail_content">
//         <div className="video">
//           {isVideoPlaying ? (
//             <iframe
//               width="560"
//               height="315"
//               src={apiData?.link}
//               title="YouTube video player"
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerpolicy="strict-origin-when-cross-origin"
//               allowfullscreen
//             ></iframe>
//           ) : (
//             <div className="thumbnail">
//               <img src={apiData?.image} alt="Video Thumbnail" />
//               <button className="play-button" onClick={handlePlayButtonClick}>
//                 ▶️
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

//////// 2 ///// yuklangan video ishladi

// import React, { useEffect, useState } from "react";
// import PageTitle from "../Components/PageTittle";
// import { DataService } from "../config/dataService";
// import { endpoints } from "../config/endpoints";
// import { useParams } from "react-router-dom";

// const MuseumDetail = () => {
//   const { id } = useParams();
//   const [apiData, setApiData] = useState(null);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await DataService.get(endpoints.museumById(id));
//         setApiData(response);
//         document.title = `Voqealar / Yigʻinlar / ${response.title}`;
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const handlePlayButtonClick = () => {
//     setIsVideoPlaying(true);
//   };

//   const renderContent = () => {
//     if (!apiData) return null;

//     if (isVideoPlaying && apiData.link) {
//       if (apiData.link.includes("youtube.com")) {
//         const videoId = apiData?.video_link.split("v=")[1];
//         const embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
//         return (
//           <iframe
//             width="560"
//             height="315"
//             src={embedLink}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             referrerPolicy="strict-origin-when-cross-origin"
//           ></iframe>
//         );
//       } else {
//         // Handle other types of video sources (if needed)
//         return (
//           <video controls autoPlay>
//             <source src="" type="video/mp4" />
//           </video>
//         );
//       }
//     } else {
//       // Default thumbnail or image display
//       return (
//         <div className="thumbnail">
//           <img src={apiData.image} alt="Video Thumbnail" />
//           <button className="play-button" onClick={handlePlayButtonClick}>
//             ▶️
//           </button>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="museum_detail_container">
//       <PageTitle title={apiData?.title_uz} />
//       <div className="museum_detail_content">
//         <div className="video">{renderContent()}</div>
//       </div>
//     </div>
//   );
// };

// export default MuseumDetail;

//////////////////3///////////// video link ishladi

// MuseumDetail.js

// import React, { useEffect, useState } from "react";
// import PageTitle from "../Components/PageTittle"; // Aniq bo'lishi kerak
// import { DataService } from "../config/dataService"; // Aniq bo'lishi kerak
// import { endpoints } from "../config/endpoints"; // Aniq bo'lishi kerak
// import { useParams } from "react-router-dom";

// const MuseumDetail = () => {
//   const { id } = useParams();
//   const [apiData, setApiData] = useState(null);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await DataService.get(endpoints.museumById(id));
//         console.log(response, "museumDetail");
//         setApiData(response);
//         // document.title = `Voqealar / Yigʻinlar / ${response.title}`;
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const handlePlayButtonClick = () => {
//     setIsVideoPlaying(true);
//   };

//   const renderContent = () => {
//     if (!apiData) return null;

//     if (isVideoPlaying && apiData.link) {
//       if (
//         apiData.video_link &&
//         (apiData.video_link.includes("youtube.com") ||
//           apiData.video_link.includes("youtu.be"))
//       ) {
//         const videoId = apiData.video_link.includes("youtube.com")
//           ? apiData.video_link.split("v=")[1]
//           : apiData.video_link.split("/").slice(-1)[0];
//         const embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
//         return (
//           <iframe
//             width="560"
//             height="315"
//             src=""
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             referrerPolicy="strict-origin-when-cross-origin"
//           ></iframe>
//         );
//       } else {
//         // Boshqa video manbalari (kerak bo'lsa) ni boshqarish
//         return (
//           <video controls autoPlay>
//             <source src={apiData.video} type="video/mp4" />
//           </video>
//         );
//       }
//     } else {
//       // Sukutiy rasm yoki suratni ko'rsatish
//       return (
//         <div className="thumbnail">
//           <img src={apiData.image} alt="Video Thumbnail" />
//           <button className="play-button" onClick={handlePlayButtonClick}>
//             ▶️
//           </button>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="museum_detail_container">
//       <PageTitle title={apiData?.title_uz} /> {/* Aniq bo'lishi kerak */}
//       <div className="museum_detail_content">
//         <div className="video">{renderContent()}</div>
//       </div>
//     </div>
//   );
// };

// export default MuseumDetail;

///////////// 4  ishlagan versiya
// import React, { useEffect, useState } from "react";
// import PageTitle from "../Components/PageTittle";
// import { DataService } from "../config/dataService";
// import { endpoints } from "../config/endpoints";
// import { useParams } from "react-router-dom";

// const MuseumDetail = () => {
//   const { id } = useParams();
//   const [apiData, setApiData] = useState(null);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await DataService.get(endpoints.museumById(id));
//         setApiData(response);
//         // document.title = `Voqealar / Yigʻinlar / ${response.title}`;
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const handlePlayButtonClick = () => {
//     setIsVideoPlaying(true);
//   };

//   const renderContent = () => {
//     if (!apiData) return null;

//     if (isVideoPlaying && apiData.video_link) {
//       if (
//         apiData.video_link.includes("youtube.com") ||
//         apiData.video_link.includes("youtu.be")
//       ) {
//         const videoId = apiData.video_link.includes("youtube.com")
//           ? apiData.video_link.split("v=")[1]
//           : apiData.video_link.split("/").slice(-1)[0];
//         const embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
//         return (
//           <iframe
//             width="560"
//             height="315"
//             src={embedLink}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             referrerPolicy="strict-origin-when-cross-origin"
//           ></iframe>
//         );
//       } else {
//         // Boshqa video manbasini (kerak bo'lsa) boshqarish
//         return (
//           <video controls autoPlay>
//             <source src={apiData.video} type="video/mp4" />
//           </video>
//         );
//       }
//     } else {
//       // Sukutiy rasm yoki suratni ko'rsatish
//       return (
//         <div className="thumbnail">
//           <img src={apiData.image} alt="Video Thumbnail" />
//           <button className="play-button" onClick={handlePlayButtonClick}>
//             ▶️
//           </button>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="museum_detail_container">
//       <PageTitle title={apiData?.title_uz} />
//       <div className="museum_detail_content">
//         <div className="video">{renderContent()}</div>
//       </div>
//     </div>
//   );
// };

// export default MuseumDetail;

///////////////5  alert versiya

import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle"; // <-- I assume "PageTitle" is imported correctly elsewhere
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MuseumDetail = () => {
  const { id } = useParams();
  // const history = useHistory();
  const [apiData, setApiData] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DataService.get(endpoints.museumById(id));
        setApiData(response);
        // document.title = `Voqealar / Yigʻinlar / ${response.title}`;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  const renderContent = () => {
    if (!apiData) return null;

    if (isVideoPlaying && apiData.video_link) {
      if (
        apiData.video_link.includes("youtube.com") ||
        apiData.video_link.includes("youtu.be")
      ) {
        const videoId = apiData.video_link.includes("youtube.com")
          ? apiData.video_link.split("v=")[1]
          : apiData.video_link.split("/").slice(-1)[0];
        const embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        return (
          <iframe
            width="560"
            height="315"
            src={embedLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        );
      } else {
        // Boshqa video manbasini (kerak bo'lsa) boshqarish
        return (
          <video controls autoPlay>
            <source src={apiData.video} type="video/mp4" />
          </video>
        );
      }
    } else {
      // Sukutiy rasm yoki suratni ko'rsatish
      return (
        <div className="thumbnail">
          <img src={apiData.image} alt="Video Thumbnail" />
          <button className="play-button" onClick={handlePlayButtonClick}>
            ▶️
          </button>
        </div>
      );
    }
  };

  return (
    <div className="museum_detail_container">
      <PageTitle title={apiData?.title_uz} />
      <div className="museum_detail_content">
        <div className="video">{renderContent()}</div>
      </div>
    </div>
  );
};

export default MuseumDetail;
