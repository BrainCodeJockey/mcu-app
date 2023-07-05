import Heading from ".";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Heading>XXX</Heading>);
  const element = screen.getByText("XXX");
  expect(element).toBeInTheDocument();
});