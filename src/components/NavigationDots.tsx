import React from 'react';

interface NavigationDotsProps {
    totalSections: number;
    currentSection: number;
    onDotClick: (index: number) => void;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ totalSections, currentSection, onDotClick }) => {
    return (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col">
            {Array.from({ length: totalSections }).map((_, i) => (
                <div
                    key={i}
                    onClick={() => onDotClick(i)}
                    className={`w-3 h-3 rounded-full mb-4 cursor-pointer transition-all duration-300 ${i === currentSection ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                        }`}
                    role="button"
                    tabIndex={0}
                    aria-label={`Go to section ${i + 1}`}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            onDotClick(i);
                        }
                    }}
                />
            ))}
        </div>
    );
};

export default NavigationDots;
