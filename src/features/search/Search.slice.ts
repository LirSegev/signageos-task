import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  searchQuery: string;
}

const SearchSliceInitState: SearchState = {
  searchQuery: ""
};

const SearchSlice = createSlice({
  name: "search",
  initialState: SearchSliceInitState,
  reducers: {
    updateSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    }
  }
});

export const { updateSearchQuery } = SearchSlice.actions;
const SearchReducer = SearchSlice.reducer;
export default SearchReducer;
