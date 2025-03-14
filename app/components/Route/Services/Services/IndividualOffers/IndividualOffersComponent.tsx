import { SectionWrapper } from "@/app/constants/styles"
import { cn } from "@heroui/react"
import { individualOffersItems } from "@/app/constants/constants"
import { ServiceDetailsCard } from "../ServiceDetailsCard/ServiceDetailsCard"
import { ServicesPageHeader } from "../ServicesPageHeader/ServicesPageHeader"

export const IndividualOffersComponent = () => {
    return (
        <div className={cn(SectionWrapper, "flex flex-col py-10 md:py-20")}>
            <ServicesPageHeader title="Individual Offers" description="Our individual offers provide tailored, flexible services that clients can choose based on their unique and immediate needs. This is a one-time purchase, with the service delivered within one week of purchase." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 lg:pt-[96px]">
                {individualOffersItems.map((item, index) => (
                    <ServiceDetailsCard key={index} item={item} setMinHeight />
                ))}
            </div>
        </div >
    )
}