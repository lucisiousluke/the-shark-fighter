import { Link } from "gatsby";
import * as React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

const SiteFooter = () => {
  return (
    <footer className="mt-20">
      <div class="mx-auto border-t border-gray-300 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 border-gray-300 md:border-l divide-gray-300 leading-7 font-extralight">
          <div className="py-10 border-b md:border-b-0 md:border-r">
            <h2 className="text-2xl mb-4 text-slate-500">Contact</h2>
            <p>Luke Hinrichs</p>
            <p>
              <Link
                href="mailto:luke.hinrichs@gmail.com"
                className="text-cyan-500 hover:underline"
              >
                luke.hinrichs@gmail.com
              </Link>
            </p>
            <p>303.396.9904</p>
            <p>Denver, CO</p>
          </div>
          <div className="py-10">
            <h2 className="text-2xl mb-4 text-slate-500">Follow Me</h2>
                <SocialMediaIcons />
          </div>
        </div>
      </div>

      <section className="mx-auto text-white font-extralight bg-cyan-500 py-3 ">
        <div className="container mx-auto px-4 text-center">
          <p>Copywrite 2023 The Shark Fighter</p>
        </div>
      </section>
    </footer>
  );
};

export default SiteFooter;
