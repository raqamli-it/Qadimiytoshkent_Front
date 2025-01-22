import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";

export default function LibraryHome() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await DataService.get(endpoints.arxeology);

        localStorage.setItem("arxeologyData", JSON.stringify(data.image));

        setApiData(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    const storedData = localStorage.getItem("arxeologyData");
    if (storedData) {
      setApiData(JSON.parse(storedData));
    } else {
      fetchData();
    }
  }, []);

  // /////////////
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

      <div>
        <Slider {...settings}>
          {apiData?.map((arxeologyHome) => {
            return (
              <div className="ashyo_home_card" key={arxeologyHome.id}>
                <div className="ashyo_home_img">
                  <img src={arxeologyHome.image} alt="img" />
                </div>

                <button
                  className="ashyo_home_name"
                  onClick={() =>
                    navigate(`/arxeologyDetail/${arxeologyHome.id}`)
                  }
                >
                  <span>{arxeologyHome.title_uz}</span>
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
