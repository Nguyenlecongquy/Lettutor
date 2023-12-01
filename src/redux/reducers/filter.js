import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    specialities: "All",
    name: "",
    nationality: [],
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSpecialitiesFilter: (state, action) => {
      state.data.specialities = action.payload;
    },
    setNameFilter: (state, action) => {
      state.data.name = action.payload;
    },
    setNationalityFilter: (state, action) => {
      state.data.nationality = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSpecialitiesFilter, setNameFilter, setNationalityFilter } =
  filterSlice.actions;
const filterReducer = filterSlice.reducer;

export default filterReducer;
