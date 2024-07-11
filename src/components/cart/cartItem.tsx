import { Cart } from "@/types/cart";

export const CartItem = ({ item }: { item: Cart }) => {
  return (
    <div className="flex justify-between text-sm">
      <p>
        ({item.quantity}) {item.product.name}
      </p>
      <p>R${(item.product.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};
