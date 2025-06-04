"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Filter, X } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"

interface FilterState {
  genres: string[]
  bpmRange: [number, number]

}

const GENRES = ["Hip Hop", "Trap", "R&B", "Pop", "Drill", "Afrobeat", "Jazz", "Lo-Fi", "Electronic", "Rock"]

export default function FilterButton() {
  const [filters, setFilters] = useState<FilterState>({
    genres: [],
    bpmRange: [60, 200]
  })

  const [tempFilters, setTempFilters] = useState<FilterState>(filters)

  const handleGenreChange = (genre: string, checked: boolean) => {
    setTempFilters((prev) => ({
      ...prev,
      genres: checked ? [...prev.genres, genre] : prev.genres.filter((g) => g !== genre),
    }))
  }

  const handleBpmChange = (value: number[]) => {
    setTempFilters((prev) => ({
      ...prev,
      bpmRange: [value[0], value[1]],
    }))
  }


  const applyFilters = () => {
    setFilters(tempFilters)
 
  }

  const clearFilters = () => {
    const clearedFilters = {
      genres: [],
      bpmRange: [60, 200] as [number, number],
   
    }
    setTempFilters(clearedFilters)
    setFilters(clearedFilters)
  }

  const hasActiveFilters =
    filters.genres.length > 0 ||
    filters.bpmRange[0] !== 60 ||
    filters.bpmRange[1] !== 200


  const activeFilterCount =
    (filters.genres.length > 0 ? 1 : 0) +
    (filters.bpmRange[0] !== 60 || filters.bpmRange[1] !== 200 ? 1 : 0)

  return (
    <div className="flex justify-end items-center mt-3 gap-2 ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild >
          <Button variant="outline" className="relative  border-zinc-700 border-2">
            <Filter className="w-4 h-4 mr-2" />
            Filter Beats
            {activeFilterCount > 0 && (
              <Badge
                variant="secondary"
                className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {activeFilterCount}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 p-4 mr-8 mt-2" align="start">
          <div className="space-y-6 ">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Filter Beats</h3>
        
            </div>

            {/* Genre Filter */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Genre</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" className="w-full justify-between">
                    {tempFilters.genres.length === 0 ? "Select genre..." : tempFilters.genres[0]}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search genres..." />
                    <CommandList>
                      <CommandEmpty>No genre found.</CommandEmpty>
                      <CommandGroup className="max-h-64 overflow-auto">
                        <CommandItem
                          value=""
                          onSelect={() => {
                            setTempFilters((prev) => ({ ...prev, genres: [] }))
                          }}
                        >
                          <Check
                            className={`mr-2 h-4 w-4 ${tempFilters.genres.length === 0 ? "opacity-100" : "opacity-0"}`}
                          />
                          All Genres
                        </CommandItem>
                        {GENRES.map((genre) => (
                          <CommandItem
                            key={genre}
                            value={genre}
                            onSelect={() => {
                              setTempFilters((prev) => ({ ...prev, genres: [genre] }))
                            }}
                          >
                            <Check
                              className={`mr-2 h-4 w-4 ${
                                tempFilters.genres.includes(genre) ? "opacity-100" : "opacity-0"
                              }`}
                            />
                            {genre}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {tempFilters.genres.length > 0 && (
                <Badge variant="secondary" className="text-xs w-fit">
                  {tempFilters.genres[0]}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 ml-1"
                    onClick={() => setTempFilters((prev) => ({ ...prev, genres: [] }))}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              )}
            </div>

            {/* BPM Filter */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">BPM Range</Label>
              <div className="px-2">
                <Slider
                  value={tempFilters.bpmRange}
                  onValueChange={handleBpmChange}
                  min={60}
                  max={200}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>{tempFilters.bpmRange[0]} BPM</span>
                  <span>{tempFilters.bpmRange[1]} BPM</span>
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
                    value={tempFilters.bpmRange[0]}
                    onChange={(e) => handleBpmChange([Number.parseInt(e.target.value) || 60, tempFilters.bpmRange[1]])}
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
                    value={tempFilters.bpmRange[1]}
                    onChange={(e) => handleBpmChange([tempFilters.bpmRange[0], Number.parseInt(e.target.value) || 200])}
                    min={60}
                    max={200}
                    className="h-8"
                  />
                </div>
              </div>
            </div>


            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button onClick={clearFilters} variant="outline" className="flex-1">
                Clear Filters
              </Button>
              <Button onClick={applyFilters} className="flex-1">
                Apply Filters
              </Button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
          <X className="w-4 h-4 mr-1" />
          Clear
        </Button>
      )}
    </div>
  )
}
