import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useAppSelector } from "@store/hooks";
import {
  selectUserCurrentWorkspace,
  // selectUserWorkspaces,
} from "@store/reducers/user_slice";

export const useDraggable = () => {
  const currentWorkspace = useAppSelector(selectUserCurrentWorkspace);
  // const workspaces = useAppSelector(selectUserWorkspaces);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const inWhichContainerIsCard = ({
    activeId,
    overId,
    listId,
  }: {
    activeId: string;
    overId: string;
    listId: string;
  }): { newContainer: any; oldContainer: any } => {
    const oldList = currentWorkspace?.lists[+listId];
    const currentCardList = oldList?.cards;
    const ifCardIsInItsListIndex = currentCardList?.findIndex(
      (card) => card.id === activeId
    );
    if (ifCardIsInItsListIndex !== -1)
      return { newContainer: oldList, oldContainer: oldList };
    else {
      console.log("upss");
      return { newContainer: [], oldContainer: [] };
    }
  };

  function handleDragEndWithMultipleContainers({
    event,
    array,
    onDrag,
    listId,
  }: {
    event: DragEndEvent;
    array: any[] | undefined;
    onDrag: ({ reorderdArray, newListId }: any) => void;
    listId: string;
  }) {
    if (!array) return;
    const { active, over } = event;

    if (active.id !== over?.id) {
      const { newContainer, oldContainer } = inWhichContainerIsCard({
        activeId: active.id as string,
        overId: over?.id as string,
        listId,
      });

      const newListId =
        newContainer?.id === oldContainer?.id
          ? oldContainer?.id
          : newContainer?.id;

      if (newContainer?.id === oldContainer?.id) {
        const oldIndex = array.findIndex((item) => item.id === active.id);
        const newIndex = array.findIndex((item) => item.id === over?.id);
        const reorderdArray = arrayMove(array, oldIndex, newIndex);

        onDrag({ reorderdArray, newListId: newListId });
      }
    }
  }
  function handleDragEnd({
    event,
    array,
    onDrag,
  }: {
    event: DragEndEvent;
    array: any[] | undefined;
    onDrag: (arr: any) => void;
  }) {
    if (!array) return;
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = array.findIndex((item) => item.id === active.id);
      const newIndex = array.findIndex((item) => item.id === over?.id);
      const reorderdArray = arrayMove(array, oldIndex, newIndex);

      onDrag(reorderdArray);
    }
  }

  return {
    SortableContext,
    DndContext,
    sensors,
    closestCenter,
    handleDragEnd,
    handleDragEndWithMultipleContainers,
    verticalListSortingStrategy,
    horizontalListSortingStrategy,
  };
};

export default useDraggable;
