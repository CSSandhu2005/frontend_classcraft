import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container overflow-hidden">
        <div className="flex items-center gap-5">
          <div className="flex-1 text-nowrap md:flex-none">
            <h2>FrontEnd Magic Tech:</h2>
          </div>
          <div className="flex-1" >
            <div className="flex flex-none gap-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
              {[
                acmeLogo,
                pulseLogo,
                celestialLogo,
                apexLogo,
                quantumLogo,
                echoLogo,
              ].map((logo) => {
                return (
                  <img src={logo.src} key={logo.src} className="h-6 w-auto" />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
