function beer(){
    var bottlesOfBeer = 99;
    var totalBottlesOfBeer = bottlesOfBeer;
    while(bottlesOfBeer >= 0){
        if(bottlesOfBeer > 0){
            console.log(bottlesOfBeer + " bottles of beer on the wall," + bottlesOfBeer + " bottles of beer. Take 1down, pass it around, " + (bottlesOfBeer-1) + " bottles of beer on the wall.");  
        } else {
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + totalBottlesOfBeer + " bottles of beer on the wall.");
        }
        bottlesOfBeer =  bottlesOfBeer - 1;
    } 
}

beer();