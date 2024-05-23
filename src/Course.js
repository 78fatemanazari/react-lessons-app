export const Course = (props) => {

  return (
     <div>
        <h1 style={{backgroundColor: props.course.isCompleted ? "green" : "White"}}>
          {props.course.courseName}
        </h1>
        <button onClick={ () => props.deleteCourse(props.course.id)}>delete</button>
        <button onClick={ () => props.completeCourse(props.course.id)}>complete</button>
     </div> 
  )
}