import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore, store } from "@store/store";
import { ThemeWrapper } from "@components/atoms/ThemeWrapper";
import ErrorBoundary from "@utils/errorBoundary";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeWrapper>
        <BrowserRouter>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
              <App />
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </ThemeWrapper>
    </ErrorBoundary>
  </StrictMode>
);
