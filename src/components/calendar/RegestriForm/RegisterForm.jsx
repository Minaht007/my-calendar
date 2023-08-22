import useForm from "../../hook/useForm";
import InitialState from "./InitialState";
import TextField from "../../textField/TextField";
import fields from "./fields"
import Button from "../button/Button"

import style from "./RegestriForm.module.scss"

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm(InitialState, onSubmit);

const {name, email, password} = state

  return (
<div className={style.formContainer}>
  <form className={style.form} omSubmit={handleSubmit}>
  <TextField value={name} onChange={handleChange} {...fields.name}/>
  <TextField value={email}  onChange={handleChange} {...fields.email}/>
  <TextField value={password} onChange={handleChange} {...fields.password} />
    <Button>Sign in</Button>

  </form>
  
</div>
  )
  
};
export default RegisterForm;
