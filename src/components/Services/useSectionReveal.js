'use client';

import { useEffect, useRef } from 'react';

/**
 * Adds `visibleClass` to the section element when it enters the viewport (homepage-style reveal).
 */
export function useSectionReveal(visibleClass, threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visibleClass, threshold]);

  return ref;
}
