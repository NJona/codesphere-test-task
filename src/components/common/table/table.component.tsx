import { ReactNode } from "react";
import styles from "./table.module.css";

export type TableProps = {
    header: ReactNode;
    rows: ReactNode[];
}

/**
 * Generic Table Component.
 * Header, Row and Columns Styling has to be done outside of this compoennt. 
 * They will directly displayed inside the table.
 * @param props 
 * @returns 
 */
export default function Table(props: TableProps) {
    return (
        <div className={styles.table}>
            <div className={styles.header}>
                {props.header}
            </div>
            <div className={styles.rows}>
                {props.rows}
            </div>
        </div>
    );
}