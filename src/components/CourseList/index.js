import { useSelector } from 'react-redux';

const CourseList = () => {
  const courses = useSelector(state => state.data);

  return (
    <ul>
      { courses.map(course => <li key={course}>{course}</li>)}
    </ul>
  );
}

export default CourseList;
