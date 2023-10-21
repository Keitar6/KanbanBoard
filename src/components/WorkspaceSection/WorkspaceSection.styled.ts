import styled from "styled-components";
import { SidebarDropShadow } from "../Sidebar/Sidebar.styled";

export const WorkspacesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  gap: 0.5rem;
`;
export const WorkspaceTile = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 0.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background};
`;
export const LogoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.palette.sidebar_selected};
  border-radius: 0.5rem;
`;
