import DisclaimerBanner from "../components/DisclaimerBanner"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-cream overflow-x-hidden">
      <DisclaimerBanner />
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-fraunces font-bold text-forest mb-4">Your dashboard</h1>
          <p className="text-lg text-ink font-inter leading-relaxed">
            Welcome back. Here's a quick look at your recent advisory topics.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-fraunces font-bold text-forest mb-8 border-b border-forest/10 pb-4">Recent topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="#" className="cursor-pointer block transition-transform duration-200 hover:-translate-y-1 h-full">
              <Card 
                title="Yellow spots on beans" 
                description="Conversation regarding potential rust or blight on organic bean crops."
                tags={["Crop disease", "2 days ago"]}
              />
            </a>
            <a href="#" className="cursor-pointer block transition-transform duration-200 hover:-translate-y-1 h-full">
              <Card 
                title="Aphids on capsicum" 
                description="Organic neem oil treatments and integrated pest management."
                tags={["Pest", "5 days ago"]}
              />
            </a>
            <a href="#" className="cursor-pointer block transition-transform duration-200 hover:-translate-y-1 h-full">
              <Card 
                title="Storing potatoes after harvest" 
                description="Cool, dry storage methods to prevent sprouting in high altitude."
                tags={["Post-harvest", "1 week ago"]}
              />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
