export default function Card({ title, description, tags = [], imageUrl }) {
  return (
    <div className="bg-cream rounded-xl border border-terracotta/20 shadow-sm hover:shadow-md transition-shadow flex flex-col text-center overflow-hidden">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-40 object-cover"
        />
      )}
      
      <div className="p-6 flex flex-col items-center flex-grow">
        <h3 className="text-xl font-fraunces text-forest font-bold mb-3">{title}</h3>
        <p className="text-ink font-inter leading-relaxed mb-5 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 justify-center mt-auto pt-4 border-t border-forest/5 w-full">
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
    </div>
  )
}
