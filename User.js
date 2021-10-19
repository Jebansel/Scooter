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
        return this.username == ""; {
        console.log('input username')
    }
       // console.log("Please input username");
        }
        //return (this.password == "") {
          //  console.log("Please input password");
       // }
        //return console.log("Login Complete");
   // }
}

module.exports = User