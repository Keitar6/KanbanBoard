import { StrictMode } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistedStore, store } from "./store/store";
import { ThemeWrapper } from "./components/ThemeWrapper";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./utils/errorBoundary";
import { PersistGate } from "redux-persist/integration/react";

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
