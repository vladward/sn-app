import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {AppStateType} from "./redux/redux-store";
import PreLoader from "./components/PreLoader/PreLoader";
import {withSuspense} from "./HOC/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

export type AppMapDispatchToPropsType = {
    initializeApp: () => void
}
export type AppMapStateToPropsType = {
    initialized: boolean
}

export type AppPropsType = AppMapStateToPropsType & AppMapDispatchToPropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <div style={{margin: '0 auto'}}>
                <PreLoader/>
            </div>
        }
        return <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={withSuspense(DialogsContainer)}/>
                <Route path='/profile/:userId?'
                       render={withSuspense(ProfileContainer)}/>
                <Route path='/users'
                       render={withSuspense(UsersContainer)}/>

                <Route path='/login'
                       render={() => <Login/>}/>
            </div>
        </div>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
