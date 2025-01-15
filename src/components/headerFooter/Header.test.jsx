
import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header" 




describe("Basket display toggle", () => {
    it("Should render the Header Component", () => {
        render(<Header basketItems={[]} basketSubtotal={0} />)

        const headerContainer = screen.getByRole("headerContainer");

        expect(headerContainer).toBeInTheDocument();
    
    })
    
   
    
})

