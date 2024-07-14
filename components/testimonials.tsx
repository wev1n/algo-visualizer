import Image from "next/image";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

export default function Testimonials() {
  return (
    <section className="flex justify-center items-center p-20">
      <Carousel className="w-full max-w-6xl">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col gap-6 items-center">
                <div className="flex gap-2">
                  <Star className="text-yellow-500 h-7 w-7" />
                  <Star className="text-yellow-500 h-7 w-7" />
                  <Star className="text-yellow-500 h-7 w-7" />
                  <Star className="text-yellow-500 h-7 w-7" />
                  <Star className="h-7 w-7" />
                </div>
                <h4 className="text-2xl font-bold text-center">
                  The website has been an invaluable resource for enhancing my
                  learning experience. The visualization of algorithms and data
                  structures has made complex concepts much easier to
                  understand.
                </h4>
                <div className="flex justify-center items-center gap-6">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h6 className="font-semibold">John Doe {index + 1}</h6>
                    <span className="text-sm">Software Engineer, ABC Corp</span>
                  </div>

                  <Separator orientation="vertical" className="h-20 mx-4" />

                  <div className="flex items-center gap-4">
                    <Image
                      src="/github.svg"
                      alt="hello"
                      width={40}
                      height={40}
                    />
                    <span className="text-lg">GitHub</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
