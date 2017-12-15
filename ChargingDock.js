//defines how all charging stations work.
const Device = require("./Device.js");
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
                    this.leds[i]="green";
                }
                return this.ports[i];
            }
        }
    };

    this.unplug = function(dvcIdx){
        if (!(this.leds[dvcIdx] == "red")){
            let temp;
            temp = this.ports[dvcIdx];
            this.ports[dvcIdx] = undefined;
            this.leds[dvcIdx] = "red";

            return temp;
        }
    };

    this.chargeAll = function(min){
        for (let i = 0; i < this.leds.length; i++) {
            if (!(this.leds[i] == "red")) {
                this.ports[i].charge(min);

                if (this.ports[i].juice >= 0.99) {
                    this.leds[i] = "green";
                    this.ports[i].juice = 1;
                }

            }
        }
    };
}

//defines the testing code
function main(){
    let map = new Device("Moar Turts", 1500, 5000);
    let painted = new Device("Moar Ts", 2000, 6000);
    let turtleDock = new ChargingDock();

    otherShit.plug(map);
    otherShit.plug(painted);
    console.log(turtleDock);
    otherShit.unplug(0);
    otherShit.unplug(1);
    console.log(turtleDock);
}

//runs the main code
main();
