import { useState } from "react";
import { useForm } from "react-hook-form";


export default function Auth() {
    const [mode, setMode] = useState("signup");
    const {register, handleSubmit, formState:{errors} } = useForm();

    function onSubmit() {
        alert("Signed Up")
    }

    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title">{mode === "signup"? "Sign Up" : "Login"}</h1>
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input className="form-input" type="email" id="email"
                            {...register("email", {required: "Email is required"})}
                            />
                            {errors.email && <span className="form-error">{errors.email.message}</span>}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className="form-input" type="password" id="password" 
                            {...register("password", {required: "Password is required", 
                            minLength: {value: 6, message: "Passwaord must be at least 6 charactoers" }})}/>
                            {errors.password && <span className="form-error">{errors.password.message}</span>}
                        </div>
                        <button type="submit" className="btn btn-primary btn-large">
                            {mode === "signup"? "Sign Up" : "Login"}
                        </button>
                    </form>
                    <div className="auth-switch">
                        {mode === "signup"
                        ? <p>You Aready Have An Account? <span className="auth-link" onClick={() => setMode("login")}>Login</span></p>
                        : <p>Don't Have An Account? <span className="auth-link" onClick={() => setMode("signup")}>Sign Up</span></p>}
                    </div>
                </div>
            </div>
        </div> 
    )
}
