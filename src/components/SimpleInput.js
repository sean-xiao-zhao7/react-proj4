import useInput from "../hooks/use-input";

const SimpleInput = (_) => {
    const validator = (value) => value.trim() !== "";
    const {
        value: name,
        valueIsValid: nameValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        blurHandler: nameBlurHandler,
        resetName,
    } = useInput(validator);

    const {
        value: email,
        valueIsValid: emailValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        blurHandler: emailBlurHandler,
        resetEmail,
    } = useInput(validator);

    const submitHandler = (event) => {
        event.preventDefault();
        if (!nameValid || !emailValid) {
            return;
        }
        resetName();
        resetEmail();
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
            <div className={nameClasses}>
                <label htmlFor="email">Your email</label>
                <input
                    type="text"
                    id="email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={email}
                />
                {emailHasError && (
                    <p className="error-text">Email must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!nameValid || !emailValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
