class Scooter {
    static scooter = []
    constructor(scooterID) {
        this.scooterID = scooterID;
        this.battery = 100;
        this.isDocked = true;
        // this.range = this.battery * 0.32;
        this.constructor.scooter.push(this)
    }
    needToCharge() {
        if (this.battery <= 10) {
            console.log("This scooter need to be charged in less than 10 minutes");
        }
        else {
            console.log("lovely day");
        }
    }

    charge() {
        return new Promise(resolve => {
            setTimeout(() => {
                this.batteryCharge = 100
                resolve("Charge COMPLETE")

            }, 1000)
        }) // 1 seconds to fully charge
    }
    drainBattery() {
        return new Promise(resolve => {
            setTimeout(() => {
                this.batteryCharge = 50
                resolve("50% battery level")

            }, 3000)
        }) // 3 seconds to fully charge
    }

    

}
const Scooter1 = new Scooter (11234);
Scooter1.charge() // Asynchronous 
.then((str) => {
    console.log(str); 
  });   
module.exports = Scooter