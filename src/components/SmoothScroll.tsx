import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { useIsMobile } from '../hooks/useIsMobile';

const SmoothScroll: React.FC = () => {
    const isMobile = useIsMobile();
    
    useEffect(() => {
        // Désactiver le smooth scroll sur mobile pour améliorer les performances
        if (isMobile) {
            return;
        }
        
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [isMobile]);

    return null;
};

export default SmoothScroll;
