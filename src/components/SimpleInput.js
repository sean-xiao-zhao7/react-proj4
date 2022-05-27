import useInput from "../hooks/use-input";

const SimpleInput = (_) => {
    const {
        value: name,
        valueIsValid: nameValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        blurHandler: nameBlurHandler,
        reset,
    } = useInput((value) => value.trim() !== "");

    const submitHandler = (event) => {
        event.preventDefault();

        // validate inputs
        if (nameValid) {
            return;
        }

        // reset form if successful
        reset();
    };

    const nameClasses = !nameHasError ? "form-control" : "form-control invalid";

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
                {nameHasError && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!nameValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
