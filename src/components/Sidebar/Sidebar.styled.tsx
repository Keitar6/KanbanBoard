import styled from "styled-components";
import { Palette } from "@styles/theme.types";

export const Box = styled.div<Palette>`
  background: ${({ palette }) => palette.white};
  display: flex;
  flex-direction: column;
  width: 294px;
  border-radius: 16px;
`;

export const StyledList = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 1.625rem 0;
`;
