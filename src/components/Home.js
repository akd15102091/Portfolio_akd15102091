import React,{useEffect} from "react";
import Navbar from "./Navbar";


const Home= () => {

  return (
    <React.Fragment>
      <div className="contaner-fluid homedivcls" style={ { background: 'url("images/bg1.jpg") no-repeat center center fixed' } }>
          <Navbar />
          
          <br /><br /><br />
            <div className="contaner-fluid ">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                      <div className="col-md-7 order-2 order-lg-1 tempcls2"  >
                          <h3 className="tempcls6"> <i class="fas fa-code tempcls5"></i> &nbsp;<span>Software Development Engineer</span></h3>
                      </div>
                      <div className="col-md-5 order=1 order-lg-2"  >
                        <center>
                            <div class="flip-card">
                              <div class="flip-card-inner">
                                <div class="flip-card-front">
                                  <img src="images/akd1.jpeg" alt="Avatar"  height="450" width="350" />
                                </div>
                                <div class="flip-card-back">
                                    <div className="tempcls1">
                                        <div className="tempcls4"><center><img src="images/akd1.jpeg" className="imgcls2"  height="150"  /></center> </div>
                                        <br />
                                         <h4 ><i class="fas fa-portrait tempcls3"></i> <span> Ashwini Kumar Dhaked</span></h4>
                                         <h5><i class="fas fa-graduation-cap tempcls3"></i> <span>  CSE @ NITW'22 </span></h5>
                                         <h5>
                                         <i class="fas fa-laptop-code tempcls3" ></i> <span>  Ex-SDE Intern @ SAP'21 </span>
                                         </h5>
                                         <h5>
                                         <i class="fas fa-laptop-code tempcls3"></i> <span>  Incoming MTS @ Oracle'22</span>
                                         </h5>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </center>
                      </div>

                  </div>
                </div>
              </div>
            </div>
          <br /><br />

      </div> 
    </React.Fragment>
  );
}

export default Home;
