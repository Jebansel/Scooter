const User = require("./User");
const ElectricalScooterHireApp = require("./ElectricalScooterHireApp");
const ScooterHireApp = new ElectricalScooterHireApp();
const user1 = new User ('John', 'Password1',18,'London');
const user2 = new User ('', 'Password2', 10, 'Manchester');
const user3 = new User ('Harry', '', 25, 'Liverpool');

describe ('age', () => {
    test ('Should return true or false', () => {
        expect (ElectricalScooterHireApp.validateUser(user1.age, user1.username, user1.password)).toBe(true);


})


})
