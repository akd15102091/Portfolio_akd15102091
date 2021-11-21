import React from "react"


function TechCard(props) {
  return (
    <React.Fragment>

      <div className="col-md-4 col-12 mx-auto ">
          <div className=" tempcls17">
              <div><center><img src={props.imgsrc} className=" tempcls14" width="50" alt={props.imgsrc} /></center></div>
              <div className="tempcls15">
                  <p className="  tempcls13">{props.title}</p>
              </div>
          </div>
      </div>
 

    </React.Fragment>
  );
}

export default TechCard;