import { ColorNames } from "@styles/theme.types";
import styled from "styled-components";

export const WorkspaceWrapper = styled.section<{
  isCurrentWorkspace: boolean;
  isBeingCreated: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  ${({ isCurrentWorkspace, isBeingCreated, theme }) =>
    isCurrentWorkspace
      ? isBeingCreated
        ? `background-color: ${theme.palette.background}; opacity:0.5`
        : `background-color: ${theme.palette.background}`
      : `opacity:0.5`}
`;
export const WorkspaceContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  background-color: transparent;
`;
export const LogoContainer = styled.section<{ bckgColor: ColorNames }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 2rem;
  height: 2rem;
  background-color: ${({ bckgColor, theme }) => theme.palette[bckgColor]};
  border-radius: 0.5rem;
`;

export const WorkspaceDraggable = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: transparent;
`;
