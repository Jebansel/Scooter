class ChargingStation {
    constructor(location, chargingStationName) {
        this.location = location
        this.chargingStationName = chargingStationName
        this.scooters = []
    }

    setChargingStationName(ChargingStationName) {
        chargingStationName = "Bank"
    }

    setLocation(location) {
        location = "Princes St, London EC3V 3LA"
    }

    spaceToDock() {

    }

    dockStatus(scooterReady) {
        if (readyToUse = true) {
            scooterReady = true
        }
        else {
            chargeScooter()
        }
    }


    chargeScooter(Scooter) {
        console.log("Starting to charge")

        return new Promise(resolve => {
            setTimeout(() => {
                Scooter.batteryCharge = 100
                Scooter.readyToUse = true
                resolve ("Charge COMPLETE")
            }, 6000)
        }) // 6 seconds to fully charge


    }

    checkBattery(readyToUse) {
        batteryCharge = 0

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