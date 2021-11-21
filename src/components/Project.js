import React from "react";
import Navbar from "./Navbar";
import Card from "./Card"
import ProjectData from "./ProjectData";

const Project= () => {

  return (
    <React.Fragment>
      <div className="contaner-fluid homedivcls" style={ { background: 'url("images/bg1.jpg") no-repeat center center fixed' } }>
          <Navbar />
          
          <div className="my-5">
            <h1 className="text-center"><font color="white">Projects</font></h1>
          </div>
           <div className="contaner-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                            {
                                ProjectData.map((val,ind) => {
                                    return <Card key={ind} imgsrc={val.imgsrc} title={val.title} gitlink={val.gitlink} tech={val.tech} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
      </div> 
    </React.Fragment>
  );
}

export default Project;
