import { useEffect, useRef } from 'react';
import './PageTransition.css';

export default function PageTransition() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    // Fade out after a brief moment
    const timer = setTimeout(() => {
      overlay.classList.add('fade-out');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return <div className="page-overlay" ref={overlayRef} />;
}
