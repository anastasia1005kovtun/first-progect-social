import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postsData = [
    {id: 1, posts: 'Hello my name is Nasty', likeCounts: '12'},
    {id: 2, posts: 'Hi I am Yevhen', likeCounts: '8'},
    {id: 2, posts: 'Hi I am Yevhen', likeCounts: '8'},
    {id: 2, posts: 'Hi I am Yevhen', likeCounts: '8'}

]

let dialogs = [
    {id: 1, name: 'Anastasia'},
    {id: 2, name: 'Yevhen'},
    {id: 3, name: 'Dimych'},
    {id: 4, name: 'Ira'},
    {id: 5, name: 'Sofia'},
    {id: 6, name: 'Ruslan'}
]

let messages = [
    {id: 1, messageText: 'Hello'},
    {id: 2, messageText: 'How is you dog?'},
    {id: 3, messageText: 'Good'},
    {id: 4, messageText: 'Good'},
    {id: 5, messageText: 'Good'}
]

ReactDOM.render(
  <React.StrictMode>
    <App
        posts={postsData}
        d={dialogs}
        m={messages}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
