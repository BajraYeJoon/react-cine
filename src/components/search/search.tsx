import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { fetchResultsBySearch } from "@/api/fetchapi";
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Input } from "../ui/input";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Skeleton } from "../ui/skeleton";

interface Result {
  id: string;
  poster_path: string;
  name: string;
  title: string;
}

// Debounce function to limit the rate of API calls
const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 2000,
): ((...args: Parameters<T>) => void) => {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>): void => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
};

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const debouncedFetchResults = debounce(async (query: string) => {
      const res = await fetchResultsBySearch(query);
      setResults(res.slice(0, 10));
      setLoading(false);
    }, 1000);

    debouncedFetchResults(searchQuery);
  }, [searchQuery]);

  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon />
      </DialogTrigger>
      <DialogContent>
        <Command className="text-lg">
          <Input
            placeholder="Type a command or search..."
            value={searchQuery}
            className="rounded-none text-xl"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <CommandList>
            {loading ? (
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ) : results.length === 0 ? (
              <CommandEmpty>No results found.</CommandEmpty>
            ) : (
              <CommandGroup>
                {results.map((result) => (
                  <CommandItem key={result.id} className="group flex gap-2">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                      alt={result.name || result.title}
                      className="h-20 object-scale-down"
                    />
                    <Link to={`details/${result.id}`}>
                      <h1 className="text-xl text-foreground group-hover:underline">
                        {result.name || result.title}
                      </h1>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchComponent;