import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Wallet, Twitter, Instagram, Globe, Copy, Grid, Heart, Clock, Users } from "lucide-react"

export default function ArtistProfilePage({ params }: { params: { username: string } }) {
  // Mock artist data
  const artist = {
    username: params.username,
    name: "Stella Artista",
    bio: "Digital artist exploring the boundaries between reality and imagination. Creating dreamlike landscapes and abstract compositions.",
    avatar: "/placeholder.svg?height=200&width=200",
    cover: "/placeholder.svg?height=400&width=1200",
    followers: "3.2k",
    following: "156",
    joined: "May 2022",
    social: {
      twitter: "stellarartist",
      instagram: "stellarartist",
      website: "stellarartist.com",
    },
    wallet: "0x3a5e...4b2d",
    stats: {
      artworks: 48,
      sold: 32,
      volume: "45.8 ETH",
      royalties: "4.2 ETH",
    },
  }

  // Mock artworks data
  const artworks = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: `Digital Dreamscape #${i + 101}`,\
    price: ((i % 5) + 0.5).toFixed(  => ({
    id: i + 1,
    title: `Digital Dreamscape #${i + 101}`,
    price: ((i % 5) + 0.5).toFixed(2),
    image: `/placeholder.svg?height=400&width=400&text=NFT+${i + 1}`,
    likes: Math.floor(Math.random() * 100),
    isAuction: i % 3 === 0,
    timeLeft: i % 3 === 0 ? "2d 5h" : null
  }))

  return (
    <div className="flex flex-col">
      {/* Cover Image */}
      <div className="relative h-64 w-full overflow-hidden md:h-80">
        <Image
          src={artist.cover || "/placeholder.svg"}
          fill
          alt={`${artist.name}'s cover`}
          className="object-cover"
        />
  </div>
  ;<div className="container relative -mt-20 px-4 md:px-6">
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col items-start md:flex-row md:items-end md:gap-6">
        <div className="relative h-32 w-32 overflow-hidden rounded-xl border-4 border-background bg-muted md:h-40 md:w-40">
          <Image src={artist.avatar || "/placeholder.svg"} fill alt={artist.name} className="object-cover" />
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className="text-3xl font-bold tracking-tight">{artist.name}</h1>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-muted-foreground">@{artist.username}</span>
            <div className="flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs">
              <Wallet className="h-3 w-3" />
              <span>{artist.wallet}</span>
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy wallet address</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row">
        <Button className="gap-2">
          <Heart className="h-4 w-4" />
          Follow
        </Button>
        <Button variant="outline">Message</Button>
      </div>
    </div>

    {/* Stats and Social */}
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        <p className="text-muted-foreground">{artist.bio}</p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              <strong>{artist.followers}</strong> followers
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              <strong>{artist.following}</strong> following
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Joined {artist.joined}</span>
          </div>
        </div>
        <div className="flex gap-2">
          {artist.social.twitter && (
            <Button variant="outline" size="icon" asChild>
              <Link href={`https://twitter.com/${artist.social.twitter}`} target="_blank">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          )}
          {artist.social.instagram && (
            <Button variant="outline" size="icon" asChild>
              <Link href={`https://instagram.com/${artist.social.instagram}`} target="_blank">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
          )}
          {artist.social.website && (
            <Button variant="outline" size="icon" asChild>
              <Link href={`https://${artist.social.website}`} target="_blank">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Website</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border p-4 text-center">
          <p className="text-sm text-muted-foreground">Artworks</p>
          <p className="text-2xl font-bold">{artist.stats.artworks}</p>
        </div>
        <div className="rounded-xl border p-4 text-center">
          <p className="text-sm text-muted-foreground">Sold</p>
          <p className="text-2xl font-bold">{artist.stats.sold}</p>
        </div>
        <div className="rounded-xl border p-4 text-center">
          <p className="text-sm text-muted-foreground">Volume</p>
          <p className="text-2xl font-bold">{artist.stats.volume}</p>
        </div>
        <div className="rounded-xl border p-4 text-center">
          <p className="text-sm text-muted-foreground">Royalties</p>
          <p className="text-2xl font-bold">{artist.stats.royalties}</p>
        </div>
      </div>
    </div>

    {/* Tabs */}
    <Tabs defaultValue="created" className="mt-8">
      <TabsList className="w-full justify-start overflow-auto py-1">
        <TabsTrigger value="created">Created</TabsTrigger>
        <TabsTrigger value="collected">Collected</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="created" className="mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Created Artworks</h2>
            <Badge variant="outline">{artist.stats.artworks}</Badge>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <Grid className="h-4 w-4" />
            Filter
          </Button>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {artworks.map((artwork) => (
            <Link href={`/artwork/${artwork.id}`} key={artwork.id} className="group">
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    width={400}
                    height={400}
                    alt={artwork.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{artwork.title}</h3>
                      <p className="text-sm text-muted-foreground">by @{artist.username}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <Wallet className="h-3 w-3" />
                      {artwork.price} ETH
                    </div>
                  </div>
                  {artwork.isAuction && (
                    <div className="mt-2 flex items-center justify-between">
                      <Badge variant="outline" className="gap-1 text-xs">
                        <Clock className="h-3 w-3" /> Ends in {artwork.timeLeft}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Heart className="h-3 w-3" />
                        {artwork.likes}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg">
            Load More
          </Button>
        </div>
      </TabsContent>
      <TabsContent value="collected" className="mt-6">
        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-muted p-4">
              <Grid className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-medium">No collected artworks yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">This artist hasn't collected any NFTs yet.</p>
            <Button className="mt-4" variant="outline">
              Explore Marketplace
            </Button>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="activity" className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <Button variant="outline" size="sm">
            Filter
          </Button>
        </div>
        <div className="mt-6 space-y-4">
          {[
            { event: "Listed", item: "Digital Dreamscape #103", price: "2.5 ETH", time: "2 hours ago" },
            { event: "Sold", item: "Digital Dreamscape #102", price: "1.8 ETH", time: "1 day ago" },
            { event: "Minted", item: "Digital Dreamscape #104", price: "-", time: "2 days ago" },
            { event: "Received Offer", item: "Digital Dreamscape #101", price: "1.2 ETH", time: "3 days ago" },
            { event: "Sold", item: "Digital Dreamscape #100", price: "3.0 ETH", time: "5 days ago" },
          ].map((activity, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl border p-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-md">
                  <Image
                    src={`/placeholder.svg?height=48&width=48&text=${i + 1}`}
                    width={48}
                    height={48}
                    alt={activity.item}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{activity.event}</Badge>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                  <p className="font-medium">{activity.item}</p>
                </div>
              </div>
              <div className="font-medium">{activity.price}</div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  </div>
  </div>
  )
}
