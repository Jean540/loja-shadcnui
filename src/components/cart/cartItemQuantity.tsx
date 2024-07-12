import { useCartStore } from "@/stores/cart-store";
import { Cart } from "@/types/cart";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

export const CartItemQuantity = ({ cartItem }: { cartItem: Cart }) => {
  const { upsertCartItem } = useCartStore((state) => state);

  return (
    <div className="flex items-center gap-2 ">
      <Button
        className="size-6"
        variant={"outline"}
        size="icon"
        onClick={() => upsertCartItem(cartItem.product, -1)}
      >
        <MinusIcon className="size-3" />
      </Button>
      <p className="text-xs">{cartItem.quantity}</p>
      <Button
        className="size-6"
        variant={"outline"}
        size="icon"
        onClick={() => upsertCartItem(cartItem.product, 1)}
      >
        <PlusIcon className="size-3" />
      </Button>
    </div>
  );
};
