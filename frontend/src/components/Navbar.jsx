import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-cream px-4 py-4 border-b border-forest/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-forest font-fraunces tracking-tight">
          SAGE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-inter">
          <Link to="/" className="text-ink hover:text-forest transition-colors">Home</Link>
          <Link to="/about" className="text-ink hover:text-forest transition-colors">About</Link>
          <Link to="/dashboard" className="text-ink hover:text-forest transition-colors">Dashboard</Link>
          <Link to="/login" className="text-ink hover:text-forest transition-colors">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-forest p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-2 space-y-4 flex flex-col font-inter">
          <Link to="/" className="block text-ink hover:text-forest">Home</Link>
          <Link to="/about" className="block text-ink hover:text-forest">About</Link>
          <Link to="/dashboard" className="block text-ink hover:text-forest">Dashboard</Link>
          <Link to="/login" className="block text-ink hover:text-forest">Login</Link>
        </div>
      )}
    </nav>
  )
}
