"use client";

import { menuItems } from "@/app/constants/menu";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, cn } from "@heroui/react";
import NextImage from "next/image";
import { usePathname } from 'next/navigation'
import { MobileNav } from "./MobileNav";
import { Links } from "@/app/constants/links";

export const Header = () => {
    const pathname = usePathname()

    return (
        <>
            <Navbar isBordered classNames={{
                base: "hidden md:flex h-[100px]",
                wrapper: "max-w-screen mx-auto px-[160px]",
            }}>
                <NavbarBrand>
                    <Link href="/">
                        <NextImage src="/logo/logo-landscape.png" alt="Social Sckool" width={200} height={50} />
                    </Link>
                </NavbarBrand>

                <NavbarContent className="hidden sm:flex gap-4" justify="end">
                    <div className="flex gap-4 mr-10">
                        {menuItems.map((item) => (
                            <Link
                                href={item.href} key={item.label}
                            >
                                <NavbarItem key={item.label}
                                    className={cn("text-darkBrown hover:text-burgundy", pathname === item.href ||
                                        (pathname.includes(item.href) && item.href !== "/")
                                        ? "text-burgundy font-bold underline underline-offset-4" : "")}
                                >
                                    {item.label}
                                </NavbarItem>
                            </Link>
                        ))}
                    </div>
                    <Button variant="solid" radius="md" className="bg-burgundy py-4 px-6 h-14 text-white font-bold text-[20px] oswald"
                        onPress={() => window.open(Links.booking, "_blank")}
                    >BOOK NOW</Button>
                </NavbarContent>
            </Navbar >
            <MobileNav />
        </>
    )
}