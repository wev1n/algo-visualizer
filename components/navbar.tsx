import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-around items-center h-20 border-b-slate-800 border-b-2">
      <Image src="logo.svg" alt="logo" width={160} height={160} />

      <div className="flex">
        <ul className="gap-6 flex items-center pr-6">
          <Link href={""}>Algorithm Visualizer</Link>
          <Link href={""}>Pathfinder</Link>
          <Link href={""} className="flex gap-1">
            More
            <ChevronDown />
          </Link>
        </ul>

        <div>
          <Button className="mr-4" variant="outline">
            Sign Up
          </Button>
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
