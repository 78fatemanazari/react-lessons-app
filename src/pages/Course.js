import React from 'react';
import { useState, useContext } from 'react';
import { ProfileContext } from '../App';

export const Course = () => {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const {username} = useContext(ProfileContext);

    const handleChange = (event) => {
      setNewCourse(event.target.value);
    }

    const addCourse = () => {
      const course = {
        id: courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
        courseName: newCourse,
        isCompleted: false
      }
      setCourseList([...courseList, course]);
      console.log(courseList);
    }

    const deleteCourse = (courseId) => {
      setCourseList(courseList.filter((course) =>
        courseId !== course.id
    ))
    }

    const completeCourse = (courseId) =>  {
      const newCourseList = courseList.map((course) =>{
        if (course.id === courseId) 
          return {...course, isCompleted : !course.isCompleted}
        else 
          return course
      })
      setCourseList(newCourseList)
    }
  return (
    <div className="App">
      <div className='add-course'>
        <h1>This course page for - {username} </h1>
        <input type='text' onChange={handleChange}></input>
        <button onClick={addCourse}>Add Course</button>
      </div>
      <div className='list'>
          {courseList.map((course) => {
            return (
              <div>
                <h1 style={{backgroundColor: course.isCompleted ? "green" : "White"}}>
                  {course.courseName}
                </h1>
                <button onClick={ () => deleteCourse(course.id)}>delete</button>
                <button onClick={ () => completeCourse(course.id)}>complete</button>
               </div>
            ) 
          })}
      </div>
    </div>
      

  )
}
