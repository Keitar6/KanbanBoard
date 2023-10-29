import { useState } from "react";
import { BaseButtonProps } from "@components/atoms/Button";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  addNewWorkspace,
  changeCurrentWorkspace,
  selectUserCurrentWorkspace,
  selectUserWorkspaces,
} from "@store/reducers/user_slice";
import defaultNewWorkspace from "../constans/defaultNewWorkspace";

export const useNewWorkspace = () => {
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
      dispatch(addNewWorkspace(defaultNewWorkspace(newWorkspaceName)));
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

  const onSaveHandler = () => {
    if (isWorkspaceBeingCreated) {
      dispatch(addNewWorkspace(defaultNewWorkspace(newWorkspaceName)));
    }
    setButtonState({ type: "basic", inactive: false });
    setIsWorkspaceBeingCreated(false);
  };

  return {
    addNewWorkspaceHandler,
    changeWorkspaceHandler,
    onSaveHandler,
    getCurrentName,
    currentWorkspace,
    workspaces,
    isWorkspaceBeingCreated,
    buttonState,
  };
};

export default useNewWorkspace;
