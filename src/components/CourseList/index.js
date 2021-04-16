import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CourseList = () => {
  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  const [course, setCourse] = useState('');

  function addCourse() {
    dispatch({ type: 'ADD_COURSE', title: course });

  }

  return (
    <>
      <ul>
        {courses.map(course => <li key={course}>{course}</li>)}
      </ul>

      <input type="text" onChange={(e) => { setCourse(e.target.value) }} />
      <button onClick={addCourse}>Add Course</button>
    </>
  );
}

export default CourseList;
