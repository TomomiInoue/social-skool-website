import { IndividualOffersTypes, SocialMediaManageTypes } from "@/app/types";
import { cn } from "@heroui/react";

interface ServiceDetailsCardProps {
    setMinHeight?: boolean;
    item: SocialMediaManageTypes | IndividualOffersTypes;
}

export const ServiceDetailsCard = ({ item, setMinHeight }: ServiceDetailsCardProps) => {
    return (
        <div className="border-1 border-darkBrown rounded-lg p-6 flex flex-col items-center gap-4">
            <h5 className={cn("text-burgundy font-bold text-[22px] text-center", setMinHeight ? "min-h-[66px]" : "")}>
                {item.header}
            </h5>
            {"description" in item ? <p className="text-base text-center">
                {item.description}
            </p> : null}
            <div>
                {typeof item.price === "number" ? (
                    <>
                        <span className="text-burgundy font-bold text-2xl">$</span>
                        <span className="text-burgundy font-bold text-4xl">{item.price}</span>
                        <span className="text-darkBrown font-normal text-base"> /week</span>
                    </>)
                    : (
                        <>
                            <span className="text-burgundy font-bold text-2xl">{item.price}</span>
                            <span className="text-darkBrown font-normal text-base"> /week</span>
                        </>)}
            </div>

            <ul className="pt-[6px] flex-col space-y-2 list-disc text-base list-inside">
                {item.services.map((service, index) => (
                    <li key={index}>
                        {service.split(/([‘’][^‘’]+[‘’])/g).map((part, idx) =>
                            part.startsWith("‘") && part.endsWith("’") ? (
                                <span key={idx} className="font-bold">{part}</span>
                            ) : (
                                <span key={idx}>{part}</span>
                            )
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
};