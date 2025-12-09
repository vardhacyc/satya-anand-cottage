import { useState, useEffect } from 'react';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fade out after 2 seconds
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 2000);

        // Remove preloader after fade animation
        const removeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-950 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`
                }} />
            </div>

            {/* Content */}
            <div className="relative text-center">
                {/* Logo */}
                <div className={`mb-6 transition-all duration-700 ${fadeOut ? 'scale-110' : 'scale-100'}`}>
                    <img
                        src="/logo.png"
                        alt="Satya Anand Cottage"
                        className="h-24 w-24 sm:h-32 sm:w-32 mx-auto object-contain drop-shadow-2xl animate-pulse"
                    />
                </div>

                {/* Business Name */}
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Satya Anand
                </h1>
                <p className="text-lg sm:text-xl text-emerald-300 font-medium tracking-widest uppercase mb-8">
                    Cottage
                </p>

                {/* Loading indicator */}
                <div className="flex items-center justify-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        />
                    ))}
                </div>

                {/* Tagline */}
                <p className="mt-6 text-sm text-emerald-200/70 tracking-wide">
                    Pure Vegetarian Mountain Retreat
                </p>
            </div>
        </div>
    );
};

export default Preloader;
