import styled from "styled-components";

export const StyledItemList = styled.li`
  width: 200px;
  &:hover {
    background: ${({ theme }) => theme.palette.red}10;
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 2.625rem;
  justify-content: space-between;
  padding: 0.625rem 1.25rem;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  gap: 0.9rem;
  justify-content: flex-start;
`;
