import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import StackNavigation from "./src/navigation/StackNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
      {/* cmt */}
    </Provider>
  );
}
