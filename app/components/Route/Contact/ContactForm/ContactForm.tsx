"use client";

import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactSchema, ContactType } from "@/app/schema/contactSchema";

type ContactFormProps = object

export const ContactForm: FC<ContactFormProps> = () => {
    const handleOnSubmit: SubmitHandler<ContactType> = (data) => {
        console.log(data);
    };

    const {
        register,
        handleSubmit,
        formState: { errors: formatError, isValid, isSubmitting },
    } = useForm<ContactType>({
        mode: "onBlur",
        resolver: zodResolver(ContactSchema),
    });

    return (
        <form
            method="post"
            onSubmit={(event) => {
                void handleSubmit(handleOnSubmit)(event);
            }}
            className="flex flex-col space-y-10"
        >
            <label className="flex flex-col space-y-1">
                <div className="text-sm font-bold mb-1">メールアドレス</div>
                <input
                    type="text"
                    {...register("email")}
                    className="text-gray-800 mt-4 rounded-md border py-2 px-3"
                    placeholder="例）mail@example.com"
                />
                {formatError.email && (
                    <div className="text-red-500 pl-1 pt-1 text-xs">
                        {formatError.email.message}
                    </div>
                )}
            </label>
            <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="bg-slate-800 hover:bg-slate-600 rounded px-4 py-2 text-white  disabled:bg-gray-300 md:self-center"
            >
                Submit
            </button>
        </form>
    );
};
