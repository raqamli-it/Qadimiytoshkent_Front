import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { useNavigate, useParams } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { motion, useAnimation } from 'framer-motion';
import { ImLink } from "react-icons/im";
import { RiExternalLinkLine } from "react-icons/ri";
import { GiPaintedPottery } from "react-icons/gi";
import { IoShield } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";
import { GiBoneMace } from "react-icons/gi";
import { GiStonePile } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function ArxeologyDetail() {
  const navigate = useNavigate();
  const route = useParams();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.arxeologyById(route?.id));
    setApiData(response);
    console.log("bu", response);

    if (response?.archaeologyPicture?.length > 0) {
      setActiveImage(response?.archaeologyPicture[0]?.image);
    }

    // let x = document.querySelector("title");
    // x.textContent = `Voqealar / Yigʻinlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();

  }, []);
  //

  // vide function
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };
  // video link
  function convertToEmbedLink(link) {
    const videoId = link?.split("v=")[1];
    console.log(videoId);
    if (videoId != undefined) {
      const embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      return embedLink;
    } else return `${link}?autoplay=1`;
  }







  const [activeImage, setActiveImage] = useState(apiData?.archaeologyPicture[0]?.image);
  const controls = useAnimation();

  const handleClick = (image) => {
    controls.start({ opacity: 0 }).then(() => {
      setActiveImage(image);
      controls.start({ opacity: 1 });
    });
  };

  return (
    <div className="arxeology_detail_container">
      <PageTitle
        title={apiData?.title_uz}
      />
      <div className="arxeology_detail_content">

        {/* <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center h-[50px] mt-6  sm:h-[100px] lg:h-[200px] items-center scale-[0.4] sm:scale-[0.6] md:scale-[0.7] lg:scale-[1]">

            <div className="bg-[white] p-4 max-w-[240px] flex group transition-all ease-linear duration-300 hover:bg-[#0000ffbe] hover:rounded-md flex-col gap-3 items-center">
              <GiPaintedPottery className=" group-hover:text-[white] h-[70px] w-[70px]" />
              <h3 className="text-[15px] w-[160px] group-hover:text-[white] font-bold text-center">Sopol Ashyolar</h3>
              <Link to="/ashyolarDetail" className=" items-center p-2 bg-[white] hidden group-hover:flex  rounded-full"><RiExternalLinkLine className="text-sm" /> </Link>
            </div>
            <div className="bg-[white] p-4 max-w-[240px] flex group transition-all ease-linear duration-300 hover:bg-[#0000ffbe] hover:rounded-md flex-col gap-3 items-center">
              <GiTwoCoins className=" group-hover:text-[white] h-[70px] w-[70px]" />
              <h3 className="text-[15px] w-[160px] group-hover:text-[white]  font-bold text-center">Oltin Ashyolar</h3>
              <Link to="/ashyolarDetail" className=" items-center p-2 bg-[white] hidden group-hover:flex  rounded-full"><RiExternalLinkLine className="text-sm" /> </Link>
            </div>
            <div className="bg-[white] p-4 max-w-[240px] flex  group  transition-all ease-linear duration-300 hover:bg-[#0000ffbe] hover:rounded-md flex-col gap-3 items-center justify-center">
              <IoShield className=" group-hover:text-[white] h-[70px] w-[70px]" />
              <h3 className="text-[15px] w-[160px] group-hover:text-[white]  font-bold text-center">Mis Ashyolar</h3>
              <Link to="/ashyolarDetail" className=" items-center p-2 bg-[white] hidden group-hover:flex  rounded-full"><RiExternalLinkLine className="text-sm" /> </Link>
            </div>
            <div className="bg-[white] p-4 max-w-[240px] flex group transition-all ease-linear duration-300 hover:bg-[#0000ffbe] hover:rounded-md flex-col gap-3 items-center">
              <GiStonePile className=" group-hover:text-[white] h-[70px] w-[70px]" />
              <h3 className="text-[15px] w-[160px] group-hover:text-[white]  font-bold text-center">Tosh Ashyolar</h3>
              <Link to="/ashyolarDetail" className=" items-center p-2 bg-[white] hidden group-hover:flex  rounded-full"><RiExternalLinkLine className="text-sm" /> </Link>
            </div>
            <div className="bg-[white] p-4 max-w-[240px] flex group transition-all ease-linear duration-300 hover:bg-[#0000ffbe] hover:rounded-md flex-col gap-3 items-center">
              <GiBoneMace className=" group-hover:text-[white] h-[70px] w-[70px]" />
              <h3 className="text-[15px] w-[160px] group-hover:text-[white]  font-bold text-center">Temir Ashyolar</h3>
              <Link to="/ashyolarDetail" className=" items-center p-2 bg-[white] hidden group-hover:flex  rounded-full"><RiExternalLinkLine className="text-sm" /> </Link>
            </div>

          </div>
        </div> */}
        {/* <!-- component --> */}
        <div class="p-8">
          <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
            <div className="arxeology_detail_img">
              <img src={apiData?.image} alt="" />

            </div>
            <div class="space-y-12 px-2 xl:px-16 mt-12">
              <div class="mt-4 flex">
                <div>
                  <div class="flex items-center h-16 border-l-4 border-blue-600">

                  </div>
                  <div class="flex items-center h-16 border-l-4 border-gray-400">

                  </div>
                </div>
                <div style={{ paddingLeft: "50px" }}>

                  <div class="flex items-center py-2">
                    <span
                      class="table-container  text-gray-500  "
                      dangerouslySetInnerHTML={{ __html: apiData?.context_uz }}
                    > </span>

                  </div>
                </div>

              </div>

              <div className="text-center"><button onClick={() => navigate(`/yodgorlikAshyolari/${apiData.id}`)} className="text-[20px] bg-gradient-to-tl from-[#101040]  to-[blue] active:scale-[0.7] transition-all ease-linear py-2 px-5  rounded-lg text-[white]">ashyolar</button></div>

              <div className="ashyolar_video_container">
                <div className="ashyolar_video_content">
                  <div className="video">
                    {isVideoPlaying ? (
                      <iframe
                        width="560"
                        height="315"
                        src={convertToEmbedLink(apiData?.video_link)}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    ) : (
                      <div className="thumbnail">
                        <img src={apiData?.image} alt="Video Thumbnail" />
                        <button
                          className="play-button"
                          onClick={handlePlayButtonClick}
                        >
                          ▶️
                        </button>
                      </div>
                    )}
                  </div>
                </div>

              </div>

            </div>
            <div className="max-w-7xl mx-auto mt-10 flex flex-col space-y-8 pb-[50px]">

              <div className="w-full">
                <h3 className="text-[24px] pr-[25px] py-[10px] border-[#5050bb72] border-b-[2px] font-black">
                  Belgilangan davrdagi yodgorlik ko'rinishi
                </h3>
              </div>

              <div className="flex flex-col lg:flex-row lg:space-x-[10%]">

                <div className="w-full lg:w-1/3 lg:pr-[10%]">
                  <div className="flex flex-col gap-5">
                    {apiData?.archaeologyPicture?.map((e) => (
                      <div
                        key={e?.id}
                        className="flex items-center p-2 bg-white hover:text-[#585898] cursor-pointer transition duration-300"
                        onClick={() => handleClick(e?.image)}
                      >
                        <img
                          src={e?.thumbnail || e?.image}
                          alt={"img manba"}
                          className="w-[70px] h-16 object-cover bg-[grey] text-[white] text-[10px] flex items-center justify-center rounded-lg"
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-700">{e?.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>


                <div className="w-full lg:w-2/3">
                  <motion.div
                    className="relative w-full h-auto md:h-[60vh] lg:h-[80vh] xl:h-[70vh] 2xl:h-[70vh] flex justify-center items-center bg-no-repeat bg-cover shadow-lg bg-black"
                    style={{ backgroundImage: `url(${activeImage})` }}
                    animate={controls}
                    transition={{ duration: 0.5 }}
                  >
                    {activeImage ? (
                      <div id="ramka" className="flex p-5 items-center justify-center bg-[#00000060] w-full h-full">
                        <img
                          src={activeImage}
                          alt="img alt"
                          className="w-full h-auto max-h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[grey]">
                        No Image Available
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
