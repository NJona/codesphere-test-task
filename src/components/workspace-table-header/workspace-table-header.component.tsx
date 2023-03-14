import styles from "./workspace-table-header.module.css";

export default function WorkspaceTableHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.headerLabel}>Name</div>
            <div className={styles.headerLabel}>Actions</div>
        </div>
    )
}