import { useState } from "react";
import { Card as CardType } from "@store/reducers/user_slice/user_slice.types";
import * as Styled from "./Card.styled";
import EditableTextInput from "../Input";
import useOnHover from "../../utils/hooks/useOnHover";
import SubCard from "../SubCard";
import { useAppDispatch } from "../../store/hooks";
import { deleteCard, editCard } from "../../store/reducers/user_slice";

type CardProps = CardType & { listId: string };

const Card = ({ listId, id, name, subCards }: CardProps) => {
  const { isHovered, mouseEnterHandler, mouseLeaveHandler } = useOnHover();

  const [inputText, setInputText] = useState("");

  const dispatch = useAppDispatch();
  const cardId = id;

  const getCurrentName = (name: string) => {
    setInputText(name);
  };

  const onSaveHandler = () => {
    dispatch(editCard({ listId, id, newName: inputText }));
  };

  const onDeleteHandler = () => {
    dispatch(deleteCard({ listId, id }));
  };

  return (
    <>
      <Styled.CardContainer
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        isHovered={isHovered}
      >
        <EditableTextInput
          name={name}
          isHovered={isHovered}
          onDelete={onDeleteHandler}
          onSave={onSaveHandler}
          getCurrentName={getCurrentName}
        />
      </Styled.CardContainer>
      {subCards.map(({ name, id }) => (
        <SubCard key={id} listId={listId} cardId={cardId} id={id} name={name} />
      ))}
    </>
  );
};

export default Card;
