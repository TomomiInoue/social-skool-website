import { menuItems } from "@/app/constants/menu";
import { Navbar, NavbarContent, NavbarMenuToggle, NavbarBrand, NavbarItem, Button, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import Link from "next/link";
import React from "react";
import NextImage from "next/image";
import { Links } from "@/app/constants/links";

export const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}
            classNames={{
                base: "md:hidden",
            }}
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <NextImage src="/logo/logo-landscape.png" alt="Social Sckool" width={200} height={50} />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.label}>
                        <Link href={item.href}>
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}

            </NavbarContent>
            <NavbarContent justify="end">
                <Button variant="solid" radius="md" className="bg-burgundy py-2 px-3 h-10 text-white font-bold text-base oswald"
                    onPress={() => window.open(Links.booking, "_blank")}
                >BOOK NOW</Button>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    );

};