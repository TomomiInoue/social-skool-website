import { SocialMediaManageTypes } from "@/app/types/types";

interface ServiceDetailsCardProps {
    item: SocialMediaManageTypes;
}

export const ServiceDetailsCard = ({ item }: ServiceDetailsCardProps) => {

    return (
        <div className="border-1 border-darkBrown rounded-lg p-6 flex flex-col items-center gap-4">
            <h5 className="text-burgundy font-bold text-2xl">
                {item.header}
            </h5>
            <p className="text-base text-center">
                {item.description}
            </p>
            <div>
                <span className="text-burgundy font-bold text-2xl">$</span>
                <span className="text-burgundy font-bold text-4xl">{item.price}</span>
                <span className="text-darkBrown font-normal text-base"> /week</span>
            </div>
            <ul className="pt-[6px] flex-col gap-2 list-disc text-base list-inside">
                {item.services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
        </div>
    )
};