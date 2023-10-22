import styled from "styled-components";
import { CardContainer } from "../../Card/Card.styled";

export const Container = styled(CardContainer)`
  padding: 16px 8px;
`;
export const Wrapper = styled.div`
  padding: 0 0 0 16px;
`;
export const Title = styled.span`
  padding: 0px 8px 0px 8px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px 0px 0px;
  gap: 8px;
  width: 100%;
`;
