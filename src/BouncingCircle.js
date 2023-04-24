import React, { useEffect, useRef, useState } from "react";
import "./BouncingCircle.css";

const BouncingCircle = ({ onAnimationEnd }) => {
  const canvasRef = useRef(null);
  const [isBouncingFinished, setIsBouncingFinished] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const dpi = window.devicePixelRatio;
    const canvasWidth = canvas.clientWidth * dpi;
    const canvasHeight = canvas.clientHeight * dpi;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const circleRadius = 1.25 * dpi * 40;
    let circleY = circleRadius;
    let velocityY = 0;
    const gravity = 0.5;
    const groundY = (canvasHeight - circleRadius - 2)/1.5; // Account for the line thickness
    const bounceLoss = 0.7;
    const frameRate = 1000 / 60;
    let bounceCount = 0;
    let isFading = false;

    const draw = () => {
      context.clearRect(0, 0, canvasWidth, canvasHeight);

      if (isFading) {
        context.globalAlpha -= 0.02;
      }

      context.beginPath();
      context.arc(canvasWidth / 2, circleY, circleRadius, 0, 2 * Math.PI);
      context.lineWidth = dpi * 2; // Line width for the circle (ring)
      context.strokeStyle = "black";
      context.stroke();

      context.beginPath();
      context.moveTo((canvasWidth * 3) / 8, groundY);
      context.lineTo((canvasWidth * 5) / 8, groundY);
      context.lineWidth = dpi * 2; // Line width for the ground line (2mm)
      context.stroke();

      if (!isFading) {
        velocityY += gravity;
        circleY += velocityY;

        if (circleY >= groundY - circleRadius) {
          circleY = groundY - circleRadius;
          velocityY = -velocityY * bounceLoss;
          bounceCount++;
        }
      }

      if (bounceCount >= 8 && !isFading) {
        isFading = true;
        setTimeout(() => {
          onAnimationEnd();
          setIsBouncingFinished(true);
        }, 1000);
      }
    };

    const interval = setInterval(draw, frameRate);
    return () => clearInterval(interval);
  }, [onAnimationEnd]);

  return (
    <canvas
      ref={canvasRef}
      className={`bouncing-circle ${isBouncingFinished ? "hidden" : ""}`}
    />
  );
};

export default BouncingCircle;
