import { CartSideBar } from "./cart/sideBar";
import { Logo } from "./logo";
import { ModeToggle } from "./modeToggle";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 mx-3">
      <div className="flex gap-3 items-center">
        <Logo />
        <ModeToggle />
      </div>
      <div className="flex gap-3 items-center">
        <CartSideBar />
      </div>
    </header>
  );
};
