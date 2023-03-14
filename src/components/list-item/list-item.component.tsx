import styles from "./list-item.module.css";
import { useState } from "react";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";

export type ListItemProps = {
    label: string;
    options: ListItemOption[];
}

export type ListItemOption = {
    label: string;
    onClick: () => void
}

export default function ListItem(props: ListItemProps) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className={styles.listItem}>
            <div className={styles.listItemLabel}>{props.label}</div>
            <div className={styles.optionsIcon} onClick={toggleDropdown}><MoreIcon /></div>
            {
                isDropdownOpen &&
                <div className={styles.dropdown}>
                    {
                        props.options.map((option, index) => {
                            return <div className={styles.dropdownOption} onClick={option.onClick} key={index}>{option.label}</div>
                        })
                    }
                </div>
            }
        </div>
    );
}