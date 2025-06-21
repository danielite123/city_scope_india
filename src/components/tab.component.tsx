"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

interface TabOption {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  options: TabOption[];
  value: string;
  onChange: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ options, value, onChange }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const activeContent = options.find(
    (option) => option.value === value
  )?.content;

  return (
    <div>
      {isMobile ? (
        <div className="relative mb-4">
          {" "}
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full pl-3 pr-10 py-2.5 text-base border border-gray-300 bg-white rounded-md focus:outline-none appearance-none transition-all duration-200"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown size={20} />
          </div>
        </div>
      ) : (
        <div className="border-b border-gray-200 mb-4">
          {" "}
          <nav
            className="-mb-px flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
            aria-label="Tabs"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => onChange(option.value)}
                className={`flex-shrink-0 py-3 px-1 border-b-2 font-medium text-sm transition-colors duration-200
                  ${
                    value === option.value
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      <div className="mt-6 w-full max-w-full overflow-x-hidden h-[250px]">
        {activeContent}
      </div>
    </div>
  );
};

export default Tabs;
