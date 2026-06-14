import DisclaimerBanner from "../components/DisclaimerBanner"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-cream overflow-x-hidden">
      <DisclaimerBanner />
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-fraunces font-bold text-forest mb-4">Dashboard</h1>
        <p className="text-ink font-inter">
          This page will show your past conversations and feedback history with the AI crop advisory assistant.
        </p>
      </main>
      <Footer />
    </div>
  )
}
