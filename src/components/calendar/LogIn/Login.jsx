import TextField from "../../textField/TextField"
import Button from "../button/Button"
import useForm from "../../hook/useForm"
import fields from "../RegestriForm/fields"
import InitialState from "../RegestriForm/InitialState"
import { Link } from "react-router-dom"
import RegisterPage from "../../../page/RegisterPage"




const LoginForm = ({onSubmit}) => {

    const { state, handleChange, handleSubmit } = useForm(InitialState, onSubmit);

    const {email, password} = state

    // handleSubmit = () => { }

    return (
        <div>
            <p>
                <Link to="/register" element={<RegisterPage />}>Sign in</Link>
            </p>
            <form onSubmit={handleSubmit}>
                <TextField value={email}  onChange={handleChange} {...fields.email} />
                 <TextField value={password} onChange={handleChange} {...fields.password}/>
                 <Button>Log in</Button>                
            </form>
            
        </div>
    )
}

export default LoginForm