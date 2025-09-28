"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes"
import { cn } from "@/lib/utils";

export const CallToAction = () => {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-[#8c44ff] flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        ClassCraft AI 2025 
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Changes How Teacher And Students Interact With Each Other.
      </p>
    </div>
  );
};

// <section className="py-16">
//   <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">

//     <div className="z-1">
//       <div className="text-center">
//         <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
//           Start Using ClassCraft AI
//         </h2>
//         <p className="mt-4">The Future Of Tech & Academics Has Arrived.</p>

//         <div className="mt-12 flex flex-wrap justify-center gap-4">
//           <Button asChild size="lg">
//             <Link href="/">
//               <span>Get Started</span>
//             </Link>
//           </Button>

//           <Button asChild size="lg" variant="secondary">
//             <Link href="/">
//               <span>Book Demo</span>
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
