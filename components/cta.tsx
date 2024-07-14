import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="p-20 bg-gray-200 w-full flex flex-col items-center justify-center gap-6">
      <h2 className="text-6xl font-bold">
        Explore and visualize algorithms here
      </h2>
      <p className="text-lg">
        Sign up or log in to start exploring and visualizing algorithms in an
        interactive way.
      </p>
      <div className="flex gap-6">
        <Link href="/sign-up">
          <Button size="lg">Sign Up</Button>
        </Link>
        <Link href="/login">
          <Button size="lg" variant="outline">
            Login
          </Button>
        </Link>
      </div>
    </section>
  );
}
