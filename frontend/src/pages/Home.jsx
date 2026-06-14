import DisclaimerBanner from "../components/DisclaimerBanner"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Card from "../components/Card"
import { Leaf, Bug, Package } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream overflow-x-hidden">
      <DisclaimerBanner />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              title="Crop disease help" 
              description="Identify yellow spots, wilting, and other symptoms with organic treatment options." 
              tags={["Organic", "All crops"]}
              icon={<Leaf size={32} />}
            />
            <Card 
              title="Pest management" 
              description="Identify mountain pests and get integrated pest management strategies." 
              tags={["Monsoon crop", "Low-water"]}
              icon={<Bug size={32} />}
            />
            <Card 
              title="Post-harvest tips" 
              description="Learn best practices for storage and grading of mountain crops." 
              tags={["High-altitude", "Storage"]}
              icon={<Package size={32} />}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
