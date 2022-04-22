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

export const createSubjectLists = (sem) => {
  const midIndex = Math.floor(sem?.length / 2);
  const leftList = sem?.slice(0, midIndex);
  const rightList = sem?.slice(midIndex);
  return { leftList, rightList };
};
