import React from 'react'


import abouthero from '../img/About-img/about_hero.png'
import nav_logo from '../img/About-img/nav_logo.png'


const AboutUs = () => {
  return (
    <div>








<div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row align-items-center about-shadow">
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="fw-bold">Connecting Talent with Opportunity</h2>
            <p className="text-muted fs-5" style={{width:518}  }>
              "HRIFY Jobs is a job hiring platform where companies post vacancies and candidates apply for their dream jobs effortlessly."
            </p>
            <div>
              <button className="btn btn-primary me-2">Explore Jobs</button>
              <button className="btn btn-primary">Post a Job</button>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={abouthero}
              alt="Job Hiring Illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>







    {/* <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-12  ms-5 text-center text-lg-start">
            <h2 className=" fw-medium about_hero_text fs-4">
              <img src={nav_logo} style={{width:151}} alt="" />- Your Gateway to Seamless Hiring & Career Growth
            </h2>
          </div>
        </div>
      </div>
    </div> */}




<div className="container-fluid bg-light py-5">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-12">
        <h2 className="fw-medium about_hero_text fs-4 d-flex d-lg-block flex-column align-items-center">
          <img src={nav_logo} style={{ width: 151 }} alt="" className="mb-2" />
          <span>-Your Gateway to Seamless Hiring & Career Growth</span>
        </h2>
      </div>
    </div>
  </div>
</div>















    </div>
  )
}

export default AboutUs