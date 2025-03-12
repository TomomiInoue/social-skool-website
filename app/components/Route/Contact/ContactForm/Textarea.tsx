import { Textarea } from "@heroui/react";

interface TextareaProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
}

export const TextareaComponent = ({
    label,
    value,
    onChange,
    onBlur,
}: TextareaProps) => {
    return (
        <Textarea
            label={label}
            labelPlacement="outside"
            value={value}
            size="md"
            variant="bordered"
            isClearable
            classNames={{
                base: "w-full",
                inputWrapper: "h-[56px]"
            }}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
        />
    )
}