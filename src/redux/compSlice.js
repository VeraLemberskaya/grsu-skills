import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCompetenciesLetters,
  getCompetenciesByLetter,
  getCompetenciesByQuery,
} from "../api/ApiRequests";

export const loadLetters = createAsyncThunk(
  "competencies/loadLetters",
  async () => {
    return await getCompetenciesLetters();
  }
);

export const loadCompetenciesByLetter = createAsyncThunk(
  "competencies/loadCompetenciesByLetter",
  async (_, { getState }) => {
    const letter = getState().competencies.letter;
    return await getCompetenciesByLetter(letter);
  }
);

export const loadCompetenciesByQuery = createAsyncThunk(
  "competencies/loadCompetenciesByQuery",
  async (_, { getState }) => {
    const query = getState().competencies.query;
    return await getCompetenciesByQuery(query);
  }
);

export const competenciesSlice = createSlice({
  name: "competencies",
  initialState: {
    letters: null,
    letter: null,
    query: null,
    isLoaded: false,
    competencies: null,
  },
  reducers: {
    setLetter: (state, action) => {
      state.letter = action.payload;
    },
    removeLetter: (state) => {
      state.letter = null;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    removeQuery: (state) => {
      state.query = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCompetenciesByLetter.pending, (state) => {
      state.isLoaded = false;
    });
    builder.addCase(loadCompetenciesByQuery.pending, (state) => {
      state.isLoaded = false;
    });
    builder.addCase(loadCompetenciesByLetter.fulfilled, (state, action) => {
      state.competencies = action.payload;
      state.isLoaded = true;
    });
    builder.addCase(loadCompetenciesByQuery.fulfilled, (state, action) => {
      state.competencies = action.payload;
      state.isLoaded = true;
    });
    builder.addCase(loadLetters.fulfilled, (state, action) => {
      state.letters = action.payload;
      state.letter = action.payload[0];
    });
  },
});

export const { setLetter, setQuery, removeLetter, removeQuery } =
  competenciesSlice.actions;

export default competenciesSlice.reducer;
