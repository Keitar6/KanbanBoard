import {
  Card as CardType,
  List,
} from "@store/reducers/user_slice/user_slice.types";
import * as Styled from "./CardList.styled";
import EditableTextInput from "../Input";
import Card from "../Card";
import Typography from "../Typography";
import Icon from "../Icon";
import CardTemplate from "../Templates/CardTemplate";
import useCard from "../../utils/hooks/useCard";
import useList from "../../utils/hooks/useList";
import useDraggable from "../../utils/hooks/useDraggable";
import { useAppDispatch } from "../../store/hooks";
import { changePositionOfACard } from "../../store/reducers/user_slice";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type CardListProps = List;

const CardList = ({ name, id, cards }: CardListProps) => {
  const dispatch = useAppDispatch();

  const {
    addNewCardHandler,
    getCurrentName,
    isCardBeingCreated,
    onSaveHandler,
  } = useCard(id);

  const {
    getEditedListName,
    onEditHandler,
    onDeleteListHandler,
    isHovered,
    mouseEnterHandler,
    mouseLeaveHandler,
    listId,
  } = useList(id);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const {
    DndContext,
    SortableContext,
    sensors,
    handleDragEndWithMultipleContainers,
    closestCenter,
    horizontalListSortingStrategy,
  } = useDraggable();

  const onDragHandler = ({
    reorderdArray,
    newListId,
  }: {
    reorderdArray: CardType[];
    newListId: string;
  }) => {
    dispatch(
      changePositionOfACard({
        reorderdCardList: reorderdArray,
        listId: newListId,
      })
    );
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  //Functionality to drag and drop among task lists
  // const findContainer = (id: UniqueIdentifier) => {
  //   if (id in cards) {
  //     return id;
  //   }
  //   return cards.find((key) => cards[+key.id].includes(id));
  // };
  // const onDragOver = ({ active, over }: any) => {
  //   const overId = over?.id;

  //   if (!overId || active.id in cards) {
  //     return;
  //   }

  //   const overContainer = findContainer(overId);
  //   const activeContainer = findContainer(active.id);

  //   if (!overContainer || !activeContainer) {
  //     return;
  //   }

  //   if (activeContainer !== overContainer) {
  //     // setItems((items) => {
  //     //   const activeItems = items[activeContainer];
  //     //   const overItems = items[overContainer];
  //     //   const overIndex = overItems.indexOf(overId);
  //     //   const activeIndex = activeItems.indexOf(active.id);
  //     //   let newIndex: number;
  //     //   if (overId in items) {
  //     //     newIndex = overItems.length + 1;
  //     //   } else {
  //     //     const isBelowOverItem =
  //     //       over &&
  //     //       active.rect.current.translated &&
  //     //       active.rect.current.translated.top >
  //     //         over.rect.top + over.rect.height;
  //     //     const modifier = isBelowOverItem ? 1 : 0;
  //     //     newIndex =
  //     //       overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
  //     //   }
  //     //   recentlyMovedToNewContainer.current = true;
  //     //   return {};
  //     // });
  //   }
  // };

  return (
    <Styled.Wrapper
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <Styled.Title
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <EditableTextInput
          name={name}
          isHovered={isHovered}
          typographyVariant="subtitle_2"
          onDelete={onDeleteListHandler}
          onSave={onEditHandler}
          getCurrentName={getEditedListName}
        />
      </Styled.Title>

      <Styled.Content>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={(event) =>
            handleDragEndWithMultipleContainers({
              event,
              array: cards,
              onDrag: onDragHandler,
              listId,
            })
          }
        >
          <SortableContext
            items={cards ? cards : []}
            strategy={horizontalListSortingStrategy}
          >
            {cards.map(({ id, name, subCards }) => (
              <>
                <Card
                  key={id}
                  listId={listId}
                  id={id}
                  name={name}
                  subCards={subCards}
                />
              </>
            ))}
          </SortableContext>
        </DndContext>

        {isCardBeingCreated ? (
          <CardTemplate
            isCreating={isCardBeingCreated}
            getCurrentInputName={getCurrentName}
            onSaveInputHandler={onSaveHandler}
          />
        ) : null}

        <Styled.AddACardButton onClick={addNewCardHandler}>
          <Icon
            size={16}
            color={"midnight_blue_500"}
            name={"plus"}
            isActive={false}
          />
          <Typography variant="button_normal" color="midnight_blue_500">
            Add a Card
          </Typography>
        </Styled.AddACardButton>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default CardList;
