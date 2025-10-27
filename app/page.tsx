import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { VotingSection } from "@/components/voting-section"
import { TrendingSection } from "@/components/trending-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroSection />
        <VotingSection />
        <TrendingSection />
        <BlogSection />
        <Footer />
      </main>
    </div>
  )
}
