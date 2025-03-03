"use client";

import { Link } from '@heroui/react';
import NextImage from 'next/image';
import { motion } from "framer-motion";
import { servicesDiscription } from '@/app/constants/constants';




export const ServiceLanding = () => {
    return (
        <>
            <div className="relative w-full h-[550px]">
                <NextImage
                    src="/images/service-top.jpg"
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            <div className='container grid grid-cols-1 md:gap-[160px] md:grid-cols-2 items-start justify-between pt-10 pb-[120px]'>
                {servicesDiscription.map((service, index) => (
                    <div key={index} className='flex flex-col gap-4'>
                        <h4 className='oswald text-3xl font-bold'>{service.header}</h4>
                        <p className="text-base pb-2 min-h-[128px]">
                            {service.description}
                        </p>

                        <Link href={service.link} className='flex-end'>
                            <motion.div
                                className={`flex items-center gap-2 text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors cursor-pointer $`}
                                whileHover={{ x: 5 }} // Moves the arrow slightly on hover
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* Custom SVG Arrow (128px width, 2px stroke thickness) */}
                                <svg width="128" height="32" viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="2" y1="16" x2="120" y2="16" stroke="#4E2A1E" strokeWidth="4" />
                                    <polyline points="104,4 120,16 104,28" stroke="#4E2A1E" strokeWidth="4" fill="none" />
                                </svg>
                            </motion.div>
                        </Link>
                    </div>
                ))}
            </div >
        </>
    );
}