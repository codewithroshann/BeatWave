"use client";
import { useState } from "react";
import Image from "next/image";
import { MoreHorizontal, Play, Pause } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import { playing } from "@/redux/slices/musicPlayerReducer";
import { useDispatch } from "react-redux";
import { clearAlert, setAlert } from "@/redux/slices/AlertReducer";
import { EditBeat } from "./EditBeat";
export function BeatsTable({ beats }: { beats: any }) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [searchBeat, setSearchBeats] = useState(beats);
  const [value, setValue] = useState("");
  const [deleteModel, setDeleteModel] = useState(false);
  const [editModel, setEditModel] = useState(false);
  const [beatData, setBeatData] = useState({});

  const [id, setId] = useState();

  const dispatch = useDispatch();
  const togglePlay = (beat: any) => {
    if (playingId === beat._id) {
      setPlayingId(null);
    } else {
      setPlayingId(beat._id);
      dispatch(playing(beat));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/admin/${value}`, {
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
          dispatch(setAlert({ message: data.message, type: data.type }));
        }
      }
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      dispatch(clearAlert());
    }, 2500);
  };
  // Handle Delete
  const DeleteModelOpen = (id: any) => {
    setId(id);
    setDeleteModel(true);
  };
  const DeleteModelClose = () => {
    setDeleteModel(false);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8000/admin/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        if (data.message) {
          dispatch(setAlert({ message: data.message, type: data.type }));
        }
      }
      if (!response.ok) {
        const data = await response.json();
        if (data.message) {
          dispatch(setAlert({ message: data.message, type: data.type }));
        }
      }
    } catch (error) {}
    setTimeout(() => {
      dispatch(clearAlert());
      window.location.reload();
    }, 2500);
  };
  // Update Beat Function
  const BeatUpdateModelOpen = (beat:any) => {
    setBeatData(beat);
    setEditModel(true);
  };
  const BeatUpdateModelClose = () => {
    setEditModel(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="px-1 flex justify-self-end mb-5 w-full sm:w-[382px] outline-none focus:outline-none border-zinc-600 gap-2 border py-1 rounded-md "
      >
        <Input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Beat Id..."
          className="sm:w-80 w-full border-none dark:outline-none outline-none "
        />
        <Button>
          <FaSearch />
        </Button>
      </form>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]"></TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>BPM</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(searchBeat) &&
              searchBeat
                .slice(0, 4)
                .reverse()
                .map((beat: any) => (
                  <TableRow key={beat._id}>
                    <TableCell>
                      <div className="relative h-12 w-12 rounded overflow-hidden">
                        <Image
                          src={beat.thumbnail || "/placeholder.svg"}
                          alt={beat.title}
                          fill
                          className="object-cover"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute inset-0 bg-black/30 hover:bg-black/50 text-white rounded-none h-full w-full"
                          onClick={() => togglePlay(beat)}
                        >
                          {playingId === beat._id ? (
                            <Pause className="h-5 w-5" />
                          ) : (
                            <Play className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{beat.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {beat.producer}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{beat.genre}</Badge>
                    </TableCell>
                    <TableCell>{beat.bpm} BPM</TableCell>
                    <TableCell>${beat.price}</TableCell>
                    <TableCell>
                      {new Date(beat.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={()=>{BeatUpdateModelOpen(beat)}}>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              DeleteModelOpen(beat._id);
                            }}
                            className="text-destructiv bg-red-700 text-white hover:bg-red-800"
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
      {/*DELETE CONFIRM MODAL */}
      {deleteModel && (
        <div
          tabIndex={-1}
          className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-zinc-800 border">
              <Button
                type="button"
                onClick={DeleteModelClose}
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </Button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this Beat?
                </h3>
                <div className="flex gap-3 justify-center flex-wrap">
                  <Button
                    onClick={handleDelete}
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Yes, I'm sure
                  </Button>
                  <Button
                    onClick={DeleteModelClose}
                    type="button"
                    className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    No, cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Update Beat */}
      {editModel && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto place-content-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <EditBeat model={BeatUpdateModelClose} beat={beatData}/>
        </div>
      )}
    </>
  );
}
