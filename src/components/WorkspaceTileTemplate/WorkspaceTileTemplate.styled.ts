import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background};
`;
export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  background-color: transparent;
  opacity: 0.5;
`;
export const LogoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.palette.logo_template};
  border-radius: 0.5rem;
`;
