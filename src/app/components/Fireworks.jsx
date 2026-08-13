"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Fireworks() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        let interval;

        const explode = (x, y, color) => {
            for (let i = 0; i < 50; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = 2 + Math.random() * 5;

                const p = {
                    x,
                    y,
                    opacity: 1,
                };

                gsap.to(p, {
                    x: x + Math.cos(angle) * speed * 50,
                    y: y + Math.sin(angle) * speed * 50 + 25,
                    opacity: 0,
                    duration: 1,
                    ease: "power1.out",

                    onUpdate: () => {
                        ctx.save();
                        ctx.globalAlpha = p.opacity;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                        ctx.fillStyle = color;
                        ctx.fill();
                        ctx.restore();
                    },
                });
            }
        };

        const colors = ["#66C5CC", "#FFB347", "##FF6961", "#77DD77"];

        const fire = () => {
            const x = Math.random() * canvas.width;
            const targetY = Math.random() * canvas.height * 0.5;

            // สุ่มใหม่ทุกครั้งที่ยิงพลุ
            const color = colors[Math.floor(Math.random() * colors.length)];

            const rocket = {
                x,
                y: canvas.height,
            };

            gsap.to(rocket, {
                y: targetY,
                duration: 1.5,
                ease: "power2.out",

                onUpdate: () => {
                    ctx.beginPath();
                    ctx.arc(rocket.x, rocket.y, 3, 0, Math.PI * 2);
                    ctx.fillStyle = color;
                    ctx.fill();
                },

                onComplete: () => {
                    explode(rocket.x, rocket.y, color);
                },
            });
        };

        const render = () => {
            ctx.save();

            ctx.globalCompositeOperation = "destination-out";
            ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.restore();

            requestAnimationFrame(render);
        };

        render();
        interval = setInterval(fire, 100);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resize);
            gsap.killTweensOf("*");
        };
    }, []);

    return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-50 h-full w-full" />;
}
