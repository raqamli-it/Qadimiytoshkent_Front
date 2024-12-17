import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { Link, useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import dateFormat from "dateformat";

export default function News() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.news);
      console.log(response, "news");
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
    <div className="news_container">
      <PageTitle title={"Yangiliklar"} />
      <section class="news_card_container bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            {apiData?.map((news) => (
              <div key={news.id}>
                <img
                  class="relative z-10 object-cover w-full rounded-md h-96"
                  src={news.image}
                  alt="fff"
                />

                <div class="news_des relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                  <a
                    onClick={() => navigate(`/newsDetail/${news.id}`)}
                    class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                  >
                    {news.title_uz}
                  </a>

                  <p
                    class="news_p mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm"
                    dangerouslySetInnerHTML={{ __html: news.context_uz }}
                  ></p>

                  <p class="create_time mt-3 text-sm text-blue-500">
                    {dateFormat(news.create, "dd.mm.yyyy")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
