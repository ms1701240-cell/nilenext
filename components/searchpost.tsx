'use client';
import { useQueryState, parseAsInteger } from "nuqs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Searchpost() {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
      <Input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value || null);
          setPage(1); 
        }}
        className="max-w-sm"
      />

      
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          السابق
        </Button>
        <span className="text-sm font-medium text-slate-700">
          صفحة {page}
        </span>
        <Button
          variant="outline"
          onClick={() => setPage(page + 1)}
        >
          التالي
        </Button>
      </div>
    </div>
  );
}