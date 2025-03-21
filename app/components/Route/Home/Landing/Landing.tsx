import { cn } from '@heroui/react';
import NextImage from 'next/image';

const LandingHeaderGapStyle = "gap-8 lg:gap-10 xl:gap-[80px] 2xl:gap-[120px"
const HeadingStyle = "text-[56px] lg:text-[68px] xl:text-[82px] font-bold"
const SubHeadingStyle = "text-[24px] lg:text-[40px]"

export const Landing = () => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-4 pb-8 px-10 ", LandingHeaderGapStyle)}>
            <div className="flex flex-col justify-center items-center order-2 md:order-1">
                <h1 className={cn("text-darkBrown font-bold text-nowrap ", HeadingStyle)}>SOCIAL SCKOOL</h1>
                <h5 className={cn("text-darkBrown  font-normal", SubHeadingStyle)}>BY KEELEY IVERSON</h5>
            </div>
            <div className="w-full relative block items-center order-1 md:order-2">
                <NextImage src="/images/home.png" alt="Social Sckool" width={680} height={855} priority className='md:rounded-md self-center' />
            </div>
        </div>
    );
};