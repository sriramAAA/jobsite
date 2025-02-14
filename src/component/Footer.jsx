import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import footer from "../img/Frame-721.png";
import img1 from "../img/Footer-img/1.png";
import img2 from "../img/Footer-img/2.png";
import img3 from "../img/Footer-img/3.png";
import img4 from "../img/Footer-img/4.png";
import img5 from "../img/Footer-img/5.png";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                   <div className="col-lg-12 col-md-6 col-sm-6 d-flex justify-content-center gap-5">

                   <div className="col-md-2   fs-6 col-sm-6">
                        <h5 className='fs-5 mt-3'>Tailored Job Matches</h5>
                        <ul className=" text-white-50 lh-lg">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Jobs</li>
                            <li>Categories</li>
                            <li>Blogs</li>
                            <li>Contact Us</li>
                            <li>Dullat Pant</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5 className='fs-5  mt-3'>Job Seeker Section</h5>
                        <ul className="text-white-50 lh-lg">
                            <li>Browse Jobs</li>
                            <li>Upload Resume</li>
                            <li>Job Alerts</li>
                            <li>Career Tips</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5 className='fs-5  mt-3'>Employer Section</h5>
                        <ul className="text-white-50 lh-lg">
                            <li>Post a Job</li>
                            <li>Manage Jobs</li>
                            <li>Employer Dashboard</li>
                            <li>Pricing & Plans</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5 className='fs-5  mt-3'>Support & Resources</h5>
                        <ul className="text-white-50 lh-lg">
                            <li>FAQs</li>
                            <li>Help Center</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    <div className="col-md-3 text-center text-md-right   mt-3 ">
                        <img src={footer} alt="HRIFY Jobs" className="footer-logo" />
                        <div className="social-icons mt-2  ">
                        <img src={img1} alt="HRIFY Jobs" className="logo" />
                        <img src={img2} alt="HRIFY Jobs" className="logo" />
                        <img src={img3} alt="HRIFY Jobs" className="logo" />
                        <img src={img4} alt="HRIFY Jobs" className="logo" />
                        <img src={img5} alt="HRIFY Jobs" className="logo" />
                         
                        </div>
                    </div>

                   </div>
                </div>
                <div className="row mt-3 d-flex ">
                    <div className="col-md-6  ">
                        <p className="mb-0 text-white-50 ">&copy; 2025 HRIFY Jobs. All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
