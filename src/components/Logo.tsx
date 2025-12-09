interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showText?: boolean;
}

const Logo = ({ className = '', size = 'md', showText = true }: LogoProps) => {
    const sizeClasses = {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-14 w-14',
        xl: 'h-20 w-20'
    };

    const textSizes = {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl',
        xl: 'text-3xl'
    };

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <img
                src="/logo.png"
                alt="Satya Anand Cottage Logo"
                className={`${sizeClasses[size]} object-contain`}
            />
            {showText && (
                <div className="flex flex-col">
                    <span className={`font-semibold text-foreground leading-tight ${textSizes[size]}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                        Satya Anand
                    </span>
                    <span className="text-xs text-muted-foreground tracking-widest uppercase">
                        Cottage
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
