import React from "react"
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC} from "../../redux/authReducer";

export type HeaderMapStateToPropsType = {
    isAuth: boolean
    login: string
}
export type HeaderMapDispatchToPropsType = {
    getAuthUserDataTC: () => void
}

export type HeaderContainerType = HeaderMapStateToPropsType & HeaderMapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer)