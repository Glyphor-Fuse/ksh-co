import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Espresso Tonic",
    description: "Ethiopian Yirgacheffe, Fever-Tree tonic, rosemary sprig. A bright, effervescent awakening.",
    price: "¥1,200",
    image: "/images/menu-tonic.jpg"
  },
  {
    id: 2,
    name: "Silk Flat White",
    description: "Double ristretto, micro-foam milk steamed to 60°C. Velvet texture with caramel notes.",
    price: "¥900",
    image: "/images/menu-latte.jpg"
  },
  {
    id: 3,
    name: "Kyoto Cold Brew",
    description: "Slow-drip extraction over 12 hours. Wine-like body, chocolate finish, served over hand-carved ice.",
    price: "¥1,100",
    image: "/images/menu-coldbrew.jpg"
  },
  {
    id: 4,
    name: "Ceremonial Matcha",
    description: "Uji premium grade, whisked to order. Served with seasonal wagashi.",
    price: "¥1,400",
    image: "/images/menu-matcha.jpg"
  }
];

const SignatureMenu = () => {
  return (
    <section className="bg-stone-900 py-32 text-stone-100">
      <div className="container mx-auto px-4">
        <div className="mb-24 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500">The Collection</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Seasonal Signatures</h2>
        </div>

        <div className="space-y-32">
          {MENU_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col gap-12 lg:flex-row lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} group`}
            >
              {/* Image Card */}
              <div className="flex-1">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-800 lg:aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>
              </div>

              {/* Text Card */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mx-auto max-w-md lg:mx-0">
                  <div className="mb-6 flex items-baseline justify-center gap-4 lg:justify-start">
                    <h3 className="font-serif text-3xl italic">{item.name}</h3>
                    <span className="h-[1px] w-12 bg-stone-700" />
                    <span className="font-mono text-lg text-stone-400">{item.price}</span>
                  </div>
                  <p className="text-lg font-light leading-relaxed text-stone-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureMenu;
