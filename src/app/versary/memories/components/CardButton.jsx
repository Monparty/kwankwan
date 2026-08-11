"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

function CardButton({ label, desc, img }) {
    const bgBoxRef = useRef(null);
    const boxRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => {
        if (isVisible) {
            gsap.to([bgBoxRef.current, boxRef.current], {
                autoAlpha: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        } else {
            gsap.to([bgBoxRef.current, boxRef.current], {
                autoAlpha: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }

        setIsVisible((prev) => !prev);
    };

    return (
        <div className="relative">
            <div
                ref={bgBoxRef}
                className="bg-box absolute inset-0 rounded-2xl bg-gradient-to-b from-pink-300 to-pink-50 shadow-sm"
            />
            <div className="relative flex flex-col items-center gap-2 rounded-2xl border-pink-100 p-2">
                <button
                    onClick={toggle}
                    type="button"
                    className="relative z-10 rounded-full border border-pink-100 bg-white px-6 py-1.5 text-sm font-semibold text-pink-600 shadow-sm transition-colors hover:bg-pink-500 hover:text-white"
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
