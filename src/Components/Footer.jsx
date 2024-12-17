import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";

const scrollToTop = (e) => {
  e.preventDefault(); 
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export default function Footer() {
  return (
    <footer class="footer_container bg-gray-100 ">
      <div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            href="#!"
            onClick={scrollToTop}
          >
            <span class="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div class="lg:flex lg:items-end lg:justify-between">
          <div>


            <h3 class="mx-auto mt-6 max-w-md text-center leading-relaxed text-[20px]  font-bold text-gray-500 lg:text-left">
              Toshkent arxeologiya yodgorliklari
            </h3>
          </div>

          <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                class="text-[#000] hover:bg-[#000] flex justify-center h-[30px]  w-[30px] items-center rounded-[50%] hover:text-[#ddd] bg-[#e9e6e6]" href="#"
              >
                {" "}
                <RiInstagramFill className="text-[20px]" />
              </a>
            </li>

            <li>
              <a
                class="text-[#000] hover:bg-[#000] flex justify-center h-[30px]  w-[30px] items-center rounded-[50%] hover:text-[#ddd] bg-[#e9e6e6]"
                href="#"
              >
                {" "}
                <BiLogoTelegram className="text-[20px]" />
              </a>
            </li>

            <li>
              <a
                class="text-[#000] hover:bg-[#000] flex justify-center h-[30px]  w-[30px] items-center rounded-[50%] hover:text-[#ddd] bg-[#e9e6e6]" href="#"
              >
                {" "}
                <FaSquareFacebook className="text-[20px]" />
              </a>
            </li>

            <li>
              <a
                class="text-[#000] hover:bg-[#000] flex justify-center h-[30px]  w-[30px] items-center rounded-[50%] hover:text-[#ddd] bg-[#e9e6e6]" href="#"
              >
                {" "}
                <FaSquareXTwitter className="text-[20px]" />
              </a>
            </li>
          </ul>
        </div>

        <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">

          {/* Mualliflik huquqi  &copy; 2022. Barcha huquqlar himoyalangan. */}
        </p>
      </div>
    </footer>
  );
}
