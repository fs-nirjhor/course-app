import React from 'react';
import courseData from "./Course.json";
import Cart from "../cart/Cart";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faVideoCamera, faStar, faDollar} from '@fortawesome/free-solid-svg-icons';

const Course = () => {
  const [addedCourse, setAddedCourse] = useState([]);
  const enrollButtonHandler = (course,e) => {
    const newAddedCourse = [...addedCourse,course] ;
    setAddedCourse(newAddedCourse);
  };
return (
  <div>
  <Cart addedCourse={addedCourse} setAddedCourse={setAddedCourse}></Cart>
 <div className="course-container row row-cols-1 row-cols-md-3 g-4 text-start">
 {
   courseData.map(course => 
  <div className="col">
    <div className="card h-100">
      <img src={course.photo} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.title} is a very efficient course for basic to advence. You'll earn the best guidelines from this course. </p>
        <b><FontAwesomeIcon icon={faUserAlt} /> {course.instructor}</b> <br />
        <b><FontAwesomeIcon icon={faVideoCamera} /> {course.lecture} </b> <br />
        <b><FontAwesomeIcon icon={faStar} /> {course.rating}</b>
        <h3 style={{color:"brown", marginTop:'10px'}}><FontAwesomeIcon icon={faDollar} /> {course.price}</h3>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary w-100" onClick={() => enrollButtonHandler(course)}>Enroll Now!</button>
      </div>
    </div>
  </div>
  )
 }
 </div>
  </div>
);
};

export default Course;