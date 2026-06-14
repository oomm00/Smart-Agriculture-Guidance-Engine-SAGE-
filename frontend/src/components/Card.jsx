export default function Card({ title, description, tags = [] }) {
  return (
    <div className="bg-cream rounded-xl border border-terracotta/20 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => {
          const bgClass = index % 2 === 0 ? 'bg-harvest' : 'bg-terracotta'
          return (
            <span key={index} className={`px-3 py-1 rounded-full text-xs font-medium font-inter text-ink ${bgClass}`}>
              {tag}
            </span>
          )
        })}
      </div>
      <h3 className="text-xl font-fraunces text-forest font-bold mb-3">{title}</h3>
      <p className="text-ink font-inter leading-relaxed">{description}</p>
    </div>
  )
}
