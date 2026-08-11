"use client";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
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

    return (
        <div className="text-black border-black border">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full border border-pink-300 w-fit"></div>
            <section className="bg-green-200 h-[20dvh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-pink-400 mb-4">ดูซิปีนี้เราทำอะไรกับไรแล้วบ้าง 2026</h2>
                <h3 className="text-sm text-gray-400 mb-4">ค่อยๆเลื่อนดูนะ</h3>
            </section>
            <section className="bg-red-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex items-center justify-center">
                        <CardButton
                            label="18 มกรา"
                            desc="ไปดรีมเวิลด์"
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
            </section>
            <section className="bg-blue-200 h-[50dvh]">
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
                            desc="วันครบรอบ 1 ปี"
                            img={m2_5}
                            onClick={() => playAnime("anime2")}
                        />
                    </div>
                </div>
            </section>
            <section className="bg-green-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex items-center justify-center">
                        <CardButton label="8 มีนา" desc="เหมียๆ" img={m3_1} onClick={() => playAnime("anime3")} />
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
            </section>
            <section className="bg-yellow-200 h-[50dvh]">
                <section className="bg-blue-200 h-[50dvh]">
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
                                desc="เล่นน้ำกับแฟน"
                                img={m4_4}
                                onClick={() => playAnime("anime4")}
                            />
                        </div>
                    </div>
                </section>
            </section>
            <section className="bg-red-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex items-center justify-center">
                        <CardButton
                            label="23 เมษา"
                            desc="เซอร์ไพรส์วันเกิดเค้า"
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
            </section>
            <section className="bg-blue-200 h-[50dvh]">
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
                            desc="ไปเที่ยวจีนน"
                            img={m6_2}
                            onClick={() => playAnime("anime6")}
                        />
                    </div>
                </div>
            </section>
            <section className="bg-green-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex items-center justify-center">
                        <CardButton
                            label="18 กรกฎา"
                            desc="ไปวาดรูปที่คาเฟ่"
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
            </section>
            <section className="bg-yellow-200 h-[20dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                        <div className="p-1 pb-3  opacity-0 anime8">ยังไม่มี Event น้า</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <button
                            onClick={() => playAnime("anime8")}
                            type="button"
                            className="relative z-10 rounded-full border border-pink-100 bg-white px-6 py-1.5 text-sm font-semibold text-pink-600 shadow-sm transition-colors hover:bg-pink-500 hover:text-white"
                        >
                            เดือนนี้
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-green-200 h-[20dvh] flex flex-col items-center justify-center">
                <button
                    onClick={() => playAnime("anime8")}
                    type="button"
                    className="relative z-10 rounded-full border border-pink-100 bg-white px-6 py-1.5 text-sm font-semibold text-pink-600 shadow-sm transition-colors hover:bg-pink-500 hover:text-white"
                >
                    กดเปิด popup
                </button>
            </section>
        </div>
    );
}

export default page;
