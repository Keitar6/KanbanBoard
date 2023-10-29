import * as Styled from "./SubCardTemplate";
import EditableTextInput from "@components/atoms/Input";
import { TypographyName } from "@styles/theme.types";

type SubCardTemplateProps = {
  isCreating: boolean;
  inputTypography?: TypographyName;
  getCurrentInputName?: (name: string) => void;
  onSaveInputHandler?: () => void;
};

const SubCardTemplate = ({
  isCreating,
  inputTypography = "subtitle_2",
  getCurrentInputName,
  onSaveInputHandler,
}: SubCardTemplateProps) => (
  <Styled.Wrapper>
    <Styled.Container isHovered={false}>
      <EditableTextInput
        name=""
        isCreating={isCreating}
        typographyVariant={inputTypography}
        getCurrentName={getCurrentInputName}
        placeholder="Title of the new sub card..."
        onSave={onSaveInputHandler}
      />
    </Styled.Container>
  </Styled.Wrapper>
);

export default SubCardTemplate;
