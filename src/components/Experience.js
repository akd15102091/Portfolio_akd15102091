import React from "react";
import Navbar from "./Navbar";

const Experience = () => {
  return (
    <React.Fragment>
      <div className="contaner-fluid homedivcls" style={ { background: 'url("images/bg1.jpg") no-repeat center center fixed' } }>
        <Navbar />
        <br />
        <div className="contaner-fluid ">
              <div className="row">
                
                <div className="col-10 mx-auto">
                  <div className="row">
                      <div className="col-md-12" >
                      <h2 ><font color="white">Experience</font></h2>
                        <center>
                          <div className="expcls1">
                            <div className="card-container">
                                <div className="float-layout">
                                    <div className="card-image">
                                        <img src="images/sap.jpg" />
                                        <div className="card">
                                            <div className="card-title">SDE Intern @ SAP'21</div>
                                            <div className="card-desc"><i className="fas fa-calendar"></i> &nbsp; May 2021 - Jul 2021</div>
                                            <div className="card-desc">
                                                <ul>
                                                <li><p> Developed UI for Program Dashboard, where all the operational data can be stored centerally and extracted by all the respective stakeholders.</p></li>
                                                <li><p> Developed the database based on the requirements for Program Dashboard using PostgreSQL.</p></li>
                                                <li><p> Integrated the database using JAVA Spring Boot and performed CRUD Operations.</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </center>
                      </div>

                  </div>



                  {/* -------- */}
                  <div className="row">
                      <div className="col-md-12" >
                          <br />
                         <h2 ><font color="white">Skills</font></h2>
                         <div className="tempcls10" data-aos="fade-in">
                            <p className="tempcls9"><span className="tempcls11">Programming Languages</span> : C++, Javascript, Java, Python</p>
                            <hr className="tempcls12" />
                            <p className="tempcls9"><span className="tempcls11">Databases </span> : MySQL, PostgreSQL, MongoDB</p>
                            <hr className="tempcls12" />
                            <p className="tempcls9"><span className="tempcls11">Web Development</span> : Node.js, React.js, Express.js, Java Servlets, Java Server Pages</p>
                            <hr className="tempcls12" />
                            <p className="tempcls9"><span className="tempcls11">Data Science</span> :  Machine learning algorithms ( Supervised, Unsupervised), Deep Learning (ANN, CNN, RNN) </p>
                            <hr className="tempcls12" />
                            <p className="tempcls9"><span className="tempcls11">Courseworks</span> :  Data Structures and Algorithms, Database Management System, Object Oriented Programming, Operating System </p>
                        </div>

                        <br /><br />
                      </div>
                  </div>

                  {/* ----------- */}
                </div>
              </div>
        </div>

        
      </div>
    </React.Fragment>
  );
}

export default Experience;
