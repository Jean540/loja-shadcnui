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

export function CartSideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <ShoppingCart className="mr-2" />
          <p>Carrinho</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3">...</div>
        <Separator className="my-4" />
        <div className="flex justify-between items-center text-xs">
          <div className="">Subtotal:</div>
          <div className="">...</div>
        </div>
        <Separator className="my-4" />
        <div className="text-center">
          <Button>Finalizar Compra</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
