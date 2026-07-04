import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);

    const mouse = { x: width / 2, y: height / 2 };
    const target = { x: width / 2, y: height / 2 };
    
    let isHovering = false;

    const updateMouse = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      
      const targetElement = e.target as HTMLElement;
      isHovering = !!targetElement.closest('a, button, [role="button"], input, select, textarea');
    };

    window.addEventListener('mousemove', updateMouse);

    // Parse the accent color (assuming #F27D26 or similar hex)
    const rootStyle = getComputedStyle(document.documentElement);
    let accentColor = rootStyle.getPropertyValue('--color-accent').trim() || '#f27d26';
    
    const hexToRgb = (hex: string) => {
        let r = 0, g = 0, b = 0;
        if (hex.length === 4) {
          r = parseInt(hex[1] + hex[1], 16);
          g = parseInt(hex[2] + hex[2], 16);
          b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
          r = parseInt(hex.substring(1, 3), 16);
          g = parseInt(hex.substring(3, 5), 16);
          b = parseInt(hex.substring(5, 7), 16);
        }
        return `${r}, ${g}, ${b}`;
    };
    
    const rgbAccent = accentColor.startsWith('#') ? hexToRgb(accentColor) : '242, 125, 38';

    const maxPoints = 25; // Number of snake segments
    const points: {x: number, y: number}[] = [];
    
    for(let i = 0; i < maxPoints; i++) {
        points.push({x: mouse.x, y: mouse.y});
    }

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update first point (head)
      const ease = 0.4;
      points[0].x += (target.x - points[0].x) * ease;
      points[0].y += (target.y - points[0].y) * ease;

      // Update rest of the points
      for (let i = 1; i < maxPoints; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.45;
        points[i].y += (points[i - 1].y - points[i].y) * 0.45;
      }
      
      const headSize = isHovering ? 24 : 16;

      // Draw the snake from tail to head
      for (let i = maxPoints - 1; i >= 0; i--) {
        const point = points[i];
        const progress = 1 - (i / maxPoints); // 1 at head, 0 at tail
        
        const size = (6 + (headSize - 6) * progress);
        const opacity = progress;

        ctx.beginPath();
        ctx.arc(point.x, point.y, size / 2, 0, Math.PI * 2);
        
        if (i === 0) {
            // Head
            ctx.shadowBlur = isHovering ? 30 : 15;
            ctx.shadowColor = `rgba(${rgbAccent}, 0.8)`;
            ctx.fillStyle = `rgba(${rgbAccent}, 1)`;
        } else {
            // Trail
            ctx.shadowBlur = 0;
            ctx.fillStyle = `rgba(${rgbAccent}, ${opacity * 0.7})`;
        }
        
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', updateMouse);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block"
    />
  );
}
