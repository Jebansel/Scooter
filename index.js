const ChargingStation = require("./ChargingStation");
const ElectricalScooterHireApp = require("./ElectricCharging");
const Scooter = require("./Scooter");
const User = require("./User");

let scooterHireApp = new ElectricalScooterHireApp();
let chargingStation = new ChargingStation("Bank", "Princes St, London EC3V 3LA");
const Fred = scooterHireApp.validateUser("18", "Fred123", "Cows10") // Validates Fred as a correct user
scooterHireApp.Fred.addUser("Fred123");// Adds Fred to the users array
chargingStation.addScooter("Scooter10"); // Adds Scooter to scooters array



