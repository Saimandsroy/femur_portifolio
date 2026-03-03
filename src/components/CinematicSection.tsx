import React, { useMemo } from 'react';

interface CinematicSectionProps {
    children: React.ReactNode;
    isActive: boolean;
    isPrevious: boolean;
    isNext: boolean;
    direction: number; // 1 for down, -1 for up
    zIndex: number;
}

const CinematicSection: React.FC<CinematicSectionProps> = ({
    children,
    isActive,
    isPrevious,
    isNext,
    // direction, // Not currently used in the component
    zIndex,
}) => {
    // Apple-style Zoom Transition Logic:
    // "Zoom In" (Entering): Starts at Scale 1.15, Opacity 0 -> Ends at Scale 1.0, Opacity 1
    // "Zoom Out" (Exiting): Starts at Scale 1.0, Opacity 1 -> Ends at Scale 0.85, Opacity 0

    // We use CSS transitions with the specific cubic-bezier for "buttery smooth" feel.

    const style = useMemo((): React.CSSProperties => {
        let opacity = 0;
        let scale = 1; // Default
        let blur = 0;
        let pointerEvents: 'auto' | 'none' = 'none';
        let zIndexVal = zIndex;

        if (isActive) {
            // ACTIVE: Normal state
            opacity = 1;
            scale = 1;
            blur = 0;
            pointerEvents = 'auto';
            zIndexVal = 10;
        } else if (isPrevious) {
            // EXITING: Recede into background (Zoom Out)
            // Scale 1.0 -> 0.85
            opacity = 0;
            scale = 0.85;
            blur = 10; // Gentle blur for depth
            zIndexVal = 5; // Below active
        } else if (isNext) {
            // ENTERING: Come from foreground (Zoom In)
            // Scale 1.15 -> 1.0
            opacity = 0;
            scale = 1.15;
            blur = 10;
            zIndexVal = 5;
        }
        // If neither (hidden far away), keep defaults (opacity 0)

        return {
            position: 'absolute',
            inset: 0,
            width: '100vw',
            height: '100dvh', // Modern browsers
            minHeight: '100vh', // Fallback
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',

            // The Magic: GPU Acceleration properties
            opacity,
            transform: `scale(${scale}) translate3d(0,0,0)`, // translate3d forces GPU
            filter: `blur(${blur}px)`,
            zIndex: zIndexVal,
            pointerEvents,

            // Center origin for the zoom
            transformOrigin: 'center center',
            backfaceVisibility: 'hidden',

            // "Buttery Smooth" Transition
            transition: `
              opacity 1200ms cubic-bezier(0.4, 0.0, 0.2, 1),
              transform 1200ms cubic-bezier(0.4, 0.0, 0.2, 1),
              filter 1200ms linear
          `,
            willChange: 'transform, opacity, filter',
        };
    }, [isActive, isPrevious, isNext]);

    return (
        <div style={style}>
            <div className="w-full h-full overflow-y-auto no-scrollbar relative">
                {children}
            </div>
        </div>
    );
};

export default CinematicSection;
