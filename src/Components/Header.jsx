// import React, { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import ReactDatePicker from "./ReactDatePicker";
// import Weather from "./Weather";
// // import Language from "./Language";
// import { useTranslation } from "react-i18next";
// // import { newDate } from "react-datepicker/dist/date_utils";

// export default function Headers() {
//   const { t } = useTranslation();
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     setInterval(() => setTime(newDate()), 1000);
//   }, []);

//   return (
// {/* <div>
//   <header className="header">
//     <div className="header__container">
//       <div className="header_logo">
//         <Link to="/">
//           <strong>
//             <span>TOSHKENT</span> <br />
//             ARXEOLOGIYASI <br />
//           </strong>
//         </Link>
//       </div>
//       <div className="header_content">
//         <div className="header_element">
//           <div className="full__data__picer">
//             <div className="live__time">
//               <p>{time.toLocaleTimeString()}</p>
//             </div>
//             <div className="live__calendar">
//               <ReactDatePicker />
//             </div>
//           </div>
//           <div className="ob-havo">
//             <Weather />
//           </div>
//           <div className="search">
//             <FaSearch />
//             <span>Qidiruv</span>
//           </div>
//           <div className="donate">
//             {/* <FaSearch /> */}
//             {/* <Language /> */}
//           </div>
//         </div>
//         <div className="header_nav">
//           <ul>
//             <li>
//               <Link to="/news">Yangiliklar</Link>
//             </li>
//             <li>
//               <Link to="/arxeology">Yodgorliklar</Link>
//             </li>
//             <li>
//               <Link to="/ashyolar">{t("ashyo_")}</Link>
//             </li>
//             <li>
//               <Link to="/museum">Muzeylar</Link>
//             </li>
//             <li>
//               <Link to="/library">Kutubxona</Link>
//             </li>
//             <li>
//               <Link to="/about">Biz haqimizda</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </header>
// </div>; */}
//   );
// }

// import React, { useEffect, useState } from "react";
// import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import ReactDatePicker from "./ReactDatePicker";
// import Weather from "./Weather";
// import { useTranslation } from "react-i18next";

// export default function Headers() {
//   const { t } = useTranslation();
//   const [time, setTime] = useState(new Date());
//   const [sidebar, setSidebar] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const toggleSidebar = () => {
//     setSidebar(!sidebar);
//   };

