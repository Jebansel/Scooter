class User {
    
    constructor(username, password, age, location) {
        this.username = username
        this.password = password
        this.age = age
        this.location = location
    }

    isOverAge() {
        return this.age >= 18 ? true : false
    }

    checkUsername() {
        return this.username == "";
        }
        // username would be what the user types, which then gets sent to the APP to be stored in the Users class. 

    checkPassword() {
        return this.password == "";
    }

}

module.exports = User

// once the user has met the requirements, and completed making their account, then their username will be sent to the users array in the APP