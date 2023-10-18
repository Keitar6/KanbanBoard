import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import GlobalStyle from "./styles/globalStyles";

const Layout = styled.div`
  height: 100%;
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Sidebar />
      </Layout>
    </>
  );
}

export default App;
