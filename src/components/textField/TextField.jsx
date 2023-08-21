import style from "./textField.module.scss"

const TextField = ({label, ...props}) => {
    return ( 
   <div className={style.formGroup}>
        <label>{label}</label>
        <input {... props} className={style.regInput} />
    </div>
    )
}

export default TextField