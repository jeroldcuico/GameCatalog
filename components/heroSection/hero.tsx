import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CirclePlay,
  Gamepad2Icon,
  ShoppingBasketIcon,
} from "lucide-react";
import { BackgroundPattern } from "./background-pattern";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Vapour
        </h1>
        <div className="mt-4 flex gap-1.5 items-center justify-center text-lg md:text-xl">
          <Badge className="bg-blue-500 text-white">View</Badge>
          <Badge className="bg-amber-500 text-white">Access</Badge>
          <Badge className="bg-red-500 text-white">Play</Badge>
          <Badge>Organize</Badge>
          <Badge>Unite</Badge>
          <Badge>Recommend</Badge>
        </div>
        <p className="mt-6 text-[17px] md:text-lg">
          Level Up Your Library - Steam, Epic & Beyond. The Game Hub That
          Connects It All.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Purchase Here
            <ShoppingBasketIcon className="!h-5 !w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <Gamepad2Icon className="!h-5 !w-5" /> Game Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
