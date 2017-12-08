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
        if (!(this.leds[dvcIdx] == "red")){
            let temp;
            this.ports[dvcIdx] = temp;
            this.ports[dvcIdx] = undefined;
            this.leds[dvcIdx] = "red";

            return temp;
        }
    };

    this.chargeAll = function(min){
        for (let i = 0; i < this.leds; i++) {
            if (!(this.leds[i] == "red")) {
                this.ports[i].charge(min);
            }
            if (dvc.juice > 0.99) {
                this.leds[i] = "green"
            }
        }
    };
}

//defines the testing code
function main(){
    let otherShit = new ChargingDock();
}

//runs the main code
main();
