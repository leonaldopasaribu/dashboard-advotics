import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import { StoreProvider } from "easy-peasy";
import store from "./store";

function App() {
  return (
    <StoreProvider store={store}>
      <React.Fragment>
        <Dashboard />
      </React.Fragment>
    </StoreProvider>
  );
}

export default App;