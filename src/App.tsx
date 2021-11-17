import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={ () => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                   messages={state.dialogsPage.messages}
                                                   newMessageBody={state.dialogsPage.newMessageBody}
                                                   dispatch={props.store.dispatch.bind(props.store)}/> }/>
                    <Route path='/profile'
                           render={ () => <Profile newPostText={state.profilePage.newPostText}
                                                   posts={state.profilePage.posts}
                                                   dispatch={props.store.dispatch.bind(props.store)}/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
