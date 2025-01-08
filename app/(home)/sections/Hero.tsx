import { CustomButton } from "@/components/CustomButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* ribbon 1 */}
        <svg
          width="777"
          height="192"
          viewBox="0 0 777 192"
          fill="none"
          className="absolute bottom-0 left-0 z-0"
        >
          <defs>
            <path
              id="curve1"
              d="M7 33.6776C22.823 24.9424 80.0525 8.78236 182.386 14.0235C310.303 20.5749 478.896 109.327 521.665 135.224C643.086 208.745 707.045 166.282 776 171.257"
            />
            {/* Filter for white glow effect */}
            <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feFlood floodColor="white" result="color" />
              <feComposite in="color" in2="blur" operator="in" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>

          {/* White ribbon background */}
          <path
            d="M7 33.6776C22.823 24.9424 80.0525 8.78236 182.386 14.0235C310.303 20.5749 478.896 109.327 521.665 135.224C643.086 208.745 707.045 166.282 776 171.257"
            stroke="#f0f0f0"
            strokeWidth="25"
            filter="url(#glow1)"
          />

          {/* Text along the path */}
          <text className="font-medium">
            <textPath
              href="#curve1"
              startOffset="0%"
              className="fill-gray-600 animate-marquee"
            >
              Explore Now! Explore Now! Explore Now! Explore Now! Explore Now!
              Explore Now! Explore Now!
            </textPath>
          </text>
        </svg>

        <svg
          width="1000"
          height="400"
          viewBox="0 0 600 376"
          fill="none"
          className="hidden md:block absolute md:bottom-[10%] md:-right-[85%] xl:bottom-16 2xl:bottom-20  xl:-right-48 2xl:right-0 z-0"
        >
          <defs>
            <path
              id="curve2"
              d="M11 430C21.2609 414.172 42.2851 369.972 44.2954 319.792C46.8083 257.067 21.0515 79.4442 173.08 38.4093C294.702 5.58129 620.369 11.4434 768 18.478"
            />
            <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feFlood floodColor="white" result="color" />
              <feComposite in="color" in2="blur" operator="in" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>

          <path
            d="M11 430C21.2609 414.172 42.2851 369.972 44.2954 319.792C46.8083 257.067 21.0515 79.4442 173.08 38.4093C294.702 5.58129 620.369 11.4434 768 18.478"
            stroke="#f0f0f0"
            strokeWidth="25"
            filter="url(#glow2)"
          />

          <text className="text-[16px] font-medium">
            <textPath href="#curve2" startOffset="0%" className="fill-gray-600">
              Explore Now! Explore Now! Explore Now! Explore Now! Explore Now!
              Explore Now! Explore Now! Explore Now! Explore Now! Explore Now!
              Explore Now! Explore Now! Explore Now! Explore Now! Explore Now!
              Explore Now! Explore Now! Explore Now!
            </textPath>
          </text>
        </svg>

        <div className="container mx-auto px-4 h-screen">
          <div className="pt-32 lg:pt-64">
            <div className="max-w-screen-md flex flex-col gap-2 px-8 lg:px-0">
              <h1 className="text-2xl md:text-4xl">
                Timeless Living,
                <br />
                Backed by Science
              </h1>
              <p className="text-sm md:text-base max-w-sm leading-tight text-gray-600">
                CellScience Biotech, a cell health company that targets cellular
                health through mitochondrial health and enhances longevity.
              </p>
              <div>
                <Button className="hidden lg:flex bg-black text-white py-2 px-4 text-sm rounded-md font-medium items-center gap-2">
                  KNOW MORE <span className="text-sm">→</span>
                </Button>
                <CustomButton className="lg:hidden">KNOW MORE</CustomButton>
              </div>
            </div>
          </div>
          {/* Left Side */}
          <div className="absolute left-auto lg:left-1/4 bottom-0 w-full xl:w-1/2 min-h-[45vh] md:min-h-[65vh] md:translate-x-12  lg:min-h-[80vh]">
            <Image
              src="/hero.png"
              alt="Dr. Dhruva Krishnan"
              fill
              className=" lg:object-top "
              priority
            />
          </div>

          <div className="hidden xl:-translate-x-32 2xl:-translate-x-0 xl:float-end md:flex flex-col justify-between gap-10 md:gap-40  md:ps-8 xl:translate-y-32 2xl:translate-y-32 md:pt-64 xl:pt-0">
            <div className="max-w-52 2xl:max-w-xs">
              <p className="text-lg md:text-2xl 2xl:text-3xl tracking-tight">
                Even though we are unique, we all aspire to be our{" "}
                <span className="text-teal-500">best.</span>
              </p>
              <div className="hidden lg:block pt-4">
                <CustomButton>KNOW MORE</CustomButton>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 lg:left-auto lg:right-4 md:bottom-10 md:right-10 bg-gradient-to-r bg-teal-500/10  rounded-md p-2 flex items-center gap-2 w-fit">
          <div className="text-teal-500 rounded-md px-2 py-1 text-xs md:text-lg font-bold">
            #1
          </div>

          <div className="flex flex-col ">
            <p className="text-xs md:text-sm">Doctor Recommended</p>
            <p className="text-xs md:text-sm text-gray-700">SIMPLY GENIUS</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
