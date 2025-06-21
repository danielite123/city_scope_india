"use client";

import SideNav from "@/components/sidenav.component";
import TopNav from "@/components/topnav.component";
import { validCities } from "@/constants/cities";
import OverView from "@/sessions/overview/overview-view";
import { useState } from "react";

export default function Overview() {
  const [city, setCity] = useState("Delhi");

  const handleSearch = (query: string) => {
    const normalized = query.trim().toLowerCase();
    const matchedCity = validCities.find((c) => c.toLowerCase() === normalized);

    if (matchedCity) {
      setCity(matchedCity);
    } else {
      setCity("");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex">
        <SideNav />
      </div>

      <div className="flex flex-col flex-1">
        <TopNav onSearch={handleSearch} />

        <main className="flex-1 p-4 overflow-auto">
          <h1 className="text-xl font-semibold">Dashboard Overview</h1>
          <OverView city={city} />
        </main>
      </div>
    </div>
  );
}
