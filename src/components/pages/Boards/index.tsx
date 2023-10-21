import CardList from "../../CardList";
import CardListTemplate from "../../Templates/CardListTemplate";
import useList from "../../../utils/hooks/useList";
import Typography from "../../Typography";
import Icon from "../../Icon";
import * as Styled from "./Boards.styled";

const Boards = () => {
  const {
    currentWorkspace,
    isListBeingCreated,
    getCurrentName,
    addNewListHandler,
    onSaveHandler,
  } = useList();
  const workspace = currentWorkspace ? currentWorkspace : null;

  return (
    <Styled.Wrapper>
      {workspace
        ? workspace.lists.map(({ id, name, cards }) => (
            <div>
              <CardList id={id} name={name} cards={cards} key={id} />
            </div>
          ))
        : null}
      {isListBeingCreated ? (
        <>
          <CardListTemplate
            isCreating={isListBeingCreated}
            getCurrentInputName={getCurrentName}
            onSaveInputHandler={onSaveHandler}
          />
        </>
      ) : (
        <div>
          <Styled.Button onClick={addNewListHandler}>
            <Icon
              size={16}
              color={"midnight_blue_500"}
              name={"plus"}
              isActive={false}
            />
            <Typography variant="button_normal" color="midnight_blue_500">
              Add another list
            </Typography>
          </Styled.Button>
        </div>
      )}
    </Styled.Wrapper>
  );
};

export default Boards;
