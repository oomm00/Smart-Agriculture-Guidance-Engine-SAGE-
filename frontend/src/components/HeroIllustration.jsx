export default function HeroIllustration() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-16 px-4">
      <svg viewBox="0 0 800 300" className="w-full h-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Sun / Accent Element */}
        <circle cx="680" cy="100" r="45" fill="#E0A458" opacity="0.9" />
        
        {/* Back Hill */}
        <path d="M-50 300 L-50 150 Q 200 80 450 180 T 850 100 L850 300 Z" fill="#2F4F33" opacity="0.5"/>
        
        {/* Middle Hill */}
        <path d="M-50 300 L-50 200 Q 150 120 400 220 T 850 180 L850 300 Z" fill="#2F4F33" opacity="0.75"/>
        
        {/* Front Hill */}
        <path d="M-50 300 L-50 250 Q 300 180 550 280 T 850 220 L850 300 Z" fill="#2F4F33" />
        
        {/* Leaf Accents on Hills */}
        {/* Group 1 */}
        <path d="M 200 200 C 180 180, 180 150, 200 150 C 220 150, 220 180, 200 200 Z" fill="#E0A458" transform="rotate(-15 200 200)"/>
        <path d="M 170 230 C 150 210, 150 180, 170 180 C 190 180, 190 210, 170 230 Z" fill="#C8714D" transform="rotate(35 170 230)"/>
        
        {/* Group 2 */}
        <path d="M 500 260 C 480 240, 480 210, 500 210 C 520 210, 520 240, 500 260 Z" fill="#E0A458" transform="rotate(45 500 250)"/>
        <path d="M 540 270 C 525 255, 525 235, 540 235 C 555 235, 555 255, 540 270 Z" fill="#C8714D" transform="rotate(-20 540 270)"/>
        
        {/* Group 3 */}
        <path d="M 600 160 C 580 140, 580 110, 600 110 C 620 110, 620 140, 600 160 Z" fill="#C8714D" transform="rotate(-30 600 150)"/>
      </svg>
    </div>
  )
}
