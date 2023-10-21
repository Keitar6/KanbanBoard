import styled from "styled-components";
import { css } from "styled-components";

export const SidebarDropShadow = css`
  box-shadow: 0px 0px 0px 0px ${({ theme }) => theme.palette.tiles_hover}1a,
    0px 0px 1px 0px ${({ theme }) => theme.palette.tiles_hover}1a,
    0px 1px 1px 0px ${({ theme }) => theme.palette.tiles_hover}17,
    0px 3px 2px 0px ${({ theme }) => theme.palette.tiles_hover}0d,
    0px 5px 2px 0px ${({ theme }) => theme.palette.tiles_hover}03,
    0px 8px 2px 0px ${({ theme }) => theme.palette.tiles_hover}00;
`;

export const Sidebar = styled.div`
  display: flex;
  background: ${({ theme }) => theme.palette.white};
  flex-direction: column;
  max-width: 18.375rem;
  min-width: 18.375rem;
  border-radius: 1rem;
  ${SidebarDropShadow}
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
`;
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.palette.sidebar_breakdown_line};
`;
