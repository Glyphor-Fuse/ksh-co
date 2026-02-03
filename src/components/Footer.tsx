import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-stone-950 px-4 py-20 text-white">
      <div className="container mx-auto grid gap-12 md:grid-cols-3">
        
        <div className="space-y-6">
          <h4 className="font-serif text-2xl">Kōshū & Co.</h4>
          <p className="text-sm font-light text-stone-400">
            A minimalist coffee sanctuary in the heart of Tokyo. <br/>
            Design. Precision. Peace.
          </p>
        </div>

        <div className="space-y-6">
          <h5 className="text-xs font-bold uppercase tracking-widest text-stone-500">Location</h5>
          <address className="not-italic text-sm font-light text-stone-300">
            1-23-4 Aoyama, Minato-ku<br/>
            Tokyo, Japan 107-0062<br/>
            <br/>
            <a href="mailto:hello@koshu.co.jp" className="hover:text-white transition-colors">hello@koshu.co.jp</a>
          </address>
        </div>

        <div className="space-y-6">
          <h5 className="text-xs font-bold uppercase tracking-widest text-stone-500">Hours</h5>
          <ul className="text-sm font-light text-stone-300 space-y-2">
            <li className="flex justify-between max-w-[200px]">
              <span>Mon - Fri</span>
              <span>08:00 - 18:00</span>
            </li>
            <li className="flex justify-between max-w-[200px]">
              <span>Sat - Sun</span>
              <span>09:00 - 19:00</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-20 border-t border-stone-800 pt-8 text-center text-xs text-stone-600">
        &copy; {new Date().getFullYear()} Kōshū & Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
