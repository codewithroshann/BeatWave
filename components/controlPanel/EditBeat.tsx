"use client";
import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Music, Upload, X } from "lucide-react";
import Image from "next/image";
import Loading from "@/app/loading";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { setAlert, clearAlert } from "@/redux/slices/AlertReducer";
import { useDispatch } from "react-redux";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export function EditBeat({ beat, model }: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isUploading, setIsUploading] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(
    beat.thumbnail
  );

  // Form States Handlers
  const [title, setTitle] = useState(beat.title);
  const [producer, setProducer] = useState(beat.producer);
  const [genre, setGenre] = useState(beat.genre);
  const [price, setPrice] = useState(beat.price);
  const [bpm, setBpm] = useState(beat.bpm);
  const [description, setDescription] = useState(beat.description);
  const [beatFile, setBeatFile] = useState<string | null>(beat.audio);
  const [thumbnailFile, setThumbnailFile] = useState<string | null>(
    beat.thumbnail
  );

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(title, producer, genre, bpm, price, description);
    e.preventDefault();
    setIsUploading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/admin/update/${beat._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            producer,
            genre,
            bpm,
            price,
            description,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setIsUploading(false);
        dispatch(setAlert({ message: data.message, type: data.type }));
        if (data.redirectUrl) {
          router.push(data.redirectUrl);
          setTimeout(() => {
            window.location.reload();
            dispatch(clearAlert());
          }, 2500);
        }
      } else {
        dispatch(setAlert({ message: "Something went wrong!", type: "error" }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        className="container"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <Card className="w-full bg-zinc-800">
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Beat Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Enter beat title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </div>

                <div>
                  <Label htmlFor="producer">Producer</Label>
                  <Input
                    id="producer"
                    name="producer"
                    placeholder="Producer name"
                    required
                    onChange={(e) => setProducer(e.target.value)}
                    value={producer}
                  />
                </div>

                <div>
                  <Label htmlFor="genre">Genre</Label>
                  <Select
                    name="genre"
                    onValueChange={(e) => setGenre(e)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={genre} />
                    </SelectTrigger>
                    <SelectContent className="duration-100">
                      <SelectItem value="trap">Trap</SelectItem>
                      <SelectItem value="hiphop">Hip Hop</SelectItem>
                      <SelectItem value="rnb">R&B</SelectItem>
                      <SelectItem value="drill">Drill</SelectItem>
                      <SelectItem value="lofi">Lo-Fi</SelectItem>
                      <SelectItem value="boombap">Boom Bap</SelectItem>
                      <SelectItem value="pop">Pop</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="price">Price (INR)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="29.99"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="bpm" className="flex justify-between">
                    <span>BPM</span>
                    <span className="text-muted-foreground">{bpm}</span>
                  </Label>
                  <Slider
                    id="bpm"
                    name="bpm"
                    min={60}
                    max={200}
                    step={1}
                    value={[bpm]}
                    onValueChange={(value) => setBpm(value[0])}
                    className="py-4"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe your beat..."
                    className="h-24"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </div>
                <div>
                  <Label>Thumbnail</Label>
                  <div className="mt-2">
                    {!thumbnailPreview ? (
                      <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-muted/50">
                        <Label
                          htmlFor="thumbnail"
                          className="cursor-pointer flex flex-col items-center justify-center gap-2"
                        >
                          <Upload className="h-8 w-8 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            Upload thumbnail image
                          </span>
                          <span className="text-xs text-muted-foreground">
                            PNG, JPG or GIF up to 2MB
                          </span>
                        </Label>
                        <Input
                          id="thumbnail"
                          name="thumbnail"
                          type="file"
                          accept="image/*"
                          className="hidden"
                        />
                      </div>
                    ) : (
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden cursor-not-allowed">
                        <Image
                          src={thumbnailPreview || "/placeholder.svg"}
                          alt="Thumbnail preview"
                          fill
                          className="object-cover"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 bg-primary right-2 h-8 w-8 rounded-full hover:bg-primary"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Label>Beat File</Label>
                  <div className="mt-2">
                    {!beatFile ? (
                      <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center bg-muted/50">
                        <Label
                          htmlFor="beatFile"
                          className="cursor-pointer flex flex-col items-center justify-center gap-2"
                        >
                          <Music className="h-8 w-8 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            Upload beat file
                          </span>
                          <span className="text-xs text-muted-foreground">
                            MP3 or WAV up to 50MB
                          </span>
                        </Label>
                        <Input
                          id="beatFile"
                          name="beatFile"
                          type="file"
                          accept=".mp3,.wav"
                          className="hidden cursor-not-allowed"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-3 border rounded-lg cursor-not-allowed">
                        <div className="flex items-center gap-2">
                          <Music className="h-5 w-5 text-muted-foreground" />
                          <span className="text-sm font-medium truncate max-w-[200px]">
                            {beatFile}
                          </span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 "
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm">
                You cannot change the beat file once uploaded
              </p>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button type="button" variant="outline" onClick={model}>
                Cancel
              </Button>
              <Button type="submit" disabled={isUploading || !beatFile}>
                {isUploading ? "Uploading..." : "Upload Beat"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  );
}
