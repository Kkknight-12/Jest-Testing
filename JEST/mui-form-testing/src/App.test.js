import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import MuiForm from "./Forms/Mui-Form";
import Form from "./Forms/Simple-Form";
import { NumberDisplay } from "./NumberDisplay";

test("Mui Form with test id", () => {
  const { unmount } = render(<MuiForm />);

  // get element by its test id
  const firstName = screen.getByTestId("firstName1");

  // we expect this id to be found | exist in DOM
  expect(firstName).toBeInTheDocument();

  // we are expecting the firstName initial value to be abc
  expect(firstName.value).toBe("Mayank");

  // changing the value of the input to be jack
  fireEvent.change(firstName, { target: { value: "jack" } });

  // we expect the element to have value jack
  expect(firstName.value).toBe("jack");

  // // re render the MuiForm component
  // afterEach(cleanup);

  unmount();
  render(<MuiForm />);

  //
  expect(screen.getByTestId("firstName1").value).toBe("Mayank");
});

it("form with test id", () => {
  render(<Form name={"Blank"} />);

  const getFirstNameById = screen.getByTestId("fullName");

  expect(getFirstNameById.value).toBe("Blank");

  fireEvent.change(getFirstNameById, { target: { value: "jack" } });

  expect(getFirstNameById.value).toBe("jack");
});

//
it("redender component with different props", () => {
  const { rerender } = render(<Form name={"Blank"} />);

  const headingId = screen.getByTestId("headingIns-id");

  expect(headingId.value).toHaveTextContent("Blank");
  //  expect(headingId.value).tobe("Blank");

  rerender(<Form name={"Mayank"} />);

  //
  expect(headingId.value).toBe("Mayank");
});

//
test("", () => {
  const { rerender } = render(<NumberDisplay number={1} />);
  expect(screen.getByTestId("number-display")).toHaveTextContent("1");

  // re-render the same component with different props
  rerender(<NumberDisplay number={2} />);
  expect(screen.getByTestId("number-display")).toHaveTextContent("2");

  expect(screen.getByTestId("instance-id")).toHaveTextContent("1");
});