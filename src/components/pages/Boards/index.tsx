import CardList from "../../CardList";
import CardListTemplate from "../../Templates/CardListTemplate";
import useNewList from "../../../utils/hooks/useNewList";
import Typography from "../../Typography";
import Icon from "../../Icon";
import * as Styled from "./Boards.styled";
import useDraggable from "../../../utils/hooks/useDraggable";
import { useAppDispatch } from "../../../store/hooks";
import { changePositionOfAList } from "../../../store/reducers/user_slice";
import { List } from "../../../store/reducers/user_slice/user_slice.types";

const Boards = () => {
  const dispatch = useAppDispatch();
  const {
    currentWorkspace,
    isListBeingCreated,
    getCurrentName,
    addNewListHandler,
    onSaveHandler,
  } = useNewList();
  const workspace = currentWorkspace ? currentWorkspace : null;

  const {
    DndContext,
    SortableContext,
    sensors,
    handleDragEnd,
    closestCenter,
    horizontalListSortingStrategy,
  } = useDraggable();

  const onDragHandler = (reorderdList: List[]) => {
    dispatch(changePositionOfAList({ reorderdList }));
  };

  return (
    <Styled.Wrapper>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={(event) =>
          handleDragEnd({
            event,
            array: workspace?.lists,
            onDrag: onDragHandler,
          })
        }
      >
        <SortableContext
          items={workspace ? workspace.lists : []}
          strategy={horizontalListSortingStrategy}
        >
          {workspace
            ? workspace.lists.map(({ id, name, cards }) => (
                <div>
                  <CardList id={id} name={name} cards={cards} key={id} />
                </div>
              ))
            : null}
        </SortableContext>
      </DndContext>
      {isListBeingCreated ? (
        <>
          <CardListTemplate
            isCreating={isListBeingCreated}
            getCurrentInputName={getCurrentName}
            onSaveInputHandler={onSaveHandler}
          />
        </>
      ) : (
        <div>
          <Styled.Button onClick={addNewListHandler}>
            <Icon
              size={16}
              color={"midnight_blue_500"}
              name={"plus"}
              isActive={false}
            />
            <Typography variant="button_normal" color="midnight_blue_500">
              Add another list
            </Typography>
          </Styled.Button>
        </div>
      )}
    </Styled.Wrapper>
  );
};

export default Boards;
