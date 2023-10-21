import * as Styled from "./CardTemplate";
import EditableTextInput from "../../Input";
import { TypographyName } from "../../../styles/theme.types";

type CardTemplateProps = {
  isCreating: boolean;
  inputTypography?: TypographyName;
  getCurrentInputName?: (name: string) => void;
  onSaveInputHandler?: () => void;
};

const CardTemplate = ({
  isCreating,
  inputTypography = "subtitle_2",
  getCurrentInputName,
  onSaveInputHandler,
}: CardTemplateProps) => (
  <Styled.Wrapper isHovered={false}>
    <Styled.Title>
      <EditableTextInput
        name=""
        isCreating={isCreating}
        typographyVariant={inputTypography}
        getCurrentName={getCurrentInputName}
        placeholder="Title of the new card..."
        onSave={onSaveInputHandler}
      />
    </Styled.Title>
  </Styled.Wrapper>
);

export default CardTemplate;
