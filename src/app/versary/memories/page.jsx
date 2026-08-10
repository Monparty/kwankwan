import React from "react";

function page() {
    const mem = [
        "18 มกรา",
        "15 กุมภา",
        "8 มีนา",
        "15 เมษา",
        "23 เมษา",
        "10 มิถุนา - 13 มิถุนา",
        "18 กรกฎา",
        "เดือนนี้",
    ];
    return (
        <div className="text-black border-black border ">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full border border-pink-300 w-fit"></div>
            <section className="bg-green-200 h-[20dvh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-pink-400 mb-4">Enter password</h2>
                <h3 className="text-sm text-gray-400 mb-4">ระหัสผ่านอะไรน้าา ทายดูซิ้</h3>
            </section>
            <section className="bg-red-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex items-center justify-center">
                        <button type="button" className="border px-10">
                            1
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                        <div className="p-2 pb-5 shadow-md bg-white rounded-md rotate-6">
                            <img src="https://picsum.photos/160/140" className="rounded-md" />
                        </div>
                        <div className="p-2 pb-5 shadow-md bg-white rounded-md -rotate-6">
                            <img src="https://picsum.photos/160/141" className="rounded-md" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-blue-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                        <div className="flex gap-2">
                            <div className="p-2 pb-5 shadow-md bg-white rounded-md -rotate-6">
                                <img src="https://picsum.photos/160/143" className="rounded-md" />
                            </div>
                            <div className="p-2 pb-5 shadow-md bg-white rounded-md rotate-6">
                                <img src="https://picsum.photos/160/144" className="rounded-md" />
                            </div>
                        </div>
                        <div className="p-2 pb-5 shadow-md bg-white rounded-md">
                            <img src="https://picsum.photos/100/90" className="rounded-md" />
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <button type="button" className="border px-10">
                            2
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-green-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex items-center justify-center">
                        <button type="button" className="border px-10">
                            3
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                        <div className="p-2 pb-5 shadow-md bg-white rounded-md -rotate-6">
                            <img src="https://picsum.photos/160/140" className="rounded-md" />
                        </div>
                        <div className="p-2 pb-5 shadow-md bg-white rounded-md rotate-6">
                            <img src="https://picsum.photos/160/141" className="rounded-md" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-yellow-200 h-[50dvh]">
                <section className="bg-blue-200 h-[50dvh]">
                    <div className="w-full h-full flex">
                        <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                            <div className="flex gap-2">
                                <div className="p-2 pb-5 shadow-md bg-white rounded-md -rotate-6">
                                    <img src="https://picsum.photos/160/143" className="rounded-md" />
                                </div>
                                <div className="p-2 pb-5 shadow-md bg-white rounded-md rotate-6">
                                    <img src="https://picsum.photos/160/144" className="rounded-md" />
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="p-2 pb-5 shadow-md bg-white rounded-md -rotate-6">
                                    <img src="https://picsum.photos/160/143" className="rounded-md" />
                                </div>
                                <div className="p-2 pb-5 shadow-md bg-white rounded-md rotate-6">
                                    <img src="https://picsum.photos/160/144" className="rounded-md" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <button type="button" className="border px-10">
                                4
                            </button>
                        </div>
                    </div>
                </section>
            </section>
            <section className="bg-red-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex items-center justify-center">
                        <button type="button" className="border px-10">
                            5
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                        <div className="p-2 pb-5 shadow-md bg-white rounded-md -rotate-6">
                            <img src="https://picsum.photos/160/140" className="rounded-md" />
                        </div>
                        <div className="p-2 pb-5 shadow-md bg-white rounded-md rotate-6">
                            <img src="https://picsum.photos/160/141" className="rounded-md" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-blue-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                        <div className="flex gap-2">
                            <div className="p-2 pb-5 shadow-md bg-white rounded-md -rotate-6">
                                <img src="https://picsum.photos/160/143" className="rounded-md" />
                            </div>
                            <div className="p-2 pb-5 shadow-md bg-white rounded-md rotate-6">
                                <img src="https://picsum.photos/160/144" className="rounded-md" />
                            </div>
                        </div>
                        <div className="p-2 pb-5 shadow-md bg-white rounded-md">
                            <img src="https://picsum.photos/100/90" className="rounded-md" />
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <button type="button" className="border px-10">
                            6
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-green-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex items-center justify-center">
                        <button type="button" className="border px-10">
                            7
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                        <div className="p-2 pb-5 shadow-md bg-white rounded-md rotate-6">
                            <img src="https://picsum.photos/160/140" className="rounded-md" />
                        </div>
                        <div className="p-2 pb-5 shadow-md bg-white rounded-md -rotate-6">
                            <img src="https://picsum.photos/160/141" className="rounded-md" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-yellow-200 h-[50dvh]">
                <div className="w-full h-full flex">
                    <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                        <div className="p-2 pb-5 shadow-md bg-white rounded-md rotate-6">
                            <img src="https://picsum.photos/160/141" className="rounded-md" />
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <button type="button" className="border px-10">
                            5
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-green-200 h-[20dvh] flex flex-col items-center justify-center">
                <button type="button" className="border px-10">
                    กดเปิด popup
                </button>
            </section>
        </div>
    );
}

export default page;
