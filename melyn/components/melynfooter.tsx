'use client'
import { AtSignIcon, EarthIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

const socialLinks = [
    {
        name: 'LinkedIn',
        link: '/',
        icon: <LinkedinIcon />,
    },
    {
        name: 'X',
        link: '/',
        icon: <TwitterIcon />,
    },
    {
        name: 'Facebook',
        link: '/',
        icon: <FacebookIcon />,
    },
    {
        name: 'Website',
        link: '/',
        icon: <EarthIcon />,
    },
]

const description =
    'We specialize in web development, SEO, and automation software solutions. Elevate your online presence and streamline your business with cutting-edge technology.'

export default function MelynFooter() {
    return (
        <footer className={`relative z-50 bg-white text-black`}>
            <div className="flex flex-col items-center px-4 py-12">
                {/* app logo */}
                <div>
                    <a
                        href="/"
                        className="mb-8 flex items-center justify-center gap-5"
                    >
                        <img
                            src="/logo.png"
                            className="h-8"
                            alt="MelynWebworks Logo"
                        />
                        <span className="text-3xl font-semibold tracking-wider">
                            MelynWebworks
                        </span>
                    </a>
                    <p className="max-w-[80vh] text-center text-lg font-medium">
                        {description}
                    </p>
                </div>

                {/* social links */}
                <div className="mt-8">
                    <span className="mb-6 block text-center text-lg font-medium text-[#767E94]">
                        Follow Us
                    </span>
                    <ul className="flex items-center gap-6">
                        {socialLinks.map(({ name, icon, link }) => (
                            <li key={name}>
                                <a
                                    href={link}
                                    title={name}
                                    className="text-white hover:text-[#767e94]"
                                    target="_blank"
                                >
                                    {icon}
                                </a>
                                <span className="sr-only">{name} account</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* email */}
                <div className="mb-2 mt-6 flex items-center gap-2">
                    <AtSignIcon size={16} />
                    <span className="text-lg font-medium">melynworks@gmail.com</span>
                </div>

            </div>
        </footer>
    )
}
