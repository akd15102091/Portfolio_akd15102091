import React,{useEffect} from "react";
import Navbar from "./Navbar";


const About= () => {

  return (
    <React.Fragment>
    <div className="contaner-fluid homedivcls" style={ { background: 'url("images/bg1.jpg") no-repeat center center fixed' } }>
        <Navbar />
        <br />
        <section id="about" className="about">
            <div className="container">

                <div className="section-title" data-aos="fade-in">
                    <h2>About</h2>
                    <p>Hello, my name is  <u><b><font color="aquamarine">Ashwini Kumar Dhaked</font></b></u>. Currently I am pursuing Btech degree from <b>National Institute Of Technology, Warangal (NITW)</b> in the field of <b>Computer Science and Engineering</b>. I have an internship experience at <b>SAP India Pvt. Ltd.</b> Apart from this, I am a very passionate programmer. I have worked in <b>Web Development and Data Science</b>. </p>
                </div>
                <br />
                <div className="row">
                <div className="col-lg-4 tempcls7" data-aos="fade-right">
                    <img src="images/akd1.jpeg" className="img-fluid imgcls4" width="250"  alt=""/>
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <br /><br /><br />
                    <h4>Software Engineer ||  Web Developer ||  ML Engineer</h4>
                    <br />
                    <div className="row">
                    <div className="col-lg-6">
                        <ul>
                        <li><i class="fas fa-angle-left"></i> <strong>Birthday:</strong> <span>25 Apr 2001</span></li>
                        <li><i class="fas fa-angle-left"></i> <strong>Phone:</strong> <span>+91 9079635663</span></li>
                        <li><i class="fas fa-angle-left"></i> <strong>City:</strong> <span>Jaipur, IN</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                        <li><i class="fas fa-angle-left"></i> <strong>Degree:</strong> <span>Btech</span></li>
                        <li><i class="fas fa-angle-left"></i> <strong>Branch:</strong> <span>CSE</span></li>
                        <li><i class="fas fa-angle-left"></i> <strong>Email:</strong> <span>ashwinikdhakad123@gmail.com</span></li>
                        </ul>
                    </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-10">
                            <center>
                                <a href="https://drive.google.com/drive/folders/1L9zBTXgf1a5ZhgIQsCF0jU_r-m_fQSyK?usp=sharing" className="btn btn-light tempcls23" target="_blank">See My Resume</a>
                            </center>
                        </div>
                    </div>
                    
                </div>
                </div>

            </div>
            </section>
            <br /><br />
    </div>
    </React.Fragment>
  );
}

export default About;
