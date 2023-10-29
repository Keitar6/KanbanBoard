import styled from "styled-components";
import { useSelector } from "react-redux";
import GlobalStyle from "./styles/globalStyles";
import { Routing } from "./routing";
import ErrorPage from "./pages/Error";
import { selectError } from "./store/reducers/error_slice";
import Sidebar from "./components/organisms/Sidebar";

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
