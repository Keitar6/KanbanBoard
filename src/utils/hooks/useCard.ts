import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addNewCard,
  deleteCard,
  selectUserCurrentWorkspace,
} from "../../store/reducers/user_slice";
import { useState } from "react";

const useCard = (listId: string) => {
  const dispatch = useAppDispatch();
  const currentWorkspace = useAppSelector(selectUserCurrentWorkspace);

  const [isCardBeingCreated, setIsCardBeingCreated] = useState<boolean>(false);
  const [newCardName, setNewCardName] = useState("");

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
    console.log(newCardName, listId);
    dispatch(addNewCard({ name: newCardName, listId }));
    setIsCardBeingCreated(false);
  };

  const onDeleteHandler = (id: string) => {
    dispatch(deleteCard({ id, listId }));
  };

  return {
    addNewCardHandler,
    getCurrentName,
    onSaveHandler,
    onDeleteHandler,
    currentWorkspace,
    isCardBeingCreated,
  };
};

export default useCard;
