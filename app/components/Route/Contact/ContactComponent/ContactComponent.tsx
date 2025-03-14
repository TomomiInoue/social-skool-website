import { SectionWrapper } from "@/app/constants/styles"
import { ContactForm } from "../ContactForm/ContactForm"
import NextImage from "next/image"

export const ContactComponent = () => {
    return (
        <div className={SectionWrapper}>
            <div className="pt-0 pb-10 md:py-[60px]">
                <h1 className="oswald text-center text-[28px] sm:text-[42px] md:text-[64px] text-darkBrown font-bold">Contact Us</h1>
                <p className="text-center text-xs md:text-[18px] text-darkBrown font-normal mt-4">Please fill in the details below and we will be in touch with you shortly</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-[80px] lg:mt-10 items-center">
                <NextImage src="/images/contact.JPG" alt="Contact Us photo" priority
                    objectFit="cover"
                    width={547} height={679} className="rounded-md" />
                <div className="w-full lg:min-w-[563px]">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}