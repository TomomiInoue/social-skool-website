import NextImage from 'next/image';
import { Icon } from "@iconify/react";
import { Link } from '@heroui/react';
import { menuItems } from '@/app/constants/menu';

const footerItems = [
    {
        icon: <Icon icon="iconoir:mail" width="24" height="24" />,
        link: "mailto: keeley@socialskool.com",
        text: "keeley@socialskool.com",
    },
    {
        icon: <Icon icon="iconoir:phone" width="24" height="24" />,
        link: "tel: 0421 980 059 ",
        text: "0421 980 059 ",
    },
]

const socials = [
    {
        icon: <Icon icon="iconoir:tiktok" width="24" height="24" />,
        link: "https://www.tiktok.com/@social.skool",
    },
    {
        icon: <Icon icon="iconoir:instagram" width="24" height="24" />,
        link: "https://www.instagram.com/social.skool/?hl=en",
    },
    {
        icon: <Icon icon="iconoir:facebook-tag" width="24" height="24" />,
        link: "https://www.twitter.com/socialskool",
    },
];

export const Footer = () => {
    return (
        <footer className="bg-burgundy text-white py-10">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-[150px] border-t-1 border-b-1 border-white border-opacity-50">
                <NextImage src="/logo/logo-white.png" alt="Social Sckool white logo" width={400} height={150} />
                <div className='flex flex-col gap-4'>
                    {footerItems.map((item, index) => (
                        <div key={index} className='flex flex-row gap-6'>
                            {item.icon}
                            <Link href={item.link} className="text-white">
                                {item.text}
                            </Link>
                        </div>
                    ))}
                    <div className='flex flex-row gap-4 mt-6'>
                        {socials.map((social, index) => (
                            <Link key={index} href={social.link}
                                className="text-white"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className='container flex justify-between'>
                <div className='flex items-start gap-5'>
                    {menuItems.map((item) => (
                        <Link href={item.href} key={item.label} className="text-white">
                            {item.label}
                        </Link>
                    ))
                    }
                </div>
                <div className='items-end'>
                    <Link href='https://flow-design-code.vercel.app/' target='_blank'>
                        <p className='text-white text-xs'>Website Design by FLOW DESIGN CODE</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}