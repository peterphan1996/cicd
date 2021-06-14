import React from "react";
// import { render, screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

test("renders logo", () => {
  const { getByAltText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // expect(getByText(/learn/i)).toBeInTheDocument();
  expect(getByAltText(/logo/i)).toBeInTheDocument();
});
