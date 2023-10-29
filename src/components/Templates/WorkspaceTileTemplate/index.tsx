import * as Styled from "./WorkspaceTileTemplate.styled";
import EditableTextInput from "@components/atoms/Input";

type WorkspaceTileProps = {
  isCreating: boolean;
  getCurrentInputName?: (name: string) => void;
};

const WorkspaceTileTemplate = ({
  isCreating,
  getCurrentInputName = () => {},
}: WorkspaceTileProps) => {
  const getCurrentName = (name: string) => {
    getCurrentInputName(name);
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.LogoContainer />
        <EditableTextInput
          name=""
          placeholder="Workspace name"
          typographyVariant="subtitle_2"
          isCreating={isCreating}
          isHovered={false}
          getCurrentName={getCurrentName}
        />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default WorkspaceTileTemplate;
