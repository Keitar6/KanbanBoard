import Icon from "../Icon";
import Typography from "../Typography";
import { useAppDispatch } from "../../store/hooks";
import {
  deleteWorkspace,
  editWorkspace,
} from "../../store/reducers/user_slice";
import { TypographyName } from "../../styles/theme.types";
import { useState } from "react";
import { useTheme } from "styled-components";
import * as Styled from "./Input.styled";

type EditableTextInputProps = {
  isHovered?: boolean;
  isCreating?: boolean;
  typographyVariant?: TypographyName;
  name: string;
  getCurrentName?: (name: string) => void;
};

function EditableTextInput({
  isHovered = false,
  isCreating = false,
  typographyVariant = "paragraph",
  name,
  getCurrentName = () => {},
}: EditableTextInputProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(name);
  const { typography } = useTheme();

  const dispatch = useAppDispatch();

  const editClickHandler = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const saveClickHandler = () => {
    setIsEditing(false);
    dispatch(editWorkspace({ name, newName: text }));
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value;
    setText(currentText);
    getCurrentName(currentText);
  };

  const deleteWorkspaceHandler = () => {
    dispatch(deleteWorkspace({ name }));
  };

  return (
    <>
      {isCreating || isEditing ? (
        <Styled.InputContainer>
          <Styled.CustomInput
            placeholder="Workspace name"
            type="text"
            value={text}
            onChange={onChangeHandler}
            style={typography[typographyVariant]}
          />

          {isHovered ? (
            <Styled.IconsOnHover>
              <Styled.StyledButton onClick={saveClickHandler}>
                <Icon
                  size={16}
                  name={"save"}
                  color={"sidebar_selected"}
                  isActive={false}
                />
              </Styled.StyledButton>
              <Styled.StyledButton onClick={deleteWorkspaceHandler}>
                <Icon
                  size={16}
                  name={"trashBin"}
                  color={"red"}
                  isActive={false}
                />
              </Styled.StyledButton>
            </Styled.IconsOnHover>
          ) : null}
        </Styled.InputContainer>
      ) : (
        <Styled.InputContainer>
          <Typography variant={typographyVariant}>{text}</Typography>

          {isHovered ? (
            <Styled.IconsOnHover>
              <Styled.StyledButton onClick={editClickHandler}>
                <Icon size={16} name={"edit"} color={"text"} isActive={false} />
              </Styled.StyledButton>
              <Styled.StyledButton onClick={deleteWorkspaceHandler}>
                <Icon
                  size={16}
                  name={"trashBin"}
                  color={"red"}
                  isActive={false}
                />
              </Styled.StyledButton>
            </Styled.IconsOnHover>
          ) : null}
        </Styled.InputContainer>
      )}
    </>
  );
}

export default EditableTextInput;
