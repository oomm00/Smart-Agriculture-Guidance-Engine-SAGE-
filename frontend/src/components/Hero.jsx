export default function Hero() {
  return (
    <div className="bg-green-50 py-16 px-4 sm:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">AI crop advisory for</span>
          <span className="block text-green-700">Uttarakhand farmers</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Get practical guidance on crop diseases, pest management, and post-harvest handling tailored to mountain agriculture.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="/dashboard"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg px-10"
            >
              Start chatting
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
