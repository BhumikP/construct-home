// src/components/ui/ScrollAnimatedComponent.tsx
"use client";

import { useRef, type ReactNode } from 'react';
import { motion, useInView, type Variants, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimationType = 'fadeIn' | 'slideInUp' | 'slideInLeft' | 'slideInRight' | 'zoomIn';

interface ScrollAnimatedComponentProps {
  children: ReactNode;
  className?: string;
  animationType?: AnimationType;
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number; // IntersectionObserver threshold (0 to 1)
  triggerOnce?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const animationVariants: Record<AnimationType, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

export const ScrollAnimatedComponent: React.FC<ScrollAnimatedComponentProps> = ({
  children,
  className,
  animationType = 'fadeIn',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  triggerOnce = true,
  as = 'div',
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { 
    once: triggerOnce, 
    amount: threshold 
  });

  const MotionComponent = motion[as as keyof typeof motion] || motion.div;

  return (
    <MotionComponent
      ref={ref as any}
      className={cn(className)}
      variants={animationVariants[animationType]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: duration / 1000, // Framer Motion uses seconds
        delay: delay / 1000,       // Framer Motion uses seconds
        ease: 'easeOut',
      }}
    >
      {children}
    </MotionComponent>
  );
};
