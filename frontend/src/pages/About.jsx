import DisclaimerBanner from "../components/DisclaimerBanner"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-cream overflow-x-hidden">
      <DisclaimerBanner />
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-fraunces font-bold text-forest mb-6">About SAGE</h1>
          <p className="text-lg text-ink font-inter leading-relaxed">
            SAGE is an AI advisory assistant built for field supervisors at Mandakini Organic Produce Collective in Uttarakhand. It gives instant, practical guidance on crop diseases, pests, and post-harvest handling in English or Hindi, so supervisors don't have to wait for an extension officer call.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-fraunces font-bold text-forest mb-10 text-center">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              title="1. Ask a question" 
              description="Describe the symptoms or farming issue you are facing."
              tags={["Text or voice"]}
            />
            <Card 
              title="2. Get instant guidance" 
              description="Receive actionable AI-powered advice tailored to your region."
              tags={["English", "Hindi"]}
            />
            <Card 
              title="3. Verify with an officer" 
              description="Cross-check critical actions with your local extension expert."
              tags={["Always recommended"]}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
