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

    checkPassword() {
        return this.password == "";
    }

}

module.exports = User