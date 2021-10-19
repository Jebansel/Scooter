class Scooter {
    static scooter = []
    constructor(scooterID, battery) {
        this.scooterID = scooterID;
        this.battery = battery;
        this.isDocked = "";
        this.range = this.battery * 0.32;
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
                // batteryCharge = 100
                // readyToUse = true
                resolve("Charge COMPLETE")
            }, 6000)
        }) // 6 seconds to fully charge
    }

}
const scooter1 = new Scooter(113, 11,)
console.log(scooter1);
console.log(scooter1.needToCharge())

module.exports = Scooter