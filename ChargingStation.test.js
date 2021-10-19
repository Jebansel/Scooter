const { TestWatcher } = require("@jest/core")
const ChargingStation = require("./ChargingStation")

const Bank = new ChargingStation("EC3V 3LA", "Bank")

describe ("Charging Station", ()=>{
    test("expect Charging Station's name to be Bank", () =>{
        expect(Bank.chargingStationName).toBe("Bank")
    })

    test("expect Charging Station's location to be EC3V 3LA", () =>{
        expect(Bank.location).toBe("EC3V 3LA")
    })

    test ("expect charging time to last 6 seconds", () =>{
        expect()
    })
})