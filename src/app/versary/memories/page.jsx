"use client";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";
import m1_1 from "../../../../public/images/versary/m1_1.jpg";
import m1_2 from "../../../../public/images/versary/m1_2.jpg";
import m1_3 from "../../../../public/images/versary/m1_3.jpg";
import m1_4 from "../../../../public/images/versary/m1_4.jpg";
import m2_1 from "../../../../public/images/versary/m2_1.jpg";
import m2_2 from "../../../../public/images/versary/m2_2.jpg";
import m2_3 from "../../../../public/images/versary/m2_3.jpg";
import m2_4 from "../../../../public/images/versary/m2_4.jpg";
import m2_5 from "../../../../public/images/versary/m2_5.jpg";
import m3_1 from "../../../../public/images/versary/m3_1.jpg";
import m3_2 from "../../../../public/images/versary/m3_2.jpg";
import m3_3 from "../../../../public/images/versary/m3_3.jpg";
import m4_1 from "../../../../public/images/versary/m4_1.jpg";
import m4_2 from "../../../../public/images/versary/m4_2.jpg";
import m4_3 from "../../../../public/images/versary/m4_3.jpg";
import m4_4 from "../../../../public/images/versary/m4_4.jpg";
import m5_1 from "../../../../public/images/versary/m5_1.jpg";
import m5_2 from "../../../../public/images/versary/m5_2.jpg";
import m5_3 from "../../../../public/images/versary/m5_3.jpg";
import m6_2 from "../../../../public/images/versary/m6_2.jpg";
import m6_4 from "../../../../public/images/versary/m6_4.jpg";
import m6_5 from "../../../../public/images/versary/m6_5.jpg";
import m6_6 from "../../../../public/images/versary/m6_6.jpg";
import m7_1 from "../../../../public/images/versary/m7_1.jpg";
import m7_2 from "../../../../public/images/versary/m7_2.jpg";
import m7_3 from "../../../../public/images/versary/m7_3.jpg";
import m7_4 from "../../../../public/images/versary/m7_4.jpg";
import CardButton from "./components/CardButton";
import Fireworks from "@/app/components/Fireworks";

