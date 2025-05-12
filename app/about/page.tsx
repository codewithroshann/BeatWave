import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Music, Play, Users } from "lucide-react"
import StudioImage from "@/public/Studio.jpg"
import ProducerImage from "@/public/Producer.jpg"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <section className="mb-16 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About BeatWave</h1>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                    We're passionate about creating high-quality beats for artists around the India.
                </p>
                <div className="relative mx-auto mb-10 h-64 w-full max-w-4xl overflow-hidden rounded-xl sm:h-80 md:h-96">
                    <Image
                        src={StudioImage || "/placeholder.svg?height=400&width=800"}
                        alt="Studio setup"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* Our Story Section */}
            <section className="mb-16">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Story</h2>
                        <p className="mb-4 text-muted-foreground">
                            Founded in 2020, our beat store began as a small project between friends who shared a passion for music
                            production. What started as a hobby quickly grew into a thriving business as artists from around the India
                            discovered our unique sound.
                        </p>
                        <p className="mb-6 text-muted-foreground">
                            Today, we're proud to offer a diverse catalog of high-quality beats across multiple genres, helping
                            artists bring their musical visions to life. Our team has expanded to include talented producers from
                            different backgrounds, each bringing their unique style and expertise.
                        </p>
                        <Button asChild>
                            <Link href="/explore">
                                Browse Our Beats <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-xl sm:h-80">
                        <Image
                            src={ProducerImage||"/placeholder.svg?height=400&width=600"}
                            alt="Our journey"
                            fill
                            className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="mb-16">
                <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Our Values</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-2">
                            <Music className="mb-2 h-6 w-6" />
                            <CardTitle>Quality Production</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                We're committed to delivering professionally mixed and mastered beats that stand out in today's
                                competitive music landscape.
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <Users className="mb-2 h-6 w-6" />
                            <CardTitle>Artist Support</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                We believe in building relationships with our artists, offering guidance and support throughout their
                                creative journey.
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <Play className="mb-2 h-6 w-6" />
                            <CardTitle>Innovation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                We constantly push boundaries, experimenting with new sounds and techniques to keep our catalog fresh
                                and exciting.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="rounded-xl bg-muted p-8 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready to Create?</h2>
                <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                    Browse our collection of premium beats and start bringing your musical vision to life today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/explore">Explore Our Beats</Link>
                    </Button>
                    <Button asChild variant="outline" className="hover:bg-zinc-900" size="lg">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
