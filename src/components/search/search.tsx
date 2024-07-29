import { fetchResultsBySearch } from "@/api/fetchapi";
import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Skeleton } from "../ui/skeleton";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debounce = <T extends (...args: any[]) => any>(
    fn: T,
    delay: number = 2000,
  ): ((...args: Parameters<T>) => void) => {
    let timerId: ReturnType<typeof setTimeout> | null = null;
    return (...args: Parameters<T>): void => {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), delay);
    };
  };

  useEffect(() => {
    setLoading(true);
    const debouncedFetchResults = debounce(async (query) => {
      const res = await fetchResultsBySearch(query);
      setResults(res.slice(0, 10));
      setLoading(false);
    }, 1000);

    debouncedFetchResults(searchQuery);
  }, [searchQuery]);

  console.log(results);

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
                <h3></h3>
                {results.map((result) => (
                  <CommandItem key={result.id} className="flex gap-2">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                      alt=""
                      className="h-20 object-scale-down"
                    />
                    <h1 className="text-xl text-foreground">
                      {result.name || result.title}
                    </h1>
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
