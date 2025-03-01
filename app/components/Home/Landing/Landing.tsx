import NextImage from 'next/image';

export const Landing = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center pt-4 pb-8 px-10 gap-[120px]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-darkBrown text-[82px] font-bold text-nowrap">SOCIAL SCKOOL</h1>
                <h5 className="text-darkBrown text-[40px] font-normal">BY KEELEY IVERSON</h5>
            </div>

            <div className="">
                <NextImage src="/images/home.png" alt="Social Sckool" width={620} height={855} priority className='rounded-md' />
            </div>
        </div>
    );
};