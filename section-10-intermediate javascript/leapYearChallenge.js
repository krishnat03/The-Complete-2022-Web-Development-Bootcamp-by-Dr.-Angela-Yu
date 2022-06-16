function isLeap(year) {
    
    if(year%4===0){
            if(year%400===0){
                console.log("Leap year.");
            }
            else if(year%100===0){
                console.log("Not leap year.");
            }
            else{
                console.log("Leap year.");
            }
    }
    else{
        console.log("Not leap year.");
    }   
}


isLeap(1948);