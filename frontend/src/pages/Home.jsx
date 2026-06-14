import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Card from "../components/Card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card 
              title="Crop disease help" 
              description="Identify yellow spots, wilting, and other symptoms with organic treatment options." 
            />
            <Card 
              title="Pest management" 
              description="Identify mountain pests and get integrated pest management strategies." 
            />
            <Card 
              title="Post-harvest tips" 
              description="Learn best practices for storage and grading of mountain crops." 
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
