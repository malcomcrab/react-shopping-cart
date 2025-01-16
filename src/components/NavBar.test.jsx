import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";

describe("Homepage link", () => {
  it("Should render the homepge link", () => {
    render(<NavBar />);

    const homepageLink = screen.getByText("Home");

    expect(homepageLink).toBeInTheDocument();
  });
});

describe("Shop page link", () => {
  it("Should render the homepge link", () => {
    render(<NavBar />);

    const homepageLink = screen.getByText("Shop");

    expect(homepageLink).toBeInTheDocument();
  });
});
