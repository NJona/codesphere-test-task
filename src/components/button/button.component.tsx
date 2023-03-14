import { ReactNode } from "react";
import styles from "./button.module.css";

export type ButtonProps = {
    label: string;
    icon?: ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
}

/**
 * Generic Button Component.
 * Icon will only be displayed if it is provided. There is no default icon.
 * @param props 
 * @returns 
 */
export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={styles.button}>
            {props.icon && props.icon}
            <span className={styles.btnLabel}>{props.label}</span>
        </button>
    )
}