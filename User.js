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

    checkDetails() {
        return this.username == "";
        }

}

module.exports = User
