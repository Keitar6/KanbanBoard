import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteList,
  editList,
  selectUserCurrentWorkspace,
} from "../../store/reducers/user_slice";
import { useState } from "react";
import useOnHover from "./useOnHover";

const useList = (listId: string) => {
  const dispatch = useAppDispatch();
  const currentWorkspace = useAppSelector(selectUserCurrentWorkspace);
  const { isHovered, mouseEnterHandler, mouseLeaveHandler } = useOnHover();

  const [newListName, setNewListName] = useState("");

  const getEditedListName = (name: string) => {
    setNewListName(name);
  };

  const onEditHandler = () => {
    if (newListName) dispatch(editList({ newName: newListName, id: listId }));
  };

  const onDeleteListHandler = () => {
    dispatch(deleteList({ id: listId }));
  };

  return {
    getEditedListName,
    onEditHandler,
    onDeleteListHandler,
    currentWorkspace,
    listId,
    isHovered,
    mouseEnterHandler,
    mouseLeaveHandler,
  };
};

export default useList;
