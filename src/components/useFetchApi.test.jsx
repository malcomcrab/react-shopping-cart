import { vi, describe, it, expect, test, afterAll } from "vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useFetchApi } from "./useFetchApi";

test("useFetchApi returns false when not loading", async () => {

  const {result} = renderHook(() => useFetchApi("https://fakestoreapi.com/products"));
  await waitFor(() => expect(result.current.loading).toBe(false))
})

test("useFetchApi returns true whilst loading", async () => {

  const {result} = renderHook(() => useFetchApi("https://fakestoreapi.com/products"));
  expect(result.current.loading).toBe(true)
})

test("useFetchApi returns false when not loading", async () => {

  const {result} = renderHook(() => useFetchApi("https://fakestoreapi.com/products"));
  await waitFor(() => expect(result.current.error).toBe(null))
})

test("useFetchApi returns  mock API data", async () => {
  const apiData = {
    id: 1, 
    name: 'Tony',
  }
  
  const mockResponse = {
    apiData,
  }

  global.fetch = vi.fn(() => 
    Promise.resolve({
      json: () => Promise.resolve(mockResponse)
    })
  )

  const {result} = renderHook(() => useFetchApi("https://fakestoreapi.com/products"));
  await waitFor(() => expect(result.current.apiData).toBe(mockResponse))
  

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


  
  


  