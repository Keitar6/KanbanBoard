import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import * as Styled from "./SubCard.styled";
import { useSubCard } from "@utils/hooks";
import EditableTextInput from "@components/atoms/Input";

const SubCard = ({
  listId,
  cardId,
  id,
  name,
  addSubCardHandler = () => {},
}: {
  name: string;
  listId: string;
  cardId: string;
  id: string;
  addSubCardHandler?: () => void;
}) => {
  const {
    isHovered,
    mouseEnterHandler,
    mouseLeaveHandler,
    onSaveHandler,
    onDeleteHandler,
    getCurrentName,
  } = useSubCard({
    listId,
    cardId,
    id,
  });

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Styled.SubCardWrapper
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <Styled.SubCardContainer
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        isHovered={isHovered}
      >
        <EditableTextInput
          name={name}
          getCurrentName={getCurrentName}
          isHovered={isHovered}
          onDelete={onDeleteHandler}
          onSave={onSaveHandler}
          ifSubCard
          onSubCardAddition={addSubCardHandler}
        />
      </Styled.SubCardContainer>
    </Styled.SubCardWrapper>
  );
};

export default SubCard;
