import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";
import { useParams } from "react-router-dom";

export default function NewsDetail() {
  const route = useParams();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.newsById(route?.id));
    setApiData(response);
    // let x = document.querySelector("title");
    // x.textContent = `Voqealar / Yigʻinlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();
  }, []);
  //

  return (
    <div className="arxeology_detail_container">
      <PageTitle title={apiData?.title_uz} />
      <div className="arxeology_detail_content">
        {/* <!-- component --> */}
        <div class="p-8">
          <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
            <div class="space-y-12 px-2 xl:px-16 mt-12">
              <div class="mt-4 flex">
                {/* <div>
                  <div class="flex items-center h-16 border-l-4 border-blue-600">
                    <span class="text-4xl text-blue-600 px-4">Q.</span>
                  </div>
                  <div class="flex items-center h-16 border-l-4 border-gray-400">
                    <span class="text-4xl text-gray-400 px-4">A.</span>
                  </div>
                </div> */}
                <div style={{ padding: " 0 0 50px 0" }}>
                  {/* <div class="flex items-center h-16">
                    <span class="text-lg text-blue-600 font-bold">
                      Yangilik haqida
                    </span>
                  </div> */}
                  <div class="flex items-center py-2">
                    <span
                      class="text-gray-500"
                      dangerouslySetInnerHTML={{ __html: apiData?.context_uz }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="arxeology_detail_img">
              <img src={apiData?.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
