import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import NextImage from "next/image";

const menuItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export const Header = () => {
    return (
        <Navbar isBordered classNames={{
            base: "h-[100px]",
            wrapper: "max-w-[1512px] mx-auto",
        }}>
            <NavbarBrand>
                <NextImage src="/logo/logo-landscape.png" alt="Social Sckool" width={200} height={50} />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <div className="flex gap-4 mr-10">
                    {menuItems.map((item) => (
                        <NavbarItem key={item.label}>
                            <Link
                                href={item.href}
                                className="text-darkBrown hover:text-burgundy"
                            >
                                {item.label}
                            </Link>
                        </NavbarItem>
                    ))}
                </div>
                <Button variant="solid" radius="sm" className="bg-burgundy p-4 h-14 text-white font-bold text-[20px] oswald">BOOK NOW</Button>
            </NavbarContent>
        </Navbar>
    )
}