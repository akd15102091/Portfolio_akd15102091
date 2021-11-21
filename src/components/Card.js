import React from "react"
import TechCard from "./TechCard";

function Card(props) {

    var techArr = props.tech ;
 //   console.log(props.tech) ;

  return (
    <React.Fragment>

      <div className="col-md-4 col-10 mx-auto ">
          <div className="card">
              <img src={props.imgsrc} className="card-img-top img-fluid" alt={props.imgsrc} />
              <div className="card-body">
                  <h5 className="card-title font-weight-bold tempcls19">{props.title}</h5>
                  <div className="tempcls20">
                        Tech Stack Used :- 
                    </div> 
                  <div className="card-text tempcls18"> 
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    techArr.map((val,ind) => {
                                        return <TechCard key={ind} imgsrc={val.techimg} title={val.techtitle} />
                                    })
                                }
                            </div>
                        </div>
                   </div>
                   <br />
                   <center>
                    <a href={props.gitlink} className="btn btn-primary tempcls16" target="_blank">Project Link</a>
                    </center>
              </div>
          </div>
      </div>
 

    </React.Fragment>
  );
}

export default Card;