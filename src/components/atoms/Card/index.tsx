import {
  Card as CardType,
  SubCard as SubCardType,
} from "@store/reducers/user_slice/user_slice.types";
import * as Styled from "./Card.styled";
import EditableTextInput from "../Input";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useAppDispatch } from "@store/hooks";
import { useCard, useDraggable, useNewSubCard } from "@utils/hooks";
import { changePositionOfASubCard } from "@store/reducers/user_slice";
import SubCard from "@components/molecules/SubCard";
import SubCardTemplate from "@components/Templates/SubCardTemplate";

type CardProps = CardType & { listId: string };

const Card = ({ listId, id, name, subCards }: CardProps) => {
  const dispatch = useAppDispatch();

  const cardId = id;
  const {
    isHovered,
    mouseEnterHandler,
    mouseLeaveHandler,
    getCurrentName,
    onEditHandler,
    onDeleteHandler,
  } = useCard(listId);

  const {
    isSubCardBeingCreated,
    addNewSubCardHandler,
    onSaveHandler,
    getNewName,
  } = useNewSubCard({
    listId,
    cardId,
    id,
  });

  const {
    DndContext,
    SortableContext,
    sensors,
    handleDragEnd,
    closestCenter,
    horizontalListSortingStrategy,
  } = useDraggable();

  const onDragHandler = (reorderdArray: SubCardType[]) => {
    dispatch(
      changePositionOfASubCard({
        reorderdSubCardList: reorderdArray,
        listId,
        cardId,
      })
    );
  };

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
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={(event) =>
          handleDragEnd({
            event,
            array: subCards,
            onDrag: onDragHandler,
          })
        }
      >
        <SortableContext
          items={subCards ? subCards : []}
          strategy={horizontalListSortingStrategy}
        >
          {subCards.map(({ name, id }) => (
            <SubCard
              key={id}
              listId={listId}
              cardId={cardId}
              id={id}
              name={name}
              addSubCardHandler={addNewSubCardHandler}
            />
          ))}
        </SortableContext>
      </DndContext>

      {isSubCardBeingCreated ? (
        <SubCardTemplate
          isCreating={isSubCardBeingCreated}
          getCurrentInputName={getNewName}
          onSaveInputHandler={onSaveHandler}
        />
      ) : null}
    </Styled.CardWrapper>
  );
};

export default Card;
