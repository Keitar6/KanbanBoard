import * as Styled from "./WorkspaceSection.styled";
import Typography from "../Typography";
import Icon from "../Icon";
import WorkspaceTile from "../WorkspaceTile";
import CustomButton from "../Button";
import { IconInfos } from "@store/reducers/user_slice/user_slice.types";
import WorkspaceTileTemplate from "../Templates/WorkspaceTileTemplate";
import useWorkspace from "../../utils/hooks/useWorkspace";

const WorkspaceSection = () => {
  const {
    workspaces,
    currentWorkspace,
    changeWorkspaceHandler,
    addNewWorkspaceHandler,
    isWorkspaceBeingCreated,
    getCurrentName,
    buttonState,
  } = useWorkspace();

  return (
    <Styled.WorkspacesContainer>
      {workspaces.map((workspace) => {
        const { name, id, icon } = workspace;
        const isCurrent = id === currentWorkspace?.id ? true : false;

        return (
          <WorkspaceTile
            key={id}
            workspace={{ name, id, icon: icon as IconInfos }}
            isCreated={isWorkspaceBeingCreated}
            isCurrent={isCurrent}
            onClick={() =>
              changeWorkspaceHandler({ workspaceId: id, condition: !isCurrent })
            }
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
