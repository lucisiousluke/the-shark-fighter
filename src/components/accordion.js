import React, { useState } from "react";
import { PortableText } from "@portabletext/react";

const Accordion = ({ title, body }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg mb-3 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-slate-700 hover:bg-slate-50 transition rounded-t-lg ${open ? "" : "rounded-b-lg"}`}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 text-cyan-500 transition-transform duration-200 flex-shrink-0 ml-4 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="px-5 pt-4 pb-5 text-slate-600 bg-slate-50 rounded-b-lg">
          <PortableText
            value={body}
            components={{
              block: {
                normal: ({ children }) => <p className="font-thin text-base/8">{children}</p>,
                h3: ({ children }) => <h3 className="text-xl font-thin mt-4">{children}</h3>,
              },
              list: {
                bullet: ({ children }) => <ul className="font-thin ml-4 list-disc mb-4 mt-2">{children}</ul>,
              },
              listItem: {
                bullet: ({ children }) => <li className="mt-2">{children}</li>,
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Accordion;
