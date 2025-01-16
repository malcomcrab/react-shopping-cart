
import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./Footer" 

describe("Footer Component", () => {
    it("Should render the Footer Component", () => {
        render(<Footer />)

        const headerContainer = screen.getByRole("footerContainer");

        expect(headerContainer).toBeInTheDocument();
    
    })

})