import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, MoreHorizontal, Wallet, Clock, Eye, Tag, History, ArrowRight } from "lucide-react"

export default function ArtworkPage({ params }: { params: { id: string } }) {
  // Mock artwork data
  const artwork = {
    id: params.id,
    title: `Digital Dreamscape #${params.id}`,
    description:
      "This unique digital artwork explores the intersection of technology and imagination, creating a dreamlike landscape that blurs the boundaries between reality and fantasy.",
    price: "2.5",
    artist: "stellarartist",
    owner: "collector123",
    created: "2023-10-15",
    views: "1.2k",
    likes: "342",
    image: `/placeholder.svg?height=600&width=600&text=Artwork+${params.id}`,
    collection: "Cosmic Dreams Collection",
    attributes: [
      { trait: "Style", value: "Abstract" },
      { trait: "Colors", value: "Vibrant" },
      { trait: "Mood", value: "Ethereal" },
      { trait: "Technique", value: "Digital Painting" },
    ],
    history: [
      { event: "Minted", by: "stellarartist", date: "Oct 15, 2023", price: "-" },
      { event: "Listed", by: "stellarartist", date: "Oct 16, 2023", price: "2.5 ETH" },
      { event: "Offer", by: "collector456", date: "Oct 18, 2023", price: "2.2 ETH" },
    ],
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_600px]">
        {/* Artwork Image */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
            <Image src={artwork.image || "/placeholder.svg"} fill alt={artwork.title} className="object-cover" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{artwork.views} views</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>{artwork.likes} likes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Artwork Details */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Link href="/collections/cosmic-dreams">
                <Badge variant="outline" className="rounded-full">
                  {artwork.collection}
                </Badge>
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">{artwork.title}</h1>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Created by</span>
              <Link href={`/artists/${artwork.artist}`} className="flex items-center gap-2">
                <div className="h-6 w-6 overflow-hidden rounded-full bg-muted">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    width={24}
                    height={24}
                    alt={artwork.artist}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">@{artwork.artist}</span>
              </Link>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">Current Price</span>
                    <div className="flex items-center gap-1">
                      <Wallet className="h-4 w-4" />
                      <span className="text-2xl font-bold">{artwork.price} ETH</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-muted-foreground">Auction ends in</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">23h 59m 59s</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button size="lg">Place Bid</Button>
                  <Button variant="outline" size="lg">
                    Make Offer
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="attributes">Attributes</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium">Description</h3>
                <p className="mt-2 text-muted-foreground">{artwork.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 rounded-xl border p-4">
                <div>
                  <span className="text-sm text-muted-foreground">Token ID</span>
                  <p className="font-medium">{artwork.id}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Blockchain</span>
                  <p className="font-medium">Ethereum</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Token Standard</span>
                  <p className="font-medium">ERC-721</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Created</span>
                  <p className="font-medium">{artwork.created}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="attributes" className="mt-4">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {artwork.attributes.map((attr, i) => (
                  <div key={i} className="rounded-xl border p-4 text-center">
                    <span className="text-sm text-muted-foreground">{attr.trait}</span>
                    <p className="font-medium">{attr.value}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="history" className="mt-4">
              <div className="space-y-4">
                {artwork.history.map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        {item.event === "Minted" ? (
                          <Tag className="h-4 w-4 text-primary" />
                        ) : item.event === "Listed" ? (
                          <Tag className="h-4 w-4 text-primary" />
                        ) : (
                          <History className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{item.event}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <span>by @{item.by}</span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="font-medium">{item.price}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* More from Collection */}
      <div className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">More from this collection</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            View Collection <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Link href={`/artwork/${Number.parseInt(params.id) + i + 1}`} key={i} className="group">
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=NFT+${i + 1}`}
                    width={400}
                    height={400}
                    alt={`NFT ${i + 1}`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Digital Dreamscape #{Number.parseInt(params.id) + i + 1}</h3>
                      <p className="text-sm text-muted-foreground">by @{artwork.artist}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <Wallet className="h-3 w-3" />
                      {(Number.parseFloat(artwork.price) - 0.2 * i).toFixed(1)} ETH
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
