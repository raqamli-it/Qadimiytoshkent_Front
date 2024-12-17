import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { Link, useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function Arxeology() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.arxeology);
      console.log(response, "arxeology");
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
    <div className="arxeology_container">
      <PageTitle title={"Arxeologiya yodgorliklari"} />
      <div class="full_card_container    ">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Blog Entry 1 --> */}
          {
            apiData?.map((arxeology) => (
              <div
                className=" max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"
                key={arxeology.id}
                onClick={() => navigate(`/arxeologyDetail/${arxeology.id}`)}
              // onClick={() => navigate(`/arxeologyDetail/${arxeology}`)}
              >
                <img
                  src={arxeology.image}
                  className="w-full h-auto object-cover rounded-lg"
                />

                <div className="absolute bottom-0 left-0 right-0 h-[110px] flex justify-center bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                  <h1 className="text-2xl font-semibold">

                    {arxeology.title_uz}
                  </h1>

                </div>
              </div>
            ))}

          {/* <Link to="/arxeologyDetail">

            <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img
                src="https://uzbekistan.travel/storage/app/media/uploaded-files/2.png"
                alt="Img by Meriç Dağlı https://unsplash.com/@meric"
                class="w-full h-auto object-cover rounded-lg"
              />
              <div class="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50  text-white p-4 rounded-b-lg">
                <h1 class="text-2xl font-semibold">Nature Image</h1>
                <p class="mt-2">
                  This is a beautiful nature image placeholder. You can replace
                  it with your own image.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/arxeologyDetail">


            <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer ">
              <img
                src="https://uzbekistan.travel/storage/app/uploads/public/5eb/a29/b0e/thumb_812_600_480_0_0_auto.jpg"
                alt="Img by Meriç Dağlı https://unsplash.com/@meric"
                class="w-full h-auto object-cover rounded-lg"
              />
              <div class="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <h1 class="text-2xl font-semibold">Nature Image</h1>
                <p class="mt-2">
                  This is a beautiful nature image placeholder. You can replace
                  it with your own image.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/arxeologyDetail">
            {" "}

            <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img
                src="https://storage.academy.uz/source/1/news/1/photo_2022-04-21_12-52-14.jpg"
                alt="Img by Meriç Dağlı https://unsplash.com/@meric"
                class="w-full h-auto object-cover rounded-lg"
              />
              <div class="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50  text-white p-4 rounded-b-lg">
                <h1 class="text-2xl font-semibold">Nature Image</h1>
                <p class="mt-2">
                  This is a beautiful nature image placeholder. You can replace
                  it with your own image.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/arxeologyDetail">


            <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer ">
              <img
                src="https://xabar.uz/static/crop/6/1/920__95_618098473.jpg"
                alt="Img by Meriç Dağlı https://unsplash.com/@meric"
                class="w-full h-auto object-cover rounded-lg h-100"
              />
              <div class="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50  text-white p-4 rounded-b-lg">
                <h1 class="text-2xl font-semibold">Nature Image</h1>
                <p class="mt-2">
                  This is a beautiful nature image placeholder. You can replace
                  it with your own image.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/arxeologyDetail">

            <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/52/Axsikent_yodgorligi.jpg"
                alt="Img by Meriç Dağlı https://unsplash.com/@meric"
                class="w-full h-auto object-cover rounded-lg"
              />
              <div class="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <h1 class="text-2xl font-semibold">Nature Image</h1>
                <p class="mt-2">
                  This is a beautiful nature image placeholder. You can replace
                  it with your own image.
                </p>
              </div>
            </div>
          </Link> */}
        </div>
      </div>

    </div>
  );
}
