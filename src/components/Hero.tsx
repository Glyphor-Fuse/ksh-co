import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-950 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-interior.jpg" 
          alt="Kōshū & Co. Interior" 
          className={`h-full w-full object-cover transition-transform duration-[2000ms] ease-out ${loaded ? 'scale-100' : 'scale-105'}`}
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className={`font-serif text-5xl tracking-tighter sm:text-7xl md:text-9xl transition-all duration-1000 ease-out ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          KŌSHŪ & CO.
        </h1>
        <p className={`mt-6 max-w-lg text-sm font-light tracking-[0.2em] uppercase text-stone-200 sm:text-base transition-all delay-300 duration-1000 ease-out ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Tokyo Minimalism • Precision Brewing
        </p>
        
        <div className={`mt-10 transition-all delay-500 duration-1000 ease-out ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Button 
            variant="outline" 
            className="h-12 border-white bg-transparent px-8 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black rounded-none"
          >
            Experience The Ritual
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-16 w-[1px] bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
