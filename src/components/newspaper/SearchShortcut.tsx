"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function SearchShortcut() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        // Only handle Escape if they are in the search page input
        if (e.key === "Escape" && pathname === "/search") {
          e.preventDefault();
          (e.target as HTMLElement).blur();
          router.back();
        }
        return;
      }

      if (e.key === "/") {
        e.preventDefault();
        router.push("/search");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, pathname]);

  return null;
}
