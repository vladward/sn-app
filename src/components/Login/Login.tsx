import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type LoginFormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (formData: LoginFormDataType) => {
        console.log(formData)
    }
    return (
        <>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </>
    )
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="Login" name="login" component="input"/>
                </div>
                <div>
                    <Field placeholder="Password" name="password" component="input"/>
                </div>
                <div>
                    <Field type="checkbox" name="rememberMe" component="input"/>
                    remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}
export const ReduxLoginForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)