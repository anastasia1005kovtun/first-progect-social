let response = {
    _users: [
        {name: 'Nasty', password: 'sasada', age: 23},
        {name: 'Yevhen', password: 'sdsv ', age: 23},
        {name: 'Amigo', password: 'sadvsdvza', age: 3},
        {name: 'Ruslik', password: 'sadvsdvza', age: 0}

    ],
    getUsers() {
        return this._users
    },
    checkEnter(user) {
        if (user.age >= 18) {
            console.log(user.name + " уже дорослий")
        } else {
            console.log(user.name + ' у тебе молоко ще не обсохло')
        }
    },
    checkEntireUsersOnEnter() {
        this._users.forEach((user)=>{
            this.checkEnter(user)
        })
    }
}

const newUser = response.checkEntireUsersOnEnter()
console.log(newUser)