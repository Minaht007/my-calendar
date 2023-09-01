import useForm from "../../hook/useForm";
import InitialState from "./InitialState";
import TextField from "../../textField/TextField";
import fields from "./fields";
import Button from "../button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import style from "./RegestriForm.module.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../../redux/auth/auth-slice.js";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase.config";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        name,
        email: user.email,
      });
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "name") {
      return setName(value);
    } else if (name === "email") {
      return setEmail(value);
    } else if (name === "password") {
      return setPassword(value);
    }
  };

  const handlerClick = async (email, id) => {
    const userDocRef = doc(db, "users", email);
    await setDoc(userDocRef, {
      id,
      email,
    });
  };

  // const {name, email, password} = state

  return (
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleRegister}>
        <TextField value={name} onChange={handleChange} {...fields.name} />
        <TextField value={email} onChange={handleChange} {...fields.email} />
        <TextField
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
};
export default RegisterForm;

// const handleRegister = async (e) => {
//   e.preventDefault();

//   const auth = getAuth();

//   try {
//     const { user } = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     // Сохраняем информацию о пользователе в Firestore
//     const userDocRef = doc(db, "users", user.uid);
//     await setDoc(userDocRef, {
//       name,
//       email: user.email,
//     });

//     // Перенаправляем пользователя на главную страницу
//     navigate("/");
//   } catch (error) {
//     console.error("Registration failed:", error);
//   }
// };

// first var
// const handleRegister = async (e) => {
//   e.preventDefault();
//   const auth = getAuth();
//   createUserWithEmailAndPassword(auth, email, password)
//     .then(({ user }) => {
//       dispatch(
//         setUser({
//           email: user.email,
//           id: user.uid,
//           token: user.accessToken,
//         })
//       );
//     })
//     .catch((error) => {
//       console.error("Registration failed:", error);
//     });
//   navigate("/");
// };

// onClick = { handlerClick };
