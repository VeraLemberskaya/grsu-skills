export const countSemester = (indexCourse, indexSem) => {
  return 2 * indexCourse + (indexSem + 1);
};

export const getSemesters = (courses) => {
  const semesterArray = [];
  courses.forEach((course) =>
    course.forEach((semester) => semesterArray.push(semester))
  );
  return semesterArray;
};
