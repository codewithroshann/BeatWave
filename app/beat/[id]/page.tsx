import {
  ChevronLeft,
  Music,
  ShoppingCart,
  Heart,
  Share2,
  Clock,
  Download,
  FileMusic,
  AudioWaveformIcon as Waveform,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaRupeeSign } from "react-icons/fa";
import AddToCart from "@/components/ClientButtons/AddToCart";

//Fetching beat using route id

async function getBeat(id: string) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL + `/beat/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    if (response.ok) {
      return await response.json();
    } else {
      console.error(
        `Error fetching beat: ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(`Error fetching beat: ${error}`);
  }
}

export default async function BeatPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const data = await getBeat(id);
  const beat = data.beat;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 container px-4 py-6 mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium mb-6 hover:text-primary"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Browse
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-8">
          <div>
            <div className="relative aspect-square overflow-hidden rounded-xl mb-6">
              <Image
                src={beat.thumbnail || "/placeholder.svg"}
                alt={beat.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <Button
                  size="lg"
                  className="rounded-full w-16 h-16"
                  aria-label="Play beat"
                >
                  <Music className="h-8 w-8" />
                </Button>
              </div>
            </div>

            {/* <div className="flex flex-wrap gap-3 mb-6">
            {beat.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div> */}

            <Tabs defaultValue="description" className="mb-8">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="license">License Info</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-4">
                <p>{beat.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                  {/* <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Length: 2:17</span>
                </div> */}
                  <div className="flex items-center gap-2">
                    <Waveform className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">BPM: {beat.bpm}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileMusic className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Genre: {beat.genre}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Instant Download</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="license" className="space-y-4 p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Select a license based on your intended use of the beat. For
                  more information on licensing, please review our License
                  Terms.
                </p>
                {/* <div className="grid gap-4">
                {beat.licenseOptions.map((license) => (
                  <Card key={license.name}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{license.name}</h3>
                        <div className="font-bold">${license.price}</div>
                      </div>
                      <ul className="space-y-1 text-sm">
                        {license.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div> */}
              </TabsContent>
            </Tabs>

            {/* <div className="mt-10">
            <h2 className="text-xl font-bold mb-4">Similar Beats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {beat.similarBeats.map((similarBeat) => (
                <Link
                  key={similarBeat.id}
                  href={`/beat/${similarBeat.id}`}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-2">
                    <Image
                      src={similarBeat.image || "/placeholder.svg"}
                      alt={similarBeat.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-primary">
                    {similarBeat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {similarBeat.producer}
                  </p>
                </Link>
              ))}
            </div>
          </div> */}
          </div>

          <div>
            <div className="sticky top-20">
              <Card>
                <CardContent className="p-6">
                  <h1 className="text-2xl font-bold mb-1">{beat.title}</h1>
                  <p className="text-muted-foreground mb-4">
                    Producer: {beat.producer}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-3xl font-bold flex items-center gap-1">
                      <FaRupeeSign className="text-md" />
                      {beat.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {/* {beat.licenseType} License */}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <AddToCart />
                    {/* <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="flex-1">
                      <Heart className="h-4 w-4" />
                      <span className="sr-only">Add to favorites</span>
                    </Button>
                    <Button variant="outline" size="icon" className="flex-1">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div> */}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-medium mb-2">Beat Info</h3>
                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                      <div className="text-muted-foreground">Genre:</div>
                      <div className="uppercase">{beat.genre}</div>
                      <div className="text-muted-foreground">BPM:</div>
                      <div>{beat.bpm}</div>
                      <div className="text-muted-foreground">Released:</div>
                      <div>{new Date(beat.createdAt).toDateString()}</div>
                      {/* <div className="text-muted-foreground">Duration:</div>
                    <div>2:17</div> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
