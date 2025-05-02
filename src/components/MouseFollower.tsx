import { useEffect } from "react";

export default function MouseFollower() {
  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    const ease = 0.15;

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function animate() {
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      document.documentElement.style.setProperty(
        "--mouse-x",
        `${currentX}px`
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${currentY}px`
      );

      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove);
    animate();
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return null;
}
