import {
  createDraftSafeSelector,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import type { RootState } from "@store/store";
import { emptyCardList, emptyLists, emptySubCardList } from "../../utils";
import {
  AddNewCardAction,
  AddNewListAction,
  AddNewSubCardAction,
  AddNewWorkspaceAction,
  ChangeCurrentWorkspaceAction,
  ChangePositionOfACardAction,
  ChangePositionOfAListAction,
  ChangePositionOfAWorkspaceAction,
  DeleteCardAction,
  DeleteListAction,
  DeleteSubCardAction,
  DeleteWorkspaceAction,
  EditCardAction,
  EditListAction,
  EditSubCardAction,
  EditWorkspaceAction,
  NotImplementedYetProps,
} from "./user_slice.types";
import { UserState } from "./user_slice.types";
import JohnDoeImage from "../../../assets/photos/JohnDoeAvatar.png";

const INITIAL_STATE: UserState = {
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
        lists: [
          {
            id: "0",
            name: "Working on",
            cards: [
              {
                id: "0",
                name: "Create Video for Acme",
                subCards: [
                  { name: "Siubidubi", id: "0" },
                  { name: "Can dance dance", id: "1" },
                ],
              },
            ],
          },
          {
            id: "1",
            name: "Working on",
            cards: [
              {
                id: "1",
                name: "Create Video for Acme",
                subCards: [
                  { name: "Siubidubi", id: "2" },
                  { name: "Can dance dance", id: "3" },
                ],
              },
            ],
          },
        ],
      },
    ],

    currentWorkspace: "0",
  },
};

