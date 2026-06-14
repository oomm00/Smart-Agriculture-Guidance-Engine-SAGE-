export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600 mb-2">
          &copy; {new Date().getFullYear()} Smart Agriculture Guidance Engine (SAGE). All rights reserved.
        </p>
        <p className="text-xs text-gray-500 max-w-2xl mx-auto">
          ⚠️ This advisory is AI-generated for guidance only. Always verify with a licensed agricultural extension officer before taking action.
        </p>
      </div>
    </footer>
  )
}
