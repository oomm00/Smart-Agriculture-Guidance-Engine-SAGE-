import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-green-700">
          SAGE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-green-700">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-green-700">About</Link>
          <Link to="/dashboard" className="text-gray-600 hover:text-green-700">Dashboard</Link>
          <Link to="/login" className="text-gray-600 hover:text-green-700">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-2 space-y-3 flex flex-col">
          <Link to="/" className="block text-gray-600 hover:text-green-700">Home</Link>
          <Link to="/about" className="block text-gray-600 hover:text-green-700">About</Link>
          <Link to="/dashboard" className="block text-gray-600 hover:text-green-700">Dashboard</Link>
          <Link to="/login" className="block text-gray-600 hover:text-green-700">Login</Link>
        </div>
      )}
    </nav>
  )
}
