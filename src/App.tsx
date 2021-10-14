import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
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