//   return (
//     <div>
//       <header className="header">
//         <div className="header__container">
//           <div className="header_logo">
//             <Link to="/">
//               <strong>
//                 <span>TOSHKENT</span> <br />
//                 ARXEOLOGIYASI <br />
//               </strong>
//             </Link>
//           </div>
//           <div className="header_content">
//             <div className="header_element">
//               <div className="full__data__picer">
//                 <div className="live__time">
//                   <p>{time.toLocaleTimeString()}</p>
//                 </div>
//                 <div className="live__calendar">
//                   <ReactDatePicker />
//                 </div>
//               </div>
//               <div className="ob-havo">
//                 <Weather />
//               </div>
//               <div className="search">
//                 <FaSearch />
//                 <span>Qidiruv</span>
//               </div>
//             </div>
//             <div className="header_nav">
//               <ul>
//                 <li>
//                   <Link to="/news">Yangiliklar</Link>
//                 </li>
//                 <li>
//                   <Link to="/arxeology">Yodgorliklar</Link>
//                 </li>
//                 <li>
//                   <Link to="/ashyolar">{t("ashyo_")}</Link>
//                 </li>
//                 <li>
//                   <Link to="/museum">Muzeylar</Link>
//                 </li>
//                 <li>
//                   <Link to="/library">Kutubxona</Link>
//                 </li>
//                 <li>
//                   <Link to="/about">Biz haqimizda</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="header__hamburger" onClick={toggleSidebar}>
//             <FaBars />
//           </div>
//         </div>
//       </header>
//       <nav className={`sidebar ${sidebar ? "active" : ""}`}>
//         <div className="sidebar__close" onClick={toggleSidebar}>
//           <FaTimes />
//         </div>
//         <div className="sidebar_content">
//           <div className="full__data__picer">
//             <div className="live__time">
//               <p>{time.toLocaleTimeString()}</p>
//             </div>
//             <div className="live__calendar">
//               <ReactDatePicker />
//             </div>
//           </div>
//           <div className="ob-havo">
//             <Weather />
//           </div>
//           <div className="search">
//             <FaSearch />
//             <span>Qidiruv</span>
//           </div>
//           <ul>
//             <li>
//               <Link to="/news" onClick={toggleSidebar}>
//                 Yangiliklar
//               </Link>
//             </li>
//             <li>
//               <Link to="/arxeology" onClick={toggleSidebar}>
//                 Yodgorliklar
//               </Link>
//             </li>
//             <li>
//               <Link to="/ashyolar" onClick={toggleSidebar}>
//                 {t("ashyo_")}
//               </Link>
//             </li>
//             <li>
//               <Link to="/museum" onClick={toggleSidebar}>
//                 Muzeylar
//               </Link>
//             </li>
//             <li>
//               <Link to="/library" onClick={toggleSidebar}>
//                 Kutubxona
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" onClick={toggleSidebar}>
//                 Biz haqimizda
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Weather from "./Weather";
import ReactDatePicker from "./ReactDatePicker";
// import { IoSearchSharp } from "react-icons/io5";
import logoImg from "../../public/images/TA-removebg-preview.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // time
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow when component unmounts
    };
  }, [isOpen]);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img className="logo_img" src={logoImg} alt="" />
        </Link>
      </div>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <div className="top-row">
          <div className="full__data__picer">
            <div className="live__time">
              <p>{time.toLocaleTimeString()}</p>
            </div>
            <div className="live__calendar">
              <ReactDatePicker />
            </div>
          </div>

          <div className="weather">
            <Weather />
          </div>
          <div className="search-bar">
            {/* <IoSearchSharp /> */}
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="bottom-row">
          <div className="menu-item">
            <Link to="/news">Yangiliklar</Link>
          </div>
          <div className="menu-item">
            <Link to="/arxeology">Yodgorliklar</Link>
          </div>
          <div className="menu-item">
            {" "}
            <Link to="/ashyolar">Ashyolar</Link>
          </div>
          <div className="menu-item">
            <Link to="/museum">Muzeylar</Link>
          </div>
          <div className="menu-item">
            <Link to="/library">Kutubxona</Link>
          </div>
          <div className="menu-item">
            <Link to="/about">Biz haqimizda</Link>
          </div>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar_logo" onClick={closeMenu}>
            <Link to="/">
              <img className="logo_img_sidebar" src={logoImg} alt="" />
            </Link>
          </div>
          <span className="close-btn" onClick={closeMenu}>
            ×
          </span>
        </div>

        <div className="sidebar-search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="live__calendar__sidebar">
          <ReactDatePicker />
        </div>

        <div className="sidebar-menu-item" onClick={closeMenu}>
          <Link to="/news">Yangiliklar</Link>
        </div>
        <div className="sidebar-menu-item" onClick={closeMenu}>
          <Link to="/arxeology">Yodgorliklar</Link>
        </div>
        <div className="sidebar-menu-item" onClick={closeMenu}>
          <Link to="/ashyolar">Ashyolar</Link>
        </div>
        <div className="sidebar-menu-item" onClick={closeMenu}>
          <Link to="/museum">Muzeylar</Link>
        </div>
        <div className="sidebar-menu-item" onClick={closeMenu}>
          <Link to="/library">Kutubxona</Link>
        </div>
        <div className="sidebar-menu-item" onClick={closeMenu}>
          <Link to="/about">Biz haqimizda</Link>
        </div>

        <div className="weather__sidebar">
          <Weather />
        </div>
      </div>
    </header>
  );
}
