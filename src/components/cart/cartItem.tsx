import { Cart } from "@/types/cart";
import { CartItemQuantity } from "./cartItemQuantity";

export const CartItem = ({ item }: { item: Cart }) => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-16 overflow-hidden rounded-full">
        <img
          src={item.product.image}
          className="w-full h-auto object-cover"
          alt=""
        />
      </div>
      <div className="flex-1">
        <p className="text-md">{item.product.name}</p>
        <p className="text-xs opacity-50">R$ {item.product.price.toFixed(2)}</p>
      </div>
      <CartItemQuantity cartItem={item} />
    </div>
  );
};
