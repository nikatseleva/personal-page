import {RefObject, useEffect, useState} from 'react';

export function useOnScreen(ref: RefObject<HTMLElement | null>, rootMargin = '0px') {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, {rootMargin});

        observer.observe(node);
        return () => observer.disconnect();
    }, [ref, rootMargin]);

    return isVisible;
}
