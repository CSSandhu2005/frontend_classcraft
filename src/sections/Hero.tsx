import { Button } from "@/components/Button";
import { SparklesCore } from "@/components/ui/sparkles";

export const Hero = () => {
  return (
    <section className="h-[80vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_90%,transparent)]">
      {/* Stars BackGround  */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* Stars BackGround End Here  */}

      {/* Planet Starts */}
      <div className="absolute h-[250px] w-[250px] md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* Planet Ends */}

      {/* First Ring Starts */}
      <div className="absolute h-[375px] w-[375px] md:h-[575px] md:w-[575px] opacity-20 rounded-full border border-white top-2/2 left-1/2 -translate-x-1/2 -translate-y-2/2">
        <div className="h-2 w-2 bg-white absolute top-1/2 left-0 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-2 w-2 bg-white absolute top-0 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-5 w-5 border border-white absolute top-1/2 left-full rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* First Ring Ends */}

      {/* Middle Ring Starts */}
      <div className="absolute h-[475px] w-[475px] md:h-[780px] md:w-[780px] opacity-20 rounded-full border border-white/70 top-2/2 left-1/2 -translate-x-1/2 -translate-y-2/2"></div>
      {/* Middle Ring Ends */}

      {/* OuterMost Ring Starts */}
      <div className="absolute h-[635px] w-[635px] md:h-[1000px] md:w-[1000px] opacity-20 rounded-full border border-white/70 top-2/2 left-1/2 -translate-x-1/2 -translate-y-2/2">
        <div className="h-2 w-2 bg-white absolute top-1/2 left-0 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-2 w-2 bg-white absolute top-1/2 left-full rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/* OuterMost Ring Ends */}


      <div className="container relative">
        <h1 className="text-5xl md:text-[124px] md:leading-none text-wrap font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center mt-16">
          ClassCraft AI
        </h1>
        <p className="text-center md:text-2xl text-lg text-white/70 mt-2 max-w-xl mx-auto">
          AI Content Generation And Automation Suite - Kroolo Labs Company Track
          Problem StateMent .
        </p>
        <div className="flex justify-center mt-7">
          <Button>Enter Now</Button>
        </div>
      </div>
    </section>
  );
};
