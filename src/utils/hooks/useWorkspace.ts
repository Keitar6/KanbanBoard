import { useAppDispatch } from "../../store/hooks";
import {
  changeCurrentWorkspace,
  deleteWorkspace,
} from "../../store/reducers/user_slice";
import useOnHover from "./useOnHover";

const useWorkspace = (id: string) => {
  const dispatch = useAppDispatch();

  const { isHovered, mouseEnterHandler, mouseLeaveHandler } = useOnHover();

  const onDeleteHandler = () => {
    const newCurrentWorkspaceId = +id - 1 + "";
    dispatch(deleteWorkspace({ id }));
    dispatch(changeCurrentWorkspace({ id: newCurrentWorkspaceId }));
  };

  return {
    onDeleteHandler,
    isHovered,
    mouseEnterHandler,
    mouseLeaveHandler,
  };
};

export default useWorkspace;
