import { useRef, useState } from "react";

const SimpleInput = (_) => {
    const nameRef = useRef();
    const [name, setName] = useState("");

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // validate inputs
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangeHandler}
                    value={name}
                    ref={nameRef}
                />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
