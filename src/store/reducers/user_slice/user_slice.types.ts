import { ColorNames } from "@styles/theme.types";
import { IconName } from "../../../components/Icon/icon.types";
import { PayloadAction } from "@reduxjs/toolkit";

export type IconInfos = {
  name: IconName;
  color: ColorNames;
  backgroundColors: ColorNames;
};

export type Workspace = {
  id: string;
  name: string;
  icon: IconInfos;
  lists: { name: string; cards: { name: string; subCards: string[] }[] }[];
};

export type UserStates = {
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
export type DeleteWorkspaceAction = PayloadAction<{ name: string }>;
export type EditWorkspaceAction = PayloadAction<{
  name: string;
  newName: string;
}>;
export type ChangeCurrentWorkspaceAction = PayloadAction<{
  id: string;
}>;
export type NotImplementedYetProps = any;
