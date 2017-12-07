//defines how all charging stations work.
function ChargingDock(){

//Instance variables
    this.ports = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]; //finish from instructions
    this.leds = ["red", "red", "red", "red", "red", "red", "red", "red"]; //finish from instructions


//Instance Fucntions
    this.plug = function(dvc){
        for (let i = 0; i < this.ports.length; i++){
            if (this.ports[i] == undefined && this.leds[i] == "red")  {
                this.ports[i]=dvc;
                this.leds[i]="yellow";
                if (dvc.juice >0.99) {
                    this.leds[i]="green"
                }
            }
        }
    };

    this.unplug = function(dvcIdx){
        //type in here
    };

    this.chargeAll = function(min){
        //type in here
    };


}

//defines the testing code
function main(){
    let otherShit = new ChargingDock();
    ChargingDock.
}

//runs the main code
main();
