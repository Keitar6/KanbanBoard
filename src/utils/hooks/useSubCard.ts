import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addNewCard,
  deleteCard,
  deleteSubCard,
  editCard,
  editSubCard,
  selectUserCurrentWorkspace,
  selectUserWorkspaces,
} from "../../store/reducers/user_slice";
import { useState } from "react";
import useOnHover from "./useOnHover";

const useSubCard = ({
  listId,
  cardId,
  id,
}: {
  listId: string;
  cardId: string;
  id: string;
}) => {
  const dispatch = useAppDispatch();
  const currentWorkspace = useAppSelector(selectUserCurrentWorkspace);
  const workspaces = useAppSelector(selectUserWorkspaces);

  const [isSubCardBeingCreated, setIsSubCardBeingCreated] = useState<boolean>(false);
  const [newCardName, setNewCardName] = useState("");
  const { isHovered, mouseEnterHandler, mouseLeaveHandler } = useOnHover();

  const canBeSaved = false;

  const getCurrentName = (name: string) => {
    setNewCardName(name);
  };

  const addNewSubCardHandler = () => {
    if (!isSubCardBeingCreated) {
      setIsSubCardBeingCreated(true);
    } else if (isSubCardBeingCreated && canBeSaved) {
      dispatch(addNewCard({ name: newCardName, listId }));
      setIsSubCardBeingCreated(false);
    }
  };

  const onSaveHandler = () => {
    dispatch(editSubCard({ listId, cardId, id, newName: newCardName }));
    setIsSubCardBeingCreated(false);
  };

  const onDeleteHandler = () => {
    dispatch(deleteSubCard({ listId, id, cardId }));
  };

  return {
    addNewSubCardHandler,
    getCurrentName,
    onSaveHandler,
    onDeleteHandler,
    currentWorkspace,
    workspaces,
    isSubCardBeingCreated,
    isHovered,
    mouseEnterHandler,
    mouseLeaveHandler,
  };
};

export default useSubCard;
