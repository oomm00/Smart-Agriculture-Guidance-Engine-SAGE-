export default function Footer() {
  return (
    <footer className="bg-forest text-cream py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-inter mb-3 opacity-90">
          &copy; {new Date().getFullYear()} Smart Agriculture Guidance Engine (SAGE). All rights reserved.
        </p>
        <p className="text-xs font-inter max-w-2xl mx-auto opacity-75">
          ⚠️ This advisory is AI-generated for guidance only. Always verify with a licensed agricultural extension officer before taking action.
        </p>
      </div>
    </footer>
  )
}
