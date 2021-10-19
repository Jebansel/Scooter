class Scooter {
    constructor(scooterID, battery){
        this.scooterID = scooterID;
        this.battery = battery;
        this.isDocked = ""; 
        this.range = this.battery * 0.32;
    
        // this.conctructor.push(this);
    }
    needToCharge(){
        if(battery <= 10){
            throw new Error("Scooter need to be charged in 10 second")
        }
        else{
            this.battery = battery; 
        }
    }
    


}
let scooter1 = new Scooter( 113, 2)
console.log(scooter1);