"use client";

import { SectionWrapper } from "@/app/constants/styles"
import { cn } from "@heroui/react"
import { ServiceDetailsCard } from "../ServiceDetailsCard/ServiceDetailsCard";
import { socialMediaManagementItems } from "@/app/constants/constants";
import { ServicesPageHeader } from "../ServicesPageHeader/ServicesPageHeader";


export const SocialMediaManagementComponent = () => {
    return (
        <div className={cn(SectionWrapper, "flex flex-col")}>
            <ServicesPageHeader title="Social Media Management" description="Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. This involves publishing great content on your social media profiles, listening to and engaging your followers, analyzing your results, and running social media advertisements." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 lg:pt-[96px]">
                {socialMediaManagementItems.map((item, index) => (
                    <ServiceDetailsCard key={index} item={item} />
                ))}
            </div>
        </div >
    )
}