import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Supervisor Login</h1>
        <p className="text-gray-600">
          This page will allow field supervisors to log in securely to access personalized agricultural advisories and past conversations.
        </p>
      </main>
      <Footer />
    </div>
  )
}
