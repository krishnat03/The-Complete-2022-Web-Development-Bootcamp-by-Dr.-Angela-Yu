
//object
var bellBoy1 = {
    name: "Timmy",
    age: 30,
    hasWorkPermit: true,
    languages: ["English", "Hindi"],
    moveSuitcase: function(){
        alert("May I take your suitcase?");
        pickUpSuitCase();
        move();
    }
}
//call method
bellBoy1.moveSuitcase();



// constructor function

function BellBoy (name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;    //methods
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function(){
        alert("May I take your suitcase?");
        pickUpSuitCase();
        move();
    }
}

function HouseKeeper (name, age, experienceInYears, cleaningRepertoire){
    this.name = name;
    this.age = age;
    this.experienceInYears = experienceInYears;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function(){
        alert("Cleaning In progress...");
    }
}

var houseKeeper1 = new HouseKeeper("marta", 30, 5, ["bathroom", "bedroom"]);
houseKeeper1.clean();
