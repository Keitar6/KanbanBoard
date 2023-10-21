import styled from "styled-components";
import Sidebar from "./components/Sidebar";

import GlobalStyle from "./styles/globalStyles";
import { Routing } from "./routing";
import ErrorPage from "./components/pages/Error";
import { useSelector } from "react-redux";
import { selectError } from "./store/reducers/error_slice";

const Layout = styled.div`
  height: 100%;
  display: flex;
  gap: 24px;
`;

function App() {
  const error = useSelector(selectError);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Sidebar />
        <Routing />
      </Layout>
      {error?.message ? <ErrorPage error={error} /> : null}
    </>
  );
}

export default App;
