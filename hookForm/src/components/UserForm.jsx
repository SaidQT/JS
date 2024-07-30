import {useState} from 'react';
const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [containsErrors, setContainsErrors] = useState(false);

    const handleFirst = (e) => {
        const value = e.target.value;
        setFirstName(value);
        let newErrors = [...errors];
        if (value.length < 1) {
            newErrors[0] = "First name is required!";
        } else if (value.length < 2) {
            newErrors[0] = "First name must be at least 2 characters";
        } else {
            newErrors[0] = "";
        }
        setErrors(newErrors);
        setContainsErrors(newErrors.some(error => error !== ""));
    };

    const handleLast = (e) => {
        const value = e.target.value;
        setLastName(value);
        let newErrors = [...errors];
        if (value.length < 1) {
            newErrors[1] = "Last name is required!";
        } else if (value.length < 2) {
            newErrors[1] = "Last name must be at least 2 characters";
        } else {
            newErrors[1] = "";
        }
        setErrors(newErrors);
        setContainsErrors(newErrors.some(error => error !== ""));
    };

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        let newErrors = [...errors];
        if (value.length < 1) {
            newErrors[2] = "Email is required!";
        } else if (!value.includes("@")) {
            newErrors[2] = "Invalid email";
        } else {
            newErrors[2] = "";
        }
        setErrors(newErrors);
        setContainsErrors(newErrors.some(error => error != ""));
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        let newErrors = [...errors];
        if (value.length < 1) {
            newErrors[3] = "Password is required";
        } else if (value.length < 8) {
            newErrors[3] = "Password must be at least 8 characters";
        } else {
            newErrors[3] = "";
        }
        setErrors(newErrors);
        setContainsErrors(newErrors.some(error => error != ""));
    };

    const handleConf = (e) => {
        const value = e.target.value;
        setConfPassword(value);
        let newErrors = [...errors];
        if (value.length < 1) {
            newErrors[4] = "Confirm password is required";
        } else if (value !== password) {
            newErrors[4] = "Confirm password must match password";
        } else {
            newErrors[4] = "";
        }
        setErrors(newErrors);
        setContainsErrors(newErrors.some(error => error != ""));
    };

    const createUser = (e) => {
        e.preventDefault();
        if (!containsErrors) {
            const newUser = { firstName, lastName, email, password, confPassword };
            console.log(newUser);
        }
    };
    return (
        <>
            <form onSubmit={ createUser }>
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">
                    <label>First name: </label>
                    <input type="text" onChange={ handleFirst } />
                </div>
                <p class="text-danger">{errors[0]}</p>
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">
                    <label>Last name: </label>
                    <input type="text" onChange={ handleLast } />
                </div>
                <p class="text-danger">{errors[1]}</p>
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">
                    <label>Email Address: </label>
                    <input type="text" onChange={ handleEmail } />
                </div>
                <p class="text-danger">{errors[2]}</p>
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } />    
                </div>
                <p class="text-danger">{errors[3]}</p>
                <div className="d-flex justify-content-between bg-light py-3 px-4 my-3 text-black-50 rounded border border-1">
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ handleConf } /> 
                </div>
                <p class="text-danger">{errors[4]}</p>
                <button class= "btn btn-light" type="submit">Create User</button>
            </form>
        </>
    );
};

export default UserForm;