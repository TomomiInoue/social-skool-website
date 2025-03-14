import NextImage from 'next/image';
import { Icon } from "@iconify/react";
import { Link } from '@heroui/react';
import { menuItems } from '@/app/constants/menu';
import { Links } from '@/app/constants/links';

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
            <div className="container flex flex-col md:flex-row justify-between items-start md:items-center lg:gap-[150px] border-t-1 border-b-1 border-white border-opacity-50 py-10 md:py-20">
                <Link href="/">
                    <NextImage src="/logo/logo-white.png" alt="Social Sckool white logo" width={400} height={150} className='py-6' />
                </Link>
                <div className='flex flex-col gap-4'>
                    {footerItems.map((item, index) => (
                        <div key={index} className='flex flex-row gap-6'>
                            {item.icon}
                            <Link href={item.link} className="text-white">
                                {item.text}
                            </Link>
                        </div>
                    ))}
                    <div className='flex flex-row gap-4 mt-6 mb-6 md:mb-0'>
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
            <div className='container flex flex-col md:flex-row justify-between pt-6 lg:pt-0'>
                <div className='flex items-start gap-5'>
                    {menuItems.map((item) => (
                        <Link href={item.href} key={item.label} className="text-white">
                            {item.label}
                        </Link>
                    ))
                    }
                </div>
                <div className='items-end mt-4 md:mt-0'>
                    <Link href={Links.flowDesignCode} target='_blank'>
                        <p className='text-white text-xs'>Website Created by FLOW DESIGN CODE</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}