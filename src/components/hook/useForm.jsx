import { useState } from "react";

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const HandleChange = ({ target }) => {
    setState((prevState) => {
      const { name, value, checked, type } = target;
      const newValue = type === "checkbox" ? checked : value;
      return { ...prevState, [name]: newValue };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ initialState });
  };
  return { state, setState, HandleChange, handleSubmit };
};

export default useForm;
