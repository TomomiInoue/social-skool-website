"use client";

import { SectionWrapper } from "@/app/constants/styles"
import { cn, Link } from "@heroui/react"
import { Icon } from "@iconify/react/dist/iconify.js"
import NextImage from "next/image"
import { ServiceDetailsCard } from "../ServiceDetailsCard/ServiceDetailsCard";
import { socialMediaManagementItems } from "@/app/constants/constants";


export const SocialMediaManagementComponent = () => {
    return (
        <div className={cn(SectionWrapper, "flex flex-col")}>
            <div className={cn("flex flex-col md:flex-row gap-[120px] justify-center items-center")}>
                <div className="flex-col md:max-w-[420px]">
                    <h4 className="oswald text-3xl font-bold mb-[70px]">Social Media Management</h4>
                    <p className="text-base pb-5">
                        Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. This involves publishing great content on your social media profiles, listening to and engaging your followers, analyzing your results, and running social media advertisements.
                    </p>
                    <Link href="/services" className="text-burgundy flex gap-2 text-sm">
                        <Icon icon="iconoir:arrow-left" width="16" height="16" className="text-burgundy" />
                        All services
                    </Link>
                </div>
                <div>
                    <NextImage src="/images/service2.jpg" width={679} height={474} alt="Social Media Managing" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10 pt-[96px]">
                {socialMediaManagementItems.map((item, index) => (
                    <ServiceDetailsCard key={index} item={item} />
                ))}
            </div>
        </div >
    )
}