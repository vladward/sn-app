import React from "react"
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC} from "../../redux/authReducer";
import {logout} from "../../api/auth";

export type HeaderMapStateToPropsType = {
    isAuth: boolean
    login: string
}
export type HeaderMapDispatchToPropsType = {
    getAuthUserDataTC: () => void
    logout: () => void
}

export type HeaderContainerType = HeaderMapStateToPropsType & HeaderMapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserDataTC, logout})(HeaderContainer)