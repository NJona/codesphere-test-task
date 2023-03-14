import styles from "./text-input.module.css";

export type InputProps = {
    onInput: (input: string) => void
}

export default function TextInput(props: InputProps) {
    return (
        <input className={styles.textInput} onInput={e => props.onInput((e.target as HTMLInputElement).value)} />
    )
}