import React, {FC} from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../api/auth";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from '../common/FormControls/FormControls.module.css'

type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
    isAuth: boolean
}

const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
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
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
        </form>
    )
}
const ReduxLoginForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: LoginFormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
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

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)