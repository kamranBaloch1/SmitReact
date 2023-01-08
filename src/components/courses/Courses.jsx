import React, { useState } from "react";
import coursesApi from "../../apis/courses";

import "./courses.css";

const Courses = () => {
  const [courses] = useState(coursesApi);
  return (
    <div className="conatiner courseContainer">
      <center>
        <h3 className="coutCat">CATEOGIRES COURSES</h3>
       
      </center>
      <div className="row courseRow">
        {courses.map((item) => {
          return (
            <>
              <div key={item.id} className="col-md-3  courseCol">
                <img className="CourseImg" src={item.coverImg} alt="" />
                <h2 className="courseTitle">{item.title}</h2>
                <p className="courseDesc">
                 
                 {item.desc}
                </p>
                <h3 className="courseInsName">{item.instructor}</h3>
                <img className="insImg" src={item.userAvtar} alt="" srcset="" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