function page() {
    const propImages = {
        width: 0,
        height: 0,
        sizes: "100vw",
        className: "w-auto h-auto max-w-[8rem] max-h-[8rem] lg:max-h-full rounded-md object-cover",
        alt: "myLove",
    };

    const playedRef = useRef({});
    const playAnime = (name) => {
        if (playedRef.current[name]) return;
        playedRef.current[name] = true;
        gsap.to(`.${name}`, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 1,
            stagger: 0.8,
            ease: "power2.out",
        });
    };

    const [open, setOpen] = useState(false);
    const modalRef = useRef(null);

    const showModal = () => {
        setOpen(true);
        requestAnimationFrame(() => {
            gsap.fromTo(
                modalRef.current,
                {
                    opacity: 0,
                    scale: 0.75,
                    y: 30,
                    rotation: -2,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotation: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                },
            );
        });
    };

    const closeModal = () => {
        gsap.to(modalRef.current, {
            autoAlpha: 0,
            scale: 0.8,
            y: 20,
            duration: 0.2,
            onComplete: () => setOpen(false),
        });
    };

    const [fire, setFire] = useState(false);
    const handleFireworks = () => {
        setFire(true);
        setTimeout(() => {
            setFire(false);
        }, 10000);
    };

    const playAnime8 = () => {
        playAnime("anime8");
        setTimeout(() => {
            handleFireworks();
        }, 2000);
    };

    return (
        <div className="text-black border-black border">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full border border-pink-300 w-fit"></div>
            <section className="bg-pink-100 h-[30dvh] flex flex-col items-center justify-center">
                <h2 className="text-2xl text-center font-bold text-pink-400 mb-6 leading-9">
                    Recap 2026 ผ่านไปไวมากก
                    <br />
                    รู้ตัวอีกทีก็สิงหาแล้วเนอะ
                </h2>
                <h3 className="text-lg text-gray-400 mb-4 font-bold">ค่อยๆเลื่อนดูนะ</h3>
            </section>
            <section className="bg-pink-100 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex items-center justify-center">
                        <CardButton
                            label="18 มกรา"
                            desc="ไปดรีมเวิลด์ 🎢"
                            img={m1_1}
                            onClick={() => playAnime("anime1")}
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-4 items-center justify-center">
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md -rotate-6 opacity-0 anime1">
                            <Image src={m1_2} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md rotate-6 opacity-0 anime1">
                            <Image src={m1_3} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md -rotate-6 opacity-0 anime1">
                            <Image src={m1_4} {...propImages} />
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#fce7f3 "
                        fill-opacity="1"
                        d="M0,0L10,10.7C20,21,40,43,60,74.7C80,107,100,149,120,176C140,203,160,213,180,213.3C200,213,220,203,240,192C260,181,280,171,300,186.7C320,203,340,245,360,234.7C380,224,400,160,420,128C440,96,460,96,480,122.7C500,149,520,203,540,218.7C560,235,580,213,600,176C620,139,640,85,660,69.3C680,53,700,75,720,90.7C740,107,760,117,780,133.3C800,149,820,171,840,186.7C860,203,880,213,900,202.7C920,192,940,160,960,138.7C980,117,1000,107,1020,96C1040,85,1060,75,1080,85.3C1100,96,1120,128,1140,144C1160,160,1180,160,1200,165.3C1220,171,1240,181,1260,197.3C1280,213,1300,235,1320,208C1340,181,1360,107,1380,106.7C1400,107,1420,181,1430,218.7L1440,256L1440,0L1430,0C1420,0,1400,0,1380,0C1360,0,1340,0,1320,0C1300,0,1280,0,1260,0C1240,0,1220,0,1200,0C1180,0,1160,0,1140,0C1120,0,1100,0,1080,0C1060,0,1040,0,1020,0C1000,0,980,0,960,0C940,0,920,0,900,0C880,0,860,0,840,0C820,0,800,0,780,0C760,0,740,0,720,0C700,0,680,0,660,0C640,0,620,0,600,0C580,0,560,0,540,0C520,0,500,0,480,0C460,0,440,0,420,0C400,0,380,0,360,0C340,0,320,0,300,0C280,0,260,0,240,0C220,0,200,0,180,0C160,0,140,0,120,0C100,0,80,0,60,0C40,0,20,0,10,0L0,0Z"
                    ></path>
                </svg>
            </section>
            <section className="bg-pink-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex flex-col gap-4 items-center justify-center">
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md -rotate-6 opacity-0 anime2">
                            <Image src={m2_1} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md rotate-6 opacity-0 anime2">
                            <Image src={m2_2} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md -rotate-6 opacity-0 anime2">
                            <Image src={m2_3} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md rotate-6 opacity-0 anime2">
                            <Image src={m2_4} {...propImages} />
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <CardButton
                            label="15 กุมภา"
                            desc="วันครบรอบ 1 ปี 🥳"
                            img={m2_5}
                            onClick={() => playAnime("anime2")}
                        />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#fccee8  "
                        fill-opacity="1"
                        d="M0,288L12.6,245.3C25.3,203,51,117,76,96C101.1,75,126,117,152,144C176.8,171,202,181,227,170.7C252.6,160,278,128,303,106.7C328.4,85,354,75,379,58.7C404.2,43,429,21,455,10.7C480,0,505,0,531,48C555.8,96,581,192,606,240C631.6,288,657,288,682,240C707.4,192,733,96,758,53.3C783.2,11,808,21,834,69.3C858.9,117,884,203,909,245.3C934.7,288,960,288,985,245.3C1010.5,203,1036,117,1061,106.7C1086.3,96,1112,160,1137,170.7C1162.1,181,1187,139,1213,154.7C1237.9,171,1263,245,1288,245.3C1313.7,245,1339,171,1364,160C1389.5,149,1415,203,1427,229.3L1440,256L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
                    ></path>
                </svg>
            </section>
            <section className="bg-pink-300 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex items-center justify-center">
                        <CardButton label="8 มีนา" desc="เหมียๆ 🐱" img={m3_1} onClick={() => playAnime("anime3")} />
                    </div>
                    <div className="flex-1 flex flex-col gap-4 items-center justify-center">
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md -rotate-6 opacity-0 anime3">
                            <Image src={m3_2} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md rotate-6 opacity-0 anime3">
                            <Image src={m3_3} {...propImages} />
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#fda5d5   "
                        fill-opacity="1"
                        d="M0,256L12.6,245.3C25.3,235,51,213,76,186.7C101.1,160,126,128,152,101.3C176.8,75,202,53,227,74.7C252.6,96,278,160,303,170.7C328.4,181,354,139,379,128C404.2,117,429,139,455,154.7C480,171,505,181,531,186.7C555.8,192,581,192,606,186.7C631.6,181,657,171,682,165.3C707.4,160,733,160,758,133.3C783.2,107,808,53,834,37.3C858.9,21,884,43,909,64C934.7,85,960,107,985,101.3C1010.5,96,1036,64,1061,64C1086.3,64,1112,96,1137,133.3C1162.1,171,1187,213,1213,224C1237.9,235,1263,213,1288,176C1313.7,139,1339,85,1364,53.3C1389.5,21,1415,11,1427,5.3L1440,0L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
                    ></path>
                </svg>
            </section>
            <section className="bg-pink-400 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex flex-col gap-4 items-center justify-center">
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md -rotate-6 opacity-0 anime4">
                            <Image src={m4_1} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md rotate-6 opacity-0 anime4">
                            <Image src={m4_2} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md -rotate-6 opacity-0 anime4">
                            <Image src={m4_3} {...propImages} />
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <CardButton
                            label="15 เมษา"
                            desc="เล่นน้ำกับแฟน 🔫"
                            img={m4_4}
                            onClick={() => playAnime("anime4")}
                        />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#fb64b6"
                        fill-opacity="1"
                        d="M0,64L12.6,58.7C25.3,53,51,43,76,85.3C101.1,128,126,224,152,224C176.8,224,202,128,227,90.7C252.6,53,278,75,303,112C328.4,149,354,203,379,208C404.2,213,429,171,455,176C480,181,505,235,531,250.7C555.8,267,581,245,606,213.3C631.6,181,657,139,682,138.7C707.4,139,733,181,758,213.3C783.2,245,808,267,834,245.3C858.9,224,884,160,909,149.3C934.7,139,960,181,985,208C1010.5,235,1036,245,1061,229.3C1086.3,213,1112,171,1137,160C1162.1,149,1187,171,1213,154.7C1237.9,139,1263,85,1288,96C1313.7,107,1339,181,1364,192C1389.5,203,1415,149,1427,122.7L1440,96L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
                    ></path>
                </svg>
            </section>
            <section className="bg-pink-100 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex items-center justify-center">
                        <CardButton
                            label="23 เมษา"
                            desc="เซอร์ไพรส์วันเกิดเค้า 🎂"
                            img={m5_1}
                            onClick={() => playAnime("anime5")}
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-4 items-center justify-center">
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md -rotate-6 opacity-0 anime5">
                            <Image src={m5_2} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md rotate-6 opacity-0 anime5">
                            <Image src={m5_3} {...propImages} />
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#fce7f3"
                        fill-opacity="1"
                        d="M0,64L12.6,58.7C25.3,53,51,43,76,85.3C101.1,128,126,224,152,224C176.8,224,202,128,227,90.7C252.6,53,278,75,303,112C328.4,149,354,203,379,208C404.2,213,429,171,455,176C480,181,505,235,531,250.7C555.8,267,581,245,606,213.3C631.6,181,657,139,682,138.7C707.4,139,733,181,758,213.3C783.2,245,808,267,834,245.3C858.9,224,884,160,909,149.3C934.7,139,960,181,985,208C1010.5,235,1036,245,1061,229.3C1086.3,213,1112,171,1137,160C1162.1,149,1187,171,1213,154.7C1237.9,139,1263,85,1288,96C1313.7,107,1339,181,1364,192C1389.5,203,1415,149,1427,122.7L1440,96L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
                    ></path>
                </svg>
            </section>
            <section className="bg-pink-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex flex-col gap-4 items-center justify-center">
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md rotate-6 opacity-0 anime6">
                            <Image src={m6_4} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md -rotate-6 opacity-0 anime6">
                            <Image src={m6_5} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md rotate-6 opacity-0 anime6">
                            <Image src={m6_6} {...propImages} />
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <CardButton
                            label="9 - 13 มิถุนา"
                            desc="ไปเที่ยวจีนน 🥢"
                            img={m6_2}
                            onClick={() => playAnime("anime6")}
                        />
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#fccee8"
                        fill-opacity="1"
                        d="M0,32L21.8,48C43.6,64,87,96,131,101.3C174.5,107,218,85,262,90.7C305.5,96,349,128,393,128C436.4,128,480,96,524,101.3C567.3,107,611,149,655,138.7C698.2,128,742,64,785,53.3C829.1,43,873,85,916,138.7C960,192,1004,256,1047,240C1090.9,224,1135,128,1178,106.7C1221.8,85,1265,139,1309,160C1352.7,181,1396,171,1418,165.3L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
                    ></path>
                </svg>
            </section>
            <section className="bg-pink-300 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex items-center justify-center">
                        <CardButton
                            label="18 กรกฎา"
                            desc="ไปวาดรูปที่คาเฟ่ 🎨"
                            img={m7_1}
                            onClick={() => playAnime("anime7")}
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-4 items-center justify-center">
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md -rotate-6 opacity-0 anime7">
                            <Image src={m7_2} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md rotate-6 opacity-0 anime7">
                            <Image src={m7_3} {...propImages} />
                        </div>
                        <div className="p-1 pb-3 shadow-md bg-white rounded-md -rotate-6 opacity-0 anime7">
                            <Image src={m7_4} {...propImages} />
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#fda5d5"
                        fill-opacity="1"
                        d="M0,64L12.6,58.7C25.3,53,51,43,76,85.3C101.1,128,126,224,152,224C176.8,224,202,128,227,90.7C252.6,53,278,75,303,112C328.4,149,354,203,379,208C404.2,213,429,171,455,176C480,181,505,235,531,250.7C555.8,267,581,245,606,213.3C631.6,181,657,139,682,138.7C707.4,139,733,181,758,213.3C783.2,245,808,267,834,245.3C858.9,224,884,160,909,149.3C934.7,139,960,181,985,208C1010.5,235,1036,245,1061,229.3C1086.3,213,1112,171,1137,160C1162.1,149,1187,171,1213,154.7C1237.9,139,1263,85,1288,96C1313.7,107,1339,181,1364,192C1389.5,203,1415,149,1427,122.7L1440,96L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
                    ></path>
                </svg>
            </section>
            <section className="bg-pink-400 h-[40dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                        <div className="flex w-fit text-center leading-7 text-md font-bold items-center justify-center overflow-hidden rounded-xl   bg-white text-pink-600 px-2 py-6 shadow-md opacity-0 anime8">
                            มาสร้างความทรงจำเดือนนี้
                            <br />
                            และเดือนต่อๆไปด้วยกันนะ
                            <br />
                            💖💞💓
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <button
                            onClick={playAnime8}
                            type="button"
                            className="relative z-10 rounded-full border border-pink-100 bg-white px-6 py-1.5 text-sm font-semibold text-pink-600 shadow-sm transition-colors hover:bg-pink-500 hover:text-white"
                        >
                            เดือนนี้
                        </button>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#fb64b6"
                        fill-opacity="1"
                        d="M0,160L21.8,154.7C43.6,149,87,139,131,160C174.5,181,218,235,262,224C305.5,213,349,139,393,144C436.4,149,480,235,524,250.7C567.3,267,611,213,655,176C698.2,139,742,117,785,112C829.1,107,873,117,916,154.7C960,192,1004,256,1047,272C1090.9,288,1135,256,1178,250.7C1221.8,245,1265,267,1309,256C1352.7,245,1396,203,1418,181.3L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
                    ></path>
                </svg>
            </section>
            <section className="bg-pink-100 h-[40dvh] flex flex-col items-center justify-center">
                <button
                    onClick={showModal}
                    type="button"
                    className="relative z-10 rounded-full border border-pink-100 bg-white px-6 py-1.5 text-sm font-semibold text-pink-600 shadow-sm transition-colors hover:bg-pink-500 hover:text-white"
                >
                    กดเปิด popup
                </button>
                {open && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                        <div ref={modalRef} className="w-[400px] rounded-xl bg-white p-6 shadow-xl">
                            <h2 className="mb-4 text-xl font-bold">Modal</h2>
                            <p className="mb-6 text-gray-600">Hello GSAP 👋</p>
                            <button onClick={closeModal} className="rounded-lg bg-gray-800 px-4 py-2 text-white">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </section>
            {fire && <Fireworks />}
        </div>
    );
}

export default page;
