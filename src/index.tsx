import { StrictMode } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { reduxStore } from "./store/store";
import { ThemeWrapper } from "./components/ThemeWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeWrapper>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </ThemeWrapper>
  </StrictMode>
);
