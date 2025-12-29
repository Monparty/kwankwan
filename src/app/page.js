"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Confetti from "./components/Confetti";
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
import m40 from "../../public/images/m40.jpg";
import m41 from "../../public/images/m41.jpg";
import m42 from "../../public/images/m42.jpg";
import m43 from "../../public/images/m43.jpg";
import m44 from "../../public/images/m44.jpg";
import m45 from "../../public/images/m45.jpg";
import m46 from "../../public/images/m46.jpg";
import m47 from "../../public/images/m47.jpg";
import m48 from "../../public/images/m48.jpg";
import m49 from "../../public/images/m49.jpg";
import m50 from "../../public/images/m50.jpg";
import m51 from "../../public/images/m51.jpg";
import m52 from "../../public/images/m52.jpg";
import m53 from "../../public/images/m53.jpg";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function Home() {
    const h1 = useRef(null);
    const h2 = useRef(null);
    const [showConfetti, setShowConfetti] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const triggerConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
    };

    const heart1 = (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
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
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0" />
            </path>
        </svg>
    );

    const heart2 = (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
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
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0" />
            </path>
        </svg>
    );

    const arrow = (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m14 7l-5 5m0 0l5 5"
            />
        </svg>
    );

    const scrollableDivRef = useRef(null);

    const scrollLeft = () => {
        if (scrollableDivRef.current) {
            scrollableDivRef.current.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollableDivRef.current) {
            scrollableDivRef.current.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    let mm = gsap.matchMedia();

    useGSAP(() => {
        gsap.set(".headtitle", { opacity: 1 });

        let split = SplitText.create(".headtitle", { type: "chars" });
        gsap.from(split.chars, {
            y: 20,
            autoAlpha: 0,
            repeat: -1,
            repeatDelay: 3,
            stagger: 0.05,
            yoyo: true,
        });

        mm.add("(width >= 64rem)", () => {
            gsap.to(".headtitle", {
                scale: 2,
                transformOrigin: "center center",
                lineHeight: "200px",
                ease: "slow(0.9,0.7,false)",
                scrollTrigger: {
                    trigger: ".section_1",
                    start: "top top",
                    end: "+=100%",
                    pin: true,
                    scrub: true,
                },
            });
        });

        gsap.to(".imgHero1", {
            opacity: 1,
            duration: 1,
            delay: 1,
            rotate: 5,
        });

        gsap.to(".imgHero2", {
            opacity: 1,
            duration: 1,
            delay: 2,
            rotate: -5,
        });

        gsap.to(".imgHero3", {
            opacity: 1,
            duration: 1,
            delay: 3,
            rotate: 5,
        });

        gsap.to(".imgHero4", {
            opacity: 1,
            duration: 1,
            delay: 4,
            rotate: -5,
        });

        gsap.to(".imgHero5", {
            opacity: 1,
            duration: 1,
            delay: 5,
            rotate: 5,
        });

        gsap.to(".imgHero6", {
            opacity: 1,
            duration: 1,
            delay: 6,
            rotate: -5,
        });

        gsap.to(".imgHero7", {
            opacity: 1,
            duration: 1,
            delay: 7,
            rotate: 5,
        });

        gsap.to(".imgHero8", {
            opacity: 1,
            duration: 1,
            delay: 8,
            rotate: -5,
        });

        gsap.to(".gridImg", {
            duration: 1,
            transition: 1,
            opacity: 1,
            stagger: 0.3,
            ease: "steps(12)",
            scrollTrigger: {
                trigger: ".boxGridImg",
                start: "top 80%",
                end: "top 30%",
            },
        });

        gsap.to("#btnConfetti", {
            duration: 1,
            delay: 4,
            transition: 1,
            opacity: 1,
            stagger: 0.3,
            ease: "steps(12)",
            scrollTrigger: {
                trigger: ".boxGridImg",
                start: "top 80%",
                end: "top 30%",
            },
        });

        const widthImgScroll = "60dvw";
        const heightImgScroll = "80dvh";

        gsap.to("#overflow-wrap1", {
            width: widthImgScroll,
            height: heightImgScroll,
            ease: "none",
            borderRadius: "14px",
            scrollTrigger: {
                trigger: "#img-wrap1",
                start: "center center",
                end: "+=100%",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        gsap.to("#overflow-wrap2", {
            width: widthImgScroll,
            height: heightImgScroll,
            ease: "none",
            borderRadius: "14px",
            scrollTrigger: {
                trigger: "#img-wrap2",
                start: "center center",
                end: "+=100%",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        gsap.to("#overflow-wrap3", {
            width: widthImgScroll,
            height: heightImgScroll,
            ease: "none",
            borderRadius: "14px",
            scrollTrigger: {
                trigger: "#img-wrap3",
                start: "center center",
                end: "+=100%",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        gsap.to("#overflow-wrap4", {
            width: widthImgScroll,
            height: heightImgScroll,
            ease: "none",
            borderRadius: "14px",
            scrollTrigger: {
                trigger: "#img-wrap4",
                start: "center center",
                end: "+=100%",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        gsap.to("#overflow-wrap5", {
            width: widthImgScroll,
            height: heightImgScroll,
            ease: "none",
            borderRadius: "14px",
            scrollTrigger: {
                trigger: "#img-wrap5",
                start: "center center",
                end: "+=100%",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        gsap.to("#overflow-wrap6", {
            width: widthImgScroll,
            height: heightImgScroll,
            ease: "none",
            borderRadius: "14px",
            scrollTrigger: {
                trigger: "#img-wrap6",
                start: "center center",
                end: "+=100%",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        let cards = gsap.utils.toArray(".card");
        let stackHeight = window.innerHeight * 0.25;

        cards.forEach((card, i) => {
            gsap.fromTo(
                card.querySelector("img"),
                {
                    scale: 1,
                    transformOrigin: "center top",
                    filter: "blur(0px)",
                },
                {
                    y: gsap.utils.mapRange(
                        1,
                        cards.length,
                        -20,
                        -stackHeight + 20,
                        cards.length - i
                    ),
                    scale: gsap.utils.mapRange(1, cards.length, 0.4, 0.9, i),
                    filter:
                        "blur(" +
                        gsap.utils.mapRange(1, cards.length, 4, 25, cards.length - i) +
                        "px)",
                    scrollTrigger: {
                        trigger: card,
                        scrub: true,
                        start: "top " + stackHeight,
                        end: "+=" + window.innerHeight * 2,
                        invalidateOnRefresh: true,
                    },
                }
            );

            ScrollTrigger.create({
                trigger: card,
                pin: true,
                start: "top " + stackHeight,
                endTrigger: ".following-content",
                end: "top " + (stackHeight + 100),
                pinSpacing: false,
            });
        });
    }, []);

    return (
        <div>
            <div className={isActive ? "block" : "hidden"}>
                <div class="snowflake">💗</div>
                <div class="snowflake">❤️</div>
                <div class="snowflake">💝</div>
                <div class="snowflake">💓</div>
                <div class="snowflake">💖</div>
                <div class="snowflake">💗</div>
                <div class="snowflake">❤️</div>
                <div class="snowflake">💝</div>
                <div class="snowflake">💓</div>
                <div class="snowflake">💖</div>
            </div>
            <section className="w-full h-dvh bg-linear-to-t from-pink-100 to-pink-300 grid place-items-center relative">
                <div className="grid gap-6 text-pink-400">
                    <h1 ref={h1} className="text-4xl lg:text-6xl font-bold text-center headtitle">
                        Happy anniversary
                    </h1>
                    <h1 ref={h2} className="text-4xl lg:text-6xl font-bold text-center headtitle">
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

                <div className="absolute left-24 top-40 lg:left-40 animate-[bounce_6s_ease-in-out_infinite]">
                    {heart2}
                </div>
                <div className="absolute right-24 top-40 lg:right-40 animate-[bounce_4s_ease-in-out_infinite]">
                    {heart1}
                </div>
                <div className="absolute bottom-50 left-5 lg:bottom-40 lg:left-40 animate-[bounce_4s_ease-in-out_infinite]">
                    {heart1}
                </div>
                <div className="absolute bottom-50 right-5 lg:bottom-40 lg:right-40 animate-[bounce_5s_ease-in-out_infinite]">
                    {heart2}
                </div>
                <Image
                    src={m1}
                    className="imgHero1 w-40 h-40 rounded-xl bottom-10 lg:top-14 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300 border-4 border-pink-50"
                />
                <Image
                    src={m2}
                    className="imgHero2 w-40 h-40 rounded-xl bottom-10 lg:top-24 lg:right-80 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300 border-4 border-pink-50"
                />
                <Image
                    src={m3}
                    className="imgHero3 w-40 h-40 rounded-xl bottom-10 lg:bottom-2/5 lg:right-30 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300 border-4 border-pink-50"
                />
                <Image
                    src={m4}
                    className="imgHero4 w-40 h-40 rounded-xl bottom-10 lg:bottom-24 lg:right-80 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300 border-4 border-pink-50"
                />
                <Image
                    src={m5}
                    className="imgHero5 w-40 h-40 rounded-xl bottom-10 lg:bottom-14 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300 border-4 border-pink-50"
                />
                <Image
                    src={m6}
                    className="imgHero6 w-40 h-40 rounded-xl bottom-10 lg:bottom-24 lg:left-80 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300 border-4 border-pink-50"
                />
                <Image
                    src={m7}
                    className="imgHero7 w-40 h-40 rounded-xl bottom-10 lg:bottom-2/5 lg:left-30 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300 border-4 border-pink-50"
                />
                <Image
                    src={m8}
                    className="imgHero8 w-40 h-40 rounded-xl bottom-10 lg:top-30 lg:left-80 absolute object-cover opacity-0 hover:w-45 hover:h-45 duration-300 border-4 border-pink-50"
                />
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#fce7f3"
                    fill-opacity="1"
                    d="M0,64L12.6,58.7C25.3,53,51,43,76,85.3C101.1,128,126,224,152,224C176.8,224,202,128,227,90.7C252.6,53,278,75,303,112C328.4,149,354,203,379,208C404.2,213,429,171,455,176C480,181,505,235,531,250.7C555.8,267,581,245,606,213.3C631.6,181,657,139,682,138.7C707.4,139,733,181,758,213.3C783.2,245,808,267,834,245.3C858.9,224,884,160,909,149.3C934.7,139,960,181,985,208C1010.5,235,1036,245,1061,229.3C1086.3,213,1112,171,1137,160C1162.1,149,1187,171,1213,154.7C1237.9,139,1263,85,1288,96C1313.7,107,1339,181,1364,192C1389.5,203,1415,149,1427,122.7L1440,96L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
                ></path>
            </svg>
            <section className="bg-linear-to-t from-pink-100 to-pink-200 pt-20">
                <div className="boxGridImg">
                    <div className="grid grid-cols-3 lg:grid-cols-4 px-2 lg:px-0 justify-center items-center w-full lg:w-1/2 mx-auto gap-2">
                        <Image
                            src={m9}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m10}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m11}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m12}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m13}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m14}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m15}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m16}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m17}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m18}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m19}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m20}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m21}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m22}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m23}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg"
                        />
                        <Image
                            src={m24}
                            className="w-full h-40 lg:h-60 object-cover rounded-xl border-4 hover:scale-125 hover:z-10 transition! border-pink-50 opacity-0 gridImg hidden lg:block"
                        />
                    </div>
                </div>
                <div className="flex justify-center pt-10 lg:pt-20">
                    <button
                        onClick={triggerConfetti}
                        id="btnConfetti"
                        className="opacity-0 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-medium text-pink-600 transition duration-300 ease-out border-2 border-pink-500 rounded-full shadow-md group cursor-pointer"
                    >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-pink-300 group-hover:translate-x-0 ease">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#fb64b6"
                                    d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                                />
                            </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            My Heart
                        </span>
                        <span className="relative invisible">Click Me</span>
                    </button>
                    {showConfetti && <Confetti active={showConfetti} />}
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#fce7f3"
                    fill-opacity="1"
                    d="M0,64L12.6,58.7C25.3,53,51,43,76,85.3C101.1,128,126,224,152,224C176.8,224,202,128,227,90.7C252.6,53,278,75,303,112C328.4,149,354,203,379,208C404.2,213,429,171,455,176C480,181,505,235,531,250.7C555.8,267,581,245,606,213.3C631.6,181,657,139,682,138.7C707.4,139,733,181,758,213.3C783.2,245,808,267,834,245.3C858.9,224,884,160,909,149.3C934.7,139,960,181,985,208C1010.5,235,1036,245,1061,229.3C1086.3,213,1112,171,1137,160C1162.1,149,1187,171,1213,154.7C1237.9,139,1263,85,1288,96C1313.7,107,1339,181,1364,192C1389.5,203,1415,149,1427,122.7L1440,96L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
                ></path>
            </svg>
            <Marquee speed={50} pauseOnHover={true}>
                <div className="flex gap-10 py-20">
                    <Image
                        src={m25}
                        className="w-40 h-40 object-cover rounded-xl border-4 -translate-y-4 hover:-translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m26}
                        className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m27}
                        className="w-40 h-40 object-cover rounded-xl border-4 -translate-y-4 hover:-translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m28}
                        className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m29}
                        className="w-40 h-40 object-cover rounded-xl border-4 -translate-y-4 hover:-translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m30}
                        className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m31}
                        className="w-40 h-40 object-cover rounded-xl border-4 -translate-y-4 hover:-translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m32}
                        className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-6 transition border-pink-50 mr-10"
                    />
                    <Image
                        src={m48}
                        className="w-40 h-40 object-cover rounded-xl border-4 hover:-translate-y-6 transition border-pink-50 mr-10"
                    />
                </div>
            </Marquee>
            <section className="w-full flex items-center justify-center gap-6">
                <button
                    className="hidden lg:flex justify-center items-center cursor-pointer bg-pink-300 h-16 w-16 rounded-full hover:bg-pink-400 active:bg-pink-400"
                    onClick={scrollLeft}
                >
                    {arrow}
                </button>
                <div
                    className="snap-x flex overflow-x-scroll gap-4 snap-mandatory w-80 border-4 border-pink-50 rounded-xl hidden-scrollbar"
                    ref={scrollableDivRef}
                >
                    <Image src={m33} className="snap-center w-full h-80 object-cover" />
                    <Image src={m34} className="snap-center w-full h-80 object-cover" />
                    <Image src={m35} className="snap-center w-full h-80 object-cover" />
                    <Image src={m36} className="snap-center w-full h-80 object-cover" />
                    <Image src={m37} className="snap-center w-full h-80 object-cover" />
                    <Image src={m38} className="snap-center w-full h-80 object-cover" />
                    <Image src={m53} className="snap-center w-full h-80 object-cover" />
                </div>
                <button
                    className="hidden lg:flex justify-center items-center cursor-pointer bg-pink-300 h-16 w-16 rounded-full rotate-180 hover:bg-pink-400 active:bg-pink-400"
                    onClick={scrollRight}
                >
                    {arrow}
                </button>
            </section>
            <div className="flex lg:hidden justify-center gap-5 pt-10 lg:pt-20">
                <button
                    className="flex justify-center items-center cursor-pointer bg-pink-300 h-16 w-16 rounded-full hover:bg-pink-400 active:bg-pink-400"
                    onClick={scrollLeft}
                >
                    {arrow}
                </button>
                <button
                    className="flex justify-center items-center cursor-pointer bg-pink-300 h-16 w-16 rounded-full rotate-180 hover:bg-pink-400 active:bg-pink-400"
                    onClick={scrollRight}
                >
                    {arrow}
                </button>
            </div>
            <div className="flex justify-center pt-5">
                <button
                    className="flex justify-center items-center cursor-pointer bg-pink-300 h-16 w-16 rounded-full hover:bg-pink-400 active:bg-pink-400"
                    onClick={handleToggle}
                >
                    ❤️
                </button>
            </div>
            <Marquee speed={50} pauseOnHover={true} direction={"right"}>
                <div className="flex gap-10 py-20">
                    <Image
                        src={m39}
                        className="w-40 h-40 object-cover rounded-xl border-4 translate-y-4 hover:translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m40}
                        className="w-40 h-40 object-cover rounded-xl border-4 hover:translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m41}
                        className="w-40 h-40 object-cover rounded-xl border-4 translate-y-4 hover:translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m42}
                        className="w-40 h-40 object-cover rounded-xl border-4 hover:translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m43}
                        className="w-40 h-40 object-cover rounded-xl border-4 translate-y-4 hover:translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m44}
                        className="w-40 h-40 object-cover rounded-xl border-4 hover:translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m45}
                        className="w-40 h-40 object-cover rounded-xl border-4 translate-y-4 hover:translate-y-6 transition border-pink-50"
                    />
                    <Image
                        src={m46}
                        className="w-40 h-40 object-cover rounded-xl border-4 hover:translate-y-6 transition border-pink-50 mr-10"
                    />
                </div>
            </Marquee>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#FEA5D6"
                    fill-opacity="1"
                    d="M0,64L16,64C32,64,64,64,96,96C128,128,160,192,192,186.7C224,181,256,107,288,85.3C320,64,352,96,384,128C416,160,448,192,480,181.3C512,171,544,117,576,112C608,107,640,149,672,181.3C704,213,736,235,768,229.3C800,224,832,192,864,192C896,192,928,224,960,202.7C992,181,1024,107,1056,85.3C1088,64,1120,96,1152,122.7C1184,149,1216,171,1248,149.3C1280,128,1312,64,1344,32C1376,0,1408,0,1424,0L1440,0L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
                ></path>
            </svg>
            <section className="bg-linear-to-t from-pink-100 to-pink-300">
                <div
                    className="w-full h-dvh flex items-center justify-end pr-10 lg:pr-20 overflow-hidden"
                    id="img-wrap1"
                >
                    <div
                        className="overflow-wrap border-4 border-pink-50 rounded-xl"
                        id="overflow-wrap1"
                    >
                        <Image src={m13} className="object-cover! h-full" />
                    </div>
                </div>
                <div
                    className="w-full h-dvh flex items-center justify-start pl-10 lg:pl-20 overflow-hidden"
                    id="img-wrap2"
                >
                    <div
                        className="overflow-wrap rounded-xl border-4 border-pink-50"
                        id="overflow-wrap2"
                    >
                        <Image src={m14} className="object-cover! h-full" />
                    </div>
                </div>
                <div
                    className="w-full h-dvh flex items-center justify-end pr-10 lg:pr-20 overflow-hidden"
                    id="img-wrap3"
                >
                    <div
                        className="overflow-wrap rounded-xl border-4 border-pink-50"
                        id="overflow-wrap3"
                    >
                        <Image src={m19} className="object-cover! h-full" />
                    </div>
                </div>
                <div
                    className="w-full h-dvh flex items-center justify-start pl-10 lg:pl-20 overflow-hidden"
                    id="img-wrap4"
                >
                    <div
                        className="overflow-wrap rounded-xl border-4 border-pink-50"
                        id="overflow-wrap4"
                    >
                        <Image src={m28} className="object-cover! h-full" />
                    </div>
                </div>
                <div
                    className="w-full h-dvh flex items-center justify-end pr-10 lg:pr-20 overflow-hidden"
                    id="img-wrap5"
                >
                    <div
                        className="overflow-wrap rounded-xl border-4 border-pink-50"
                        id="overflow-wrap5"
                    >
                        <Image src={m29} className="object-cover! h-full" />
                    </div>
                </div>
                <div
                    className="w-full h-dvh flex items-center justify-start pl-10 lg:pl-20 overflow-hidden"
                    id="img-wrap6"
                >
                    <div
                        className="overflow-wrap rounded-xl border-4 border-pink-50"
                        id="overflow-wrap6"
                    >
                        <Image src={m49} className="object-cover! h-full" />
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#fce7f3"
                    fill-opacity="1"
                    d="M0,64L12.6,58.7C25.3,53,51,43,76,85.3C101.1,128,126,224,152,224C176.8,224,202,128,227,90.7C252.6,53,278,75,303,112C328.4,149,354,203,379,208C404.2,213,429,171,455,176C480,181,505,235,531,250.7C555.8,267,581,245,606,213.3C631.6,181,657,139,682,138.7C707.4,139,733,181,758,213.3C783.2,245,808,267,834,245.3C858.9,224,884,160,909,149.3C934.7,139,960,181,985,208C1010.5,235,1036,245,1061,229.3C1086.3,213,1112,171,1137,160C1162.1,149,1187,171,1213,154.7C1237.9,139,1263,85,1288,96C1313.7,107,1339,181,1364,192C1389.5,203,1415,149,1427,122.7L1440,96L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
                ></path>
            </svg>
            <div className="spacer"></div>
            <div className="container-3d">
                <div className="cards">
                    <div className="card">
                        <Image
                            src={m4}
                            className="rounded-xl border-4 border-pink-50 object-cover"
                        />
                    </div>
                    <div className="card">
                        <Image
                            src={m47}
                            className="rounded-xl border-4 border-pink-50 object-cover"
                        />
                    </div>
                    <div className="card">
                        <Image
                            src={m33}
                            className="rounded-xl border-4 border-pink-50 object-cover"
                        />
                    </div>
                    <div className="card">
                        <Image
                            src={m50}
                            className="rounded-xl border-4 border-pink-50 object-cover"
                        />
                    </div>
                    <div className="card">
                        <Image
                            src={m51}
                            className="rounded-xl border-4 border-pink-50 object-cover"
                        />
                    </div>
                    <div className="card">
                        <Image
                            src={m52}
                            className="rounded-xl border-4 border-pink-50 object-cover"
                        />
                    </div>
                    <div className="card">
                        <Image
                            src={m53}
                            className="rounded-xl border-4 border-pink-50 object-cover"
                        />
                    </div>
                    <div className="card">
                        <Image
                            src={m40}
                            className="rounded-xl border-4 border-pink-50 object-cover"
                        />
                    </div>
                    <div className="card">
                        <Image
                            src={m1}
                            className="rounded-xl border-4 border-pink-50 object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="following-content bg-linear-to-t from-pink-400 to-pink-300">
                <div className="text-2xl! font-bold text-white pb-4">
                    I'm so lucky to have you.
                    <br />
                    Thank you for always supporting me
                </div>
                <div className="text-2xl! font-bold text-white">I love you 💗</div>
                <button
                    onClick={scrollToTop}
                    className="absolute bottom-10 right-10 z-10 flex justify-center items-center cursor-pointer bg-pink-300 h-16 w-16 rounded-full hover:bg-pink-400 active:bg-pink-400 rotate-90"
                >
                    {arrow}
                </button>
            </div>
        </div>
    );
}
