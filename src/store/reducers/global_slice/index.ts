import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";

type GlobalStates = {
  id: string;
  name: string;
};

export const globalAdapter = createEntityAdapter<GlobalStates>({
  selectId: (state) => state.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const BuildingSlice = createSlice({
  name: "building",
  initialState: globalAdapter.getInitialState(),
  reducers: {},
});

export const {} = BuildingSlice.actions;
export const buildingReducer = BuildingSlice.reducer;

export const selectBuildingList = (state: RootState) => state.building.entities;
