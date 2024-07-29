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
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const debounce = (fn, delay = 1000) => {
    let timerId = null;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), delay);
    };
  };

  useEffect(() => {
    (async () => {
      const res = await fetchResultsBySearch(searchQuery);
      setResults(res);
    })();
  }, [searchQuery]);

  console.log(results);

  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon />
      </DialogTrigger>
      <DialogContent>
        <Command>
          <Input
            placeholder="Type a command or search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <CommandList>
            {results.length === 0 ? (
              <CommandEmpty>No results found.</CommandEmpty>
            ) : (
              <CommandGroup heading="Search Results">
                {results.map((result) => (
                  <CommandItem key={result.id} className="flex gap-2">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                      alt=""
                      className="h-12 object-scale-down"
                    />
                    <h1>{result.name}</h1>
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
