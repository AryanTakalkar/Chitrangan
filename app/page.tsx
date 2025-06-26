import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wallet, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit border-primary/20 bg-primary/10 text-primary">
                  Web3 Platform for Artists
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Create, Mint & Sell Your Digital Artwork
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join the next generation of digital artists. Mint your creations as NFTs and sell them on our
                  marketplace.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-2">
                  <Wallet className="h-4 w-4" />
                  Connect Wallet
                </Button>
                <Button size="lg" variant="outline">
                  Explore Marketplace
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span>10k+ Artists</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Secure Transactions</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Low Gas Fees</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl bg-muted p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 backdrop-blur-sm"></div>
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Featured artwork"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-background/80 p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Cosmic Dreams #231</h3>
                      <p className="text-sm text-muted-foreground">by @stellarartist</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium">2.5 ETH</div>
                      <Button size="sm" variant="secondary">
                        Bid Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Artworks</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Discover unique digital art from talented creators around the world
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Link href="/artwork/1" key={i} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=400&text=Artwork+${i}`}
                      width={400}
                      height={400}
                      alt={`Artwork ${i}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Digital Dreamscape #{i}</h3>
                        <p className="text-sm text-muted-foreground">by @artist{i}</p>
                      </div>
                      <div className="text-sm font-medium">{(i * 0.5).toFixed(1)} ETH</div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="gap-2">
              View All Artworks
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">Join our platform in three simple steps</p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
            {[
              {
                title: "Connect Wallet",
                description: "Link your crypto wallet to our platform securely",
                icon: Wallet,
              },
              {
                title: "Create & Mint",
                description: "Upload your artwork and mint it as an NFT",
                icon: Zap,
              },
              {
                title: "Sell & Earn",
                description: "List your NFTs on our marketplace and earn royalties",
                icon: TrendingUp,
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-4 rounded-xl bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-center text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Journey?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Join thousands of artists already creating and selling on our platform
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-2">
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-500"></div>
            <span className="text-lg font-semibold tracking-tight">Artistry</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Contact
            </Link>
            <Link href="#" className="hover:text-foreground">
              About
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Artistry. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
