import React from "react";
import { assets } from "../assets/assets";
import { Repeat, BadgeCheck, Headphones } from "lucide-react";

const OurPolicy = () => {
  return (
    <div className="flex flex-col justify-around gap-12 py-20 text-xs text-center text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base">
      <div className="text-center">
        <Repeat className="w-12 h-12 mx-auto mb-4 text-black dark:text-white" />
        <p className="font-semibold text-gray-700 dark:text-white">
          Easy Exchange Policy
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          We offer hassle free exchange policy
        </p>
      </div>

      <div className="text-center">
        <BadgeCheck className="w-12 h-12 mx-auto mb-4 text-black dark:text-white" />
        <p className="font-semibold text-gray-700 dark:text-white">
          7 Days Return Policy
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          We provide 7 days free return policy
        </p>
      </div>

      <div className="text-center">
        <Headphones className="w-12 h-12 mx-auto mb-4 text-black dark:text-white" />
        <p className="font-semibold text-gray-700 dark:text-white">
          Best Customer Support
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          We provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
