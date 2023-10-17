import Icon from "./components/Icon";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <main className="App">
        APP <Icon color="red" isActive={false} name={"acmeLogo"} size={90} />
      </main>
    </>
  );
}

export default App;
