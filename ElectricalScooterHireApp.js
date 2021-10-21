const User = require("./User")
const Scooter = require("./Scooter")


class ElectricalScooterHireApp {
    
    constructor() {
        this.users = [] // usernames will be sent here from the USERS class
        this.scooters = [] // ScooterID's will be sent here from the Scooters class
        this.brokenScooters = [] // Scooters that are broken will be pushed to this array, where they will be fixed
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

        if (this.scooters.length === 0) {
            console.log("No scooters available")
        }
        else {
            console.log("This is your scooter:" + this.scooters[0])
            this.scootersInUse.push(this.scooters.shift())
        }


    }

    isBroken(){
        // Step 1: if ScooterIsBroken == true, then remove scooter from scootersInUse array
        // Step 2: push scooter into brokenScooters array from scootersInUse array
        
        scooterIsBroken = true
        this.brokenScooters.push(this.scootersInUse.shift())
        repairScooter() // once the broken scooter has been pushed, it will then call the repair scooter method
    }

    repairScooter(){
        // Use asynchronus to time how long it takes the scooter to be fixed (5 seconds)
        // Then once scooter is repaired, push scooter from brokenScooters array,  to scooters array
        return new Promise(resolve => {
            setTimeout(() => {
                this.scooterIsBroken = false
                this.batteryCharge = 100
                this.range = 100*0.32
                resolve("Scooter REPAIRED")
                this.scooters.push(this.brokenScooters.shift())
            }, 5000)
        }) // 5 seconds to fully charge and to repair


    }

    // checkUserLocation(){
    // Not entirely relevant right now
    // }
}
Scooter11234.repairScooter() // Asynchronous 
.then((str) => {
    console.log(str); 
  });

module.exports = ElectricalScooterHireApp
