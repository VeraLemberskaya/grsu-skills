import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "Лучшая компания",
  position: "Лучший сотрудник",
  location: "Гродно, Беларусь",
  contacts: [],
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
    setContact: (state, action) => {
      let contact = state.contacts.find(
        (contact) => contact.id === action.payload.id
      );
      const index = state.contacts.indexOf(contact);
      state.contacts[index] = action.payload;
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      const id = action.payload;
      state.contacts = state.contacts.filter((item) => item.id !== id);
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
} = cvSlice.actions;

export default cvSlice.reducer;
