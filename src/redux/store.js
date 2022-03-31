const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, posts: 'Hello my name is Nasty', likeCounts: '12'},
                {id: 2, posts: 'Hi I am Yevhen', likeCounts: '8'},
                {id: 2, posts: 'Hi I am Yevhen', likeCounts: '8'},
                {id: 2, posts: 'Hi I am Yevhen', likeCounts: '8'}

            ],
            newPostText: ''
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
            ],
            newMessage: ''
        },
        friendsPage: {
            friends: [
                {id: 1, name: 'Anastasia'},
                {id: 2, name: 'Yevhen'},
                {id: 3, name: 'Dimych'},
            ]
        }
    },
    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                posts: store.getState().profilePage.newPostText,
                likeCounts: 0
            }
            this.getState().profilePage.posts.push(newPost);
            this.getState().profilePage.newPostText = ''
            this._callSubscriber(store)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this.getState().profilePage.newPostText = action.text;
            this._callSubscriber(store)

        } else if (action.type === 'ADD-NEW-MESSAGE') {
            let newMessage = {
                id: 6,
                messageText: store.getState().dialogsPage.newMessage,
                me: true
            }
            this.getState().dialogsPage.messages.push(newMessage)
            this.getState().dialogsPage.newMessage = ''
            this._callSubscriber(store)
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {

            this.getState().dialogsPage.newMessage = action.text
            this._callSubscriber(store)
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const onPostChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, text: text})

window.store = store
export default store
