import styles from "./workspace-table-header.module.css";

/**
 * Workspace Table Header specifig for Workspaces Table.
 */
export default function WorkspaceTableHeader() {
    return (
        <div className={styles.header}>
            <div className={styles.headerLabel}>Name</div>
            <div className={styles.headerLabel}>Actions</div>
        </div>
    )
}