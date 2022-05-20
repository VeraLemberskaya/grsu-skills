import { createSlice } from "@reduxjs/toolkit";
import { Info } from "../assets/icons";

const initialState = {
  company: "Лучшая компания",
  position: "Лучший сотрудник",
  location: "Гродно, Беларусь",
  birthday: "",
  contacts: [],
  aboutMe: "",
  languages: [],
  jobs: [],
  hobbies: [],
  courses: [],
  skills: [],
};

const removeItem = (items, id) => {
  return items.filter((item) => item.id !== id);
};

const setItem = (items, item) => {
  let it = items.find((i) => i.id === item.id);
  const index = items.indexOf(it);
  items[index] = item;
};

const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setBirthday: (state, action) => {
      state.birthday = action.payload;
    },
    setContact: (state, action) => {
      setItem(state.contacts, action.payload);
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts = removeItem(state.contacts, action.payload);
    },
    setAboutMe: (state, action) => {
      state.aboutMe = action.payload;
    },
    addLanguage: (state, action) => {
      state.languages.push(action.payload);
    },
    removeLanguage: (state, action) => {
      state.languages = removeItem(state.languages, action.payload);
    },
    setLanguage: (state, action) => {
      setItem(state.languages, action.payload);
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    removeJob: (state, action) => {
      state.jobs = removeItem(state.jobs, action.payload);
    },
    setJob: (state, action) => {
      setItem(state.jobs, action.payload);
    },
    addJobInfo: (state, action) => {
      let job = state.jobs.find((job) => job.id === action.payload.id);
      job.info.push(action.payload.info);
    },
    removeJobInfo: (state, action) => {
      let job = state.jobs.find((job) => job.id === action.payload.idJob);
      job.info = removeItem(job.info, action.payload.idInfo);
    },
    setJobInfo: (state, action) => {
      let job = state.jobs.find((job) => job.id === action.payload.idJob);
      setItem(job.info, action.payload.info);
    },
    addHobby: (state, action) => {
      state.hobbies.push(action.payload);
    },
    removeHobby: (state, action) => {
      state.hobbies = removeItem(state.hobbies, action.payload);
    },
    setHobby: (state, action) => {
      setItem(state.hobbies, action.payload);
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    removeCourse: (state, action) => {
      state.courses = removeItem(state.courses, action.payload);
    },
    setCourse: (state, action) => {
      setItem(state.courses, action.payload);
    },
    setCourseInfo: (state, action) => {
      let course = state.courses.find(
        (item) => item.id === action.payload.idCourse
      );
      course.info = action.payload.info;
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action) => {
      state.skills = removeItem(state.skills, action.payload);
    },
    clearCV: () => initialState,
  },
});

export const {
  setCompany,
  setPosition,
  setLocation,
  setContact,
  addContact,
  removeContact,
  setAboutMe,
  addLanguage,
  removeLanguage,
  setLanguage,
  addJob,
  removeJob,
  setJob,
  addJobInfo,
  removeJobInfo,
  setJobInfo,
  clearCV,
  addHobby,
  removeHobby,
  setHobby,
  addCourse,
  removeCourse,
  setCourse,
  setCourseInfo,
  addSkill,
  removeSkill,
  setBirthday,
} = cvSlice.actions;

export default cvSlice.reducer;
