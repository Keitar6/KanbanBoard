import { Card as CardType } from "@store/reducers/user_slice/user_slice.types";
import * as Styled from "./Card.styled";
import EditableTextInput from "../Input";
import SubCard from "../SubCard";
import useCard from "../../utils/hooks/useCard";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
type CardProps = CardType & { listId: string };

const Card = ({ listId, id, name, subCards }: CardProps) => {
  const {
    isHovered,
    mouseEnterHandler,
    mouseLeaveHandler,
    getCurrentName,
    onEditHandler,
    onDeleteHandler,
  } = useCard(listId);

  const cardId = id;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Styled.CardWrapper
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <Styled.CardContainer
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        isHovered={isHovered}
      >
        <EditableTextInput
          name={name}
          isHovered={isHovered}
          onDelete={() => onDeleteHandler(cardId)}
          onSave={() => onEditHandler(cardId)}
          getCurrentName={getCurrentName}
        />
      </Styled.CardContainer>
      {subCards.map(({ name, id }) => (
        <SubCard key={id} listId={listId} cardId={cardId} id={id} name={name} />
      ))}
    </Styled.CardWrapper>
  );
};

export default Card;
