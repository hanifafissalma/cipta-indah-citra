"use client"
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
interface LayoutProps {
    children: ReactNode
    delay?: string
}
const FadeInUp: FC<LayoutProps> = (props: LayoutProps) => {
  const elementRef = useRef(null);
  const {children, delay = '0s'} = props
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ animationDelay: isVisible ? delay : "0s"}}
    >
      {children}
    </div>
  );
};

export default FadeInUp;