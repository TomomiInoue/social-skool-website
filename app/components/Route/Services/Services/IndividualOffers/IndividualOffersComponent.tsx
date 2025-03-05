import { SectionWrapper } from "@/app/constants/styles"
import { cn } from "@heroui/react"
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"
import NextImage from "next/image"
import { individualOffersItems } from "@/app/constants/constants"
import { ServiceDetailsCard } from "../ServiceDetailsCard/ServiceDetailsCard"

export const IndividualOffersComponent = () => {
    return (
        <div className={cn(SectionWrapper, "flex flex-col")}>
            <div className={cn("flex flex-col lg:flex-row gap-10 lg:gap-[120px] justify-center items-center")}>
                <div className="flex-col lg:max-w-[420px]">
                    <h4 className="oswald text-3xl font-bold mb-8 lg:mb-[70px]">Individual Offers</h4>
                    <p className="text-base pb-5">
                        Our individual offers provide tailored, flexible services that clients can choose based on their unique and immediate needs. This is a one-time purchase, with the service delivered within one week of purchase.
                    </p>
                    <Link href="/services" className="text-burgundy flex gap-2 text-sm">
                        <Icon icon="iconoir:arrow-left" width="16" height="16" className="text-burgundy" />
                        All services
                    </Link>
                </div>
                <div>
                    <NextImage src="/images/service-indi.jpg" width={679} height={474} alt="Social Media Managing" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 lg:pt-[96px]">
                {individualOffersItems.map((item, index) => (
                    <ServiceDetailsCard key={index} item={item} />
                ))}
            </div>
        </div >
    )
}