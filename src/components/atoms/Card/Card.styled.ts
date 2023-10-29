import styled, { css } from "styled-components";

export const CardDropshadow = css`
  box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.palette.tiles_hover}1a,
    0px 1px 1px 0px ${({ theme }) => theme.palette.tiles_hover}1a;
`;

export const CardDropshadowHover = css`
  box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.palette.tiles_hover}1c,
    0px 3px 5px 0px ${({ theme }) => theme.palette.tiles_hover}1a;
`;

export const CardContainer = styled.div<{ isHovered: boolean }>`
  display: flex;
  padding: 16px;
  width: 100%;
  min-width: 278px;
  min-height: 50px;
  border-radius: 8px;
  ${({ isHovered, theme }) =>
    isHovered
      ? `box-shadow: 0px 0px 1px 0px ${theme.palette.tiles_hover}1c,
      0px 3px 5px 0px ${theme.palette.tiles_hover}1a; background-color: ${theme.palette.card_hover};`
      : `box-shadow: 0px 0px 1px 0px ${theme.palette.tiles_hover}1c,
      0px 1px 1px 0px ${theme.palette.tiles_hover}1a; background-color: ${theme.palette.white};`}
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 278px;
  min-height: 50px;
  gap: 8px;
`;
