import { useState } from "react"
import TextField from "../../textField/TextField"
import Button from "../button/Button"
import useForm from "../../hook/useForm"
import fields from "../RegestriForm/fields"
import InitialState from "../RegestriForm/InitialState"
import { Link } from "react-router-dom"
import RegisterPage from "../../../page/RegisterPage"

import {useDispatch} from "react-redux"
import { setUser } from "../../../redux/auth/auth-slice.js"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const LoginForm = () => {
    const dispatch = useDispatch()
    const { email, setEmail } = useState("")
    const{password, setPassword} = useState("")

   
   const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).
        then(console.log).catch(console.error)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "email") {
            return setEmail(value)
        } else if (name === "password") { 
            return setPassword(value)
        }
    }
    

    // const { state, handleChange, handleSubmit } = useForm(InitialState, onSubmit);
    // const {email, password} = state
    // handleSubmit = () => { }

    return (
        <div>
            <p>
                <Link to="/register" element={<RegisterPage />}>Sign in</Link>
            </p>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleLogin(email, password)
            }
            }>
                <TextField value={email} onChange={handleChange}   {...fields.email} />
                 <TextField value={password} onChange={handleChange}  {...fields.password}/>
                 <Button type="submit" >Log in</Button>                
            </form>
            
        </div>
    )
}

export default LoginForm