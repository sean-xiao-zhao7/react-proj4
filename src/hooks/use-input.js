import { useState } from "react";

const useInput = (validateValue) => {
    const [value, setValue] = useState("");
    const [touched, setTouched] = useState(false);
    const valueIsValid = validateValue(value);
    const hasError = !valueIsValid && touched;

    const valueChangeHandler = (event) => {
        setValue(event.target.value);
    };

    const blurHandler = () => {
        setTouched(true);
    };

    const reset = () => {
        setValue("");
        setTouched(false);
    };

    console.log(hasError);

    return {
        value,
        valueIsValid,
        hasError,
        valueChangeHandler,
        blurHandler,
        reset,
    };
};

export default useInput;
