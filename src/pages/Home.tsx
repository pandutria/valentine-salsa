import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [code, setCode] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [showHint, setShowHint] = useState<boolean>(false)
  const navigate = useNavigate()
  
  const SECRET_CODE = "1999" 
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (code.toUpperCase() === SECRET_CODE) {
      navigate('/detail')
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                // eslint-disable-next-line react-hooks/purity
                left: `${Math.random() * 100}%`,
                // eslint-disable-next-line react-hooks/purity
                animationDelay: `${Math.random() * 5}s`,
                // eslint-disable-next-line react-hooks/purity
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            >
              ❤️
            </div>
          ))}
        </div>
        
        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 text-6xl opacity-20">💕</div>
          <div className="absolute bottom-0 left-0 text-6xl opacity-20">🌹</div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 animate-bounce">💌</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
                Happy Valentine's Day
              </h1>
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <span>✨</span>
                For someone special
                <span>✨</span>
              </p>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <span>🔐</span>
                Secret Code
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    error 
                      ? 'border-red-300 focus:ring-red-200 animate-shake' 
                      : 'border-pink-200 focus:ring-pink-300'
                  }`}
                  placeholder="Enter secret code..."
                />
                {error && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span>❌</span>
                    Wrong code! Try again
                  </p>
                )}
                
                {/* Hint Toggle */}
                <div className="mt-3 text-center">
                  <button
                    type="button"
                    onClick={() => setShowHint(!showHint)}
                    className="text-sm text-pink-600 hover:text-pink-700 underline underline-offset-2 flex items-center gap-1 mx-auto transition-colors"
                  >
                    <span>💡</span>
                    {showHint ? 'Hide instruction' : 'See instruction?'}
                  </button>
                  
                  {showHint && (
                    <div className="mt-3 p-4 bg-pink-50 border-2 border-pink-200 rounded-xl animate-fadeIn">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold text-pink-600">Clue:</span> <br />
                        Tanggal ultah Salsa - Bulan ultah Pengirim + Tanggal ultah Pengirim - Bulan ultah salsa - Tanggal Valentine
                      </p>
                      <p className="text-xs text-gray-500 mt-2 italic">
                        Klo gk nemu, coba cht orang nya
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>💝</span>
                Unlock Love Letter
                <span>💝</span>
              </button>
            </form>
            
            {/* Decorative Icons */}
            <div className="flex justify-center gap-4 mt-8 text-2xl">
              <span className="animate-pulse">💖</span>
              <span className="animate-pulse delay-100">💗</span>
              <span className="animate-pulse delay-200">💓</span>
              <span className="animate-pulse delay-300">💕</span>
            </div>
          </div>
        </div>
        
        {/* Bottom decoration */}
        <div className="text-center mt-6 text-sm text-gray-600 flex items-center justify-center gap-2">
          <span>🌹</span>
          Made with love for Salsa
          <span>🌹</span>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float linear infinite; }
        .animate-shake { animation: shake 0.3s ease-in-out; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  )
}