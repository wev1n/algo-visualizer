import Link from "next/link";
import { Command } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="flex flex-col p-20">
      <div className="flex justify-between pt-10">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Command className="h-6 w-6" />
            <span className="text-lg font-bold">Acme Inc</span>
          </Link>
        </div>

        <nav className="flex gap-6">
          <Link href="#">About Us</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Blog</Link>
        </nav>

        <nav className="flex gap-4">
          <Link href="#">
            <Image
              src="facebook.svg"
              alt="facebook.svg"
              width={20}
              height={20}
            />
          </Link>
          <Link href="#">
            <Image
              src="instagram.svg"
              alt="instagram.svg"
              width={20}
              height={20}
            />
          </Link>
          <Link href="#">
            <Image src="x.svg" alt="x.svg" width={20} height={20} />
          </Link>
          <Link href="#">
            <Image
              src="linkedin.svg"
              alt="linkedin.svg"
              width={20}
              height={20}
            />
          </Link>
          <Link href="#">
            <Image src="youtube.svg" alt="youtube.svg" width={20} height={20} />
          </Link>
        </nav>
      </div>

      <Separator className="w-full mt-20" />

      <div className="flex gap-6 pt-10">
        <span className="text-sm">
          © 2024 Algorithm Visualizer. All rights reserved.
        </span>
        <Link href="#" className="text-sm underline">
          Privacy Policy
        </Link>
        <Link href="#" className="text-sm underline">
          Terms and Conditions
        </Link>
        <Link href="#" className="text-sm underline">
          Cookie Policy
        </Link>
      </div>
    </footer>
  );
}
