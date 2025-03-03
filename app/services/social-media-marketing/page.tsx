import { SectionWrapper } from "@/app/constants/styles";
import { Link } from "@heroui/react";

export default function SocialMediaMarketing() {
    return (
        <div className={SectionWrapper}>
            <div className="flex-col">
                <h4 className="oswald text-3xl font-bold mb-[70px]">Social Media Marketing</h4>
                <p className="text-base pb-5">
                    Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. This involves publishing great content on your social media profiles, listening to and engaging your followers, analyzing your results, and running social media advertisements.
                </p>
                <Link href="/services">

                </Link>
            </div>
        </div>
    );
}
