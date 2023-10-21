import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.palette.list_background};
  min-width: 278px;
  height: fit-content;
  padding: 16px 8px;
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
