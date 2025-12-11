import React from 'react';

interface AnimatedContentProps {
    children: React.ReactNode;
    isActive: boolean;
    delay?: number; // Base delay in ms
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({ children, isActive, delay = 300 }) => { // Increased base delay for smoother sequence
    const childrenArray = React.Children.toArray(children);

    return (
        <div className="w-full h-full">
            {childrenArray.map((child, index) => {
                // "Heroic" stagger: Slower, more deliberate
                const itemDelay = delay + (index * 200);

                return (
                    <div
                        key={index}
                        style={{
                            opacity: isActive ? 1 : 0,
                            // Micro-animation: Slide up 20px
                            transform: `translate3d(0, ${isActive ? 0 : 30}px, 0)`,
                            // Spring-like feel for content
                            transition: `all 1000ms cubic-bezier(0.2, 0.8, 0.2, 1) ${itemDelay}ms`,
                            willChange: 'transform, opacity'
                        }}
                    >
                        {child}
                    </div>
                );
            })}
        </div>
    );
};

export default AnimatedContent;
