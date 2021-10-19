class ChargingStation{
    constructor (location, name ){
        this.location = location
        this.name = name
        this.scooters = []
    }

    setName(name){

    }

    setLocation(location){
        
    }

    spaceToDock(){

    }

    dockStatus(){
        
    }
    

    chargeScooter(batteryCharge){
        console.log("Starting to charge")

        await new Promise(resolve => setTimeout(resolve, 6000)) // 6 seconds to fully charge

        console.log("Charge COMPLETE")
        batteryCharge = 100
        readyToUse = true
    }

    checkBattery(readyToUse){
        batteryCharge = 0

        if(batteryCharge = 100){
            readyToUse =  true
        }
        else {
            readyToUse = false
            chargeScooter()
        }
        
    }

}