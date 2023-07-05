import SubHeading from ".";
import { render, screen } from "@testing-library/react";

test("renders 'XXX' as text content for the SubHeading component", () => {
  render(<SubHeading>XXX</SubHeading>);
  const element = screen.getByText("XXX");
  expect(element).toBeInTheDocument();
});