"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

function CardButton({ label, desc, img }) {
    const bgBoxRef = useRef(null);
    const boxRef = useRef(null);
    const btnRef = useRef(null);
    const hasAnimatedRef = useRef(false);

    const handleBtnClick = () => {
        // ตอนแสดงผล
        if (hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;
        const tl = gsap.timeline();

        tl.to(bgBoxRef.current, {
            autoAlpha: 1,
            duration: 0.5,
            ease: "power2.out",
            background: "linear-gradient(to bottom, #f9a8d4, #fdf2f8)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.04)",
        })
            .fromTo(
                boxRef.current,
                {
                    autoAlpha: 0,
                    width: "0%",
                    scale: 1,
                    y: 8,
                    filter: "blur(2px)",
                },
                {
                    autoAlpha: 1,
                    width: "100%",
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "power3.inOut",
                },
                "-=0.55",
            )
            .fromTo(
                btnRef.current,
                {
                    autoAlpha: 0,
                    y: 10,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                },
                "-=0.45",
            );
    };

    return (
        <div className="relative">
            <div ref={bgBoxRef} className="bg-box absolute inset-0 rounded-2xl" />
            <div className="relative flex flex-col items-center gap-2 rounded-2xl border-pink-100 p-2">
                <button
                    onClick={handleBtnClick}
                    ref={btnRef}
                    type="button"
                    className=" translate-y-30 relative z-10 rounded-full border border-pink-100 bg-white px-6 py-1.5 text-sm font-semibold text-pink-600 shadow-sm transition-colors hover:bg-pink-500 hover:text-white"
                >
                    {label}
                </button>
                <div ref={boxRef} className="flex flex-col items-center gap-2 opacity-0">
                    <p className="text-center text-sm leading-relaxed text-gray-500">{desc}</p>
                    <div className="flex min-h-[12rem] w-full items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white p-2 shadow-inner">
                        <Image
                            src={img}
                            alt={label}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="h-auto w-auto max-h-[12rem] max-w-[12rem] rounded-lg object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardButton;
