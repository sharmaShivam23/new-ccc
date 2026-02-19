




import { cn } from "@/lib/utils";
import CCC from "../../images/CCC.png";
import { motion } from "framer-motion";
import Meteors from "./meteors";
import Particles from "./particles";
export default function OrbitingCircles({
  className,
  reverse,
  duration = 20,
  delay = 10,
  radius = 100,
  path = true
}) {
  return (
    <>
    {/* <Particles/> */}
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 w-full h-full"
        >
          {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 w-full h-full"
        >
          {/* First Circle with increased border width */}
          <circle
            className="stroke-gray-500 stroke-16 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            // style={{ strokeWidth: 3 }}
          />
          {/* Second Circle with increased border width */}
          <circle
            className="stroke-gray-600 stroke-8 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius + 100}
            fill="none"
            // style={{ strokeWidth: 3 }}
          />
          {/* Third Circle with increased border width */}
          <circle
            className="stroke-gray-700 stroke-8 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius + 200}
            fill="none"
            // style={{ strokeWidth: 3 }}
          />
          <circle
            className="stroke-gray-800 stroke-8 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius + 300}
            fill="none"
            // style={{ strokeWidth: 3 }}
          />
          {/* <circle
            className="stroke-gray-900 stroke-8 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius + 400}
            fill="none"
            // style={{ strokeWidth: 3 }}
          /> */}
        </svg>
      )}

        </svg>
      )}

  
      <div
        style={{
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay,
        }}
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full  [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        <span className="text-center text-xs dark:text-white z-40 font-bold text-white h-16 w-16 bg-rose-500 rounded-full flex justify-center items-center">
          Think
        </span>
      </div>

      <div
        style={{
          "--duration": duration,
          "--radius": radius + 100, 
          "--delay": -delay + 2, // Slight delay for "Develop"
        }}
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center  justify-center rounded-full  [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        <span className="text-center z-40 text-xs dark:text-white font-bold text-white h-16 w-16 bg-orange-400 rounded-full flex justify-center items-center">
          Develop
        </span>
      </div>

    
      {/* <div
        style={{
          "--duration": duration,
          "--radius": radius + 300, 
          "--delay": -delay + 4, 
        }}
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full  [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        <span className="text-center z-40 text-xs dark:text-white font-bold text-white h-10 w-10 bg-teal-300 rounded-full flex justify-center items-center hover:bg-white hover:text-black  hover:shadow-xl shadow-white transition-all cursor-pointer duration-1000 delay-0">
        </span>
      </div> */}
      <div
        style={{
          "--duration": duration,
          "--radius": radius + 200, 
          "--delay": -delay + 4, 
        }}
        className={cn(
          "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full  [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
          { "[animation-direction:reverse]": reverse },
          className
        )}
      >
        <span className="text-center z-40 text-xs dark:text-white font-bold text-white h-16 w-16 bg-violet-600 rounded-full flex justify-center items-center hover:bg-white hover:text-black  hover:shadow-xl shadow-white transition-all cursor-pointer duration-1000 delay-0">
          Deploy
        </span>
      </div>
      
      
      <div className="absolute flex items-center justify-center inset-0 z-10">
        <motion.div 
        >
        <img src={CCC} className="sm:h-28 h-14" alt="CCC" />
        </motion.div>
        
      </div>
    </>
  );
}

