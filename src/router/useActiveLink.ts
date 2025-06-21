// src/hooks/useActiveLink.ts
"use client";

import { usePathname } from "next/navigation";

export function useActiveLink(path: string, exact: boolean = false): boolean {
  const pathname = usePathname();

  if (exact) {
    return pathname === path;
  }

  if (path === "/") {
    return pathname === path;
  }

  return pathname.startsWith(path);
}
