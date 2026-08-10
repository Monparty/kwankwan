"use client";
import gsap from "gsap";
import { useRef, useState } from "react";
import UseInputPass from "../components/input/UseInputPass";
import { useRouter } from "next/navigation";

function page() {
    const router = useRouter();
    const inputRefs = useRef([]);
    const [password, setPassword] = useState(["", "", "", "", ""]);
    const [alertText, setAlertText] = useState("");

    const handleChange = (e, index) => {
        const value = e.target.value;

        setPassword((prev) => {
            const newValue = [...prev];
            newValue[index] = value;
            return newValue;
        });

        if (value) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const checkPass = () => {
        const joinPass = password?.join("");
        if (joinPass === "14268") {
            router.push("/versary/memories");
        } else {
            // clear
            gsap.to(".shake", {
                x: 10,
                duration: 0.08,
                repeat: 5,
                yoyo: true,
                ease: "power1.inOut",
            });
            setAlertText("ยังไม่ถูกกก ลองดูใหม่ซิ");
            setTimeout(() => {
                setAlertText("");
            }, 2000);
            inputRefs.current.forEach((input) => {
                if (input) {
                    input.value = "";
                }
            });
            setPassword(["", "", "", "", ""]);
            inputRefs.current[0]?.focus();
        }
    };

    return (
        <div className="flex items-center justify-center h-dvh p-8">
            <div className="bg-white border h-1/2 w-full lg:w-1/5 shadow-lg rounded-2xl p-4 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-pink-400 mb-2">Enter password</h2>
                <h3 className="text-sm text-gray-400 mb-4">ระหัสผ่านอะไรน้าา ทายดูซิ้</h3>
                <div className="flex justify-center gap-3 mb-4 shake">
                    {[0, 1, 2, 3, 4].map((item, index) => (
                        <UseInputPass
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))}
                </div>
                <p className="text-sm text-red-400 font-bold">{alertText}</p>
                <button type="button" onClick={checkPass} className="text-[2.5rem] focus:text-[4rem]">
                    🔒
                </button>
            </div>
        </div>
    );
}

export default page;
