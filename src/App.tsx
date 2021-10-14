import React from 'react';
import './App.css';
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <nav className='nav'>
              <div>Profile</div>
              <div>Messages</div>
              <div>News</div>
              <div>Settings</div>
            </nav>
          <div className='content'>
            <div>
              <img src="https://tinypng.com/images/social/website.jpg" alt=""/>
            </div>
          <div>
            ava + description
          </div>
          <div>
            My posts
            <div>
              New post
            </div>
            <div>
              <div>
                post 1
              </div>
              <div>
                post 2
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default App;
