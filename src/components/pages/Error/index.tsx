import { ErrorState } from "@utils/errorBoundary";
import styled from "styled-components";

const ErrorContainer = styled.div`
  text-align: center;
`;

type ErrorPageProps = { error: ErrorState };

const ErrorPage = ({ error }: ErrorPageProps) => (
  <ErrorContainer>
    <h2>An error occurred:</h2>
    <p>{error.message}</p>
    <button onClick={() => window.location.reload()}>Refresh the page</button>
  </ErrorContainer>
);

export default ErrorPage;
