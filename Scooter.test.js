const Scooter = require("./Scooter")

const Scooter11234 = new Scooter (11234);

describe('promise timeout', () => {
    test("it should return the promise and resolve with 'Charge COMPLETE'", () => {
      // Jest requires us to "return" the function that produces the promise
      return (
        Scooter11234.charge()
          // resolve = success
          .then((result) => {
            expect(result).toBe('Charge COMPLETE');
          })
          // reject = catch
          .catch((error) => {
            expect(error).toBe('Scooter needs to be Charged');
          })
      );
    });
    test("it should return the promise and resolve with '50% battery level'", () => {
      // Jest requires us to "return" the function that produces the promise
      return (
        Scooter11234.drainBattery()
          // resolve = success
          .then((result) => {
            expect(result).toBe('50% battery level');
          })
          // reject = catch
          .catch((error) => {
            expect(error).toBe('keep going');
          })
      );
    });
    test("it should return the promise and resolve with '5% battery level'", () => {
      // Jest requires us to "return" the function that produces the promise
      return (
        Scooter11234.batteryStatus()
          // resolve = success
          .then((result) => {
            expect(result).toBe('5% battery level');
          })
          // reject = catch
          .catch((error) => {
            expect(error).toBe('you are done');
          })
      );
    });
  });
