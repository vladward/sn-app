import React from "react"
import {Header} from "./Header";

class HeaderContainer extends React.Component<any, any> {
    render() {
        return (
            <Header />
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)