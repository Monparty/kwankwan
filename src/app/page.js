"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import m1 from "../../public/images/m1.jpg";
import m2 from "../../public/images/m2.jpg";
import m3 from "../../public/images/m3.jpg";
import m4 from "../../public/images/m4.jpg";
import m5 from "../../public/images/m5.jpg";
import m6 from "../../public/images/m6.jpg";
import m7 from "../../public/images/m7.jpg";
import m8 from "../../public/images/m8.jpg";
import m9 from "../../public/images/m9.jpg";
import m10 from "../../public/images/m10.jpg";
import m11 from "../../public/images/m11.jpg";
import m12 from "../../public/images/m12.jpg";
import m13 from "../../public/images/m13.jpg";
import m14 from "../../public/images/m14.jpg";
import m15 from "../../public/images/m15.jpg";
import m16 from "../../public/images/m16.jpg";
import m17 from "../../public/images/m17.jpg";
import m18 from "../../public/images/m18.jpg";
import m19 from "../../public/images/m19.jpg";
import m20 from "../../public/images/m20.jpg";
import m21 from "../../public/images/m21.jpg";
import m22 from "../../public/images/m22.jpg";
import m23 from "../../public/images/m23.jpg";
import m24 from "../../public/images/m24.jpg";
import m25 from "../../public/images/m25.jpg";
import m26 from "../../public/images/m26.jpg";
import m27 from "../../public/images/m27.jpg";
import m28 from "../../public/images/m28.jpg";
import m29 from "../../public/images/m29.jpg";
import m30 from "../../public/images/m30.jpg";
import m31 from "../../public/images/m31.jpg";
import m32 from "../../public/images/m32.jpg";
import m33 from "../../public/images/m33.jpg";
import m34 from "../../public/images/m34.jpg";
import m35 from "../../public/images/m35.jpg";
import m36 from "../../public/images/m36.jpg";
import m37 from "../../public/images/m37.jpg";
import m38 from "../../public/images/m38.jpg";
import m39 from "../../public/images/m39.jpg";
import Confetti from './components/Confetti';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const tl = gsap.timeline();
    const h1 = useRef(null);
    const h2 = useRef(null);
    const m1Ref = useRef(null);
    const m2Ref = useRef(null);
    const m3Ref = useRef(null);
    const m4Ref = useRef(null);
    const cursorRef = useRef(null);
    const mainRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showConfetti, setShowConfetti] = useState(false);

    const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Hide after 3 seconds
  };

    const heart1 = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
        >
            <path
                fill="#fb64b6"
                fill-opacity="0"
                d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"
            >
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.7s"
                    dur="0.5s"
                    values="0;1"
                />
            </path>
            <path
                fill="none"
                stroke="#fb64b6"
                stroke-dasharray="32"
                stroke-dashoffset="32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
            >
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.7s"
                    values="32;0"
                />
            </path>
        </svg>
    );
    const heart2 = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
        >
            <path
                fill="#fb64b6"
                fill-opacity="0"
                d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"
            >
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.7s"
                    dur="0.15s"
                    values="0;0.3"
                />
            </path>
            <path
                fill="none"
                stroke="#fb64b6"
                stroke-dasharray="32"
                stroke-dashoffset="32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
            >
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.7s"
                    values="32;0"
                />
            </path>
        </svg>
    );

    useGSAP(() => {
        gsap.from(h1.current, {
            opacity: 0,
            duration: 1,
            delay: 0.5,
            y: 30,
            stagger: 0.5,
        });
        gsap.from(h2.current, {
            opacity: 0,
            duration: 1,
            delay: 1,
            y: 30,
            stagger: 0.5,
        });
        gsap.to(m1Ref.current, {
            opacity: 1,
            duration: 1,
            delay: 1,
            rotate: 5,
        });
        gsap.to(m2Ref.current, {
            opacity: 1,
            duration: 1,
            delay: 1.5,
            rotate: -5,
        });
        gsap.to(m3Ref.current, {
            opacity: 1,
            duration: 1,
            delay: 2,
            rotate: -5,
        });
        gsap.to(m4Ref.current, {
            opacity: 1,
            duration: 1,
            delay: 2.5,
            rotate: 5,
        });

        gsap.to(m4Ref.current, {
            opacity: 1,
            duration: 1,
            delay: 2.5,
            rotate: 5,
        });

        gsap.to('.gridImg', {
            duration: 1,
            transition: 1,
            opacity: 1,
            stagger: .3,
            ease: "steps(12)",
            scrollTrigger: {
                trigger: '.boxGridImg',
                start: "top 80%",
                end: "top 30%",
                // markers: true,
            }
        });

    }, []);

    return (
        <div>
            <section className="w-full h-dvh bg-linear-to-t from-pink-100 to-pink-300 grid place-items-center relative">
                <div className="grid gap-6 text-pink-400">
                    <h1 ref={h1} className="text-6xl font-black text-center">
                        Happy anniversary
                    </h1>
                    <h1 ref={h2} className="text-6xl font-black text-center">
                        5 month
                    </h1>
                </div>
                <div className="absolute top-10 left-10 animate-[bounce_5s_ease-in-out_infinite]">
                    {heart1}
                </div>
                <div className="absolute top-10 right-10 animate-[bounce_3s_ease-in-out_infinite]">
                    {heart2}
                </div>
                <div className="absolute bottom-10 left-10 animate-[bounce_3s_ease-in-out_infinite]">
                    {heart2}
                </div>
                <div className="absolute bottom-10 right-10 animate-[bounce_4s_ease-in-out_infinite]">
                    {heart1}
                </div>

                <div className="absolute top-40 left-40 animate-[bounce_6s_ease-in-out_infinite]">
                    {heart2}
                </div>
                <div className="absolute top-40 right-40 animate-[bounce_4s_ease-in-out_infinite]">
                    {heart1}
                </div>
                <div className="absolute bottom-40 left-40 animate-[bounce_4s_ease-in-out_infinite]">
                    {heart1}
                </div>
                <div className="absolute bottom-40 right-40 animate-[bounce_5s_ease-in-out_infinite]">
                    {heart2}
                </div>
                <Image
                    src={m1}
                    ref={m1Ref}
                    className="w-40 h-40 rounded-xl top-20 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300 border-4 border-pink-50"
                />
                <Image
                    src={m2}
                    ref={m2Ref}
                    className="w-40 h-40 rounded-xl right-30 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300 border-4 border-pink-50"
                />
                <Image
                    src={m4}
                    ref={m3Ref}
                    className="w-40 h-40 rounded-xl bottom-20 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300 border-4 border-pink-50"
                />
                <Image
                    src={m3}
                    ref={m4Ref}
                    className="w-40 h-40 rounded-xl left-30 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300 border-4 border-pink-50"
                />
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fce7f3" fill-opacity="1" d="M0,64L12.6,58.7C25.3,53,51,43,76,85.3C101.1,128,126,224,152,224C176.8,224,202,128,227,90.7C252.6,53,278,75,303,112C328.4,149,354,203,379,208C404.2,213,429,171,455,176C480,181,505,235,531,250.7C555.8,267,581,245,606,213.3C631.6,181,657,139,682,138.7C707.4,139,733,181,758,213.3C783.2,245,808,267,834,245.3C858.9,224,884,160,909,149.3C934.7,139,960,181,985,208C1010.5,235,1036,245,1061,229.3C1086.3,213,1112,171,1137,160C1162.1,149,1187,171,1213,154.7C1237.9,139,1263,85,1288,96C1313.7,107,1339,181,1364,192C1389.5,203,1415,149,1427,122.7L1440,96L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"></path></svg>
            <section className="bg-linear-to-t from-pink-100 to-pink-200 pt-20">
                <div className="boxGridImg">
                    <div className="grid grid-cols-3 lg:grid-cols-4 px-2 lg:px-0 justify-center items-center w-full lg:w-1/2 mx-auto gap-2">
                        <Image src={m1} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m2} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m3} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m4} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m5} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m6} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m7} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m8} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m9} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m10} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m11} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m12} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m13} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m14} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m15} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg" />
                        <Image src={m16} className="w-full h-40 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg hidden lg:block" />
                    </div>
                </div>
                <div className="flex justify-center pt-20">
                    <button onClick={triggerConfetti} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-pink-600 transition duration-300 ease-out border-2 border-pink-500 rounded-full shadow-md group cursor-pointer">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-300 group-hover:translate-x-0 ease">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fb64b6" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"/></svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">Click Me</span>
                        <span class="relative invisible">Click Me</span>
                    </button>
                    {showConfetti && <Confetti active={showConfetti} />}
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fce7f3" fill-opacity="1" d="M0,64L12.6,58.7C25.3,53,51,43,76,85.3C101.1,128,126,224,152,224C176.8,224,202,128,227,90.7C252.6,53,278,75,303,112C328.4,149,354,203,379,208C404.2,213,429,171,455,176C480,181,505,235,531,250.7C555.8,267,581,245,606,213.3C631.6,181,657,139,682,138.7C707.4,139,733,181,758,213.3C783.2,245,808,267,834,245.3C858.9,224,884,160,909,149.3C934.7,139,960,181,985,208C1010.5,235,1036,245,1061,229.3C1086.3,213,1112,171,1137,160C1162.1,149,1187,171,1213,154.7C1237.9,139,1263,85,1288,96C1313.7,107,1339,181,1364,192C1389.5,203,1415,149,1427,122.7L1440,96L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"></path></svg>
            <Marquee speed={50} pauseOnHover={true}>
                <div className="flex gap-10 pt-20 pb-10">
                    <Image src={m1} className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-4 transition border-pink-50" />
                    <Image src={m2} className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-4 transition border-pink-50" />
                    <Image src={m3} className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-4 transition border-pink-50" />
                    <Image src={m4} className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-4 transition border-pink-50" />
                    <Image src={m5} className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-4 transition border-pink-50" />
                    <Image src={m6} className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-4 transition border-pink-50" />
                    <Image src={m7} className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-4 transition border-pink-50" />
                    <Image src={m8} className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-4 transition border-pink-50 mr-10" />
                </div>
            </Marquee>
            <Marquee speed={50} pauseOnHover={true} direction={"right"}>
                <div className="flex gap-10 pb-20">
                    <Image src={m1} className="w-40 h-40 object-cover rounded-xl border-4 hover:translate-y-4 transition border-pink-50" />
                    <Image src={m2} className="w-40 h-40 object-cover rounded-xl border-4 hover:translate-y-4 transition border-pink-50" />
                    <Image src={m3} className="w-40 h-40 object-cover rounded-xl border-4 hover:translate-y-4 transition border-pink-50" />
                    <Image src={m4} className="w-40 h-40 object-cover rounded-xl border-4 hover:translate-y-4 transition border-pink-50" />
                    <Image src={m5} className="w-40 h-40 object-cover rounded-xl border-4 hover:translate-y-4 transition border-pink-50" />
                    <Image src={m6} className="w-40 h-40 object-cover rounded-xl border-4 hover:translate-y-4 transition border-pink-50" />
                    <Image src={m7} className="w-40 h-40 object-cover rounded-xl border-4 hover:translate-y-4 transition border-pink-50" />
                    <Image src={m8} className="w-40 h-40 object-cover rounded-xl border-4 hover:translate-y-4 transition border-pink-50 mr-10" />
                </div>
            </Marquee>
            <div>
                <div className="relative group/img m-10">
                    <Image src={m7} className="w-40 h-40 object-cover rounded-xl border-4 border-pink-50 absolute z-20" />
                    <div className="w-42 h-42 rounded-sm bg-pink-300 absolute -top-1 -left-1 z-10 opacity-0 group-hover/img:rotate-15 group-hover/img:opacity-100 transition"></div>
                </div>
            </div>
            <div>
                scroll snap section
            </div>
            <div>
                flex grow section
            </div>
        </div>
    );
}
