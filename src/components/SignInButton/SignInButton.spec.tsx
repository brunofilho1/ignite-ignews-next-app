import { render, screen } from "@testing-library/react";
import { SignInButton } from ".";
import { useSession } from "next-auth/react";

jest.mock("next-auth/react");

describe("SignInButton component", () => {
  it("renders correctly when user IS authenticated", () => {
    const useSessionMocked = jest.mocked(useSession);
    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: "Bruno Filho",
          email: "bruno@gmail.com",
        },
        expires: "30dias",
      },
      status: "authenticated",
    });

    render(<SignInButton />);

    expect(screen.getByText("Bruno Filho")).toBeInTheDocument();
  });

  it("renders correctly when user IS NOT authenticated", () => {
    const useSessionMocked = jest.mocked(useSession);
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });

    render(<SignInButton />);

    expect(screen.getByText("Sign In with Github")).toBeInTheDocument();
  });
});
