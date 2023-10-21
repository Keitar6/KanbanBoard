import { BaseButtonProps } from "@components/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addNewWorkspace,
  changeCurrentWorkspace,
  selectUserCurrentWorkspace,
  selectUserWorkspaces,
} from "../../store/reducers/user_slice";
import { Workspace } from "../../store/reducers/user_slice/user_slice.types";
import { useState } from "react";

const useWorkspace = () => {
  const dispatch = useAppDispatch();
  const currentWorkspace = useAppSelector(selectUserCurrentWorkspace);
  const workspaces = useAppSelector(selectUserWorkspaces);
  const [buttonState, setButtonState] = useState<BaseButtonProps>({
    type: "basic",
    inactive: false,
  });
  const [isWorkspaceBeingCreated, setIsWorkspaceBeingCreated] =
    useState<boolean>(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState("");

  const canBeSaved = !buttonState.inactive;

  const getCurrentName = (name: string) => {
    if (name) {
      setButtonState({ type: "primary", inactive: false });
      setNewWorkspaceName(name);
    } else setButtonState({ type: "primary", inactive: true });
  };

  const addNewWorkspaceHandler = () => {
    if (!isWorkspaceBeingCreated) {
      setButtonState({ type: "primary", inactive: true });
      setIsWorkspaceBeingCreated(true);
    } else if (isWorkspaceBeingCreated && canBeSaved) {
      const newWorkspace: Omit<Omit<Workspace, "lists">, "id"> = {
        name: newWorkspaceName,
        icon: {
          name: "defaultLogo",
          color: "text",
          backgroundColors: "logo_template",
        },
      };

      dispatch(addNewWorkspace(newWorkspace));
      setButtonState({ type: "basic", inactive: false });
      setIsWorkspaceBeingCreated(false);
    }
  };

  const changeWorkspaceHandler = ({
    workspaceId,
    condition = true,
  }: {
    workspaceId: string;
    condition?: boolean;
  }) => {
    if (condition) dispatch(changeCurrentWorkspace({ id: workspaceId }));
  };

  return {
    addNewWorkspaceHandler,
    changeWorkspaceHandler,
    getCurrentName,
    currentWorkspace,
    workspaces,
    isWorkspaceBeingCreated,
    buttonState,
  };
};

export default useWorkspace;
