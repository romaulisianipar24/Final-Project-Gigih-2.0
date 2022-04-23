import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { Provider } from "react-redux";
import { StateProvider } from "../helper/StateProvider";
import store from "../store/index";

test("should render login button properly", () => {
  render(
    <StateProvider store={store}>
      <Login />
    </StateProvider>
  );

  const loginButton = screen.getByTestId("test-login", {
    name: /Login/i,
  });

  expect(loginButton).toBeVisible();
});

test("should render login page properly", () => {
  render(
    <StateProvider store={store}>
      <Login />
    </StateProvider>
  );

  expect(screen.getByTestId("test-pageLogin")).toBeInTheDocument();
});
