import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Grid3X3, LayoutList, ChevronDown, Wallet, Clock, Sparkles, Flame } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MarketplacePage() {
  // Mock data for NFTs
  const nfts = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `Digital Dreamscape #${i + 101}`,
    artist: `artist${i + 1}`,
    price: ((i % 5) + 0.5).toFixed(2),
    likes: Math.floor(Math.random() * 100),
    image: `/placeholder.svg?height=400&width=400&text=NFT+${i + 1}`,
  }))

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">NFT Marketplace</h1>
          <p className="text-muted-foreground">Discover, collect, and sell extraordinary NFTs</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search collections, artists, or NFTs" className="pl-10" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className="h-3 w-3" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <LayoutList className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start overflow-auto py-1">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="art">Art</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
            <TabsTrigger value="virtual-worlds">Virtual Worlds</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            {/* Featured Collections */}
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Featured Collections</h2>
                <Button variant="ghost" size="sm" className="gap-1">
                  View All <ChevronDown className="h-3 w-3" />
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=300&width=400&text=Collection+${i}`}
                        width={400}
                        height={300}
                        alt={`Collection ${i}`}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Collection {i}</h3>
                          <p className="text-sm text-muted-foreground">by @creator{i}</p>
                        </div>
                        <Badge variant="secondary">{i * 10}+ items</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Filter Section */}
            <div className="mb-8 grid grid-cols-1 gap-6 rounded-xl border bg-card p-6 shadow-sm lg:grid-cols-[250px_1fr]">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Price Range</h3>
                  <div className="space-y-4">
                    <Slider defaultValue={[0, 10]} max={10} step={0.1} />
                    <div className="flex items-center justify-between">
                      <div className="rounded-md border bg-background px-2 py-1 text-sm">0 ETH</div>
                      <div className="rounded-md border bg-background px-2 py-1 text-sm">10 ETH</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">Status</h3>
                  <div className="space-y-2">
                    {["Buy Now", "On Auction", "New", "Has Offers"].map((status) => (
                      <div key={status} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={status.toLowerCase().replace(" ", "-")}
                          className="h-4 w-4 rounded border-muted"
                        />
                        <label htmlFor={status.toLowerCase().replace(" ", "-")} className="text-sm">
                          {status}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium">Collections</h3>
                  <div className="space-y-2">
                    {["Bored Ape Yacht Club", "CryptoPunks", "Art Blocks", "Doodles"].map((collection) => (
                      <div key={collection} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={collection.toLowerCase().replace(" ", "-")}
                          className="h-4 w-4 rounded border-muted"
                        />
                        <label htmlFor={collection.toLowerCase().replace(" ", "-")} className="text-sm">
                          {collection}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="w-full">Apply Filters</Button>
              </div>
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium">All NFTs</h3>
                    <Badge variant="outline">12,345 items</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Sort by:</span>
                    <Button variant="outline" size="sm" className="gap-1">
                      Recently Listed <ChevronDown className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {nfts.map((nft) => (
                    <Link href={`/artwork/${nft.id}`} key={nft.id} className="group">
                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <div className="aspect-square overflow-hidden">
                          <Image
                            src={nft.image || "/placeholder.svg"}
                            width={400}
                            height={400}
                            alt={nft.title}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">{nft.title}</h3>
                              <p className="text-sm text-muted-foreground">by @{nft.artist}</p>
                            </div>
                            <div className="flex items-center gap-1 text-sm font-medium">
                              <Wallet className="h-3 w-3" />
                              {nft.price} ETH
                            </div>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <Badge variant="outline" className="gap-1 text-xs">
                              <Clock className="h-3 w-3" /> Ends in 2d
                            </Badge>
                            <div className="flex items-center gap-2">
                              {nft.id % 3 === 0 && (
                                <Badge variant="secondary" className="gap-1 text-xs">
                                  <Sparkles className="h-3 w-3" /> New
                                </Badge>
                              )}
                              {nft.id % 4 === 0 && (
                                <Badge variant="secondary" className="gap-1 text-xs">
                                  <Flame className="h-3 w-3" /> Hot
                                </Badge>
                              )}
                            </div>
                          </div>
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
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
