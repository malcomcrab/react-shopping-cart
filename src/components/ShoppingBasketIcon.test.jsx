import { vi, describe, it, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingBasketIcon from "./ShoppingBasketIcon" 




describe("Basket display toggle", () => {
    it("Should render the shopping basket icon", () => {
        render(<ShoppingBasketIcon />)

        const basketIcon = screen.getByRole("img", {name: "shopping basket icon" });

        expect(basketIcon).toBeInTheDocument();
    
    })
    
    
    it("Should trigger an onClick function when clicked", async () => {
        
        const onClick = vi.fn();
        const user = userEvent.setup()
        render(<ShoppingBasketIcon onClick={onClick} basketItems={[1,2,3]} basketSubtotal={2}/>)

        const basketIcon = screen.getByRole("img", {name: "shopping basket icon" });

        await user.click(basketIcon);

        expect(onClick).toHaveBeenCalled();
    })

    it("Should not trigger an onClick function when clicked", async () => {
        
        const onClick = vi.fn();
        const user = userEvent.setup()
        render(<ShoppingBasketIcon onClick={onClick} basketItems={[1,2,3]} basketSubtotal={2}/>)

        const basketIcon = screen.getByRole("img", {name: "shopping basket icon" });


        expect(onClick).not.toHaveBeenCalled();
    })
    
    
    
})