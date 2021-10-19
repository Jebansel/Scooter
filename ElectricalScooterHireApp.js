const User = require("./User")

class ElectricalScooterHireApp {
    constructor() {
        this.users = [] // usernames will be sent here from the USERS class
        this.scooters = [] // ScooterID's will be sent here from the Scooters class
    }



    static validateUser(age,username,password) {
        if (age >= 18 && username !== "" && password !== "") {
            return true
            
        }

        return false
    }

    addUser(username) { // Adds the username to the users array
        if(validateUser(age,username, password)){
            this.users.push(username)
        }
        console.log("Validation Failed")
    }

    addScooter(scooterID) { // Adds the scooterID to the scooters array
        this.scooters.push(scooterID)
    }

    checkForScooters() {
        // if there are charged scooters at the charging station, then their scooterID will be sent to the scooter array, where then they can then be sent to the user


    }

    // checkUserLocation(){
    // Not entirely relevant right now
    // }






}

