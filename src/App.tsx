import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {ProfileType} from "./components/Profile/Profile";
import Dialogs, {DialogType, MessageType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


type AppPropsType = {
    addPost: (postMessage: string) => void
    dialogs: Array<DialogType>
    posts: Array<ProfileType>
    messages: Array<MessageType>
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={ () => <Dialogs dialogs={props.dialogs}
                                                   messages={props.messages}/> }/>
                    <Route path='/profile'
                           render={ () => <Profile posts={props.posts} addPost={props.addPost}/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
