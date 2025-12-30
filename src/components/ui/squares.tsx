// src/components/ui/squares.tsx
"use client";

import { useRef, useEffect, useState } from "react";

interface SquaresProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left";
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  className?: string;
}

export function Squares({
  direction = "right",
  speed = 1,
  borderColor = "#333",
  squareSize = 40,
  hoverFillColor = "#222",
  className,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0); // Initialize with 0
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const [hoveredSquare, setHoveredSquare] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      ctx.lineWidth = 0.5;
      ctx.strokeStyle = borderColor;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);

          if (
            hoveredSquare &&
            Math.floor((x - startX) / squareSize) === hoveredSquare.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquare.y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      // Move grid
      const gradientSpeed = speed / 2;
      switch (direction) {
        case "right":
          gridOffset.current.x = (gridOffset.current.x - gradientSpeed) % squareSize;
          break;
        case "left":
          gridOffset.current.x = (gridOffset.current.x + gradientSpeed) % squareSize;
          break;
        case "down":
          gridOffset.current.y = (gridOffset.current.y - gradientSpeed) % squareSize;
          break;
        case "up":
          gridOffset.current.y = (gridOffset.current.y + gradientSpeed) % squareSize;
          break;
        case "diagonal":
          gridOffset.current.x = (gridOffset.current.x - gradientSpeed) % squareSize;
          gridOffset.current.y = (gridOffset.current.y - gradientSpeed) % squareSize;
          break;
      }

      requestRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      const hoveredX = Math.floor((mouseX + gridOffset.current.x - startX) / squareSize);
      const hoveredY = Math.floor((mouseY + gridOffset.current.y - startY) / squareSize);

      setHoveredSquare({ x: hoveredX, y: hoveredY });
    };

    const onMouseLeave = () => {
      setHoveredSquare(null);
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    requestRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current); // Check if requestRef.current exists
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, hoveredSquare, squareSize]);

  return <canvas ref={canvasRef} className={`w-full h-full border-none block ${className}`} />;
}