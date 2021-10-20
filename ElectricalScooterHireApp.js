const User = require("./User")

class ElectricalScooterHireApp {
    constructor() {
        this.users = [] // usernames will be sent here from the USERS class
        this.scooters = [] // ScooterID's will be sent here from the Scooters class
    }



    static validateUser(age, username, password) {
        if (age >= 18 && username !== "" && password !== "") {
            return true

        }

        return false
    }

    addUser(username) { // Adds the username to the users array
        if (validateUser(age, username, password)) {
            this.users.push(username)
        }
        console.log("Validation Failed")
    }

    addScooter(scooterID) { // Adds the scooterID to the scooters array
        this.scooters.push(scooterID)
    }

    checkForScooters() {
        // if there are charged scooters at the charging station, then their scooterID will be sent to the scooter array, where the user can see them

        // Step 1: check the scooters array for any scooters
        // Step 2: if scooters array is empty, tell user "No scooters available"
        // Step 3: otherwise, return scooter in position 1 in the array to the user
        // Step 4: Remove scooter from position 1 from the array

        if(this.scooters.length===0){
            console.log("No scooters available")
        }
        else{
            console.log("This is your scooter:" + this.scooters[0])
            this.scootersInUse.push(this.scooters.shift())
        }


    }

    // checkUserLocation(){
    // Not entirely relevant right now
    // }
}

module.exports = ElectricalScooterHireApp
