import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import New from "./components/New/New";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import post from "./components/Profile/MyPosts/Posts/Post";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                    <Route path={'/dialogs'}
                           render={() =>
                               <Dialogs d={props.d}
                                        m={props.m}
                               />
                           }
                    />
                    <Route path={'/profile'}
                           render={() =>
                               <Profile
                                   posts={props.posts}
                               />
                           }
                    />
                    {/*<Route path={'/profile'} component={Profile />*/}
                    <Route path={'/new'} component={New}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

//https://preview.themeforest.net/item/join-up-buddypress-community-theme/full_screen_preview/30819113?_ga=2.191476716.755866794.1648056446-878224037.1647254742


export default App;
