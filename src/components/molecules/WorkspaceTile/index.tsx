import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import * as Styled from "./WorkspaceTile.styled";
import Icon from "@components/atoms/Icon";
import { Workspace } from "@store/reducers/user_slice/user_slice.types";
import EditableTextInput from "@components/atoms/Input";
import useWorkspace from "@utils/hooks/useWorkspace";

type WorkspaceTileProps = {
  workspace: Omit<Workspace, "lists">;
  isCreated: boolean;
  isCurrent: boolean;
  onClick?: () => void;
  onSave?: () => void;
};

const WorkspaceTile = ({
  workspace,
  isCreated,
  isCurrent,
  onClick = () => {},
  onSave = () => {},
}: WorkspaceTileProps) => {
  const { name, id, icon } = workspace;
  const { isHovered, mouseEnterHandler, mouseLeaveHandler, onDeleteHandler } =
    useWorkspace(id);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Styled.WorkspaceDraggable
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <Styled.WorkspaceWrapper
        isCurrentWorkspace={isCurrent}
        isBeingCreated={isCreated}
        onClick={onClick}
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
            isHovered={isHovered}
            onDelete={onDeleteHandler}
            onSave={onSave}
          />
        </Styled.WorkspaceContainer>
      </Styled.WorkspaceWrapper>
    </Styled.WorkspaceDraggable>
  );
};

export default WorkspaceTile;
