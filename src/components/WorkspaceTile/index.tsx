import { useState } from "react";
import * as Styled from "./WorkspaceTile.styled";
import Icon from "../Icon";
import { Workspace } from "../../store/reducers/user_slice/user_slice.types";
import {
  changeCurrentWorkspace,
  deleteWorkspace,
  editWorkspace,
} from "../../store/reducers/user_slice";
import { useAppDispatch } from "../../store/hooks";
import EditableTextInput from "../../components/Input";
import useOnHover from "../../utils/hooks/useOnHover";

type WorkspaceTileProps = {
  workspace: Omit<Workspace, "lists">;
  isCreated: boolean;
  isCurrent: boolean;
  onClick?: () => void;
};

const WorkspaceTile = ({
  workspace,
  isCreated,
  onClick = () => {},
  isCurrent,
}: WorkspaceTileProps) => {
  const dispatch = useAppDispatch();
  const { isHovered, mouseEnterHandler, mouseLeaveHandler } = useOnHover();
  const [inputText, setInputText] = useState("");
  const { name, id, icon } = workspace;

  const getCurrentName = (name: string) => {
    setInputText(name);
  };

  const onClickHandler = () => {
    onClick();
  };

  const onSaveHandler = () => {
    dispatch(editWorkspace({ id, newName: inputText }));
  };

  const onDeleteHandler = () => {
    const newCurrentWorkspaceId = +id - 1 + "";
    dispatch(deleteWorkspace({ id }));
    dispatch(changeCurrentWorkspace({ id: newCurrentWorkspaceId }));
  };

  return (
    <Styled.WorkspaceWrapper
      isCurrentWorkspace={isCurrent}
      isBeingCreated={isCreated}
      onClick={onClickHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
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
          getCurrentName={getCurrentName}
          isHovered={isHovered}
          onDelete={onDeleteHandler}
          onSave={onSaveHandler}
        />
      </Styled.WorkspaceContainer>
    </Styled.WorkspaceWrapper>
  );
};

export default WorkspaceTile;
