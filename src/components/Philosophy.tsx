import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

// Simple hook to check visibility
const useOnScreen = (ref: React.RefObject<Element>, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);
  return isIntersecting;
};

const FadeIn = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, "-50px");
  
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        onScreen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Philosophy = () => {
  return (
    <section className="bg-stone-50 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          
          {/* Image Side */}
          <FadeIn className="relative aspect-[3/4] overflow-hidden bg-stone-200">
            <img 
              src="/images/philosophy-pour.jpg" 
              alt="Precision Pouring" 
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
            <div className="absolute -bottom-6 -right-6 z-10 hidden lg:block bg-stone-900 p-8 text-white">
              <span className="block text-4xl font-serif">24g</span>
              <span className="text-xs uppercase tracking-widest text-stone-400">Dose</span>
            </div>
          </FadeIn>

          {/* Text Side */}
          <div className="flex flex-col justify-center space-y-8">
            <FadeIn delay={200}>
              <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl leading-tight">
                Silence in <br/> every cup.
              </h2>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="h-[2px] w-12 bg-stone-900" />
            </FadeIn>

            <FadeIn delay={600}>
              <p className="text-lg font-light leading-relaxed text-stone-600">
                In the chaos of Tokyo, we built a sanctuary. Kōshū & Co. is not just a coffee shop; it is a study in subtraction. We removed the noise, the clutter, and the rush, leaving only what matters: the bean, the water, and the moment.
              </p>
            </FadeIn>

            <FadeIn delay={800}>
              <p className="text-lg font-light leading-relaxed text-stone-600">
                Our roasting philosophy favors clarity over intensity. We source single-origin beans that speak softly but carry a profound depth, brewed with mathematical precision to honor the farmer's labor.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
