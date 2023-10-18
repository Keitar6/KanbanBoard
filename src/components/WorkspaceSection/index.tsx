import * as Styled from "./WorkspaceSection.styled";
import Typography from "../Typography";
import Icon from "../Icon";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import WorkspaceTile from "../WorkspaceTile";
import {
  addNewWorkspace,
  changeCurrentWorkspace,
  selectUserWorkspaces,
} from "../../store/reducers/user_slice";
import { IconName } from "../Icon/icon.types";
import CustomButton, { BaseButtonProps } from "../Button";
import { useState } from "react";
import {
  IconInfos,
  Workspace,
} from "@store/reducers/user_slice/user_slice.types";
import WorkspaceTileTemplate from "../WorkspaceTileTemplate";

const WorkspaceSection = () => {
  const dispatch = useAppDispatch();
  const workspaces = useAppSelector(selectUserWorkspaces);
  const [buttonState, setButtonState] = useState<BaseButtonProps>({
    type: "basic",
    inactive: false,
  });
  const [isWorkspaceBeingCreated, setIsWorkspaceBeingCreated] =
    useState<boolean>(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState("");

  const canBeSaved = !buttonState.inactive;

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

  const getCurrentName = (name: string) => {
    if (name) {
      setButtonState({ type: "primary", inactive: false });
      setNewWorkspaceName(name);
    } else setButtonState({ type: "primary", inactive: true });
  };

  return (
    <Styled.WorkspacesContainer>
      {workspaces.map((workspace) => {
        const { name, id, icon } = workspace;
        return (
          <WorkspaceTile
            key={name}
            workspace={{ name, id, icon: icon as IconInfos }}
            isCreated={isWorkspaceBeingCreated}
          />
        );
      })}

      {isWorkspaceBeingCreated ? (
        <WorkspaceTileTemplate
          isCreating={isWorkspaceBeingCreated}
          getCurrentInputName={getCurrentName}
        />
      ) : null}

      <CustomButton
        type={buttonState.type}
        inactive={buttonState.inactive}
        onClick={addNewWorkspaceHandler}
      >
        <Icon
          color={
            buttonState.type === "primary"
              ? buttonState.inactive
                ? "text"
                : "white"
              : "white"
          }
          name={buttonState.type === "basic" ? "plus" : "tick"}
          size={16}
          isActive={false}
        />
        <Typography variant="button_normal">
          {buttonState.type === "basic"
            ? "Create Workspace"
            : "Save new workspace"}
        </Typography>
      </CustomButton>
    </Styled.WorkspacesContainer>
  );
};

export default WorkspaceSection;
