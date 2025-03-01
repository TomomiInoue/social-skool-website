"use client";

import { menuItems } from "@/app/constants/menu";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, cn } from "@heroui/react";
import NextImage from "next/image";
import { usePathname } from 'next/navigation'

export const Header = () => {
    const pathname = usePathname()
    return (
        <Navbar isBordered classNames={{
            base: "h-[100px]",
            wrapper: "max-w-screen mx-auto px-[160px]",
        }}>
            <NavbarBrand>
                <NextImage src="/logo/logo-landscape.png" alt="Social Sckool" width={200} height={50} />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <div className="flex gap-4 mr-10">
                    {menuItems.map((item) => (
                        <Link
                            href={item.href} key={item.label}
                        >
                            <NavbarItem key={item.label}
                                className={cn("text-darkBrown hover:text-burgundy", pathname === item.href ? "text-burgundy font-bold underline underline-offset-4" : "")}
                            >

                                {item.label}
                            </NavbarItem>
                        </Link>
                    ))}
                </div>
                <Link href="https://share.newie.app/providers/le7P7mTPjvOFiBsAUjIttOdWUvt2" target="_blank" >
                    <Button variant="solid" radius="md" className="bg-burgundy py-4 px-6 h-14 text-white font-bold text-[20px] oswald">BOOK NOW</Button>
                </Link>
            </NavbarContent>
        </Navbar >
    )
}