import * as Styled from "./SubCard.styled";
import EditableTextInput from "../Input";
import useOnHover from "../../utils/hooks/useOnHover";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { deleteSubCard, editSubCard } from "../../store/reducers/user_slice";

const SubCard = ({
  listId,
  cardId,
  id,
  name,
}: {
  name: string;
  listId: string;
  cardId: string;
  id: string;
}) => {
  const { isHovered, mouseEnterHandler, mouseLeaveHandler } = useOnHover();

  const [inputText, setInputText] = useState("");

  const dispatch = useAppDispatch();

  const getCurrentName = (name: string) => {
    setInputText(name);
  };

  const onSaveHandler = () => {
    dispatch(editSubCard({ listId, cardId, id, newName: inputText }));
  };

  const onDeleteHandler = () => {
    dispatch(deleteSubCard({ listId, id, cardId }));
  };

  return (
    <Styled.SubCardWrapper>
      <Styled.SubCardContainer
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        isHovered={isHovered}
      >
        <EditableTextInput
          name={name}
          getCurrentName={getCurrentName}
          isHovered={isHovered}
          onDelete={onDeleteHandler}
          onSave={onSaveHandler}
        />
      </Styled.SubCardContainer>
    </Styled.SubCardWrapper>
  );
};

export default SubCard;
