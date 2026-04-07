import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";

function App() {
    /*const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });*/
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //handle form submission
    const onSubmit = (data) => {
        alert("form submitted successfully", data);
    };
    return (
        <div className="form-container">
            <h1 className="form-title">Form Validation</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="form-label">Username:</label>
                    <input
                        className="form-input"
                        type="text"
                        name="username"
                        {...register("username", {
                            required: "Username is required",
                            minLength: {
                                value: 4,
                                message:
                                    "Username must be at least 4 characters",
                            },
                        })}
                    />
                    {errors.username && (
                        <span className="error-message">
                            {errors.username.message}
                        </span>
                    )}
                </div>

                <div>
                    <label className="form-label">Email:</label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Please enter a valid email",
                            },
                        })}
                    />
                    {errors.email && (
                        <span className="error-message">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">Password:</label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message:
                                    "Password must be at least 8 characters",
                            },
                        })}
                    />
                    {errors.password && (
                        <span className="error-message">
                            {errors.password.message}
                        </span>
                    )}
                </div>

                <div>
                    <label className="form-label">Confirm Password:</label>
                    <input
                        className="form-input"
                        type="password"
                        name="confirmPassword"
                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                            validate: (value) =>
                                value ===
                                    document.getElementsByName("password")[0]
                                        .value || "Passwords do not match",
                        })}
                    />
                    {errors.confirmPassword && (
                        <span className="error-message">
                            {errors.confirmPassword.message}
                        </span>
                    )}
                </div>
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
export default App;
