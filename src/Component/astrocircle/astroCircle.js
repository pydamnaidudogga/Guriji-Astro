import React from "react";
import { chakra } from "../../images/images";
import "./astroCircle.css";
import {
  avatar,
  loveProblem,
  marriage,
  job,
  lucky,
  education,
} from "../../images/images";
import { star } from "../../images/images";


const astroCircle = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontSize: "24px", color: "red" }}>
           <h2><img alt="" src={star}/>  Many problem One Solution <img alt="" src={star}/> </h2>
        </p>
      </div>

      <div className="mainCardContainer">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="cardcontainer">
            <img alt="" src={education} style={{ height: "57px", width: "55px" }} />
            <p>Education Problems </p>
          </div>
          <div className="cardcontainer">
            <img alt="" src={loveProblem} style={{ height: "57px", width: "55px" }} />
            <p>Love Related Problem </p>
          </div>
          <div className="cardcontainer">
            <img alt="" src={marriage} style={{ height: "57px", width: "55px" }} />
            <p>Marriage Problem </p>
          </div>
          <div className="cardcontainer">
            <img alt="" src={job} style={{ height: "57px", width: "55px" }} />
            <p>Job/Business Problems </p>
          </div>
        </div>
        <div className="chakracontainer">
          <img alt="" className="charkrarotate" src={chakra}  />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="cardcontainertwo">
            <p>Health Problems</p>
            <img alt="" src={lucky}  style={{ height: "57.16px", width: "55.66px", textAlign:"left" }} />
          </div>
          <div className="cardcontainertwo">
            <p>Lucky Number / Color</p>
            <img alt="" src={lucky} style={{ height: "57.16px", width: "55.66px" }} />
          </div>
          <div className="cardcontainertwo">
            <p>Child Birth Issues</p>
            <img alt="" src={lucky} style={{ height: "57.16px", width: "55.66px" }} />
          </div>
          <div className="cardcontainertwo">
            <p>Husband Wife Problems</p>
            <img alt="" src={lucky} style={{ height: "57.16px", width: "55.66px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default astroCircle;