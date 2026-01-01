import { useState, useEffect } from 'react';

export const useIsMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => {
            const isMobileDevice = 
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                (typeof window !== 'undefined' && window.innerWidth < 768);
            setIsMobile(isMobileDevice);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

