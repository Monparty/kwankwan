import Image from "next/image";

export default function Page() {
    const images = [
        "/images/m1.jpg",
        "/images/m2.jpg",
        "/images/m3.jpg",
        "/images/m4.jpg",
        "/images/m5.jpg",
        "/images/m6.jpg",
        "/images/m7.jpg",
        "/images/m8.jpg",
        "/images/m9.jpg",
    ].sort(() => Math.random() - 0.5); // 🔹 สุ่มลำดับรูปภาพ

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                {images.map((src, i) => {
                    const isLarge = Math.random() > 0.6; // 🔹 สุ่มขนาด (ประมาณ 40% เป็นรูปใหญ่)
                    const span = isLarge ? "sm:col-span-2 sm:row-span-2" : "";
                    return (
                        <div
                            key={i}
                            className={`relative overflow-hidden rounded-2xl bg-gray-100 shadow-md ${span}`}
                        >
                            <Image
                                src={src}
                                alt={`Gallery ${i}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
