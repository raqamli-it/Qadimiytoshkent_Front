import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { RiFileDownloadLine } from "react-icons/ri";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function Library() {
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.library);
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
    <div className="library_container">
      <PageTitle title={"Kutubxona"} />
      <div className="library_content_container">
        <div className="">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {/* card start */}
            {apiData?.results?.map((library) => {
              return (
                <div
                  className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                  key={library.id}
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg px-5 py-5"
                      src={library.image}
                      alt="step3"
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {library.title_uz}
                      </h5>
                    </a>
                    <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
                      Big case study
                    </div>
                    {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p> */}
                    <div className="flex justify-between items-center">
                      <a
                        href={library.file}
                        target="_blank"
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg
                          className="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="library_download inline-flex items-center p-2 text-sm font-medium text-center text-white bg-green-700 rounded-full hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        <RiFileDownloadLine />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Repeat similar code for other cards */}
          </div>
        </div>
      </div>
    </div>
  );
}
