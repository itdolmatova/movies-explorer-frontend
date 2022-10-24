import React, { useCallback } from "react";
const isEmail = require('validator/lib/isEmail');

function validateEmail(value) {
  if (isEmail(value)) {
    return "";
  } else {
    return "Некорректный email";
  }
}

//хук управления формой
export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    let validationMessage = target.validationMessage
    if(target.type === "email" && !validationMessage) {
      validationMessage = validateEmail(value);
    } 
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues]
  );

  return { values, handleChange, errors, isValid, resetForm };
}