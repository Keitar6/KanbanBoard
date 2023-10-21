import Icon from "../Icon";
import Typography from "../Typography";
import { TypographyName } from "../../styles/theme.types";
import { useState } from "react";
import { useTheme } from "styled-components";
import * as Styled from "./Input.styled";

type EditableTextInputProps = {
  isHovered?: boolean;
  isCreating?: boolean;
  typographyVariant?: TypographyName;
  name: string;
  placeholder?: string;
  getCurrentName?: (name: string) => void;
  onDelete?: (id?: string) => void;
  onSave?: () => void;
};

function EditableTextInput({
  isHovered = false,
  isCreating = false,
  typographyVariant = "paragraph",
  name,
  placeholder = "placeholder",
  getCurrentName = () => {},
  onDelete = () => {},
  onSave = () => {},
}: EditableTextInputProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(name);
  const { typography } = useTheme();

  const editClickHandler = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const saveClickHandler = () => {
    setIsEditing(false);
    onSave();
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = e.target.value;
    setText(currentText);
    getCurrentName(currentText);
  };

  const deletetionHandler = () => {
    onDelete();
  };

  const onEnterHandler = (
    e: React.KeyboardEvent<HTMLInputElement> & { target: { value: string } }
  ) => {
    if (e.code === "Enter") {
      setIsEditing(false);
      getCurrentName(e.target.value);
      onSave();
    }
  };

  return (
    <>
      {isCreating || isEditing ? (
        <Styled.InputContainer>
          <Styled.CustomInput
            placeholder={placeholder}
            type="text"
            value={text}
            style={typography[typographyVariant]}
            onChange={onChangeHandler}
            onKeyDown={onEnterHandler}
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
              <Styled.StyledButton onClick={deletetionHandler}>
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
              <Styled.StyledButton onClick={deletetionHandler}>
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
