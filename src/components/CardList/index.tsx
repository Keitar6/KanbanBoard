import { useState } from "react";
import styled from "styled-components";
import { List } from "@store/reducers/user_slice/user_slice.types";
import { useAppDispatch } from "../../store/hooks";
import * as Styled from "./CardList.styled";
import EditableTextInput from "../Input";
import useOnHover from "../../utils/hooks/useOnHover";
import Card from "../Card";
import Typography from "../Typography";
import Icon from "../Icon";
import CardTemplate from "../Templates/CardTemplate";
import useCard from "../../utils/hooks/useCard";

export const AddACardButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 6px;
`;

type CardListProps = List;

const CardList = ({ name, id, cards }: CardListProps) => {
  const {
    addNewCardHandler,
    getCurrentName,
    isCardBeingCreated,
    onSaveHandler,
    onDeleteHandler,
  } = useCard(id);
  const { isHovered, mouseEnterHandler, mouseLeaveHandler } = useOnHover();
  const listId = id;

  return (
    <Styled.Wrapper>
      <Styled.Title
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <EditableTextInput
          name={name}
          isHovered={isHovered}
          typographyVariant="subtitle_2"
          onDelete={() => onDeleteHandler(id as string)}
          onSave={onSaveHandler}
          getCurrentName={getCurrentName}
        />
      </Styled.Title>

      <Styled.Content>
        {cards.map(({ id, name, subCards }) => (
          <>
            <Card
              key={id}
              listId={listId}
              id={id}
              name={name}
              subCards={subCards}
            />
          </>
        ))}

        {isCardBeingCreated ? (
          <CardTemplate
            isCreating={isCardBeingCreated}
            getCurrentInputName={getCurrentName}
            onSaveInputHandler={onSaveHandler}
          />
        ) : null}

        <AddACardButton onClick={addNewCardHandler}>
          <Icon
            size={16}
            color={"midnight_blue_500"}
            name={"plus"}
            isActive={false}
          />
          <Typography variant="button_normal" color="midnight_blue_500">
            Add a Card
          </Typography>
        </AddACardButton>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default CardList;
