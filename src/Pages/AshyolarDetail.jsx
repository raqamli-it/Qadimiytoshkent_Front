import React, { useEffect, useState } from "react";

import dateFormat from "dateformat";
import { FaTelegramPlane } from "react-icons/fa";


import PageTitle from "../Components/PageTittle";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";
import { useParams } from "react-router-dom";

export default function AshyolarDetail() {
  const { id } = useParams();
  // const history = useHistory();
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DataService.get(endpoints.ashyoByIdDetail(id));
        setApiData(response);
        console.log(response, "bu bububububububu");

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };
  function convertToEmbedLink(link) {
    const videoId = link?.split("v=")[1];
    console.log(videoId);
    if (videoId != undefined) {
      const embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      return embedLink;
    } else return `${link}?autoplay=1`;
  }
  return (
    <>
      {/* <div className="arxeology_detail_container">
        <PageTitle title={apiData?.title_uz} />
        <div className="arxeology_detail_content">
          <div className="p-8">
            <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
              <div className="arxeology_detail_img">
                <img src={apiData?.image} alt="" />
              </div>
              <div className="space-y-12 px-2 xl:px-16 mt-12">
                <div className="mt-4 flex">
                  <div>
                    <div className="flex items-center h-16 border-l-4 border-blue-600"></div>
                    <div className="flex items-center h-16 border-l-4 border-gray-400"></div>
                  </div>
                  <div style={{ paddingLeft: "50px" }}>
                    <div className="flex items-center py-2">
                      <span
                        className="text-gray-500"
                        dangerouslySetInnerHTML={{ __html: apiData?.context_uz }}
                      ></span>
                    </div>
                  </div>
                </div>


                <div className="museum_detail_container">
                  <div className="museum_detail_content">
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
            </div>
          </div>
        </div>
      </div> */}


      <div className=" bg-[white] py-6 px-4">
        <PageTitle title={apiData?.title_uz} />
        <div className="detail_container_ashyo">
          <div className="detail_img_ashyo">

            <img src={apiData?.image} />
          </div>
          <div className="detail_title_ashyo">
            {/* <h1 className="my-4">{apiData?.title_uz}</h1> */}

            <div className="detail_describtion_ashyo text-wrap">
              <p className="text-detail1" dangerouslySetInnerHTML={{ __html: apiData?.context_uz }}>


              </p>

            </div>
          </div>

          <div
            className="share-ashyo"
          >
            <div>
              <a target="_blank" className="span-ashyo">

              </a>
              {/* <div className="sp-ic-jd">

                <FaTelegramPlane />
              </div> */}
            </div>
          </div>
        </div>
      </div></>
  );
}
