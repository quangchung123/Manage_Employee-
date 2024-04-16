import styles from './Input.module.scss'
const InputField = ({onChange, value} : any) => {
    return (
        <div className={styles.inputField}>
            <input onChange={onChange} value={value} required />
        </div>
    );
};

export default InputField;