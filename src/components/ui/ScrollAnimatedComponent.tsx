// src/components/ui/ScrollAnimatedComponent.tsx
"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fadeIn' | 'slideInUp' | 'slideInLeft' | 'slideInRight' | 'zoomIn';

interface ScrollAnimatedComponentProps {
  children: ReactNode;
  className?: string;
  animationType?: AnimationType;
  delay?: number; // in ms, for CSS transition-delay
  duration?: number; // in ms, for CSS transition-duration
  threshold?: number;
  triggerOnce?: boolean;
  as?: keyof JSX.IntrinsicElements; // Allows specifying the wrapping HTML element
}

export const ScrollAnimatedComponent: React.FC<ScrollAnimatedComponentProps> = ({
  children,
  className,
  animationType = 'fadeIn',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  triggerOnce = true,
  as: Element = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => {
      if (element) { // Check if element exists before unobserving
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce]);

  const getAnimationClasses = () => {
    const baseTransition = `transition-all ease-out`;
    if (!isVisible) {
      switch (animationType) {
        case 'fadeIn':
          return 'opacity-0';
        case 'slideInUp':
          return 'opacity-0 translate-y-10';
        case 'slideInLeft':
          return 'opacity-0 -translate-x-10';
        case 'slideInRight':
          return 'opacity-0 translate-x-10';
        case 'zoomIn':
          return 'opacity-0 scale-90';
        default:
          return 'opacity-0';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <Element
      ref={ref as any} // TODO: Fix type for ref based on 'as' prop if necessary
      className={cn(
        'transition-all ease-out',
        getAnimationClasses(),
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Element>
  );
};
