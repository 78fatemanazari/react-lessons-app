import { useState } from 'react';
import { Course } from './Course';
import './App.css';

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");

    const handleChange = (event) => {
      setNewCourse(event.target.value);
    }

    const addCourse = () => {
      const course = {
        id: courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
        courseName: newCourse
      }
      setCourseList([...courseList, course]);
      console.log(courseList);
    }

    const deleteCourse = (courseId) => {
      setCourseList(courseList.filter((course) =>
        courseId !== course.id
    ))
    }

  return (
    <div className="App">
      <div className='add-course'>
        <input type='text' onChange={handleChange}></input>
        <button onClick={addCourse}>Add Course</button>
      </div>
      <div className='list'>
          {courseList.map((course, index) => {
            return (
              <Course key={index} course={course} deleteCourse={deleteCourse} />
            ) 
          })}
      </div>
    </div>
  )
}
export default App;
