import { cn } from "@heroui/react"
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"
import NextImage from "next/image"

interface ServicesPageHeaderProps {
    title: string;
    description: string;
}

export const ServicesPageHeader = ({ title, description }: ServicesPageHeaderProps) => {
    return (
        <div className={cn("flex flex-col lg:flex-row gap-10 lg:gap-[120px] justify-center items-center")}>
            <div className="flex-col lg:max-w-[420px]">
                <h4 className="oswald text-3xl font-bold mb-8 lg:mb-[70px]">{title}</h4>
                <p className="text-base pb-5">
                    {description}
                </p>
                <Link href="/services-page" className="text-burgundy flex gap-2 text-sm">
                    <Icon icon="iconoir:arrow-left" width="16" height="16" className="text-burgundy" />
                    All services
                </Link>
            </div>
            <div>
                <NextImage src="/images/service-indi.jpg" width={679} height={474} alt="Social Media Managing" />
            </div>
        </div>
    )
}