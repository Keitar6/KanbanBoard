import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addNewCard,
  deleteCard,
  editCard,
  selectUserCurrentWorkspace,
  selectUserWorkspaces,
} from "../../store/reducers/user_slice";
import { useState } from "react";
import useOnHover from "./useOnHover";

const useCard = (listId: string) => {
  const dispatch = useAppDispatch();
  const currentWorkspace = useAppSelector(selectUserCurrentWorkspace);
  const workspaces = useAppSelector(selectUserWorkspaces);

  const [isCardBeingCreated, setIsCardBeingCreated] = useState<boolean>(false);
  const [newCardName, setNewCardName] = useState("");
  const { isHovered, mouseEnterHandler, mouseLeaveHandler } = useOnHover();

  const canBeSaved = false;

  const getCurrentName = (name: string) => {
    setNewCardName(name);
  };

  const addNewCardHandler = () => {
    if (!isCardBeingCreated) {
      setIsCardBeingCreated(true);
    } else if (isCardBeingCreated && canBeSaved) {
      dispatch(addNewCard({ name: newCardName, listId }));
      setIsCardBeingCreated(false);
    }
  };

  const onSaveHandler = () => {
    dispatch(addNewCard({ name: newCardName, listId }));
    setIsCardBeingCreated(false);
  };

  const onEditHandler = (id: string) => {
    dispatch(editCard({ listId, id, newName: newCardName }));
  };

  const onDeleteHandler = (id: string) => {
    dispatch(deleteCard({ id, listId }));
  };

  return {
    addNewCardHandler,
    getCurrentName,
    onSaveHandler,
    onDeleteHandler,
    onEditHandler,
    currentWorkspace,
    workspaces,
    isCardBeingCreated,
    isHovered,
    mouseEnterHandler,
    mouseLeaveHandler,
  };
};

export default useCard;
