import React from "react";
import { AuthTemplate } from "../../components/Templates";
import { LoginForm, RegisterForm } from "../../components/organisms";


const LoginPage = () =>{
    return (
        <AuthTemplate title = "Login" subtitle = "Create a new account">
            <RegisterForm/>
        </AuthTemplate>
    )

}
export default LoginPage;