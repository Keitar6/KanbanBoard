import { ColorNames } from "@styles/theme.types";
import { IconName } from "../../../components/Icon/icon.types";
import { PayloadAction } from "@reduxjs/toolkit";

export type IconInfos = {
  name: IconName;
  color: ColorNames;
  backgroundColors: ColorNames;
};

export type SubCard = { id: string; name: string };
export type Card = {
  id: string;
  name: string;
  subCards: SubCard[];
};
export type List = {
  id: string;
  name: string;
  cards: Card[];
};

export type Workspace = {
  id: string;
  name: string;
  icon: IconInfos;
  lists: List[];
};

export type UserState = {
  id: string;
  personalInformations: {
    name: { firstName: string; LastName: string };
    image: string;
  };
  boards: {
    workspaces: Workspace[];
    currentWorkspace: string;
  };
};

export type AddNewWorkspaceAction = PayloadAction<{
  name: string;
  icon: IconInfos;
}>;
export type DeleteWorkspaceAction = PayloadAction<{ id: string }>;
export type EditWorkspaceAction = PayloadAction<{
  id: string;
  newName: string;
}>;
export type ChangeCurrentWorkspaceAction = PayloadAction<{
  id: string;
}>;
export type ChangePositionOfAWorkspaceAction = PayloadAction<{
  reorderdWorkspaces: Workspace[];
}>;

export type AddNewListAction = PayloadAction<{
  name: string;
}>;
export type DeleteListAction = PayloadAction<{
  id: string;
}>;
export type EditListAction = PayloadAction<{
  id: string;
  newName: string;
}>;
export type ChangePositionOfAListAction = PayloadAction<{
  reorderdList: List[];
}>;

export type AddNewCardAction = PayloadAction<{
  listId: string;
  name: string;
}>;
export type DeleteCardAction = PayloadAction<{
  listId: string;
  id: string;
}>;
export type EditCardAction = PayloadAction<{
  listId: string;
  id: string;
  newName: string;
}>;

export type AddNewSubCardAction = PayloadAction<{
  listId: string;
  cardId: string;
  name: string;
}>;
export type DeleteSubCardAction = PayloadAction<{
  listId: string;
  cardId: string;
  id: string;
}>;
export type EditSubCardAction = PayloadAction<{
  listId: string;
  cardId: string;
  id: string;
  newName: string;
}>;

export type ChangePositionOfACardAction = PayloadAction<{
  reorderdCardList: Card[];
  listId: string;
}>;

export type NotImplementedYetProps = any;
