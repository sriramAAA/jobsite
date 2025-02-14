import React, { useState, useEffect } from "react";
import favorite from "../img/navimg/favorite.png";
import chat from "../img/navimg/chat.png";
import location from "../img/navimg/location.png";
import person from "../img/navimg/person.png";
import hrifyjobs from "../img/navimg/HRIFYJOBS.png";

const Navbar = ({togglehandle , usertoggle}) => {




  const [showList, setShowList] = useState(false);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
  });

  // ✅ Set Initial State in useEffect to Avoid SSR Issues
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isMobile: window.innerWidth <= 500,
        isTablet: window.innerWidth > 500 && window.innerWidth <= 768,
      });
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Toggle List for Mobile & Tablet Screens
  const handleUserClick = () => {
    if (screenSize.isMobile || screenSize.isTablet) {
      setShowList(!showList);
    }
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg bg-body-tertiary nav_fonts">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={hrifyjobs} alt="HRIFYJOBS" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="navbar-nav list_gap">
                      <li className="nav-item">
                        <a className="nav-link active">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active">About us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active">Jobs</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active">Categories</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active">Blogs</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active">Contact us</a>
                      </li>

                      {/* Buttons */}
                      <li className="nav-item">
                        <button type="submit" className="rounded-1 login_btn" onClick={togglehandle}>
                          Login
                        </button>
                      </li>

                      <li className="nav-item">
                        <button type="submit" className="rounded-1 login_btn">
                          Add Job Post
                        </button>
                      </li>

                      <li className="nav-item d-flex align-items-center">
                        <img src={location} alt="Location" />
                        <span className="ms-1">Tamil Nadu</span>
                      </li>

                      {/* Person Button (toggles list items on mobile/tablet) */}
                      <li className="nav-item">
                        <button
                          type="button"
                          className="nav_user p-2"
                          onClick={handleUserClick}
                        >
                          <img onClick={usertoggle} src={person} alt="User" />
                        </button>
                      </li>

                      {(screenSize.isMobile || screenSize.isTablet ? showList : true) && (
                        <>
                          <li className="nav-item d-flex align-items-center lg_none">
                            <img src={favorite} alt="Favorite" />
                            <span className="ms-1">Favorite</span>
                          </li>
                          <li className="nav-item d-flex align-items-center lg_none">
                            <img src={chat} alt="Chat" />
                            <span className="ms-1">Chat</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
