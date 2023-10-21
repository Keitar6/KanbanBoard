import { StrictMode } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { reduxStore } from "./store/store";
import { ThemeWrapper } from "./components/ThemeWrapper";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./utils/errorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeWrapper>
        <BrowserRouter>
          <Provider store={reduxStore}>
            <App />
          </Provider>
        </BrowserRouter>
      </ThemeWrapper>
    </ErrorBoundary>
  </StrictMode>
);
