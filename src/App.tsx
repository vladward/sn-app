import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogType, MessageType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ProfileType} from "./components/Profile/MyPosts/MyPosts";


type AppPropsType = {
    posts: Array<ProfileType>
    newPostText: string
    addPost: () => void
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    updateNewPostText: (newText: string) => void
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
                           render={ () => <Profile newPostText={props.newPostText}
                                                   posts={props.posts}
                                                   updateNewPostText={props.updateNewPostText}
                                                   addPost={props.addPost}/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
