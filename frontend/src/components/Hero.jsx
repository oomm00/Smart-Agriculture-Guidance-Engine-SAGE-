export default function Hero() {
  return (
    <div className="bg-cream pt-20 sm:pt-28 pb-16 overflow-hidden border-b border-forest/10">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-fraunces text-forest font-bold tracking-tight mb-6">
          Practical crop advice, in your language
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-ink font-inter mb-10">
          Instant, AI-powered guidance for Uttarakhand farmers on crop diseases, pests, and post-harvest handling.
        </p>
        <a
          href="/dashboard"
          className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-medium rounded-md text-cream bg-forest hover:opacity-90 transition-opacity font-inter shadow-sm mb-12"
        >
          Start chatting
        </a>
        
        <img 
          src="/hero.png" 
          alt="Uttarakhand mountain agriculture" 
          className="w-full h-64 sm:h-80 max-w-4xl mx-auto rounded-2xl object-cover shadow-md border border-forest/10"
        />
      </div>
    </div>
  )
}
