import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function About() {
  // bu qism api lar bilan ishlash uchun
  const [apiDataAbout, setApiDataAbout] = useState([]);

  const fetchDataAbout = async () => {
    try {
      const response = await DataService.get(endpoints.about);
      console.log(response, "about");
      setApiDataAbout(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchDataAbout();
  }, []);
  //
  // bu qism api lar bilan ishlash uchun
  const [apiDataOlimlar, setApiDataOlimlar] = useState([]);

  const fetchDataOlimlar = async () => {
    try {
      const response = await DataService.get(endpoints.olimlar);
      console.log(response, "olimlar");
      setApiDataOlimlar(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchDataOlimlar();
  }, []);
  //

  return (
    <div className="about_container">
      <PageTitle title={"O'zbekiston Fanlar akademiyasi Tarix instituti"} />
      <div className="about_content_container">
        <div className="about_detail">
          <div className="about_card">
            {/* <div className="about_img">
              <img
                className="about_image"
                src="https://avatars.mds.yandex.net/get-altay/5449087/2a0000017e5d9363af5fc14b5dcfa3102595/L_height"
              />
            </div> */}

            <div className="about_title">
              {/* <h1>About Title About Title</h1> */}
              {apiDataAbout?.slice(0, 1).map((about) => {
                return (
                  <div className="about_describtion" key={about.id}>
                    <p>{about.description_uz}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="people_box_card">
          <h2>Olimlar</h2>
          {/* ishtirokchilar */}
          <div className="par_pd">
            <div className="people_container">
              {apiDataOlimlar?.results?.map((olimlar) => {
                return (
                  <div className="people_card" key={olimlar.id}>
                    <img src={olimlar.image} alt="rasm" />
                    <div className="people_content">
                      <h4 className="people_name">{olimlar.fullname_uz}</h4>

                      <p className="people_position">{olimlar.pasition_uz}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