export const userAdapter = createEntityAdapter<UserState>({
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
        lists: [],
      });
      state.boards.currentWorkspace = id;
    },

    deleteWorkspace: (state, action: DeleteWorkspaceAction) => {
      const { id } = action.payload;
      const { workspaces } = state.boards;
      const index = workspaces.findIndex((space) => id === space.id);

      state.boards.workspaces = [
        ...workspaces.slice(0, index),
        ...workspaces.slice(index + 1),
      ];
    },

    editWorkspace: (state, action: EditWorkspaceAction) => {
      const { id, newName } = action.payload;
      const { workspaces } = state.boards;

      const index = workspaces.findIndex((space) => id === space.id);
      workspaces[index].name = newName;
    },

    changeCurrentWorkspace: (state, action: ChangeCurrentWorkspaceAction) => {
      const { id } = action.payload;
      state.boards.currentWorkspace = id;
    },
    changePositionOfAWorkspace: (
      state,
      action: ChangePositionOfAWorkspaceAction
    ) => {
      const { reorderdWorkspaces } = action.payload;

      state.boards.workspaces = reorderdWorkspaces;
    },
    //-----------------------------------------------------------

    addNewList: (state, action: AddNewListAction) => {
      const { currentWorkspace, workspaces } = state.boards;
      const availableList = workspaces[+currentWorkspace].lists;

      const idsArray = availableList.map((list) => +list.id).sort();
      const uniqueId = idsArray[idsArray.length - 1] + 1 + "";

      state.boards.workspaces[+currentWorkspace].lists.push({
        ...action.payload,
        id: uniqueId,
        cards: emptyCardList,
      });
    },
    deleteList: (state, action: DeleteListAction) => {
      const { id } = action.payload;
      const { currentWorkspace, workspaces } = state.boards;
      const availableList = workspaces[+currentWorkspace].lists;
      const index = availableList.findIndex((list) => id === list.id);

      state.boards.workspaces[+currentWorkspace].lists = [
        ...availableList.slice(0, index),
        ...availableList.slice(index + 1),
      ];
    },
    editList: (state, action: EditListAction) => {
      const { id, newName } = action.payload;
      const { currentWorkspace, workspaces } = state.boards;
      const availableList = workspaces[+currentWorkspace].lists;
      const index = availableList.findIndex((list) => id === list.id);

      workspaces[+currentWorkspace].lists[index].name = newName;
    },

    changePositionOfAList: (state, action: ChangePositionOfAListAction) => {
      const { reorderdList } = action.payload;
      const { currentWorkspace } = state.boards;

      state.boards.workspaces[+currentWorkspace].lists = reorderdList;
    },
    //-----------------------------------------------------------

    addNewCard: (state, action: AddNewCardAction) => {
      const { listId, name } = action.payload;
      const { currentWorkspace, workspaces } = state.boards;
      const availableList = workspaces[+currentWorkspace].lists;
      const listIndex = availableList.findIndex((list) => listId === list.id);
      const availableCardList = availableList[listIndex].cards;

      const idsArray = availableCardList.map((list) => +list.id).sort();
      const uniqueId = idsArray[idsArray.length - 1] + 1 + "";

      state.boards.workspaces[+currentWorkspace].lists[listIndex].cards.push({
        id: uniqueId,
        name,
        subCards: emptySubCardList,
      });
    },
    deleteCard: (state, action: DeleteCardAction) => {
      const { listId, id } = action.payload;
      const { currentWorkspace, workspaces } = state.boards;
      const availableList = workspaces[+currentWorkspace].lists;
      const listIndex = availableList.findIndex((list) => listId === list.id);
      const availableCardList = availableList[listIndex].cards;
      const index = availableCardList.findIndex(
        (cardList) => id === cardList.id
      );

      state.boards.workspaces[+currentWorkspace].lists[listIndex].cards = [
        ...availableCardList.slice(0, index),
        ...availableCardList.slice(index + 1),
      ];
    },
    editCard: (state, action: EditCardAction) => {
      const { listId, id, newName } = action.payload;
      const { currentWorkspace, workspaces } = state.boards;
      const availableList = workspaces[+currentWorkspace].lists;
      const listIndex = availableList.findIndex((list) => listId === list.id);
      const availableCardList = availableList[listIndex].cards;
      const index = availableCardList.findIndex(
        (cardList) => id === cardList.id
      );

      state.boards.workspaces[+currentWorkspace].lists[listIndex].cards[
        index
      ].name = newName;
    },
    changePositionOfACard: (state, action: ChangePositionOfACardAction) => {
      const { reorderdCardList, listId } = action.payload;
      const { currentWorkspace, workspaces } = state.boards;
      const availableList = workspaces[+currentWorkspace].lists;
      const listIndex = availableList.findIndex((list) => listId === list.id);

      state.boards.workspaces[+currentWorkspace].lists[listIndex].cards =
        reorderdCardList;
    },
    //-----------------------------------------------------------

    addNewSubCard: (state, action: AddNewSubCardAction) => {
      const { listId, cardId, name } = action.payload;
      const { currentWorkspace, workspaces } = state.boards;
      const availableList = workspaces[+currentWorkspace].lists;
      const listIndex = availableList.findIndex((list) => listId === list.id);
      const availableCardList = availableList[listIndex].cards;
      const cardIndex = availableCardList.findIndex(
        (cardList) => cardId === cardList.id
      );
      const availableSubCardList = availableCardList[cardIndex].subCards;

      const idsArray = availableSubCardList.map((list) => +list.id).sort();
      const uniqueId = idsArray[idsArray.length - 1] + 1 + "";

      state.boards.workspaces[+currentWorkspace].lists[listIndex].cards[
        cardIndex
      ].subCards.push({
        id: uniqueId,
        name,
      });
    },
    deleteSubCard: (state, action: DeleteSubCardAction) => {
      const { listId, cardId, id } = action.payload;
      const { currentWorkspace, workspaces } = state.boards;
      const availableList = workspaces[+currentWorkspace].lists;
      const listIndex = availableList.findIndex((list) => listId === list.id);
      const availableCardList = availableList[listIndex].cards;
      const cardIndex = availableCardList.findIndex(
        (cardList) => cardId === cardList.id
      );
      const availableSubCardList = availableCardList[cardIndex].subCards;
      const index = availableSubCardList.findIndex(
        (cardList) => id === cardList.id
      );

      state.boards.workspaces[+currentWorkspace].lists[listIndex].cards[
        cardIndex
      ].subCards = [
        ...availableSubCardList.slice(0, index),
        ...availableSubCardList.slice(index + 1),
      ];
    },
    editSubCard: (state, action: EditSubCardAction) => {
      const { listId, cardId, id, newName } = action.payload;
      const { currentWorkspace, workspaces } = state.boards;
      const availableList = workspaces[+currentWorkspace].lists;
      const listIndex = availableList.findIndex((list) => listId === list.id);
      const availableCardList = availableList[listIndex].cards;
      const cardIndex = availableCardList.findIndex(
        (cardList) => cardId === cardList.id
      );
      const availableSubCardList = availableCardList[cardIndex].subCards;
      const index = availableSubCardList.findIndex(
        (cardList) => id === cardList.id
      );

      workspaces[+currentWorkspace].lists[listIndex].cards[cardIndex].subCards[
        index
      ].name = newName;
    },
    changePositionOfASubCard: (state, action: NotImplementedYetProps) => {
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
  //-----------------------------------------------------------

  addNewSubCard,
  deleteSubCard,
  editSubCard,
  changePositionOfASubCard,
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
