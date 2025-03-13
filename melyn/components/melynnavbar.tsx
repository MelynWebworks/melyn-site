'use client'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { title: 'Services', link: '#' },
  { title: 'Values', link: '#' },
  { title: 'Contact Us', link: '#' },
]

type Theme = 'light' | 'dark'

export default function MelynNavbar() {
    const [showNavbar, setShowNavbar] = useState<boolean>(false)
    const [theme, setTheme] = useState<Theme>('light')

    // Function to toggle the theme
    const toggleTheme = () => {
        const newTheme: Theme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        // Toggle the dark mode class on the html element
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
        localStorage.setItem('theme', newTheme) // Save the theme in localStorage
    }

    // Check local storage for saved theme preference on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null
        if (savedTheme) {
            setTheme(savedTheme)
            document.documentElement.classList.add(savedTheme) // Apply saved theme on page load
        } else {
            // Default to system preference
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
            const systemTheme: Theme = prefersDarkMode ? 'dark' : 'light'
            setTheme(systemTheme)
            document.documentElement.classList.add(systemTheme) // Apply system theme
        }
    }, [])

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="relative h-16 bg-[#3e8557] shadow-lg">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
                {/* Logo and Theme Toggle Button Container */}
                <div className="flex items-center gap-3">
                    {/* Logo */}
                    <a
                        href="https://www.codevertiser.com/"
                        className="flex items-center gap-3"
                    >
                        <img
                            src="https://res.cloudinary.com/dyvkdwzcj/image/upload/v1709055594/logo-1_vo1dni.png"
                            className="h-8"
                            alt="Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-bold text-white md:text-2xl">
                            MelynWebWorks
                        </span>
                    </a>

                </div>

                {/* Menu Toggle Button */}
                <button className="menu-icon z-50 md:hidden" onClick={handleShowNavbar}>
                    {showNavbar ? (
                        <X size={28} className="text-white" />
                    ) : (
                        <Menu size={28} className="text-white" />
                    )}
                </button>

                {/* Navbar Links */}
                <div
                    className={`nav-elements fixed right-0 top-0 z-40 h-screen w-64 transform bg-[#0B2715] text-white transition-transform duration-300 ease-in-out md:relative md:right-auto md:top-auto md:h-auto md:w-auto md:translate-x-0 md:bg-transparent ${
                        showNavbar ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <ul className="mt-16 flex flex-col space-y-8 px-6 py-6 md:mt-0 md:flex-row md:space-x-8 md:space-y-0 md:px-0">
                        {navLinks.map(({ title, link }, index) => (
                            <li key={index} className="group">
                                <a
                                    href={link}
                                    className="relative p-2 text-lg font-medium text-white transition-all duration-300 ease-in-out hover:text-blue-400 md:text-base"
                                >
                                    {title}
                                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
