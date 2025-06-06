import { useEffect, useState } from 'react';

export function useScrollEffects() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollEffects = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(currentScrollY / documentHeight, 1);

      setScrollY(currentScrollY);
      setScrollDirection(direction);
      setScrollProgress(progress);

      // Update CSS custom properties for scroll-based animations
      document.documentElement.style.setProperty('--scroll-y', `${currentScrollY}px`);
      document.documentElement.style.setProperty('--scroll-progress', `${progress}`);

      lastScrollY = currentScrollY;
    };

    const throttledUpdate = throttle(updateScrollEffects, 10);
    window.addEventListener('scroll', throttledUpdate);

    return () => window.removeEventListener('scroll', throttledUpdate);
  }, []);

  return { scrollY, scrollDirection, scrollProgress };
}

function throttle(func: Function, wait: number) {
  let timeout: NodeJS.Timeout | null = null;
  let previous = 0;

  return function executedFunction(...args: any[]) {
    const now = Date.now();
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(null, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;
        func.apply(null, args);
      }, remaining);
    }
  };
}

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '-50px',
      ...options,
    });

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, options]);

  return [setRef, isIntersecting] as const;
}