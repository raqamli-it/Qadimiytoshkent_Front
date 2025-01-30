import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { Link, useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function Arxeology() {
  const navigate = useNavigate();

  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://subdomain.qadimiytoshkent.uz/archaeologies/"
      );

      const resp = await response.json();
      setApiData(resp.results);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <PageTitle title={"Arxeologiya yodgorliklari"} />
      <div className="grid grid-cols-4 mb-10 xl:grid-cols-3 lg:grid-cols-2 md:mt-5 md:grid-cols-1 gap-6 w-[90%] mx-auto">
        {apiData?.map((arxeology) => (
          <div
            className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"
            key={arxeology.id}
            onClick={() => navigate(`/arxeologyDetail/${arxeology.id}`)}
          >
            <img
              src={arxeology.image}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-black bg-opacity-50 text-white p-3 rounded-b-lg">
              <h1 className="text-2xl font-semibold line-clamp-1">
                {arxeology.title_uz}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
