"use client";

import { Sheet, ShoppingCart } from "lucide-react";
import { SheetTrigger } from "./ui/sheet";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          className="h-6 w-6 flex-shrink-0 text-yellow-400 group-hover:text-yellow-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-yellow-700 group-hover:text-yellow-800"></span>
      </SheetTrigger>
    </Sheet>
  );
};

export default Cart;
