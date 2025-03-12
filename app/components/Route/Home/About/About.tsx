import { SectionWrapper } from "@/app/constants/styles";
import { cn } from "@heroui/react";
import NextImage from "next/image";

const rowWrapper = "grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 md:gap-[167px]";
const subHeading = "text-[28px] font-bold text-darkBrown";
const contentsWrapper = "md:max-w-[563px] flex flex-col gap-4"

export const About = () => {
    return (
        <div className={SectionWrapper}>
            <div className={rowWrapper}>
                <div className={contentsWrapper}>
                    <h5 className={subHeading}>
                        Founder Journey
                    </h5>
                    <p>
                        Starting as a &apos;micro-influencer&apos; in a small town, I worked with brands to drive sales and shape influence. My journey led me to Airlie Beach, where I gained valuable sales and marketing experience while managing social media for multiple brands. This combination of expertise, along with my love for building connections, sparked the creation of Social Skool. Today, Social Skool helps businesses create authentic, results-driven social mediastrategies that reflect their unique brand and connect with their audiences.
                    </p>
                </div>
                <div className="justify-items-center md:justify-items-start">
                    <NextImage src="/images/home2.jpg" alt="Social Sckool" width={455} height={604} priority className='rounded-md self-center' />
                </div>
            </div>

            <div className={cn(rowWrapper, "mt-10 md:mt-0")}>
                <div className="justify-items-center md:justify-items-end order-2 md:order-1">
                    <NextImage src="/images/home3.JPG" alt="Social Sckool" width={455} height={604} priority className='rounded-md' />
                </div>
                <div className={cn(contentsWrapper, "order-1 md:order-2")}>
                    <h5 className={subHeading}>
                        About Social Skool
                    </h5>
                    <p>
                        About Social Skool Founded in 2024, Social Skool is built on the core values of connection, authenticity, and results-driven strategies. Our mission is to connect with your audience in a meaningful way and drive tangible results for your business.
                        We specialise in social media management & content creation, ensuring that your brand’s message resonates and is reflected in your social media all whilst delivering measurable outcomes. At Social Skool, we’re passionate about helping businesses grow and can’t wait to elevate your brand and achieve real success.
                    </p>
                </div>

            </div>
        </div >
    )
};