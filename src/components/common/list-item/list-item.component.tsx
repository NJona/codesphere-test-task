import styles from "./list-item.module.css";
import { useState } from "react";
import { ReactComponent as MoreIcon } from "../../../assets/icons/more.svg";
import Dropdown, { DropdownOption } from "../dropdown/dropdown.component";

export type ListItemProps = {
    label: string;
    dropdownOptions: DropdownOption[];
}

/**
 * Generic List Item with label and settings dropdown.
 * @param props 
 * @returns 
 */
export default function ListItem(props: ListItemProps) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className={styles.listItemContainer}>
            <div className={styles.listItem}>
                <div className={styles.itemLabel}>{props.label}</div>
                <div className={styles.optionsIcon} onClick={toggleDropdown}><MoreIcon /></div>
            </div>
            {
                isDropdownOpen &&
                <div className={styles.dropdownContainer}>
                    <Dropdown options={props.dropdownOptions} />
                </div>
            }
        </div>
    );
}