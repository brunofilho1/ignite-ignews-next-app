import { render, screen } from "@testing-library/react";
import Home from "../../pages";

jest.mock("next/router");
jest.mock("next-auth/react", () => {
  return {
    useSession: () => [null, false],
  };
});

describe("Home page", () => {
  it("renders correctly", () => {
    render(
      <Home
        product={{
          priceId: "fake-priceId",
          amount: "$10,00",
        }}
      />
    );

    expect(screen.getByText("for $10,00 month")).toBeInTheDocument();
  });
});
