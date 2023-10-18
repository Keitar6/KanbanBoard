import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorState } from "../../../utils/errorBoundary";

const INITIAL_STATE: ErrorState = { message: null };

const errorSlice = createSlice({
  name: "error",
  initialState: INITIAL_STATE,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    clearError: (state) => {
      state.message = null;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export const selectError = (state: { error: ErrorState | null }) => state.error;

export const errorReducer = errorSlice.reducer;
