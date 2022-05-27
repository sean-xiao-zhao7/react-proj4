import { useRef, useState } from "react";

const SimpleInput = (_) => {
    const nameRef = useRef();
    const [name, setName] = useState("");
    const [nameIsValid, setNameIsValid] = useState(true);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // validate inputs
        if (name.trim() === "") {
            setNameIsValid(false);
            return;
        }
        setNameIsValid(true);
    };

    const nameClasses = nameIsValid ? "form-control" : "form-control invalid";

    return (
        <form onSubmit={submitHandler}>
            <div className={nameClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangeHandler}
                    value={name}
                    ref={nameRef}
                />
                {!nameIsValid && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
