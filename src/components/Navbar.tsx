import { Logo } from "@/assets";
import { Input } from "./ui/input";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { Card } from "./ui/card";

const Navbar = () => {
  return (
    <Card className="flex justify-between items-center gap-4 px-10 py-2">
      <Logo />

      <Card className="flex justify-center items-center flex-[0.7]  px-4">
        <MagnifyingGlassIcon className="h-8 w-8" />
        <Input
          className="focus:outline-none border-none px-4 focus-visible:ring-offset-0 font-semibold text-lg focus-visible:ring-0 f"
          placeholder="Search Something!"
        />
      </Card>

      <UserCircleIcon className="h-8 w-8 cursor-pointer" />

      <ShoppingCartIcon className="h-8 w-8 cursor-pointer" />
    </Card>
  );
};

export default Navbar;
