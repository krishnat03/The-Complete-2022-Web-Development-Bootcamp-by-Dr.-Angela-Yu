var houseKeeper1 = {
    name: "marta",
    age: 30,
    experienceInYears: 5,
    cleaningRepertoire: ["bathroom","lobby","bedrooms"]
}



//constructor Function : the first letter of the function should be capatialized

function HouseKeeper (name, age, experienceInYears, cleaningRepertoire){
    this.name = name;
    this.age = age;
    this.experienceInYears = experienceInYears;
    this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper("marta", 30, 5, ["bathroom", "bedroom"]);

console.log(houseKeeper1.name);