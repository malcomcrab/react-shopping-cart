import { vi, describe, it, expect, test, afterAll } from "vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useFetchApi } from "./useFetchApi";

test("useFetchApi returns false when not loading", async () => {

  const {result} = renderHook(() => useFetchApi());
  await waitFor(() => expect(result.current.loading).toBe(false))
})

test("useFetchApi returns true whilst loading", async () => {

  const {result} = renderHook(() => useFetchApi());
  expect(result.current.loading).toBe(true)
})

test("useFetchApi returns true whilst loading", async () => {

  const {result} = renderHook(() => useFetchApi());
  expect(result.current.loading).toBe(true)
})

/*
describe("Loading message render", () => {
    it("Should render the loading message ", () => {
      render(<FetchProductsApi />);
  
      const loadingMessage = screen.getByRole("loadingMessage");
  
      expect(loadingMessage).toBeInTheDocument();
    }); 
  });
*/


  
  


  