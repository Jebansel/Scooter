class Scooter {
    static scooter = []
    constructor(scooterID) {
        this.scooterID = scooterID;
        this.batteryCharge = 100;
        this.isDocked = true;
        this.range = 32;
        this.constructor.scooter.push(this)
    }
    needToCharge() {
        if (this.batteryCharge <= 10) {
            console.log("This scooter need to be charged in less than 10 minutes");
        }
        else {
            console.log("lovely day");
        }
    }
// this function need to be in ChargingStation
    charge() {
        return new Promise(resolve => {
            setTimeout(() => {
                this.batteryCharge = 100
                resolve("Charge COMPLETE")
                this.needToCharge()

            }, 1000)
        }) // 1 seconds to fully charge
    }
    drainBattery() {
        return new Promise(resolve => {
            setTimeout(() => {
                this.batteryCharge = 50
                resolve("50% battery level")
                console.log(Scooter);
                this.needToCharge()
            }, 3000)
        }) // 3 seconds to fully charge
    }
    batteryStatus() {
        return new Promise(resolve => {
            setTimeout(() => {
                this.batteryCharge = 5
                resolve("5% battery level")
                console.log(Scooter);
                this.needToCharge()
            }, 4000)
        }) // 4 seconds to fully charge
    }

    

}
const Scooter11234 = new Scooter (11234);
Scooter11234.charge() // Asynchronous 
.then((str) => {
    console.log(str); 
  });   
  Scooter11234.drainBattery() // Asynchronous 
.then((str) => {
    console.log(str); 
  });  
  Scooter11234.batteryStatus() // Asynchronous 
  .then((str) => {
      console.log(str); 
    });

console.log(Scooter)

// console.log(Scooter.drainBattery())
module.exports = Scooter