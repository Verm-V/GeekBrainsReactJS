import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import store from "./store";

export const MyDataContext = React.createContext({ appVersion: "0.8.0" });

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MyDataContext.Provider value={{ appVersion: "0.8.0" }}>
        <Provider store={store}>
          <App />
        </Provider>
      </MyDataContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
