import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addNewList,
  selectUserCurrentWorkspace,
} from "../../store/reducers/user_slice";
import { List } from "../../store/reducers/user_slice/user_slice.types";
import { useState } from "react";

const useNewList = () => {
  const dispatch = useAppDispatch();
  const currentWorkspace = useAppSelector(selectUserCurrentWorkspace);

  const [isListBeingCreated, setIsListBeingCreated] = useState<boolean>(false);
  const [newListName, setNewListName] = useState("");

  const canBeSaved = false;

  const getCurrentName = (name: string) => {
    setNewListName(name);
  };

  const addNewListHandler = () => {
    if (!isListBeingCreated) {
      setIsListBeingCreated(true);
    } else if (isListBeingCreated && canBeSaved) {
      const newList: Omit<List, "id"> = {
        name: newListName,
        cards: [],
      };

      dispatch(addNewList(newList));
      setIsListBeingCreated(false);
    }
  };

  const onSaveHandler = () => {
    dispatch(addNewList({ name: newListName }));
    setIsListBeingCreated(false);
  };

  return {
    addNewListHandler,
    getCurrentName,
    onSaveHandler,
    currentWorkspace,
    isListBeingCreated,
  };
};

export default useNewList;
