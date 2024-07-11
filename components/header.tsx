"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "./ui/carousel";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Dot } from "lucide-react";

export default function Header() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <header className="grid grid-cols-2 pt-10 py-12">
      <div className="flex flex-col justify-center p-16">
        <h1 className="text-7xl font-bold">
          Visualize algorithms and data structures with ease 🙌
        </h1>
        <p className="text-md my-6">
          Welcome to our website, where you can easily visualize algorithms and
          data structures. Whether you are a student, developer, or simply
          curious, we provide a user-friendly platform to explore and understand
          these concepts.
        </p>
        <div>
          <Button className="mr-4">Sign Up</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Carousel
          className="w-full h-full max-w-2xl shadow-2xl"
          setApi={setApi}
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 8000,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <Image
                    src="/popsy/keynote-presentation.svg"
                    alt="keynote-presentation.svg"
                    width={400}
                    height={400}
                    className="bg-gray-200 w-full"
                  />
                  <div className="p-8">
                    <h3 className="text-4xl font-semibold py-4">
                      Explore Algorithm Visualizations
                    </h3>
                    <span>
                      Discover the power of visual learning with our interactive
                      algorithm demonstrations.
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between w-full px-6">
            <div className="flex items-center gap-2 p-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 ${
                    current === index ? "bg-purple-600" : "bg-gray-500"
                  } rounded-full`}
                />
              ))}
            </div>

            <div className="flex gap-4 p-6">
              <Button
                className="h-12 w-12 rounded-full shadow-sm"
                variant="outline"
                size="icon"
                onClick={() => api?.scrollTo(current - 1)}
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                className="h-12 w-12 rounded-full"
                variant="outline"
                size="icon"
                onClick={() => api?.scrollTo(current + 1)}
              >
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
    </header>
  );
}
