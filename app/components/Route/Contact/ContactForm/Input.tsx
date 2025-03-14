import { Input } from "@heroui/react"

interface InputProps {
    label: string;
    value: string;
    type: "text" | "email" | "tel" | "url";
    onChange: (value: string) => void;
    onBlur?: () => void; // Optional callback for onBlur
}
export const InputComponent = ({
    label,
    value,
    type,
    onChange,
    onBlur,
}: InputProps) => {
    return (
        <Input
            label={label}
            type={type}
            labelPlacement="outside"
            value={value}
            size="md"
            variant="bordered"
            isClearable
            classNames={{
                base: "w-full",
                inputWrapper: "h-[56px] group-[data-focus=true]:border-darkBrown focus-within:text-darkBrown",
                label: "text-darkBrown",
                input: "focus:text-darkBrown placeholder:text-gray-400",
            }}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur} // Call the passed onBlur function
        />
    )
}