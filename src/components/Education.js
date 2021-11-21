import React from "react";
import Navbar from "./Navbar";

const Education = () => {
  return (
    <React.Fragment>
      <div className="contaner-fluid homedivcls" style={ { background: 'url("images/bg1.jpg") no-repeat center center fixed' } }>
        <Navbar />
        <h2 className="tempcls8"><font color="white">Education</font></h2>
        <div className="contaner-fluid ">
              <div className="row">
                
                <div className="col-10 mx-auto">
                  <div className="row">
                      <div className="col-md-4"  >
                        <center>
                          <div class="educls1">
                            <div className="card">
                              <img src="images/nitw.webp" className="card-img-top" alt="nitw-img" />
                              <div className="card-body">
                                <h5 >B.Tech, CSE</h5>
                                <h5> National Institute Of Technology, Warangal </h5>
                                <p className="card-text"><i className="fas fa-calendar"></i> &nbsp; Jul 2018 - May 2022</p>
                                <p className="card-text"><i className="fas fa-angle-left tempcls7"></i> CGPA : 7.77</p>
                              </div>
                            </div>
                          </div>
                          </center>
                      </div>

                      <div className="col-md-4" >
                        <center>
                          <div class="educls1">
                            <div className="card">
                              <img src="images/school.webp" className="card-img-top" alt="nitw-img" />
                              <div className="card-body">
                                <h5 >12th RBSE Board</h5>
                                <h5> K.K. Foundation Sr Sec School, Jaipur </h5>
                                <p className="card-text"><i className="fas fa-calendar"></i> &nbsp; Jul 2016 - May 2017</p>
                                <p className="card-text"><i className="fas fa-angle-left tempcls7"></i> Percentage : 87.80</p>
                              </div>
                            </div>
                          </div>
                          </center>
                      </div>

                      <div className="col-md-4"  >
                        <center>
                          <div class="educls1">
                            <div className="card">
                              <img src="images/school.webp" className="card-img-top" alt="nitw-img" />
                              <div className="card-body">
                                <h5 >10th RBSE Board</h5>
                                <h5> K.K. Foundation Sr Sec School, Jaipur </h5>
                                <p className="card-text"><i className="fas fa-calendar"></i> &nbsp; Jul 2014 - May 2015</p>
                                <p className="card-text"><i className="fas fa-angle-left tempcls7"></i> Percentage : 89.67</p>
                              </div>
                            </div>
                          </div>
                          </center>
                      </div>
                  </div>
                </div>
              </div>
        </div>

        
      </div>
    </React.Fragment>
  );
}

export default Education;
