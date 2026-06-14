export default function Card({ title, description, tags = [], icon }) {
  return (
    <div className="bg-cream rounded-xl border border-terracotta/20 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
      {icon && <div className="text-forest mb-4 flex justify-center items-center">{icon}</div>}
      
      <h3 className="text-xl font-fraunces text-forest font-bold mb-3">{title}</h3>
      <p className="text-ink font-inter leading-relaxed mb-5 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 justify-center mt-auto pt-2 border-t border-forest/5 w-full">
        {tags.map((tag, index) => {
          const bgClass = index % 2 === 0 ? 'bg-harvest' : 'bg-terracotta'
          return (
            <span key={index} className={`px-3 py-1 rounded-full text-xs font-medium font-inter text-ink ${bgClass}`}>
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}
