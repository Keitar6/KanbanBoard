import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addNewCard,
  addNewSubCard,
  deleteCard,
  deleteSubCard,
  editCard,
  editSubCard,
  selectUserCurrentWorkspace,
  selectUserWorkspaces,
} from "../../store/reducers/user_slice";
import { useState } from "react";

const useNewSubCard = ({
  listId,
  cardId,
  id,
}: {
  listId: string;
  cardId: string;
  id: string;
}) => {
  const dispatch = useAppDispatch();
  const [isSubCardBeingCreated, setIsSubCardBeingCreated] =
    useState<boolean>(false);
  const [newCardName, setNewCardName] = useState("");

  const getNewName = (name: string) => {
    console.log(name);
    setNewCardName(name);
  };

  const addNewSubCardHandler = () => {
    if (!isSubCardBeingCreated) {
      setIsSubCardBeingCreated(true);
    } else if (isSubCardBeingCreated) {
      dispatch(addNewSubCard({ name: newCardName, listId, cardId }));
      setIsSubCardBeingCreated(false);
    }
  };

  const onSaveHandler = () => {
    dispatch(addNewSubCard({ name: newCardName, listId, cardId }));
    setIsSubCardBeingCreated(false);
  };

  return {
    addNewSubCardHandler,
    getNewName,
    onSaveHandler,
    isSubCardBeingCreated,
  };
};

export default useNewSubCard;
