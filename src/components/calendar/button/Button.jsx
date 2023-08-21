import style from "./button.module.scss"

const Button = ({type = "submit", children}) => {
    return( <button className={style.btn} type={type}>{children}</button>)
    
}
export default Button