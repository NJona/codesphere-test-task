import { ReactNode } from "react";
import styles from "./button.module.css";

export type ButtonProps = {
    label: string;
    icon: ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick}>
            <span className={styles.icon}>{props.icon}</span>
            {props.label}
        </button>
    )
}