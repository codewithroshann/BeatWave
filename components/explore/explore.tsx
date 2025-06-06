"use client";
import React, { useEffect, useState } from "react";
import BeatList from "@/components/beat-list";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";
import { BeatCard } from "../beat-card";
import { useDispatch } from "react-redux";
import { setAlert, clearAlert } from "@/redux/slices/AlertReducer";
import { Filter, X } from "lucide-react";
import Link from "next/link";
import FilterButton from "@/components/FilterButton";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterState {
  genre: string;
  bpmRange: [number, number];
}

const explore = () => {
  const dispatch = useDispatch();

  const [visibleCount, setVisibleCount] = useState(10);
  const [value, setValue] = useState("");
  const [searchBeats, setSearchBeats] = useState<any>([]);
  const [filters, setFilters] = useState<FilterState>({
    genre: "",
    bpmRange: [60, 200],
  });
  console.log(filters);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const GENRES = [
    "Hip Hop",
    "Trap",
    "R&B",
    "Pop",
    "Drill",
    "Afrobeat",
    "Jazz",
    "Lo-Fi",
    "Electronic",
    "Rock",
  ];

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };
  //Handle Search
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL+`get/${value}`, {
        method: "GET",
        cache: "no-store",
      });
      if (response.ok) {
        const data = await response.json();

        setSearchBeats(data.beat);
      }

      if (!response.ok) {
        const data = await response.json();
        if (data.message) {
          dispatch(setAlert({ message: "Beat Not Found !", type: "error" }));
        }
      }
    } catch (error) {
      console.error("Failed to fetch beats", error);
    }
    setTimeout(() => {
      dispatch(clearAlert());
    }, 2500);
  };

  //Handle Filter

  const handleBpmChange = (value: number[]) => {
    setFilters((prev) => ({
      ...prev,
      bpmRange: [value[0], value[1]],
    }));
  };

  const applyFilters = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL+`/filter/genre=${filters.genre || "none"}/bpm=${
          filters.bpmRange || "none"
        }`,
        {
          method: "GET",
          cache: "no-store",
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSearchBeats(data);
      }

      if (!response.ok) {
        const data = await response.json();
        if (data.message) {
          dispatch(setAlert({ message: "Beat Not Found !", type: "error" }));
        }
      }
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      dispatch(clearAlert());
    }, 2500);
  };

  const clearFilters = () => {
    const clearedFilters = {
      genre: "",
      bpmRange: [60, 200] as [number, number],
    };
    setFilters(clearedFilters);
    {window.location.reload()}
  };

  const HandleDropdown = () => {
    if (isFilterOpen == true) {
      setIsFilterOpen(false);
    } else {
      setIsFilterOpen(true);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-8">
        <form
          onSubmit={handleSubmit}
          className="border-2 border-[gray]  flex items-center bg-zinc-700/50 rounded-md "
        >
          <input
            type="text"
            list="ganre"
            name="search"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Search Track Names..."
            className="mr-2 p-4 outline-none max-w-[250px] sm:min-w-[400px]  bg-transparent"
          />

          <button
            type="submit"
            className="py-4 px-5 hover:bg-primary/70 duration-100 border-2 border-solid border-primary bg-primary rounded-md"
          >
            <FaSearch className="h-5 w-5 text-white" />
          </button>
        </form>
      </div>
      <div className="flex jusitfy-end items-center mt-4 gap-2 relative cursor-pointer">
        <div
          className="flex px-3 py-2 border-2 border-zinc-700 rounded-md hover:bg-zinc-800  duration-100 items-center"
          onClick={HandleDropdown}
        >
          <Filter className="w-4 h-4 mr-2" />
          <span className="text-sm">Filter Beats</span>
        </div>
      </div>
      {/* Filter Dropdown */}
      <div
        className={`max-w-[400px] cursor-pointer ${
          isFilterOpen ? "block" : "hidden"
        } absolute z-50 bg-zinc-900   py-2 px-3  border-2 border-zinc-700 rounded-md  mt-2  duration-100`}
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-sm mb-3">Filter Beats</h3>
          <Button
            variant="outline"
            className="border-zinc-700 border-2 w-4 h-6"
            onClick={HandleDropdown}
          >
            <X />
          </Button>
        </div>

        <div className="mb-3 ">
          <h3 className="font-bold text-sm mb-2">Genre</h3>
          <Select
            name="genre"
            onValueChange={(e) => setFilters((prev) => ({ ...prev, genre: e }))}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select genre" />
            </SelectTrigger>
            <SelectContent className="duration-100">
              {GENRES.map((genre) => {
                return (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        {/* BPM Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">BPM Range</Label>
          <div className="px-2">
            <Slider
              value={filters.bpmRange}
              onValueChange={handleBpmChange}
              min={60}
              max={200}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>{filters.bpmRange[0]} BPM</span>
              <span>{filters.bpmRange[1]} BPM</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <Label htmlFor="min-bpm" className="text-xs">
                Min BPM
              </Label>
              <Input
                id="min-bpm"
                type="number"
                value={filters.bpmRange[0]}
                onChange={(e) =>
                  handleBpmChange([
                    Number.parseInt(e.target.value) || 60,
                    filters.bpmRange[1],
                  ])
                }
                min={60}
                max={200}
                className="h-8"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="max-bpm" className="text-xs">
                Max BPM
              </Label>
              <Input
                id="max-bpm"
                type="number"
                value={filters.bpmRange[1]}
                onChange={(e) =>
                  handleBpmChange([
                    filters.bpmRange[0],
                    Number.parseInt(e.target.value) || 200,
                  ])
                }
                min={60}
                max={200}
                className="h-8"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <Button onClick={clearFilters} variant="outline" className="flex-1">
            Clear Filters
          </Button>
          <Button onClick={applyFilters} className="flex-1">
            Apply Filters
          </Button>
        </div>
      </div>

      <div className=" flex flex-col w-full">
        <div className=" mt-5 mb-10">
          {searchBeats == null || searchBeats.length === 0 ? (
            <BeatList count={visibleCount} />
          ) : (
            <>
              <div className="grid grid-cols-2 beat-container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 sm:gap-5">
                {searchBeats
                  .slice(0, visibleCount)
                  .reverse()
                  .map((beat: any, index: number) => (
                    <BeatCard key={index} beat={{ ...beat, visibleCount }} />
                  ))}
              </div>
            </>
          )}
        </div>

        <Button
          type="button"
          className="focus:outline-none w-[150px] mt-8 self-center text-white bg-primary hover:bg-primary/70 rounded-lg  px-5 py-2.5 mb-2 dark:bg-primary dark:hover:bg-primary/70 duration-200 dark:focus:ring-primary"
          onClick={loadMore}
        >
          Load More
        </Button>
      </div>
    </>
  );
};

export default explore;
