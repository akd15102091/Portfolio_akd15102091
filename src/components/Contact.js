import React from "react";
import Navbar from "./Navbar";
import emailjs from 'emailjs-com';


const Contact= () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_tkrlftn', 'template_c1lz2yo', e.target, 'user_jVeQCUknCJq2TfAM7fpf8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset() ;
    }

  return (
    <React.Fragment>
      <div className="contaner-fluid homedivcls" style={ { background: 'url("images/bg1.jpg") no-repeat center center fixed' } }>
          <Navbar />
            

            <div className="my-5">
                <h1 className="text-center"><font color="white">Contact Me</font></h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="well well-sm">
                            <form onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="name">
                                            Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your name" required="required" name="name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">
                                            Email Address</label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><span className="glyphicon glyphicon-envelope" ></span>
                                            </span>
                                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required="required" name="email" /></div>
                                    </div>
                                    <div className="form-group">
                                        <label for="subject">
                                            Subject</label>
                                            <input type="text" className="form-control" id="subject" placeholder="Enter Subject" required="required" name="subject" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="name">
                                            Message</label>
                                        <textarea name="message" id="message" className="form-control" rows="8" cols="25" required="required"
                                            name="message" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary pull-right" id="btnContactUs">
                                        Send Message</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                
                </div>
            </div>

            <br /><br />

            <div className="contaner-fluid ">
                <div className="row">
                    
                    <div className="col-10 mx-auto" >
                        <div className="row">
                            <div className="col-md-4"  >
                                <p className="tempcls22">Connect with : </p>
                            </div>
                            <div className="col-md-1" data-aos="fade-in" >
                                <center>
                                <a href="https://www.linkedin.com/in/ashwini-kumar-dhaked-b780641aa/" target="_blank"><i className="fab fa-linkedin-in  tempcls21"></i></a>
                                </center>
                            </div>
                            <div className="col-md-1"  data-aos="fade-in">
                                <center>
                                <a href="https://github.com/akd15102091?tab=repositories" target="_blank"><i class="fab fa-github tempcls21"></i></a>
                                </center>
                            </div>
                            <div className="col-md-1"  data-aos="fade-in">
                                <center>
                                <a href="https://www.facebook.com/ashwani.dhaked.7" target="_blank"><i className="fab fa-facebook  tempcls21"></i></a>
                                </center>
                            </div>
                            <div className="col-md-1" data-aos="fade-in" >
                                <center>
                                <a href="https://www.instagram.com/ashwanikdhakad/" target="_blank"><i className="fab fa-instagram  tempcls21"></i></a>
                                </center>
                            </div>
                            <div className="col-md-4"  >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div> 
    </React.Fragment>
  );
}

export default Contact;
