import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 768): boolean => {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth <= breakpoint;
        }
        return false;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

        const handleChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        setIsMobile(mediaQuery.matches);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, [breakpoint]);

    return isMobile;
};
