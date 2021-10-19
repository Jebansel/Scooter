class ChargingStation {
    constructor(location, chargingStationName) {
        this.location = location
        this.chargingStationName = chargingStationName
        this.scooters = [] // this will collect the scooters that are 100% charged and then push to the app
        this.lowBatteryScooters = [] // this will store scooters that are not 100%, a
    }

    setChargingStationName(ChargingStationName) {
        chargingStationName = "Bank"
    }

    setLocation(location) { // stores the location of the scooter
        location = "Princes St, London EC3V 3LA"
    }

    spaceToDock() {

    }

    dockStatus() {
        if (readyToUse = true) {
            addScooter() // calls addScooter method
        }
        else {
            chargeScooter()
        }
    }

    addScooter(scooterID){ // Adds the fully charged scooter to the scooters array
        this.scooters.push(scooterID)
    }

    chargeScooter(scooterID) { 
        console.log("Starting to charge")

        


    }

    checkBattery(readyToUse) {
        batteryCharge = 100

        if (batteryCharge = 100) {
            readyToUse = true

        }
        else {
            readyToUse = false
            chargeScooter()
        }

    }



}
module.exports = ChargingStation