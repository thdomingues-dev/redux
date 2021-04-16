import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CourseList = () => {
  const courseControl = 150;
  const [course, setCourse] = useState('');

  const courses = useSelector(
    state => state.data.slice(0, courseControl),
    [courseControl]
  );

  const dispatch = useDispatch();

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
