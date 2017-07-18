var carDealership = {
    carTypes:['sadan','electric-sadan','suv','electric-suv','truck','electric-truck'],
    carPrice:[18500,35000,45000,60000,56500,75000],
    carStock:[
            2,0,1,2,1,1
        ],
    displayCars:function(){
        console.log("*****************************\n"+this.carTypes + "\n" + this.carPrice + "\n"+ this.carStock);
    },
    carsOnHand:function(carWanted){
        if(this.carStock[carWanted] > 0){
            console.log("An "+this.carTypes[carWanted]  + " is stock with:" + this.carStock[carWanted]+ " avalible");
        }
        else{
            console.log("This car is not avalible");
        }
    },
    rentCar:function(carWanted){
        
        this.carsOnHand(carWanted);
        var input = prompt("Do you want to rent one " +this.carTypes[carWanted]+"?");
        if(input == "yes" || input=="y"){
            this.removeCar(carWanted);
            console.log("Car has been rented, enjoy your drive");
        }else{
            console.log("Please take your time in selected an auto");
        }
    },
    removeCar:function(carWanted){
        this.carStock.splice(carWanted,1);
    }
};