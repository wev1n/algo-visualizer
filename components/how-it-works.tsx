import Link from "next/link";
import {
  KeyRound,
  MousePointerClick,
  Telescope,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";

export default function HowItWorks() {
  return (
    <section className="flex flex-col justify-center items-center text-center p-20">
      <h2 className="text-5xl font-bold">Explore Algorithms and Their Code</h2>
      <p className="py-12">
        Sign up and start visualizing algorithms and exploring their code with
        our step-by-step guide.
      </p>

      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center">
          <KeyRound className="h-12 w-12" />
          <h4 className="py-4 font-bold text-xl">Sign Up and Log In</h4>
          <span className="text-sm">
            Create an account and log in to access our algorithm visualization
            and code exploration features.
          </span>
        </div>
        <div className="flex flex-col items-center">
          <MousePointerClick className="h-12 w-12" />
          <h4 className="py-4 font-bold text-xl">
            Choose an Algorithm to Visualize
          </h4>
          <span className="text-sm">
            Browse our collection of algorithms and select one to visualize in
            an interactive way.
          </span>
        </div>
        <div className="flex flex-col items-center">
          <Telescope className="h-12 w-12" />
          <h4 className="py-4 font-bold text-xl">Explore the Code</h4>
          <span className="text-sm">
            Dive into the code used for the algorithm and gain a deeper
            understanding of how it works.
          </span>
        </div>
      </div>

      <div className="pt-12 flex gap-4">
        <Button variant="outline">Get Started</Button>
        <Link href="#" className="flex items-center gap-1">
          Learn more <ChevronRight />
        </Link>
      </div>
    </section>
  );
}
