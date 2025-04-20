import { Badge } from "@/components/ui/badge";
import { Gamepad2Icon, ShoppingBasketIcon } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";

const Hero = () => {
  return (
    <>
      <section className="min-h-[50vh] flex flex-col items-center justify-center px-6">
        <BackgroundPattern />
        <div className="relative z-10 text-center max-w-2xl mt-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            Vapour
          </h1>
          <div className="mt-8 md:mt-4 flex flex-wrap gap-1.5 items-center justify-center text-lg md:text-xl">
            <Badge className="bg-blue-500 text-white">View</Badge>
            <Badge className="bg-amber-500 text-white">Access</Badge>
            <Badge className="bg-red-500 text-white">Play</Badge>

            <div className="w-full flex justify-center gap-1.5 sm:w-auto">
              <Badge>Organize</Badge>
              <Badge>Unite</Badge>
              <Badge>Recommend</Badge>
            </div>
          </div>
          <p className="mt-6 text-[17px] md:text-lg">
            Level Up Your Library - Steam, Epic & Beyond. The Game Hub That
            Connects It All.
          </p>
          {/* <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            href={"/platforms"}
            className="inline-flex items-center justify-center rounded-full bg-black text-white px-4 py-2 text-base font-medium hover:bg-slate-700 transition duration-200"
          >
            Store
            <ShoppingBasketIcon className="!h-5 !w-5" />
          </Link>
          <Link
            href={"/allgames"}
            className="inline-flex items-center justify-center rounded-full bg-red-500 text-white px-4 py-2 text-base font-medium hover:bg-red-600 transition duration-200"
          >
            <Gamepad2Icon className="!h-5 !w-5" /> Browse Games
          </Link>
        </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
