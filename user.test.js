const User = require("./User");
user1 = new User ('John', 'Password1','18','London');
user2 = new User ('', 'Password2', '10', 'Manchester');

describe ('age', () => {
    test ('Should return true or false', () => {
        expect (user1.isOverAge()).toBe(true);
        expect (user2.isOverAge()).toBe(false);

})
       test ('Check if null', () => {
        expect (user2.checkDetails()).toBe(true);
        expect (user1.checkDetails()).toBe(false);
    })

})
