import { Itim } from "next/font/google";
import "./globals.css";

const itim = Itim({
    variable: "--font-itim",
    subsets: ["thai", "latin"],
    weight: "400",
});

export const metadata = {
    title: "Happy anniversary my love",
    description: "anniversary my gf",
};

export default function RootLayout({ children }) {
    return (
        <html lang="th">
            <body className={`${itim.variable} antialiased`}>{children}</body>
        </html>
    );
}
