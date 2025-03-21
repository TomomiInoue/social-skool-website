"use client";

import { FC, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ContactSchema, ContactType, industryList, serviceList, toolYoufoundUs } from "@/app/schema/contactSchema";
import { Button, Form } from "@heroui/react";
import { InputComponent } from "./Input";
import { SelectComponent } from "./Select";
import { TextareaComponent } from "./Textarea";

type ContactFormProps = object

export const ContactForm: FC<ContactFormProps> = () => {
    const {
        handleSubmit,
        control,
        formState: { errors: formatError },
        reset,
    } = useForm<ContactType>({
        mode: "onBlur",
        resolver: zodResolver(ContactSchema),
    });
    const [status, setStatus] = useState<"loading" | "success" | "error" | null>(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    const onSubmit: SubmitHandler<ContactType> = async (data) => {
        setStatus("loading");
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            setStatus("success");
            reset({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                place: "",
                industry: industryList[0],
                businessDetails: "",
                importance: "Sales",
                existingSocialMedia: "",
                website: "",
                service: serviceList[0],
                find: toolYoufoundUs[0],
            });
            scrollToTop();
            setTimeout(() => {
                setStatus(null);
            }
                , 3000);
        }
        setStatus("error");
        scrollToTop();
        //reset form after submission
        setTimeout(() => {
            setStatus(null);
        }, 3000);

    };

    return (
        <Form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row gap-5 w-full">
                <div className="flex flex-row sm:flex-col w-full">
                    <Controller
                        control={control}
                        name="firstName"
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <InputComponent
                                    label="First name*"
                                    value={value || ""}
                                    type="text"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                                {formatError.firstName && (
                                    <div className="text-red-500 pl-1 pt-1 text-xs">
                                        {formatError.firstName.message}
                                    </div>
                                )}
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <Controller
                        control={control}
                        name="lastName"
                        render={({ field: { value, onChange, onBlur } }) => (
                            <>
                                <InputComponent
                                    label="Last name*"
                                    value={value}
                                    type="text"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                                {formatError.lastName && (
                                    <div className="text-red-500 pl-1 pt-1 text-xs">
                                        {formatError.lastName.message}
                                    </div>
                                )}
                            </>
                        )}
                    />
                </div>
            </div>
            <div className="w-full">
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { value, onChange, onBlur } }) => (
                        <>
                            <InputComponent
                                label="Email*"
                                value={value}
                                type="email"
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                            {formatError.email && (
                                <div className="text-red-500 pl-1 pt-1 text-xs">
                                    {formatError.email.message}
                                </div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="w-full">
                <Controller
                    control={control}
                    name="phone"
                    render={({ field: { value, onChange, onBlur } }) => (
                        <>
                            <InputComponent
                                label="Phone*"
                                value={value}
                                type="tel"
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                            {formatError.phone && (
                                <div className="text-red-500 pl-1 pt-1 text-xs">
                                    {formatError.phone.message}
                                </div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="w-full">
                <Controller
                    control={control}
                    name="place"
                    render={({ field: { value, onBlur, onChange } }) => (
                        <>
                            <InputComponent
                                label="Where are you based?*"
                                value={value}
                                type="text"
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                            {formatError.place && (
                                <div className="text-red-500 pl-1 pt-1 text-xs">
                                    {formatError.place.message}
                                </div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="w-full">
                <Controller
                    control={control}
                    name="industry"
                    render={({ field: { value, onChange } }) => (
                        <>
                            <SelectComponent
                                label="What Industry is your business in?*"
                                value={value}
                                options={industryList}
                                onChange={onChange}
                            />
                            {formatError.industry && (
                                <div className="text-red-500 pl-1 pt-1 text-xs">
                                    {formatError.industry.message}
                                </div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="w-full">
                <Controller
                    control={control}
                    name="businessDetails"
                    render={({ field: { value, onBlur, onChange } }) => (
                        <>
                            <TextareaComponent
                                label="Tell us more about your business*"
                                value={value || ""}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                            {formatError.businessDetails && (
                                <div className="text-red-500 pl-1 pt-1 text-xs">
                                    {formatError.businessDetails.message}
                                </div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="w-full">
                <Controller
                    control={control}
                    name="importance"
                    render={({ field: { value, onChange } }) => (
                        <>
                            <SelectComponent
                                label="What is more important to you?*"
                                value={value}
                                options={["Sales", "Audience"]}
                                onChange={onChange}
                            />
                            {formatError.importance && (
                                <div className="text-red-500 pl-1 pt-1 text-xs">
                                    {formatError.importance.message}
                                </div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="w-full">
                <Controller
                    control={control}
                    name="existingSocialMedia"
                    render={({ field: { value, onBlur, onChange } }) => (
                        <>
                            <InputComponent
                                label="Do you have existing social media accounts?(optional)"
                                value={value || ""}
                                type="url"
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                            {formatError.existingSocialMedia && (
                                <div className="text-red-500 pl-1 pt-1 text-xs">
                                    {formatError.existingSocialMedia.message}
                                </div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="w-full">
                <Controller
                    control={control}
                    name="website"
                    render={({ field: { value, onBlur, onChange } }) => (
                        <>
                            <InputComponent
                                label="Do you have a website?(optional)"
                                value={value || ""}
                                type="url"
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                            {formatError.website && (
                                <div className="text-red-500 pl-1 pt-1 text-xs">
                                    {formatError.website.message}
                                </div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="w-full">
                <Controller
                    control={control}
                    name="service"
                    render={({ field: { value, onChange } }) => (
                        <>
                            <SelectComponent
                                label="What service are you interested in? Please see our ‘services’ page for more information*"
                                value={value}
                                options={serviceList}
                                onChange={onChange}
                            />
                            {formatError.service && (
                                <div className="text-red-500 pl-1 pt-1 text-xs">
                                    {formatError.service.message}
                                </div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="w-full">
                <Controller
                    control={control}
                    name="find"
                    render={({ field: { value, onChange } }) => (
                        <>
                            <SelectComponent
                                label="How did you find us?*"
                                value={value}
                                options={toolYoufoundUs}
                                onChange={onChange}
                            />
                            {formatError.find && (
                                <div className="text-red-500 pl-1 pt-1 text-xs">
                                    {formatError.find.message}
                                </div>
                            )}
                        </>
                    )}
                />
            </div>
            <div className="w-full items-end">
                <Button
                    variant="solid"
                    radius="md"
                    type="submit"
                    className="mt-4 w-full self-end bg-darkBrown h-[56px] text-white font-bold text-base oswald"
                >
                    {status === "loading" ? "Sending..." : "SUBMIT"}
                </Button>
            </div>
        </Form>
    );
};
