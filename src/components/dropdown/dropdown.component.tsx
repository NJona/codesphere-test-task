import { ReactNode } from "react";
import styles from "./dropdown.module.css";

export type DropdownOptions = {
    options: DropdownOption[];
}

export type DropdownOption = {
    icon?: ReactNode;
    label: string;
    onClick: () => void
}

/**
 * Generic Dropdown with customizable options. 
 * Icons will only be displayed if they are provided. There is no default icon.
 * @param props 
 * @returns 
 */
export default function Dropdown(props: DropdownOptions) {
    return (
        <div className={styles.dropdown}>
            {props.options.map((option, index) => (
                <div className={styles.dropdownOption} onClick={option.onClick} key={index}>
                    {option.icon && option.icon}
                    <span className={styles.optionLabel}>{option.label}</span>
                </div>
            ))}
        </div>
    )
}