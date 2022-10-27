import React, { useCallback } from "react";
const isEmail = require('validator/lib/isEmail');

function validateEmail(value) {
  if (isEmail(value)) {
    return "";
  } else {
    return "Поле Email должно содержать @ и имя домена с . ";
  }
}
function validateName(value) {
  if (value.match(/^[a-zа-яеёА-ЯЕЁ -]*$/i)) {
    return "";
  } else {
    return "Поле Имя может содержать только латиницу, кириллицу, пробел или дефис.";
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
    if (target.type === "email") {
      target.setCustomValidity(validateEmail(value));
    }
    if (target.name === "name") {
      target.setCustomValidity(validateName(value));
    }
    const validationMessage = target.validationMessage
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