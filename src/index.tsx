import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {RootStateType, subscribe} from "./redux/state";
import store from "./redux/state";

export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App dialogs={store._state.dialogsPage.dialogs}
                 messages={store._state.dialogsPage.messages}
                 posts={store._state.profilePage.posts}
                 newPostText={store._state.profilePage.newPostText}
                 addPost={store.addPost}
                 updateNewPostText={store.updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store._state)
store._state.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
