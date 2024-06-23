import { Logo } from "@/assets";
import { Input } from "./ui/input";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { Card } from "./ui/card";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <Card className="flex items-center justify-between gap-4 px-10 py-2 bg-primary">
      <Logo />

      <Card className="flex justify-center items-center flex-[0.7]  px-4">
        <MagnifyingGlassIcon className="w-8 h-8" />
        <Input
          className="px-4 text-lg font-semibold border-none focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0 f"
          placeholder="Search Something!"
        />
      </Card>

      <div className="flex items-center gap-4 bg-orange-600 px-4 py-2 rounded-xl drop-shadow-lg cursor-pointer">
        <UserCircleIcon className="w-8 h-8 cursor-pointer" />
        <label className="cursor-pointer" htmlFor="">Aditya Vishwakarma</label>
      </div>
      <ModeToggle />
      <ShoppingCartIcon className="w-8 h-8 cursor-pointer" />
    </Card>
  );
};

export default Navbar;
