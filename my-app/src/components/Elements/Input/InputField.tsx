import styles from './Input.module.scss'
const InputField = ({onChange, value, required} : any) => {
    console.log(required);
    return (
        <div className={styles.inputField}>
            <input onChange={onChange} value={value} {...(required ? { required: true } : {})}/>
        </div>
    );
};

export default InputField;