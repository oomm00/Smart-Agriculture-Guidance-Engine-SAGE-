import DisclaimerBanner from "../components/DisclaimerBanner"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-cream overflow-x-hidden">
      <DisclaimerBanner />
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-fraunces font-bold text-forest mb-4">About SAGE</h1>
        <p className="text-ink font-inter">
          This page will describe the mission of the Smart Agriculture Guidance Engine (SAGE) and its impact on the Mandakini Organic Produce Collective in Uttarakhand.
        </p>
      </main>
      <Footer />
    </div>
  )
}
