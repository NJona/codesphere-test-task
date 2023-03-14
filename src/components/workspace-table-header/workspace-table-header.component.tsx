import styles from "./workspace-table-header.module.css";

export default function WorkspaceTableHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.headerName}>Name</div>
            <div className={styles.headerAction}>Action</div>
        </div>
    )
}