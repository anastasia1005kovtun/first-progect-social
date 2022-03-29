import React from "react";

const state = {
    profilePage: {
        posts: [
            {id: 1, posts: 'Hello my name is Nasty', likeCounts: '12'},
            {id: 2, posts: 'Hi I am Yevhen', likeCounts: '8'},
            {id: 2, posts: 'Hi I am Yevhen', likeCounts: '8'},
            {id: 2, posts: 'Hi I am Yevhen', likeCounts: '8'}

        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Anastasia'},
            {id: 2, name: 'Yevhen'},
            {id: 3, name: 'Dimych'},
            {id: 4, name: 'Ira'},
            {id: 5, name: 'Sofia'},
            {id: 6, name: 'Ruslan'}
        ],
        messages: [
            {id: 1, messageText: 'Hello', me: true},
            {id: 2, messageText: 'How is you dog?', me: false},
            {id: 3, messageText: 'Good', me: false},
            {id: 4, messageText: 'Good', me: true},
            {id: 5, messageText: 'Good', me: false}
        ]
    },
    friendsPage: {
        friends:[
            {id: 1, name: 'Anastasia'},
            {id: 2, name: 'Yevhen'},
            {id: 3, name: 'Dimych'},
        ]
    }

}

export default state
