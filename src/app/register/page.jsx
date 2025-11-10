"use client";
import React, { useState } from "react";

function page() {
    const [v, setV] = useState("");
    const inputClass =
        "border-3 p-3 rounded-2xl border-pink-200 bg-pink-50 inset-shadow-sm shadow-sm shadow-pink-200 focus:ring-pink-100 focus:ring-3 transition-all outline-0";
    const ckOption = [
        {
            id: 1,
            title: "กอดๆ",
            img: "https://cdn-icons-png.flaticon.com/512/11324/11324961.png",
        },
        {
            id: 2,
            title: "กินของอร่อยด้วยกัน",
            img: "	https://cdn-icons-png.flaticon.com/512/3983/3983437.png",
        },
        {
            id: 3,
            title: "จุ๊บม๊วฟ",
            img: "	https://cdn-icons-png.flaticon.com/512/1151/1151724.png",
        },
        {
            id: 4,
            title: "ดูหนัง",
            img: "https://cdn-icons-png.flaticon.com/512/3507/3507102.png",
        },
        {
            id: 5,
            title: "แค่ได้นั่งเฉยๆ ข้างๆ ก็พอ",
            img: "https://cdn-icons-png.flaticon.com/512/3199/3199998.png",
        },
        {
            id: 6,
            title: "...",
            img: "https://cdn-icons-png.flaticon.com/512/9633/9633753.png",
        },
    ];
    return (
        <div className="container mx-auto py-4 lg:w-1/2 p-2">
            <form className="grid gap-4 text-center border-5 p-4 lg:p-6 rounded-2xl bg-[#FFF3FD] border-pink-300 shadow-lg shadow-pink-200">
                <h1 className="text-xl lg:text-2xl font-bold text-pink-400">
                    ระบบลงทะเบียนความคิดถึง
                </h1>
                <div className="grid">
                    <input className={inputClass} placeholder="ชื่อผู้คิดถึง" />
                </div>
                <div className="grid">
                    <input className={inputClass} placeholder="ข้อความ" />
                </div>
                <div className="grid">
                        <label for="labels-range-input" className="sr-only">
                            Labels range
                        </label>
                        <input
                            id="labels-range-input"
                            type="range"
                            min="0"
                            max="4"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-300 my-3"
                        />
                        <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-500">
                                <div className="text-center">
                                    <div>😐</div>
                                    <div className="text-xs font-semibold">
                                        ไม่ค่อย
                                        <br />
                                        คิดถึง
                                    </div>
                                </div>
                            </span>
                            <span className="text-sm text-gray-500">
                                <div className="text-center">
                                    <div>😊</div>
                                    <div className="text-xs font-semibold">
                                        คิดถึง
                                        <br />
                                        นิดหน่อย
                                    </div>
                                </div>
                            </span>
                            <span className="text-sm text-gray-500">
                                <div className="text-center">
                                    <div>😚</div>
                                    <div className="text-xs font-semibold">
                                        คิดถึง
                                        <br />
                                        เฉยๆ
                                    </div>
                                </div>
                            </span>
                            <span className="text-sm text-gray-500">
                                <div className="text-center">
                                    <div>🥰</div>
                                    <div className="text-xs font-semibold">
                                        คิดถึง
                                        <br />
                                        มาก
                                    </div>
                                </div>
                            </span>
                            <span className="text-sm text-gray-500">
                                <div className="text-center">
                                    <div>😭</div>
                                    <div className="text-xs font-semibold">
                                        คิดถึง
                                        <br />
                                        สุดๆ
                                    </div>
                                </div>
                            </span>
                        </div>
                </div>
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    {ckOption.map((item) => (
                        <div key={item.id}>
                            <input
                                type="checkbox"
                                id={item.id}
                                className="hidden peer"
                            />
                            <label
                                for={item.id}
                                className="flex justify-center h-32 w-full p-5 text-gray-500 bg-white border-3 border-pink-100 rounded-lg cursor-pointer peer-checked:border-pink-300 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-pink-50 shadow-sm shadow-pink-200"
                            >
                                <div className="flex-col flex justify-center items-center lg:justify-beetween gap-3">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-10 h-10 object-cover"
                                    />
                                    <div className="w-full text-sm font-semibold">
                                        {item.title}
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
                <div className="grid">
                    <label htmlFor=""></label>
                    <textarea
                        className={inputClass}
                        onChange={(e) => setV(e.target.value)}
                        rows={4}
                        maxLength={200}
                        placeholder="ความรู้สึกในหัวใจ"
                    ></textarea>
                    <div className="flex justify-end pt-2 pr-2">
                        <p className="text-xs font-semibold text-gray-400">
                            {v.length} / 200
                        </p>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-pink-400 hover:bg-pink-300 focus:bg-pink-400 transition-all text-white font-bold py-3 cursor-pointer rounded-2xl shadow-sm shadow-pink-200"
                >
                    ส่งความคิดถึง
                </button>
            </form>
        </div>
    );
}

export default page;
