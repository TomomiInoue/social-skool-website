import { Select, SelectItem } from "@heroui/react";

interface SelectProps {
    label: string;
    value: string;
    options: string[]
    onChange: (value: string) => void;
}
export const SelectComponent = ({
    label,
    value,
    options,
    onChange,
}: SelectProps) => {
    return (
        <Select
            label={label}
            labelPlacement="outside"
            value={value}
            size="md"
            variant="bordered"
            classNames={{
                base: "w-full",
                trigger: "h-[56px]",
            }}
            onChange={(e) => onChange(e.target.value)}
        >
            {options.map((option) => (
                <SelectItem key={option}>
                    {option}
                </SelectItem>
            ))}
        </Select>
    )
}