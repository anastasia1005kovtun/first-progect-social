import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import New from "./components/New/New";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {


    return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar friends={props.state.friendsPage.friends}/>
                <div className={'app-wrapper-content'}>
                    {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                    <Route path={'/profile'}
                           render={() => <Profile state={props.state.profilePage}/>}
                    />
                    <Route path={'/dialogs'}
                           render={() => <Dialogs state={props.state.dialogsPage}/>}
                    />
                    {/*<Route path={'/profile'} component={Profile />*/}
                    <Route path={'/new'} component={New}/>
                    <Route path={'/music'} render={()=> <Music />}/>
                    <Route path={'/settings'} component={Settings}/>

                </div>
            </div>
    );
}

//https://preview.themeforest.net/item/join-up-buddypress-community-theme/full_screen_preview/30819113?_ga=2.191476716.755866794.1648056446-878224037.1647254742


export default App;
