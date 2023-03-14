import { ReactNode } from "react";
import styles from "./modal.module.css";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

export type ModalProps = {
    children: ReactNode;
    show: boolean;
    onClose: () => void;
    onSubmit: () => void;
    submitBtnLabel: string;
    modalHeading: string;
}

/**
 * Generic Submit/Close Modal. Input has to be handled outside of this modal.
 * @param props 
 * @returns 
 */
export default function Modal(props: ModalProps) {
    const onClose = () => {
        props.onClose();
    };

    const onSubmit = () => {
        props.onSubmit();
    };

    if (!props.show) {
        return null;
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalHeader}>
                <h2 className={styles.modalHeading}>{props.modalHeading}</h2>
                <button onClick={onClose} className={styles.closeBtn}>
                    <PlusIcon className={styles.closeIcon} style={{ transform: "rotate(45deg)" }} />
                </button>
            </div>
            <div className={styles.content}>{props.children}</div>
            <div className={styles.actions}>
                <button className={styles.submitButton} onClick={onSubmit}>
                    {props.submitBtnLabel}
                </button>
            </div>
        </div>
    )
}