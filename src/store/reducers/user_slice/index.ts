import {
  createDraftSafeSelector,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import type { RootState } from "@store/store";
import { emptyLists } from "../../utils";
import {
  AddNewWorkspaceAction,
  ChangeCurrentWorkspaceAction,
  DeleteWorkspaceAction,
  EditWorkspaceAction,
  NotImplementedYetProps,
} from "./user_slice.types";
import { UserStates } from "./user_slice.types";
import JohnDoeImage from "../../../assets/photos/JohnDoeAvatar.png";

const INITIAL_STATE = {
  id: "1",
  personalInformations: {
    name: { firstName: "John", LastName: "Doe" },
    image: JohnDoeImage,
  },
  boards: {
    workspaces: [
      {
        id: "0",
        name: "Acme Corp workspace",
        icon: {
          name: "acmeLogo",
          color: "white",
          backgroundColors: "sidebar_selected",
        },
        lists: {
          name: "Working on",
          cards: { name: "Create Video for Acme", subCards: ["Siubidubi"] },
        },
      },
    ],

    currentWorkspace: "0",
  },
};

export const userAdapter = createEntityAdapter<UserStates>({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export const UserSlice = createSlice({
  name: "user",
  initialState: userAdapter.getInitialState(INITIAL_STATE),
  reducers: {
    addNewWorkspace: (state, action: AddNewWorkspaceAction) => {
      const { workspaces } = state.boards;
      const idsArray = workspaces.map((space) => +space.id).sort();

      const id = idsArray[idsArray.length - 1] + 1 + "";
      state.boards.workspaces.push({
        ...action.payload,
        id,
        lists: emptyLists,
      });
      state.boards.currentWorkspace = id;
    },

    deleteWorkspace: (state, action: DeleteWorkspaceAction) => {
      const { name } = action.payload;
      const { workspaces } = state.boards;
      const index = workspaces.findIndex((space) => name === space.name);

      state.boards.workspaces = [
        ...workspaces.slice(0, index),
        ...workspaces.slice(index + 1),
      ];
    },

    editWorkspace: (state, action: EditWorkspaceAction) => {
      const { name, newName } = action.payload;
      const { workspaces } = state.boards;

      const index = workspaces.findIndex((space) => name === space.name);
      workspaces[index].name = newName;
    },

    changePositionOfAWorkspace: (state, action: NotImplementedYetProps) => {
      console.log(state);
    },
    changeCurrentWorkspace: (state, action: ChangeCurrentWorkspaceAction) => {
      const { id } = action.payload;
      state.boards.currentWorkspace = id;
    },
    //-----------------------------------------------------------

    addNewList: (state, action: NotImplementedYetProps) => {
      console.log(state);
    },
    deleteList: (state, action: NotImplementedYetProps) => {
      console.log(state);
    },
    editList: (state, action: NotImplementedYetProps) => {
      console.log(state);
    },
    changePositionOfAList: (state, action: NotImplementedYetProps) => {
      console.log(state);
    },
    //-----------------------------------------------------------

    addNewCard: (state, action: NotImplementedYetProps) => {
      console.log(state);
    },
    deleteCard: (state, action: NotImplementedYetProps) => {
      console.log(state);
    },
    editCard: (state, action: NotImplementedYetProps) => {
      console.log(state);
    },
    changePositionOfACard: (state, action: NotImplementedYetProps) => {
      console.log(state);
    },
  },
});

export const {
  addNewWorkspace,
  deleteWorkspace,
  editWorkspace,
  changePositionOfAWorkspace,
  changeCurrentWorkspace,
  //-----------------------------------------------------------

  addNewList,
  deleteList,
  editList,
  changePositionOfAList,
  //-----------------------------------------------------------

  addNewCard,
  deleteCard,
  editCard,
  changePositionOfACard,
} = UserSlice.actions;

export const userReducer = UserSlice.reducer;

const selectUserState = (state: RootState) => state.user;

export const selectUser = createDraftSafeSelector(
  selectUserState,
  (state) => state
);
export const selectUserProfileInfo = createDraftSafeSelector(
  selectUserState,
  (state) => {
    const {
      image,
      name: { firstName, LastName },
    } = state.personalInformations;

    return { fullName: firstName + LastName, image };
  }
);

export const selectUserWorkspaces = createDraftSafeSelector(
  selectUserState,
  (state) => state.boards.workspaces
);

export const selectUserCurrentWorkspace = createDraftSafeSelector(
  selectUserState,
  (state) => {
    const { currentWorkspace, workspaces } = state.boards;

    return workspaces.find(({ id }) => id === currentWorkspace);
  }
);
