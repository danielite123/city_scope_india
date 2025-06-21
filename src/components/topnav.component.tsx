"use client";

import { Search, Sun, Moon } from "lucide-react";
import { Input } from "./input.component";
import { useTheme } from "@/context/theme-provider";
import { useState } from "react";

interface TopNavProps {
  onSearch: (query: string) => void;
}

export default function TopNav({ onSearch }: TopNavProps) {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="h-[80px] w-full border-b border-gray-100 p-5 flex items-center justify-between">
      <div className="flex flex-row gap-8 items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm text-gray-400">
            Explore India&apos;s city metrics.
          </p>
        </div>

        <div className="hidden md:flex">
          <Input
            icon={Search}
            placeholder="Search any city"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
      </div>

      <div className="flex flex-row gap-5">
        <div className="flex md:hidden">
          <Search strokeWidth={1.75} />
        </div>

        <button
          onClick={toggleTheme}
          className="p-1 rounded-md border border-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-gray-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
}
