import Link from "next/link";

import { GlobeIcon, Command, SunIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-background py-4 border-b-2 shadow-lg">
      <div className="container grid grid-cols-3 items-center">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Command className="h-6 w-6" />
            <span className="text-lg font-bold">Acme Inc</span>
          </Link>
        </div>
        <nav className="flex justify-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            Algorithm Visualizer
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            Pathfinder
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            FAQ
          </Link>
        </nav>
        <div className="flex items-center justify-end gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <SunIcon className="h-5 w-5" />
                <span className="sr-only">Toggle dark mode</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Light</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Dark</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>System</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <GlobeIcon className="h-5 w-5" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Svenska</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Separator orientation="vertical" decorative className="h-6 mx-3" />
          <Button size="lg">Login</Button>
        </div>
      </div>
    </nav>
  );
}
