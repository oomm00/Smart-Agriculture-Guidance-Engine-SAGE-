import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <p className="text-gray-600">
          This page will show your past conversations and feedback history with the AI crop advisory assistant.
        </p>
      </main>
      <Footer />
    </div>
  )
}
