import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../api/auth";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from '../FormControls/FormControls.module.css'

type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        login(formData.email, formData.password, formData.rememberMe)
            .then(() => {
                return <Redirect to={'/profile'}/>
            })
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </>
    )
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login"
                       name="email"
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder="Password"
                       name="password"
                       component={Input}
                       validate={[required]}
                       type="password"/>
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component={Input}/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
        </form>
    )
}
const ReduxLoginForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

export default connect(mapStateToProps, {login})(Login)