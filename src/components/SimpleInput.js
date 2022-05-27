import { useState } from "react";

const SimpleInput = (_) => {
    const [name, setName] = useState("");
    const [nameTouched, setNameTouched] = useState(false);

    const nameIsValid = name.trim() !== "";
    const nameIsValidOverall = nameIsValid || !nameTouched;

    let formValid = false;
    if (nameIsValid) {
        formValid = false;
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const nameBlurHandler = () => {
        setNameTouched(true);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // validate inputs
        if (!nameIsValidOverall) {
            return;
        }

        // reset form if successful
        setName("");
        setNameTouched(false);
    };

    const nameClasses = nameIsValidOverall
        ? "form-control"
        : "form-control invalid";

    return (
        <form onSubmit={submitHandler}>
            <div className={nameClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={name}
                />
                {!nameIsValidOverall && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
