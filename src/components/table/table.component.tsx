import { ReactNode } from "react";
import styles from "./table.module.css";

export type TableProps = {
    header: ReactNode;
    rows: ReactNode[];
}

export type TableHeader = {
    label: string;
    flexSize: number;
}

export type TableRow = {
    columns: TableColumn[];
}

export type TableColumn = {
    component: ReactNode;
    flexSize: number;
}

export default function Table(props: TableProps) {
    return (
        <div className={styles.table}>
            <div className={styles.header}>
                {props.header}
                {/* {
                    props.header.map((header, index) => {
                        return (
                            <div className={styles.headerLabel} style={{ flex: header.flexSize }} key={index}>{header.label}</div>
                        );
                    })
                } */}
            </div>
            <div className={styles.rows}>
                {props.rows}
                {/* {
                    props.rows.map((row, rowIndex) => {
                        return (
                            <div className={styles.row} key={rowIndex}>
                                {
                                    row.columns.map((column, columnIndex) => {
                                        return (
                                            <div className={styles.column} style={{ flex: column.flexSize }} key={columnIndex}>
                                                {column.component}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    );
}