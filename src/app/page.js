"use client"
import Image from "next/image";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import m1 from "../../public/images/m1.jpg"
import m2 from "../../public/images/m2.jpg"
import m3 from "../../public/images/m3.jpg"
import m4 from "../../public/images/m4.jpg"

export default function Home() {
    const boxRef = useRef(null);
    const h1 = useRef(null);
    const h2 = useRef(null);
    const m1Ref = useRef(null);
    const m2Ref = useRef(null);
    const m3Ref = useRef(null);
    const m4Ref = useRef(null);
    const heart1 = <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#fb64b6" fill-opacity="0" d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"/></path><path fill="none" stroke="#fb64b6" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"/></path></svg>
    const heart2 = <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#fb64b6" fill-opacity="0" d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"/></path><path fill="none" stroke="#fb64b6" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"/></path></svg>

    useGSAP(() => {
        gsap.to(boxRef.current, { x: 200, duration: 1 });
        gsap.from(h1.current, { 
            opacity: 0,
            duration: 1,
            delay: .5,
            y: 30,
            stagger: .5
         });
        gsap.from(h2.current, { 
            opacity: 0,
            duration: 1,
            delay: 1,
            y: 30,
            stagger: .5
        });

        gsap.to(m1Ref.current, { 
            opacity: 1,
            duration: 1,
            delay: 1,
            rotate: 5
        });
        gsap.to(m2Ref.current, { 
            opacity: 1,
            duration: 1,
            delay: 1.5,
            rotate: -5
        });
        gsap.to(m3Ref.current, { 
            opacity: 1,
            duration: 1,
            delay: 2,
            rotate: -5
        });
        gsap.to(m4Ref.current, { 
            opacity: 1,
            duration: 1,
            delay: 2.5,
            rotate: 5
        });


    }, []);

    return (
        <div>
            <section className="w-full h-dvh bg-pink-200 grid place-items-center relative">
                <div className="grid gap-6 text-pink-400">
                    <h1 ref={h1} className="text-6xl font-bold text-center">
                        Happy anniversary
                    </h1>
                    <h1 ref={h2} className="text-6xl font-bold text-center">
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
                <Image src={m1} ref={m1Ref} className="w-40 h-40 rounded-xl top-20 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300" />
                <Image src={m2} ref={m2Ref} className="w-40 h-40 rounded-xl right-30 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300" />
                <Image src={m4} ref={m3Ref} className="w-40 h-40 rounded-xl bottom-20 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300" />
                <Image src={m3} ref={m4Ref} className="w-40 h-40 rounded-xl left-30 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300" />
            </section>
            <div ref={boxRef} className="box">I'm animated!</div>
        </div>
    );
        
}
