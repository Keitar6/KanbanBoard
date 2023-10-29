import Typography from "@components/atoms/Typography";
import Icon from "@components/atoms/Icon";
import CustomButton from "@components/atoms/Button";
import {
  IconInfos,
  Workspace,
} from "@store/reducers/user_slice/user_slice.types";
import { useAppDispatch } from "@store/hooks";
import { changePositionOfAWorkspace } from "@store/reducers/user_slice";
import useNewWorkspace from "@utils/hooks/useNewWorkspace";
import useDraggable from "@utils/hooks/useDraggable";
import WorkspaceTileTemplate from "@components/Templates/WorkspaceTileTemplate";
import * as Styled from "./WorkspaceSection.styled";
import WorkspaceTile from "../WorkspaceTile";

const WorkspaceSection = () => {
  const dispatch = useAppDispatch();
  const {
    workspaces,
    currentWorkspace,
    isWorkspaceBeingCreated,
    buttonState,
    changeWorkspaceHandler,
    onSaveHandler,
    addNewWorkspaceHandler,
    getCurrentName,
  } = useNewWorkspace();

  const {
    DndContext,
    SortableContext,
    sensors,
    handleDragEnd,
    closestCenter,
    verticalListSortingStrategy,
  } = useDraggable();

  const onDragHandler = (reorderdWorkspaces: Workspace[]) => {
    dispatch(changePositionOfAWorkspace({ reorderdWorkspaces }));
  };

  return (
    <Styled.WorkspacesContainer>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={(event) =>
          handleDragEnd({ event, array: workspaces, onDrag: onDragHandler })
        }
      >
        <SortableContext
          items={workspaces}
          strategy={verticalListSortingStrategy}
        >
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
                  changeWorkspaceHandler({
                    workspaceId: id,
                    condition: !isCurrent,
                  })
                }
                onSave={onSaveHandler}
              />
            );
          })}
        </SortableContext>
      </DndContext>

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
