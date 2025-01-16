import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FetchProductsApi from "./FetchProductsApi";


describe("Loading message render", () => {
    it("Should render the loading message ", () => {
      render(<FetchProductsApi />);
  
      const loadingMessage = screen.getByRole("loadingMessage");
  
      expect(loadingMessage).toBeInTheDocument();
    });
  });
  
  
  describe("Loading message render", () => {
    it("Should render the network error message ", () => {
      render(<FetchProductsApi />);
  
      const productCard = screen.getByRole("networkErrorMessage");
  
      expect(productCard).toBeInTheDocument();
    });
  });