import { useState, useEffect } from 'react';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 2000);

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
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[hsl(220,20%,5%)] via-[hsl(220,20%,7%)] to-[hsl(220,18%,10%)] transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Gold glow effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(38,75%,55%,0.08),transparent_60%)]" />

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
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-[hsl(40,15%,95%)] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Satya Anand
                </h1>
                <p className="text-lg sm:text-xl text-[hsl(38,75%,55%)] font-medium tracking-widest uppercase mb-8">
                    Cottage
                </p>

                {/* Loading indicator */}
                <div className="flex items-center justify-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-[hsl(38,75%,55%)] rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        />
                    ))}
                </div>

                {/* Tagline */}
                <p className="mt-6 text-sm text-[hsl(40,10%,50%)] tracking-wide">
                    Pure Veg and Non-Alcoholic Hotel
                </p>
            </div>
        </div>
    );
};

export default Preloader;
