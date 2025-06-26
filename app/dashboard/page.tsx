import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Upload,
  Wallet,
  BarChart3,
  ImageIcon,
  DollarSign,
  Clock,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  FileText,
  Tag,
} from "lucide-react"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Artist Dashboard</h1>
          <p className="text-muted-foreground">Manage your artwork, track sales, and monitor performance</p>
        </div>

        {/* Dashboard Overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.45 ETH</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 flex items-center">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  +20.1%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">NFTs Sold</CardTitle>
              <ImageIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 flex items-center">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  +12.5%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Royalties</CardTitle>
              <Sparkles className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.31 ETH</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-500 flex items-center">
                  <ArrowDownRight className="mr-1 h-3 w-3" />
                  -4.3%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
              <Tag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 flex items-center">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  +8.2%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto">
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="artworks">My Artworks</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Upload Tab */}
          <TabsContent value="upload" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Artwork</CardTitle>
                <CardDescription>Create a new NFT by uploading your artwork and setting details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col gap-6 lg:flex-row">
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="title" className="text-sm font-medium">
                        Title
                      </label>
                      <Input id="title" placeholder="e.g. 'Cosmic Dreams #1'" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="description" className="text-sm font-medium">
                        Description
                      </label>
                      <Textarea id="description" placeholder="Describe your artwork..." className="min-h-[120px]" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="price" className="text-sm font-medium">
                          Price (ETH)
                        </label>
                        <Input id="price" type="number" placeholder="0.05" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="royalty" className="text-sm font-medium">
                          Royalty %
                        </label>
                        <Input id="royalty" type="number" placeholder="10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="collection" className="text-sm font-medium">
                        Collection
                      </label>
                      <select
                        id="collection"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a collection</option>
                        <option value="cosmic-dreams">Cosmic Dreams</option>
                        <option value="abstract-emotions">Abstract Emotions</option>
                        <option value="digital-landscapes">Digital Landscapes</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="rounded-xl border-2 border-dashed border-muted-foreground/25 p-6 text-center hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col items-center justify-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Upload className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium">Upload Artwork</h3>
                          <p className="text-sm text-muted-foreground">Drag and drop or click to browse</p>
                          <p className="text-xs text-muted-foreground">Supports JPG, PNG, GIF, SVG, MP4, WEBM, GLB</p>
                        </div>
                        <Button size="sm">Select File</Button>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <h3 className="text-sm font-medium">Preview</h3>
                      <div className="aspect-square rounded-xl border bg-muted flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">No preview available</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Save Draft</Button>
                  <Button>Mint NFT</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Artworks Tab */}
          <TabsContent value="artworks" className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>My Artworks</CardTitle>
                  <CardDescription>Manage your created NFTs and listings</CardDescription>
                </div>
                <Button size="sm" className="gap-1">
                  <Plus className="h-4 w-4" /> Create New
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=400&width=400&text=NFT+${i + 1}`}
                          width={400}
                          height={400}
                          alt={`NFT ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Digital Dreamscape #{i + 101}</h3>
                            <p className="text-sm text-muted-foreground">{i % 2 === 0 ? "Listed" : "Not Listed"}</p>
                          </div>
                          <div className="text-sm font-medium">{((i % 5) + 0.5).toFixed(2)} ETH</div>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            Edit
                          </Button>
                          {i % 2 === 0 ? (
                            <Button variant="destructive" size="sm" className="flex-1">
                              Delist
                            </Button>
                          ) : (
                            <Button size="sm" className="flex-1">
                              List
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sales Tab */}
          <TabsContent value="sales" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales History</CardTitle>
                <CardDescription>Track your NFT sales and transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 border-b bg-muted/50 p-4 text-sm font-medium">
                    <div>Artwork</div>
                    <div>Price</div>
                    <div>Buyer</div>
                    <div>Date</div>
                    <div>Status</div>
                  </div>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="grid grid-cols-5 items-center border-b p-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 overflow-hidden rounded-md">
                          <Image
                            src={`/placeholder.svg?height=40&width=40&text=${i + 1}`}
                            width={40}
                            height={40}
                            alt={`NFT ${i + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span>Digital Dreamscape #{i + 101}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wallet className="h-3 w-3" />
                        {((i % 5) + 0.5).toFixed(2)} ETH
                      </div>
                      <div>0x3a...4b2{i}</div>
                      <div>{new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString()}</div>
                      <div>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500">
                          Completed
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>View insights about your NFT sales and engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="rounded-xl border bg-card p-6">
                    <h3 className="mb-4 text-lg font-medium">Sales Overview</h3>
                    <div className="h-[300px] w-full rounded-md border bg-muted flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <BarChart3 className="h-8 w-8" />
                        <p>Sales chart visualization would appear here</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border bg-card p-6">
                      <h3 className="mb-4 text-lg font-medium">Top Performing NFTs</h3>
                      <div className="space-y-4">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="h-12 w-12 overflow-hidden rounded-md">
                              <Image
                                src={`/placeholder.svg?height=48&width=48&text=${i + 1}`}
                                width={48}
                                height={48}
                                alt={`NFT ${i + 1}`}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">Digital Dreamscape #{i + 101}</h4>
                              <p className="text-sm text-muted-foreground">{((i % 5) + 1.5).toFixed(2)} ETH</p>
                            </div>
                            <Badge variant="secondary">{i === 0 ? "Trending" : i === 1 ? "Popular" : "Rising"}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border bg-card p-6">
                      <h3 className="mb-4 text-lg font-medium">Recent Activity</h3>
                      <div className="space-y-4">
                        {[
                          { icon: DollarSign, text: "NFT sold for 2.5 ETH", time: "2 hours ago" },
                          { icon: Wallet, text: "Received 0.3 ETH royalty payment", time: "Yesterday" },
                          { icon: Clock, text: "Auction ended for Digital Dreamscape #103", time: "2 days ago" },
                          { icon: FileText, text: "New offer received: 1.2 ETH", time: "3 days ago" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <item.icon className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm">{item.text}</p>
                              <p className="text-xs text-muted-foreground">{item.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
