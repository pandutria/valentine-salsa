/* eslint-disable react-hooks/purity */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Detail() {
    const [showContent, setShowContent] = useState<boolean>(false)
    const [hearts, setHearts] = useState<Array<{ id: number; left: string; delay: string; duration: string; emoji: string }>>([])
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => setShowContent(true), 500)
        
        // Generate random hearts for animation
        const heartEmojis = ['❤️', '💕', '💖', '💗', '🌹', '💐', '💝', '💓', '💞', '🌺']
        const generatedHearts = Array.from({ length: 25 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${8 + Math.random() * 12}s`,
            emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
        }))
        setHearts(generatedHearts)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-purple-100 p-4 py-12 relative overflow-hidden">
            {/* Floating Hearts */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {hearts.map((heart) => (
                    <div
                        key={heart.id}
                        className="absolute animate-float"
                        style={{
                            left: heart.left,
                            animationDelay: heart.delay,
                            fontSize: `${20 + Math.random() * 25}px`,
                            animationDuration: heart.duration
                        }}
                    >
                        {heart.emoji}
                    </div>
                ))}
            </div>

            {/* Sparkle effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 15 }).map((_, i) => (
                    <div
                        key={`sparkle-${i}`}
                        className="absolute animate-sparkle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    >
                        ✨
                    </div>
                ))}
            </div>

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <div className="text-7xl mb-4 animate-bounce-slow relative">
                        💝
                        <span className="absolute -top-2 -right-2 text-3xl animate-ping">💕</span>
                    </div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-transparent mb-4 animate-gradient">
                        Dear Salsa
                    </h1>
                    <div className="flex items-center justify-center gap-3 text-xl text-gray-600">
                        <span className="animate-spin-slow">🌹</span>
                        <span>Happy Valentine's Day 2026</span>
                        <span className="animate-spin-slow">🌹</span>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8 relative overflow-hidden transition-all duration-1000 delay-300 hover:shadow-pink-200 hover:shadow-3xl ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Decorative corners with animation */}
                    <div className="absolute top-0 left-0 text-6xl opacity-10 animate-pulse">💐</div>
                    <div className="absolute top-0 right-0 text-6xl opacity-10 animate-pulse delay-200">🎀</div>
                    <div className="absolute bottom-0 left-0 text-6xl opacity-10 animate-pulse delay-300">🌺</div>
                    <div className="absolute bottom-0 right-0 text-6xl opacity-10 animate-pulse delay-100">🦋</div>

                    {/* Floating mini hearts inside card */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div
                                key={`mini-${i}`}
                                className="absolute animate-float-mini"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 4}s`,
                                    fontSize: '14px',
                                    animationDuration: `${6 + Math.random() * 8}s`
                                }}
                            >
                                💕
                            </div>
                        ))}
                    </div>

                    <div className="relative z-10 space-y-6 text-gray-700 leading-relaxed">
                        {/* Paragraph 1 */}
                        <div className="flex items-start gap-3 animate-slide-in delay-500">
                            <span className="text-2xl animate-bounce-gentle">💌</span>
                            <p className="text-lg">
                                Sal, sebelum kamu baca surat ini sepenuhnya, kamu harus percaya ya kalo surat ini murni aku yang tulis tanpa bantuan AI.
                            </p>
                        </div>

                        {/* Paragraph 2 */}
                        <div className="flex items-start gap-3 animate-slide-in delay-700">
                            <span className="text-2xl animate-bounce-gentle delay-100">✨</span>
                            <p className="text-lg">
                                Jujur sal, baru kali ini aku mau belajar buat long text ke kamu. Walaupun mungkin keliatanya gampang, tapi menurut aku ini susah banget karna aku belum pernah mencoba se long text ini sebelumnya. Kalo kurang menarik/kurang seru, maaf ya sayang krna aku first time to try this method.
                            </p>
                        </div>

                        {/* Paragraph 3 - Main Love Letter */}
                        <div className="flex items-start gap-3 animate-slide-in delay-900 bg-gradient-to-r from-pink-50/50 to-red-50/50 p-4 rounded-2xl border-l-4 border-pink-300">
                            <span className="text-2xl animate-heartbeat">🌹</span>
                            <p className="text-lg">
                                Sal, ini pertama kali aku ngasih something yang menurut ku "special" ke someone di valentine day, tpi kamu jangan liat harga nya ya hehe. Rasanya gk nyangka sal kalo valentine day 2026 itu bakal se deket dan se intim ini sm kamu, entah ini efek dari sebuah cinta atau efek dari kenaikan dopamin yang ada pada dalam tubuh ini. Apapun alasanya sal, aku ngaku klo aku udah jatuh cinta se jatuh jatuh nya ke kamu, awalnya aku juga gk yakin sal klo aku bisa sejatuh ini ke kamu, tapi aku sadar sal klo skrg hidup ku psti terasa lebih berat klo kamu hilang dari hidup aku. Aku udah se terbiasa itu denger yapping kamuuuuu, aku udah  se terbiasa itu liatin foto foto kamuuuuu, aku udah se ternyaman itu klo kasih kamu physical touch, aku udah se tenang itu klo kamu jadi bayi di depan aku. Dan kamu itu my tipe banget sal, ngeliat foto foto kamu yang level++ bikin aku semangat ngelakuin apapun, yaaa serasa jadi "mood booster" hehe. Maaf ya sayangg kalo aku belum bisa jadi apa yang kamu harapkan, mungkin blm bs jadi someone seperti in your past. Tapi sal, aku selalu mencoba untuk belajar lebih baik, lebih romantis, lebih intim, lebih lembut. Contoh ny kyk aku mau biasa in ngomong "aku & kamu" ke kamu, lebih halus bahasanya juga hehe. Kamu bisa kasih aku wktu untuk belajar yaa, biar bs jadi se baik, se romantis, se terlihat sayang banget ke kamu, se semuanya dehhh ke kamu.
                                Kalo kamu jeles ke aku, kamu ngomong aja ya sal ke aku, karna aku akan lebih cinta kalo kamu terbuka sm aku tentang hidup kamu, hati kamu, everything abt you deh pokoknya.
                                Klo kamu lagi ada pikiran aneh tentang sosmed aku, kamu minta aku buat tunjukin chat chat sosmed aku ya, atau like/favorite di tiktok/insta. Karna terkadang pasti ada pikiran/perasaan kurang sreg di diri kamu.
                                Kalo kamu mau sekalian pegang sosmed aku juga boleh, minta sesuatu ke aku juga boleh. Kalo mau minta something gitu tinggal bilang ke aku ya, klo kamu gengsi bisa pake kode kode gitu koks, pokoknya jangan ada yang ketahan di hati kamu.
                                Aku cinta kamu sal, you are my first and last person make me fall in love.
                            </p>
                        </div>

                        {/* Paragraph 4 */}
                        <div className="flex items-start gap-3 animate-slide-in delay-1100">
                            <span className="text-2xl animate-bounce-gentle delay-200">💕</span>
                            <p className="text-lg">
                                Aku berjanji akan selalu ada untuk kamu, di setiap hari hari kamu, di setiap aktivitas. Karena bersamamu, aku menemukan "something special" yang belum pernah aku temukan sebelumnya.
                            </p>
                        </div>

                        {/* Quote Box */}
                        <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-6 mt-8 border-2 border-pink-200 animate-slide-in delay-1300 relative overflow-hidden hover:scale-105 transition-transform duration-300">
                            {/* Animated background hearts */}
                            <div className="absolute inset-0 opacity-5">
                                <span className="absolute top-2 left-4 text-4xl animate-pulse">💖</span>
                                <span className="absolute bottom-2 right-4 text-4xl animate-pulse delay-200">💗</span>
                            </div>
                            <p className="text-center text-xl font-semibold text-transparent bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text relative z-10">
                                "Selamat hari Valentine ya calon istriku, feedback nya ketik di wa ya sayanggg"
                            </p>
                            <div className="flex justify-center gap-2 mt-4 text-2xl relative z-10">
                                <span className="animate-heartbeat">💖</span>
                                <span className="animate-heartbeat delay-100">💗</span>
                                <span className="animate-heartbeat delay-200">💓</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={`text-center space-y-6 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex justify-center gap-4 text-4xl">
                        <span className="animate-bounce-gentle">💝</span>
                        <span className="animate-bounce-gentle delay-100">🌹</span>
                        <span className="animate-bounce-gentle delay-200">💐</span>
                        <span className="animate-bounce-gentle delay-300">💕</span>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 inline-block hover:bg-white/90 transition-all hover:scale-105 shadow-lg hover:shadow-pink-200">
                        <p className="text-gray-700 text-lg mb-2">With all my love,</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
                            Your Forever Valentine 💕
                        </p>
                    </div>

                    <button
                        onClick={() => navigate('/')}
                        className="mt-8 px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-red-600 transform hover:scale-110 transition-all shadow-lg hover:shadow-pink-300 flex items-center gap-2 mx-auto group"
                    >
                        <span className="group-hover:animate-bounce">🏠</span>
                        Back to Home
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                    10% { opacity: 0.7; }
                    90% { opacity: 0.7; }
                    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
                }
                
                @keyframes float-mini {
                    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
                    50% { transform: translateY(-30px) rotate(180deg); opacity: 0.6; }
                }
                
                @keyframes sparkle {
                    0%, 100% { opacity: 0; transform: scale(0); }
                    50% { opacity: 1; transform: scale(1.5); }
                }
                
                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    25% { transform: scale(1.2); }
                    50% { transform: scale(1); }
                }
                
                @keyframes bounce-gentle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes slide-in {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                .animate-float { animation: float linear infinite; }
                .animate-float-mini { animation: float-mini ease-in-out infinite; }
                .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
                .animate-heartbeat { animation: heartbeat 1.5s ease-in-out infinite; }
                .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
                .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
                .animate-slide-in { animation: slide-in 0.8s ease-out forwards; }
                .animate-spin-slow { animation: spin-slow 8s linear infinite; }
                .animate-gradient { 
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
                
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-500 { animation-delay: 0.5s; }
                .delay-700 { animation-delay: 0.7s; }
                .delay-900 { animation-delay: 0.9s; }
                .delay-1100 { animation-delay: 1.1s; }
                .delay-1300 { animation-delay: 1.3s; }
                
                .shadow-3xl {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }
            `}</style>
        </div>
    )
}