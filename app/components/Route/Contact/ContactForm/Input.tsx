import { Input } from "@heroui/react"

interface InputProps {
    label: string;
    value: string;
    type: "text" | "email" | "number";
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
                inputWrapper: "h-[56px]"
            }}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur} // Call the passed onBlur function
        />
    )
}