"use client";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Separator } from "../ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { useEffect, useState } from "react";
import { CartItem } from "./cartItem";

export function CartSideBar() {
  const { cart } = useCartStore((state) => state);
  let subTotal = 0;

  for (let item of cart) {
    subTotal += item.product.price * item.quantity;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="mr-2" />
          <p>Carrinho</p>
          {cart.length > 0 && (
            <div className="size-3 rounded-full absolute -top-[6px] -right-[6px] bg-red-600"></div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3">
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between items-center text-xs">
          <div className="">Subtotal: R${subTotal.toFixed(2)}</div>
          <div className="">...</div>
        </div>
        <Separator className="my-4" />
        <div className="text-center">
          <Button disabled={cart.length <= 0}>Finalizar Compra</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
