"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export function MapSearchBox({ defaultQuery = "" }: { defaultQuery?: string }) {
  const [query, setQuery] = useState(defaultQuery);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/world-map?country=${encodeURIComponent(query.trim())}`, { scroll: false });
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex border-b-2 border-ink">
      <input
        type="text"
        placeholder="Search country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-transparent p-3 outline-none ui-text text-lg placeholder:text-ink/40"
      />
      <button type="submit" aria-label="Search country" title="Search country" className="p-3 text-ink hover:text-accent transition-colors">
        <Search size={24} />
      </button>
    </form>
  );
}
