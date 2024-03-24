import { Navigation } from "./Navigation"
import { HeroSection } from "./HeroSection"
import TrendingCollection from "./TrendingCollection"
import TopRatedArtists from "./TopRatedArtists"
import Footer from "./Footer"

function App() {
  return (
    <div className="w-screen h-screen font-Work_Sans text-white">
      <Navigation />
      <HeroSection />
      <TrendingCollection />
      <TopRatedArtists />
      <Footer />
    </div>
  )
}

export default App
