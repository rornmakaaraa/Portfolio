"use client";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/components/ThemeProvider/theme";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="w-full fixed top-0 z-50 bg-background dark:bg-background-dark transition-colors duration-300 shadow-md">
            <div className="flex items-center justify-between px-6 py-4">
                <span className="text-lg font-bold text-accent">Portfolio</span>
                <nav className="flex items-center gap-6">
                    <Link href="/" className="text-text dark:text-text-dark hover:text-accent transition-colors"
                    >
                        Home
                    </Link>
                    <Link href="#about" className="text-text dark:text-text-dark hover:text-accent transition-colors"
                    >
                        About Me
                    </Link>
                    <Link href="#project"
                        className="text-text dark:text-text-dark hover:text-accent transition-colors"
                    >
                        Project
                    </Link>
                    <Link href="#contact"
                        className="text-text dark:text-text-dark hover:text-accent transition-colors"
                    >
                        Contact
                    </Link>
                    <div className="">
                        <a href="/RORN_Makara_CV.pdf" download>
                            <button className="bg-accent text-white px-3 py-1 rounded-lg hover:opacity-90">
                                Download CV
                            </button>
                        </a>
                    </div>

                    <button onClick={toggleTheme}
                        className="p-2 border border-accent rounded-full text-accent hover:bg-accent hover:text-white transition-colors"
                    >
                        {theme === "dark" ? (
                            <Sun size={12} strokeWidth={2} />
                        ) : (
                            <Moon size={12} strokeWidth={2} />
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
}