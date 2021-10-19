const User = require("./User");
user1 = new User ('John', 'Password1','18','London');
user2 = new User ('', 'Password2', '10', 'Manchester');
user3 = new User ('Harry', '', '25', 'Liverpool');

describe ('age', () => {
    test ('Should return true or false', () => {
        expect (user1.isOverAge()).toBe(true);
        expect (user2.isOverAge()).toBe(false);

})
    test ('Check if Username is Null', () => {
        expect (user2.checkUsername()).toBe(true);
        expect (user1.checkUsername()).toBe(false);
    })
    test ('Check if Password is Null', () => {
        expect (user3.checkPassword()).toBe(true);
    })

})
