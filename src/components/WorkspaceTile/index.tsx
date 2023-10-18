import { useState } from "react";
import * as Styled from "./WorkspaceTile.styled";
import Icon from "../Icon";
import { Workspace } from "../../store/reducers/user_slice/user_slice.types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  changeCurrentWorkspace,
  selectUserCurrentWorkspace,
  selectUserWorkspaces,
} from "../../store/reducers/user_slice";
import EditableTextInput from "../../components/Input";

type WorkspaceTileProps = {
  workspace: Omit<Workspace, "lists">;
} & { isCreated: boolean };

const WorkspaceTile = ({ workspace, isCreated }: WorkspaceTileProps) => {
  const currentWorkspace = useAppSelector(selectUserCurrentWorkspace);
  const workspaces = useAppSelector(selectUserWorkspaces);
  const dispatch = useAppDispatch();
  const { name, id, icon } = workspace;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const changeWorkspaceHandler = () => {
    dispatch(changeCurrentWorkspace({ id }));
  };

  const isThisCurrentWorkspace = id === currentWorkspace?.id ? true : false;
  const isBeingCreated = id === workspaces.length - 1 + "" ? isCreated : false;

  return (
    <Styled.WorkspaceWrapper
      isCurrentWorkspace={isThisCurrentWorkspace}
      isBeingCreated={isBeingCreated}
      onClick={changeWorkspaceHandler}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Styled.WorkspaceContainer>
        <Styled.LogoContainer bckgColor={icon.backgroundColors}>
          <Icon
            color={icon.color}
            name={icon.name}
            size={icon.name !== "defaultLogo" ? 19.2 : 9}
            isActive={false}
          />
        </Styled.LogoContainer>
        <EditableTextInput
          name={name}
          typographyVariant="subtitle_2"
          isHovered={isHovered}
        />
      </Styled.WorkspaceContainer>
    </Styled.WorkspaceWrapper>
  );
};

export default WorkspaceTile;
