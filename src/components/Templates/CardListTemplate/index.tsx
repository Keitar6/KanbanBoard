import * as Styled from "./CardListTemplate.styled";
import EditableTextInput from "../../Input";
import { TypographyName } from "../../../styles/theme.types";

type CardListTemplateProps = {
  isCreating: boolean;
  inputTypography?: TypographyName;
  getCurrentInputName?: (name: string) => void;
  onSaveInputHandler?: () => void;
};

const CardListTemplate = ({
  isCreating,
  inputTypography = "subtitle_2",
  getCurrentInputName,
  onSaveInputHandler,
}: CardListTemplateProps) => (
  <Styled.Wrapper>
    <Styled.Title>
      <EditableTextInput
        name=""
        isCreating={isCreating}
        typographyVariant={inputTypography}
        getCurrentName={getCurrentInputName}
        placeholder="Title of the new list..."
        onSave={onSaveInputHandler}
      />
    </Styled.Title>
  </Styled.Wrapper>
);

export default CardListTemplate;
